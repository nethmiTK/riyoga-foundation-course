import { motion } from "framer-motion";
import "../assets/styles/about.css"; // Import CSS file
import bgImage from "../assets/images/main.jpeg"; // Background image

export default function About() {
  return (
    <div className="hero-section">
      {/* Parallax Background Image */}
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      ></div>

      {/* Overlay Animation */}
      <motion.div
        className="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      ></motion.div>

      {/* Footer Section */}
      <div className="footer-section">
        <p>© 2025 Riyoga Foundation. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        className="about-content"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
         <p className="about-text">
          Welcome to <span className="highlight">Riyoga Foundation</span>! We are 
          dedicated to empowering communities and making a difference through innovation, 
          education, and social impact.
        </p>
      </motion.div>
    </div>
  );
}
