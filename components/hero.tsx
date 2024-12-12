import { Button } from '@/components/ui/button'
import { FileText, Github, Linkedin, Download } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-20 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
       Andrey Oliveira
      </h1>
      <p className="mt-4 text-xl text-gray-600">
        QA Engineer
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link href="https://github.com/andreyAut" target="_blank" rel="noopener noreferrer">
          <Button className="bg-gray-900 text-white hover:bg-gray-800">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </Link>
        <Link href="https://www.linkedin.com/in/andrey-oliveira1/" target="_blank" rel="noopener noreferrer">
          <Button className="bg-blue-600 text-white hover:bg-blue-700">
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
        </Link>
        <Link href="#projects">
        <Button variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-100">
          <FileText className="mr-2 h-4 w-4" />
          Ver Projetos
        </Button>
        </Link>
        <a
          href="/curriculo.pdf"
          download="Curriculo_Andrey.pdf"
          className="border-gray-900 text-gray-900 hover:bg-gray-100 flex items-center px-2 py-1 rounded-md border transition"
        >
          <Download className="mr-2 h-4 w-4" />
          Download CV
        </a>
      </div>
    </section>
  )
}

