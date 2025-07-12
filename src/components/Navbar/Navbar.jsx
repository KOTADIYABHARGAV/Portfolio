import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'work', label: 'Work' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleJump = () => {
    setIsJumping(true);
    setTimeout(() => setIsJumping(false), 500); // Reset after 0.5 seconds
  };
  return (
    <nav className={`fixed top-0 w-full z-50 transition backdrop-blur-md duration-300 px-4 sm:px-6 md:px-10 lg:px-[15vw] xl:px-[20vw] ${isScrolled ? 'bg-[#050414] bg-opacity-80 backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="flex items-center justify-between py-4 text-white">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onClick={handleJump}
          animate={{ y: isJumping ? -50 : 0 }} // Move up by 50px when jumping
          transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 10 }} // Spring physics for a natural bounce
          className="text-base sm:text-lg font-semibold cursor-pointer whitespace-nowrap">
          <span className="text-[#8245ec]">&lt;</span>
          <span>Bhargav</span>
          <span className="text-[#8245ec]">/</span>
          <span>Kotadiya</span>
          <span className="text-[#8245ec]">&gt;</span>
        </motion.div>

        {/* Desktop Menu (visible at 768px and up) */}
        <ul className="hidden md:flex gap-4 lg:gap-8 text-sm lg:text-base text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id} className={`cursor-pointer hover:text-[#8245ec] ${activeSection === item.id ? 'text-[#8245ec]' : ''}`}>
              <motion.button
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{ y: isJumping ? -50 : 0 }} // Move up by 50px when jumping
                transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 10 }} // Spring physics for a natural bounce 
                onClick={() => handleMenuItemClick(item.id)}>{item.label}</motion.button>
            </li>
          ))}
        </ul>

        {/* Desktop Icons (visible at 768px and up) */}
        <div className="hidden md:flex items-center gap-3">
          <motion.a
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            animate={{ y: isJumping ? -50 : 0 }} // Move up by 50px when jumping
            transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 10 }} // Spring physics for a natural bounce
            href="https://github.com/KOTADIYABHARGAV" target="_blank" rel="noopener noreferrer" className="hover:text-[#8245ec] text-gray-300">
            <FaGithub size={20} />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            animate={{ y: isJumping ? -50 : 0 }} // Move up by 50px when jumping
            transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 10 }} // Spring physics for a natural bounce
            href="https://www.linkedin.com/in/bhargav-kotadiya/" target="_blank" rel="noopener noreferrer" className="hover:text-[#8245ec] text-gray-300">
            <FaLinkedin size={20} />
          </motion.a>
        </div>

        {/* Mobile Menu Toggle (visible below 768px) */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX className="text-2xl text-[#8245ec] cursor-pointer" onClick={() => setIsOpen(false)} />
          ) : (
            <FiMenu className="text-2xl text-[#8245ec] cursor-pointer" onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden w-full bg-[#050414] bg-opacity-90 backdrop-blur-md rounded-b-lg shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300 text-base">
            {menuItems.map((item) => (
              <li key={item.id} className={`cursor-pointer hover:text-[#8245ec] ${activeSection === item.id ? 'text-[#8245ec]' : ''}`}>
                <button onClick={() => handleMenuItemClick(item.id)}>{item.label}</button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a href="#"
                className="text-gray-300 hover:text-white transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} />
              </a>
              <a href="#"
                className="text-gray-300 hover:text-white transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}
export default Navbar; 
