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
    default: '衍绎 AI · 工业智能体平台',
    template: '%s · 衍绎 AI',
  },
  description: '让工厂更聪明，让决策更精准。工业 AI 闭环平台——感知·决策·执行·进化。',
  openGraph: {
    type: 'website',
    siteName: '衍绎 AI · Yanyi AI',
    title: '衍绎 AI · 工业智能体平台',
    description: '工业 AI 闭环平台，赋能制造业感知·决策·执行·进化。',
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
