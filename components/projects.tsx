import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Laptop, FireExtinguisher, GitBranch, Github } from 'lucide-react'
import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      title: 'Testes de E2E com Playwright',
      description: 'Uma automação de Testes E2E para realizar alguns fluxos importantes e aprender mais sobre playwright',
      technologies: ['Playwright', 'TypeScript', 'CI/CD'],
      icon: Laptop,
      githubUrl: 'https://github.com/andreyAut/automation-example-playwright',
    },
    {
      title: 'Cypress-burn-E2E-tests',
      description: 'Projeto cujo objetivo é identificar problemas que possam surgir em cenários de uso intensivo e resolvê-los antes do lançamento.',
      technologies: ['Cypress', 'JavaScipt', 'Cypess-grep', ],
      icon: FireExtinguisher,
      githubUrl: 'https://github.com/andreyAut/cypress-burn-E2E-tests',
    },
    {
      title: 'Integração de Pipeline CI/CD',
      description: 'Este é um projeto que utiliza Playwright para acessar um site, coletar informações relevantes e validar a veracidade desses dados, salvando os resultados em um formato organizado, como uma planilha ou banco de dados.',
      technologies: ['PlaWright', 'Typescript', 'Excel'],
      icon: GitBranch,
      githubUrl: 'https://github.com/andreyAut/web-scraper-playwright-tests',
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
                  <Badge key={techIndex} variant="secondary" className="bg-blue-300 text-gray-800">{tech}</Badge>
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

