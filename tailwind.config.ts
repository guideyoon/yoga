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
        // 오프화이트 및 웜 베이지
        background: {
          DEFAULT: '#FAF9F7',
          light: '#FDFCFB',
        },
        // 연한 다크 그레이
        text: {
          DEFAULT: '#5A5A5A',
          dark: '#3A3A3A',
          light: '#8A8A8A',
        },
        // 세이지 그린 또는 소프트 브라운 (포인트 컬러)
        accent: {
          DEFAULT: '#9CAF88', // 세이지 그린
          dark: '#7A8F6A',
          light: '#B8C9A8',
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

