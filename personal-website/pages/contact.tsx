import React, {useEffect, useState} from "react";
import NavBar from "@/app/components/NavBar";
import "../src/app/style.css";
import "../src/app/globals.css";
import Footer from "../src/app/components/Footer";
import LoadingSpinner from "@/app/components/LoadingSpinner";

function Contact() {
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request to fetch data
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate a 1-second loading delay
  }, []);


  return (
    <div
      className="container mx-auto p-4"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >{loading ? (
      <LoadingSpinner />
    ) : (
      <>
      <NavBar></NavBar>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
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
            maxWidth: "400px",
            margin: "0 auto",
          }}
        >
          {/* Contact Information */}
          <div style={{ marginBottom: "20px", textAlign: "center" }}>
            <h2>Email: keegangreig3@gmail.com</h2>
            <h2>Phone: +(64) 0210 756 333</h2>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="form-label">
                Name
              </label><br></br>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="form-label">
                Email
              </label><br></br>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="form-label">
                Message
              </label><br></br>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="form-input"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="custom-button github"
              style={{ marginTop: "10px" }}
            >
              Submit
            </button>
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
