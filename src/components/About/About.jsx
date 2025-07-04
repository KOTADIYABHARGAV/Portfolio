import React from 'react'
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt'

function About() {
  return (
    <section
      id='about'
      className='py-4 px-[7vw] lg:px-[20vw] font-sans mt-10 md:mt-24 lg:mt-32'
    >
      <div className='flex flex-col-reverse md:flex-row justify-between items-center '>
        {/* left side */}
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
          {/* Greetings */}
          <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-light'>
            Hello, I'm
          </h1>
          {/* Name */}
          <h2 className='text-4xl sm:text-5xl md:text-5xl font-bold text-white mb-4 leading-light'>
            Bhargav Kotadiya
          </h2>
          {/* Skills heading with typing effect */}
          <h3 className='text-2xl font-bold text-[#8245ec] mb-4 leading-light'>
            <span className='text-white'>I am a</span>
            <ReactTypingEffect
              className='text-white mx-3'
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
              ]}>
            </ReactTypingEffect>
          </h3>
          {/* Description */}
          <p className='text-lg sm:text-xl md:text-2xl text-gray-400 my-6 leading-light'>
            I am a passionate Full Stack Developer with expertise in building
            dynamic and responsive web applications using the MERN stack.
            Dedicated to delivering high-quality code and user-friendly
            experiences.
          </p>
          {/* Resume Button */}
          <a
            href='https://drive.google.com/file/d/1e4l1apLUUAkRWbf_zfgFolKHFSrqkow3/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block bg-[#8245ec] text-white px-6 py-3 mt-5 rounded-full shadow-lg hover:bg-[#6f37c1] hover:transition duration-300 ease-in-out hover:scale-110'>
            Download Resume
          </a>
        </div>
        {/* right side - Image */}
        <div className='md:w-1/2 flex justify-center mb-8 md:mb-0'>
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
              className='w-full h-full rounded-full shadow-lg object-cover hover:drop-shadow-[0_10px_20px_rgba(0,0,0,0.2)]  hover:scale-120'
            />
          </Tilt>
        </div>
      </div>
    </section>
  )
}
export default About;