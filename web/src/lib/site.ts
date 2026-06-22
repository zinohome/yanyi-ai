export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.yanyi-ai.com'
).replace(/\/$/, '')

export const LOCALES = ['zh', 'en'] as const
