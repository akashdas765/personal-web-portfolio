import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import icon from '../assets/img/favicon.png';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { TypeAnimation } from 'react-type-animation';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Machine Learning Engineer", "Data Scientist", "AI Engineer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  const handleDownload = () => {
    window.open('/Resume.pdf', '_blank');
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
              <div>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Akash`}</h1> 
                <TypeAnimation
                  sequence={['Machine Learning Engineer', 500, 'Data Scientist', 500, 'AI Engineer', 500]}
                  style={{ fontSize: '3em' }}
                  repeat={Infinity}
                />
                <p>I am a data scientist with a passion for solving complex problems using data-driven solutions. I am currently pursuing my master's degree in data science from Indiana University Bloomington, where I am learning advanced techniques in machine learning, statistics, and programming</p>
                <button onClick={handleDownload}>Download Resume<ArrowRightCircle size={25}/></button>
              </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={icon} alt="icon"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
