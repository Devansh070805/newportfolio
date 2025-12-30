import React from "react";

export const Header = () => {
  
  // --- FIX: Offset Scroll Logic ---
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // 1. Get the element's position relative to the viewport
      const elementPosition = element.getBoundingClientRect().top;
      
      // 2. Add current scroll position to get absolute position
      // 3. Subtract 100px (approx header height + padding)
      const offsetPosition = elementPosition + window.scrollY - 25; 

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
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
      padding: "20px 5vw",
      boxSizing: "border-box",
      
      // Visual Style
      zIndex: 1000, 
      backdropFilter: "blur(12px)", 
      background: "rgba(11, 11, 21, 0.7)", 
      borderBottom: "1px solid rgba(255, 255, 255, 0.05)"
    }}>
      
      {/* LOGO */}
      <div 
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ 
          fontSize: "2.5rem", 
          cursor: "pointer",
          fontFamily: "'Outfit', sans-serif",
          color: "#ff7a00", 
          textShadow: "0 0 20px rgba(255, 122, 0, 0.3)"
        }}
      >
        𓃦
      </div>

      {/* NAVIGATION */}
      <nav>
        <ul style={{
          display: "flex",
          listStyle: "none",
          gap: "3vw",
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
                  color: "white",
                  fontSize: "1.1rem",
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: "600",
                  letterSpacing: "0.5px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  opacity: 0.8
                }}
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