import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Container, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import { AiOutlineHome, AiOutlineUser, AiOutlineMessage } from "react-icons/ai";
import { MdOutlineWorkOutline } from "react-icons/md";

export default function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 10) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex"></Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
      
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as="div" onClick={() => updateExpanded(false)}>
                <Link href="/">
                  <AiOutlineHome /> Home
                </Link>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Link href="/about">
                <AiOutlineUser style={{ marginBottom: "2px" }}/> About
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link href="/portfolio">
                <MdOutlineWorkOutline style={{ marginBottom: "2px" }}/> Portfolio
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link href="/contact">
                <AiOutlineMessage style={{ marginBottom: "2px" }}/>Contact 
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
