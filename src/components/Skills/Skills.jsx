import React from 'react';
import Tilt from 'react-parallax-tilt';
import { SkillsInfo } from '../../constants'; // Assuming you have a skillsInfo.js file with your skills dataz

function Skills() {
  return (
    <section
      id="skills"
      className='bg-skills-gradient clip-path-custom py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans '
    >
      {/* Section title */}
      <div className='text-center mb-8'>
        <h2 className='text-3xl sm:text-4xl font-bold text-white'>SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">A collection of my technical skills and expertise honed through projects and experience.</p>
      </div>
      {/* Skills grid */}
      <div className='flex flex-wrap gap-1 lg:gap-5 py-10 justify-between'>
        {/* Map through skillsInfo to create skill cards */}
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-gray-900 backdrop-blur-md sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130, 69, 236, 0.3)]" >
            <h3 className='text-2xl sm:text-3xl font-semibold text-gray-500 mb-4 text-center'>{category.title}</h3>
            <Tilt
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.1}
              transitionSpeed={600}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className='flex items-center justify-center space-x-1 bg-transparent border-2 border-gray-700 rounded-3xl py-3 px-4'
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} Logo`}
                      className='w-5 h-5 sm:w-8 sm:h-8'
                    />
                    <span className='text-xs text-gray-300 sm:text-sm'>{skill.name}</span>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>

    </section >
  )
}
export default Skills;