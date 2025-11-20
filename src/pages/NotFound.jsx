import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-8 text-center">
      <div>
        <h1 className="text-5xl font-semibold">404</h1>
        <p className="text-white/60 mt-2">Pagina non trovata</p>
        <Link to="/" className="inline-block mt-6 px-4 py-2 rounded bg-white text-black">Torna alla Home</Link>
      </div>
    </div>
  )
}
