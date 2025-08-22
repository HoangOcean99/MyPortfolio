import React from "react";
import { FaReact, FaJava, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiArduino, SiFirebase } from "react-icons/si";

const projects = [
  {
    title: "AIS Bone Fracture Detection",
    subtitle: "AIS Detection App",
    desc: "A mobile application powered by Artificial Intelligence...",
    img: "/images/ais.png",
    stack: [<FaJava key="java" size={20} />, <SiFirebase key="firebase" size={20} />],
    type: "web"
  },
  {
    title: "IoT Air Quality Monitoring",
    subtitle: "IoT Air Quality Monitoring",
    desc: "A smart IoT system designed to measure and analyze air quality...",
    img: "/images/air.png",
    stack: [<SiArduino key="arduino" size={20} />, <FaReact key="react" size={20} />],
    type: "web"
  },
  {
    title: "IoT Heartbeat Monitoring System",
    subtitle: "IoT Heartbeat Monitoring System",
    desc: "An IoT-based healthcare project developed to measure and monitor heartbeat...",
    img: "/images/heartbeat.png",
    stack: [<SiArduino key="arduino" size={20} />, <SiFirebase key="firebase" size={20} />],
    type: "web"
  },
  {
    title: "Personal Web Portfolio",
    subtitle: "Personal Web Portfolio",
    desc: "An interactive web portfolio showcasing my professional journey...",
    img: "/images/portfolio.png",
    stack: [<FaReact key="react" size={20} />, <SiJavascript key="js" size={20} />],
    type: "web"
  },
  {
    title: "Color Blindness Detection App",
    subtitle: "Color Blindness Detection App",
    desc: "A cross-platform application available on both mobile and desktop...",
    img: "/images/colorblind.png",
    stack: [<FaJava key="java" size={20} />, <SiFirebase key="firebase" size={20} />],
    type: "web"
  },
  {
    title: "Coffee Shop Website",
    subtitle: "Coffee Shop Website",
    desc: "A fully functional website designed for a coffee shop, enabling online ordering...",
    img: "/images/coffee.png",
    stack: [<FaHtml5 key="html" size={20} />, <FaCss3Alt key="css" size={20} />, <SiJavascript key="js" size={20} />],
    type: "web"
  },
];

export default function Projects() {
  return (
    <div className="bg-dark text-light py-5" id="projects">
      <div className="container">
        <h2 className="text-center fw-bold mb-3">Project</h2>
        <p className="text-center text-white-50 mb-5">
          Showcasing a selection of projects that reflect my skills, creativity, and passion for building meaningful
          digital experiences.
        </p>
        <div className="row g-4">
          {projects.map((p, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-4">
              <div className="card bg-secondary h-100 border-0 shadow-sm text-light">
                <img src={p.img} className="card-img-top" alt={p.title} />
                <div className="card-body">
                  <h6 className="fw-bold">{p.title}</h6>
                  <p className="text-white-50 mb-2">{p.desc}</p>
                  <div className="d-flex gap-2">{p.stack}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
