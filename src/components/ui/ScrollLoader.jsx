import { motion, AnimatePresence } from "framer-motion";

const ScrollLoader = ({ visible }) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "#ff7a00",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "all"
          }}
        >
          {/* Loader */}
          <motion.div
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              border: "6px solid rgba(255,255,255,0.3)",
              borderTop: "6px solid white"
            }}
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              ease: "linear"
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollLoader;
