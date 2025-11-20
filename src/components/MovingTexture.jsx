import { useEffect, useRef } from 'react'

export default function MovingTexture({ className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let rafId
    let t = 0
    function tick() {
      t += 0.0025
      const x = Math.sin(t) * 50
      const y = Math.cos(t * 1.3) * 50
      el.style.backgroundPosition = `${x}px ${y}px, ${-x}px ${-y}px`
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <div
      ref={ref}
      className={`absolute inset-0 opacity-[0.08] mix-blend-screen ${className}`}
      style={{
        backgroundImage:
          'radial-gradient(40px 40px at 20px 20px, rgba(255,255,255,0.7) 0, rgba(255,255,255,0) 60%), radial-gradient(60px 60px at 60px 60px, rgba(255,255,255,0.35) 0, rgba(255,255,255,0) 60%)',
        backgroundRepeat: 'repeat',
        backgroundSize: '120px 120px, 180px 180px',
      }}
    />
  )
}
