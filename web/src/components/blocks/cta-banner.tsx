import Link from 'next/link'
import type { CtaBannerBlock as T } from '@/payload-types'
import { Section } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { localeHref } from '@/lib/utils'

export function CtaBanner({ block, locale }: { block: T; locale: string }) {
  return (
    <Section className="py-24 sm:py-32">
      <Reveal className="relative overflow-hidden border border-border/30 bg-card/40 px-8 py-20 sm:px-16 sm:py-28">
        {/* Blueprint grid */}
        <div className="tech-grid pointer-events-none absolute inset-0 opacity-[0.08]" />
        {/* Amber glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-0 h-full w-[50%] opacity-60 blur-[140px]"
          style={{ background: 'radial-gradient(circle, var(--primary) 0%, transparent 65%)' }}
        />
        {/* Top scan-line */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

        <div className="relative max-w-3xl">
          {/* Eyebrow */}
          <p className="eyebrow mb-8 tracking-[0.28em] text-primary/80">
            {locale === 'en' ? 'GET STARTED' : '立即开始'}
          </p>
          <h2 className="font-black tracking-[-0.03em] leading-[1.05] text-[2rem] sm:text-[3rem] lg:text-[4rem] text-foreground text-balance">
            {block.title}
          </h2>
          {block.subtitle ? (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {block.subtitle}
            </p>
          ) : null}
          <div className="mt-10 flex flex-wrap items-center gap-6">
            {block.primaryCta?.label ? (
              <Button asChild size="lg" className="rounded-none px-8 text-sm font-bold uppercase tracking-[0.1em]">
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
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
