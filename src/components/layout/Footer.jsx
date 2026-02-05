import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-muted/50 py-8 border-t border-border/40">
            <div className="container mx-auto px-4 text-center">
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="https://github.com/Nikita-singh-14" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="h-5 w-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/nikita-singh-3560652bb/" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Twitter className="h-5 w-5" />
                    </a>
                    <a href="nk2371174@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        <Mail className="h-5 w-5" />
                    </a>
                </div>
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Nikita Singh. All rights reserved.
                </p>
                {/*<p className="text-xs text-muted-foregroundmt-2">
                    Built with React, Tailwind CSS & shadcn/ui.
                </p>*/}
            </div>
        </footer>
    )
}
