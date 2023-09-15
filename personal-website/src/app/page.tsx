// Home page
"use client";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import "./style.css";
import Particle from "./components/Particle";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request to fetch data
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate a 1-second loading delay
  }, []);

  return (
    <section className="animated-bg">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <NavBar />
          <Row>
            <Col md={7} className="home-header">
              <Hero />
            </Col>
          </Row>
          <Footer />
        </>
      )}
    </section>
  );
}
