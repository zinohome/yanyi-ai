import type { ValuePropsBlock as T } from '@/payload-types'
import { Section, SectionHeader } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { Icon } from '@/lib/icons'

export function ValueProps({ block }: { block: T }) {
  const items = block.items ?? []
  return (
    <Section>
      <SectionHeader title={block.title} subtitle={block.subtitle} />
      <div className="mt-10 grid gap-0 border border-border/30 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <Reveal
            key={it.id ?? i}
            delay={i * 60}
            className="group relative border-b border-r border-border/30 p-8 transition-colors last:border-b-0 hover:bg-card/60 [&:nth-child(3n)]:border-r-0 [&:nth-last-child(-n+3)]:border-b-0"
          >
            {/* Amber left accent on hover */}
            <div className="absolute inset-y-0 left-0 w-[2px] bg-primary/0 transition-all duration-300 group-hover:bg-primary/70" />

            <div className="mb-6 flex size-10 items-center justify-center text-primary">
              <Icon name={it.icon} className="size-5" />
            </div>
            <h3 className="text-[1.05rem] font-bold tracking-[-0.01em] text-foreground">
              {it.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {it.description}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
