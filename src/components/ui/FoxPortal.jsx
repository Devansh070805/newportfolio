import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { SpriteFox } from "../fox/SpriteFox";

export const FoxPortal = ({ visible }) => {
  if (!visible) return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0, rotate: [0, 2, 0, -2, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      style={{
        position: "fixed",
        bottom: "60px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000000,
        pointerEvents: "none"
      }}
    >
      <div style={{ transform: "scale(0.12)", transformOrigin: "bottom left" }}>
        <SpriteFox />
      </div>
    </motion.div>,
    document.body
  );
};
