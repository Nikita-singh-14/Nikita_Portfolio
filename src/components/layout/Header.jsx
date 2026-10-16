import { useEffect, useState } from "react"
import { Link } from "react-scroll"
import { Download, Menu, Moon, Sun, X } from "lucide-react"
import { motion as Motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

const navItems = [
    { name: "About", to: "about" },
    { name: "Experience", to: "experience" },
    { name: "Work", to: "projects" },
    { name: "Achievements", to: "achievements" },
    { name: "Contact", to: "contact" },
]

function ThemeToggle({ onClick }) {
    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={onClick}
            aria-label="Toggle color theme"
            className="text-muted-foreground hover:text-foreground"
        >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
    )
}

export default function Header() {
    const { theme, setTheme } = useTheme()
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 24)
        handleScroll()
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")
    const closeMenu = () => setIsOpen(false)

    return (
        <Motion.header
            initial={{ y: -18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
                scrolled
                    ? "border-border/70 bg-background/90 py-2 backdrop-blur-xl"
                    : "border-transparent bg-background/50 py-3 backdrop-blur-md"
            }`}
        >
            <div className="container mx-auto flex items-center justify-between gap-6 px-4">
                <Link
                    to="hero"
                    smooth
                    duration={500}
                    onClick={closeMenu}
                    className="flex shrink-0 cursor-pointer items-center gap-3"
                    aria-label="Nikita Singh, home"
                >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-sm font-bold tracking-tight text-primary">
                        NS
                    </span>
                    <span className="hidden text-sm font-semibold tracking-tight sm:block">
                        Nikita Singh
                    </span>
                </Link>

                <a
                    href="mailto:nk2371174@gmail.com"
                    className="hidden text-sm text-muted-foreground transition-colors hover:text-primary 2xl:block"
                >
                    nk2371174@gmail.com
                </a>

                <nav aria-label="Main navigation" className="hidden items-center gap-5 lg:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.to}
                            smooth
                            duration={500}
                            spy
                            offset={-76}
                            activeClass="!text-primary"
                            className="cursor-pointer text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="hidden items-center gap-2 lg:flex">
                    <ThemeToggle onClick={toggleTheme} />
                    <Button size="sm" asChild className="gap-2 rounded-full px-4">
                        <a href="/Resume.pdf" download>
                            <Download className="h-4 w-4" />
                            Resume
                        </a>
                    </Button>
                </div>

                <div className="flex items-center gap-1 lg:hidden">
                    <ThemeToggle onClick={toggleTheme} />
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsOpen((open) => !open)}
                        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={isOpen}
                        aria-controls="mobile-navigation"
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <Motion.nav
                        id="mobile-navigation"
                        aria-label="Mobile navigation"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute left-0 top-full w-full overflow-hidden border-b border-border bg-background/95 shadow-xl backdrop-blur-xl lg:hidden"
                    >
                        <div className="container mx-auto flex flex-col gap-1 px-4 py-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    smooth
                                    duration={500}
                                    offset={-76}
                                    onClick={closeMenu}
                                    className="cursor-pointer rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Button asChild className="mt-2 w-full gap-2 rounded-full">
                                <a href="/Resume.pdf" download>
                                    <Download className="h-4 w-4" />
                                    Download resume
                                </a>
                            </Button>
                        </div>
                    </Motion.nav>
                )}
            </AnimatePresence>
        </Motion.header>
    )
}
