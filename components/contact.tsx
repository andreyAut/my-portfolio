import { Button } from '@/components/ui/button'
import { Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8 text-gray-900">Entre em Contato</h2>
        <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
          Estou sempre aberto a novas oportunidades e conexões profissionais. 
          Se você gostaria de discutir projetos de QA, automação de testes ou 
          qualquer outra oportunidade, sinta-se à vontade para me contatar no LinkedIn.
        </p>
        <div className="flex justify-center">
          <Link href="https://www.linkedin.com/in/andrey-oliveira1/" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white">
              <Linkedin className="mr-2 h-5 w-5" />
              Conecte-se no LinkedIn
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

