import Link from 'next/link'
import { Code } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Code className="h-6 w-6 text-gray-900" />
          <span className="font-bold text-xl text-gray-900">I</span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href="#skills" className="text-gray-700 hover:text-black transition">Habilidades</Link>
          <Link href="#experience" className="text-gray-700 hover:text-black transition">Experiência</Link>
          <Link href="#projects" className="text-gray-700 hover:text-black transition">Projetos</Link>
          <Link href="#contact" className="text-gray-700 hover:text-black transition">Contato</Link>
        </nav>
      </div>
    </header>
  )
}

