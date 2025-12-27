import { Metadata } from 'next'
import Link from 'next/link'
import classesData from '@/data/classes.json'
import { Class } from '@/types'

export const metadata: Metadata = {
  title: '클래스 안내 | 요가 스튜디오',
  description: '기초 요가, 빈야사 요가, 릴렉스 요가, 스트레칭 요가 등 다양한 수업을 안내합니다.',
}

export default function ClassesPage() {
  const classes = classesData as Class[]

  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light text-text-dark mb-4">클래스 안내</h1>
          <p className="text-text-light text-lg">
            다양한 수업으로 여러분을 기다립니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {classes.map((classItem) => (
            <div
              key={classItem.id}
              className="bg-white border border-accent/10 p-8 space-y-4 hover:border-accent/30 transition-colors"
            >
              <div className="flex justify-between items-start">
                <h2 className="text-2xl font-light text-text-dark">
                  {classItem.name}
                </h2>
                <span className="text-sm text-text-light">{classItem.duration}</span>
              </div>
              <p className="text-text leading-relaxed">{classItem.description}</p>
              <div className="pt-4 border-t border-accent/10">
                <p className="text-sm text-text-light">
                  <span className="text-accent">추천 대상:</span> {classItem.target}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-background-light p-8 rounded-sm">
          <p className="text-text mb-4">
            수업 시간표 및 가격 정보는 문의해주시면 상세히 안내드립니다.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-accent text-white font-light rounded-sm hover:bg-accent-dark transition-colors"
          >
            문의하기
          </Link>
        </div>
      </div>
    </div>
  )
}

