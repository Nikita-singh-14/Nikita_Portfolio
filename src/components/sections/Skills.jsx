// import { motion } from "framer-motion"
// import { Badge } from "@/components/ui/badge"
// import { useScrollAnimation } from "@/hooks/useScrollAnimation"
// import { sectionTitle, skillsBadgeVariants, skillsCategoryVariants } from "@/lib/sectionMotionPresets"

// const skillCategories = [
//     {
//         title: "Frontend",
//         skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "TypeScript", "Framer Motion", "Redux"]
//     },
//     {
//         title: "Backend",
//         skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Firebase", "REST APIs", "Redis"]
//     },
//     {
//         title: "Design",
//         skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "UI/UX Principles", "Prototyping"]
//     },
//     {
//         title: "Tools & DevOps",
//         skills: ["Git", "GitHub", "VS Code", "Vercel", "Netlify", "Postman", "Linux"]
//     }
// ]

// export default function Skills() {
//     const [ref, isInView] = useScrollAnimation()

//     return (
//         <section id="skills" className="py-20 bg-background relative overflow-hidden" ref={ref}>
//             <motion.div
//                 className="absolute inset-0 pointer-events-none"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 1, ease: "easeOut" }}
//             >
//                 <motion.div
//                     className="absolute left-5 top-20 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl"
//                     animate={{ x: [0, 24, 0], y: [0, -12, 0] }}
//                     transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
//                 />
//                 <motion.div
//                     className="absolute right-10 bottom-12 h-44 w-44 rounded-full bg-cyan-500/10 blur-3xl"
//                     animate={{ x: [0, -18, 0], y: [0, 16, 0] }}
//                     transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
//                 />
//             </motion.div>

//             <div className="container mx-auto px-4 relative z-10">
//                 <motion.div
//                     variants={sectionTitle}
//                     initial="hidden"
//                     animate={isInView ? "visible" : "hidden"}
//                     className="text-center mb-16"
//                 >
//                     <h2 className="text-3xl font-bold mb-4">Technologies I Work With</h2>
//                     <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full mb-6" />
//                     <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//                         A comprehensive toolset for building robust applications and engaging interfaces.
//                     </p>
//                 </motion.div>

//                 <motion.div
//                     className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto"
//                     initial="hidden"
//                     animate={isInView ? "visible" : "hidden"}
//                 >
//                     {skillCategories.map((category, index) => (
//                         <motion.div
//                             key={index}
//                             variants={skillsCategoryVariants}
//                             custom={index}
//                             whileHover="hover"
//                             className="bg-card border rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 hover:border-purple-500/50 backdrop-blur-md"
//                         >
//                             <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
//                                 {category.title}
//                             </h3>
//                             <motion.div
//                                 className="flex flex-wrap gap-2"
//                                 initial="hidden"
//                                 animate={isInView ? "visible" : "hidden"}
//                             >
//                                 {category.skills.map((skill, i) => (
//                                     <motion.div
//                                         key={i}
//                                         variants={skillsBadgeVariants}
//                                         custom={i}
//                                         whileHover="hover"
//                                         whileTap={{ scale: 0.9 }}
//                                     >
//                                         <Badge
//                                             variant="secondary"
//                                             className="text-sm py-1 px-3 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors cursor-default"
//                                         >
//                                         {skill}
//                                         </Badge>
//                                     </motion.div>
//                                 ))}
//                             </motion.div>
//                         </motion.div>
//                     ))}
//                 </motion.div>
//             </div>
//         </section>
//     )
// }

"use client"

const techs = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
]

const half = Math.ceil(techs.length / 2)
const row1 = techs.slice(0, half)
const row2 = techs.slice(half)

function TechPill({ name, icon }) {
  return (
    <div className="flex items-center gap-3 px-4 py-2.5 bg-card border border-border rounded-xl whitespace-nowrap hover:border-purple-500/40 hover:bg-muted transition-all duration-200 cursor-default">
      <img src={icon} alt={name} className="w-5 h-5 object-contain" loading="lazy" />
      <span className="text-sm font-medium text-foreground">{name}</span>
    </div>
  )
}

function MarqueeRow({ items, reverse = false }) {
  const doubled = [...items, ...items]
  return (
    <div
      className="marquee-track"
      style={{
        animation: `${reverse ? "marquee-reverse" : "marquee"} 30s linear infinite`
      }}
    >
      {doubled.map((tech, i) => (
        <TechPill key={i} {...tech} />
      ))}
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-background overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-track {
          display: flex;
          gap: 25px;
          width: max-content;
        }
        .marquee-row:hover .marquee-track {
          animation-play-state: paused !important;
        }
      `}</style>

      <div className="container mx-auto px-4 mb-12 text-center">
        <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 inline-block" />
          My Tech Stack
        </div>
        <h2 className="text-3xl font-bold text-foreground">Technologies I Work With</h2>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />

        <div className="flex flex-col gap-4">
          <div className="marquee-row overflow-hidden">
            <MarqueeRow items={row1} />
          </div>
          <div className="marquee-row overflow-hidden">
            <MarqueeRow items={row2} reverse />
          </div>
        </div>
      </div>
    </section>
  )
}