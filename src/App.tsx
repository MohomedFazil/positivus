import './App.css'
import CaseStudies from './components/CaseStudies'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Process from './components/Process'
import Proposal from './components/Proposal'
import Services from './components/Services'
import Team from './components/Team'

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Proposal />
      <CaseStudies />
      <Process />
      <Team />
    </main>
  )
}

export default App
