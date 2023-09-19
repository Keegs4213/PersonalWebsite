// Home page
"use client";
import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Navigation from "./components/Navbar";
import Hero from "./components/Hero";
import "./style.css";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";
import { motion } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request to fetch data
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate a 1-second loading delay
  }, []);

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
    duration: 3.0,
  };

  return (
    <motion.section
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="animated-bg"
    >
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Navigation />
          <Row>
            <Col md={7} className="home-header">
              <Hero />
            </Col>
          </Row>
          <Footer />
        </>
      )}
    </motion.section>
  );
}
