// Home page
"use client"
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import './styles.css'


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* Add other components like About, Portfolio, Contact, etc. */}
    {/* <image src= "../../public/Assets/home-main.svg"></image> */}
  
    </div>
  );
}
