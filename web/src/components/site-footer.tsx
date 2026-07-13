import Link from 'next/link'
import { getLocale, getTranslations } from 'next-intl/server'
import { LogoMark } from '@/components/brand/logo'

export async function SiteFooter() {
  const t = await getTranslations('footer')
  const tn = await getTranslations('nav')
  const locale = await getLocale()
  const base = `/${locale}`

  const items = [
    { href: `${base}/technology`, label: tn('technology') },
    { href: `${base}/products`, label: tn('products') },
    { href: `${base}/solutions`, label: tn('solutions') },
    { href: `${base}/cases`, label: tn('cases') },
    { href: `${base}/about`, label: tn('about') },
    { href: `${base}/careers`, label: tn('careers') },
    { href: `${base}/contact`, label: tn('contact') },
  ]

  return (
    <footer className="border-t border-border/30 bg-transparent">
      {/* Manifesto tagline */}
      <div className="border-b border-border/20 py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.3em] text-muted-foreground/60">
            {locale === 'en'
              ? 'The next AI revolution is in the physical world.'
              : '下一场 AI 革命，发生在物理世界。'}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <LogoMark className="size-7" />
              <span className="eyebrow tracking-[0.18em] text-foreground text-[0.68rem]">YANYI AI</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t('slogan')}</p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-10 gap-y-3">
            {items.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                className="text-[0.78rem] font-medium uppercase tracking-[0.08em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {it.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Legal */}
        <div className="mt-12 flex flex-col gap-2 border-t border-border/20 pt-6 text-[0.7rem] text-muted-foreground/60">
          <p>© 2026 {t('company')}. {t('rights')}.</p>
        </div>
      </div>
    </footer>
  )
}
