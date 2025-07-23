import React from 'react'
import { experiences } from '../../constants';
import { motion } from 'framer-motion';

function Experience() {
  return (
    <section
      id="experience"
      className='bg-skills-gradient clip-path-custom-2 py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]'
    >
      {/* section title */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16">
        <h2 className='text-4xl font-bold text-gray-700 dark:text-gray-300'>EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className='text-gray-700 dark:text-gray-300 mt-4 text-lg font-semibold'>
          A collection of my work experience and roles I have taken in various organizations.
        </p>
      </motion.div>

      {/* timeline container */}
      <div className="relative">
        {/* vertical line for desktop */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 shadow-sm shadow-gray-700 dark:shadow-gray-50 h-full"></div>

        {/* experience cards */}
        {experiences.map((experience, index) => (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            key={experience.id}
            className={`
              flex flex-col md:flex-row items-center mb-16
              ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}
            `}
          >
            {/* timeline dot */}
            <div className='absolute md:left-1/2 left-[2rem] md:transform -translate-x-1/2 shadow-sm shadow-gray-700 dark:shadow-gray-50 w-10 h-10 md:w-16 md:h-16 rounded-full flex items-center justify-center z-10'>
              <img src={experience.img} alt={experience.company} className='rounded-full object-cover w-full h-full' />
            </div>

            {/* experience card */}
            <div className={`
              w-full md:max-w-md p-4 md:p-8 mt-12 md:mt-0
              rounded-2xl border border-white bg-white dark:bg-gray-900 backdrop-blur-md 
              shadow-[0_0_20px_1px_rgba(130,69,230,0.3)] 
              transform transition-transform duration-300 hover:scale-105
              ${index % 2 === 0 ? 'md:ml-[32rem]' : 'md:mr-[32rem]'}
              ml-8 md:ml-0 md:mr-0
            `}>
              {/* top row: image and role info */}
              <div className='flex items-center space-x-6'>
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <img className='w-full h-full object-cover' src={experience.img} alt={experience.company} />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className='text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300'>{experience.role}</h3>
                    <h4 className='text-md md:text-sm text-gray-700 dark:text-gray-300'>{experience.company}</h4>
                  </div>
                  <p className='text-sm text-gray-700 dark:text-gray-300 mt-2'>{experience.date}</p>
                  <p className='text-sm text-gray-700 dark:text-gray-300 mt-2'>{experience.time}</p>
                </div>
              </div>

              {/* description */}
              <p className='text-gray-700 dark:text-gray-300 mt-4'>{experience.desc}</p>

              {/* skills */}
              <div className="mt-4">
                <h5 className='font-medium text-white'>Skills:</h5>
                <ul className='flex flex-wrap mt-2'>
                  {experience.skills.map((skill, idx) => (
                    <li key={idx} className='bg-[#7729ff] dark:bg-[#8245ec] text-gray-300 px-4 py-1 text-xs md:text-sm rounded-lg mr-2 mb-2 border dark:border-gray-400 border-gray-950'>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience;
