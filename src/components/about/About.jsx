import React,{useState,useEffect} from 'react';
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa';
import {BiRightArrow} from 'react-icons/bi';
import {motion } from 'framer-motion';
import './index.css';
import Header from '../header/Header';
import Para from '../header/Para';
import { useGlobalContext } from '../../context/context';
import { AboutData,aboutSlogan } from '../../data';

const About = () => {
  const {themeColor}= useGlobalContext();
  const [currentYear,setCurrentYear]  = useState(0);
  const [progressWidth,setProgressWidth] = useState(0);
  const aboutHead = 'About Me';
  //this gonna be array
  const aboutArr = aboutHead.split('');
  const sloganArr =aboutSlogan.split('');

  const setMode =(year,id)=>{
    setCurrentYear(year);
 
    setProgressWidth(id/AboutData.length * 100)
    
  }

  return (
    <section id='about' className='snap-always md:snap-start w-full p-1 min-h-screen dark:text-slate-500'>

      <div className="header p-2">
        <Header textArr={aboutArr} />
      </div>

        <motion.p
         className='text-2xl text-center mt-4 pl-3 text-text-sidebg'
         whileInView={{
          opacity:[0,1],
          y:[20,0]
         }}
         transiotion={{
          delay:2,
          duration:0.5
         }}
         >
          <FaQuoteLeft style={{
            color:themeColor
          }} className='ml-5 italic' />
        </motion.p>
      
      <div className='flex flex-col md:flex-row'>
      <div className='w-full md:w-3/5'>

            <div className='p-6'>

        <motion.p className='w-full mb-5 md:mb-0 md:p-0 ml-auto'
                 whileInView={{
                  y:[40,0],
                  opacity:[0,1]
                }}
                transition={{
                  duration:0.25
                }}
        >
          <Para textArr={sloganArr} />
        </motion.p>

                
        <div className="w-full mb-5 md:mb-0 md:p-0 ml-auto mt-2">

                          <div className="flex gap-1 flex-wrap relative">
                            {AboutData.map(about=>(
                              <motion.div
                              onClick={()=>setMode(about.year,about.id)}
                              style={{
                                filter:currentYear !== about.year ? 'grayscale(1)':'grayscale(0)'
                              }}
                              key={about.id} 
                              className='w-full md:w-44 p-2 rounded-md mb-4 cursor-pointer'
                              whileInView={{
                                y:[100,0],
                                opacity:[0,1]
                              }}
                              transition={{
                                delay:0.08 * about.id,
                                
                              }}
                              >
          <h5 style={{
            color:currentYear !== about.year ? '':'#5CB8E4'
          }} className='font-bold text-lg tracking-wider'>{about.year}</h5>
          <div>
            {about.desc.map((exp,ind)=>(
              <div key={ind} className='flex mt-3 justify-start items-center gap-1 bg-[#16213E]  rounded-lg text-[#ABD9FF] p-2'>
                <span style={{
                  fontSize:'12px'
                }} className='bg-blue-400 p-1 text-white rounded-lg 
                flex justify-center items-center'
                >  <BiRightArrow /> </span>
                <span style={{
                  fontSize:'12px',
                  marginTop:'8px'
                }}>{exp}</span>
              </div>
            ))}
          </div>
    </motion.div>
  ))}

                    <motion.div className="progress-container absolute bottom-0 left-0 md:w-full md:h-1 w-1 h-full bg-gray-300 dark:bg-slate-600 rounded-lg overflow-hidden"
                    whileInView={{
                    opacity:[0,1],
                    x:[-100,0]
                    }}
                    transition={{
                    delay:0.8,
                    duration:0.5
                    }}
                    >
                    <div style={{
                    width:`${progressWidth}%`,
                    transition:'all 0.3s linear',
                    backgroundColor:themeColor
                    }} className="progress-bar md:h-full absolute"></div>
                    </motion.div>
                    </div>

                    </div>

        </div>
      </div>

        <div className='w-full md:w-2/5 py-3 flex justify-center items-center overflow-hidden'>
      <motion.div 
      id="about_img"
      data-theme-color={themeColor}
       className='w-72 rounded-lg'
      initial={{ 
        scale: 0,
        opacity:0 
      }}
    whileInView={{ 
      opacity:1,
       scale: 1 
    }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay:0.8
    }}
      >
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className='w-full rounded-lg duration-100' />
      </motion.div>
        </div>
        </div>

      <div className="flex justify-end items-center mb-2 p-2">
        <motion.p 
        className='text-2xl mt-2 pl-3 text-text-sidebg'
        whileInView={{
          opacity:[0,1],
          y:[20,0]
         }}
         transiotion={{
          delay:2,
          duration:0.5
         }}
        >
          <FaQuoteRight style={{
            color:themeColor
          }} className='ml-5 italic' />
        </motion.p>
      </div>

    </section>
  )
}

export default About