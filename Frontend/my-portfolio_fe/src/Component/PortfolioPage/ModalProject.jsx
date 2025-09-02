import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function ProjectModal({ show, onHide, project }) {
  if (!project) return null;

  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Ảnh preview */}
        <img
          src={project.image}
          alt={project.title}
          className="img-fluid rounded mb-3"
        />

        {/* Mô tả */}
        <p>{project.description}</p>

        {/* Tính năng chính */}
        {project.features && (
          <>
            <h5>Features</h5>
            <ul>
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </>
        )}

        {/* Tech Stack */}
        {project.techStack && (
          <>
            <h5>Tech Stack</h5>
            <div className="d-flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span key={i} className="badge bg-secondary">
                  {tech}
                </span>
              ))}
            </div>
          </>
        )}

        {/* Vai trò + thời gian */}
        {project.role && <p><b>Role:</b> {project.role}</p>}
        {project.time && <p><b>Time:</b> {project.time}</p>}
      </Modal.Body>

      {/* Link liên quan */}
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
