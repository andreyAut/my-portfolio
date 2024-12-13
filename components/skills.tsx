import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FaClipboardCheck, FaTools, FaBolt } from 'react-icons/fa'
import { DiJavascript1, DiRuby, DiJava, DiDocker, DiScriptcs, DiPhonegap, DiGithubBadge } from 'react-icons/di'
import 'animate.css'

export default function Skills() {
  const skills = [
    {
      category: 'Testes',
      icon: FaClipboardCheck,
      items: [
        { name: 'Testes Manuais', icon: FaClipboardCheck },
        { name: 'Testes Automatizados', icon: FaClipboardCheck },
        { name: 'Testes de Performance', icon: FaBolt },
        { name: 'Testes de Segurança', icon: FaClipboardCheck },
        { name: 'Testes de Contrato', icon: FaClipboardCheck },
      ],
    },
    {
      category: 'Ferramentas',
      icon: FaTools,
      items: [
        { name: 'Docker', icon: DiDocker },
        { name: 'Git', icon: DiGithubBadge },
      ],
    },
    {
      category: 'Programação',
      icon: FaBolt,
      items: [
        { name: 'JavaScript', icon: DiJavascript1 },
        { name: 'TypeScript', icon: DiScriptcs },
        { name: 'Ruby', icon: DiRuby },
        { name: 'Java', icon: DiJava },
      ],
    },
    {
      category: 'Frameworks',
      icon: FaBolt,
      items: [
        { name: 'Cypress', icon: DiJavascript1 },
        { name: 'Playwright', icon: DiScriptcs },
        { name: 'Capybara', icon: DiRuby },
        { name: 'Appium', icon: DiPhonegap },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold tracking-tight text-center mb-12 text-gray-900">
        Habilidades
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 animate__animated animate__fadeInUp">
        {skills.map((skill, index) => (
          <Card key={index} className="bg-white shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-900">
                {<skill.icon className="mr-2 h-5 w-5" />}
                {skill.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-none pl-0 space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-center text-sm text-gray-700"
                  >
                    {<item.icon className="mr-2 h-4 w-4 text-gray-600" />}
                    {item.name}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
