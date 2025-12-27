'use client'

import { useState } from 'react'

interface ImageHoverProps {
  children: React.ReactNode
  className?: string
}

export default function ImageHover({ children, className = '' }: ImageHoverProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`transition-transform duration-700 ease-out ${
        isHovered ? 'scale-[1.02]' : 'scale-100'
      } ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  )
}



