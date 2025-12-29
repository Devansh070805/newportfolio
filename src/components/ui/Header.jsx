import React from "react";

export const Header = () => {
  
  // Helper to scroll smoothly to sections
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = ["About", "Projects", "Skills", "Contact"];

  return (
    <header style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      
      // Layout
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 5vw", // Responsive side padding
      boxSizing: "border-box",
      
      // Visual Style (Glass Effect)
      zIndex: 1000, // Always on top
      backdropFilter: "blur(10px)", // Blurs the moon behind it
      background: "rgba(15, 12, 41, 0.1)", // Very slight dark tint
      borderBottom: "1px solid rgba(255, 255, 255, 0.05)" // Subtle line
    }}>
      
      {/* LEFT: LOGO */}
      <div 
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ 
          fontSize: "2.5rem", 
          cursor: "pointer",
          fontFamily: "'Outfit', sans-serif", // Your accent font
          color: "#ff7a00", // Fox Orange
          textShadow: "0 0 20px rgba(255, 122, 0, 0.3)"
        }}
      >
        𓃦
      </div>

      {/* RIGHT: NAVIGATION */}
      <nav>
        <ul style={{
          display: "flex",
          listStyle: "none",
          gap: "3vw", // Responsive gap
          margin: 0,
          padding: 0
        }}>
          {navItems.map((item) => (
            <li key={item}>
              <button 
                onClick={() => scrollToSection(item.toLowerCase())}
                style={{
                  background: "none",
                  border: "none",
                  
                  // Text Style
                  color: "white",
                  fontSize: "1.2rem",
                  fontFamily: "'Outfit', sans-serif", // Your main font
                  fontWeight: "normal",
                  cursor: "pointer",
                  
                  // Animation properties
                  transition: "all 0.3s ease",
                  opacity: 0.8
                }}
                // Simple Hover Effect using inline events
                onMouseEnter={(e) => {
                  e.target.style.color = "#ff7a00";
                  e.target.style.opacity = "1";
                  e.target.style.textShadow = "0 0 10px rgba(255,122,0,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "white";
                  e.target.style.opacity = "0.8";
                  e.target.style.textShadow = "none";
                }}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};