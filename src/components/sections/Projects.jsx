import { useState } from "react"
import {
    AnimatePresence,
    motion,
    useMotionTemplate,
    useMotionValue,
    useReducedMotion,
    useSpring,
    useTransform,
} from "framer-motion"
import { ArrowLeft, ArrowRight, ExternalLink, Github, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { sectionTitle } from "@/lib/sectionMotionPresets"

/* ------------------------------------------------------------------ */
/* DATA                                                                */
/* - categories: used by the filter tabs (a project can have several)  */
/* - featured:   the one project shown as the big card on "All"        */
/* - highlights: bullet points shown in the detail modal               */
/* - learned:    OPTIONAL. Add a sentence and it appears in the modal  */
/* - demoLabel:  OPTIONAL. Text for the demo button (default: Live Demo) */
/* ------------------------------------------------------------------ */
const projects = [
    {
        title: "Video Sharing Platform",
        description: "Developed and implemented end-to-end functionalities including user authentication, video sharing system, make playlist, comment, tweet etc.",
        image: "Youtube_Clone.png",
        tags: ["React.js", "Tailwind CSS", "Express.js", "Node.js", "MongoDB", "Cloudinary"],
        categories: ["Full-Stack"],
        highlights: [
            "User authentication",
            "Video sharing with media stored on Cloudinary",
            "Playlists, comments and tweets",
            "Built end to end with the MERN stack",
        ],
        demo: "https://youtube-clone-mern-weld.vercel.app/",
        github: "https://github.com/Nikita-singh-14/youtube-clone-mern",
    },
    // {
    //     title: "GGV_CAMPUS_THIRFT",
    //     description: "Developed and implemented end-to-end functionalities including user authentication, cart system, order management, and role-based access control for a seamless marketplace experience.",
    //     image: "GGV_CAMPUS_THIRFT.jpeg",
    //     tags: ["TypeScript", "Tailwind CSS", "Express.js", "Node.js", "MongoDB"],
    //     categories: ["Full-Stack"],
    //     highlights: [
    //         "User authentication",
    //         "Cart system and order management",
    //         "Role-based access control",
    //         "A campus marketplace for buying and selling",
    //     ],
    //     demo: "https://ggv-campus-thirft.vercel.app/",
    //     github: "https://github.com/Nikita-singh-14/GGV_CAMPUS_THIRFT",
    // },
    {
        title: "Scalable ChatApp",
        description: "Built scalable real-time chat using Socket.IO and Redis Pub/Sub for low-latency multi-server sync.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
        tags: ["Socket.IO", "Redis", "Node.js"],
        categories: ["Backend"],
        featured: true,
        highlights: [
            "Real-time messaging with Socket.IO",
            "Redis Pub/Sub keeps multiple servers in sync",
            "Designed for low-latency delivery across servers",
        ],
        demo: "https://www.linkedin.com/posts/nikitasingh143_systemdesign-backendengineering-redis-ugcPost-7453418315294679040-_RgN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEy3ebIBpg_3pgXZCszPwFB3mrsKbQ-akp8",
        demoLabel: "Read the Post",
        github: "https://github.com/Nikita-singh-14/Scalable_Chatapp",
    },
    {
        title: "Reverse Proxy & Load Balancer",
        description: "Backend project focused on load balancing and reverse proxy logic.",
        image: "LoadBalancer.png",
        tags: ["Typescript", "YAML", "Zod", "Redis"],
        categories: ["Backend"],
        highlights: [
            "Reverse proxy that routes requests across servers",
            "Load balancing logic written in TypeScript",
            "YAML configuration validated with Zod",
        ],
        demo: "https://github.com/Nikita-singh-14/Load_balancer",
        github: "https://github.com/Nikita-singh-14/Load_balancer",
    },
    {
        title: "Task Management App",
        description: "My first full stack project: a task manager with a Node.js backend and a responsive UI.",
        image: "TaskManeger.png",
        tags: ["Express", "Node.js", "MongoDB", "TypeScript", "Tailwind"],
        categories: ["Full-Stack"],
        highlights: [
            "Task management with a Node.js and MongoDB backend",
            "Typed with TypeScript",
            "Responsive UI styled with Tailwind",
        ],
        demo: "https://task-maneger-psi.vercel.app/",
        github: "https://github.com/Nikita-singh-14/Task_Maneger",
    },
    // {
    //     title: "Tripforlife",
    //     description: "My first React project: a modern, responsive website for trip and travel.",
    //     image: "Tripforlife.png",
    //     tags: ["React", "Vite", "Tailwind CSS"],
    //     categories: ["Frontend"],
    //     highlights: [
    //         "Responsive layout for a trip and travel website",
    //         "Built with React and Vite",
    //         "Styled with Tailwind CSS",
    //     ],
    //     demo: "https://user-profile-mws4.vercel.app/",
    //     github: "https://github.com/Nikita-singh-14/user-profile",
    // },
    {
        title: "SiymonSays Game",
        description: "A fun and interactive game that tests your memory and reflexes.",
        image: "Siymon.png",
        tags: ["HTML", "CSS", "JavaScript"],
        categories: ["Frontend", "Games"],
        highlights: [
            "Tests your memory and reflexes",
            "Built with plain HTML, CSS and JavaScript",
            "Deployed on Vercel",
        ],
        demo: "https://saymonsays.vercel.app/",
        github: "https://github.com/Nikita-singh-14/Saymonsays",
    },
]

const FILTERS = ["All", "Full-Stack", "Backend", "Frontend", "Games"]

const hasSeparateDemo = (p) => p.demo && p.demo !== p.github

/* ------------------------------------------------------------------ */
/* TILT WRAPPER: card leans toward the mouse and a soft glare follows  */
/* It does nothing on touch screens or when reduced motion is on.      */
/* ------------------------------------------------------------------ */
function TiltCard({ children, className = "", onClick }) {
    const reduceMotion = useReducedMotion()
    const x = useMotionValue(0.5)
    const y = useMotionValue(0.5)
    const springX = useSpring(x, { stiffness: 220, damping: 22 })
    const springY = useSpring(y, { stiffness: 220, damping: 22 })

    const rotateX = useTransform(springY, [0, 1], [7, -7])
    const rotateY = useTransform(springX, [0, 1], [-7, 7])
    const glareX = useTransform(springX, (v) => `${v * 100}%`)
    const glareY = useTransform(springY, (v) => `${v * 100}%`)
    const glare = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.16), transparent 55%)`

    const handleMove = (e) => {
        if (reduceMotion || e.pointerType !== "mouse") return
        const rect = e.currentTarget.getBoundingClientRect()
        x.set((e.clientX - rect.left) / rect.width)
        y.set((e.clientY - rect.top) / rect.height)
    }
    const handleLeave = () => {
        x.set(0.5)
        y.set(0.5)
    }

    return (
        <motion.div
            onPointerMove={handleMove}
            onPointerLeave={handleLeave}
            onClick={onClick}
            style={{ rotateX, rotateY, transformPerspective: 900 }}
            className={`group relative h-full cursor-pointer ${className}`}
        >
            {children}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: glare }}
            />
        </motion.div>
    )
}

/* ------------------------------------------------------------------ */
/* SMALL PIECES                                                        */
/* ------------------------------------------------------------------ */
function ProjectLinks({ project, size = "sm" }) {
    const stop = (e) => e.stopPropagation()
    return (
        <div className="flex flex-wrap gap-2">
            {hasSeparateDemo(project) && (
                <Button size={size} asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" onClick={stop} className="gap-2">
                        <ExternalLink className="h-4 w-4" /> {project.demoLabel ?? "Live Demo"}
                    </a>
                </Button>
            )}
            <Button size={size} variant="outline" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={stop} className="gap-2">
                    <Github className="h-4 w-4" /> Code
                </a>
            </Button>
        </div>
    )
}

function ProjectCard({ project, onOpen }) {
    const visibleTags = project.tags.slice(0, 4)
    const extra = project.tags.length - visibleTags.length

    return (
        <TiltCard onClick={onOpen}>
            <Card className="h-full overflow-hidden flex flex-col bg-card hover:border-primary/50 transition-colors duration-300">
                <div className="h-48 overflow-hidden">
                    <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
                <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-grow flex-col">
                    <CardDescription className="mb-4 line-clamp-3 text-base">{project.description}</CardDescription>
                    <div className="mb-5 flex flex-wrap gap-2">
                        {visibleTags.map((tag) => (
                            <Badge key={tag} variant="outline">{tag}</Badge>
                        ))}
                        {extra > 0 && <Badge variant="secondary">+{extra}</Badge>}
                    </div>
                    <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
                        <Button
                            size="sm"
                            variant="ghost"
                            className="px-2"
                            onClick={(e) => {
                                e.stopPropagation()
                                onOpen()
                            }}
                        >
                            View details
                        </Button>
                        <ProjectLinks project={project} />
                    </div>
                </CardContent>
            </Card>
        </TiltCard>
    )
}

function FeaturedCard({ project, onOpen }) {
    return (
        <Card
            onClick={onOpen}
            className="group cursor-pointer overflow-hidden bg-card hover:border-primary/50 transition-colors duration-300 md:grid md:grid-cols-2"
        >
            <div className="h-56 overflow-hidden md:h-full md:min-h-[320px]">
                <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <div className="flex flex-col justify-center gap-4 p-6 md:p-10">
                <Badge className="w-fit gap-1">
                    <Star className="h-3.5 w-3.5" /> Featured project
                </Badge>
                <h3 className="text-2xl font-bold md:text-3xl">{project.title}</h3>
                <p className="text-base text-muted-foreground">{project.description}</p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {project.highlights.map((h) => (
                        <li key={h} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            {h}
                        </li>
                    ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                    <Button
                        variant="secondary"
                        onClick={(e) => {
                            e.stopPropagation()
                            onOpen()
                        }}
                    >
                        View details
                    </Button>
                    <ProjectLinks project={project} size="default" />
                </div>
            </div>
        </Card>
    )
}

function FilterTabs({ value, onChange }) {
    return (
        <div role="group" aria-label="Filter projects by category" className="mb-10 flex flex-wrap justify-center gap-2">
            {FILTERS.map((name) => {
                const active = value === name
                return (
                    <button
                        key={name}
                        type="button"
                        aria-pressed={active}
                        onClick={() => onChange(name)}
                        className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                            active ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                        }`}
                    >
                        {active && (
                            <motion.span
                                layoutId="active-filter-pill"
                                className="absolute inset-0 rounded-full bg-primary"
                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                        )}
                        <span className="relative z-10">{name}</span>
                    </button>
                )
            })}
        </div>
    )
}

