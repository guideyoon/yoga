'use client'

import { useEffect, useState } from 'react'

export default function LocationPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const address = '서울특별시 강남구 테헤란로 123'
  const encodedAddress = encodeURIComponent(address)

  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-text-dark mb-4">오시는 길</h1>
          <p className="text-text-light text-lg">
            편안하게 찾아오실 수 있도록 안내드립니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* 지도 영역 */}
          <div className="space-y-6">
            <div className="relative h-[400px] w-full rounded-sm overflow-hidden shadow-md bg-background-light">
              {isMounted ? (
                <iframe
                  src={`https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="요가 스튜디오 위치"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary-soft via-natural-soft to-secondary-soft flex items-center justify-center">
                  <p className="text-text-light">지도를 불러오는 중...</p>
                </div>
              )}
            </div>
            {/* 모바일에서 지도 링크 제공 */}
            <div className="md:hidden text-center">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-primary text-white font-light rounded-sm hover:bg-primary-dark transition-colors"
              >
                구글맵 앱에서 열기
              </a>
            </div>
          </div>

          {/* 주소 및 안내 */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-light text-text-dark mb-4">주소</h2>
              <p className="text-text leading-relaxed">
                서울특별시 강남구 테헤란로 123
                <br />
                요가 스튜디오 3층
              </p>
            </div>

            <div>
              <h2 className="text-xl font-light text-text-dark mb-4">대중교통</h2>
              <div className="space-y-2 text-text">
                <p>
                  <span className="text-primary">지하철:</span> 2호선 강남역 3번 출구 도보 5분
                </p>
                <p>
                  <span className="text-natural">버스:</span> 강남역 정류장 하차
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-light text-text-dark mb-4">주차 안내</h2>
              <p className="text-text leading-relaxed">
                건물 지하 주차장 이용 가능합니다.
                <br />
                주차 공간이 제한적이니 가능하면 대중교통을 이용해주세요.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-light text-text-dark mb-4">운영 시간</h2>
              <div className="space-y-2 text-text">
                <p>평일: 오전 9시 - 오후 9시</p>
                <p>주말: 오전 10시 - 오후 6시</p>
                <p className="text-text-light text-sm mt-4">
                  * 수업 시간은 별도 문의 바랍니다
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

