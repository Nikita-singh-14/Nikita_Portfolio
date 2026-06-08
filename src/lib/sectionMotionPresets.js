export const sectionShell = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
}

export const sectionTitle = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export const aboutCardVariants = {
  hidden: (index) => ({
    opacity: 0,
    y: 24,
    rotate: index % 2 === 0 ? -2 : 2,
    scale: 0.98,
  }),
  visible: (index) => ({
    opacity: 1,
    y: 0,
    rotate: index % 2 === 0 ? 0 : 0,
    scale: 1,
    transition: {
      duration: 0.55,
      delay: index * 0.1,
      ease: 'easeOut',
    },
  }),
  hover: {
    y: -10,
    rotate: 0,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
}

export const skillsCategoryVariants = {
  hidden: (index) => ({
    opacity: 0,
    x: index % 2 === 0 ? -24 : 24,
    y: 20,
    scale: 0.96,
  }),
  visible: (index) => ({
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: index * 0.16,
      ease: 'easeOut',
    },
  }),
  hover: {
    y: -6,
    boxShadow: '0 20px 45px -24px rgba(168,85,247,0.65)',
    transition: {
      duration: 0.25,
      ease: 'easeOut',
    },
  },
}

export const skillsBadgeVariants = {
  hidden: { opacity: 0, scale: 0.6, y: 12 },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: index * 0.05,
      ease: 'easeOut',
    },
  }),
  hover: {
    y: -4,
    scale: 1.12,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
}

export const experienceCardVariants = {
  hidden: (index) => ({
    opacity: 0,
    x: index % 2 === 0 ? -24 : 24,
    rotate: index % 2 === 0 ? -1.2 : 1.2,
  }),
  visible: (index) => ({
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      duration: 0.55,
      delay: index * 0.16,
      ease: 'easeOut',
    },
  }),
  hover: {
    x: 8,
    transition: {
      duration: 0.25,
      ease: 'easeOut',
    },
  },
}

export const experienceDotVariants = {
  hidden: { opacity: 0, scale: 0.4, rotate: -90 },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.4,
      delay: index * 0.16 + 0.08,
      ease: 'easeOut',
    },
  }),
  hover: {
    scale: 1.25,
    transition: {
      duration: 0.2,
    },
  },
}

export const projectsCardVariants = {
  hidden: (index) => ({
    opacity: 0,
    y: 32,
    rotate: index % 2 === 0 ? -1.1 : 1.1,
    scale: 0.96,
  }),
  visible: (index) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: index * 0.09,
      ease: 'easeOut',
    },
  }),
  hover: {
    y: -12,
    rotate: 0,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
}

export const certificateCardVariants = {
  hidden: (index) => ({
    opacity: 0,
    y: 22,
    rotateY: index % 2 === 0 ? -10 : 10,
    scale: 0.96,
  }),
  visible: (index) => ({
    opacity: 1,
    y: 0,
    rotateY: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      delay: index * 0.12,
      ease: 'easeOut',
    },
  }),
  hover: {
    y: -10,
    rotateY: 0,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
}

export const achievementsCardVariants = {
  hidden: (index) => ({
    opacity: 0,
    x: index % 2 === 0 ? -24 : 24,
    y: 24,
    rotate: index % 2 === 0 ? -1.5 : 1.5,
  }),
  visible: (index) => ({
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.12,
      ease: 'easeOut',
    },
  }),
}

export const contactPanelVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === 'left' ? -28 : 28,
    scale: 0.98,
  }),
  visible: (direction) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: direction === 'left' ? 0.1 : 0.18,
      ease: 'easeOut',
    },
  }),
}
