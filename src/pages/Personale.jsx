import Navbar from '../components/Navbar'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const gallery = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  title: `Serie ${i + 1}`,
  img: 'https://images.unsplash.com/photo-1517697471339-4aa32003c11a?q=80&w=1600&auto=format&fit=crop',
}))

export default function Personale() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const depth1 = useTransform(scrollYProgress, [0, 1], ['-10%', '15%'])
  const depth2 = useTransform(scrollYProgress, [0, 1], ['15%', '-20%'])

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main ref={ref} className="relative mx-auto max-w-6xl px-4 pt-28 pb-24">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Personale</h1>
        <p className="text-white/60 mt-3 max-w-2xl">Parallax emozionale: profondità, sfocatura in entrata e focus progressivo.</p>

        <div className="relative mt-12 grid md:grid-cols-12 gap-6">
          <motion.div style={{ y: depth1 }} className="md:col-span-7 grid grid-cols-2 gap-6">
            {gallery.slice(0, 6).map((g) => (
              <Item key={g.id} g={g} />
            ))}
          </motion.div>
          <motion.div style={{ y: depth2 }} className="md:col-span-5 grid grid-cols-2 gap-6">
            {gallery.slice(6).map((g) => (
              <Item key={g.id} g={g} />
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  )
}

function Item({ g }) {
  return (
    <motion.div
      initial={{ filter: 'blur(10px)', opacity: 0.1, y: 24 }}
      whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.35 }}
      transition={{ duration: 0.8, ease: [0.2, 0.6, 0.0, 1] }}
      className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 bg-white/5"
    >
      <img src={g.img} alt="" className="absolute inset-0 w-full h-full object-cover scale-110 transition-all duration-700 group-hover:scale-100" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/70" />
      <div className="absolute bottom-0 left-0 right-0 p-3 text-sm">{g.title}</div>
    </motion.div>
  )
}
