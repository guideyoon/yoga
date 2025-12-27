'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import ScrollFadeIn from '@/components/ScrollFadeIn'
import ImageHover from '@/components/ImageHover'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const heroImages = ['/h1.png', '/h2.png', '/h3.png']

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000) // 5초마다 이미지 변경

    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <div className="pt-16">
      {/* 히어로 섹션 */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* 배경 이미지 - 하나씩 순차적으로 변경 */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
                currentImageIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={src}
                  alt={`요가 이미지 ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  quality={90}
                />
                {/* 오버레이 - 이미지 위에 약간의 그라데이션 */}
                <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/40" />
              </div>
            </div>
          ))}
        </div>
        
        {/* 추가 그라데이션 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-soft/20 via-transparent to-background/30 z-[1]" />
        
        <div
          className="relative z-10 text-center px-4 space-y-6 transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
          }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-text-dark leading-relaxed">
            몸과 마음이 함께 쉬는 시간
          </h1>
          <p className="text-lg md:text-xl text-text-light max-w-2xl mx-auto">
            천천히 호흡하고 자연스럽게 움직입니다
          </p>
          <p className="text-base md:text-lg text-text-muted">
            일상 속에서 나를 돌보는 요가 수련
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/classes"
              className="px-8 py-3 bg-primary text-white font-light rounded-sm hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
            >
              수업 안내
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-secondary text-secondary font-light rounded-sm hover:bg-secondary-soft transition-all duration-300 hover:border-secondary-dark"
            >
              예약 문의
            </Link>
          </div>
        </div>
      </section>

      {/* 스튜디오 소개 */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollFadeIn delay={0}>
            <div className="space-y-6">
              <h2 className="text-3xl font-light text-text-dark">
                요가 스튜디오에 오신 것을 환영합니다
              </h2>
              <p className="text-text leading-relaxed text-lg">
                우리는 요가를 통해 몸과 마음의 균형을 찾아가는 공간입니다.
                <br />
                전문적인 용어보다는 누구나 이해할 수 있는 언어로, 초보자도 부담 없이 시작할 수 있도록 안내합니다.
              </p>
              <p className="text-text-light leading-relaxed">
                호흡과 움직임에 집중하며, 일상의 피로를 풀고 나를 돌보는 시간을 만들어갑니다.
              </p>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay={200}>
            <ImageHover>
              <div className="relative h-[400px] bg-gradient-to-br from-natural-soft via-primary-soft to-secondary-soft rounded-sm overflow-hidden">
                {/* 이미지 플레이스홀더 - 실제 이미지로 교체 필요 */}
                <div className="absolute inset-0 flex items-center justify-center text-text-light">
                  <p className="text-sm">스튜디오 이미지</p>
                </div>
              </div>
            </ImageHover>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 클래스 미리보기 */}
      <section className="bg-background-warm py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light text-text-dark mb-4">클래스 안내</h2>
              <p className="text-text-light">다양한 수업으로 여러분을 기다립니다</p>
            </div>
          </ScrollFadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: '기초 요가', color: 'primary' },
              { name: '빈야사 요가', color: 'natural' },
              { name: '릴렉스 요가', color: 'secondary' },
              { name: '스트레칭 요가', color: 'accent' },
            ].map((item, index) => (
              <ScrollFadeIn key={item.name} delay={index * 100}>
                <Link
                  href="/classes"
                  className={`group block p-6 bg-white border transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${
                    item.color === 'primary'
                      ? 'border-primary/20 hover:border-primary/40'
                      : item.color === 'natural'
                      ? 'border-natural/20 hover:border-natural/40'
                      : item.color === 'secondary'
                      ? 'border-secondary/20 hover:border-secondary/40'
                      : 'border-accent/20 hover:border-accent/40'
                  }`}
                >
                  <h3
                    className={`text-lg font-light text-text-dark mb-2 transition-colors duration-300 ${
                      item.color === 'primary'
                        ? 'group-hover:text-primary'
                        : item.color === 'natural'
                        ? 'group-hover:text-natural'
                        : item.color === 'secondary'
                        ? 'group-hover:text-secondary'
                        : 'group-hover:text-accent'
                    }`}
                  >
                    {item.name}
                  </h3>
                  <p
                    className={`text-sm text-text-light transition-colors duration-300 ${
                      item.color === 'primary'
                        ? 'group-hover:text-primary/70'
                        : item.color === 'natural'
                        ? 'group-hover:text-natural/70'
                        : item.color === 'secondary'
                        ? 'group-hover:text-secondary/70'
                        : 'group-hover:text-accent/70'
                    }`}
                  >
                    자세히 보기 →
                  </p>
                </Link>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 예약 안내 */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <ScrollFadeIn>
          <h2 className="text-3xl font-light text-text-dark mb-6">
            함께 시작해볼까요?
          </h2>
          <p className="text-text-light mb-8 text-lg">
            수업에 대한 문의나 예약은 언제든지 편하게 남겨주세요.
            <br />
            확인 후 차분히 안내드리겠습니다.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-natural text-white font-light rounded-sm hover:from-primary-dark hover:to-natural-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            예약 문의하기
          </Link>
        </ScrollFadeIn>
      </section>
    </div>
  )
}

