import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Courses from './pages/Courses';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
