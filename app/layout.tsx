import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'SSC스파르타 | 강원도 청년의 합격 파트너',
  description:
    '원주·춘천·충주에서 노량진 프로그램 그대로. 공무원 합격반·지역특화 취업반·관리형 자습까지 — SSC스파르타가 합격을 설계합니다.',
  keywords: ['공무원 학원', '강원도 공무원', '원주 공무원', '커넥츠프랩', '공단기', 'SSC스파르타'],
  openGraph: {
    title: 'SSC스파르타 | 강원도 청년의 합격 파트너',
    description: '원주·춘천·충주에서 노량진 프로그램 그대로. 강원도 밀착 관리로 합격을 완성합니다.',
    locale: 'ko_KR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
