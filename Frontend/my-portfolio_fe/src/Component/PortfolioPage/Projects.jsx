import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";
import Chest from "./Chest";
import ProjectModal from "./ModalProject";

export default function Projects() {
  const [filter, setFilter] = useState(-1);
  const [modalShow, setModalShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectVariants = {
    hidden: { opacity: 0, scale: 0, x: -200, y: 100 },
    visible: { opacity: 1, scale: 1, x: 0, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, scale: 0, x: -200, y: 100, transition: { duration: 0.8 } }
  };

  const projects = [
    {
      type: 1,
      title: "AIS Bone Fracture Detection",
      desc: "A mobile application powered by Artificial Intelligence...",
      img: "/images/ais.png",
      stack: ["Java", "Firebase"],
      features: ["X-ray Analysis", "Realtime Detection"],
      role: "Mobile Dev",
      time: "2024",
      demo: "https://demo-link.com",
      github: "https://github.com/user/ais"
    },
    {
      type: 2,
      title: "IoT Air Quality Monitoring",
      desc: "A smart IoT system designed to measure and analyze air quality...",
      img: "/images/air.png",
      stack: ["C++", "Arduino", "Firebase"],
      features: ["Realtime Monitoring", "Data Visualization"],
      role: "Embedded + Web",
      time: "2023",
      demo: "https://demo-link.com",
      github: "https://github.com/user/iot-air"
    }
    // ... thêm project khác
  ];

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  return (
    <div className="text-light" id="projects">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-12 mt-3 mb-5 pt-5 d-flex justify-content-center">
            <Chest setFilter={setFilter} />
          </div>

          <div className="col-md-9 col-12 position-relative">
            <h1
              className={`empty-project ${filter !== -1 ? "fade-out" : ""}`}
              style={{ opacity: filter === -1 ? 1 : 0 }}
            >
              Open the cabinet to explore my projects
            </h1>

            <AnimatePresence>
              {filter !== -1 && (
                <motion.div
                  className="row g-4"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.2 } },
                    exit: { transition: { staggerChildren: 0.1, staggerDirection: -1 } }
                  }}
                >
                  {projects
                    .filter((p) => p.type === filter)
                    .map((p, i) => (
                      <motion.div
                        key={p.title + i}
                        className="col-12 col-md-6 col-lg-4"
                        variants={projectVariants}
                      >
                        <div
                          className="card-project"
                          onClick={() => {
                            setSelectedProject(p);
                            setModalShow(true);
                          }}
                        >
                          <div className="face face1">
                            <img src={p.img} alt={p.title} />
                          </div>
                          <div className="face face2">
                            <div className="content">
                              <h6 className="fw-bold">{p.title}</h6>
                              <div className="card-subtitle mt-2">Web App</div>
                              <p className="text-white-50">{p.desc}</p> 
                              <div className="gap-2 mt-2 icon-div">
                                {p.stack.map((text, idx) => (
                                  <div key={idx} className="tech-icon text-center">
                                    {text}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </motion.div>
              )}
            </AnimatePresence>

            <ProjectModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              project={selectedProject}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
