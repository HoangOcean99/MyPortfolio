import React, { useState } from "react";
import "./Certification.css";
import cerImage from '../../assets/Cer.jpg'

export default function Certification() {
  const certifications = [
    {
      title: 'AI for everyone',
      image: cerImage,
      link: 'https://coursera.org/share/06364ff4e5268fda3219e5c09f077a76'
    },
    {
      title: 'AI for everyone',
      image: cerImage,
      link: 'https://coursera.org/share/06364ff4e5268fda3219e5c09f077a76'
    },
    {
      title: 'AI for everyone',
      image: cerImage,
      link: 'https://coursera.org/share/06364ff4e5268fda3219e5c09f077a76'
    },
    {
      title: 'AI for everyone',
      image: cerImage,
      link: 'https://coursera.org/share/06364ff4e5268fda3219e5c09f077a76'
    },
    {
      title: 'AI for everyone',
      image: cerImage,
      link: 'https://coursera.org/share/06364ff4e5268fda3219e5c09f077a76'
    },
    {
      title: 'AI for everyone',
      image: cerImage,
      link: 'https://coursera.org/share/06364ff4e5268fda3219e5c09f077a76'
    },
  ];

  return (
    <div className="text-light mt-3" id="projects">
      <div className="container">
        <div className="row g-4">
          {certifications.map((p, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-4">
              <div className="card project-card border-0 shadow-sm">
                <div className="img-container">
                  <a href={p.link}><img src={p.image} className="card-img-top" alt={p.title} /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
