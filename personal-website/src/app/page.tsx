// Home page
"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./style.css";
import Particle from "./components/Particle";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <Navbar />
      {/* <Container fluid className="home-section" id="home"> */}
        <Particle />
        {/* <Container className="home-content"> */}
          <Row>
            <Col md={7} className="home-header">
              {" "}
              <Hero />
            </Col>
          </Row>
          <div className="flex justify-between items-start py-15 px-1">
            {/* <Image
              src="/home-main.svg"
              alt="a picture"
              width={300}
              height={300}
            ></Image> */}
          </div>{" "}
        {/* </Container>{" "} */}
      {/* </Container> */}
      <Footer />
    </section>
  );
}
