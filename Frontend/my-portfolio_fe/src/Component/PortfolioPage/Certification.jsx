import React, { useState } from "react";
import Tilt from "react-parallax-tilt"; // thêm thư viện
import { FaReact, FaJava, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiArduino, SiFirebase } from "react-icons/si";
import "./Certification.css";

export default function Certification() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "AIS Bone Fracture Detection",
      desc: "A mobile application powered by Artificial Intelligence...",
      img: "/images/ais.png",
      stack: [<FaJava key="java" size={20} />, <SiFirebase key="firebase" size={20} />],
    },
    {
      title: "IoT Air Quality Monitoring",
      desc: "A smart IoT system designed to measure and analyze air quality...",
      img: "/images/air.png",
      stack: [<SiArduino key="arduino" size={20} />, <FaReact key="react" size={20} />],
    },
    {
      title: "Coffee Shop Website",
      desc: "A fully functional website designed for a coffee shop, enabling online ordering...",
      img: "/images/coffee.png",
      stack: [<FaHtml5 key="html" size={20} />, <FaCss3Alt key="css" size={20} />, <SiJavascript key="js" size={20} />],
    },
  ];

  return (
    <div className="bg-dark text-light" id="projects">
      <div className="container">
        <div className="row g-4">
          {projects.map((p, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-4">
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.4}
                scale={1.05}
                perspective={1000}
                className="project-tilt"
              >
                <div className="card project-card border-0 shadow-sm">
                  <div className="img-container">
                    <img src={p.img} className="card-img-top" alt={p.title} />
                  </div>
                  <div className="card-body text-light">
                    <h6 className="fw-bold">{p.title}</h6>
                    <p className="text-white-50">{p.desc}</p>
                    <div className="d-flex gap-2 mt-2">
                      {p.stack.map((icon, idx) => (
                        <div key={idx} className="tech-icon">{icon}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
