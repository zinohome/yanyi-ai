import localFont from 'next/font/local'

/**
 * Self-hosted variable fonts (next/font/local).
 * woff2 files committed to repo — zero CDN dependency, no layout shift.
 * CSS variables are unchanged from yanyi-health so @theme mappings still work:
 *   --font-manrope → now serves Inter (body)
 *   --font-fraunces → now serves Space Grotesk (display/headings)
 *   --font-jetbrains → JetBrains Mono unchanged (labels/data)
 */

export const fontSans = localFont({
  src: './Inter-var.woff2',
  variable: '--font-manrope',
  weight: '100 900',
  display: 'swap',
  preload: true,
  fallback: ['ui-sans-serif', 'system-ui', '-apple-system', 'PingFang SC', 'Microsoft YaHei', 'Hiragino Sans GB', 'sans-serif'],
})

export const fontDisplay = localFont({
  src: './SpaceGrotesk-var.woff2',
  variable: '--font-fraunces',
  weight: '300 700',
  display: 'swap',
  preload: true,
  fallback: ['ui-sans-serif', 'system-ui', '-apple-system', 'PingFang SC', 'Microsoft YaHei', 'sans-serif'],
})

export const fontMono = localFont({
  src: './JetBrainsMono-var.woff2',
  variable: '--font-jetbrains',
  weight: '400 500',
  display: 'swap',
  preload: false,
  fallback: ['ui-monospace', 'SFMono-Regular', 'monospace'],
})
