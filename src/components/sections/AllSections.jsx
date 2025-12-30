
import React from "react";
import { motion } from "framer-motion";
import { AboutSmart } from "./AboutSmart";

    // --- SHARED STYLES ---
    const sectionStyle = {
    padding: "100px 10vw",
    minHeight: "100vh",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontFamily: "'Outfit', sans-serif",
    };

    const titleStyle = {
    fontSize: "4rem",
    fontWeight: "800",
    marginBottom: "40px",
    color: "#a56be8", // Light Purple to match your theme
    };

    // ==========================================
    // 1. ABOUT SECTION
    // ==========================================
    export const About = () => {
    return (
        <section id="about" style={{ ...sectionStyle, background: "#0b0b15" }}>
        <h2 style={titleStyle}>About Me.</h2>
        <p style={{ fontSize: "1.5rem", lineHeight: "1.6", maxWidth: "800px", color: "#ccc" }}>
            I'm a passionate developer who loves building interactive web experiences. 
            When I'm not coding, I'm probably designing unique user interfaces or learning about new tech stacks.
            <br /><br />
            My goal is to bridge the gap between <span style={{ color: "#ff7a00" }}>creative design</span> and <span style={{ color: "#ff7a00" }}>solid engineering</span>.
        </p>
        </section>
    );
    };

    // ==========================================
    // 2. PROJECTS SECTION (Card Grid)
    // ==========================================
    export const Projects = () => {
    const projects = [
        { title: "WYB (Where You Buddy?)", desc: "A campus coordination app for students." },
        { title: "Shudhhi", desc: "Secure data-wiping application for privacy." },
        { title: "CHITRA", desc: "Cloud-based personal photo gallery." },
    ];

    return (
        <section id="projects" style={{ ...sectionStyle, background: "#10101a" }}>
        <h2 style={titleStyle}>Projects.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
            {projects.map((p, i) => (
            <div key={i} style={{
                background: "rgba(255,255,255,0.05)",
                padding: "30px",
                borderRadius: "15px",
                border: "1px solid rgba(255,255,255,0.1)",
                transition: "transform 0.3s ease",
                cursor: "pointer"
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-10px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
                <h3 style={{ fontSize: "2rem", marginBottom: "10px", color: "#fff" }}>{p.title}</h3>
                <p style={{ color: "#aaa", fontSize: "1.1rem" }}>{p.desc}</p>
                <button style={{ marginTop: "20px", color: "#ff7a00", background: "none", border: "none", fontSize: "1rem", cursor: "pointer" }}>View Case Study →</button>
            </div>
            ))}
        </div>
        </section>
    );
    };

    // ==========================================
    // 3. SKILLS SECTION (Simple Tags)
    // ==========================================
    export const Skills = () => {
    const skills = [
  // Languages
  "C",
  "C++",
  "Java",
  "Python",
  "JavaScript",
  "TypeScript", // Added: Used in SE Portal Project
  "SQL",
  "R",
  "Bash/Shell Scripting", // Added: Implied by SHUDDI/Linux ISO work

  // Frontend & Mobile
  "React.js",
  "Next.js",
  "HTML",
  "CSS",
  "D3.js",
  "PyQt6", // Desktop GUI

  // Backend & System
  "Spring Boot",
  "Hibernate",
  "Node.js",
  "Express.js",
  "FastAPI",
  "RESTful APIs",
  "WebSockets",
  "JWT Auth",

  // Databases
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Firebase (Firestore & Auth)",

  // AI & ML
  "TensorFlow",
  "PyTorch",
  "Scikit-Learn",
  "Computer Vision",
  "NLP",
  "Deep Learning",

  // Cloud & DevOps
  "AWS (S3)",
  "Git & GitHub",
  "Linux", // Added: Reflected in custom bootable ISO work
  "Docker", // Added: Recommended addition for a profile of this caliber

  // Design & Tools
  "Graphic Designing",
  "Figma",
  "Postman",
  "Streamlit",
];

    return (
        <section id="skills" style={{ ...sectionStyle, background: "#0b0b15" }}>
        <h2 style={titleStyle}>Skills.</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
            {skills.map((skill, i) => (
            <span key={i} style={{
                padding: "15px 30px",
                background: "rgba(165, 107, 232, 0.1)", // Purple tint
                border: "1px solid #a56be8",
                borderRadius: "50px",
                fontSize: "1.2rem",
                color: "#fff"
            }}>
                {skill}
            </span>
            ))}
        </div>
        </section>
    );
    };

// --- Icons (SVG) ---
const ContactIcons = {
  GitHub: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
  ),
  LinkedIn: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
  ),
  Mail: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
  )
};

