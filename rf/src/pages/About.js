import { motion } from "framer-motion";
import logo2 from "../assets/images/m.jpg"; // Ensure this is the correct path for your image

export default function About() {
  return (
    <div className="w-full min-h-screen">
      {/* Full-Width Hero Section */}
      <div className="relative w-full h-screen">
        <motion.img
          src={logo2} // Background Image
          alt="Riyoga Foundation"
          className="absolute top-0 left-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />

        {/* Overlay for Better Readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-5">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-extrabold text-white mb-4"
          >
            Welcome to <span className="text-blue-400">Riyoga Foundation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg md:text-2xl text-white max-w-3xl"
          >
            Empowering communities through education, wellness, and sustainable initiatives.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-full hover:bg-blue-700 transition-all shadow-md"
          >
            Get Involved
          </motion.button>
        </div>
      </div>
    </div>
  );
}
