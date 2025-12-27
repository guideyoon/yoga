import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 따뜻한 크림 및 웜 베이지
        background: {
          DEFAULT: '#F8F6F2', // 약간 더 따뜻한 베이지
          light: '#FDFBF7',
          warm: '#F5F1EB', // 따뜻한 베이지
        },
        // 따뜻한 그레이 톤
        text: {
          DEFAULT: '#6B6B5F', // 따뜻한 그레이
          dark: '#4A4A42', // 따뜻한 다크 그레이
          light: '#9A9A8F',
          muted: '#B5B5AA',
        },
        // Primary: 세이지 그린 (자연, 평화)
        primary: {
          DEFAULT: '#8FA68A', // 세이지 그린
          dark: '#6B8567',
          light: '#B5C9B0',
          soft: '#D4E2D1',
        },
        // Secondary: 부드러운 라벤더 (명상, 평온)
        secondary: {
          DEFAULT: '#B8A9C9', // 라벤더 그레이
          dark: '#9B8AA8',
          light: '#D4C8DD',
          soft: '#E8E0ED',
        },
        // Accent: 따뜻한 코랄/피치 (따뜻함, 활력)
        accent: {
          DEFAULT: '#D4A5A5', // 소프트 코랄
          dark: '#B88686',
          light: '#E8C4C4',
          soft: '#F2D9D9',
        },
        // 자연스러운 올리브 그린
        natural: {
          DEFAULT: '#A8B89A', // 올리브 그린
          dark: '#8A9A7C',
          light: '#C4D4B6',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

