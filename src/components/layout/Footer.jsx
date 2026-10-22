import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="border-t border-border/40 bg-muted/50 py-8"
        >
            <div className="container mx-auto px-4 text-center">
                {/* Social Links */}
                <div className="mb-4 flex justify-center space-x-6">

                    {/* GitHub */}
                    <motion.a
                        href="https://github.com/Nikita-singh-14"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                        className="text-muted-foreground transition-colors hover:text-primary"
                        whileHover={{ y: -2 }}
                    >
                        <Github className="h-5 w-5" />
                    </motion.a>

                    {/* LinkedIn */}
                    <motion.a
                        href="https://www.linkedin.com/in/nikita-singh-3560652bb/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                        className="text-muted-foreground transition-colors hover:text-primary"
                        whileHover={{ y: -2 }}
                    >
                        <Linkedin className="h-5 w-5" />
                    </motion.a>

                    {/* LeetCode */}
                    <motion.a
                        href="https://leetcode.com/u/nikitasingh14434/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LeetCode Profile"
                        className="text-muted-foreground transition-colors hover:text-primary"
                        whileHover={{ y: -2 }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5 w-5"
                            aria-hidden="true"
                        >
                            <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.112.722-1.8.722-.687 0-1.333-.255-1.8-.722l-6.11-6.11a2.545 2.545 0 0 1 0-3.6l6.11-6.11a2.545 2.545 0 0 1 3.6 0l2.697 2.607a.996.996 0 0 1 0 1.414.996.996 0 0 1-1.414 0l-2.697-2.607a.545.545 0 0 0-.772 0l-6.11 6.11a.545.545 0 0 0 0 .772l6.11 6.11a.545.545 0 0 0 .772 0l2.697-2.607a.996.996 0 0 1 1.414 0 .996.996 0 0 1 0 1.414zM21 12a1 1 0 0 1-1 1h-9a1 1 0 0 1 0-2h9a1 1 0 0 1 1 1z" />
                        </svg>
                    </motion.a>

                    {/* Email */}
                    <motion.a
                        href="mailto:nk2371174@gmail.com"
                        aria-label="Send Email"
                        className="text-muted-foreground transition-colors hover:text-primary"
                        whileHover={{ y: -2 }}
                    >
                        <Mail className="h-5 w-5" />
                    </motion.a>

                </div>

                {/* Copyright */}
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Nikita Singh. All rights reserved.
                </p>
            </div>
        </motion.footer>
    );
}