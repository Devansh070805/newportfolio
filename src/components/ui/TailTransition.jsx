import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * Optimized TailTransition
 * - Uses IntersectionObserver with rootMargin so animation starts before visible.
 * - Uses an inline SVG for the white tip (cheaper to paint than a huge border-radius).
 * - Applies will-change only while animating and removes it after.
 * - Uses contain: "paint" to restrict repaints.
 * - Respects prefers-reduced-motion.
 */
export const TailTransition = () => {
  const containerRef = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // If user prefers reduced motion, avoid animations entirely.
      setShouldAnimate(false);
      return;
    }

    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start animation slightly before it would have appeared
            setShouldAnimate(true);
            setIsAnimating(true);
            // If you only want it once, disconnect here:
            obs.disconnect();
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px 200px 0px", // start 200px before entering viewport
        threshold: 0.05,
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // remove will-change after animation finishes to avoid long-term cost
  useEffect(() => {
    if (!isAnimating) return;
    const t = setTimeout(() => setIsAnimating(false), 600); // slightly longer than animation
    return () => clearTimeout(t);
  }, [isAnimating]);

  return (
    <div
      ref={containerRef}
      id="tail-trigger"
      style={{
        position: "relative",
        width: "100%",
        height: "120vh",
        zIndex: 20,
        pointerEvents: "none",
        overflow: "hidden",
        // restrict repaint/layout scope
        contain: "paint",
        // background-layer promotion hint
        WebkitTransform: "translate3d(0,0,0)",
      }}
    >
      {/* 1) TIP: use an SVG curve instead of a giant border-radius box */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-100px",
          left: 0,
          width: "100%",
          height: "150px",
          zIndex: 2,
          // only set will-change while animating
          willChange: isAnimating ? "transform, opacity" : "auto",
          backfaceVisibility: "hidden",
          transform: "translate3d(0,0,0)",
        }}
      >
        <svg
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "100%", display: "block" }}
        >
          {/* adjust path to match your curve */}
          <path d="M0,150 C360,20 1080,20 1440,150 L1440,0 L0,0 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* 2) BODY: keep it simple and animate using transform/opacity only */}
      <div
        style={{
          position: "absolute",
          top: "49px",
          width: "100%",
          height: "100%",
          backgroundColor: "#E67E22",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
          transform: "translate3d(0,0,0)",
          willChange: isAnimating ? "transform, opacity" : "auto",
          backfaceVisibility: "hidden",
        }}
      >
        <motion.div
          // start slightly offset and invisible, animate in when shouldAnimate=true
          initial={{ opacity: 0, scale: 0.96, y: 8 }}
          animate={shouldAnimate ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.42, ease: "easeOut" }}
          style={{ textAlign: "center", pointerEvents: "none" }}
        >
          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "3rem",
              color: "white",
              margin: 0,
            }}
          >
            Loading...
          </h2>
          <span style={{ fontSize: "3rem", display: "block", marginTop: "10px" }}>🐾</span>
        </motion.div>
      </div>
    </div>
  );
};