// --- Helper: Social Card (Matches Project Card Style) ---
const SocialCard = ({ label, subLabel, icon, link, color }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", flex: "1 1 300px", maxWidth: "400px" }}
    >
      <motion.div
        whileHover={{ y: -10 }}
        style={{
          // Exact styles from Projects Section
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "15px",
          padding: "30px",
          display: "flex",
          alignItems: "center",
          gap: "20px",
          cursor: "pointer",
          transition: "background 0.3s ease"
        }}
      >
        {/* Icon Box */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "60px",
          height: "60px",
          borderRadius: "12px",
          background: `${color}15`, // Subtle color tint
          color: color,
          border: `1px solid ${color}30`
        }}>
          {icon}
        </div>

        {/* Text Content */}
        <div>
          <h3 style={{ margin: 0, fontSize: "1.4rem", color: "#fff", fontWeight: "700" }}>{label}</h3>
          <p style={{ margin: "5px 0 0 0", fontSize: "0.9rem", color: "#aaa" }}>{subLabel}</p>
        </div>

        {/* Arrow (Pushed to right) */}
        <div style={{ marginLeft: "auto", color: "#666", fontSize: "1.2rem" }}>
          →
        </div>
      </motion.div>
    </motion.a>
  );
};

// --- Main Contact Component ---
export const Contact = () => {
  return (
    <section id="contact" style={{ 
      minHeight: "100vh", // Fixes the height issue
      padding: "100px 20px",
      background: "#10101a", // Matches Projects bg
      color: "white", 
      fontFamily: "'Outfit', sans-serif",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      
      <div style={{ maxWidth: "1000px", width: "100%" }}>
        
        {/* Title (Matches Projects Title Style) */}
        <h2 style={{ 
          fontSize: "clamp(3rem, 5vw, 4rem)", 
          fontWeight: "800", 
          marginBottom: "20px",
          color: "#a56be8", // Same Purple as Projects
          textAlign: "center"
        }}>
          Let's Talk.
        </h2>

        <p style={{ 
          textAlign: "center", 
          fontSize: "1.2rem", 
          color: "#aaa", 
          maxWidth: "600px", 
          margin: "0 auto 60px auto", 
          lineHeight: "1.6" 
        }}>
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        {/* Grid Layout for Cards */}
        <div style={{ 
          display: "flex", 
          flexWrap: "wrap", 
          gap: "20px", 
          justifyContent: "center" 
        }}>
          
          <SocialCard 
            label="GitHub" 
            subLabel="Check out my repos"
            icon={<ContactIcons.GitHub />} 
            link="https://github.com/Devansh070805" 
            color="#a56be8" // Purple
          />

          <SocialCard 
            label="LinkedIn" 
            subLabel="Let's connect professionally"
            icon={<ContactIcons.LinkedIn />} 
            link="https://www.linkedin.com/in/devansh-kashyap-05bb45286/" 
            color="#0077b5" // Blue
          />

          <SocialCard 
            label="Email" 
            subLabel="devansh070805@gmail.com"
            icon={<ContactIcons.Mail />} 
            link="mailto:devansh070805@gmail.com" 
            color="#ff7a00" // Orange
          />

        </div>

      </div>
    </section>
  );
};