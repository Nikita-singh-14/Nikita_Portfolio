import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
    {
        role: "Full-Stack Developer",
        company: "Freelance",
        period: "2024 - Present",
        description: "Developing scalable web applications for diverse clients. Specializing in MERN stack and modern UI libraries.",
        skills: ["React", "Node.js", "MongoDB", "Tailwind"]
    },
    {
        role: "Graphic Design Intern",
        company: "Creative Agency",
        period: "2023 - 2024",
        description: "Designed marketing assets, social media graphics, and brand identities. Collaborated with UI/UX teams for web prototyping.",
        skills: ["Photoshop", "Illustrator", "Figma"]
    }
]

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-background relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
                    <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full mb-6" />
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 border-l-2 border-muted"
                        >
                            <div className="absolute -left-[9px] top-0 bg-background p-1 rounded-full border border-purple-500 text-purple-600">
                                <Briefcase className="h-4 w-4" />
                            </div>

                            <div className="mb-1 text-sm text-muted-foreground font-semibold">{exp.period}</div>
                            <h3 className="text-xl font-bold">{exp.role}</h3>
                            <h4 className="text-lg text-primary mb-2">{exp.company}</h4>
                            <p className="text-muted-foreground mb-4">
                                {exp.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill) => (
                                    <Badge key={skill} variant="outline" className="bg-muted/50">{skill}</Badge>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
