import { certificatesData } from "../data/certificates";
import "./styles/Certificates.css";
import { FiExternalLink, FiAward } from "react-icons/fi";

const Certificates = () => {
  return (
    <div className="certificates-section" id="certificates">
      <div className="certificates-container section-container">
        <h2>
          My <span>Certificates</span>
        </h2>
        <p className="certificates-desc para">
          Here are some of the professional certifications I have earned.
        </p>

        <div className="certificates-grid">
          {certificatesData.map((cert) => (
            <div className="certificate-card" key={cert.id}>
              <div className="cert-content">
                <div className="cert-icon-wrapper">
                  <FiAward className="cert-icon" />
                </div>
                <div className="cert-details">
                  <h4 className="cert-title">{cert.title}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-date">{cert.date}</p>
                </div>
              </div>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-link"
                data-cursor="pointer"
              >
                View Credential <FiExternalLink />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
