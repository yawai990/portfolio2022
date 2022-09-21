import React,{useRef,useState,useEffect} from 'react';
import {AiFillGithub} from 'react-icons/ai';
import {GrOverview} from 'react-icons/gr'
import {motion,useInView} from 'framer-motion';
import Header from '../header/Header';
import './index.css';
import { useGlobalContext } from '../../context/context';
import {react,javascript,node} from '../../assets';

const projects = [
  {_id:1,
    seletedFile:react,
    codeLink:'',
     demoLink:'',
  desc:'The unknown-prop warning will fire if you attempt to render a DOM element with a prop that is not recognized by React as a legal DOM attribute/property.'
},
  {
    _id:2,
    seletedFile:node,
    codeLink:'',
     demoLink:'',
desc:'The unknown-prop warning will fire if you attempt to render a DOM element with a prop that is not recognized by React as a legal DOM attribute/property.'},
  {_id:3,
    seletedFile:javascript,
    codeLink:'',
     demoLink:'',
desc:'The unknown-prop warning will fire if you attempt to render a DOM element with a prop that is not recognized by React as a legal DOM attribute/property.'},
]

const Projects = () => {
  // const {state} = useGlobalContext();
  // const [projects,setProjects] = useState([]);
  const ref= useRef(null);
  const proArr = 'projects'.split('');
  const secHeader = 'this is my recent projects'.split('');

  // useEffect(()=>{
  //     setProjects(state.projects)
  // },[state])

  //return as a boolean
  const inView = useInView(ref);

  const variants = {
    active:{
      scale:1,
      y:0,
      opacity:1
    },
    init:{
      scale:0,
      y:100,
      opacity:0
    }
  }

  return (
    <section id="projects" className="snap-always md:snap-start w-full min-h-screen dark:text-slate-500">

            <div className="p-1 mb-3">
              <Header textArr={proArr} />
              <Header textArr={secHeader} size='xl' align='center' />

            </div>

          <div id='project_cards_container' className='grid grid-cols-2 md:grid-cols-4' ref={ref}>
              {
             projects?.map(pro=>(
                  <motion.div id='project_card_container' 
                  animate={ 
                  inView ? 'active':'init'
                  }
                  variants={variants}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 50,
                    delay:0.1*pro.id
                  }}
                  className="h-80 relative duration-200 overflow-hidden" 
                  key={pro._id}
                  >

                        <img src={pro.seletedFile} alt="" className='w-full h-full object-cover object-center' />

                        <div id='project_card_text' className="absolute w-full h-full flex justify-center items-center">


                          <div className='w-full flex justify-around'>
                         <a href={pro.codeLink}
                           className='w-10 h-10 rounded-full bg-bg-primary flex justify-center items-center text-white hover:drop-shadow-lg cursor-pointer drop-shadow-lg hover:bg-[#B1B2FF]'>
                            <AiFillGithub />
                            </a>
                          <a href={pro.demoLink}
                           className='w-10 h-10 rounded-full bg-bg-primary flex justify-center items-center text-white hover:drop-shadow-lg cursor-pointer drop-shadow-lg hover:bg-[#B1B2FF]'>
                            <GrOverview />
                           </a>
                          </div>
                        </div>
                  </motion.div>  
                ))
              }
          </div>
    </section>
  )
}

export default Projects