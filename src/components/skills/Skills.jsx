import React, { useEffect } from 'react';
import { skillSlogan } from '../../data';
import { motion } from 'framer-motion';
import Header from '../header/Header';
//ini backend i just save the number only not image,
import { languageData } from '../../data';
//get the image
import * as images from '../../assets';
import Animation from '../../Animation';
import Para from '../header/Para';
import { useGlobalContext } from '../../context/context';
import './index.css';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
    const { themeColor, state, setPage } = useGlobalContext();
    const text = 'core skills';
    const skillsArr = text.split('');
    const sloganArr = skillSlogan.split('');
    const secondArr = 'web development skills'.split('');

    const { ref, inView, entry } = useInView();

    useEffect(() => {

        if (inView && entry !== undefined) {
            setPage(entry.target.id)
        }

    }, [inView, entry]);

    const variants = {
        hidden: { scale: 0 },
        visible: { scale: 1 }
    }

    return (
        <Animation>
            <section id="skills" ref={ref} className="w-full min-h-screen dark:text-slate-500">

                <div className="header p-2">
                    <Header textArr={skillsArr} />
                </div>

                <div className="w-full">
                    <div
                        style={{
                            color: themeColor,
                            borderTopLeftRadius: '150px',
                            borderBottomRightRadius: '150px',
                        }}
                        className="w-full h-44 flex justify-center items-center p-4 bg-bg-primary dark:bg-[#191919]">
                        <p style={{
                            lineHeight: 2.2
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
                                state.languages !== undefined &&
                                    state.languages.length > 0 ? state.languages?.map(img => {

                                        return <motion.div
                                            key={img._id}
                                            variants={variants}
                                            className="w-28 h-28 rounded-full drop-shadow-lg cursor-pointer dark:drop-shadow-light"
                                        >
                                            <div id='skill_img_container' className='w-full h-full flex justify-center items-center bg-white dark:bg-[#19282F] p-2' >
                                                <img id='skill_img' style={{
                                                    width: '90%',
                                                    height: '90%'
                                                }}
                                                    src={images[languageData.filter(i => i.id === img.language && i.name).length > 0 && languageData.filter(i => i.id === img.language && i.name)[0].name]}
                                                    // src={images.javascript} 
                                                    alt={img.language}
                                                    className='object-cover duration-100' />

                                            </div>
                                        </motion.div>
                                    }) : <h6>please wait.....</h6>
                            }
                        </div>

                    </div>
                </div>


            </section>
        </Animation>
    )
}

export default Skills