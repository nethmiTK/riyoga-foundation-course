import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Header() {
  return (
    <header className="bg-blue-600 text-white py-6 shadow-lg flex justify-between items-center px-8">
      {/* Left Section - Title */}
      <div className="text-left">
        <h1 className="text-3xl font-bold">Welcome to the Riyoga Foundation</h1>
        <p className="text-lg mt-2">Empowering Knowledge, Inspiring Action</p>
      </div>

      {/* Center Section - Social Media */}
      <div className="text-center">
        <p className="text-lg font-semibold">Contact Us:</p>
        <div className="flex space-x-6 mt-2">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-white text-2xl hover:text-gray-300">
            <FaFacebook />
            <span className="text-sm mt-1">Facebook</span>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-white text-2xl hover:text-gray-300">
            <FaInstagram />
            <span className="text-sm mt-1">Instagram</span>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-white text-2xl hover:text-gray-300">
            <FaTwitter />
            <span className="text-sm mt-1">Twitter</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-white text-2xl hover:text-gray-300">
            <FaLinkedin />
            <span className="text-sm mt-1">LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Right Section - Riyoga Foundation Course */}
      <div className="text-right">
        <p className="text-xl font-semibold">Riyoga Foundation Course</p>
      </div>
    </header>
  );
}

export default Header;
