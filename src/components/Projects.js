import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/Projects/mental-health-icon.webp";
import projImg2 from "../assets/Projects/Image-Translation Icon.png";
import projImg3 from "../assets/Projects/rock-paper-scissor.png";
import projImg4 from "../assets/Projects/smart-parking-system.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Mental Health Analyser",
      imgUrl: projImg1,
    },
    {
      title: "Multi-Language Auto–Translation using Natural Language Processing",
      imgUrl: projImg2,
    },
    {
      title: "Rock-Paper-Scissor Simulator using OpenCV and 2D Convolutions",
      imgUrl: projImg3,
    },
    {
      title: "Smart Parking System",
      imgUrl: projImg4,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
