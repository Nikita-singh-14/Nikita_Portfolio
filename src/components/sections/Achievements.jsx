import { motion, AnimatePresence } from "framer-motion";
import { Trophy, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  achievementsCardVariants,
  sectionTitle,
} from "@/lib/sectionMotionPresets";
import { useState, useEffect } from "react";

const achievements = [
  {
    icon: Trophy,
    title: "Winner - SIH 2025",
    description:
      "Winner Smart India Hackathon (SIH) 2025 | Software Edition",
    details:
      "After 36 hours of relentless effort, sleepless nights, and countless iterations, I emerged as a winner with Team Data_JARVIS. We built a Real-Time Monitoring System for a Disaster Training Management Platform for NDMA.",
    images: [
      "/Sih.png",
      "/Sih-team.png",
      "/Sih-certificate.png",
      "/Sih-winner.png",
      "/Sih-evaluation.png",
    ],
  },
];

export default function Achievements() {
  const [ref, isInView] = useScrollAnimation();
  const [currentImageIndices, setCurrentImageIndices] = useState({});

  const handleImageChange = (index, direction, totalImages) => {
    setCurrentImageIndices((prev) => {
      const currentIndex = prev[index] ?? 0;

      const newIndex =
        direction === "next"
          ? (currentIndex + 1) % totalImages
          : (currentIndex - 1 + totalImages) % totalImages;

      return { ...prev, [index]: newIndex };
    });
  };

  // Automatically change images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndices((prev) => {
        const updatedIndices = { ...prev };

        achievements.forEach((item, index) => {
          if (item.images && item.images.length > 1) {
            const currentIndex = prev[index] ?? 0;
            updatedIndices[index] =
              (currentIndex + 1) % item.images.length;
          }
        });

        return updatedIndices;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="achievements"
      ref={ref}
      className="relative overflow-hidden bg-background py-20"
    >
      {/* Background animations */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          className="absolute left-10 top-12 h-40 w-40 rounded-full bg-yellow-500/10 blur-3xl"
          animate={{ x: [0, 22, 0], y: [0, -14, 0] }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-12 right-12 h-44 w-44 rounded-full bg-cyan-500/10 blur-3xl"
          animate={{ x: [0, -18, 0], y: [0, 12, 0] }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section heading */}
        <motion.div
          variants={sectionTitle}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold">Achievements</h2>
          <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-purple-500" />
        </motion.div>

        <div className="space-y-16">
          {achievements.map((item, index) => {
            const activeImgIndex = currentImageIndices[index] ?? 0;

            return (
              <motion.div
                key={item.title}
                variants={achievementsCardVariants}
                custom={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className={`flex flex-col items-center gap-8 md:gap-12 ${
                  index % 2 === 1
                    ? "md:flex-row-reverse"
                    : "md:flex-row"
                }`}
              >
                {/* Achievement image slideshow */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.95 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="w-full flex-1"
                >
                  <div className="group relative flex min-h-[380px] flex-col justify-end overflow-hidden rounded-3xl border border-border/50 bg-card shadow-xl transition-shadow duration-300 hover:shadow-2xl md:min-h-[420px]">
                    {item.images && item.images.length > 0 ? (
                      <>
                        <div className="absolute inset-0 h-full w-full overflow-hidden">
                          <AnimatePresence mode="wait">
                            <motion.img
                              key={item.images[activeImgIndex]}
                              src={item.images[activeImgIndex]}
                              alt={`${item.title} - Image ${
                                activeImgIndex + 1
                              }`}
                              initial={{ opacity: 0, scale: 1.05 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.95 }}
                              transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                              }}
                              className="absolute inset-0 h-full w-full object-cover"
                            />
                          </AnimatePresence>
                        </div>

                        {/* Image overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                        {/* Previous and next buttons */}
                        {item.images.length > 1 && (
                          <div className="absolute right-4 top-4 z-20 flex gap-2">
                            <button
                              type="button"
                              onClick={() =>
                                handleImageChange(
                                  index,
                                  "prev",
                                  item.images.length
                                )
                              }
                              className="rounded-full border border-white/20 bg-black/40 p-2 text-white backdrop-blur-md transition-colors hover:bg-black/60"
                              aria-label="Previous image"
                            >
                              <ChevronLeft className="h-4 w-4" />
                            </button>

                            <button
                              type="button"
                              onClick={() =>
                                handleImageChange(
                                  index,
                                  "next",
                                  item.images.length
                                )
                              }
                              className="rounded-full border border-white/20 bg-black/40 p-2 text-white backdrop-blur-md transition-colors hover:bg-black/60"
                              aria-label="Next image"
                            >
                              <ChevronRight className="h-4 w-4" />
                            </button>
                          </div>
                        )}

                        {/* Slide indicators */}
                        {item.images.length > 1 && (
                          <div className="absolute left-4 top-5 z-20 flex gap-1.5">
                            {item.images.map((_, imgIdx) => (
                              <button
                                key={imgIdx}
                                type="button"
                                onClick={() =>
                                  setCurrentImageIndices((prev) => ({
                                    ...prev,
                                    [index]: imgIdx,
                                  }))
                                }
                                aria-label={`Show image ${imgIdx + 1}`}
                                aria-current={
                                  activeImgIndex === imgIdx
                                    ? "true"
                                    : undefined
                                }
                                className={`h-1.5 rounded-full transition-all duration-300 ${
                                  activeImgIndex === imgIdx
                                    ? "w-6 bg-white"
                                    : "w-1.5 bg-white/50"
                                }`}
                              />
                            ))}
                          </div>
                        )}

                        {/* Image title and icon */}
                        <div className="relative z-10 flex w-full items-end justify-between p-8 md:p-10">
                          <div>
                            <h3 className="mb-2 text-2xl font-bold text-white">
                              {item.title}
                            </h3>
                            <div className="mt-2 h-1 w-16 rounded-full bg-white/70 transition-all duration-300 group-hover:w-28" />
                          </div>

                          <div className="rounded-full border border-white/20 bg-white/10 p-4 text-white backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                            <item.icon className="h-5 w-5" />
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="relative flex aspect-[16/9] items-center justify-center bg-primary/10">
                        <div className="rounded-full bg-primary/20 p-6 text-primary shadow-lg">
                          <item.icon className="h-12 w-12" />
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Achievement description */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 30 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2 + 0.1,
                  }}
                  className={`flex-1 text-center ${
                    index % 2 === 1
                      ? "md:text-right"
                      : "md:text-left"
                  }`}
                >
                  <div className="relative">
                    <div
                      className={`absolute -top-10 -z-10 select-none text-9xl font-bold text-muted/20 opacity-40 ${
                        index % 2 === 1 ? "right-0" : "left-0"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                      {item.description}
                    </h2>

                    <p className="text-lg font-light leading-relaxed text-muted-foreground">
                      {item.details}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}