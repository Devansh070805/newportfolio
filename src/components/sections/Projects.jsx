import React, { useState } from "react";
import { ProjectModal } from "../ui/ProjectModal"; 

// ==========================================
// DATA: Rich details for Cards & Modals
// ==========================================
const projectsData = [
  {
    id: 1,
    title: "Shudhhi",
    desc: "Secure data-wiping application for privacy.",
    modalDesc: "A secure data-wiping application designed for privacy and security professionals. \n\nIt implements military-grade deletion algorithms (DoD 5220.22-M) to ensure deleted files are unrecoverable. It features a cross-platform desktop interface and deep system integration for handling locked files.",
    tech: ["Python", "Electron", "System Programming"],
    githubLink: "https://github.com/yourusername/shudhhi",
    liveLink: "",
    reportLink: "/docs/shudhhi.pdf"
  },
  {
    id: 2,
    title: "Software Testing Portal",
    desc: "Secure data-wiping application for privacy.",
    modalDesc: "A secure data-wiping application designed for privacy and security professionals. \n\nIt implements military-grade deletion algorithms (DoD 5220.22-M) to ensure deleted files are unrecoverable. It features a cross-platform desktop interface and deep system integration for handling locked files.",
    tech: ["Python", "Electron", "System Programming"],
    githubLink: "https://github.com/yourusername/shudhhi",
    liveLink: "",
    reportLink: "/docs/shudhhi.pdf"
  },
  {
    id: 3,
    title: "WYB (Where You Buddy?)",
    desc: "A campus coordination app for students.",
    modalDesc: "A real-time campus coordination app designed to help students locate friends and study groups on campus. \n\nFeatures include live location sharing within privacy zones, event coordination, and 'busy' status indicators. Built using React Native for the frontend and Firebase for real-time geolocation services.",
    tech: ["React Native", "Firebase", "Google Maps API"],
    githubLink: "https://github.com/yourusername/wyb",
    liveLink: "",
    reportLink: "" 
  },
  {
    id: 3,
    title: "CHITRA",
    desc: "Cloud-based personal photo gallery.",
    modalDesc: "A cloud-based personal photo gallery and management system. \n\nIt allows users to upload, tag, and organize high-resolution images. Features include AI-based auto-tagging, smart albums, and secure sharing links. Hosted on AWS S3 with a React frontend.",
    tech: ["React", "AWS S3", "Node.js"],
    githubLink: "https://github.com/yourusername/chitra",
    liveLink: "https://chitra-app.com",
    reportLink: ""
  },    
  {
    id: 3,
    title: "Comparitive Compression Algorithms",
    desc: "Cloud-based personal photo gallery.",
    modalDesc: "A cloud-based personal photo gallery and management system. \n\nIt allows users to upload, tag, and organize high-resolution images. Features include AI-based auto-tagging, smart albums, and secure sharing links. Hosted on AWS S3 with a React frontend.",
    tech: ["React", "AWS S3", "Node.js"],
    githubLink: "https://github.com/yourusername/chitra",
    liveLink: "https://chitra-app.com",
    reportLink: ""
  },
   {
    id: 3,
    title: "Mammography based Breast Cancer Detection",
    desc: "Cloud-based personal photo gallery.",
    modalDesc: "A cloud-based personal photo gallery and management system. \n\nIt allows users to upload, tag, and organize high-resolution images. Features include AI-based auto-tagging, smart albums, and secure sharing links. Hosted on AWS S3 with a React frontend.",
    tech: ["React", "AWS S3", "Node.js"],
    githubLink: "https://github.com/yourusername/chitra",
    liveLink: "https://chitra-app.com",
    reportLink: ""
  },
  {
    id: 3,
    title: "Pathfinding Visualizer",
    desc: "Cloud-based personal photo gallery.",
    modalDesc: "A cloud-based personal photo gallery and management system. \n\nIt allows users to upload, tag, and organize high-resolution images. Features include AI-based auto-tagging, smart albums, and secure sharing links. Hosted on AWS S3 with a React frontend.",
    tech: ["React", "AWS S3", "Node.js"],
    githubLink: "https://github.com/yourusername/chitra",
    liveLink: "https://chitra-app.com",
    reportLink: ""
  },
  {
    id: 3,
    title: "Emotion Aware Assistant",
    desc: "Cloud-based personal photo gallery.",
    modalDesc: "A cloud-based personal photo gallery and management system. \n\nIt allows users to upload, tag, and organize high-resolution images. Features include AI-based auto-tagging, smart albums, and secure sharing links. Hosted on AWS S3 with a React frontend.",
    tech: ["React", "AWS S3", "Node.js"],
    githubLink: "https://github.com/yourusername/chitra",
    liveLink: "https://chitra-app.com",
    reportLink: ""
  },
];

// ==========================================
// COMPONENT: Projects Section
// ==========================================
export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // --- STYLES ---
  const sectionStyle = {
    padding: "100px 10vw",
    minHeight: "100vh",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontFamily: "'Outfit', sans-serif",
    background: "#10101a" // Dark Background
  };

  const titleStyle = {
    fontSize: "clamp(3rem, 5vw, 4rem)",
    fontWeight: "800",
    marginBottom: "50px",
    color: "#a56be8", // Purple Title
  };

  const cardStyle = {
    background: "rgba(255,255,255,0.05)",
    padding: "30px",
    borderRadius: "15px",
    border: "1px solid rgba(255,255,255,0.1)",
    transition: "transform 0.3s ease",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "100px" // Enforces the "Longer Tile" look
  };

  return (
    <section id="projects" style={sectionStyle}>
      <h2 style={titleStyle}>Projects.</h2>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
        {projectsData.map((p) => (
          <div 
            key={p.id} 
            // Click Handler: Populates the modal
            onClick={() => setSelectedProject({
                ...p,
                description: p.modalDesc, 
                github: p.githubLink,
                live: p.liveLink,
                report: p.reportLink
            })}
            style={cardStyle}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-10px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
          >
            <div>
              <h3 style={{ fontSize: "2rem", marginBottom: "15px", color: "#fff" }}>{p.title}</h3>
              <p style={{ color: "#aaa", fontSize: "1.1rem", lineHeight: "1.6" }}>{p.desc}</p>
            </div>
            
            <button 
              style={{ 
                marginTop: "20px", 
                color: "#ff7a00", // Orange accent for button
                background: "none", 
                border: "none", 
                fontSize: "1rem", 
                cursor: "pointer", 
                textAlign: "left",
                padding: 0,
                fontWeight: "600"
              }}
            >
              View More
            </button>
          </div>
        ))}
      </div>

      {/* Modal Integration */}
      <ProjectModal 
        isOpen={!!selectedProject} 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};