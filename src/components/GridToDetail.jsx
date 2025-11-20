import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const projects = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  title: `Case Study ${i + 1}`,
  subtitle: 'Esperienza, Design, Strategia',
  image: `https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=1600&auto=format&fit=crop`,
  description:
    'Una breve descrizione del progetto, gli obiettivi e il risultato finale con focus su semplicità e impatto.'
}))

export default function GridToDetail() {
  const [active, setActive] = useState(null)

  return (
    <section className="relative bg-black py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-white text-2xl md:text-3xl font-semibold tracking-tight mb-8">Selezione Progetti</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.button
              key={p.id}
              layoutId={`card-${p.id}`}
              onClick={() => setActive(p)}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 text-left"
            >
              <motion.img
                layoutId={`image-${p.id}`}
                src={p.image}
                alt=""
                className="h-56 w-full object-cover"
              />
              <div className="p-4">
                <motion.h3 layoutId={`title-${p.id}`} className="text-white font-medium">
                  {p.title}
                </motion.h3>
                <p className="text-white/60 text-sm">{p.subtitle}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.article
              layoutId={`card-${active.id}`}
              className="relative max-w-4xl w-full overflow-hidden rounded-2xl bg-neutral-900 border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img layoutId={`image-${active.id}`} src={active.image} alt="" className="h-96 w-full object-cover" />
              <div className="p-6">
                <motion.h3 layoutId={`title-${active.id}`} className="text-white text-2xl font-semibold">
                  {active.title}
                </motion.h3>
                <p className="text-white/70 mt-2 max-w-3xl">{active.description}</p>
                <div className="mt-6 grid grid-cols-3 gap-4 text-white/70 text-sm">
                  <div>
                    <div className="text-white/40">Ruolo</div>
                    <div>Design, Sviluppo</div>
                  </div>
                  <div>
                    <div className="text-white/40">Anno</div>
                    <div>2025</div>
                  </div>
                  <div>
                    <div className="text-white/40">Cliente</div>
                    <div>Confidenziale</div>
                  </div>
                </div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
