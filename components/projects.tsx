import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Laptop, Smartphone, GitBranch, Github } from 'lucide-react'
import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      title: 'Testes de Plataforma E-commerce',
      description: 'Liderou testes end-to-end de uma plataforma de e-commerce em larga escala, incluindo testes de performance e segurança.',
      technologies: ['Selenium', 'JMeter', 'OWASP ZAP'],
      icon: Laptop,
      githubUrl: 'https://github.com/seu-usuario/ecommerce-tests',
    },
    {
      title: 'Framework de Automação para Apps Móveis',
      description: 'Desenvolveu um framework de automação personalizado para testes de apps iOS e Android, reduzindo o tempo de execução de testes em 60%.',
      technologies: ['Appium', 'Java', 'TestNG'],
      icon: Smartphone,
      githubUrl: 'https://github.com/seu-usuario/mobile-automation-framework',
    },
    {
      title: 'Integração de Pipeline CI/CD',
      description: 'Integrou testes automatizados no pipeline de CI/CD, permitindo implantações mais rápidas e confiáveis.',
      technologies: ['Jenkins', 'Docker', 'Git'],
      icon: GitBranch,
      githubUrl: 'https://github.com/seu-usuario/cicd-test-integration',
    },
  ]

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold tracking-tight text-center mb-12 text-gray-900">Projetos</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="bg-white shadow-md flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-900">
                {<project.icon className="mr-2 h-5 w-5" />}
                {project.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-gray-700 mb-4">{project.description}</CardDescription>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary" className="bg-gray-200 text-gray-800">{tech}</Badge>
                ))}
              </div>
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                  <Github className="mr-2 h-4 w-4" />
                  Ver no GitHub
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

