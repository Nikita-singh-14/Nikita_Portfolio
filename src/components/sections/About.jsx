import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Trophy, Lightbulb } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { aboutCardVariants, sectionTitle } from "@/lib/sectionMotionPresets"

const cards = [
    { icon: Code, title: "Full-Stack Development", description: "Building scalable web apps with React, Node.js, and modern frameworks." },
    { icon: Palette, title: "UI / UX Design", description: "Creating polished interfaces, prototypes, and visual systems." },
    { icon: Trophy, title: "SIH 2025 Winner", description: "Delivered award-winning software during the Smart India Hackathon." },
    { icon: Lightbulb, title: "Problem Solver", description: "Turning complex challenges into efficient user-focused solutions." },
]

export default function About() {
    const [ref, isInView] = useScrollAnimation()

    return (
        <section id="about" className="py-20 bg-muted/50 relative overflow-hidden" ref={ref}>
            <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <motion.div
                    className="absolute left-0 top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl"
                    animate={{ x: [0, 18, 0], y: [0, -14, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute right-4 top-28 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl"
                    animate={{ x: [0, -24, 0], y: [0, 20, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    variants={sectionTitle}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
                    <p className="text-lg text-muted-foreground max-w-4xl mx-auto space-y-4">
                        I am a Full Stack Developer and SIH 2025 winner, focused on building meaningful digital experiences through clean UI design, strong problem-solving, and teamwork.
                    </p>
                    <p className="text-lg text-muted-foreground max-w-4xl mx-auto space-y-4">
                        I am a pre-final year B.Tech student in Information Technology at Central University Bilaspur with a strong interest in web development. I currently work with Meru Techno Soft Pvt. Ltd., where I design user interfaces and collaborate closely with backend developers to build functional web applications.
                    </p>
                    <p className="text-lg text-muted-foreground max-w-4xl mx-auto space-y-4">
                        I have a solid foundation in Java and have solved 80+ problems on LeetCode, strengthening my problem-solving skills. Alongside development, I freelance as a designer and actively contribute to my college’s technical community.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            variants={aboutCardVariants}
                            custom={index}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            whileHover="hover"
                        >
                            <Card className="h-full border bg-background/80 shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-3xl overflow-hidden backdrop-blur-md">
                                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                                    <div className="mb-4 p-4 rounded-full bg-primary/10 text-primary shadow-sm">
                                        <card.icon className="h-7 w-7" />
                                    </div>
                                    <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
