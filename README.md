# 요가 스튜디오 홈페이지

자연스럽고 편안한 분위기의 요가 스튜디오 브랜드 웹사이트입니다.

## 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
npm start
```

## 프로젝트 구조

```
├── app/              # Next.js App Router 페이지
│   ├── about/       # 요가 소개
│   ├── classes/      # 클래스 안내
│   ├── contact/      # 예약 및 문의
│   ├── instructors/  # 강사 소개
│   ├── location/     # 오시는 길
│   └── page.tsx      # 홈 페이지
├── components/       # 재사용 컴포넌트
├── data/            # JSON 데이터 파일
├── types/           # TypeScript 타입 정의
└── prd.md           # 프로젝트 요구사항 문서
```

## 주요 기능

- ✅ 6개 페이지 구성 (홈, 요가 소개, 클래스 안내, 강사 소개, 예약 및 문의, 오시는 길)
- ✅ 모바일 우선 반응형 디자인
- ✅ 차분하고 편안한 디자인 시스템
- ✅ 문의 폼 (서버 액션 기반)

## 환경 변수

문의 폼 이메일 발송을 위해 `.env.local` 파일을 생성하고 다음 변수를 설정하세요:

```env
CONTACT_EMAIL=your-email@example.com
EMAIL_SERVICE=resend  # 또는 nodemailer, sendgrid 등
```

## 배포

Vercel에 배포하려면:

1. GitHub 저장소에 코드를 푸시합니다
2. [Vercel](https://vercel.com)에 프로젝트를 연결합니다
3. 환경 변수를 설정합니다
4. 자동으로 배포됩니다

## 참고사항

- 이미지 플레이스홀더는 실제 이미지로 교체해야 합니다
- 지도는 카카오맵 또는 네이버 지도 API를 연동해야 합니다
- 문의 폼 이메일 발송 기능은 실제 이메일 서비스를 연동해야 합니다



