import Navbar from '../components/Navbar'
import MovingTexture from '../components/MovingTexture'

export default function Layout({ children }) {
  return (
    <div className="relative bg-black text-white min-h-screen">
      <Navbar />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <MovingTexture />
      </div>
      <div className="relative z-0">{children}</div>
    </div>
  )
}
