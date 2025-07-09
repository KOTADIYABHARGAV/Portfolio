import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";

function Footer() {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.footer
      className='text-white py-8 px-6 sm:px-8 md:px-12 lg:px-[12vw]'
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="text-center">

        {/* Name */}
        <h2 className='text-xl font-semibold text-purple-500'>Bhargav Kotadiya</h2>

        {/* Navigation Links */}
        <nav className='flex flex-col sm:flex-row flex-wrap justify-center items-center gap-y-2 sm:space-x-6 mt-4'>
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className='hover:text-purple-500 text-sm sm:text-base px-2 py-1'
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social media icons */}  
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaGithub />, link: "https://github.com/KOTADIYABHARGAV" },
            { icon: <FaFacebook />, link: "https://www.facebook.com/bhargav.kotadiya.754" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/b_kotadiya_/" },
            { icon: <FaYoutube />, link: "https://www.youtube.com/@bhargavkotadiya8672" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/bhargav-kotadiya/" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target='_blank'
              rel='noopener noreferrer'
              className='text-xl hover:text-purple-500 transition-transform transform hover:scale-110'>
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className='text-sm text-gray-400 mt-6'>
          &#169; Copyright reserved by b_kotadiya_
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;
