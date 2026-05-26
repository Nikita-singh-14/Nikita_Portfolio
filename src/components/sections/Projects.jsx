import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
    {
        title: "GGV_CAMPUS_THIRFT",
        description: "Developed and implemented end-to-end functionalities including user authentication, cart system, order management, and role-based access control for a seamless marketplace experience.",
        image: "GGV_CAMPUS_THIRFT.jpeg",
        tags: ["TypeScript", "Tailwind CSS", "Express.js", "Node.js", "MongoDB"],
        demo: "https://ggv-campus-thirft.vercel.app/",
        github: "https://github.com/Nikita-singh-14/GGV_CAMPUS_THIRFT"
    },
    {
        title: "Scalable ChatApp",
        description: "Built scalable real-time chat using Socket.IO and Redis Pub/Sub for low-latency multi-server sync.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
        tags: ["Redis"],
        demo: "https://www.linkedin.com/posts/nikitasingh143_systemdesign-backendengineering-redis-ugcPost-7453418315294679040-_RgN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEy3ebIBpg_3pgXZCszPwFB3mrsKbQ-akp8",
        github: "https://github.com/Nikita-singh-14/Scalable_Chatapp"
    },
    {
        title: "Reverse Proxy & Load Balancer",
        description: "Backend project focused on load balancing and reverse proxy logic.",
        image: "LoadBalancer.png",
        tags: ["Typescript", "YAML", "Zod", "Redis"],
        demo: "https://github.com/Nikita-singh-14/Load_balancer",
        github: "https://github.com/Nikita-singh-14/Load_balancer"
    },
    {
        title: "Task Management App",
        description: "This is my first full stack project Task Maneger.",
        image: "TaskManeger.png",
        tags: ["Express", "Node.js", "MongoDB", "TypeScript", "Tailwind"],
        demo: "https://task-maneger-psi.vercel.app/",
        github: "https://github.com/Nikita-singh-14/Task_Maneger"
    },
    {
        title: "Tripforlife",
        description: "This is first react project. Modern, responsive website for trip and travel.",
        image: "Tripforlife.png",
        tags: ["React", "Vite", "Tailwind CSS"],
        demo: "https://user-profile-mws4.vercel.app/",
        github: "https://github.com/Nikita-singh-14/user-profile"
    },
    {
        title: "SiymonSays Game",
        description: "A fun and interactive game that tests your memory and reflexes.",
        image: "Siymon.png",
        tags: ["HTML","CSS", "JavaScript"],
        demo: "https://saymonsays.vercel.app/",
        github: "https://github.com/Nikita-singh-14/Saymonsays"
    }
]

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-muted/50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4">Projects</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A selection of projects that demonstrate my technical expertise and creative problem solving.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col group">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                        <Button variant="secondary" size="sm" asChild>
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="gap-2">
                                                <ExternalLink className="h-4 w-4" /> Live Demo
                                            </a>
                                        </Button>
                                        <Button variant="secondary" size="sm" asChild>
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="gap-2">
                                                <Github className="h-4 w-4" /> Code
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                                <CardHeader>
                                    <CardTitle>{project.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <CardDescription className="mb-4 text-base">
                                        {project.description}
                                    </CardDescription>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map(tag => (
                                            <Badge key={tag} variant="outline">{tag}</Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
