import React from 'react';
import {motion} from 'framer-motion';
import { useGlobalContext } from '../../context/context';

const Contact = () => {
  const {theme,themeColor}= useGlobalContext();
  const text='Get In Touch';
  const textArr = text.split('');
  return (
    <section id='contact' className="snap-always snap-start w-full min-h-screen dark:text-slate-500">

            <div 
            style={{
              color:themeColor
            }}
            className="w-full h-52 bg-bg-primary dark:bg-[#191919] flex justify-center items-center flex-col gap-4">
              <p className="text-center text-4xl">LET'S MAKE SOMETHING TOGETHER</p>
              <p className='text-lg text-center'>Give Me a heads up if you're interested for an interview</p>
            </div>

            <div className='mt-5'>
            
              <h3 className='text-center text-4xl'>
               Get In Tounch
              </h3>
        
              <p className='text-center text-lg my-3'>Let's talk about for an interview</p>

              <form action="" className='p-4'>

                      <div className="gird grid-cols-3 md:flex gap-3">
                            
                              <motion.input 
                              type="text" name='name' 
                              id='name' 
                              className='w-full md:flex-1 outline-none border focus:border-2 focus:border-[#5F6F94] p-2 rounded-lg mb-2 sm:mb-0 dark:bg-transparent dark:caret-white' 
                              placeholder='Your Name'
                              whileInView={{y:[100,0],opacity:[0,1]}}
                               />
                              <motion.input 
                              type="text" name='email' 
                              id='email' 
                              className='w-full md:flex-1 outline-none border focus:border-2 focus:border-[#5F6F94] p-2 rounded-lg my-2 md:my-0 dark:bg-transparent dark:caret-white' 
                              placeholder='Your Email'
                              whileInView={{y:[100,0],opacity:[0,1],transition:{
                                delay:0.2
                              }}}
                               />
                              <motion.input
                               type="text" 
                               name='phone' 
                               id='phone' className='w-full md:flex-1 outline-none border focus:border-2 focus:border-[#5F6F94] p-2 rounded-lg dark:bg-transparent dark:caret-white'  
                               placeholder='Your Phone' 
                               whileInView={{y:[100,0],opacity:[0,1],transition:{
                                delay:0.4
                              }}}
                               />
                      </div>

                      <motion.div className='my-4'
                           whileInView={{y:[100,0],opacity:[0,1]}}
                      >
                        <textarea name="message" 
                        id="message" rows="5"
                        className='w-full outline-none border focus:border-2 focus:border-[#5F6F94] py-1 px-2 rounded-lg dark:bg-transparent dark:caret-white'  
                        placeholder='Your Message'
                        ></textarea>
                      </motion.div>

                    <motion.button 
                    style={{
                      borderColor:themeColor
                    }}
                    className={`w-full md:w-auto border p-2 rounded-lg hover:drop-shadow-lg dark:text-slate-400 dark:hover:text-white`}
                    whileInView={{y:[100,0],opacity:[0,1],transition:{
                      delay:0.8
                    }}}
                    >Send A Message</motion.button>
              </form>
            </div>

    </section>
  )
}

export default Contact