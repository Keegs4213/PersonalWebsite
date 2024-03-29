import React, { useState, useEffect } from "react";
import Navigation from "../src/app/components/Navbar";
import "../src/app/style.css";
import "../src/app/globals.css";
import Footer from "../src/app/components/Footer";
import LoadingSpinner from "../src/app/components/LoadingSpinner";
import Image from "next/image";
import { motion } from 'framer-motion';

function Portfolio() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request to fetch data
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a 1-second loading delay
  }, []);

  const projects = [
    {
      title: "Project 1 - WorkoutWise",
      imageUrl: "/workoutwise.PNG",
      githubUrl: "https://github.com/Keegs4213/Workout-Wise",
      liveUrl: "http://workout-wise-kg.vercel.app/",
      description:
        "Full-stack fitness application providing personalized workout plans based on users’ fitness goals and experience. Features include secure user login/signup with data encryption, workout plan generation, tracking, a dashboard with users' stats, exercise discovery and profile management. This was my capstone project for my Software Engineering course.",
    },
    {
      title: "Project 2 - FAUX",
      imageUrl: "/faux.PNG",
      githubUrl: "https://github.com/Keegs4213/Fakestore-React",
      liveUrl: "https://fakestore-react-two.vercel.app/",
      description:
        "This is a front-end only React/Next.js fake e-commerce store website utilizing the Fake Store API. Users can filter products by category, price, and search by product name using the search bar. Users can view products in more detail and add or remove products to their cart. Users can also checkout using shipping/payment information.",
    },
    {
      title: "Project 3 - Pokedex",
      imageUrl: "/pokedex.PNG",
      githubUrl: "https://github.com/Keegs4213/Pokedex-Frontend",
      liveUrl: "https://keegs4213.github.io/Pokedex-Frontend/",
      description:
        "This was my first project I built using Javascript, HTML+CSS and Bootstrap utilising the Pokemon API to fetch and display characteristics of pokemon like name, height, weight, id, type and moves. You can search pokemon by name or use the drop down selector to display certain types of pokemon. If you are unfamiliar with Pokemon this is basically an encylopedia for Pokemon ",
    },
    {
      title: "Project 4 - Monster Hunter Backend",
      imageUrl: "/backend.PNG",
      githubUrl: "https://github.com/Keegs4213/Monster-Hunter-Backend",
      liveUrl: "",
      description:
        "This is a backend only application I created using Nodejs, Express, MongoDB and Swagger. I created multiple routes for users to create, read, upload, delete their favorite monsters and weapons from the Monster Hunter World game. Users can create a profile and add/remove their favorites to their profile and use specific routes to return a users favorites.",
    },
  ];


  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };
  
  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 5.0,
  };
  

  return (
    <motion.div
  initial="initial"
  animate="in"
  exit="out"
  variants={pageVariants}
  transition={pageTransition}
>
    <div
      className="container mx-auto p-4"
      style={{
        height: "120vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {" "}
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Navigation></Navigation>{" "}
          <h1 style={{ fontSize: "2.1em", textAlign: "center" }}>
            My <strong className="purple">Projects</strong>
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "20px 0",
              flexWrap: "wrap", // Allow cards to wrap to the next row
            }}
            className="project-cards-container"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card"
                style={{
                  flex: 1,
                  margin: "0 8px",
                  background: "#fff",
                  borderRadius: "15px",
                  overflow: "hidden",
                  marginBottom: "20px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Image
                  style={{ objectFit: "cover" }}
                  width={1000}
                  height={1000}
                  src={project.imageUrl}
                  alt={project.title}
                />
                <div className="project-card-body" style={{ padding: "16px" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column", // Stack elements vertically
                      flex: 1,
                    }}
                  >
                    <h2
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        marginBottom: "16px",
                      }}
                      className="purple"
                    >
                      {project.title}
                    </h2>
                    <p style={{ marginBottom: "16px", color: "#666" }}>
                      {project.description}
                    </p>
                    <div
                      style={{ display: "flex", gap: "8px", marginTop: "auto" }}
                    >
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="button custom-button github"
                        >
                          GitHub
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="button custom-button live"
                        >
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Footer></Footer>
        </>
      )}
    </div></motion.div>
  );
}
export default Portfolio;
