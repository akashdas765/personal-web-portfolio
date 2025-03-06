import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/Projects/mental-health-icon.webp";
import projImg2 from "../assets/Projects/Image-Translation Icon.png";
import projImg3 from "../assets/Projects/rock-paper-scissor.png";
import projImg5 from "../assets/Projects/global-flight-visualization.png";
import projImg6 from "../assets/Projects/stock-market-etl.png";
import projImg7 from "../assets/Projects/global-flight-visualization.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Mental Health Analyser",
      description: "An AI tool to assess mental health patterns using sentiment analysis and predictive models.",
      imgUrl: projImg1,
      codeUrl: "https://github.com/akashdas765?tab=repositories",
    },
    {
      title: "Multi-Language Auto–Translation using NLP",
      description: "Automatically translates text between multiple languages with neural machine translation.",
      imgUrl: projImg2,
      codeUrl: "https://github.com/akashdas765?tab=repositories",
    },
    {
      title: "Rock-Paper-Scissor Simulator using OpenCV",
      description: "A computer vision-based hand gesture live game powered by 2D convolutional neural networks.",
      imgUrl: projImg3,
      codeUrl: "https://github.com/akashdas765?tab=repositories",
    },
    {
      title: "Seizure Detection in Movies",
      description: "Detects flashing patterns in movies to prevent seizure triggers using video analysis and advanced computer vision techniques",
      imgUrl: projImg5,
      codeUrl: "https://github.com/akashdas765?tab=repositories",
    },
    {
      title: "Stock Market Data ETL & Visualization Platform",
      description: "Extracts, transforms, and visualizes realtime stock data using apache kafka and spark with interactive charts and insights on flask RESTful API",
      imgUrl: projImg6,
      codeUrl: "https://github.com/akashdas765?tab=repositories",
    },
    {
      title: "Global Flight Visualization & Risk Analysis Tool",
      description: "Maps global flight paths and performs risk assessments using real-time data.",
      imgUrl: projImg7,
      codeUrl: "https://github.com/akashdas765?tab=repositories",
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2 style={{ textAlign: "center" }}>Projects</h2>
                <p style={{ textAlign: "center" }}>A collection of my recent works showcasing real-world applications in AI, visualization, and automation.</p>
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
                      {/* Future content */}
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      {/* Future content */}
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"/>
    </section>
  )
}