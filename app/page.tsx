import Header from '../components/header'
import Hero from '../components/hero'
import Skills from '../components/skills'
import Experience from '../components/experience'
import Projects from '../components/projects'
import Contact from '../components/contact'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

