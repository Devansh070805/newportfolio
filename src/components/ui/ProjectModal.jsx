import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

// --- Icons (SVG) ---
const Icons = {
  Back: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
  ),
  Code: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
  ),
  Rocket: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
  ),
  File: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
  )
};

// --- Helper: Action Button ---
const ActionButton = ({ label, icon, link, color, variant = "solid" }) => {
  if (!link) return null;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", width: "100%", display: "block" }}>
      <motion.button
        whileHover={{ scale: 1.02, x: 5, backgroundColor: variant === "outline" ? `${color}10` : undefined }}
        whileTap={{ scale: 0.98 }}
        style={{
          width: "100%",
          padding: "16px 24px",
          marginBottom: "12px",
          borderRadius: "14px",
          border: variant === "outline" ? `1px solid ${color}40` : "1px solid rgba(255,255,255,0.05)",
          background: variant === "solid" 
            ? `linear-gradient(135deg, ${color}20 0%, ${color}10 100%)` 
            : "transparent",
          color: variant === "outline" ? color : "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
          fontFamily: "'Outfit', sans-serif",
          fontWeight: "600",
          fontSize: "1rem",
          transition: "all 0.3s ease",
          boxShadow: variant === "solid" ? `0 4px 20px ${color}15` : "none"
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {icon} {label}
        </span>
        <span style={{ opacity: 0.5, fontSize: "1.2rem" }}>→</span>
      </motion.button>
    </a>
  );
};

// --- Main Modal Component ---
export const ProjectModal = ({ project, isOpen, onClose }) => {
  
  // Lock Body Scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  // Handle Escape Key
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999999,
            background: "#0b0b15", 
            overflowY: "auto",     
            display: "flex",
            flexDirection: "column"
          }}
        >
          {/* CSS for Responsive Layout */}
          <style>
            {`
              .modal-layout {
                display: flex;
                flex-direction: row;
                gap: 50px;
                align-items: stretch;
              }
              .vertical-divider {
                width: 1px;
                background: linear-gradient(to bottom, rgba(255,255,255,0.02), rgba(255,255,255,0.1), rgba(255,255,255,0.02));
                margin: 0;
              }
              /* Stack columns on mobile */
              @media (max-width: 968px) {
                .modal-layout {
                  flex-direction: column;
                  gap: 40px;
                }
                .vertical-divider {
                  display: none;
                }
              }
            `}
          </style>
          
          {/* --- TOP BAR --- */}
          <div style={{ 
            position: "sticky", 
            top: 0, 
            padding: "20px 30px", 
            zIndex: 10,
            background: "rgba(11, 11, 21, 0.9)", 
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            display: "flex",
            alignItems: "center"
          }}>
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 122, 0, 0.15)" }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "rgba(255, 122, 0, 0.08)",
                border: "1px solid rgba(255, 122, 0, 0.25)",
                color: "#ff7a00",
                padding: "8px 18px",
                borderRadius: "30px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.9rem",
                fontWeight: "700",
                fontFamily: "'Outfit', sans-serif",
                transition: "background 0.3s ease"
              }}
            >
              <Icons.Back /> Back
            </motion.button>
          </div>

          {/* --- MAIN CONTENT CONTAINER --- */}
          <div style={{ 
            maxWidth: "200vw", 
            width: "100%", 
            margin: "0 auto", 
            padding: "50px 5vw 100px 5vw",
            flex: 1
          }}>

            <div className="modal-layout">
              
              {/* === LEFT COLUMN: Content === */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                style={{ flex: 2, paddingRight: "20px" }} // flex-grow 2 for more width
              >
                 {/* 1. Tech Tags */}
                 <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "20px" }}>
                  {project.tech.map((t, i) => (
                    <span key={i} style={{ 
                      fontSize: "0.8rem", 
                      color: "#a56be8", 
                      background: "rgba(165, 107, 232, 0.1)", 
                      border: "1px solid rgba(165, 107, 232, 0.25)",
                      padding: "6px 14px", 
                      borderRadius: "100px", 
                      fontWeight: "600",
                      letterSpacing: "0.5px",
                      textTransform: "uppercase"
                    }}>
                      {t}
                    </span>
                  ))}
                </div>

                 {/* 2. Title */}
                 <h1 style={{ 
                   fontSize: "clamp(3rem, 6vw, 5rem)", 
                   margin: "0 0 40px 0",
                   fontFamily: "'Outfit', sans-serif", 
                   fontWeight: "800",
                   lineHeight: 1.1,
                   background: "linear-gradient(135deg,#ffffff 30%, #a56be8 100%)", 
                   WebkitBackgroundClip: "text", 
                   WebkitTextFillColor: "transparent"
                 }}>
                   {project.title}
                 </h1>

                 {/* 3. Description */}
                 <h3 style={{ color: "white", marginBottom: "20px", fontSize: "1.4rem", fontWeight: "600" }}>About the Project</h3>
                 <p style={{ 
                   color: "#cfcfcf", 
                   lineHeight: "1.8", 
                   fontSize: "1.1rem", 
                   fontFamily: "sans-serif", 
                   whiteSpace: "pre-line",
                   maxWidth: "90%" // Keep text from spanning too wide
                 }}>
                   {project.description}
                 </p>
              </motion.div>

              {/* === VERTICAL DIVIDER === */}
              <div className="vertical-divider" />

              {/* === RIGHT COLUMN: Links === */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                style={{ flex: 1, minWidth: "300px" }}
              >
                 <div style={{ 
                   background: "rgba(255,255,255,0.03)", 
                   backdropFilter: "blur(12px)",
                   padding: "35px", 
                   borderRadius: "24px", 
                   border: "1px solid rgba(255,255,255,0.08)",
                   position: "sticky",
                   top: "100px", 
                   boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                 }}>
                    <h4 style={{ 
                        color: "#fff", 
                        margin: "0 0 25px 0", 
                        fontSize: "1.2rem", 
                        fontWeight: "700", 
                        letterSpacing: "0.5px" 
                    }}>
                        Project Links
                    </h4>
                    
                    <ActionButton label="View Source Code" icon={<Icons.Code />} link={project.github} color="#a56be8" />
                    <ActionButton label="Launch Live App" icon={<Icons.Rocket />} link={project.live} color="#ff7a00" />
                    <ActionButton label="Read Documentation" icon={<Icons.File />} link={project.report} color="#2196f3" variant="outline" />
                 </div>
              </motion.div>

            </div> {/* End Layout */}
          </div>

        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};