import React, { useState } from "react";
import { ProjectModal } from "../ui/ProjectModal"; 

// ==========================================
// DATA: Rich details for Cards & Modals
// ==========================================
const projectsData = [
  {
    id: 1,
    title: "SHUDDHI",
    desc: "Secure data-wiping application for privacy.",
    modalDesc: "SHUDDI – Secure and Holistic Universal Data Deletion Interface is a comprehensive, cross-platform data sanitization platform developed using Python with a PyQt6 graphical interface, supporting Windows, macOS, and Linux. The system includes a custom-built bootable Linux environment (ISO) along with a self made, Rufus-like bootable media creation tool engineered using Cubic, enabling secure offline data erasure. \n\nIt implements a NIST 800-88 Purge–compliant data erasure engine that generates tamper-proof certificates in PDF and JSON formats using reportlab, cryptographically signed with a SHA-256 hash to provide immutable and auditable proof of data sanitization. \n\nThe platform also features a real-time device watcher for automatic disk detection and integrates Firebase for secure user management and a scalable, cloud-based audit trail of all erasure reports.",
    tech: ["Python", "PyQt-6", "System Programming"],
    githubLink: "https://github.com/Devansh070805/shudhhi",
    liveLink: "",
    reportLink: "",
    images: [
      "/project-images/shuddhi/shuddhi-1.mov",
      "/project-images/shuddhi/shuddhi-2.png",
      "/project-images/shuddhi/shuddhi-3.png",
      "/project-images/shuddhi/shuddhi-4.png",
      "/project-images/shuddhi/shuddhi-5.png",
      "/project-images/shuddhi/shuddhi-6.png",
      "/project-images/shuddhi/shuddhi-7.png",
      "/project-images/shuddhi/shuddhi-8.png",
      "/project-images/shuddhi/shuddhi-9.png",
    ]
  },
  {
    id: 2,
    title: "Software Testing Portal",
    desc: "Acceptance Testing Portal for Softwares.",
    modalDesc: "Software Testing Portal is a centralized academic collaboration platform designed to facilitate large-scale acceptance testing and project evaluation for over 1,500 students and faculty members. It streamlines the lifecycle of software assignments by enabling students to form teams, manage deliverables, and engage in structured peer-to-peer testing cycles within a secure, deadline-driven environment.\n\nThe platform orchestrates a rigorous quality assurance workflow where teams are assigned peer projects for cross-validation, executing test cases and reporting critical defects such as deployment failures. It features a dynamic incident management system that enforces assignment locking during active disputes and integrates a faculty-moderated resolution pipeline, ensuring a fair, transparent, and accountable evaluation process for all stakeholders.\n\nUsers test softwares, can download automatically generated reports for their projects and faculty members can oversee everything. An end-to-end solution for software testing purposes.",
    tech: ["Web", "Firebase"],
    githubLink: "https://github.com/Devansh070805/portalhost07",
    liveLink: "https://www.tietsoftwaretesting.com/",
    reportLink: "",
        images: [
      "/project-images/software-testing/testcase-1.png",
      "/project-images/software-testing/testcase-2.png",
      "/project-images/software-testing/testcase-3.png",
      "/project-images/software-testing/testcase-4.png",
      "/project-images/software-testing/testcase-5.png",
      "/project-images/software-testing/testcase-6.png",
      "/project-images/software-testing/testcase-7.png",
      "/project-images/software-testing/testcase-8.png",
      "/project-images/software-testing/testcase-9.png",
      "/project-images/software-testing/testcase-10.png",
      "/project-images/software-testing/testcase-11.png",
      "/project-images/software-testing/testcase-12.png",
      "/project-images/software-testing/testcase-13.png",
      "/project-images/software-testing/testcase-14.png",
      "/project-images/software-testing/testcase-15.png",
      "/project-images/software-testing/testcase-16.png",
      "/project-images/software-testing/testcase-17.png",
      "/project-images/software-testing/testcase-18.png",
    ]
  },
  {
    id: 3,
    title: "WYB (Where You Buddy?)",
    desc: "A campus coordination app for students.",
    modalDesc: "Where You Buddy (WYB) is a user-friendly mobile app for iPhone and Android designed to make finding time for friends in college much easier. Instead of sending endless texts to figure out when everyone is free, the app automatically syncs with your class schedule. It instantly highlights the breaks you share with your friends, making social planning simple and automatic.The app also acts as a smart guide by suggesting the best places to hang out. It looks at where you are right now and where your next class is, then recommends a convenient meeting spot in between. \n\nWe prioritized privacy, giving you easy-to-use controls so you can decide exactly who sees your location and when, ensuring you always feel secure. Finally, we built WYB to be very gentle on your phone’s battery. It uses smart technology to update your location without draining power, so your phone lasts through a long day of classes. From the first prototype to the final release, our goal is to provide a reliable tool that helps students stay connected without the stress.",
    tech: ["React Native", "Firebase", "Google Maps API"],
    githubLink: "https://github.com/Devansh070805/loc_proto.git",
    liveLink: "",
    reportLink: "https://drive.google.com/file/d/1XrsQV1MA50AS4D2eRHzF-zdAnkA7pCXC/view?usp=sharing",
      images: [
        "/project-images/wyb/wyb-1.jpeg",
        "/project-images/wyb/wyb-2.jpeg",
        "/project-images/wyb/wyb-3.jpeg",
        "/project-images/wyb/wyb-4.jpeg",
        "/project-images/wyb/wyb-5.jpeg",
        "/project-images/wyb/wyb-6.jpeg",
        "/project-images/wyb/wyb-7.jpeg",
        "/project-images/wyb/wyb-8.jpeg",
        "/project-images/wyb/wyb-9.jpeg",
        "/project-images/wyb/wyb-10.jpeg",
    ] 
  },
  {
    id: 4,
    title: "CHITRA",
    desc: "Cloud-based personal photo gallery.",
    modalDesc: "CHITRA is a secure and scalable full-stack photo management platform developed using Java and Spring Boot for the backend, paired with a React frontend interface. The system integrates PostgreSQL for structured data persistence and utilizes AWS S3 for cloud-based object storage, enabling efficient handling and retrieval of digital media assets. It implements a stateless security model using Spring Security and JSON Web Tokens to manage user authentication and authorization, protecting sensitive API endpoints while facilitating secure user registration and login workflows.\n\n The platform features a responsive user interface that includes a gallery for browsing images and specific components for uploading files, allowing users to seamlessly manage their media library. It employs Axios for client-server communication to handle multipart file uploads and secure data exchange directly with the cloud infrastructure.",
    tech: ["React", "AWS S3", "Spring Boot", "Hibernate"],
    githubLink: "https://github.com/Devansh070805/chitra",
    liveLink: "",
    reportLink: "",
    images:[
        "/project-images/chitra/chitra-1.png",
        "/project-images/chitra/chitra-2.png",
        "/project-images/chitra/chitra-3.png",
    ]
  },    
  {
    id: 3,
    title: "Comparitive Compression Algorithms",
    desc: "System for Lossless File Compressions. ",
    modalDesc: "This project implements a lossless data compression tool using Huffman coding, featuring a custom bit-writing engine that manages variable-length binary streams without relying on external libraries. The system ensures robust data handling by employing a specialized Unicode encoding format to preserve special characters and escape sequences during the compression process.\n\nUniquely, the architecture separates compression artifacts by storing the decoding tree in a dedicated metadata file while writing the compressed bitstream to a binary file. The application also includes a built-in decoder for file reconstruction and an analytics module that automatically calculates and reports the achieved compression ratio and storage savings.",
    tech: ["Java", "Huffman Coding"],
    githubLink: "https://github.com/Devansh070805/Comparitive-Compression-Algorithms.git",
    liveLink: "",
    reportLink: "",
    images:[
        "/project-images/cc/cc-1.jpeg",
        "/project-images/cc/cc-2.jpeg",
        "/project-images/cc/cc-3.jpeg",
        "/project-images/cc/cc-4.jpeg",
        "/project-images/cc/cc-5.jpeg",
    ]
  },
   {
    id: 3,
    title: "Mammography based Breast Cancer Detection",
    desc: "Breast Cancer Detection using Mammograms.",
    modalDesc: "Mammography-Reports-Based-Breast-Cancer-Detection is a Python-based predictive diagnostic system that analyzes the CBIS-DDSM dataset to classify breast cancer cases as benign or malignant. It employs a robust data preprocessing pipeline that merges mass and calcification records, encodes clinical attributes, and handles complex composite features such as calcification types and distributions.\n\nThe system integrates machine learning models including Random Forest and XGBoost, optimized using RandomizedSearchCV and evaluated through metrics like confusion matrices and precision–recall curves. Additionally, it incorporates a deep learning workflow using TensorFlow and Keras, applying CNNs to mammograms, cropped scans, and ROI masks to extract visual features, enabling a comprehensive fusion of report-based and image-based cancer detection.",
    tech: ["ML", "DL", "Medical Data"],
    githubLink: "https://github.com/Devansh070805/Mammography-Reports-Based-Breast-Cancer-Detection",
    liveLink: "",
    reportLink: "https://drive.google.com/file/d/1YeGUEYWUw4B-EBj00bNr3ufZY87hwRb4/view?usp=sharing",
    images:[
      "/project-images/mm/mm-1.jpeg",
      "/project-images/mm/mm-2.jpeg",
      "/project-images/mm/mm-3.jpeg",
      "/project-images/mm/mm-4.jpeg",
      "/project-images/mm/mm-5.jpeg",
      "/project-images/mm/mm-6.jpeg",
      "/project-images/mm/mm-7.jpeg",
      "/project-images/mm/mm-8.jpeg",
      "/project-images/mm/mm-9.jpeg",
      "/project-images/mm/mm-10.jpeg",
    ]
  },
  {
    id: 3,
    title: "Pathfinding Visualizer",
    desc: "Visualizer for different graph traversals and searches.",
    modalDesc: "Pathfinding Visualizer is an interactive, web-based simulation tool designed to illustrate the mechanics of graph traversal and pathfinding algorithms. Built with a React and Vite frontend backed by a Python FastAPI server, the system features a dual-mode interface that allows users to switch between a tile-based grid environment and a force-directed graph view. Users can actively customize the simulation by drawing walls, dragging nodes to reshape the graph, and setting specific start and end points to test various scenarios.\n\nIt implements a suite of core algorithms including Breadth-First Search, Depth-First Search, Dijkstra’s Algorithm, and A* Search, capable of handling both grid maps and abstract network structures. The platform utilizes D3.js to render real-time, step-by-step animations that visually differentiate between the search history and the calculated shortest path. This is supported by a NetworkX computational layer that processes the topological data, ensuring accurate, responsive execution and allowing users to observe the comparative efficiency of different pathfinding heuristics.",
    tech: ["React", "Python", "Algorithms", "D3.js"],
    githubLink: "https://github.com/Devansh070805/Pathfinding-Visualizer",
    liveLink: "",
    reportLink: "",
    images:[
      "/project-images/pathfinding-visualizer/pv-1.jpeg",
      "/project-images/pathfinding-visualizer/pv-2.jpeg",
      "/project-images/pathfinding-visualizer/pv-3.jpeg",
      "/project-images/pathfinding-visualizer/pv-4.jpeg",
      "/project-images/pathfinding-visualizer/pv-5.jpeg",
      "/project-images/pathfinding-visualizer/pv-6.jpeg",
      "/project-images/pathfinding-visualizer/pv-7.jpeg",
      "/project-images/pathfinding-visualizer/pv-8.jpeg",
      "/project-images/pathfinding-visualizer/pv-9.jpeg"
    ]
  },
  {
    id: 3,
    title: "Emotion Aware Assistant",
    desc: "Voice Input Based chatbot that responds based on detected emotions. ",
    modalDesc: "This project is an emotion-aware voice chatbot designed to enhance conversational AI by interpreting both spoken words and the user's vocal delivery. \n\nThe system implements a complete audio processing pipeline that converts user recordings into analyzing formats to extract acoustic features such as MFCCs, Chroma, and Mel Spectrograms, enabling the detection of emotional states like anger, happiness, or sadness. \n\nIt features a dual-path analysis engine that simultaneously transcribes speech using a Whisper-based model and classifies emotional tone using an XGBoost classifier. The backend integrates these inputs into a Gemini-powered Large Language Model, which dynamically adjusts its system persona based on the detected emotion to provide empathetic and contextually appropriate responses through a FastAPI interface.",
    tech: ["NLP", "ML & DL"],
    githubLink: "https://github.com/Devansh070805/nlpchat",
    liveLink: "",
    reportLink: "",
    images:[
      "/project-images/nlp/nlp-1.png",
      "/project-images/nlp/nlp-2.png",
      "/project-images/nlp/nlp-3.png",
    ]
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
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))", gap: "30px" }}>
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