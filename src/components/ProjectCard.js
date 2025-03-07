import { Col } from "react-bootstrap";
import { FaGithub, FaRocket } from "react-icons/fa";

export const ProjectCard = ({ title, description, codeDescription, imgUrl, codeUrl, videoUrl, hasVideo }) => {
  return (
    <Col xs={12} sm={6} md={4} className="mb-4">
      <div className="proj-card h-100">
        <div className="proj-img-wrapper">
          <img src={imgUrl} alt={title} />
          <div className="proj-overlay">
            <h4>{title}</h4>
            <p>{description}</p>
            <p className="code-description">{codeDescription}</p>
            <div className="button-group">
              <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="github-btn">
                <FaGithub size={30} />
              </a>
              {hasVideo && (
              <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="live-project-btn"
                style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  display: 'flex',
                  gap: '5px',
                }}
              >
                <FaRocket size={30} />
              </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};