import React,{useEffect} from 'react';
import Contact from '../contact/Contact';
import Hero from '../hero/Hero';
import About from '../about/About';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';

const Main = () => {

  return (
    <div>
        <Hero />
        <About />
         <Skills />
         <Projects />
         <Contact />
    </div>
  )
}

export default Main