import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutCard from "../src/app/components/AboutCard";
import Tilt from "react-parallax-tilt";
import "../src/app/globals.css";
import "../src/app/style.css";
import Footer from "../src/app/components/Footer";
import SkillSet from "../src/app/components/Skills";
import Image from "next/image";
import Navigation from "../src/app/components/Navbar";
import LoadingSpinner from "../src/app/components/LoadingSpinner";
import { motion } from 'framer-motion';

function About() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false); // Add state for showing content

  useEffect(() => {
    // Simulate a network request to fetch data
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a 2-second loading delay
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

  useEffect(() => {
    // After loading is complete, show the content
    if (!loading) {
      setShowContent(true);
    }
  }, [loading]);

  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 5.0,
  };

  return (
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
      <div style={{ height: "120vh", display: "flex", flexDirection: "column", justifyItems: "space-around" }}>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <Navigation />
            {showContent && ( // Render content only when showContent is true
              <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Container>
                  <Row className="flex-md-row flex-column align-items-center justify-content-center">
                    <Col md={6} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
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
                    <Col md={6} style={{ display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden", paddingTop: "20px", paddingBottom: "30px" }}>
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
                </Container>
              </div>
            )}
            <Footer />
          </>
        )}
      </div>
    </motion.div>
  );
}

export default About;
