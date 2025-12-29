import { motion } from "framer-motion";

const LaunchScreen = ({ onFinish }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        position: "fixed",
        inset: 0,
        background: "#0b0b0b",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          color: "white",
          fontSize: "3rem",
          fontWeight: 600,
          letterSpacing: "0.02em"
        }}
        onAnimationComplete={() => {
          setTimeout(onFinish, 1200);
        }}
      >
        Hey, it's Dev.
      </motion.h1>
    </motion.div>
  );
};

export default LaunchScreen;
