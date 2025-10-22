import './App.css'
import CaseStudies from './components/CaseStudies'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
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
    </main>
  )
}

export default App
