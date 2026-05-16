import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
  },

  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.35,
      delay: custom,
      ease: "easeOut",
    },
  }),
};