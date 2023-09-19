import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiPhp,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiTypescript,
  SiMicrosoftazure,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import "../style.css";

export default function Skillset() {
  return (
    <Row
      className="tech-icon-row"
      style={{ justifyContent: "center", paddingBottom: "50px" }}
    >
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="JavaScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript title="TypeScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="React" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs title="Node.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp title="PHP" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 title="HTML5" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 title="CSS3" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws title="AWS" /> {/* AWS icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure title="Microsoft Azure" /> {/* Azure icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb title="MongoDB" /> {/* MongoDB icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss title="TailwindCSS" /> {/* MongoDB icon */}
      </Col>
    </Row>
  );
}
