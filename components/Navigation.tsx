'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navItems = [
  { href: '/', label: '홈' },
  { href: '/about', label: '요가 소개' },
  { href: '/classes', label: '클래스 안내' },
  { href: '/instructors', label: '강사 소개' },
  { href: '/contact', label: '예약 및 문의' },
  { href: '/location', label: '오시는 길' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-light text-text-dark hover:text-primary transition-colors">
            요가 스튜디오
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-light transition-colors ${
                  pathname === item.href
                    ? 'text-primary border-b border-primary'
                    : 'text-text hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden relative p-2 rounded-full transition-all duration-300 ${
              isOpen
                ? 'bg-primary text-white'
                : 'bg-primary-soft text-primary hover:bg-primary hover:text-white'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="메뉴"
          >
            <svg
              className="w-6 h-6 transition-transform duration-300"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 space-y-3 border-t border-primary/20 bg-gradient-to-b from-primary-soft/30 to-background">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-sm font-light rounded-sm transition-all duration-300 ${
                  pathname === item.href
                    ? 'bg-primary text-white shadow-md'
                    : 'text-text hover:bg-primary/10 hover:text-primary'
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

