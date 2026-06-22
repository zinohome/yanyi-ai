import * as React from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

export function Section({
  children,
  className,
  containerClassName,
  id,
}: {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  id?: string
}) {
  return (
    <section id={id} className={cn('relative py-24 sm:py-32', className)}>
      <div className={cn('mx-auto max-w-7xl px-6 lg:px-8', containerClassName)}>
        {children}
      </div>
    </section>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
}: {
  eyebrow?: string | null
  title?: string | null
  subtitle?: string | null
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-5',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {eyebrow ? (
        <Reveal as="span" className="eyebrow inline-flex items-center gap-3 text-primary tracking-[0.25em]">
          <span className="inline-block h-px w-8 bg-primary/60" />
          {eyebrow}
        </Reveal>
      ) : null}
      {title ? (
        <Reveal
          as="h2"
          delay={60}
          className="max-w-3xl text-balance font-black tracking-[-0.03em] leading-[1.05] text-[2.25rem] sm:text-[3rem] lg:text-[3.75rem]"
        >
          {title}
        </Reveal>
      ) : null}
      {subtitle ? (
        <Reveal
          as="p"
          delay={120}
          className={cn(
            'max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg',
            align === 'center' && 'mx-auto',
          )}
        >
          {subtitle}
        </Reveal>
      ) : null}
    </div>
  )
}
