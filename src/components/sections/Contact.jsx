import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false)
            setIsSuccess(true)
            setTimeout(() => setIsSuccess(false), 3000)
            e.target.reset()
        }, 1500)
    }

    return (
        <section id="contact" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <Card className="border-none shadow-lg bg-background/50 backdrop-blur-sm">
                            <CardContent className="p-8 space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Email</h3>
                                        <p className="text-muted-foreground">nk2371174@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Phone</h3>
                                        <p className="text-muted-foreground">+91-87908-03241</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Location</h3>
                                        <p className="text-muted-foreground">Bilaspur, Chhattisgarh, India</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Map Placeholder */}
                        <div className="h-64 rounded-xl overflow-hidden border shadow-md">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.756832441805!2d82.14150111536602!3d22.130613785193975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28e16f36e8a763%3A0xabdc5d1d28b54e8!2sGuru%20Ghasidas%20Vishwavidyalaya%2C%20Bilaspur%2C%20Chhattisgarh%20495009%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Guru Ghasidas Vishwavidyalaya, Bilaspur"
                            ></iframe>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card className="border shadow-xl">
                            <CardContent className="p-8">
                                <form className="space-y-6" action="https://formspree.io/f/mnjvkykl" method="POST">
                                    <input type="hidden" name="_next" value="https://your-site.com/thank-you" />
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name</label>
                                        <Input name="name" placeholder="Your Name" required />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                                        <Input name="email" type="email" placeholder="your@email.com" required />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
                                        <Textarea name="message" placeholder="How can I help you?" className="min-h-[150px]" required />
                                    </div>

                                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                                            </>
                                        ) : isSuccess ? (
                                            "Message Sent!"
                                        ) : (
                                            <>
                                                Send Message <Send className="ml-2 h-4 w-4" />
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
