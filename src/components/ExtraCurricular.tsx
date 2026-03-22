import { extraCurricularData } from "../data/extracurricular";
import "./styles/ExtraCurricular.css";
import { FiExternalLink, FiAward } from "react-icons/fi";

const ExtraCurricular = () => {
  return (
    <div className="extracurricular-section" id="extracurricular">
      <div className="extracurricular-container section-container">
        <h2>
          Extra Curriculum <span>Activities</span>
        </h2>
        
        <div className="extracurricular-grid">
          {extraCurricularData.map((activity) => (
            <div className="extracurricular-card" key={activity.id}>
              <div className="activity-content">
                <div className="activity-icon-wrapper">
                  <FiAward className="activity-icon" />
                </div>
                <div className="activity-details">
                  <h4 className="activity-title">{activity.title}</h4>
                </div>
              </div>
              <a
                href={activity.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="activity-link"
                data-cursor="pointer"
              >
                Certificate <FiExternalLink />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExtraCurricular;
