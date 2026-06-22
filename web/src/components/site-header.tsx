'use client'

import * as React from 'react'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { Menu, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { LocaleSwitcher } from '@/components/locale-switcher'
import { LogoMark } from '@/components/brand/logo'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const base = `/${locale}`
  const [open, setOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const items = [
    { href: `${base}/technology`, label: t('technology') },
    { href: `${base}/products`, label: t('products') },
    { href: `${base}/solutions`, label: t('solutions') },
    { href: `${base}/cases`, label: t('cases') },
    { href: `${base}/about`, label: t('about') },
  ]

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/40 bg-background/90 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href={base} className="flex items-center gap-2.5">
          <LogoMark className="size-7" />
          <span className="eyebrow text-foreground tracking-[0.15em] text-[0.7rem]">YANYI AI</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="text-[0.8rem] font-medium uppercase tracking-[0.1em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {it.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitcher locale={locale} />
          <Button
            asChild
            size="sm"
            className="hidden rounded-none px-5 text-[0.75rem] font-bold uppercase tracking-[0.12em] sm:inline-flex"
          >
            <Link href={`${base}/contact`}>{t('cta')}</Link>
          </Button>
          <button
            className="lg:hidden p-1.5 text-muted-foreground hover:text-foreground"
            aria-label="菜单 / Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-border/30 lg:hidden',
          open ? 'max-h-96' : 'max-h-0 border-t-0',
        )}
        style={{ transition: 'max-height 0.3s ease' }}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-0 px-6 py-4">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/20 py-3 text-[0.8rem] font-medium uppercase tracking-[0.1em] text-muted-foreground last:border-0 hover:text-foreground"
            >
              {it.label}
            </Link>
          ))}
          <Button asChild size="sm" className="mt-4 rounded-none w-full uppercase tracking-[0.12em] text-xs font-bold">
            <Link href={`${base}/contact`} onClick={() => setOpen(false)}>
              {t('cta')}
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
