import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FaClipboardCheck, FaTools, FaBolt, FaSnowman, FaLock, FaPaperPlane, FaWatchmanMonitoring, FaDigitalTachograph, FaDatabase } from 'react-icons/fa';
import { DiJavascript1, DiRuby, DiJava, DiDocker, DiScriptcs, DiPhonegap, DiGithubBadge, DiWebplatform } from 'react-icons/di';
import 'animate.css';
import { FcAndroidOs, FcBarChart, FcComments, FcFlowChart, FcPackage, FcPieChart, FcSalesPerformance } from 'react-icons/fc';
import { FaBuildingLock, FaMagnifyingGlass } from 'react-icons/fa6';

export default function Skills() {
  const skills = [
    {
      category: 'Testes',
      icon: FaClipboardCheck,
      items: [
        { name: 'Testes Manuais', icon: FaClipboardCheck, level: 90 },
        { name: 'Testes Automatizados', icon: FaTools, level: 85 },
        { name: 'Testes de Performance', icon: FcSalesPerformance, level: 38 },
        { name: 'Testes de Contrato', icon: FcComments, level: 30 },
      ],
    },
    {
      category: 'Ferramentas de Teste',
      icon: FaBolt,
      items: [
        { name: 'Cypress', icon: DiJavascript1, level: 95 },
        { name: 'Playwright', icon: DiScriptcs, level: 60 },
        { name: 'Selenium', icon: DiWebplatform, level: 60 },
        { name: 'Appium', icon: DiPhonegap, level: 50 },
        { name: 'Jmeter', icon: FcBarChart, level: 39 },
        { name: 'K6', icon: FcPieChart, level: 42 },
      ],
    },
    {
      category: 'Programação',
      icon: FaBolt,
      items: [
        { name: 'JavaScript', icon: DiJavascript1, level: 90 },
        { name: 'TypeScript', icon: DiScriptcs, level: 50 },
        { name: 'Ruby', icon: DiRuby, level: 60 },
        { name: 'Java', icon: DiJava, level: 40 },
        { name: 'SQL', icon: FaDatabase, level: 40 },
      ],
    },
    {
      category: 'Outros',
      icon: FaTools,
      items: [
        { name: 'Docker', icon: DiDocker, level: 40 },
        { name: 'Git', icon: DiGithubBadge, level: 70 },
        { name: 'Postman', icon: FaSnowman, level: 75 },
        { name: 'Grafana', icon: FaWatchmanMonitoring, level: 50 },
        { name: 'Sentry', icon: FaDigitalTachograph, level: 50 },
        { name: 'Jira', icon: FaBuildingLock, level: 70 },
      ],
    },
  ];

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
              <ul className="list-none pl-0 space-y-4">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm text-gray-700">
                    <div className="flex items-center mb-1">
                      {<item.icon className="mr-2 h-4 w-4 text-gray-600" />}
                      <span>{item.name}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-300 h-2.5 rounded-full"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
