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
            <br /> I graduated from the Institute of Data/<br />
            Auckland University of Technology Software Engineering programme. <br />I have recently started my career as a developer and am eager to improve my programming skillset.
            <br />
            <br />
            Some of my hobbies are:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />
               Bodybuilding and keeping fit 
            </li>
            <li className="about-activity">
              <ImPointRight /> Anything tech related - PC Gaming, Sim racing, FPV drones etc. 
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
