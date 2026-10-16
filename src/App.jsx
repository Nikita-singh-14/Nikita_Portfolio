import { AnimatePresence, motion as Motion } from "framer-motion"
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

const pageTransition = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -24, transition: { duration: 0.5, ease: "easeIn" } },
}

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-primary/30 overflow-x-hidden relative">
          <Header />
          <AnimatePresence mode="wait">
            <Motion.main
              key="portfolio"
              className="flex flex-col"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageTransition}
            >
              <Hero />
              <About />
              <Experience />
              <Achievements />
              <Projects />
              <Skills />
              <Certificate />
              <Contact />
            </Motion.main>
          </AnimatePresence>
          <Footer />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  )
}
