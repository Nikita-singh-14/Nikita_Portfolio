import { motion } from "framer-motion"
import { Trophy, Star, Users, Heart } from "lucide-react"

const achievements = [
    {
        icon: Trophy,
        title: "Winner - SIH 2025",
        description: "Secured 1st place in Smart India Hackathon 2025 for developing an innovative solution for [Theme/Problem Statement]."
    },
    {
        icon: Star,
        title: "Finalist - HackTheNorth",
        description: "Reached the finals among 500+ teams globally. Built a decentralized voting application."
    },
    {
        icon: Users,
        title: "Open Source Contributor",
        description: "Active contributor to major React ecosystem libraries. 50+ PRs merged."
    },
    {
        icon: Heart,
        title: "Community Volunteer",
        description: "Organized tech workshops for over 200 students in college. Mentored juniors in web development."
    }
]

export default function Achievements() {
    return (
        <section id="achievements" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4">Achievements & Activities</h2>
                    <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full mb-6" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card border rounded-xl p-6 hover:border-primary/50 transition-colors group"
                        >
                            <div className="mb-4 p-3 bg-muted rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                                <item.icon className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
                            </div>
                            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
