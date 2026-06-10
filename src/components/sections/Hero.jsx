import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FaLinkedin } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa"
//import Hero3D from "@/components/animations/Hero3D"
import { heroTextVariants, buttonVariants, floatingVariants } from "@/lib/animationVariants"

const containerMotion = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.2,
        },
    },
}

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            <div className="absolute inset-0 bg-grid-white/[0.03] pointer-events-none" />
            <motion.div
                className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl"
                animate={{ opacity: [0.6, 0.2, 0.6], scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute right-16 top-32 h-40 w-40 rounded-full bg-violet-500/15 blur-3xl"
                animate={{ opacity: [0.7, 0.25, 0.7], scale: [1, 1.08, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    variants={containerMotion}
                    initial="hidden"
                    animate="visible"
                    className="text-center md:text-left"
                >
                    <motion.div
                        custom={0}
                        variants={heroTextVariants}
                        className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-[0.35em] text-foreground/80 uppercase bg-secondary rounded-full border border-border/50"
                    >
                        Available for Hire
                    </motion.div>
                    <motion.h1
                        custom={1}
                        variants={heroTextVariants}
                        className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-foreground"
                    >
                        Hi, I'm Nikita Singh
                    </motion.h1>
                    <motion.p
                        custom={2}
                        variants={heroTextVariants}
                        className="text-xl md:text-2xl text-muted-foreground mb-4 font-light"
                    >
                        Full-Stack Developer & Graphic Designer
                    </motion.p>
                    <motion.p
                        custom={3}
                        variants={heroTextVariants}
                        className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto md:mx-0"
                    >
                        SIH 2025 winner building immersive web experiences with bold UI, motion, and modern frontend architecture.
                    </motion.p>

                    <motion.div
                        custom={4}
                        variants={heroTextVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    >
                        <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                            <a href="https://github.com/Nikita-singh-14" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="w-full sm:w-auto gap-2 group">
                                    Github
                                    <FaGithub />
                                </Button>
                            </a>
                        </motion.div>

                        <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                            <a href="https://www.linkedin.com/in/nikita-singh-3560652bb/" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2">
                                    LinkedIn
                                    <FaLinkedin />
                                </Button>
                            </a>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
                    className="relative mx-auto w-full max-w-[620px] h-[520px]"
                >
                    <div className="flex items-center justify-center w-full h-full">
                        <img
                            src="/image.png"
                            alt="Nikita Singh"
                            className="w-96 h-96 object-cover rounded-3xl shadow-2xl border border-white/10"
                        />
                    </div>

                    <motion.div
                        variants={floatingVariants}
                        initial="initial"
                        animate="animate"
                        className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] md:w-72 rounded-[2rem] border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl shadow-cyan-500/10 overflow-hidden"
                    >
                        <div className="relative p-5 flex items-center gap-4">
                            <div className="relative h-20 w-20 rounded-full border border-white/10 overflow-hidden shadow-xl shadow-cyan-500/20">
                                <img
                                    src="/image.png"
                                    alt="Nikita Singh"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-[0.4em] text-cyan-200/90">Profile</p>
                                <h3 className="text-lg font-bold text-foreground">Nikita Singh</h3>
                                <p className="text-sm text-muted-foreground">Developer • Designer • SIH Winner</p>
                            </div>
                        </div>
                        <div className="border-t border-white/10 px-5 py-3 flex items-center justify-between text-sm text-muted-foreground">
                            <span>Interactive Portfolio</span>
                            <span className="text-cyan-300">Live</span>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={floatingVariants}
                        initial="initial"
                        animate="animate"
                        className="absolute -top-8 right-6 h-24 w-24 rounded-full border border-cyan-400/20 bg-cyan-500/10 blur-3xl"
                    />
                </motion.div>
            </div>
        </section>
    )
}
