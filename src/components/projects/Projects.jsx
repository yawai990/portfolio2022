import React,{useState,useRef} from 'react';
import {AiFillGithub} from 'react-icons/ai';
import {GrOverview} from 'react-icons/gr'
import {motion,useInView} from 'framer-motion';
import './index.css';
import {about01,about02,about03,about04} from '../../assets/projectImg';

const projects = [
  {id:1,
    img:about01,
    links:[
      {link:'links',icon:<AiFillGithub/>}
    ,{links:'links',icon:<GrOverview />}
  ],
  desc:'The unknown-prop warning will fire if you attempt to render a DOM element with a prop that is not recognized by React as a legal DOM attribute/property.'
},
  {
    id:2,
    img:about02,
    links:[{link:'links',icon:<AiFillGithub/>},{links:'links',icon:<GrOverview />}],desc:'The unknown-prop warning will fire if you attempt to render a DOM element with a prop that is not recognized by React as a legal DOM attribute/property.'},
  {id:3,img:about03,links:[{link:'links',icon:<AiFillGithub/>},{links:'links',icon:<GrOverview />}],desc:'The unknown-prop warning will fire if you attempt to render a DOM element with a prop that is not recognized by React as a legal DOM attribute/property.'},
  {id:4,img:about04,links:[{link:'links',icon:<AiFillGithub/>},{links:'links',icon:<GrOverview />}],desc:'The unknown-prop warning will fire if you attempt to render a DOM element with a prop that is not recognized by React as a legal DOM attribute/property.'},
  {id:5,img:about04,links:[{link:'links',icon:<AiFillGithub/>},{links:'links',icon:<GrOverview />}],desc:'The unknown-prop warning will fire if you attempt to render a DOM element with a prop that is not recognized by React as a legal DOM attribute/property.'},
  {id:6,img:about04,links:[{link:'links',icon:<AiFillGithub/>},{links:'links',icon:<GrOverview />}],desc:'The unknown-prop warning will fire if you attempt to render a DOM element with a prop that is not recognized by React as a legal DOM attribute/property.'}
]

const Projects = () => {
  const ref= useRef(null);

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
    <div id="projects" className="w-full">

            <div className="p-2 mb-4">
              <h4 className="text-2xl font-semibold">Projects</h4>

              <h4 className="text-xl font-semibold text-center uppercase tracking-wider">this is my recent works</h4>
            </div>

          <div className='grid grid-cols-2 md:grid-cols-4' ref={ref}>
              {
                projects.map(pro=>(
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
                  className="h-96 relative duration-200 overflow-hidden" 
                  key={pro.id}
                  >

                        <img src={pro.img} alt="" className='w-full h-full object-cover object-center' />

                        <div id='project_card_text' className="absolute w-full h-full flex justify-center items-center">


                          <div className='w-full flex justify-around'>
                            {pro.links.map((link,ind)=>(

                          <a href={link.link}
                          key={ind}
                           className='w-10 h-10 rounded-full bg-bg-primary flex justify-center items-center text-white hover:drop-shadow-lg cursor-pointer drop-shadow-lg hover:bg-[#B1B2FF]'>
                         {link.icon}
                          </a>
                            ))}
                          </div>
                        </div>
                  </motion.div>  
                ))
              }
          </div>
    </div>
  )
}

export default Projects