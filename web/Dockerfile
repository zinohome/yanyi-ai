# syntax=docker/dockerfile:1
# 研翌科技官网生产镜像（Next.js 16 standalone + Payload CMS）
# 需在 next.config.ts 中设置 output: 'standalone'（已设置）。

FROM node:22.17.0-alpine AS base
# sharp / Payload 在 alpine 上需要 libc6-compat
RUN apk add --no-cache libc6-compat
ENV NEXT_TELEMETRY_DISABLED=1

# ---------- 依赖层 ----------
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN corepack enable pnpm && pnpm install --frozen-lockfile

# ---------- 构建层 ----------
FROM base AS builder
WORKDIR /app
# 开启 standalone 输出（next.config 依据该变量决定）
ENV NEXT_STANDALONE=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# 构建期不连接数据库（页面均为 force-dynamic；PAYLOAD_SECRET/DATABASE_URL 缺省为空字符串）
RUN corepack enable pnpm && pnpm run build

# ---------- 初始化层（一次性任务）----------
# auto-init 需要完整 TS 源码 + 全量 node_modules + tsx，而 standalone 运行层刻意
# 只保留 server.js 追踪到的依赖 —— 两者互斥，故拆成独立的一次性容器。
# NODE_ENV=development 是必需的：Payload 的 postgres schema push 在 production 下被硬性禁用
# （见 @payloadcms/db-postgres/connect.js），空库首启就靠它建表。
FROM builder AS init
WORKDIR /app
ENV NODE_ENV=development
ENV PAYLOAD_DB_PUSH=1
CMD ["node", "--import=tsx/esm", "scripts/auto-init.ts"]

# ---------- 运行层 ----------
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

# 公共目录
COPY --from=builder /app/public ./public

# standalone 产物（含被 tracing 的 node_modules 与 server.js）
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Payload 上传目录（建议在 compose 中挂载为持久化卷）
RUN mkdir -p /app/media && chown nextjs:nodejs /app/media

USER nextjs
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=40s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:'+(process.env.PORT||3000)+'/zh').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

# server.js 由 next build 的 standalone 输出生成
CMD ["node", "server.js"]
