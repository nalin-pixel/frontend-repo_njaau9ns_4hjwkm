import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/design', label: 'Design' },
  { to: '/personale', label: 'Personale' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="text-white font-semibold tracking-tight text-lg">Portfolio</Link>
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-sm uppercase tracking-widest transition-colors ${isActive ? 'text-white' : 'text-white/60 hover:text-white'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <button onClick={() => setOpen(!open)} className="md:hidden text-white/80">
            <Menu />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="px-4 py-3 flex flex-col gap-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-sm uppercase tracking-widest ${isActive ? 'text-white' : 'text-white/70'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
