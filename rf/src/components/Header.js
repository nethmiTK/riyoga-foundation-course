import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Header() {
  return (
    <header className="title bg-[#0a1930] p-4 text-white">
      {/* Left Section - Title */}
      <div className="text-left">
        <h1 className="text-2xl font-bold">Welcome to the Riyoga Nursing School</h1>
      </div>

      {/* Center Section - Social Media */}
      <div className="text-center mt-4">
        <p className="text-lg font-semibold">Contact Us:</p>
        <div className="flex space-x-6 mt-2 justify-center">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-[#1877F2] text-2xl hover:text-white transition duration-300"
          >
            <FaFacebook />
            <span className="text-sm mt-1 text-[#D2691E] font-semibold">Facebook</span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-[#E1306C] text-2xl hover:text-white transition duration-300"
          >
            <FaInstagram />
            <span className="text-sm mt-1 text-[#D2691E] font-semibold">Instagram</span>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-[#1DA1F2] text-2xl hover:text-white transition duration-300"
          >
            <FaTwitter />
            <span className="text-sm mt-1 text-[#D2691E] font-semibold">Twitter</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-[#0077B5] text-2xl hover:text-white transition duration-300"
          >
            <FaLinkedin />
            <span className="text-sm mt-1 text-[#D2691E] font-semibold">LinkedIn</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
