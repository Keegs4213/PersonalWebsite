import React from "react";
import { Card, Button, Col, Row, Container } from "react-bootstrap";
import NavBar from "@/app/components/NavBar";
import "../src/app/style.css";
import "../src/app/globals.css";
import Footer from "../src/app/components/Footer";

function Portfolio() {
  const projects = [
    {
      title: "Project 1",
      imageUrl: "/workoutwise.PNG",
      githubUrl: "https://github.com/yourusername/project1",
      liveUrl: "https://your-live-url1.com",
    },
    {
      title: "Project 2",
      imageUrl: "faux.png",
      githubUrl: "https://github.com/yourusername/project2",
      liveUrl: "https://your-live-url2.com",
    },
    {
      title: "Project 3",
      imageUrl: "/pokedex.png",
      githubUrl: "https://github.com/yourusername/project3",
      liveUrl: "https://your-live-url3.com",
    },
  ];

  return (
    <Container fluid>
      <NavBar></NavBar>
      <Row>
        {projects.map((project, index) => (
          <Col lg={4} key={index} className="mb-4">
            <Card className="h-100 shadow-sm bg-white rounded">
              <Card.Img
                variant="top"
                src={project.imageUrl}
                className="rounded-top"
              />
            
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Button
                  variant="primary"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Button>
                <Button
                  variant="success"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ms-2"
                >
                  Live
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Footer></Footer>
    </Container>
  );
}

export default Portfolio;

// Include description of projects
