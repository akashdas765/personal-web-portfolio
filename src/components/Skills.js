import { useState } from 'react';
import { Radar } from 'react-chartjs-2';
import { Container, Row, Col, Carousel } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const chartOptions = (minValue, maxValue, maxValueColor, minValueColor) => ({
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: { color: '#444' },
        grid: { color: '#444' },
        pointLabels: {
          color: '#fff',
          font: { size: 16 },
          padding: 20,
        },
        ticks: {
          color: '#fff',
          backdropColor: '#121212',
          stepSize: 10,
          max: 100,
          min: 0,
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#fff',
          generateLabels: () => [
            {
              text: `Proficiency`,
              fillStyle: 'transparent', // No fill
              strokeStyle: minValueColor, // Border color from dataset
              lineWidth: 1, // Border thickness
            }
          ],
        },
      },
    },
  });

export const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const skillCharts = [
    {
      title: "Programming Languages",
      data: {
        labels: ['SQL', 'Python', 'Java', 'Shell Scripting', 'C', 'C++'],
        datasets: [{
          label: 'Proficiency',
          data: [90, 95, 80, 75, 70, 70],
          backgroundColor: 'rgba(24, 69, 152, 0.3)',
          borderColor: '#184598',
          pointBackgroundColor: '#fff',
        }]
      }
    },
    {
      title: "Frameworks & Libraries",
      data: {
        labels: ['OpenCV', 'PyTorch', 'TensorFlow', 'Keras', 'YOLO', 'spaCy'],
        datasets: [{
          label: 'Proficiency',
          data: [85, 90, 88, 80, 78, 75],
          backgroundColor: 'rgba(106, 27, 154, 0.3)',
          borderColor: '#6a1b9a',
          pointBackgroundColor: '#fff',
        }]
      }
    },
    {
      title: "Techniques",
      data: {
        labels: ['Image Processing', 'Object Detection', 'Video Analysis', 'NER', 'Sentiment Analysis', 'Word Embeddings'],
        datasets: [{
          label: 'Proficiency',
          data: [90, 88, 85, 80, 82, 85],
          backgroundColor: 'rgba(0, 150, 136, 0.3)',
          borderColor: '#009688',
          pointBackgroundColor: '#fff',
        }]
      }
    },
    {
      title: "Models",
      data: {
        labels: ['CNNs', 'R-CNN', 'BERT', 'GPT', 'Transformers', 'LSTM'],
        datasets: [{
          label: 'Proficiency',
          data: [90, 85, 88, 90, 92, 80],
          backgroundColor: 'rgba(233, 30, 99, 0.3)',
          borderColor: '#e91e63',
          pointBackgroundColor: '#fff',
        }]
      }
    },
    {
      title: "Tools",
      data: {
        labels: ['LabelImg', 'Roboflow', 'CVAT', 'Hugging Face', 'TensorBoard', 'Weights & Biases'],
        datasets: [{
          label: 'Proficiency',
          data: [80, 85, 78, 90, 88, 85],
          backgroundColor: 'rgba(255, 193, 7, 0.3)',
          borderColor: '#FFC107',
          pointBackgroundColor: '#fff',
        }]
      }
    },
    {
      title: "Key Tasks",
      data: {
        labels: ['Object Tracking', 'Image Segmentation', 'Face Recognition', 'Machine Translation', 'Text Generation', 'Intent Recognition'],
        datasets: [{
          label: 'Proficiency',
          data: [88, 85, 80, 82, 88, 90],
          backgroundColor: 'rgba(63, 81, 181, 0.3)',
          borderColor: '#3F51B5',
          pointBackgroundColor: '#fff',
        }]
      }
    },
    {
      title: "Cloud Services",
      data: {
        labels: ['AWS', 'Azure', 'Google Cloud'],
        datasets: [{
          label: 'Proficiency',
          data: [85, 80, 75],
          backgroundColor: 'rgba(0, 188, 212, 0.3)',
          borderColor: '#00BCD4',
          pointBackgroundColor: '#fff',
        }]
      }
    },
    {
      title: "Machine Learning Skills",
      data: {
        labels: ['Supervised Learning', 'Unsupervised Learning', 'Model Development', 'Hyperparameter Tuning', 'Model Evaluation', 'NLP'],
        datasets: [{
          label: 'Proficiency',
          data: [90, 85, 88, 80, 85, 88],
          backgroundColor: 'rgba(139, 195, 74, 0.3)',
          borderColor: '#8BC34A',
          pointBackgroundColor: '#fff',
        }]
      }
    },
    {
      title: "Data Science Skills",
      data: {
        labels: ['Visualization', 'EDA', 'Predictive Analytics', 'A/B Testing', 'Experiment Design', 'Causal Inference'],
        datasets: [{
          label: 'Proficiency',
          data: [85, 88, 80, 82, 80, 78],
          backgroundColor: 'rgba(255, 87, 34, 0.3)',
          borderColor: '#FF5722',
          pointBackgroundColor: '#fff',
        }]
      }
    },
    {
      title: "Data Engineer Skills",
      data: {
        labels: ['ETL', 'Data Warehousing', 'Distributed Computing', 'Batch Processing', 'Stream Processing', 'Big Data'],
        datasets: [{
          label: 'Proficiency',
          data: [85, 80, 78, 82, 80, 85],
          backgroundColor: 'rgba(96, 125, 139, 0.3)',
          borderColor: '#607D8B',
          pointBackgroundColor: '#fff',
        }]
      }
    },
    {
      title: "Data Analyst Skills",
      data: {
        labels: ['Visualization', 'EDA', 'Statistical Analysis', 'Data Cleaning', 'Reporting', 'Predictive Analytics'],
        datasets: [{
          label: 'Proficiency',
          data: [88, 85, 82, 80, 78, 84],
          backgroundColor: 'rgba(255, 152, 0, 0.3)',
          borderColor: '#FF9800',
          pointBackgroundColor: '#fff',
        }]
      }
    }
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>

              <Carousel
                controls={true}
                indicators={true}
                interval={5000} // 5 seconds between slides
                pause="hover"  // pause on hover
                slide={true}   // enable slide animation (remove fade)
                onSlide={(selectedIndex) => setActiveIndex(selectedIndex)}
                >
                {skillCharts.map((chart, index) => (
                    <Carousel.Item key={index}>
                        <div className="skill-category">
                            <h4>{chart.title}</h4>
                            <div className="chart-container">
                            <Radar
                                key={activeIndex === index ? `active-${index}` : `inactive-${index}`}
                                data={chart.data}
                                options={chartOptions(
                                Math.min(...chart.data.datasets[0].data),
                                Math.max(...chart.data.datasets[0].data),
                                chart.data.datasets[0].borderColor, // For highest value color
                                chart.data.datasets[0].borderColor  // For lowest value color (or assign a different color if needed)
                                )}
                            />
                            </div>
                        </div>
                        </Carousel.Item>
                ))}
              </Carousel>

            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};