import Navbar from '../components/Navbar'

export default function About() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pt-28 pb-24">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Chi Sono</h1>
        <p className="mt-6 text-white/70 max-w-2xl">
          Designer e sviluppatore con un focus su esperienze essenziali, ad alto contrasto e ad alto impatto. Credo in un minimalismo strutturale dove ogni elemento ha una ragione funzionale.
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {['Strategia', 'Design', 'Sviluppo'].map((k, i) => (
            <div key={i} className="border border-white/10 rounded-xl p-6 bg-white/5">
              <div className="text-white/40 text-sm">Competenza</div>
              <div className="text-xl font-medium mt-1">{k}</div>
              <p className="text-white/60 text-sm mt-3">Processi chiari, prototipazione rapida, art direction coerente.</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
