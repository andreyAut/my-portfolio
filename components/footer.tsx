import { Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container flex items-center justify-between py-8">
        <p className="text-sm text-gray-600">
          © 2024
        </p>
        <div className="flex gap-4">
          <Link href="https://github.com/seu-usuario" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://linkedin.com/in/seu-perfil" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="https://twitter.com/seu-usuario" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

