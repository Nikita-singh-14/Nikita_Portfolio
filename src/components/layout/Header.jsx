import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { Menu, X, Moon, Sun, Download } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

const navItems = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Certificate", to: "certificate" },
    { name: "Achievements", to: "achievements" },
    { name: "Contact", to: "contact" },
]

export default function Header() {
    const { theme, setTheme } = useTheme()
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-background/80 backdrop-blur-md shadow-md py-2"
                : "bg-transparent py-4"
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent cursor-pointer">
                    <Link to="hero" smooth={true} duration={500}>
                        Nikita Singh
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.to}
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-70}
                            activeClass="text-primary font-semibold"
                            className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}

                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleTheme}
                        aria-label="Toggle Theme"
                    >
                        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    </Button>


                    <Button
                        variant="default"
                        size="sm"
                        className="hidden lg:flex gap-2"
                        asChild
                    >
                        <a href="Resume.pdf" download target="_blank" rel="noopener noreferrer">
                            <Download className="h-4 w-4" /> Resume
                        </a>
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleTheme}
                        aria-label="Toggle Theme"
                    >
                        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    </Button>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-foreground focus:outline-none"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg"
                    >
                        <div className="flex flex-col p-4 space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 p-2 rounded-md transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}

                            <Button className="w-full gap-2">
                                <a
                                    href="Resume.pdf"
                                    download
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Download className="h-4 w-4" /> Download Resume
                                </a>
                            </Button>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
