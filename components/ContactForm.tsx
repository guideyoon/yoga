'use client'

import { useState } from 'react'
import { submitContact } from '@/app/actions/contact'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    type: '수업 문의' as '수업 문의' | '예약 문의' | '기타',
    name: '',
    contact: '',
    interestedClass: '',
    preferredDay: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await submitContact(formData)
      setIsSubmitted(true)
      setFormData({
        type: '수업 문의',
        name: '',
        contact: '',
        interestedClass: '',
        preferredDay: '',
        message: '',
      })
    } catch (error) {
      alert('문의 전송에 실패했습니다. 다시 시도해주세요.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-background-light p-12 text-center rounded-sm">
        <p className="text-lg text-text-dark mb-2">문의가 접수되었습니다.</p>
        <p className="text-text-light">
          확인 후 차분히 안내드리겠습니다.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="type" className="block text-sm font-light text-text-dark mb-2">
          문의 유형
        </label>
        <select
          id="type"
          value={formData.type}
          onChange={(e) =>
            setFormData({ ...formData, type: e.target.value as typeof formData.type })
          }
          className="w-full px-4 py-3 border border-accent/20 bg-white text-text focus:outline-none focus:border-accent transition-colors"
          required
        >
          <option value="수업 문의">수업 문의</option>
          <option value="예약 문의">예약 문의</option>
          <option value="기타">기타</option>
        </select>
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-light text-text-dark mb-2">
          이름
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 border border-accent/20 bg-white text-text focus:outline-none focus:border-accent transition-colors"
          required
        />
      </div>

      <div>
        <label htmlFor="contact" className="block text-sm font-light text-text-dark mb-2">
          연락처
        </label>
        <input
          type="tel"
          id="contact"
          value={formData.contact}
          onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
          className="w-full px-4 py-3 border border-accent/20 bg-white text-text focus:outline-none focus:border-accent transition-colors"
          required
        />
      </div>

      <div>
        <label htmlFor="interestedClass" className="block text-sm font-light text-text-dark mb-2">
          관심 클래스
        </label>
        <input
          type="text"
          id="interestedClass"
          value={formData.interestedClass}
          onChange={(e) => setFormData({ ...formData, interestedClass: e.target.value })}
          className="w-full px-4 py-3 border border-accent/20 bg-white text-text focus:outline-none focus:border-accent transition-colors"
          placeholder="예: 기초 요가, 빈야사 요가"
        />
      </div>

      <div>
        <label htmlFor="preferredDay" className="block text-sm font-light text-text-dark mb-2">
          방문 희망 요일
        </label>
        <input
          type="text"
          id="preferredDay"
          value={formData.preferredDay}
          onChange={(e) => setFormData({ ...formData, preferredDay: e.target.value })}
          className="w-full px-4 py-3 border border-accent/20 bg-white text-text focus:outline-none focus:border-accent transition-colors"
          placeholder="예: 평일 오전, 주말 오후"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-light text-text-dark mb-2">
          요청 사항
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={5}
          className="w-full px-4 py-3 border border-accent/20 bg-white text-text focus:outline-none focus:border-accent transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-3 bg-accent text-white font-light rounded-sm hover:bg-accent-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? '전송 중...' : '문의 남기기'}
      </button>
    </form>
  )
}

