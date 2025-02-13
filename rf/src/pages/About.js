import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#2C3E50] text-white text-center py-20">
        <div className="container mx-auto px-6">
          <motion.h1
            className="text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Empowering Communities, Transforming Lives
          </motion.h1>
          <p className="mt-4 text-lg text-gray-300">
            Join us in making a difference through education, awareness, and action.
          </p>
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link
              to="/get-involved"
              className="bg-[#F39C12] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#e67e22] transition"
            >
              Get Involved
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Thoughts Section */}
      <section className="bg-[#1ABC9C] text-white py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold">Daily Thoughts</h2>
          <p className="mt-4 text-lg italic">"The best way to find yourself is to lose yourself in the service of others."</p>
          <button className="mt-4 bg-[#F39C12] px-4 py-2 rounded-full shadow-md hover:bg-[#e67e22] transition">
            Skip
          </button>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-6 md:px-12 text-center">
        <h2 className="text-3xl font-semibold text-[#2C3E50]">Our Mission & Vision</h2>
        <p className="mt-4 text-lg text-gray-600">
          We aim to create a better world through education, awareness, and sustainability projects.
        </p>
      </section>

      {/* Testimonials / Success Stories */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[#2C3E50]">Success Stories</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <Testimonial
              name="John Doe"
              text="This foundation changed my life by providing access to education and skill development!"
            />
            <Testimonial
              name="Jane Smith"
              text="With the help of Riyoga Foundation, I was able to start my own small business."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// Testimonial Component
const Testimonial = ({ name, text }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-lg max-w-sm"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <p className="text-gray-700">"{text}"</p>
    <h3 className="mt-4 font-semibold text-[#1ABC9C]">{name}</h3>
  </motion.div>
);

export default About;
