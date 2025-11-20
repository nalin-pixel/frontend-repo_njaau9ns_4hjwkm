import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pt-28 pb-24">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Contatti</h1>
        <p className="text-white/60 mt-3 max-w-2xl">Parliamo del tuo progetto. Preferisci email, call o un messaggio veloce.</p>
        <form className="mt-10 grid md:grid-cols-2 gap-6 max-w-3xl">
          <Field label="Nome" type="text" placeholder="Il tuo nome" />
          <Field label="Email" type="email" placeholder="you@example.com" />
          <div className="md:col-span-2">
            <Field label="Messaggio" type="textarea" placeholder="Scrivi qui..." />
          </div>
          <motion.button whileTap={{ scale: 0.98 }} className="md:col-span-2 h-12 rounded-lg bg-white text-black font-medium tracking-wide">
            Invia
          </motion.button>
        </form>
      </main>
    </div>
  )
}

function Field({ label, type = 'text', placeholder }) {
  return (
    <label className="block">
      <div className="text-white/60 text-sm mb-2">{label}</div>
      {type === 'textarea' ? (
        <textarea placeholder={placeholder} className="w-full h-36 bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:ring-2 focus:ring-white/40" />
      ) : (
        <input type={type} placeholder={placeholder} className="w-full h-12 bg-white/5 border border-white/10 rounded-lg px-3 outline-none focus:ring-2 focus:ring-white/40" />
      )}
    </label>
  )
}
