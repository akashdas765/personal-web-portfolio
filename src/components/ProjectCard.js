import { Col } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";

export const ProjectCard = ({ title, description, codeDescription, imgUrl, codeUrl }) => {
  return (
    <Col xs={12} sm={6} md={4}>
      <div className="proj-card">
        <div className="proj-img-wrapper">
          <img src={imgUrl} alt={title} />
          <div className="proj-overlay">
            <h4>{title}</h4>
            <p>{description}</p>
            <p className="code-description">{codeDescription}</p>
            <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="github-btn">
              <FaGithub size={30} />
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};