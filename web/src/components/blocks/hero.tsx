import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { HeroBlock as HeroBlockType } from '@/payload-types'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { localeHref } from '@/lib/utils'

export function Hero({ block, locale }: { block: HeroBlockType; locale: string }) {
  const lines = block.title.split('\n')
  const mainLines = lines.slice(0, -1)
  const lastLine = lines[lines.length - 1]!

  return (
    <section className="relative flex min-h-[68vh] items-end overflow-hidden">
      {/* Blueprint engineering grid — tuned per theme for equal visibility */}
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-[0.4] dark:opacity-[0.75]" />

      {/* Amber glow — upper left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-64 top-[0%] h-[85vh] w-[65vw] rounded-full bg-primary/18 blur-[200px]"
      />
      {/* Steel-blue accent — upper right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-[-12%] h-[55vh] w-[42vw] rounded-full bg-accent/12 blur-[160px]"
      />

      {/* Decorative large background numeral */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[4%] top-[12%] select-none font-black text-[28vw] leading-none tracking-[-0.06em] text-foreground/[0.025] sm:text-[22vw]"
        style={{ fontVariantNumeric: 'tabular-nums' }}
      >
        AI
      </div>

      {/* Top scan-line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-14 pt-10 lg:px-8 lg:pb-16 lg:pt-12">
        {/* Eyebrow */}
        {block.eyebrow ? (
          <Reveal as="div" className="mb-7 flex items-center gap-4">
            <span className="h-px w-10 bg-primary/50" />
            <span className="eyebrow tracking-[0.28em] text-primary/80">{block.eyebrow}</span>
          </Reveal>
        ) : null}

        {/* H1 — typographic tension: light weight main + black weight amber accent */}
        <Reveal as="h1" delay={80} className="max-w-5xl">
          {/* Main line — ultra thin, enormous. Weight contrast IS the design. */}
          {mainLines.length > 0 ? (
            <span
              className="block font-light leading-[0.88] tracking-[-0.02em] text-foreground/90 text-[2.6rem] sm:text-[4.5rem] lg:text-[6rem] xl:text-[7.5rem]"
            >
              {mainLines.join(' ')}
            </span>
          ) : null}

          {/* Accent line — max weight, violet gradient glow */}
          <span
            className="mt-3 block font-black leading-[0.88] tracking-[-0.04em] text-[2.6rem] sm:mt-5 sm:text-[4.5rem] lg:mt-6 lg:text-[6rem] xl:text-[7.5rem]"
            style={{
              background:
                'linear-gradient(105deg, var(--color-primary) 0%, color-mix(in oklch, var(--color-primary) 80%, white) 55%, var(--color-primary) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 48px color-mix(in oklch, var(--color-primary) 55%, transparent))',
            }}
          >
            {lastLine}
          </span>
        </Reveal>

        {/* Subtitle */}
        {block.subtitle ? (
          <Reveal
            as="p"
            delay={200}
            className="mt-12 max-w-md text-base leading-loose text-muted-foreground sm:text-lg lg:text-xl"
          >
            {block.subtitle}
          </Reveal>
        ) : null}

        {/* CTAs */}
        <Reveal delay={280} className="mt-12 flex flex-wrap items-center gap-6">
          {block.primaryCta?.label ? (
            <Button
              asChild
              size="lg"
              className="h-12 rounded-none px-8 text-sm font-bold uppercase tracking-[0.12em]"
            >
              <Link href={localeHref(locale, block.primaryCta.href)}>
                {block.primaryCta.label}
              </Link>
            </Button>
          ) : null}
          {block.secondaryCta?.label ? (
            <Link
              href={localeHref(locale, block.secondaryCta.href)}
              className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {block.secondaryCta.label}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          ) : null}
        </Reveal>

        {/* Stats strip */}
        <Reveal
          delay={380}
          className="mt-10 grid grid-cols-2 gap-x-14 gap-y-8 border-t border-border/20 pt-8 sm:grid-cols-4 lg:mt-14"
        >
          {(
            [
              { value: 'AAE', label: locale === 'en' ? 'AI Aided Engineering' : 'AI 辅助工程' },
              { value: locale === 'en' ? 'Local' : '私有化', label: locale === 'en' ? 'Data stays in-plant' : '数据不出厂' },
              { value: locale === 'en' ? 'Audit' : '可追溯', label: locale === 'en' ? 'Auditable output' : '过程可审计' },
              { value: locale === 'en' ? 'Reuse' : '可复用', label: locale === 'en' ? 'Knowledge as asset' : '沉淀为资产' },
            ] as const
          ).map((s, i) => (
            <div key={i}>
              <div className="font-display text-2xl font-black leading-none tracking-[-0.02em] text-foreground sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-3 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
