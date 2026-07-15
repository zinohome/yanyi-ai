# 生产部署 · AWS + 1Panel + docker compose

面向运维智能体的执行手册。**按顺序执行，每步都有验证命令；验证不通过就停下，不要继续下一步。**

| 项 | 值 |
|---|---|
| 应用名 / compose project | `yanyi-ai` |
| 数据目录（宿主机） | `/data/yanyi-ai` |
| 对外端口（宿主机） | `8000` → 容器 `3000` |
| 编排文件 | `web/docker-compose.prod.yml` |
| 配置文件 | `web/.env`（与编排文件同目录，需自行创建） |
| 服务 | `postgres` → `init`（一次性）→ `web` |

---

## 0. 前置检查

```bash
docker --version          # 需 Docker 20.10+
docker compose version    # 需 Compose v2（本编排用到 service_completed_successfully）
df -h /data               # 建议预留 ≥ 10G
```

`docker compose version` 必须是 **v2**。若只有 v1（`docker-compose` 带横线），先升级，否则 `init` 的依赖条件不被支持，`web` 会在空库上启动并报错。

---

## 1. 取得代码

```bash
mkdir -p /opt/yanyi-ai && cd /opt/yanyi-ai
git clone https://github.com/zinohome/yanyi-ai.git .
cd web        # 编排文件在 web/ 目录下，后续命令都在此执行
```

**验证：**
```bash
ls docker-compose.prod.yml Dockerfile   # 两个文件都应存在
```

---

## 2. 创建数据目录

```bash
mkdir -p /data/yanyi-ai/postgres /data/yanyi-ai/media
```

**验证：**
```bash
ls -ld /data/yanyi-ai/postgres /data/yanyi-ai/media   # 两个目录都应存在
```

> `media` 目录容器内以 uid 1001 写入。若后续上传报权限错误，执行 `chown -R 1001:1001 /data/yanyi-ai/media`。

---

## 3. 创建配置文件 `.env`

**必须命名为 `.env`，且必须与 `docker-compose.prod.yml` 同目录。** 它同时承担两个职责，两者机制不同、缺一不可：

1. **compose 变量插值**（`${POSTGRES_PASSWORD}`、`${DATA_DIR}`、`${WEB_PORT}`）—— compose 只自动读取同目录的 `.env`
2. **注入容器内部**（`DATABASE_URL`、`PAYLOAD_SECRET` …）—— 由编排里的 `env_file` 完成

> ⚠️ **不要用 `--env-file` 把配置放到别处。** `--env-file` 只替换第 1 条（插值来源），
> 编排里的 `env_file:` 仍按 compose 文件所在目录去找 `.env`。结果是插值用了新文件、
> 容器却拿到旧文件（或找不到），`init` 会以退出码 1 失败，日志里是数据库连不上。
> 两个名字几乎一样、作用域完全不同——这是本部署最容易踩的一脚。

先生成两个随机密钥：

```bash
cd /opt/yanyi-ai/web
PG_PW=$(openssl rand -hex 16)
PAYLOAD_SECRET=$(openssl rand -base64 32)
```

写入 `.env`：

```bash
cat > .env <<EOF
# ---- 路径与端口 ----
DATA_DIR=/data/yanyi-ai
WEB_PORT=8000

# ---- 数据库 ----
# POSTGRES_* 供 compose 插值创建数据库；DATABASE_URL 供应用连接。
# 三者的用户名/密码/库名必须完全一致，否则应用连不上。
# host 必须是 compose 服务名 postgres，不是 localhost。
POSTGRES_USER=yanyi
POSTGRES_PASSWORD=${PG_PW}
POSTGRES_DB=yanyi_ai
DATABASE_URL=postgresql://yanyi:${PG_PW}@postgres:5432/yanyi_ai

# ---- 应用 ----
PAYLOAD_SECRET=${PAYLOAD_SECRET}
NEXT_PUBLIC_SITE_URL=https://www.yanyi-ai.com

# ---- 后台管理员（首次初始化时创建）----
SEED_ADMIN_EMAIL=admin@yanyi-ai.com
SEED_ADMIN_PASSWORD=请改成强密码

# ---- 邮件通知（可选）----
# 留空则表单留资不发邮件，功能本身不受影响。
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
SMTP_FROM=
NOTIFY_EMAIL=contact@yanyi-ai.com
EOF

chmod 600 .env
```

**务必手动修改 `SEED_ADMIN_PASSWORD`**，不要使用占位值。

**验证：**
```bash
docker compose -f docker-compose.prod.yml config >/dev/null && echo "配置有效"
```
若报 `required variable POSTGRES_PASSWORD is missing`，说明 `.env` 不在当前目录或文件名不对。

---

## 4. 构建并启动

```bash
docker compose -f docker-compose.prod.yml up -d --build
```

首次构建约 3–8 分钟。启动顺序是编排保证的：`postgres` 健康 → `init` 跑完并成功退出 → `web` 才启动。

