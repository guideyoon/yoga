import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '오시는 길 | 요가 스튜디오',
  description: '요가 스튜디오 위치 및 교통편 안내입니다.',
}

export default function LocationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


