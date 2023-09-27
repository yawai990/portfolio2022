import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react'
import { useGlobalContext } from '../../context/context';
import { useInView } from 'react-intersection-observer';
import earth from '../../assets/earthrotate.json';
import './index.css';
import Animation from '../../Animation';
import cn from 'classnames';

const Hero = () => {
    const { darkTheme, themeColor, setPage } = useGlobalContext();
    const myName = 'yawai';
    const nameArr = myName.split('');
    const { ref, inView, entry } = useInView();

    const variants = {
        visible: { y: 0 },
        hover: {
            x: [-2, -4, -3.8, 0.9, 3.8, 4, 2, 2, 0],
            scaleX: [1, 1.3, 0.9, 1, 1.2],
            transition: {
                duration: 0.35
            }
        }
    };

    const hiVariants = {
        visible: {
            rotate: [45, -25, 45, -25, 45, -25, 0]
        }
    };


    const nameVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    useEffect(() => {

        if (inView && entry !== undefined) {
            setPage(entry.target.id)
        }

    }, [inView, entry]);

    return (
        <Animation>
            <section id='home' ref={ref}
                className="w-full h-full flex justify-center items-center flex-col lg:flex-row min-h-screen relative dark:text-slate-500">

                <div className='w-11/12 m-auto min-h-screen lg:w-6/12 flex justify-center flex-col items-center p-2 md:mt-4 text-center'>
                    <h1 id='name_container' className='text-5xl mb-2'>
                        <motion.span variants={hiVariants} style={{
                            transformOrigin: 'bottom right'
                        }} className='inline-block'>👋</motion.span>
                        Hi! I am
                        <span>&nbsp;</span>

                        <motion.div className='mt-5' variants={nameVariants}>

                            <strong className='block my-1 p-2 lg:p-0 w-full md:w-auto lg:my-0 lg:inline'>
                                {
                                    nameArr.map((word, ind) => (
                                        <motion.span
                                            style={{
                                                WebkitTextStroke: `2px ${themeColor}`,
                                                letterSpacing: '1px',
                                            }}
                                            variants={variants}
                                            initial='hidden'
                                            whileHover={'hover'}
                                            key={ind}
                                            className='name_word text-transparent uppercase inline-block cursor-pointer relative' data-text={word}
                                            data-color={themeColor}
                                        >{word}</motion.span>
                                    ))
                                }
                            </strong>
                        </motion.div>
                    </h1>



                    <motion.p variants={nameVariants} className='my-3 relative dark:text-slate-400 text-2xl'>
                        Full Stack Web Developer

                    </motion.p>

                    <motion.p variants={nameVariants} className='dark:text-slate-400 lg:w-full text-center whitespace-nowrap p-2'>
                        passionate about creating interactive applications.
                    </motion.p>

                    <motion.a variants={nameVariants} href="#contact" type='button' style={{
                        backgroundColor: themeColor
                    }} className='p-2 rounded text-white my-5 md:my-0 md:mt-2 hover:bg-blue-800'>Contact Me</motion.a>
                </div>

                <motion.div variants={nameVariants} className='hidden md:block md:w-4/5 lg:w-9/12 lg:h-screen'>
                    <div className='w-full flex justify-center items-center absolute'>
                        <Lottie animationData={earth} className="scale-125" />
                    </div>
                </motion.div>
            </section >
        </Animation>
    )
}

export default Hero