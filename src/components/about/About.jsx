import React,{useState,useEffect} from 'react';
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa';
import {BiRightArrow} from 'react-icons/bi';
import {motion } from 'framer-motion';
import './index.css';
import { AboutData } from '../../data';

const About = () => {
  const [currentYear,setCurrentYear]  = useState(0);
  const [progressWidth,setProgressWidth] = useState(0);
  const aboutHead = 'About Me';
  //this gonna be array
  const aboutArr = aboutHead.split('');

  const setMode =(year,id)=>{
    setCurrentYear(year);
 
    setProgressWidth(id/AboutData.length * 100)
    
  }

  return (
    <section id='about' className='w-full p-3'>

      <div className="header p-2">
        <h2 id='header' className='text-3xl tracking-wide font-semibold'
        >
          {
              aboutArr.map((text,ind)=>(
                <motion.span 
                key={ind}
                initial={{
                  rotateX:90,
                  rotateY:-60
                }}
                whileInView={{
                  rotateX:0,
                  rotateY:0
                }}
                transition={{
                  duration:0.2,
                  delay:ind *0.2
                }}
                className='inline-block'
                >{text !== ' ' ? text:<span>&nbsp;</span>}
                </motion.span>
              ))
          }
          </h2>

      </div>
        <motion.p
         className='text-4xl text-center mt-4 pl-3 text-text-sidebg'
         whileInView={{
          opacity:[0,1]
         }}
         transiotion={{
          delay:2,
          duration:0.5
         }}
         >
          <FaQuoteLeft className='ml-5 italic text-bg-primary' />
        </motion.p>
      
      <div className='flex'>
      <div className='w-3/5'>
            <div className='w-full h-full flex-col flex justify-center'>

              <motion.div className="w-2/5 self-center mb-5"
              whileInView={{
                y:[70,0],
                opacity:[0,1]
              }}
              >

                        <h1 className='font-semibold text-4xl font-sans tracking-wide'>Yawai</h1>
                        <h1 className='font-semibold text-4xl font-san-serif ml-4 tracking-wide text-end'>Aung</h1>
              </motion.div>

        
        <motion.p className='w-96 ml-auto'
                 whileInView={{
                  y:[100,0],
                  opacity:[0,1]
                }}
                transition={{
                  delay:0.9
                }}
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Id delectus vero quod aperiam odio ratione quia ipsum aspernatur quidem debitis.</motion.p>
        </div>
      </div>

        <div className='w-2/5 flex justify-center items-center'>
      <motion.div 
      id="about_img" className='w-72 rounded-lg'
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

        <div className="container w-4/5 m-auto mt-4 p-2">

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
              
              <motion.div className="progress-container absolute bottom-0 left-0 md:w-full md:h-1 w-1 h-full bg-gray-300 rounded-lg overflow-hidden"
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
              transition:'all 0.3s linear'
            }} className="progress-bar md:h-full absolute bg-blue-500"></div>
          </motion.div>


              </div>

     </div>

      <motion.div className="flex justify-end items-center mb-5 p-2"
          whileInView={{
            opacity:[0,1],
           }}
           transiotion={{
            delay:2,
            duration:0.5
           }}
      >
        <p className='text-4xl mt-4 pl-3 text-text-sidebg'>
          <FaQuoteRight className='ml-5 italic text-bg-primary' />
        </p>
      </motion.div>

    </section>
  )
}

export default About