import '../globals.css'

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'

import { routing } from '@/i18n/routing'
import { ThemeProvider } from '@/components/theme-provider'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SITE_URL } from '@/lib/site'
import { fontSans, fontDisplay, fontMono } from '@/fonts'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: '研翌科技 · 工业智能生产力底座',
    template: '%s · 研翌科技',
  },
  description: '让专家知识成为组织资产。研翌科技以 AI Aided Engineering 为方向，构建可私有化部署、可追溯可审计的智能工作流决策底座 IndustrialX。',
  openGraph: {
    type: 'website',
    siteName: '研翌科技 · Yanyi',
    title: '研翌科技 · 工业智能生产力底座',
    description: '面向先进制造企业的智能生产力与智能工作流决策技术提供商。',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { languages: { zh: `${SITE_URL}/zh`, en: `${SITE_URL}/en` } },
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()
  setRequestLocale(locale)

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${fontSans.variable} ${fontDisplay.variable} ${fontMono.variable}`}
    >
      <head>
        {/* 读取 yanyi-theme 偏好；无存储值时默认 dark，零闪烁 */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('yanyi-theme');var d=!t||t==='dark';document.documentElement.classList.add(d?'dark':'light','js');}catch(e){document.documentElement.classList.add('dark','js');}})();",
          }}
        />
      </head>
      <body className="min-h-screen font-sans antialiased">
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            storageKey="yanyi-theme"
            disableTransitionOnChange
          >
            <div className="flex min-h-screen flex-col">
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
            </div>
            <div className="grain-overlay" aria-hidden />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
