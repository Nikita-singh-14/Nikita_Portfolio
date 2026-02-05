import { motion } from "framer-motion"
import { Trophy, Star, Users, Heart } from "lucide-react"

const achievements = [
    {
        icon: Trophy,
        title: "Winner - SIH 2025",
        description: "Winner Smart India Hackathon (SIH) 2025 | Software Edition",
        title2:"After 36 hours of relentless effort, sleepless nights, and countless iterations, emerged as a winner with Team Data_JARVIS.Built a Real-Time Monitoring System for a Disaster Training Management Centralized Platform for NDMA, driven by a purpose larger than ourselves.This journey tested our patience, resilience, and teamwork—and reinforced my belief in building technology that truly matters.",
        color: "text-yellow-500",
        image: "/Sih.png"
    }
    /*{
        icon: Star,
        title: "Finalist - HackTheNorth",
        description: "Reached the finals among 500+ teams globally. Built a decentralized voting application.",
        color: "text-purple-500"
    },
    {
        icon: Users,
        title: "Open Source Contributor",
        description: "Active contributor to major React ecosystem libraries. 50+ PRs merged.",
        color: "text-blue-500"
    },
    {
        icon: Heart,
        title: "Community Volunteer",
        description: "Organized tech workshops for over 200 students in college. Mentored juniors in web development.",
        color: "text-red-500"
    }*/
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

                <div className="space-y-16">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12`}
                        >
                            {/* Image/Title Side */}
                            <div className="flex-1 w-full">
                                <div className="bg-card rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-border/50 group flex flex-col items-center text-center h-full justify-center aspect-[16/9] relative overflow-hidden">
                                    {item.image ? (
                                        <>
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />

                                            <div className="relative z-10 p-8 md:p-10 flex  items-end justify-between h-full w-full">
                                                <div>
                                                    <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                                                    <div className="w-12 h-1 bg-white/70 rounded-full mt-2 group-hover:w-24 transition-all duration-300" />
                                                </div>
                                                <div className={`p-4 rounded-full bg-white/10 backdrop-blur-md mb-6 group-hover:scale-110 transition-transform duration-300 text-white border border-white/20 absolute bottom-2 right-6`}>
                                                    <item.icon className="h-5 w-5" />
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="p-8 md:p-10 flex flex-col items-center justify-center h-full w-full relative">
                                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-primary`} />

                                            <div className={`p-4 rounded-full bg-muted/50 mb-6 group-hover:scale-110 transition-transform duration-300 ${item.color ? item.color.replace('text-', 'bg-').replace('600', '100') : 'bg-primary/10'}`}>
                                                <item.icon className={`h-12 w-12 ${item.color || 'text-primary'}`} />
                                            </div>

                                            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                                            <div className="w-12 h-1 bg-primary/30 rounded-full mt-2 group-hover:w-24 transition-all duration-300" />
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Description Side */}
                            <div className={`flex-1 text-center ${index % 2 === 1 ? 'md:text-right' : 'md:text-left'}`}>
                                <div className="relative">
                                    <div className={`absolute -top-10 ${index % 2 === 1 ? 'right-0' : 'left-0'} text-9xl font-bold text-muted/20 -z-10 select-none opacity-50`}>
                                        0{index + 1}
                                    </div>
                                    <h2 className="text-3xl text-white md:text-xl text-muted-foreground leading-relaxed font-bold">
                                        {item.description}
                                    </h2>
                                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                                        {item.title2}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
