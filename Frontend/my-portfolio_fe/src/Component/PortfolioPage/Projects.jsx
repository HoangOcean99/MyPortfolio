import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";
import Chest from "./Chest";
import ProjectModal from "./ModalProject";
import { getProject } from "../../Api/ProjectApi";
import AnimateOnScroll from "../../Utils/AnimateOnScroll";

export default function Projects() {
  const [filter, setFilter] = useState(-1);
  const [modalShow, setModalShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectVariants = {
    hidden: { opacity: 0, scale: 0, x: -200, y: 100 },
    visible: { opacity: 1, scale: 1, x: 0, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, scale: 0, x: -200, y: 100, transition: { duration: 0.8 } }
  };

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProject = async () => {
      const response = await getProject();
      setProjects(response.data);
    }
    fetchProject();
  }, []);

  return (
    <div className="text-light" id="projects">
      <div className="container">
        <div className="row ">
          <div className="col-xxl-4 col-12 mt-3 mb-5 pt-5 d-flex justify-content-center">
            <AnimateOnScroll animation={'animate__fadeInDownBig'}>
              <Chest setFilter={setFilter} />
            </AnimateOnScroll>
          </div>

          <div className="col-xxl-8 col-12 position-relative">
            {/* <AnimateOnScroll animation={'animate__fadeInDownBig'}> */}
              <h1
                className={`empty-project ${filter !== -1 ? "fade-out" : ""}`}
                style={{ opacity: filter === -1 ? 1 : 0 }}
              >
                ⬅️ Open the cabinet to explore my projects
              </h1>
            {/* </AnimateOnScroll> */}

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
                  {(projects.length > 0) && projects
                    .filter((p) => p.type === filter)
                    .map((p, i) => (
                      <motion.div
                        key={p.title + i}
                        className="col-12 col-md-6 col-xxl-4 mt-md-5"
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
                              <div className="card-subtitle mt-2">{p.NameType}</div>
                              <p className="text-white-50">{p.desc}</p>
                              <div className="gap-2 mt-2 icon-div">
                                {p.ProjectStacks.map((text, idx) => (
                                  <div key={idx} className="tech-icon text-center">
                                    {text.stacks}
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
