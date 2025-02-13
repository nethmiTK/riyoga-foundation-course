import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Header() {
  return (
    <header className="title">
      {/* Left Section - Title */}
      <div className="text-left">
        <h1 className="title">Welcome to the Riyoga Foundation</h1>
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
       
    </header>
  );
}

export default Header;
