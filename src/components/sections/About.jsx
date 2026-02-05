import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Trophy, Lightbulb } from "lucide-react"

export default function About() {
    const cards = [
        /*{ icon: Code, title: "Full-Stack Dev", description: "Building scalable web apps with React, Node.js, and modern frameworks." },
        { icon: Palette, title: "Graphic Design", description: "Creating stunning visuals, logos, and UI/UX prototypes." },
        { icon: Trophy, title: "SIH 2025 Winner", description: "Recognized for innovative problem solving at national level." },
        { icon: Lightbulb, title: "Problem Solver", description: "Turning complex requirements into elegant, user-friendly solutions." },*/
    ]

    return (
        <section id="about" className="py-20 bg-muted/50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
                    <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                        Pre-Final year B.Tech student at Central University Bilaspur specializing in Information Technology.I'm driven by a passion for building and creating.

My core focus is Web Development—I love the practical challenge of being a MERN Stack developer and creating intelligent APIs. I've also built a solid foundation in Java, which has significantly sharpened my problem-solving abilities, leading me to successfully conquer over 80 LeetCode problems. What sets me apart is how I blend technical skill with creativity; outside of coding, I freelance to design visually striking posters for Yajuka. For the past year, I've been an active member of my college's technical club, contributing as part of the Web Developer Team. I constantly seek out high-pressure, innovative environments, which is why I regularly participate in major hackathons like SIH. To stay ahead of the curve, I'm currently expanding my knowledge into the future of tech by taking Machine Learning courses via NPTEL. I genuinely enjoy combining my technical expertise with my design sensibilities to bring ideas to life.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full hover:shadow-lg transition-shadow border-none shadow-md">
                                <CardContent className="p-6 flex flex-col items-center text-center">
                                    <div className="mb-4 p-3 bg-primary/10 rounded-full text-primary">
                                        <card.icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                                    <p className="text-sm text-muted-foreground">{card.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
                
            </div>
        </section>
    )
}
