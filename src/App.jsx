import React from 'react';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import BlurBlob from './components/BlurBlob/BlurBlob';
import BackToTopButton from './BacktoTop';
import CompactAudioControls from './components/CompactControl'

export default function App() {
  return (
    <>
      <div>
        <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '20%', height: '30%' }} ></BlurBlob>
        <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%)]"></div>
        <div className="relative pt-12">
          <Navbar />
          <About />
          <Skills />
          <Education />
          <Experience />
          <Work />
          <Contact />
          <Footer />
          <CompactAudioControls />
          <BackToTopButton />
        </div>
      </div>
    </>
  )
}