import React,{useEffect} from 'react';
import Contact from '../contact/Contact';
import Hero from '../hero/Hero';
import About from '../about/About';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';

const Main = () => {

    useEffect(()=>{ 
       const container= document.getElementById('main');
       console.log(container.scrollHeight)
       window.addEventListener('scroll',e=>console.log(e))
    },[])


  return (
    <div id='main'>
        <Hero />
        <About />
         <Skills />
         <Projects />
         <Contact />
    </div>
  )
}

export default Main