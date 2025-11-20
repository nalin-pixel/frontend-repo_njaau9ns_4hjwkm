import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const items = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: `Progetto ${i + 1}`,
  img: `https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop`
}))

export default function ParallaxShowcase() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], ['-5%', '10%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['10%', '-15%'])

  return (
    <section ref={ref} className="relative py-24 bg-black">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-12 gap-6">
          <motion.div style={{ y: y1 }} className="md:col-span-7 grid grid-cols-2 gap-6">
            {items.slice(0, 4).map((it) => (
              <Card key={it.id} it={it} />
            ))}
          </motion.div>
          <motion.div style={{ y: y2 }} className="md:col-span-5 grid grid-cols-2 gap-6">
            {items.slice(4).map((it) => (
              <Card key={it.id} it={it} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Card({ it }) {
  return (
    <motion.article
      initial={{ filter: 'blur(8px)', opacity: 0.2, y: 20 }}
      whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.8, ease: [0.2, 0.6, 0.0, 1] }}
      className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-white/5 border border-white/10"
    >
      <img src={it.img} alt="" className="absolute inset-0 w-full h-full object-cover scale-110 transition-transform duration-700 group-hover:scale-100" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/70" />
      <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
        <h3 className="text-white/90 font-medium tracking-tight">{it.title}</h3>
        <span className="text-white/70 text-xs uppercase">Apri</span>
      </div>
    </motion.article>
  )
}
