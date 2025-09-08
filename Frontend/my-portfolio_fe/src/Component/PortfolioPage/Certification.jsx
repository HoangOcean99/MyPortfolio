import React, { useEffect, useState } from "react";
import "./Certification.css";
import { getCerti } from "../../Api/CertificationApi";

export default function Certification() {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    const fetchCerti = async () => {
      const response = await getCerti();
      setCertifications(response.data);
    }
    fetchCerti();
  }, [])

  return (
    <div className="text-light mt-3" id="projects">
      <div className="container">
        <div className="row g-4">
          {(certifications.length > 0) && certifications.map((p, i) => (
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
