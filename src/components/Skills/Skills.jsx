import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { SkillsInfo } from '../../constants'; // External data source

function Skills() {
  return (
    <section
      id="skills"
      className='bg-skills-gradient clip-path-custom py-16 sm:py-20 md:py-24 px-5 sm:px-8 md:px-[7vw] lg:px-[15vw] xl:px-[20vw] font-sans'
    >
      {/* Section Title */}
      <motion.div className='text-center mb-10'
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className='text-2xl sm:text-4xl font-bold  text-gray-700 dark:text-gray-300'>SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-sm sm:text-base md:text-lg  text-gray-700 dark:text-gray-300 mt-4 font-semibold">
          A collection of my technical skills and expertise honed through projects and experience.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className='flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10'>
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-gray-50 dark:bg-gray-900 backdrop-blur-md px-6 py-6 sm:px-8 sm:py-8 rounded-2xl border border-gray-700 dark:border-gray-300 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] w-full sm:w-[48%] md:w-[47%] lg:w-[45%] xl:w-[40%] max-w-[500px]"
          >
            <h3 className='text-xl sm:text-2xl font-semibold  text-gray-700 dark:text-gray-300 mb-4 text-center'>
              {category.title}
            </h3>
            <Tilt
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={600}
            >
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="grid grid-cols-[repeat(auto-fit,minmax(110px,1fr))] gap-3 sm:gap-4"
              >
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className='flex items-center justify-center space-x-2 bg-transparent border border-gray-700 rounded-3xl py-2 px-3'
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} Logo`}
                      className='w-5 h-5 sm:w-7 sm:h-7 object-contain'
                    />
                    <span className='text-xs sm:text-sm  text-gray-900 dark:text-gray-300'>{skill.name}</span>
                  </div>
                ))}
              </motion.div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
