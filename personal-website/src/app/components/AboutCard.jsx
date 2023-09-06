import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Keegan Greig </span>
            from <span className="purple"> Auckland, New Zealand.</span>
            <br /> I am a recent graduate from the Institute of Data/AUT Software Engineering programme.
            <br />
            Additionally, I am enthusiastic about Machine Learning.
            <br />
            <br />
            Some of my hobbies are 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />Playing PC Games
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