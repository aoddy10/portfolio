import { motion as motionBase } from "framer-motion";

// Framer Motion's React 18 typings can choke on React 19. Cast to any to unblock builds.
export const motion = motionBase as any;
