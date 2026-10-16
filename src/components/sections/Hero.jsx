import { motion as Motion } from "framer-motion"
import { Link } from "react-scroll"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FaLinkedin } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa"

const introMotion = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, delay: 0.12 + index * 0.12, ease: "easeOut" },
    }),
}

export default function Hero() {
    return (
        <section
            id="hero"
            className="portfolio-hero relative flex min-h-[min(900px,100svh)] items-center overflow-hidden pb-16 pt-28"
        >
            <div className="hero-contours pointer-events-none absolute inset-0" aria-hidden="true" />
            <svg
                className="hero-contour-art pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 1200 900"
                preserveAspectRatio="xMidYMid slice"
                aria-hidden="true"
            >
                <defs>
                    <linearGradient id="hero-contour-stroke" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#9860ff" stopOpacity="0.18" />
                        <stop offset="55%" stopColor="#a27bff" stopOpacity="0.72" />
                        <stop offset="100%" stopColor="#7142d8" stopOpacity="0.22" />
                    </linearGradient>
                    <filter id="hero-contour-warp" x="-15%" y="-15%" width="130%" height="130%">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.008 0.014"
                            numOctaves="2"
                            seed="7"
                            result="contour-noise"
                        />
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="contour-noise"
                            scale="24"
                            xChannelSelector="R"
                            yChannelSelector="G"
                        />
                    </filter>
                    <mask id="hero-contour-fade">
                        <linearGradient id="hero-contour-mask" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="black" />
                            <stop offset="28%" stopColor="white" />
                            <stop offset="100%" stopColor="white" />
                        </linearGradient>
                        <rect width="1200" height="900" fill="url(#hero-contour-mask)" />
                    </mask>
                </defs>
                <g mask="url(#hero-contour-fade)" fill="none" stroke="url(#hero-contour-stroke)" strokeWidth="1">
                    <g className="hero-contour-rings hero-contour-rings-main" filter="url(#hero-contour-warp)">
                        {Array.from({ length: 24 }, (_, index) => (
                            <ellipse
                                key={`main-${index}`}
                                cx="860"
                                cy="430"
                                rx={125 + index * 19}
                                ry={78 + index * 14}
                            />
                        ))}
                    </g>
                    <g className="hero-contour-rings hero-contour-rings-side" filter="url(#hero-contour-warp)">
                        {Array.from({ length: 14 }, (_, index) => (
                            <ellipse
                                key={`side-${index}`}
                                cx="205"
                                cy="220"
                                rx={55 + index * 17}
                                ry={40 + index * 12}
                            />
                        ))}
                    </g>
                </g>
            </svg>

            <div className="container relative z-10 mx-auto grid items-center gap-14 px-4 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="hero-rail relative max-w-3xl">
                    <Motion.div
                        custom={0}
                        variants={introMotion}
                        initial="hidden"
                        animate="visible"
                        className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary"
                    >
                        <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.9)]" />
                        Full-Stack Developer
                    </Motion.div>

                    <Motion.p
                        custom={1}
                        variants={introMotion}
                        initial="hidden"
                        animate="visible"
                        className="mb-2 text-xl font-medium text-foreground/80 sm:text-2xl"
                    >
                        Hi, I&apos;m
                    </Motion.p>
                    <Motion.h1
                        custom={2}
                        variants={introMotion}
                        initial="hidden"
                        animate="visible"
                        className="mb-6 text-[clamp(3.5rem,9vw,7.5rem)] font-extrabold leading-[0.93] tracking-[-0.075em] text-foreground"
                    >
                        Nikita
                        <br />
                        <span className="text-primary">Singh.</span>
                    </Motion.h1>

                    <Motion.p
                        custom={3}
                        variants={introMotion}
                        initial="hidden"
                        animate="visible"
                        className="mb-4 max-w-xl text-xl font-medium leading-relaxed text-foreground/90 sm:text-2xl"
                    >
                        Full-Stack Developer &amp; Graphic Designer
                    </Motion.p>
                    <Motion.p
                        custom={4}
                        variants={introMotion}
                        initial="hidden"
                        animate="visible"
                        className="mb-9 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg"
                    >
                        I build thoughtful digital experiences with clean interfaces, modern web technology, and a problem-solving mindset.
                    </Motion.p>

                    <Motion.div
                        custom={5}
                        variants={introMotion}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-wrap items-center gap-3"
                    >
                        <Button asChild size="lg" className="group gap-2 rounded-full px-6">
                            <Link to="projects" smooth duration={600} className="cursor-pointer">
                                Explore my work
                                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="gap-2 rounded-full px-5">
                            <a href="mailto:nk2371174@gmail.com">
                                Get in touch
                                <ArrowUpRight className="h-4 w-4" />
                            </a>
                        </Button>
                        <a
                            href="https://github.com/Nikita-singh-14"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Nikita Singh on GitHub"
                            className="ml-1 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                        >
                            <FaGithub className="h-4 w-4" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/nikita-singh-3560652bb/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Nikita Singh on LinkedIn"
                            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                        >
                            <FaLinkedin className="h-4 w-4" />
                        </a>
                    </Motion.div>

                    <Motion.div
                        custom={6}
                        variants={introMotion}
                        initial="hidden"
                        animate="visible"
                        className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-border/70 pt-5 text-sm text-muted-foreground"
                    >
                        <span><strong className="mr-2 text-foreground">80+</strong> LeetCode problems</span>
                        <span><strong className="mr-2 text-foreground">SIH 2025</strong> National winner</span>
                    </Motion.div>
                </div>

                <Motion.div
                    initial={{ opacity: 0, scale: 0.94, y: 18 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
                    className="relative mx-auto w-full max-w-md lg:max-w-[440px]"
                >
                    <div className="absolute -inset-7 rounded-[2.5rem] bg-primary/10 blur-3xl" aria-hidden="true" />
                    <div className="hero-image-frame relative overflow-hidden rounded-[2rem] border border-white/10 p-3">
                        <div className="overflow-hidden rounded-[1.45rem] bg-muted">
                            <img
                                src="/image.png"
                                alt="Nikita Singh"
                                className="aspect-[4/4.5] w-full object-cover object-center"
                                fetchPriority="high"
                            />
                        </div>
                        <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between gap-4 rounded-2xl border border-white/15 bg-background/75 px-4 py-3 backdrop-blur-xl">
                            <div>
                                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary">Smart India Hackathon</p>
                                <p className="mt-1 text-sm font-semibold text-foreground">SIH 2025 Winner</p>
                            </div>
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                                <ArrowUpRight className="h-5 w-5" />
                            </span>
                        </div>
                    </div>
                    <div className="absolute -right-6 top-10 hidden rounded-full border border-primary/20 bg-background/85 px-4 py-2 text-xs font-medium text-muted-foreground shadow-xl backdrop-blur-lg sm:block">
                        Design-minded developer
                    </div>
                </Motion.div>
            </div>
        </section>
    )
}
