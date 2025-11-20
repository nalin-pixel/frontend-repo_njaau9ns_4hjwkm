import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import MovingTexture from '../components/MovingTexture'
import ParallaxShowcase from '../components/ParallaxShowcase'
import GridToDetail from '../components/GridToDetail'

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <div className="relative">
        <MovingTexture />
        <ParallaxShowcase />
        <GridToDetail />
      </div>
      <footer className="border-t border-white/10 py-10 text-center text-white/50">
        © {new Date().getFullYear()} — Portfolio
      </footer>
    </div>
  )
}
