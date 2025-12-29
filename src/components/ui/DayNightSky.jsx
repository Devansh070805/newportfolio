import { motion, useScroll, useTransform } from "framer-motion";

export const DayNightSky = ({ children }) => {
  const { scrollYProgress } = useScroll();
  
  // 1. THE SKY: Dark -> Sunrise -> Blue
  const background = useTransform(
    scrollYProgress,
    [0, 0.4, 1], // Timing: Night until 40%, then Sunrise
    ["#0f0c29", "#ffa07a", "#87CEEB"] // The Colors
  );

  return (
    <motion.div style={{ background, minHeight: "100vh", position: "relative" }}>
      {children}
    </motion.div>
  );
};