import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt"; // thêm thư viện
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";
import Chest from "./Chest";

export default function Projects() {
  const [filter, setFilter] = useState(-1);

  const projectVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      x: -200, // chỗ cái tủ
      y: 100
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8 }
    },
    exit: {
      opacity: 0,
      scale: 0,
      x: -200,
      y: 100,
      transition: { duration: 0.8 }
    }
  };

  const projects = [
    {
      type: 1,
      title: "AIS Bone Fracture Detection",
      desc: "A mobile application powered by Artificial Intelligencefffffffffffffffffff fffffffffffffffffffffffffffff",
      img: "https://oxkwejpbgtqnqjqrvecp.supabase.co/storage/v1/object/public/savememories/ImageEachPerson/z6869388227096_a935efec2247ea26e0aa2fdd87448b4b.jpg",
      stack: ['Java', 'Firebase'],
    },
    {
      type: 2,
      title: "IoT Air Quality Monitoring",
      desc: "A smart IoT system designed to measure and analyze air quality...",
      img: "https://oxkwejpbgtqnqjqrvecp.supabase.co/storage/v1/object/public/savememories/ImageEachPerson/z6869388227096_a935efec2247ea26e0aa2fdd87448b4b.jpg",
      stack: ['Java', 'Firebase'],
    },
    {
      type: 3,
      title: "Coffee Shop Website",
      desc: "A fully functional website designed enabling online ordering...",
      img: "/images/coffee.png",
      stack: ['Java', 'Firebase'],
    },
    {
      type: 1,
      title: "AIS Bone Fracture Detection",
      desc: "A mobile application powered by Artificial Intelligence...",
      img: "/images/ais.png",
      stack: ['Java', 'Firebase'],
    },
    {
      type: 2,
      title: "IoT Air Quality Monitoring",
      desc: "A smart IoT system designed to measure and analyze air quality...",
      img: "/images/air.png",
      stack: ['Java', 'Firebase'],
    },
    {
      type: 3,
      title: "Coffee Shop Website",
      desc: "A fully functional website designed enabling online ordering...",
      img: "/images/coffee.png",
      stack: ['Java', 'Firebase'],
    },
  ];

  useEffect(() => {
    console.log(filter);
  }, [filter])

  return(
    <div className="bg-dark text-light" id="projects">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-12 mt-5 pt-5 d-flex justify-content-center">
            <Chest setFilter={setFilter} />
          </div>

          {filter === -1 && (
            <h1 style={{position: 'absolute'}}>Mở tủ để khám phá những project của tôi</h1>
          )}

          <AnimatePresence>
            {filter !== -1 && (
              <motion.div
                className="row g-4 col-md-9 col-12"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.2 } },
                  exit: { transition: { staggerChildren: 0.1, staggerDirection: -1 } }
                }}
              >
                {projects.filter((p, i) => p.type === filter).map((p, i) => (
                  <motion.div
                    key={p.title + i}
                    className="col-12 col-md-6 col-lg-4"
                    variants={projectVariants}
                  >
                    <Tilt>
                      <div className="card">
                        <div className="face face1">
                          <img src={p.img} alt="" />
                        </div>
                        <div className="face face2">
                          <div className="content">
                            <h6 className="fw-bold">{p.title}</h6>
                            <div className="card-subtitle mt-2">Web App</div>
                            <p className="text-white-50">{p.desc}</p>
                            <div className="gap-2 mt-2 icon-div">
                              {p.stack.map((text, idx) => (
                                <div key={idx} className="tech-icon text-center">{text}</div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tilt>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