**`up -d` 返回后 `web` 还没就绪**，healthcheck 有 40 秒宽限期。先等它 healthy，**不要立刻 curl**——那时会得到 `000`，看着像失败其实只是没起完：

```bash
# 等 web 变 healthy，最多 60 秒
CID=$(docker compose -f docker-compose.prod.yml ps -q web)
for i in $(seq 1 30); do
  st=$(docker inspect "$CID" --format '{{.State.Health.Status}}' 2>/dev/null)
  echo "web: ${st:-starting}"
  [ "$st" = "healthy" ] && break
  sleep 2
done
```

**验证（三条都要满足）：**

```bash
# ① init 必须是 Exited (0)。非 0 就是初始化失败，别往下走。
docker compose -f docker-compose.prod.yml ps -a --format '{{.Service}}\t{{.Status}}'

# ② init 日志末尾应有 “[auto-init] ✅ 完成”
docker compose -f docker-compose.prod.yml logs init | tail -5

# ③ 站点应返回 307（根路径重定向到 /zh）
curl -s -o /dev/null -w '%{http_code}\n' http://127.0.0.1:8000/
curl -s -o /dev/null -w '%{http_code}\n' http://127.0.0.1:8000/zh     # 期望 200
curl -s -o /dev/null -w '%{http_code}\n' http://127.0.0.1:8000/admin  # 期望 200
```

预期状态：

```
postgres    Up (healthy)
init        Exited (0)      ← 一次性任务，退出是正常的，不要重启它
web         Up (healthy)
```

> `init` 显示 `Exited (0)` 是**成功**，不是故障。它只在每次 `up` 时跑一遍就退出。

**验证内容已灌入：**
```bash
docker compose -f docker-compose.prod.yml exec postgres \
  psql -U yanyi -d yanyi_ai -t -c "SELECT 'products='||count(*) FROM products;"
# 期望 products=10
```

---

## 5. 1Panel 反向代理

在 1Panel 中创建网站，反代到本机 8000：

- 网站 → 创建网站 → 反向代理
- 域名：`www.yanyi-ai.com`
- 代理地址：`http://127.0.0.1:8000`
- 建好后在「网站 → HTTPS」申请并开启 Let's Encrypt 证书

**验证：**
```bash
curl -s -o /dev/null -w '%{http_code}\n' -H 'Host: www.yanyi-ai.com' http://127.0.0.1/
```

> 若不用 1Panel 反代，Caddy 等价配置：
> ```
> www.yanyi-ai.com {
>     reverse_proxy 127.0.0.1:8000
> }
> ```

**安全组**：AWS 安全组只放行 80/443。**8000 不要对公网开放**，它只供本机反代访问。

---

## 6. 登录后台确认

浏览器打开 `https://www.yanyi-ai.com/admin`，用 `.env` 里的 `SEED_ADMIN_EMAIL` / `SEED_ADMIN_PASSWORD` 登录。**首次登录后立即修改密码。**

---

## 日常运维

### 更新代码后重新部署

```bash
cd /opt/yanyi-ai && git pull
cd web && docker compose -f docker-compose.prod.yml up -d --build
```

**重要：新代码不会自动更新已有内容。** 站点文案存在数据库里，不在镜像里。`init` 检测到库非空就会跳过灌入，以保护后台的人工编辑。

### 用代码里的最新文案覆盖数据库

**这会清空所有内容并重灌，后台的人工编辑会全部丢失。执行前先备份。**

```bash
docker compose -f docker-compose.prod.yml run --rm -e SEED_FORCE=1 init
```

不需要重启 `web`：页面是 force-dynamic，每次请求实时读库，跑完即生效。

**验证：**
```bash
docker compose -f docker-compose.prod.yml logs init | tail -2   # 应有 “[auto-init] ✅ 完成”
curl -s http://127.0.0.1:8000/zh/products | grep -c 'IndustriaX'  # 应 > 0
```

### 备份

```bash
# 数据库。--clean --if-exists 必须加：让备份自带 DROP 语句，否则恢复时
# 所有对象都已存在，CREATE/COPY 会全部报错，数据根本进不去（见下）。
docker compose -f docker-compose.prod.yml exec -T postgres \
  pg_dump -U yanyi --clean --if-exists yanyi_ai | gzip > /data/yanyi-ai/backup-$(date +%F).sql.gz

# 上传文件
tar czf /data/yanyi-ai/media-$(date +%F).tar.gz -C /data/yanyi-ai media
```

**验证备份可用**（不验证的备份等于没有备份）：
```bash
gunzip -c /data/yanyi-ai/backup-$(date +%F).sql.gz | grep -c '^DROP'
# 必须 > 0。若为 0，说明备份时漏了 --clean，恢复时会静默失败。
```

### 恢复

```bash
# 把文件名换成实际的备份文件
gunzip -c /data/yanyi-ai/backup-2026-07-15.sql.gz | \
  docker compose -f docker-compose.prod.yml exec -T postgres psql -U yanyi -d yanyi_ai 2>&1 | tee /tmp/restore.log

# 必须检查报错数——恢复会「看起来成功」，实际什么都没做
grep -c ERROR /tmp/restore.log     # 期望 0
```

