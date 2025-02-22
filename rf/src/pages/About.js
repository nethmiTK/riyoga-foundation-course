import { motion } from "framer-motion";
import logo2 from "../assets/images/main.jpeg"; // Image for the about section
import "../assets/styles/about.css"; // Import CSS file

export default function About() {
  return (
    <div className="about-container">
      {/* Main Container */}
      <div className="content-box">
        
        {/* Left Section - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="image-container"
        >
          <div className="profile-image">
            <img src={logo2} alt="Riyoga Foundation" />
          </div>
        </motion.div>

        {/* Middle Section - "Hi" */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-section"
        >
          <h2>Hi</h2>
        </motion.div>

        {/* Right Section - "Welcome" */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-section"
        >
          <h2>Welcome</h2>
        </motion.div>

        {/* New Section - "Riyoga Foundation" */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-section"
        >
          <h2>Riyoga Foundation</h2>
        </motion.div>

      </div>
    </div>
  );
}
