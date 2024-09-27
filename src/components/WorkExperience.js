import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import WorkIcon from '@mui/icons-material/Work';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import colorSharp from "../assets/img/color-sharp.png"
export const WorkExperience = () => {
  const experiences = [
    {
      role: "Data Science Researcher",
      company: "Indiana University",
      duration: "May 2025 - Present",
      logo: "/Logos/IU_logo.jpg",
      description: "Led a comprehensive and detailed research project on the development of the visual cortex in infants, focusing extensively on analyzing the neural changes and developmental milestones throughout the first year of life, utilizing advanced neuroimaging techniques and longitudinal study methods.",
    },
    {
      role: "Masters of Science in Data Science",
      company: "Indiana University Bloomington",
      duration: "Aug 2023 - Present",
      logo: "/Logos/IU_logo.jpg",
    },
    {
      role: "Data Scientist",
      company: "LTIMindtree Limited",
      duration: "July 2021 - August 2023",
      logo: "/Logos/LTI LOGO.png",
      description: "Worked on various projects involving Python, Flask, Teradata, Oracle, and AWS. Led automation projects and built data ingestion pipelines for the Informatica team.",
    },
    {
      role: "Bachelors of Engineering in  Electronics and Telecommunication Engineering",
      company: "Mumbai University",
      duration: "Aug 2017 - May 2021",
      logo: "/Logos/University_of_Mumbai.svg",
    },
    {
      role: "Research and Development Intern",
      company: "Mastersoft ERP Solutions",
      duration: "Dec 2020 - June 2021",
      logo: "/Logos/mastersoft_logo.jpeg",
      description: "Created an intent recognition engine using natural language processing and transformer models with the TensorFlow framework.",
    }
  ];

  return (
<section className="workExperience" id="WorkExperience">
  <div className="container">
    <div className="row">
      <div>
        <div className="workExperience-bx wow zoomIn">
          <h2>Work and Education</h2>
          <VerticalTimeline>
            {experiences.map((exp, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                date={exp.duration}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                icon={<img src={exp.logo} alt={`${exp.company} logo`} style={{ width: '60%', height: 'auto' }} />}
                contentStyle={{ background: 'linear-gradient(90.21deg, #2d59aa -5.91%, #080221 111.58%)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              >
                <h3 className="vertical-timeline-element-title">{exp.role}</h3>
                <h4 className="vertical-timeline-element-subtitle">{exp.company}</h4>
                <p>{exp.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  </div>
  <img className="background-image-left" src={colorSharp} alt="Image" />
</section>
  );
};