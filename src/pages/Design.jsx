import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'

const works = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  title: `Design ${i + 1}`,
  img: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop',
}))

export default function Design() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pt-28 pb-24">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Design</h1>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((w) => (
            <motion.figure
              key={w.id}
              initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
              whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5"
            >
              <img src={w.img} alt="" className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-105" />
              <figcaption className="p-4 flex items-center justify-between">
                <div className="font-medium">{w.title}</div>
                <div className="text-white/60 text-xs">Apri</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </main>
    </div>
  )
}
