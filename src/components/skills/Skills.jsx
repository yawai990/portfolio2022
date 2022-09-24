import React from 'react';
import { skillImg,skillSlogan } from '../../data';
import {motion} from 'framer-motion';
import Header from '../header/Header';
import Para from '../header/Para';
import { useGlobalContext } from '../../context/context';
import './index.css';

const Skills = () => {
    const {themeColor} = useGlobalContext();
    const text='core skills';
    const skillsArr = text.split('');
    const sloganArr = skillSlogan.split('');
    const secondArr  ='web development skills'.split('');
    
  return (
        <section id="skills" className="snap-always lg:snap-center w-full min-h-screen dark:text-slate-500">

                    <div className="header p-2">
                <Header textArr={skillsArr} />
                </div>

                <div className="w-full">
                    <div 
                    style={{
                        color:themeColor,
                        borderTopLeftRadius:'150px',
                        borderBottomRightRadius:'150px',
                    }}
                     className="w-full h-44 flex justify-center items-center p-4 bg-bg-primary dark:bg-[#191919]">
                        <p style={{
                            lineHeight:2.2
                        }} className='w-11/12 md:w-3/5 text-lg text-justify md:text-center tracking-wide p-5 md:p-3'>
                            <Para textArr={sloganArr} />
                        </p>
                    </div>

                        <div className="w-full py-4">
    
                        <Header
                         textArr={secondArr} size='lg' 
                         align='center' marginY3X={true} 
                         />

                    <div className='w-4/5 m-auto flex flex-wrap gap-5 p-2 justify-center'>
                        {
                            skillImg.map(img=>(
                                <motion.div
                                key={img.id}
                                whileInView={{
                                    opacity:[0,1],
                                    scale:[0,1]
                                }}
                                transition={{
                                    delay:0.07*img.id
                                }}
                                className="w-28 h-28 rounded-full drop-shadow-lg cursor-pointer dark:drop-shadow-light"
                                >
                                    <div  id='skill_img_container' className='w-full h-full flex justify-center items-center bg-white dark:bg-[#19282F] p-2' >
                                    <img id='skill_img' style={{
                                        width:'90%',
                                        height:'90%'
                                    }} src={img.images} alt="" className='object-cover object-center duration-100' />
                                    </div>
                                </motion.div>
                            ))
                        }
                    </div>

                    </div>
                </div>


        </section>
  )
}

export default Skills