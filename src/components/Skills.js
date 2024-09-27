import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <Tab.Container id="skills-tabs" defaultActiveKey="first">
                          <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab"><Nav.Item>
                              <Nav.Link eventKey="first">Technical Skills</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="second">Data Skills</Nav.Link>
                            </Nav.Item>
                          </Nav>
                          <Tab.Content>
                            <Tab.Pane eventKey="first">
                              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                  <div className="item">
                                      <img src={meter1} alt="Image" />
                                      <h5>Machine Learning</h5>
                                  </div>
                                  <div className="item">
                                      <img src={meter3} alt="Image" />
                                      <h5>Computer Vision</h5>
                                  </div>
                                  <div className="item">
                                      <img src={meter3} alt="Image" />
                                      <h5>Natural Language Processing</h5>
                                  </div>
                                  <div className="item">
                                      <img src={meter2} alt="Image" />
                                      <h5>Cloud Services</h5>
                                  </div>
                                  <div className="item">
                                      <img src={meter1} alt="Image" />
                                      <h5>Database Management</h5>
                                  </div>
                                  <div className="item">
                                      <img src={meter1} alt="Image" />
                                      <h5>Recurrent Neural Networks</h5>
                                  </div>
                                  <div className="item">
                                      <img src={meter3} alt="Image" />
                                      <h5>Transformer Models</h5>
                                  </div>
                                  <div className="item">
                                      <img src={meter2} alt="Image" />
                                      <h5>Diffusion Models</h5>
                                  </div>
                                  <div className="item">
                                      <img src={meter2} alt="Image" />
                                      <h5>Generative AI</h5>
                                  </div>
                              </Carousel>
                            </Tab.Pane>
                          </Tab.Content>
                          <Tab.Pane eventKey="second">
                          <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                  <div className="item">
                                      <img src={meter1} alt="Image" />
                                      <h5>Tensorflow</h5>
                                  </div>
                                  <div className="item">
                                      <img src={meter3} alt="Image" />
                                      <h5>PyTorch</h5>
                                  </div>
                                  <div className="item">
                                      <img src={meter1} alt="Image" />
                                      <h5>Scikit-Learn</h5>
                                  </div>
                                  <div className="item">
                                      <img src={meter1} alt="Image" />
                                      <h5>Amazon Web Services</h5>
                                  </div>
                                  <div className="item">
                                      <img src={meter1} alt="Image" />
                                      <h5>MYSQL</h5>
                                  </div>
                                  <div className="item">
                                      <img src={meter2} alt="Image" />
                                      <h5>Teradata</h5>
                                  </div>
                                  <div className="item">
                                      <img src={meter3} alt="Image" />
                                      <h5>Transformer Models</h5>
                                  </div>
                                  <div className="item">
                                      <img src={meter1} alt="Image" />
                                      <h5>Flask</h5>
                                  </div>
                                  <div className="item">
                                      <img src={meter1} alt="Image" />
                                      <h5>Django</h5>
                                  </div>
                                  <div className="item">
                                      <img src={meter3} alt="Image" />
                                      <h5>OpenCV</h5>
                                  </div>
                                  <div className="item">
                                      <img src={meter1} alt="Image" />
                                      <h5>Librosa</h5>
                                  </div>
                                  <div className="item">
                                      <img src={meter1} alt="Image" />
                                      <h5>Convoluted Neural Networks</h5>
                                  </div>
                                  <div className="item">
                                      <img src={meter1} alt="Image" />
                                      <h5>BERT</h5>
                                  </div>
                                  <div className="item">
                                      <img src={meter1} alt="Image" />
                                      <h5>GPT</h5>
                                  </div>
                                  <div className="item">
                                      <img src={meter2} alt="Image" />
                                      <h5>Vision Transformers</h5>
                                  </div>
                              </Carousel>
                    </Tab.Pane>
                        </Tab.Container>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}