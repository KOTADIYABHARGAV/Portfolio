import React from 'react'
import Tilt from 'react-parallax-tilt';
import { education } from '../../constants';

function Education() {
  return (
    <section
      id="education"
      className='bg-skills-gradient clip-path-custom-3 py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw]'>
      {/* section title */}
      <div className="text-center mb-16">
        <h2 className='text-4xl font-bold text-white'>EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className='text-gray-400 mt-4 text-lg font-semibold'>My education has been a journey of learning and development. here are the details of my acedamic background.</p>
      </div>
      {/* education timeline */}
      <div className="relative">
        {/* Verticle line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>
        {/* education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}`}
          >
            {/* Timeline circle */}
            <div className='absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center z-10'>
              <img src={edu.img} alt={edu.school} className='rounded-full object-cover w-full h-full' />
            </div>
            {/* Content Section */}
            <div className={`w-full sm:max-w-md p-4 sm:p-8 pt-20 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,230,0.3)]
               ${index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"} ml-8 transform transition-transform duration-300 hover:scale-105`}>

              {/* Flex Container and image*/}
              <div className='flex items-center space-x-6'>
                {/* School logo  */}
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <img className='w-full h-full object-cover' src={edu.img} alt={edu.school} />
                </div>
                {/* School name , year , degree */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className='text-xl sm:text-2xl font-semibold text-white'>{edu.degree}</h3>
                    <h4 className='text-md sm:text-sm text-gray-300'>{edu.school}</h4>
                  </div>
                  {/* Date */}
                  <p className='text-sm text-gray-500 mt-2'>{edu.date}</p>
                </div>
              </div>
              <p className='text-gray-400 mt-4 font-bold'>GRADE: {edu.grade}</p>
              <p className='mt-4 text-gray-400'>{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section >
  )
}
export default Education;