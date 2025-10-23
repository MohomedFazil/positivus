import './App.css'
import CaseStudies from './components/CaseStudies'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Process from './components/Process'
import Proposal from './components/Proposal'
import Services from './components/Services'

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Proposal />
      <CaseStudies />
      <Process />
    </main>
  )
}

export default App
