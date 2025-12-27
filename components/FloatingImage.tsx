'use client'

interface FloatingImageProps {
  src: string
  alt: string
  direction: 'right' | 'left' | 'down'
  className?: string
}

export default function FloatingImage({ src, alt, direction, className = '' }: FloatingImageProps) {
  const getAnimation = () => {
    switch (direction) {
      case 'right':
        return 'animate-float-right'
      case 'left':
        return 'animate-float-left'
      case 'down':
        return 'animate-float-down'
      default:
        return ''
    }
  }

  return (
    <div className={`absolute ${getAnimation()} ${className}`}>
      <img src={src} alt={alt} className="w-full h-auto opacity-80" />
    </div>
  )
}


