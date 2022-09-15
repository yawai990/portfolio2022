import React from 'react';
import {motion} from 'framer-motion';

const Contact = () => {
  const text='Get In Touch';
  const textArr = text.split('');
  return (
    <section id='contact' className="w-full min-h-screen">

            <div className="w-full h-52 bg-[#F2D388] text-[#874C62] flex justify-center items-center flex-col gap-4">
              <p className="text-center text-4xl">LET'S MAKE SOMETHING TOGETHER</p>
              <p className='text-lg'>Give Me a heads up if you're interested for an interview</p>
            </div>

            <div className='mt-5'>
            
              <h3 whileInView={{opacity:1}} className='text-center text-4xl'>
               Get In Tounch
              </h3>
        
              <p className='text-center text-lg my-3'>Let's talk about for an interview</p>

              <form action="" className='p-4'>

                      <div className="flex justify-between items-center flex-col md:flex-row gap-4 md:gap-0">
                            
                              <motion.input 
                              type="text" name='name' 
                              id='name' className='w-full md:w-80 outline-none border focus:border-[#5F6F94] p-2 rounded-lg' 
                              placeholder='Your Name'
                              whileInView={{y:[100,0],opacity:[0,1]}}
                               />
                              <motion.input 
                              type="text" name='email' 
                              id='email' className='w-full md:w-80 outline-none border focus:border-[#5F6F94] p-2 rounded-lg' 
                              placeholder='Your Email'
                              whileInView={{y:[100,0],opacity:[0,1],transition:{
                                delay:0.2
                              }}}
                               />
                              <motion.input
                               type="text" name='phone' 
                               id='phone' className='w-full md:w-80 outline-none border focus:border-[#5F6F94] p-2 rounded-lg' 
                               placeholder='Your Phone' 
                               whileInView={{y:[100,0],opacity:[0,1],transition:{
                                delay:0.4
                              }}}
                               />
                      </div>

                      <motion.div className='my-4'
                      whileInView={{y:[100,0],opacity:[0,1],transition:{
                        delay:0.6
                      }}}
                      >
                        <textarea name="message" 
                        id="message" rows="5"
                        className='w-full outline-none border focus:border-[#5F6F94] py-1 px-2 rounded-lg' 
                        placeholder='Your Message'
                        ></textarea>
                      </motion.div>

                    <motion.button 
                    className='w-full md:w-auto border p-2 rounded-lg hover:bg-[#F2D388] hover:text-white'
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