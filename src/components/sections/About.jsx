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
                       I am a Full Stack Developer and SIH 2025 winner, focused on building meaningful digital experiences through clean UI design, strong problem-solving, and teamwork.
I am a pre-final year B.Tech student in Information Technology at Central University Bilaspur with a strong interest in web development. I currently work with Meru Techno Soft Pvt. Ltd., where I design user interfaces and collaborate closely with backend developers and team members to build functional web applications.
I have a solid foundation in Java and have solved 80+ problems on LeetCode, which has strengthened my problem-solving skills. Along with development, I work as a freelance designer, creating posters and visual content. I have also been an active member of my college’s technical club and enjoy working in innovative, high-pressure environments. I am proud to be a Smart India Hackathon (SIH) 2025 winner, , which reflects my ability to work collaboratively and deliver impactful solutions.
I am constantly learning and improving my skills, with the goal of creating user-centric, scalable, and real-world digital products.
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
