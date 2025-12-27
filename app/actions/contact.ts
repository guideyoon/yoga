'use server'

import { ContactFormData } from '@/types'

export async function submitContact(data: ContactFormData) {
  // TODO: 실제 이메일 발송 로직 구현
  // 예: nodemailer, Resend, SendGrid 등 사용
  
  // 현재는 콘솔에만 출력 (개발용)
  console.log('문의 접수:', data)
  
  // 환경변수에서 이메일 설정 확인
  // const emailService = process.env.EMAIL_SERVICE
  // const emailTo = process.env.CONTACT_EMAIL
  
  // 실제 구현 시:
  // await sendEmail({
  //   to: emailTo,
  //   subject: `[요가 스튜디오] ${data.type} - ${data.name}`,
  //   body: formatContactEmail(data),
  // })
  
  // 임시로 성공 응답
  return { success: true }
}



