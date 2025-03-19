import { motion } from "framer-motion";
import "../assets/styles/about.css"; // CSS
import bgImage from "../assets/styles/main.jpg"; // ✅ Correct import for JS/React
import ajanthaImage from "../assets/images/tk.jpg"; // Example of local image import

export default function About() {
  const boardMembers = [
    {
      name: "Mr.Ajantha Mahesh",
      position: "Chairman",
      image: ajanthaImage, // Use the imported image here
    },
    {
      name: "Ms.Nethmi Thalikoralage",
      position: "Secretary",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Mr.K.A.Upali",
      position: "Treasurer",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Mr. K.K.vini sumanasiri",
      position: "Vice President",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Mr. Chinthaka Edirisinghe",
      position: "Vice President",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Ms. mahesh wikramanayaka",
      position: "Deputy Secretary",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="hero-section">
      {/* Background Image */}
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

      {/* Main Content */}
      <motion.div
        className="about-content"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Content */}
      </motion.div>

      {/* ABOUT US SECTION */}
      <section className="about-us-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="about-us-title"></h2>
          <p className="about-us-description">
            The <span className="highlight">Riyoga Foundation</span> <span>"For those of you who seek strength"</span> focuses on
            holistic development by promoting education, health, and social
            well-being. Our mission is to create sustainable solutions and
            empower individuals to lead healthier, more fulfilling lives.
          </p>
        </motion.div>
      </section>

      {/* Board Members Section */}
      <motion.div
        className="board-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="board-title">Our Board Members</h2>
        <div className="board-members-container">
          {boardMembers.map((member, index) => (
            <motion.div
              className="board-member-card"
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="member-image"
              />
              <h3 className="member-name">{member.name}</h3>
              <p className="member-position">{member.position}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

    
    </div>
  );
}
