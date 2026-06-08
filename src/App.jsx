import { AnimatePresence, motion } from "framer-motion"
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
import FullPageParticles from "@/components/FullPageParticles"

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
          <motion.div
            className="pointer-events-none absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.div
              className="absolute top-14 left-[-120px] h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"
              animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute right-0 top-40 h-56 w-56 rounded-full bg-violet-500/15 blur-3xl"
              animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.13),_transparent_20%)]" />
          </motion.div>

          <FullPageParticles />

          <Header />
          <AnimatePresence mode="wait">
            <motion.main
              key="portfolio"
              className="flex flex-col"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageTransition}
            >
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Certificate />
              <Achievements />
              <Contact />
            </motion.main>
          </AnimatePresence>
          <Footer />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  )
}
