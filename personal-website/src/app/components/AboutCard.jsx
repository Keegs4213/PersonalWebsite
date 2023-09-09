import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" style={{ marginTop: "-15rem" }}>
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
              Playing PC Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Bodybuilding
            </li>
            <li className="about-activity">
              <ImPointRight /> Spending time with friends
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
