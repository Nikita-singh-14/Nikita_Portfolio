import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="bg-muted/50 py-8 border-t border-border/40"
        >
            <div className="container mx-auto px-4 text-center">
                <div className="flex justify-center space-x-6 mb-4">
                    <motion.a
                        href="https://github.com/Nikita-singh-14"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        whileHover={{ y: -2 }}
                    >
                        <Github className="h-5 w-5" />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/nikita-singh-3560652bb/"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        whileHover={{ y: -2 }}
                    >
                        <Linkedin className="h-5 w-5" />
                    </motion.a>
                    <motion.a
                        href="#"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        whileHover={{ y: -2 }}
                    >
                        <Twitter className="h-5 w-5" />
                    </motion.a>
                    <motion.a
                        href="nk2371174@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        whileHover={{ y: -2 }}
                    >
                        <Mail className="h-5 w-5" />
                    </motion.a>
                </div>
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Nikita Singh. All rights reserved.
                </p>
            </div>
        </motion.footer>
    )
}
