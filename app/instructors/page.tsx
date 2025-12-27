import { Metadata } from 'next'
import Image from 'next/image'
import instructorsData from '@/data/instructors.json'
import { Instructor } from '@/types'

export const metadata: Metadata = {
  title: '강사 소개 | 요가 스튜디오',
  description: '함께 수련하는 안내자, 요가 스튜디오 강사를 소개합니다.',
}

export default function InstructorsPage() {
  const instructors = instructorsData as Instructor[]

  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light text-text-dark mb-4">강사 소개</h1>
          <p className="text-text-light text-lg">
            함께 수련하는 안내자들입니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {instructors.map((instructor) => {
            // 강사별 이미지 매핑
            const imageMap: Record<string, string> = {
              instructor1: '/y1.png', // 김요가
              instructor2: '/y2.png', // 이명상
            }
            const imageSrc = imageMap[instructor.id] || '/y1.png'
            
            return (
              <div key={instructor.id} className="space-y-6">
                <div className="relative h-[400px] rounded-sm overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={`${instructor.name} 강사`}
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                  />
                </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-light text-text-dark">
                  {instructor.name}
                </h2>
                <p className="text-text-light text-sm">
                  {instructor.qualification}
                </p>
                <p className="text-text leading-relaxed">
                  {instructor.philosophy}
                </p>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

