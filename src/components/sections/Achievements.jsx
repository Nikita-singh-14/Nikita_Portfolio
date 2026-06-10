import { motion } from "framer-motion"
import { Trophy } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { achievementsCardVariants, sectionTitle } from "@/lib/sectionMotionPresets"

const achievements = [
    {
        icon: Trophy,
        title: "Winner - SIH 2025",
        description: "Winner Smart India Hackathon (SIH) 2025 | Software Edition",
        details: "After 36 hours of relentless effort, sleepless nights, and countless iterations, I emerged as a winner with Team Data_JARVIS. We built a Real-Time Monitoring System for a Disaster Training Management Platform for NDMA.",
        color: "text-yellow-500",
        image: "/Sih.png"
    }
]

export default function Achievements() {
    const [ref, isInView] = useScrollAnimation()

    return (
        <section id="achievements" className="py-20 bg-background relative overflow-hidden" ref={ref}>
            <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <motion.div
                    className="absolute left-10 top-12 h-40 w-40 rounded-full bg-yellow-500/10 blur-3xl"
                    animate={{ x: [0, 22, 0], y: [0, -14, 0] }}
                    transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute right-12 bottom-12 h-44 w-44 rounded-full bg-cyan-500/10 blur-3xl"
                    animate={{ x: [0, -18, 0], y: [0, 12, 0] }}
                    transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    variants={sectionTitle}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4">Achievements</h2>
                    <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full mb-6" />
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Highlights from my recent projects and competitive accomplishments, presented with a modern animated style.
                    </p>
                </motion.div>

                <div className="space-y-16">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={achievementsCardVariants}
                            custom={index}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12`}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="flex-1 w-full"
                            >
                                <div className="bg-card rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-border/50 group overflow-hidden relative backdrop-blur-md">
                                    {item.image ? (
                                        <>
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-black/55 group-hover:bg-black/45 transition-colors duration-300" />
                                            <div className="relative z-10 p-8 md:p-10 flex items-end justify-between h-full w-full">
                                                <div>
                                                    <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                                                    <div className="w-16 h-1 bg-white/70 rounded-full mt-2 group-hover:w-28 transition-all duration-300" />
                                                </div>
                                                <div className="p-4 rounded-full bg-white/10 backdrop-blur-md mb-6 group-hover:scale-110 transition-transform duration-300 text-white border border-white/20 absolute bottom-4 right-6">
                                                    <item.icon className="h-5 w-5" />
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="relative aspect-[16/9] flex items-center justify-center bg-primary/10">
                                            <div className={`p-6 rounded-full bg-primary/20 text-primary shadow-lg`}>
                                                <item.icon className="h-12 w-12" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
                                className={`flex-1 text-center ${index % 2 === 1 ? 'md:text-right' : 'md:text-left'}`}
                            >
                                <div className="relative">
                                    <div className={`absolute -top-10 ${index % 2 === 1 ? 'right-0' : 'left-0'} text-9xl font-bold text-muted/20 -z-10 select-none opacity-40`}>0{index + 1}</div>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                                        {item.description}
                                    </h2>
                                    <p className="text-lg text-muted-foreground leading-relaxed font-light">
                                        {item.details}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
