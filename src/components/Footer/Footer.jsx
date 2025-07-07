import React from 'react'
import { FaGithub, FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa"
function Footer() {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  };
  return (
    <footer className='text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]'>
      <div className="container mx-auto text-center">
        <h2 className='text-xl font-semibold text-purple-500'>Bhargav Kotadiya</h2>
        {/* Navigation Link */}
        <nav className='flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4'>
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
              className='hover:text-purple-500 text-sm sm:text-base my-1'
            >{item.name}</button>
          ))}
        </nav>

        {/* Social media icons */}
        <div className="flex flex-wrap justify-between space-x-4 mt-6">
          {[
            { icon: <FaGithub />, link: "https://github.com/KOTADIYABHARGAV" },
            { icon: <FaFacebook />, link: "https://www.facebook.com/bhargav.kotadiya.754" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/b_kotadiya_/" },
            { icon: <FaYoutube />, link: "https://www.youtube.com/@bhargavkotadiya8672" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/bhargav-kotadiya/" }
          ].map((item, index) => {
            <a
              key={index}
              target='_blank'
              rel='noopener noreferrer'
              className='text-xl hover:text-purple-500 border border-purple-500 transition-transform transform hover-scale-110'
              href={item.link}>{item.icon}</a>
          })}
        </div>
        {/* Copyright */}

        <p className='text-sm text-gray-400 mt-6'>
          @Copyright reserved by b_kotadiya_
        </p>
      </div>

    </footer>
  )
}
export default Footer;
