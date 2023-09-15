import React, {useState, useEffect} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AboutCard from "../src/app/components/AboutCard";
import Tilt from "react-parallax-tilt";
import "../src/app/style.css";
import "../src/app/globals.css"
import Particle from "../src/app/components/Particle"
import Footer from "../src/app/components/Footer";
import SkillSet from "../src/app/components/Skills";
import Image from "next/image";
import NavBar from "@/app/components/NavBar";
import LoadingSpinner from "../src/app/components/LoadingSpinner";
// Add embed google map location 
function About() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request to fetch data
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate a 1-second loading delay
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div  style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}>
     {loading ? (
        <LoadingSpinner />
      ) : (
        <>
      <NavBar />
      <Particle></Particle>
      <Container>
        <Row className="flex-md-row flex-column align-items-center">
          <Col
            md={6}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div>
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                About <strong className="purple">Me</strong>
              </h1>
            </div>
            {!isLargeScreen && (
              <div style={{ maxWidth: "100%" }}>
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
            )}
          </Col>
          <Col
            md={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              paddingTop: "20px",
              paddingBottom: "30px",
            }}
          >
            {isLargeScreen && (
              <div style={{ maxWidth: "100%" }}>
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
            )}
            <AboutCard />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <SkillSet />
        <Footer></Footer>
      </Container>
      </>
      )}
    </div>
  );
}

export default About;