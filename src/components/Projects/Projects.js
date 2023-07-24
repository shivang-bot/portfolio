import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import to_do_list from "../../Assets/Projects/To do list.png";
// import emotion from "../../Assets/Projects/emotion.png";
import zetatext from "../../Assets/Projects/zetatext.png";
import natorus from "../../Assets/Projects/natorus.png";
import calculator from "../../Assets/Projects/calculator.png";
import equlio from "../../Assets/Projects/equlio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={natorus}
              isBlog={false}
              title="Natorus"
              description="
              A travel web application built with ReactJS offers destination guides, itinerary planning, and reviews. Users can explore destinations, create personalized itineraries, and read fellow travelers' reviews for efficient and enjoyable trip planning. The application's responsive design ensures seamless usage across various devices."
              ghLink="https://github.com/shivang-bot/natorus"
              // demoLink="https://natorus-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={equlio}
              isBlog={false}
              title="Equlio"
              description="It is a news site that lets you see the latest headlines. It extracts latest news using a news API. It enables user to see news headlines related a category selected by user. It also shows the name of Author and time when the news was publishing
              the news. It is fully responsive and can be used on phone also"
              ghLink="https://github.com/shivang-bot/equlio"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zetatext}
              isBlog={false}
              title="Zetatext"
              description="The text editor is a responsive web application built with ReactJS. It features text editing and formatting capabilities, converting between lowercase and uppercase, removing extra spaces, word and character counting, and calculating average reading time. A preview allows users to read the text, and it supports dark mode for improved readability."
              ghLink="https://github.com/shivang-bot/ZetaText"
              demoLink="https://zeta-text.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={to_do_list}
              isBlog={false}
              title="To Do List"
              description="
              A to-do list website offers users a digital platform to create, manage, and organize tasks efficiently. Users can add, edit, and set due dates for tasks, mark them as completed, and categorize them. This online tool aids in personal and professional productivity, ensuring tasks are tracked and managed effectively."
              ghLink="https://github.com/shivang-bot/To-Do-list"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Calculator"
              description="Accessible through browsers, a simple web calculator offers real-time calculations with basic functions like addition, subtraction, multiplication, and division. It ensures privacy and security while being responsive on desktop and mobile."
              ghLink="https://github.com/shivang-bot/Calculator"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
