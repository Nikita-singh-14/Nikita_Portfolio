import { useEffect, useRef } from "react"

export default function FullPageParticles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const particles = []
    const PARTICLE_COUNT = Math.min(120, Math.floor(width * height / 80000))

    function rand(min, max) {
      return Math.random() * (max - min) + min
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: rand(-0.3, 0.3),
        vy: rand(-0.2, 0.2),
        r: rand(0.6, 2.2),
        hue: Math.random() * 360,
      })
    }

    let mouse = { x: -9999, y: -9999 }

    function onMove(e) {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    function onLeave() {
      mouse.x = -9999
      mouse.y = -9999
    }

    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseleave", onLeave)

    function resize() {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener("resize", resize)

    let rafId
    function draw() {
      ctx.clearRect(0, 0, width, height)

      // subtle background vignette
      const g = ctx.createRadialGradient(width * 0.2, height * 0.2, 0, width, height, Math.max(width, height))
      g.addColorStop(0, "rgba(16,24,39,0.06)")
      g.addColorStop(1, "rgba(2,6,23,0)")
      ctx.fillStyle = g
      ctx.fillRect(0, 0, width, height)

      // draw particles
      for (let p of particles) {
        p.x += p.vx
        p.y += p.vy

        if (p.x < -10) p.x = width + 10
        if (p.x > width + 10) p.x = -10
        if (p.y < -10) p.y = height + 10
        if (p.y > height + 10) p.y = -10

        // draw glow
        ctx.beginPath()
        ctx.fillStyle = `hsla(${Math.floor(p.hue)}, 70%, 60%, 0.07)`
        ctx.arc(p.x, p.y, p.r * 3.5, 0, Math.PI * 2)
        ctx.fill()

        ctx.beginPath()
        ctx.fillStyle = `hsla(${Math.floor(p.hue)}, 70%, 60%, 0.9)`
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }

      // connect nearby particles and mouse
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 120) {
            ctx.strokeStyle = `rgba(124,58,237,${(120 - d) / 380})`
            ctx.lineWidth = 0.6
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }

        // connect to mouse if close
        const mdx = a.x - mouse.x
        const mdy = a.y - mouse.y
        const md = Math.sqrt(mdx * mdx + mdy * mdy)
        if (md < 160) {
          ctx.strokeStyle = `rgba(56,189,248,${(160 - md) / 300})`
          ctx.lineWidth = 0.7
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
          // mild attraction
          a.vx += (mouse.x - a.x) * 0.0004
          a.vy += (mouse.y - a.y) * 0.0004
        }
      }

      rafId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseleave", onLeave)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10"
      style={{ width: "100%", height: "100%" }}
    />
  )
}
