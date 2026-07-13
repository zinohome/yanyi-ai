import type { StatsMetricsBlock as T } from '@/payload-types'
import { Section } from '@/components/section'
import { Reveal } from '@/components/reveal'

export function StatsMetrics({ block }: { block: T }) {
  const stats = block.stats ?? []
  return (
    <Section className="py-14 sm:py-16">
      {block.title ? (
        <Reveal as="p" className="eyebrow mb-12 tracking-[0.25em] text-primary/70">
          {block.title}
        </Reveal>
      ) : null}
      <div className="grid grid-cols-2 gap-x-12 gap-y-12 border-t border-border/25 pt-12 sm:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.id ?? i} delay={i * 80}>
            <div className="text-[3rem] font-black leading-none tracking-[-0.04em] text-foreground sm:text-[4rem] lg:text-[5rem]">
              {s.value}
            </div>
            <div className="mt-3 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {s.label}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
