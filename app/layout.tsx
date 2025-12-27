import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '요가 스튜디오 | 몸과 마음이 함께 쉬는 시간',
  description: '일상 속에서 나를 돌보는 요가 수련. 자연스럽고 편안한 분위기의 요가 스튜디오입니다.',
  openGraph: {
    title: '요가 스튜디오 | 몸과 마음이 함께 쉬는 시간',
    description: '일상 속에서 나를 돌보는 요가 수련',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}



