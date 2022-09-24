import React,{useRef} from 'react';
import {AiFillGithub} from 'react-icons/ai';
import {GrFormView} from 'react-icons/gr'
import {motion,useInView} from 'framer-motion';
import Header from '../header/Header';
import './index.css';
import { useGlobalContext } from '../../context/context';
import { projects } from '../../data';


const Projects = () => {
  const {state,themeColor} = useGlobalContext();
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
    <section id="projects" className="snap-always lg:snap-start w-full md:h-auto md:mb-5 dark:text-slate-500">

            <div className="p-1 mb-3">
              <Header textArr={proArr} />
              <Header textArr={secHeader} size='xl' align='center' />

            </div>

          <div id='project_cards_container' className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4' ref={ref}>
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


                          <div className='w-full flex justify-around flex-col'>

                            <p className='dark:text-white text-slate-400 px-3 text-sm text-justify mb-4'>{pro.desc}</p>
                            <div className='flex justify-around'>
                         <a href={pro.codeLink}
                         style={{
                          backgroundColor:themeColor
                         }}
                           className='w-10 h-10 rounded-full flex justify-center items-center text-white hover:drop-shadow-lg cursor-pointer drop-shadow-lg hover:text-black' >
                            <AiFillGithub className='w-8 h-8' />
                            </a>
                          <a href={pro.demoLink}
                          style={{
                            backgroundColor:themeColor
                          }}
                           className='w-10 h-10 rounded-full flex justify-center items-center text-white hover:drop-shadow-lg cursor-pointer drop-shadow-lg hover:text-red-400'>
                            <GrFormView className='w-8 h-8 rounded-full hover:bg-white' />
                           </a>
                           </div>

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