**恢复后务必核对数据，不要只看命令有没有报错：**
```bash
docker compose -f docker-compose.prod.yml exec -T postgres \
  psql -U yanyi -d yanyi_ai -t -c "SELECT 'products='||count(*) FROM products;"
```

> **为什么强调这个**：不带 `--clean` 的备份恢复到一个已有数据的库时，psql 会吐出几百条
> `already exists` 错误然后继续，最后库里还是**旧数据**。而 `count(*)` 看着是对的
> （因为旧数据还在），极易被误判为恢复成功。真出事故时这会要命。

### 查看日志

```bash
docker compose -f docker-compose.prod.yml logs -f web
docker compose -f docker-compose.prod.yml logs init     # 排查初始化问题
```

### 停止 / 启动

```bash
docker compose -f docker-compose.prod.yml stop
docker compose -f docker-compose.prod.yml up -d
```

### 改了 `.env` 之后

必须 **`up -d` 重建容器**，`restart` 不生效：

```bash
docker compose -f docker-compose.prod.yml up -d
```

`env_file` 是在容器**创建时**求值并烘进容器的，之后就与文件解耦了。`restart` 只是重启
既有容器的进程，环境变量还是旧的——改完密码却发现没生效，通常就是这个原因。

---

## 故障排查

| 现象 | 原因与处理 |
|---|---|
| `init` 退出码非 0 | 看 `logs init`。多为 `DATABASE_URL` 与 `POSTGRES_*` 不一致，或 host 写成了 `localhost` 而非 `postgres`。 |
| `web` 起不来，日志报表不存在 | `init` 没成功。先修 `init`，再 `up -d`。 |
| `required variable POSTGRES_PASSWORD is missing` | `.env` 不在 `docker-compose.prod.yml` 同目录，或被改了名。compose 只认 `.env`。 |
| 8000 端口被占 | 改 `.env` 里的 `WEB_PORT`，同步改 1Panel 反代地址。 |
| 上传图片失败 / 权限错误 | `chown -R 1001:1001 /data/yanyi-ai/media` |
| 重新部署后内容还是旧的 | 预期行为，见上文「用代码里的最新文案覆盖数据库」。 |
| 站点 502 / curl 返回 000 | `web` 尚未 healthy。healthcheck 有 40s 宽限期，刚 `up` 完属正常，等它变 healthy 再测（见第 4 步的等待脚本）。 |

---

## 绝对不要做

- **不要执行 `docker compose -f docker-compose.prod.yml down -v`** —— `-v` 会删卷。本编排数据在 bind mount 上虽不受影响，但仍属高危操作，没有任何日常场景需要它。
- **不要手动删除 `/data/yanyi-ai/postgres`** —— 那是全站数据。
- **不要把 8000 端口暴露到公网** —— 它没有 TLS，只供本机反代。
- **不要把 `.env` 提交进 git** —— 已在 `.gitignore` 中，含数据库密码与 `PAYLOAD_SECRET`。

---

## 附：本地验证记录

本手册的每条命令都在本地用真实的 docker compose 执行过（2026-07-15）：

- 镜像构建成功，运行层 391MB（standalone 产物）
- 空库首启：`init` 建表 + 灌入 10 款产品 / 7 个页面 + 创建管理员，退出码 0
- 8000 端口：`/` → 307 → `/zh` 200、`/en` 200、`/zh/products` 200、`/admin` 200
- 数据落盘：postgres 54MB 真实写入宿主机 bind mount
- 重启幂等：`down` 再 `up`，后台的人工编辑完好保留，`init` 正确跳过灌种子
- `SEED_FORCE=1`：确认覆盖人工编辑回到代码文案，且**无需重启 web** 即生效
- 备份 / 恢复：先破坏数据（删 7 个页面 + 改名产品），再用 `--clean` 备份恢复，
  0 报错、数据完整还原

演练中真实踩到、并已写入本手册的坑：

| 坑 | 现象 |
|---|---|
| `pg_dump` 漏 `--clean` | 恢复产生 661 条 `already exists` 错误，数据**根本没进去**，而 `count(*)` 因旧数据还在而看着正常——最危险的一个 |
| 用 `--env-file` 指向别处 | `init` 退出码 1，容器拿到的 `DATABASE_URL` 仍是旧文件里的值 |
| `up -d` 后立刻 `curl` | 得到 `000`，实为 healthcheck 40s 宽限期未过 |
| 改了 `.env` 后 `restart` | 不生效，`env_file` 在容器创建时即已烘入 |

> 本地若同机还跑着开发用的 `docker-compose.yml`，注意两者 project name 同为 `yanyi-ai`，
> 会互相顶掉容器；本地并行验证需加 `-p 别的名字`。生产服务器上只有本编排，不存在此问题。
