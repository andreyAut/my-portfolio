import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Briefcase, Calendar } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      title: 'Engenheiro de QA Sênior',
      company: 'Tech Solutions Inc.',
      period: '2019 - Presente',
      responsibilities: [
        'Liderou uma equipe de 5 engenheiros de QA em testes de aplicações web complexas',
        'Implementou processos de testes automatizados que reduziram o tempo de teste em 40%',
        'Colaborou com desenvolvedores para melhorar a qualidade do código e reduzir bugs em 30%',
      ],
    },
    {
      title: 'Engenheiro de QA',
      company: 'Software Innovations Ltd.',
      period: '2016 - 2019',
      responsibilities: [
        'Desenvolveu e executou planos de teste para aplicações móveis e web',
        'Introduziu práticas de desenvolvimento orientado a comportamento (BDD) para melhorar a cobertura de testes',
        'Mentorou engenheiros de QA juniores e estagiários',
      ],
    },
    {
      title: 'Testador de QA Júnior',
      company: 'StartUp Tech',
      period: '2014 - 2016',
      responsibilities: [
        'Realizou testes manuais de aplicações web',
        'Auxiliou na criação de documentação de testes e guias de usuário',
        'Participou de reuniões diárias de scrum e planejamento de sprint',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold tracking-tight text-center mb-12 text-gray-900">Experiência</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="bg-white shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-900">
                <Briefcase className="mr-2 h-5 w-5" />
                {exp.title}
              </CardTitle>
              <p className="text-sm text-gray-600">{exp.company}</p>
              <p className="text-sm text-gray-600 flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                {exp.period}
              </p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex} className="text-sm text-gray-700">{resp}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

