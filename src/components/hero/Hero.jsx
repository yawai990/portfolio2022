import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react'
import { useGlobalContext } from '../../context/context';
import { useInView } from 'react-intersection-observer';
import earth from '../../assets/earthrotate.json';
import './index.css';

const Hero = () => {
    const { darkTheme, themeColor, setPage } = useGlobalContext();
    const myName = 'yawai';
    const nameArr = myName.split('');
    const { ref, inView, entry } = useInView();

    useEffect(() => {

        if (inView && entry !== undefined) {
            setPage(entry.target.id)
        }

    }, [inView, entry]);

    return (

        <section id='home' ref={ref}
            className="w-full h-full flex justify-center items-center flex-col lg:flex-row min-h-screen relative dark:text-slate-500">

            <motion.div
                whileInView={{
                    opacity: [0, 1],
                    y: [100, 0],
                    transition: {
                        duration: 1.2
                    }
                }}
                className='w-11/12 m-auto min-h-screen lg:w-6/12 flex justify-center flex-col items-center p-2 md:mt-4 text-center'>
                <h1 id='name_container' className='text-5xl mb-2'>
                    <span style={{
                        transform: ''
                    }} className='inline-block'>👋</span>
                    Hi! I am
                    <span>&nbsp;</span>

                    <div className='mt-5'>

                        <strong className='block my-1 p-2 lg:p-0 w-full md:w-auto lg:my-0 lg:inline'>
                            {
                                nameArr.map((word, ind) => (
                                    <motion.span id='name_word'
                                        initial={{
                                            rotateX: 80,
                                            rotateY: -45,
                                            x: -50,
                                            opacity: 0
                                        }}
                                        whileInView={{
                                            rotateX: 0,
                                            rotateY: 0,
                                            x: 0,
                                            opacity: 1
                                        }}

                                        transition={{
                                            stiffness: 30,
                                            type: 'spring',
                                            duration: 0.08,
                                            delay: 0.08 * ind
                                        }}

                                        style={{
                                            WebkitTextStroke: `2px ${themeColor}`,
                                            letterSpacing: '1px',
                                            transform: 'rotateX(90deg)'
                                        }}
                                        key={ind}
                                        className='name_word text-transparent uppercase inline-block cursor-pointer relative' data-text={word}
                                        data-color={themeColor}
                                    >{word}</motion.span>
                                ))
                            }
                        </strong>
                    </div>
                </h1>
                <p className='my-3 dark:text-slate-400 text-2xl'>Junior Web Developer</p>

                <motion.p className='dark:text-slate-400 lg:w-full text-justify p-2'
                    animate={{
                        y: [100, 0],
                        opacity: [0, 1]
                    }}
                >
                    passionate about creating interactive applications.
                </motion.p>

                <a href="#contact" type='button' style={{
                    backgroundColor: themeColor
                }} className='p-2 rounded text-white my-5 md:my-0 md:mt-2 hover:bg-blue-800'>Contact Me</a>
            </motion.div>

            <motion.div className='hidden md:block md:w-4/5 lg:w-9/12 lg:h-screen'
                whileInView={{
                    scale: [0, 1],
                    x: [100, 0],
                    opacity: [0, 1],
                    transition: {
                        duration: 1.5
                    }
                }}
            >
                <div className='w-full flex justify-center items-center absolute'>
                    <Lottie animationData={earth} className="scale-125" />
                </div>
            </motion.div>

        </section>
    )
}

export default Hero