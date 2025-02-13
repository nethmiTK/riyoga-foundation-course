import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div
        className="hero-section"
         >
        <div className="hero-overlay">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-5xl font-bold text-center"
          >
            About Riyoga Foundation
          </motion.h1>
        </div>
      </div>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center py-12 px-6 md:px-12"
      >
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          The Riyoga Foundation is dedicated to promoting holistic wellness and 
          sustainable community development through innovative projects and educational initiatives.
        </p>
      </motion.div>

      {/* Mission & Vision Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            To empower individuals and communities by fostering awareness, 
            education, and opportunities for sustainable growth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            A world where holistic well-being and social responsibility 
            drive positive change for future generations.
          </p>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-16 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-800">Join Us in Making a Difference</h2>
        <p className="text-lg text-gray-600 mt-4">
          Be a part of our mission to create a better tomorrow through innovation and compassion.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-full hover:bg-blue-700 transition-all"
        >
          Get Involved
        </motion.button>
      </motion.div>
    </div>
  );
}
