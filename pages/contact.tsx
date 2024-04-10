import React, { useEffect, useState } from "react";
import Navigation from "../src/app/components/Navbar";
import "../src/app/style.css";
import "../src/app/globals.css";
import Footer from "../src/app/components/Footer";
import LoadingSpinner from "../src/app/components/LoadingSpinner";
import { motion } from "framer-motion";

function Contact() {
  // Initialize form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Function to handle form input changes
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request to fetch data
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate a 1-second loading delay
  }, []);

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
    duration: 3.0,
  };

  return (
    
      <div
        className="container mx-auto p-4"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <Navigation></Navigation>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "60px 20px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Contact <strong className="purple">Me</strong>
              </h1>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  maxWidth: "800px", // Increasing maxWidth
                  width: "100%", // Set width to 100%
                  margin: "0 auto",
                }}
              >
                {/* Contact Information */}
                <div style={{ marginBottom: "20px", textAlign: "center" }}>
                  <h2 style={{ fontSize: "1.2rem" }}>
                    {" "}
                    <strong className="purple">Email:</strong>{" "}
                    keegangreig3@gmail.com
                  </h2>
                  <h2 style={{ fontSize: "1.2rem" }}>
                    {" "}
                    <strong className="purple">Phone:</strong> +(64) 0210 756
                    333
                  </h2>
                </div>

                {/* Contact Form */}
                <form
                  action="https://formspree.io/f/xwkdnokj"
                  method="POST"
                  style={{ width: "100%" }}
                >
                  {" "}
                  {/* Set width to 100% */}
                  <div className="mb-4" style={{ width: "100%" }}>
                    <label
                      htmlFor="name"
                      className="form-label"
                      style={{ fontSize: "1.5rem" }}
                    >
                      <strong className="purple">Name</strong>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-input"
                      style={{
                        width: "100%",
                        fontSize: "1.2rem",
                        padding: "20px",
                      }} // Increased padding
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-4" style={{ width: "100%" }}>
                    <label
                      htmlFor="email"
                      className="form-label"
                      style={{ fontSize: "1.5rem" }}
                    >
                      <strong className="purple">Email</strong>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      style={{
                        width: "100%",
                        fontSize: "1.2rem",
                        padding: "20px",
                      }} // Increased padding
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-4" style={{ width: "100%" }}>
                    <label
                      htmlFor="message"
                      className="form-label"
                      style={{ fontSize: "1.5rem" }}
                    >
                      <strong className="purple">Message</strong>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="form-input"
                      style={{
                        width: "100%",
                        fontSize: "1.2rem",
                        padding: "20px",
                      }} // Increased padding
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button
                      type="submit"
                      className="custom-button github"
                      style={{
                        marginTop: "10px",
                        fontSize: "1.2rem",
                        padding: "10px 20px",
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <Footer></Footer>
          </>
        )}
      </div>
  );
}

export default Contact;
