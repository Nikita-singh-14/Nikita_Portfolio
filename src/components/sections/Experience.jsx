import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { experienceCardVariants, experienceDotVariants, sectionTitle } from "@/lib/sectionMotionPresets"

const experiences = [
    {
        role: "Frontend Developer",
        company: "Meru Technosoft Private Limited",
        period: "January 2026 - Present",
        description: "Building responsive CRM interfaces for diverse industries using React, JavaScript, modern UI libraries, and Claude.",
        skills: ["React.js", "Tailwind CSS", "Claude"]
    },
    {
        role: "Graphic Design Intern",
        company: "Rahul Sir Classes",
        period: "2 Months",
        description: "Designed marketing assets, social media graphics, and brand identities. Collaborated with UI/UX teams for web prototyping.",
        skills: ["Canva", "Figma"]
    }
]

export default function Experience() {
    const [ref, isInView] = useScrollAnimation()

    return (
        <section id="experience" className="py-20 bg-background relative overflow-hidden" ref={ref}>
            <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <motion.div
                    className="absolute -top-10 left-1/2 h-52 w-52 rounded-full bg-purple-500/10 blur-3xl -translate-x-1/2"
                    animate={{ scale: [1, 1.08, 1], opacity: [0.7, 0.95, 0.7] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl"
                    animate={{ x: [0, -10, 0], y: [0, 12, 0] }}
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
                    <h2 className="text-3xl font-bold mb-4">Experience</h2>
                    <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full mb-6" />
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            variants={experienceCardVariants}
                            custom={index}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            whileHover="hover"
                            className="relative pl-8 border-l-2 border-muted rounded-3xl bg-muted/30 p-6 shadow-lg shadow-primary/5 hover:shadow-primary/15 transition-shadow duration-300 backdrop-blur-sm"
                        >
                            <motion.div
                                className="absolute -left-[9px] top-6 bg-background p-1 rounded-full border border-purple-500 text-purple-600 cursor-pointer"
                                variants={experienceDotVariants}
                                custom={index}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                whileHover="hover"
                            >
                                <Briefcase className="h-4 w-4" />
                            </motion.div>

                            <div className="mb-1 text-sm text-muted-foreground font-semibold">{exp.period}</div>
                            <motion.h3
                                className="text-xl font-bold"
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: index * 0.2 + 0.1 }}
                            >
                                {exp.role}
                            </motion.h3>
                            <motion.h4
                                className="text-lg text-primary mb-2"
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: index * 0.2 + 0.15 }}
                            >
                                {exp.company}
                            </motion.h4>
                            <motion.p
                                className="text-muted-foreground mb-4"
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: index * 0.2 + 0.2 }}
                            >
                                {exp.description}
                            </motion.p>
                            <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                                        transition={{ delay: index * 0.2 + 0.25 + skillIndex * 0.05, duration: 0.3 }}
                                    >
                                        <Badge variant="outline" className="bg-muted/50">{skill}</Badge>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
