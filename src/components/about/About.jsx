import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaCodepen, FaQuoteRight } from 'react-icons/fa';
import { BiRightArrow } from 'react-icons/bi'
import { motion } from 'framer-motion';
import Header from '../header/Header';
import Para from '../header/Para';
import { useGlobalContext } from '../../context/context';
import { aboutSlogan } from '../../data';
import { me } from '../../assets';
import './index.css';
import Animation from '../../Animation';
import { useInView } from 'react-intersection-observer';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const About = () => {
  const { themeColor, state, setPage } = useGlobalContext();
  const [currentYear, setCurrentYear] = useState(2018);
  const aboutHead = 'About Me';
  //this gonna be array
  const aboutArr = aboutHead.split('');
  const sloganArr = aboutSlogan.split('');
  const { ref, inView, entry } = useInView();

  useEffect(() => {

    if (inView && entry !== undefined) {
      setPage(entry.target.id)
    }

  }, [inView, entry]);

  const setMode = (year, id) => {
    setCurrentYear(year);
  }

  const variantLeft = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  }
  return (
    <Animation>
      <section id='about' ref={ref}
        className='w-full p-1 min-h-screen dark:text-slate-500'>

        <div className="header p-2">
          <Header textArr={aboutArr} />
        </div>



        <motion.p
          className='text-2xl text-center mt-4 pl-3 text-text-sidebg'
          variants={variantLeft}
        >
          <FaQuoteLeft style={{
            color: themeColor
          }} className='ml-5 italic' />
        </motion.p>

        <div className="flex items-center flex-wrap p-5">

          <div className='w-full lg:w-2/5 py-3 flex justify-center items-center overflow-hidden'>
            <motion.div
              id="about_img"
              data-theme-color={themeColor}
              className='w-72 rounded-lg'
              variants={variantLeft}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.8
              }}
            >
              <img src={state.img ? state.img[0].img : me} alt="" className='w-full rounded-lg duration-100' />
            </motion.div>
          </div>

          <motion.p className='w-full lg:w-2/5 mb-5 md:mb-0 p-4 md:p-3 break-words'
            variants={variantLeft}
          >
            <Para textArr={sloganArr} />
          </motion.p>
        </div>


        <div className="w-full mb-5 md:mb-0 md:p-0 ml-auto mt-2">

          <div className="flex gap-1 flex-wrap relative">
            <VerticalTimeline className={`before:bg-red-300`}>
              {
                state.exp?.length > 0 && state.exp?.map((about, ind) => (
                  <VerticalTimelineElement key={about._id} className="vertical-timeline-element--work"
                    contentStyle={{ background: themeColor, color: '#f3f4f4', opacity: 0.8 }}
                    contentArrowStyle={{ borderRight: `7px solid ${themeColor}` }}
                    date={
                      about.year === 2018 ? "2014 - 2018" :
                        about.year === 2019 ? "2018 - 2020" :
                          about.year >= 2021 && "2021 - Present"
                    }
                    dateClassName={`dark:text-white`}
                    iconStyle={{ background: themeColor, color: '#f2f2f2' }}
                    icon={<FaCodepen />}
                  >
                    <motion.div variants={variantLeft}
                    >
                      <h5 className='font-bold text-lg tracking-wider'>{about.year}</h5>
                      <div>
                        {
                          about.education &&
                          <div className='flex mt-3 justify-start items-center gap-1 bg-[#16213E]  rounded-lg text-[#ABD9FF] p-2 dark:drop-shadow-light'>
                            <span style={{
                              fontSize: '12px'
                            }} className='bg-blue-400 p-1 text-white rounded-lg 
                flex justify-center items-center'
                            >  <BiRightArrow /> </span>
                            <span style={{
                              fontSize: '12px',
                              marginTop: '8px',
                              lineHeight: 2,
                              padding: '3px'
                            }} className='block break-all'>{about.education}</span>
                          </div>
                        }
                        {
                          about.other && about.other.split(',').map((oth, ind) => (
                            <div key={ind} className='flex mt-3 justify-start items-center gap-1 bg-[#16213E]  rounded-lg text-[#ABD9FF] p-2 dark:drop-shadow-light'>
                              <span style={{
                                fontSize: '12px'
                              }} className='bg-blue-400 p-1 text-white rounded-lg 
                flex justify-center items-center'
                              >  <BiRightArrow /> </span>
                              <span style={{
                                fontSize: '12px',
                                marginTop: '8px',
                                lineHeight: 2,
                                padding: '3px'
                              }} className='break-all'>{oth}</span>
                            </div>
                          ))
                        }
                        {
                          about.work && <div className='flex mt-3 justify-start items-center gap-1 bg-[#16213E]  rounded-lg text-[#ABD9FF] p-2 dark:drop-shadow-light'>
                            <span style={{
                              fontSize: '12px'
                            }} className='bg-blue-400 p-1 text-white rounded-lg 
                flex justify-center items-center'
                            >  <BiRightArrow /> </span>
                            <span style={{
                              fontSize: '12px',
                              marginTop: '8px',
                              lineHeight: 2,
                              padding: '3px'
                            }} className='break-word inline-block'>{about.work}</span>
                          </div>
                        }

                      </div>
                    </motion.div>
                  </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
          </div>

        </div>



        <div className="flex justify-end items-center mb-2 p-2">
          <motion.p
            className='text-2xl pl-3 mr-5 text-text-sidebg'
            whileInView={{
              opacity: [0, 1],
              y: [20, 0]
            }}
            transiotion={{
              delay: 2,
              duration: 0.5
            }}
          >
            <FaQuoteRight style={{
              color: themeColor
            }} className='ml-5 italic' />
          </motion.p>
        </div>

      </section>
    </Animation>
  )
}

export default About