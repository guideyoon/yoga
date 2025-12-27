export interface Class {
  id: string
  name: string
  description: string
  target: string
  duration: string
}

export interface Instructor {
  id: string
  name: string
  image?: string
  qualification: string
  philosophy: string
}

export interface ContactFormData {
  type: '수업 문의' | '예약 문의' | '기타'
  name: string
  contact: string
  interestedClass?: string
  preferredDay?: string
  message?: string
}

