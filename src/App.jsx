import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { About } from "./components/About"
import ServicesSection from "./components/ServicesSection"

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <ServicesSection/>
    </>
  )
}

export default App
