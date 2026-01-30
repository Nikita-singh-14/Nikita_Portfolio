import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
    {
        title: "Frontend",
        skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "TypeScript", "Framer Motion", "Redux"]
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Firebase", "REST APIs"]
    },
    {
        title: "Design",
        skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "UI/UX Principles", "Prototyping"]
    },
    {
        title: "Tools & DevOps",
        skills: ["Git", "GitHub", "VS Code", "Vercel", "Netlify", "Postman", "Linux"]
    }
]

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full mb-6" />
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A comprehensive toolset for building robust applications and engaging interfaces.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, i) => (
                                    <Badge
                                        key={i}
                                        variant="secondary"
                                        className="text-sm py-1 px-3 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