/* ------------------------------------------------------------------ */
/* MAIN COMPONENT                                                      */
/* ------------------------------------------------------------------ */
export default function Projects() {
    const [ref, isInView] = useScrollAnimation()
    const [filter, setFilter] = useState("All")
    const [activeTitle, setActiveTitle] = useState(null)

    const featured = projects.find((p) => p.featured)
    const filtered = projects.filter((p) => filter === "All" || p.categories.includes(filter))
    const showFeatured = filter === "All" && Boolean(featured)
    const gridProjects = showFeatured ? filtered.filter((p) => !p.featured) : filtered

    // Order used by the modal's previous / next buttons
    const navList = showFeatured ? [featured, ...gridProjects] : gridProjects
    const activeIndex = navList.findIndex((p) => p.title === activeTitle)
    const active = activeIndex >= 0 ? navList[activeIndex] : null

    const go = (direction) => {
        if (activeIndex < 0) return
        const next = navList[(activeIndex + direction + navList.length) % navList.length]
        setActiveTitle(next.title)
    }

    const handleKeyDown = (e) => {
        if (e.key === "ArrowRight") go(1)
        if (e.key === "ArrowLeft") go(-1)
    }

    return (
        <section id="projects" className="py-20 bg-muted/50 relative overflow-hidden" ref={ref}>
            {/* Soft animated background glows */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <motion.div
                    className="absolute left-8 top-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl"
                    animate={{ y: [0, -14, 0], scale: [1, 1.08, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute right-12 bottom-8 h-44 w-44 rounded-full bg-cyan-500/10 blur-3xl"
                    animate={{ x: [0, -18, 0], y: [0, 14, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section heading */}
                <motion.div
                    variants={sectionTitle}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl font-bold mb-4">Projects</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A selection of projects that demonstrate my technical expertise and creative problem solving.
                    </p>
                </motion.div>

                <FilterTabs value={filter} onChange={setFilter} />

                <div className="mx-auto max-w-6xl">
                    {/* Featured project (only on "All") */}
                    <AnimatePresence initial={false}>
                        {showFeatured && (
                            <motion.div
                                key="featured"
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.97 }}
                                transition={{ duration: 0.35 }}
                                className="mb-8"
                            >
                                <FeaturedCard project={featured} onOpen={() => setActiveTitle(featured.title)} />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Grid: 1 column on mobile, 2 on medium, 3 on large */}
                    <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <AnimatePresence mode="popLayout" initial={false}>
                            {gridProjects.map((project) => (
                                <motion.div
                                    key={project.title}
                                    layout
                                    initial={{ opacity: 0, scale: 0.92 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.92 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ProjectCard project={project} onOpen={() => setActiveTitle(project.title)} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    <p className="sr-only" aria-live="polite">
                        Showing {navList.length} {navList.length === 1 ? "project" : "projects"}
                    </p>
                </div>
            </div>

            {/* Detail modal */}
            <Dialog open={Boolean(active)} onOpenChange={(open) => !open && setActiveTitle(null)}>
                {active && (
                    <DialogContent
                        onKeyDown={handleKeyDown}
                        className="max-h-[90vh] max-w-3xl gap-0 overflow-y-auto p-0"
                    >
                        <img
                            src={active.image}
                            alt={`${active.title} preview`}
                            className="h-56 w-full object-cover object-top sm:h-72"
                        />
                        <div className="space-y-5 p-6">
                            <DialogHeader className="space-y-2 text-left">
                                <DialogTitle className="text-2xl">{active.title}</DialogTitle>
                                <DialogDescription className="text-base">{active.description}</DialogDescription>
                            </DialogHeader>

                            <div>
                                <h4 className="mb-2 font-semibold">What it does</h4>
                                <ul className="space-y-1.5 text-sm text-muted-foreground">
                                    {active.highlights.map((h) => (
                                        <li key={h} className="flex gap-2">
                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                            {h}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {active.learned && (
                                <div>
                                    <h4 className="mb-2 font-semibold">What I learned</h4>
                                    <p className="text-sm text-muted-foreground">{active.learned}</p>
                                </div>
                            )}

                            <div>
                                <h4 className="mb-2 font-semibold">Tech stack</h4>
                                <div className="flex flex-wrap gap-2">
                                    {active.tags.map((tag) => (
                                        <Badge key={tag} variant="outline">{tag}</Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center justify-between gap-4 border-t pt-5">
                                <ProjectLinks project={active} size="default" />
                                {navList.length > 1 && (
                                    <div className="flex items-center gap-2">
                                        <Button variant="outline" size="icon" onClick={() => go(-1)} aria-label="Previous project">
                                            <ArrowLeft className="h-4 w-4" />
                                        </Button>
                                        <span className="min-w-[3.5rem] text-center text-sm text-muted-foreground">
                                            {activeIndex + 1} / {navList.length}
                                        </span>
                                        <Button variant="outline" size="icon" onClick={() => go(1)} aria-label="Next project">
                                            <ArrowRight className="h-4 w-4" />
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </DialogContent>
                )}
            </Dialog>
        </section>
    )
}