import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../../constants';

function Education() {
  return (
    <section
      id="education"
      className="bg-skills-gradient clip-path-custom-3 py-24 px-6 sm:px-8 md:px-12 lg:px-[12vw]"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold  text-gray-700 dark:text-gray-300">EDUCATION</h2>
        <div className="w-24 sm:w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className=" text-gray-700 dark:text-gray-300 mt-4 text-base sm:text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background.
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line for Tablet and Up */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-900 dark:bg-white h-full"></div>

        {/* Timeline Entries */}
        {education.map((edu, index) => (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            key={edu.id}
            className={`relative flex flex-col md:flex-row items-center mb-28 
              ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}
            `}
          >
            {/* Timeline Dot */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 
              bg-gray-900 border-4 dark:border-white border-gray-100 w-16 h-16 rounded-full z-20 overflow-hidden shadow-lg items-center justify-center">
              <img src={edu.img} alt={edu.school} className="w-full h-full object-cover rounded-full" />
            </div>

            {/* Mobile Dot (Left Aligned) */}
            <div className="md:hidden absolute left-4 sm:left-6 top-0 
              bg-gray-900 border-4 dark:border-white border-gray-100 w-12 h-12 rounded-full z-10 overflow-hidden shadow-lg">
              <img src={edu.img} alt={edu.school} className="w-full h-full object-cover rounded-full" />
            </div>

            {/* Card Container */}
            <div
              className={`flex flex-col md:flex-row items-center gap-x-12 w-full
              ${index % 2 === 0 ? 'md:pl-[52%]' : 'md:pr-[52%]'}
            `}>
              {index % 2 !== 0 && <div className="hidden md:block flex-1"></div>}

              {/* Education Card */}
              <div className="w-full max-w-[95%] sm:max-w-[85%] md:max-w-[550px]
               bg-white dark:bg-gray-900 border-4 border-white p-6 pt-8 rounded-2xl 
                shadow-[0_0_20px_1px_rgba(130,69,230,0.3)] backdrop-blur-md
                transform transition-transform duration-300 hover:scale-105
                mt-20 sm:mt-16 md:mt-14 min-h-[260px]
              ">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gray-900 rounded-md overflow-hidden">
                    <img className="w-full h-full object-cover" src={edu.img} alt={edu.school} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-300">{edu.degree}</h3>
                    <h4 className="text-sm text-gray-700 dark:text-gray-300">{edu.school}</h4>
                    <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">{edu.date}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base font-bold">GRADE: {edu.grade}</p>
                <p className="mt-4 text-sm sm:text-base text-gray-700 dark:text-gray-300">{edu.desc}</p>
              </div>

              {index % 2 === 0 && <div className="hidden md:block flex-1"></div>}
            </div>
          </motion.div>
        ))}
      </div>
    </section >
  );
}

export default Education;
