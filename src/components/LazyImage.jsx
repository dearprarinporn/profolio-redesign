import { useState, useEffect, useRef } from 'react'

function LazyImage({ src, alt, className = '', placeholder = null }) {
  const [imageSrc, setImageSrc] = useState(placeholder)
  const [isLoading, setIsLoading] = useState(true)
  const imgRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = new Image()
            img.src = src
            img.onload = () => {
              setImageSrc(src)
              setIsLoading(false)
            }
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '50px' }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [src])

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      <img
        src={imageSrc}
        alt={alt}
        className="w-full h-full object-cover transition-opacity duration-500"
      />
    </div>
  )
}

export default LazyImage
