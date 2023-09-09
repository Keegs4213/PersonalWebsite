import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
import Aboutcard from "../src/app/components/AboutCard";
import Tilt from "react-parallax-tilt";
import "../src/app/style.css";
import "../src/app/globals.css";
import Footer from "../src/app/components/Footer";
import Skillset from "../src/app/components/Skills";
import Image from "next/image";
import NavBar from "@/app/components/NavBar";

function About() {
  return (
    <div>
      <NavBar />

      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="purple">Me</strong>
            </h1>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Tilt>
                <Image
                  src="/profile.jpg"
                  alt="Picture of Me"
                  className="circular-image"
                  width={250}
                  height={250}
                />
              </Tilt>
            </div>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              overflow: "hidden",
              paddingTop: "20px",
              paddingBottom: "30px",
            }}
          >
            
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        
        <Skillset />

        <Footer></Footer>
      </Container>
    </div>
  );
}

export default About;
