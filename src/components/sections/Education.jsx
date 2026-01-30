import { motion } from "framer-motion"
import { GraduationCap, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function Education() {
    return (
        <section id="education" className="py-20 bg-muted/50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4">Education & Certifications</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Degree */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="h-full hover:shadow-lg transition-shadow">
                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                <div className="p-2 bg-primary/10 rounded-full text-primary">
                                    <GraduationCap className="h-6 w-6" />
                                </div>
                                <div>
                                    <CardTitle className="text-xl">Bachelor of Technology</CardTitle>
                                    <CardDescription>Computer Science & Engineering</CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="font-semibold text-foreground">University Name, Raipur</p>
                                <p className="text-sm text-muted-foreground mb-4">202X - 202X</p>
                                <p className="text-muted-foreground">
                                    Relevant Coursework: Data Structures, Algorithms, Web Development, Database Management Systems.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Certifications */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Card className="h-full hover:shadow-lg transition-shadow">
                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                <div className="p-2 bg-primary/10 rounded-full text-primary">
                                    <Award className="h-6 w-6" />
                                </div>
                                <div>
                                    <CardTitle className="text-xl">Certifications</CardTitle>
                                    <CardDescription>Continuous Learning</CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <p className="font-semibold">Full-Stack Web Development</p>
                                    <p className="text-sm text-muted-foreground">Coursera - Meta</p>
                                </div>
                                <div>
                                    <p className="font-semibold">UX Design Fundamentals</p>
                                    <p className="text-sm text-muted-foreground">Google</p>
                                </div>
                                <div>
                                    <p className="font-semibold">Advanced React Patterns</p>
                                    <p className="text-sm text-muted-foreground">Frontend Masters</p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
