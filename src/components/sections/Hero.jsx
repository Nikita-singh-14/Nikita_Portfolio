import { motion } from "framer-motion"
import { Link } from "react-scroll"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] dark:bg-grid-white/[0.05] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />


            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center md:text-left"
                >
                    <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wide text-foreground/80 uppercase bg-secondary rounded-full border border-border/50">
                        Available for Hire
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-foreground">
                        Hi, I'm Nikita Singh
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
                        Full-Stack Developer & Graphic Designer
                    </p>
                    <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
                        Winner of SIH 2025. Crafting innovative web solutions and beautiful designs that solve real-world problems.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

                        <a
                            href="https://github.com/Nikita-singh-14"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button size="lg" className="w-full sm:w-auto gap-2 group">
                                Github
                                <FaGithub />

                            </Button>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/nikita-singh-3560652bb/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2">
                                LinkedIn
                                <FaLinkedin />
                            </Button>
                        </a>
                    </div>

                </motion.div>



                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative mx-auto"
                >
                    {/* Placeholder for Profile Image */}
                    <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-background shadow-2xl relative z-10">
                        <div className="absolute bottom-10 -translate-x-1/2 z-20 pointer-events-none right-0">
                <div className='circle animate-float'></div>
            </div>
                        <img
                            src="image.png"
                            alt="Nikita Singh"
                            className="w-full h-full object-cover"
                        />
                        
                    </div>
                    {/* Decorative Circle Behind */}
                    <div className="absolute top-4 left-4 w-full h-full rounded-full border-2 border-dashed border-teal-500/30 animate-spin-slow z-0" />

                </motion.div>
            </div>

            
        </section>
    )
}
