import React from 'react';
import { motion } from 'framer-motion';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import resumepdf from '../../../public/Resume - Bhargav.pdf';

function About() {
  return (
    <section
      id='about'
      className='py-6 px-5 sm:px-8 md:px-[7vw] lg:px-[15vw] xl:px-[20vw] font-sans mt-10 md:mt-20 lg:mt-28 xl:mt-32 text-gray-700 dark:text-gray-300'
    >
      <div className='flex flex-col-reverse md:flex-row items-center justify-between'>
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className='md:w-1/2 w-full text-center md:text-left mt-8 md:mt-0'>
          <h1 className='text-2xl sm:text-4xl md:text-5xl font-bold  text-gray-700 dark:text-gray-300 mb-2 leading-snug'>
            Hello, I'm
          </h1>
          <h2 className='text-3xl sm:text-5xl md:text-5xl font-bold  text-gray-700 dark:text-gray-300 mb-4 leading-snug'>
            Bhargav Kotadiya
          </h2>
          <h3 className='text-xl sm:text-2xl font-bold text-[#8245ec] mb-4'>
            <span className=' text-gray-700 dark:text-gray-300'>I am a</span>
            <ReactTypingEffect
              className=' text-gray-700 dark:text-gray-300 mx-3'
              typingDelay={1000}
              eraseDelay={2000}
              speed={100}
              eraseSpeed={50}
              text={[
                'Full Stack Developer',
                'MERN Stack Developer',
                'React Developer',
                'Web Developer',
                'Web Designer',
              ]}
            />
          </h3>
          <p className='text-base sm:text-lg md:text-xl  text-gray-700 dark:text-gray-300 my-6 leading-relaxed'>
            Frontend Developer specializing in building responsive and accessible websites using React and modern web technologies.
          </p>
          <a
            href={resumepdf}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block bg-[#8245ec] text-white px-6 py-3 mt-5 rounded-full shadow-lg hover:bg-[#6f37c1] transition duration-300 ease-in-out hover:scale-105'
          >
            Download Resume
          </a>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className='md:w-1/2 w-full flex justify-center mb-8 md:mb-0'>
          <Tilt
            className='w-120 h-120 md:w-150 md:h-150 rounded-full flex items-center justify-center'
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.1}
            transitionSpeed={600}
          >
            <img
              src='/assets/Profile-pic.png'
              alt='Profile'
              className='w-96 h-96 rounded-full border-4 border-[#6330bd] hover:border-0 shadow-lg object-cover hover:drop-shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition hover:scale-105'
            />
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
