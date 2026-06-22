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
    <section className="relative flex min-h-[92vh] items-end overflow-hidden">
      {/* Blueprint engineering grid */}
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-[0.055]" />

      {/* Amber glow — upper left source */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-48 top-[8%] h-[72vh] w-[58vw] rounded-full bg-primary/22 blur-[180px]"
      />
      {/* Steel-blue — upper right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-[-8%] h-[50vh] w-[38vw] rounded-full bg-accent/14 blur-[150px]"
      />

      {/* Top scan-line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-28 pt-36 lg:px-8 lg:pb-36 lg:pt-44">
        {/* Eyebrow — uppercase mono tracking */}
        {block.eyebrow ? (
          <Reveal as="div" className="mb-10">
            <span className="eyebrow tracking-[0.28em] text-primary/85">{block.eyebrow}</span>
          </Reveal>
        ) : null}

        {/* H1 — left-aligned, extreme scale, two-tone */}
        <Reveal
          as="h1"
          delay={80}
          className="max-w-5xl font-black leading-[0.9] tracking-[-0.04em]"
        >
          {mainLines.length > 0 ? (
            <span className="block text-foreground text-[3rem] sm:text-[5.5rem] lg:text-[7.5rem] xl:text-[9rem]">
              {mainLines.join(' ')}
            </span>
          ) : null}
          <span className="block text-primary text-[3rem] sm:text-[5.5rem] lg:text-[7.5rem] xl:text-[9rem]">
            {lastLine}
          </span>
        </Reveal>

        {/* Subtitle */}
        {block.subtitle ? (
          <Reveal
            as="p"
            delay={180}
            className="mt-10 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg lg:mt-12 lg:text-xl"
          >
            {block.subtitle}
          </Reveal>
        ) : null}

        {/* CTAs */}
        <Reveal delay={260} className="mt-12 flex flex-wrap items-center gap-6">
          {block.primaryCta?.label ? (
            <Button
              asChild
              size="lg"
              className="h-12 rounded-none px-8 text-sm font-bold uppercase tracking-[0.1em]"
            >
              <Link href={localeHref(locale, block.primaryCta.href)}>
                {block.primaryCta.label}
              </Link>
            </Button>
          ) : null}
          {block.secondaryCta?.label ? (
            <Link
              href={localeHref(locale, block.secondaryCta.href)}
              className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.1em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {block.secondaryCta.label}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          ) : null}
        </Reveal>

        {/* Stats strip — anchored below CTAs */}
        <Reveal
          delay={360}
          className="mt-20 grid grid-cols-2 gap-x-14 gap-y-8 border-t border-border/25 pt-12 sm:grid-cols-4 lg:mt-28"
        >
          {(
            [
              { value: '10+', label: locale === 'en' ? 'Industries' : '行业覆盖' },
              { value: '50+', label: locale === 'en' ? 'Deployments' : '落地项目' },
              { value: '24/7', label: locale === 'en' ? 'Agent Runtime' : '智能体在线' },
              { value: '<48h', label: locale === 'en' ? 'Deploy Cycle' : '部署周期' },
            ] as const
          ).map((s, i) => (
            <div key={i}>
              <div className="text-[2.75rem] font-black leading-none tracking-[-0.03em] text-foreground sm:text-[3.5rem]">
                {s.value}
              </div>
              <div className="mt-3 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
