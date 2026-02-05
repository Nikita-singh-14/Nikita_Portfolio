import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

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
    },{
    
        title: "Postman API Fundamentals",
        issuer: "Postman",
        description: "Comprehensive coverage of frontend and backend technologies including React, Node.js, and Databases.",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        image: "Postman.png",
        link: "#"
    },
    /*{
        title: "UX Design Fundamentals",
        issuer: "Google",
        description: "Foundational principles of user experience design, wireframing, and prototyping.",
        color: "text-green-500",
        bgColor: "bg-green-500/10"
    },
    {
        title: "Advanced React Patterns",
        issuer: "Frontend Masters",
        description: "Deep dive into advanced React concepts, hooks, and performance optimization.",
        color: "text-purple-500",
        bgColor: "bg-purple-500/10"
    },
    {
        title: "Cloud Computing Basics",
        issuer: "AWS",
        description: "Introduction to cloud infrastructure, services, and deployment models.",
        color: "text-orange-500",
        bgColor: "bg-orange-500/10"
    }*/
];

export default function Certificate() {
    return (
        <section id="certificate" className="py-20 bg-muted/50 overflow-hidden">
            <div className="container mx-auto px-4 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 md:items-left flex flex-col items-center"
                >
                    <h2 className="text-3xl font-bold mb-2">Certifications</h2>
                    <div className="w-20 h-1 bg-primary rounded-full mb-6 mx-auto md:mx-0" />
                    <p className="text-muted-foreground max-w-2xl mx-auto md:mx-0">
                        A showcase of my continuous learning journey and professional achievements.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.15,
                                ease: "easeOut"
                            }}
                            whileHover={{
                                y: -6,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                            className="h-full"
                        >
                            <Card className="h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-card overflow-hidden group flex flex-col rounded-xl">
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
                                            <div className="bg-background/90 text-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
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

                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
