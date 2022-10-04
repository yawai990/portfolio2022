import React,{useState,useEffect} from 'react';
import {motion} from 'framer-motion';
import Header from '../header/Header';
import { useGlobalContext } from '../../context/context';
import * as api from '../../api';

const initState={
  name:'',
  email:'',
  phone:'',
  message:''
};

const Contact = () => {
  const {themeColor}= useGlobalContext();
  const contactArr='Get In Touch'.split('');
  const interviewArr = "let's talk about an interview".split('');
  const [sendmail,setSendmail] = useState(initState);
  const [resp,setResp] = useState('')

  const onhandleSubmit =async (e)=>{
    e.preventDefault();

    api.sendMail(sendmail)
    .then(resp=>setResp(resp.data.message));

    setSendmail(initState)
  };

  useEffect(()=>{
    setTimeout(()=>{
      setResp('')
    },4000)
  },[resp])

  return (
    <section id='contact' className="w-full min-h-screen dark:text-slate-500 relative">

      <div style={{display:resp ? 'flex':'none'}}
      className={`p-2 rounded-lg bg-white drop-shadow-lg justify-center items-center absolute bottom-3 right-2.5 z-50`}>
        <p>{resp}</p>
      </div>

            <div 
            style={{
              borderTopRightRadius:'150px',
              borderBottomLeftRadius:'150px',
            }}
            className="w-full h-44 md:h-52 bg-bg-primary dark:bg-[#191919] flex justify-center items-center flex-col gap-4 p-5 sm:p-0 md:p-0 lg:p-0">
              <p className="text-center text-lg sm:text-2xl md:text-3xl lg:text-4xl">LET'S MAKE SOMETHING TOGETHER</p>
              <p className='text-md px-1 sm:text-lg text-center'>Give Me a heads up if you're interested for an interview</p>
            </div>

            <div className='mt-5'>
            
            <Header textArr={contactArr} size='2xl' align='center' />
            <Header textArr={interviewArr} size='md' align='center' marginY3X={true} />

              <form action="" className='p-4 pb-5' onSubmit={onhandleSubmit}>

                      <div className="gird grid-cols-3 md:flex gap-3">
                            
                              <motion.input 
                              type="text" name='name' 
                              id='name' 
                              value={sendmail.name}
                              onChange={e=>setSendmail({...sendmail,[e.target.name]:e.target.value})}
                              style={{
                                borderColor:themeColor
                              }}
                              className='w-full md:flex-1 outline-none border p-2 rounded-lg mb-2 sm:mb-0 dark:bg-transparent dark:caret-white' 
                              placeholder='Your Name'
                              whileInView={{y:[100,0],opacity:[0,1]}}
                               />
                              <motion.input 
                              type="text" name='email' 
                              id='email' 
                              value={sendmail.email}
                              onChange={e=>setSendmail({...sendmail,[e.target.name]:e.target.value})}
                              style={{
                                borderColor:themeColor
                              }}
                              className='w-full md:flex-1 outline-none border p-2 rounded-lg my-2 md:my-0 dark:bg-transparent dark:caret-white' 
                              placeholder='Your Email'
                              whileInView={{y:[100,0],opacity:[0,1],transition:{
                                delay:0.2
                              }}}
                               />
                              <motion.input
                               type="text" 
                               name='phone' 
                               value={sendmail.phone}
                               onChange={e=>setSendmail({...sendmail,[e.target.name]:e.target.value})}
                               style={{
                                borderColor:themeColor
                              }}
                               id='phone' className='w-full md:flex-1 outline-none border p-2 rounded-lg dark:bg-transparent dark:caret-white'
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
                        value={sendmail.message}
                        onChange={e=>setSendmail({...sendmail,[e.target.name]:e.target.value})}
                        style={{
                          borderColor:themeColor
                        }}
                        className='w-full outline-none border py-1 px-2 rounded-lg dark:bg-transparent dark:caret-white'
                        placeholder='Your Message'
                        ></textarea>
                      </motion.div>

                    <motion.button 
                    style={{
                      borderColor:themeColor
                    }}
                    className='w-full md:w-auto border p-2 rounded-lg hover:drop-shadow-lg dark:text-slate-400 dark:hover:text-white'
                    whileInView={{y:[20,0],opacity:[0,1],transition:{
                      delay:0.8
                    }}}
                    >Send A Message</motion.button>
              </form>
            </div>

    </section>
  )
}

export default Contact