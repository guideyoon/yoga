import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: '예약 및 문의 | 요가 스튜디오',
  description: '수업 문의 및 예약을 남겨주세요. 확인 후 차분히 안내드리겠습니다.',
}

export default function ContactPage() {
  return (
    <div className="pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-text-dark mb-4">예약 및 문의</h1>
          <p className="text-text-light text-lg">
            문의해주시면 확인 후 차분히 안내드리겠습니다
          </p>
        </div>

        <div className="bg-background-light p-6 mb-8 rounded-sm">
          <p className="text-text text-center">
            예약은 우선제로 진행됩니다. 문의 주시면 가능한 시간을 안내해드립니다.
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  )
}



