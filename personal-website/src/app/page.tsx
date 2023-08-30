// Home page

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Type from "./components/Type"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* Add other components like About, Portfolio, Contact, etc. */}
    
     {/* <Type/> */}
      <button>Check my Resume</button>
      <button>LinkedIn</button>
    </div>
  );
}
