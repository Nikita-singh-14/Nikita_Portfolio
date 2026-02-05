import { ThemeProvider } from "@/components/theme-provider"
import { HelmetProvider } from "react-helmet-async"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Skills from "@/components/sections/Skills"
import Projects from "@/components/sections/Projects"
import Experience from "@/components/sections/Experience"
import Achievements from "@/components/sections/Achievements"
import Contact from "@/components/sections/Contact"
import Certificate from "@/components/sections/Certificate"

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-primary/30">
          <Header />
          <main className="flex flex-col">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Certificate />
            <Achievements />
            <Contact />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
