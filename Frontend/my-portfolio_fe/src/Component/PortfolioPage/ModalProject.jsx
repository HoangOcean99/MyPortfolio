import React from "react";
import { Modal, Button } from "react-bootstrap";
import './ModalProject.css'

export default function ProjectModal({ show, onHide, project }) {
  if (!project) return null;

  return (
    <Modal show={show} onHide={onHide} centered size="lg" className="main-modal-project">
      <Modal.Header closeButton>
        <Modal.Title>{project.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body className="contain-mainModal row">
        {/* Ảnh preview */}
        <div className="col-md-6 col-12">
          <img
            src={project.img}
            alt={project.title}
            className="img-fluid rounded mb-3 img-preview"
          />
        </div>

        {/* Nội dung chi tiết */}
        <div className="contain-intro col-md-6 col-12">
          {/* Mô tả */}
          <p>{project.desc}</p>

          {/* Features */}
          {project.ProjectFeatures && (
            <>
              <h5>Features</h5>
              <ul>
                {project.ProjectFeatures.map((f, i) => (
                  <li key={i}>{f.features}</li>
                ))}
              </ul>
            </>
          )}

          {/* Tech Stack */}
          {project.ProjectStacks && (
            <>
              <h5>Tech Stack</h5>
              <div className="d-flex flex-wrap gap-2 mb-2">
                {project.ProjectStacks.map((tech, i) => (
                  <span key={i} className="badge bg-secondary">
                    {tech.stacks}
                  </span>
                ))}
              </div>
            </>
          )}

          {/* Vai trò + team + thời gian */}
          {project.role && <p><b>Role:</b> {project.role}</p>}
          {project.team && <p><b>Team:</b> {project.team}</p>}
          {project.time && <p><b>Time:</b> {project.time}</p>}


        </div>
      </Modal.Body>
      <div className="row container contain-achi">
        {/* Responsibilities */}
        {project.ProjectResponsibilities && (
          <div className="col-md-6 col-12">
            <h5>Responsibilities</h5>
            <ul>
              {project.ProjectResponsibilities.map((task, i) => (
                <li key={i}>{task.responsibilities}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Achievements */}
        {project.ProjectAchievements && (
          <div className="col-md-6 col-12">
            <h5>Achievements</h5>
            <ul>
              {project.ProjectAchievements.map((ach, i) => (
                <li key={i}>{ach.achievements}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Footer: Link demo + github */}
      <Modal.Footer>
        {project.demo && (
          <Button variant="success" href={project.demo} target="_blank">
            Live Demo
          </Button>
        )}
        {project.github && (
          <Button variant="dark" href={project.github} target="_blank">
            GitHub
          </Button>
        )}
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>

  );
}
