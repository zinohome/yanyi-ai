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
  description: '让专家知识成为组织资产。研翌科技以 AI Aided Engineering 为方向，构建可私有化部署、可追溯可审计的智能工作流决策底座 IndustriaX。',
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
        {/*
          自动模式（未手动选择过）按时间取主题：06:00–18:59 亮色，19:00–05:59 暗色。
          脚本必须把结果写回 yanyi-theme —— next-themes 挂载时读的就是这个键，
          写了它才会与本脚本涂上的 class 一致，ThemeToggle 的时间同步随之成为 no-op，
          否则白天会先闪一下 dark 再跳成 light。
        */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{if(localStorage.getItem('yanyi-theme-manual')!=='1'){var h=new Date().getHours();localStorage.setItem('yanyi-theme',(h>=19||h<6)?'dark':'light');}var t=localStorage.getItem('yanyi-theme');document.documentElement.classList.add(t==='light'?'light':'dark','js');}catch(e){document.documentElement.classList.add('dark','js');}})();",
          }}
        />
      </head>
      <body className="min-h-screen font-sans antialiased">
        <NextIntlClientProvider>
          {/* defaultTheme 仅在 localStorage 不可用时兜底：正常路径由上方脚本按时间写入 yanyi-theme */}
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
