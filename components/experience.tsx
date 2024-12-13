import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Briefcase, Calendar } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      title: 'Software Developer Engineer in Test',
      company: 'Inventa',
      period: '2022 - 2024',
      responsibilities: [
        'Colaboração estreita com os times de desenvolvimento e produto, adotando as práticas do Shift Left Testing para garantir a cobertura de todos os requisitos previamente identificados.',
        'Implementação de testes automatizados E2E, utilizando Cypress de forma abrangente, desde o ambiente local até a produção, e empregando tanto JavaScript quanto TypeScript.',
        'Desenvolvimento de projetos para validar contratos, fazendo uso de ferramentas como Pact.js e Spring Cloud Contract em Kotlin, com o objetivo de testar tanto o frontend quanto o backend de forma integrada.', 
        'Configuração abrangente dos testes automatizados para integração contínua/desenvolvimento contínuo (CI/CD), incluindo a definição de pipelines utilizando cypress-grep e GitHub Actions para execução.',
        'Monitoramento proativo de falhas nos testes E2E e identificação de testes flaky utilizando Qase, GitHub Actions e Cypress Cloud.',
        'Implementação de alertas via Slack para garantir uma observabilidade eficaz e monitoramento dos serviços, utilizando Sentry e Grafana.',
        'Definição de modelos de testes, estratégias de testes adaptadas ao ambiente de microserviços e estabelecimento de padrões de projeto.',
        'Contribuição na definição de modelo de testes, estratégias de testes adaptadas ao contexto de microserviços, templates e padrões de projeto, trabalhando em conjunto com o time de Plataforma.',
        "Criação e manutenção de documentação relacionada ao produto, estratégias de testes e CI/CD.",
        "Análise e compreensão de requisitos de negócio, garantindo a tradução dos mesmos em soluções técnicas.",
      ],
    },
    {
      title: 'Qa Engineer',
      company: 'Banco Modal',
      period: '2022 - 2022',
      responsibilities: [
        "Contribuição na definição de modelos de teste, estratégias de teste adaptadas ao contexto de microserviços, templates e padrões de design, em colaboração com a equipe de Plataforma",
        "Criação e manutenção de documentação relacionada ao produto e estratégias de teste.",
        "Colaboração e desenvolvimento em testes automatizados de ponta a ponta em um projeto com JUnit em Java.",
      ],
    },
    {
      title: 'Qa Engineer',
      company: 'CargoX',
      period: '2019 - 2022',
      responsibilities: [
        "Participação em reuniões com a equipe para discutir novos processos, visando melhorar a eficiência e a qualidade do serviço.",
        "Criação e organização de testes manuais, seguida pela migração para um processo automatizado.",
         "Envolvimento ativo nos processos da equipe dentro de estruturas Scrum/Kanban desde o início do projeto.",
         "Participação em cerimônias ágeis.",
         "Monitoramento e identificação de possíveis falhas de serviço no Grafana.",
        "Relato e gerenciamento de incidentes no Jira.",
        "Automação de API usando Axios e Httparty em JavaScript.",
        "Desenvolvimento de automação web com Cypress em JavaScript e Capybara em Ruby.",
        "Desenvolvimento de automação de teste móvel com Ruby usando Appium."
      ],
    },

    {
      title: 'Analista de Testes',
      company: 'Keeggo',
      period: '2016 - 2019',
      responsibilities: [
      "Criação de um projeto de automação básico utilizando Java com JUnit e Selenium puro.",
      "Colaboração direta na composição de scripts de teste dentro de um modelo baseado em planilha.",
    "Testes manuais com documentação abrangente.",
     "Apoio à equipe na realização de diferentes tarefas, prezando pela agilidade e eficiência."
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

