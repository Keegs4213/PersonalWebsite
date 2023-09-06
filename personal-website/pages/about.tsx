import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
import Aboutcard from "../src/app/components/AboutCard";
import Tilt from "react-parallax-tilt";
import "../src/app/style.css";
import "../src/app/globals.css";
import Footer from "../src/app/components/Footer";
import Skills from "../src/app/components/Skills";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";

function About() {
  return (
    <div>
      <Navbar />

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
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              overflow: "hidden",
              paddingTop: "20px",
              paddingBottom: "30px",
            }}
          >
            <Tilt>
              <Image
                src="/profile.jpg"
                alt="Picture of Me"
                className="circular-image"
                width={200}
                height={200}
              />
            </Tilt>
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Skills />

        <Footer></Footer>
      </Container>
    </div>
  );
}

export default About;
