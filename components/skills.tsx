import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, PenToolIcon as Tool, Code, Zap } from 'lucide-react'

export default function Skills() {
  const skills = [
    { category: 'Testes', icon: CheckCircle, items: ['Testes Manuais', 'Testes Automatizados', 'Testes de Performance', 'Testes de Segurança'] },
    { category: 'Ferramentas', icon: Tool, items: ['Cypress', 'Selenium', 'Capybara', 'Postman', 'JIRA', 'Appium'] },
    { category: 'Programação', icon: Code, items: ['JavaScript', 'TypeScript', 'Ruby', 'Java'] },
    { category: 'Outros', icon: Zap, items: ['Metodologias Ágeis', 'CI/CD', 'Git', 'Docker'] },
  ]

  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold tracking-tight text-center mb-12 text-gray-900">Habilidades</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, index) => (
          <Card key={index} className="bg-white shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-900">
                {<skill.icon className="mr-2 h-5 w-5" />}
                {skill.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm text-gray-700">{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

