import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <div>
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I am <span className="purple">Keegan Greig </span>
            from <span className="purple"> Auckland, New Zealand.</span>
            <br /> I am a recent graduate from the Institute of Data/<br></br>
            Auckland University of Technology Software Engineering programme.
            <br />
            I am completing a career transition from Finance to Software
            Development.
            <br />
            <br />
            Some of my hobbies are:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />
              Building PCs and PC gaming/Sim racing, building and flying FPV drones 
            </li>
            <li className="about-activity">
              <ImPointRight /> Programming software, mining crypto, I am passionate about all technology
            </li>
            <li className="about-activity">
              <ImPointRight /> Bodybuilding and keeping fit
            </li>
            <li className="about-activity">
              <ImPointRight /> Spending time and doing activities with my close friends
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card></div>
  );
}

export default AboutCard;
