import React, { useEffect, useState } from "react";
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
  ),
  Pause: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
  ),
  Play: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M8 5v14l11-7z"/></svg>
  ),
  Close: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
  )
};

// --- Helper: Action Button ---
const ActionButton = ({ label, icon, link, color, variant = "solid" }) => {
  if (!link) return null;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", flex: "1 1 200px" }}>
      <motion.button
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        style={{
          width: "100%",
          padding: "16px 20px",
          borderRadius: "12px",
          border: variant === "outline" ? `1px solid ${color}40` : "1px solid rgba(255,255,255,0.05)",
          background: variant === "solid" 
            ? `linear-gradient(135deg, ${color}20 0%, ${color}10 100%)` 
            : "transparent",
          color: variant === "outline" ? color : "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          cursor: "pointer",
          fontFamily: "'Outfit', sans-serif",
          fontWeight: "600",
          fontSize: "1rem",
          transition: "all 0.3s ease",
          boxShadow: variant === "solid" ? `0 4px 15px ${color}15` : "none"
        }}
      >
        {icon} <span>{label}</span>
      </motion.button>
    </a>
  );
};

// --- Main Modal Component ---
export const ProjectModal = ({ project, isOpen, onClose }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [previewMedia, setPreviewMedia] = useState(null);

  // --- SPEED CONFIGURATION ---
  // Decrease this number to make it FASTER (e.g. 2 or 3)
  // Increase this number to make it SLOWER (e.g. 8 or 10)
  const SPEED_PER_ITEM = 1; 

  // Lock Body Scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  // Handle Close Preview & Resume
  const handleClosePreview = () => {
    setPreviewMedia(null);
    setIsPaused(false); // <--- FIX: Auto-resume when closing preview
  };

  // Handle Escape Key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        if (previewMedia) {
          handleClosePreview(); // Close preview & resume
        } else if (isOpen) {
          onClose();
        }
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose, isOpen, previewMedia]);

  if (!isOpen) return null;

  // Mock images if not present
  const galleryMedia = project.images || [
    "https://picsum.photos/600/400?random=1",
    "https://picsum.photos/600/400?random=2",
    "https://picsum.photos/600/400?random=3",
    "https://picsum.photos/600/400?random=4"
  ];
  
  // Double the list for seamless loop
  const seamlessMedia = [...galleryMedia, ...galleryMedia];

  // Calculate Duration
  const animationDuration = `${Math.max(10, seamlessMedia.length * SPEED_PER_ITEM)}s`;

  // Helper to check for video extensions
  const isVideo = (url) => {
    return url.match(/\.(mp4|webm|ogg|mov)$/i);
  };

  const handleMediaClick = (src) => {
    setIsPaused(true);
    setPreviewMedia(src);
  };

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
            zIndex: 9999,
            background: "#0b0b15", 
            overflowY: "auto",     
            display: "flex",
            flexDirection: "column"
          }}
        >
          {/* CSS for Scroll Animation & Layout */}
          <style>
            {`
              .modal-layout {
                display: flex;
                flex-direction: row;
                gap: 60px;
                align-items: flex-start;
              }
              .vertical-divider {
                width: 1px;
                background: linear-gradient(to bottom, rgba(255,255,255,0.02), rgba(255,255,255,0.1), rgba(255,255,255,0.02));
                align-self: stretch;
              }
              
              /* Film Strip Animation */
              @keyframes scrollVertical {
                0% { transform: translateY(0); }
                100% { transform: translateY(-50%); }
              }
              
              .film-track {
                animation-name: scrollVertical;
                animation-timing-function: linear;
                animation-iteration-count: infinite;
              }

              .gallery-item {
                transition: transform 0.2s ease, border-color 0.2s ease;
                cursor: pointer;
              }
              .gallery-item:hover {
                transform: scale(1.02);
                border-color: #a56be8 !important;
              }
              
              @media (max-width: 968px) {
                .modal-layout {
                  flex-direction: column;
                  gap: 40px;
                }
                .vertical-divider { display: none; }
                .film-strip-container {
                   max-height: 400px;
                }
              }
            `}
          </style>

          {/* --- PREVIEW OVERLAY --- */}
          <AnimatePresence>
            {previewMedia && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  position: "fixed",
                  inset: 0,
                  zIndex: 10000,
                  background: "rgba(0,0,0,0.85)",
                  backdropFilter: "blur(10px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "40px"
                }}
                onClick={handleClosePreview} // Close on backdrop click
              >
                 <motion.div
                   initial={{ scale: 0.9, opacity: 0 }}
                   animate={{ scale: 1, opacity: 1 }}
                   exit={{ scale: 0.9, opacity: 0 }}
                   onClick={(e) => e.stopPropagation()} // Prevent click through
                   style={{ position: "relative", maxWidth: "90%", maxHeight: "90%" }}
                 >
                    <button 
                      onClick={handleClosePreview} // Close on X button
                      style={{
                        position: "absolute", top: "-40px", right: 0,
                        background: "none", border: "none", color: "white", cursor: "pointer"
                      }}
                    >
                      <Icons.Close />
                    </button>

                    {isVideo(previewMedia) ? (
                      <video 
                        src={previewMedia} 
                        controls 
                        autoPlay 
                        style={{ maxWidth: "100%", maxHeight: "80vh", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)" }} 
                      />
                    ) : (
                      <img 
                        src={previewMedia} 
                        alt="Preview" 
                        style={{ maxWidth: "100%", maxHeight: "80vh", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }} 
                      />
                    )}
                 </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* --- TOP BAR --- */}
          <div style={{ 
            position: "sticky", 
            top: 0, 
            padding: "20px 30px", 
            zIndex: 100,
            background: "rgba(11, 11, 21, 0.95)", 
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
            padding: "40px 5vw 100px 5vw",
            flex: 1
          }}>

            <div className="modal-layout">
              
              {/* === LEFT COLUMN: Content & Actions === */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                style={{ flex: 1.5, minWidth: "300px" }} 
              >
                 {/* 1. Tech Tags */}
                 <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "25px" }}>
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
                   fontSize: "clamp(3rem, 5vw, 4.5rem)", 
                   margin: "0 0 30px 0",
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
                 <p style={{
                    fontSize: "1.3rem",
                    lineHeight: "1.7",
                    color: "#e5e5e5",
                    marginTop: "25px",
                    maxWidth: "1000px",
                    fontFamily: "sans-serif",
                    whiteSpace: "pre-line",
                    marginBottom: "50px"
                  }}
                >
                  {project.description}
                </p>

                {/* 4. Action Area */}
                <div style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: "20px",
                  padding: "30px",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "15px"
                }}>
                  <h4 style={{ width: "100%", margin: "0 0 10px 0", color: "#888", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "1px" }}>Project Resources</h4>
                  <ActionButton label="View Source" icon={<Icons.Code />} link={project.github} color="#a56be8" />
                  <ActionButton label="Live Demo" icon={<Icons.Rocket />} link={project.live} color="#ff7a00" />
                  <ActionButton label="Documentation" icon={<Icons.File />} link={project.report} color="#2196f3" variant="outline" />
                </div>
              </motion.div>

              {/* === VERTICAL DIVIDER === */}
              <div className="vertical-divider" />

              {/* === RIGHT COLUMN: Film Strip Gallery === */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="film-strip-container"
                style={{ 
                  flex: 1, 
                  height: "80vh", 
                  position: "sticky", 
                  top: "100px",
                  overflow: "hidden",
                  borderRadius: "20px",
                  background: "#000",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
                  border: "4px solid #1a1a2e"
                }}
              >
                {/* Decoration Holes */}
                <div style={{ position: "absolute", left: "10px", top: 0, bottom: 0, width: "15px", zIndex: 10, background: "radial-gradient(circle, rgba(255,255,255,0.2) 2px, transparent 2.5px)", backgroundSize: "10px 20px" }} />
                <div style={{ position: "absolute", right: "10px", top: 0, bottom: 0, width: "15px", zIndex: 10, background: "radial-gradient(circle, rgba(255,255,255,0.2) 2px, transparent 2.5px)", backgroundSize: "10px 20px" }} />

                {/* Pause Button */}
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  style={{
                    position: "absolute", bottom: "20px", right: "20px", zIndex: 20, width: "50px", height: "50px", borderRadius: "50%", border: "none",
                    background: "rgba(255,255,255,0.2)", backdropFilter: "blur(5px)", color: "white", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s"
                  }}
                >
                   {isPaused ? <Icons.Play /> : <Icons.Pause />}
                </button>

                {/* Scrolling Track with Video Support & Click Handlers */}
                <div 
                  className="film-track"
                  style={{ 
                    padding: "20px 40px",
                    animationPlayState: isPaused ? "paused" : "running",
                    animationDuration: animationDuration // DYNAMIC SPEED
                  }}
                >
                  {seamlessMedia.map((src, index) => {
                    const isVid = isVideo(src);
                    
                    return (
                      <div 
                        key={index} 
                        className="gallery-item"
                        onClick={() => handleMediaClick(src)} // CLICK TO PREVIEW
                        style={{ marginBottom: "30px" }}
                      >
                        {isVid ? (
                          <video
                            src={src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{ 
                              width: "100%", 
                              height: "auto", 
                              display: "block",
                              borderRadius: "4px",
                              border: "2px solid #333",
                              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                              pointerEvents: "none" // Let the container handle the click
                            }}
                          />
                        ) : (
                          <img 
                            src={src} 
                            alt={`Gallery item ${index}`} 
                            style={{ 
                              width: "100%", 
                              height: "auto", 
                              display: "block",
                              borderRadius: "4px",
                              border: "2px solid #333",
                              boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
                            }} 
                          />
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Fade Overlay */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "50px", background: "linear-gradient(to bottom, #000, transparent)", zIndex: 5, pointerEvents: "none" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "50px", background: "linear-gradient(to top, #000, transparent)", zIndex: 5, pointerEvents: "none" }} />

              </motion.div>

            </div> {/* End Layout */}
          </div>

        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};