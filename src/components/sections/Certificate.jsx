import { motion } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { certificateCardVariants, sectionTitle } from "@/lib/sectionMotionPresets"

const certificates = [
    {
        title: "Oracle Cloud Infrastructure 2025 Foundations Associate",
        issuer: "Oracle",
        description: "Foundational knowledge of core cloud computing concepts and Oracle Cloud Infrastructure services.",
        color: "text-red-600",
        bgColor: "bg-red-500/10",
        image: "/Oracle1.jpeg",
        link: "#"
    },
    {
        title: "Oracle Cloud Infrastructure 2025 Generative AI Certified Professional",
        issuer: "Oracle",
        description: "Demonstrated proficiency in Large Language Models (LLMs) and Generative AI concepts.",
        color: "text-red-600",
        bgColor: "bg-red-500/10",
        image: "/Oracle2.jpeg",
        link: "#"
    },
    {
        title: "Postman API Fundamentals",
        issuer: "Postman",
        description: "Comprehensive coverage of frontend and backend technologies including React, Node.js, and Databases.",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        image: "Postman.png",
        link: "#"
    }
];

export default function Certificate() {
    const [ref, isInView] = useScrollAnimation()

    return (
        <section id="certificate" className="py-20 bg-muted/50 overflow-hidden relative" ref={ref}>
            <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <motion.div
                    className="absolute left-10 top-8 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl"
                    animate={{ x: [0, 18, 0], y: [0, -12, 0] }}
                    transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute right-6 bottom-10 h-44 w-44 rounded-full bg-primary/10 blur-3xl"
                    animate={{ x: [0, -20, 0], y: [0, 16, 0] }}
                    transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    variants={sectionTitle}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="mb-12 md:items-left flex flex-col items-center"
                >
                    <h2 className="text-3xl font-bold mb-2">Certifications</h2>
                    <div className="w-20 h-1 bg-primary rounded-full mb-6 mx-auto md:mx-0" />
                    <p className="text-muted-foreground max-w-2xl mx-auto md:mx-0 text-center md:text-left">
                        A showcase of my continuous learning journey and professional achievements.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            variants={certificateCardVariants}
                            custom={index}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            whileHover="hover"
                            className="h-full"
                        >
                            <Card className="h-full border-none shadow-md hover:shadow-2xl transition-shadow duration-300 bg-card overflow-hidden group flex flex-col rounded-[1.75rem] backdrop-blur-md">
                                {cert.image ? (
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative block aspect-[3/2] overflow-hidden cursor-pointer"
                                    >
                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <div className="bg-background/95 text-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                                View Certificate <ExternalLink className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </a>
                                ) : (
                                    <div className={`relative aspect-[3/2] flex items-center justify-center ${cert.bgColor}`}>
                                        <Award className={`w-16 h-16 ${cert.color} opacity-80`} />
                                    </div>
                                )}

                                <CardContent className="flex-grow p-6 flex flex-col">
                                    <div className="mb-4">
                                        <h3 className="font-bold text-lg leading-tight mb-2 line-clamp-2" title={cert.title}>
                                            {cert.title}
                                        </h3>
                                        <p className="text-sm font-medium text-primary/80">{cert.issuer}</p>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {cert.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
