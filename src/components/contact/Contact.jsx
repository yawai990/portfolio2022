import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../header/Header';
import { useGlobalContext } from '../../context/context';
import * as api from '../../api';
import { useInView } from 'react-intersection-observer';
import { BsTelegram, BsGithub } from 'react-icons/bs';
import Animation from '../../Animation';

const initState = {
  name: '',
  email: '',
  phone: '',
  message: ''
};

const Contact = () => {
  const { themeColor, state, setPage } = useGlobalContext();
  const contactArr = 'Get In Touch'.split('');
  const interviewArr = "let's talk about an interview".split('');
  const [sendmail, setSendmail] = useState(initState);
  const [resp, setResp] = useState('');
  const { ref, inView, entry } = useInView();

  const variants = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  useEffect(() => {

    if (inView && entry !== undefined) {
      setPage(entry.target.id)
    }

  }, [inView, entry]);

  const handleChange = e => setSendmail({ ...sendMail, [e.target.name]: e.target.value });

  const onhandleSubmit = async (e) => {
    e.preventDefault();

    api.sendMail(sendmail)
      .then(resp => setResp(resp.data.message));

    setSendmail(initState)
  };

  useEffect(() => {
    setTimeout(() => {
      setResp('')
    }, 4000)
  }, [resp])

  return (
    <section id='contact' ref={ref} className="w-full min-h-screen dark:text-slate-500 relative">


      <div style={{ display: resp ? 'flex' : 'none' }}
        className={`p-2 rounded-lg bg-white drop-shadow-lg justify-center items-center absolute bottom-3 right-2.5 z-50`}>
        <p>{resp}</p>
      </div>

      <div
        style={{
          borderTopRightRadius: '150px',
          borderBottomLeftRadius: '150px',
          color: themeColor
        }}
        className={`w-full h-44 md:h-52 dark:bg-[#191919] flex justify-center items-center flex-col gap-4 p-5 sm:p-0 md:p-0 lg:p-0`}>
        <p className="text-center text-lg sm:text-2xl md:text-3xl lg:text-4xl">LET'S MAKE SOMETHING TOGETHER</p>
        <p className='text-md px-1 sm:text-lg text-center'>Give Me a heads up if you're interested for an interview</p>
      </div>

      <Header textArr={contactArr} size='2xl' align='center' />
      <Header textArr={interviewArr} size='md' align='center' marginY3X={true} />

      <Animation>
        <form action="" className='p-4' onSubmit={onhandleSubmit}>

          <div className="gird grid-cols-3 md:flex gap-3">

            <InputCom name={'email'} fun={handleChange} themeColor={themeColor} />
            <InputCom name={'name'} fun={handleChange} themeColor={themeColor} />
            <InputCom name={'phone'} fun={handleChange} themeColor={themeColor} />

          </div>

          <motion.div className='my-4'
            variants={variants}
          >
            <textarea name="message"
              id="message" rows="5"
              value={sendmail.message}
              onChange={e => setSendmail({ ...sendmail, [e.target.name]: e.target.value })}
              style={{
                borderColor: themeColor
              }}
              className='w-full outline-none border py-1 px-2 rounded-lg dark:bg-transparent dark:caret-white'
              placeholder='Your Message'
            ></textarea>
          </motion.div>

          <motion.button
            style={{
              borderColor: themeColor
            }}
            className='w-full md:w-auto border p-2 rounded-lg hover:drop-shadow-lg dark:text-slate-400 dark:hover:text-white'
            variants={variants}
          >Send A Message</motion.button>
        </form>


        <div className='flex justify-start items-center py-2 gap-2'>

          <a style={{ color: themeColor }} href='https://t.me/YawaiZZ' className='w-8 h-8 hover:bg-blue-500 rounded-full text-2xl flex justify-center items-center'>
            <BsTelegram />
          </a>

          <a style={{ color: themeColor }} href='https://github.com/yawai990?tab=repositories' className='w-8 h-8 hover:bg-blue-500 rounded-full text-2xl flex justify-center items-center'>
            <BsGithub />
          </a>


        </div>
      </Animation>

    </section>
  )
}

const InputCom = ({ name, type, fun, themeColor }) => {
  const variants = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return <motion.input
    type={type || 'text'} name={name}
    id={name}
    onChange={fun}
    style={{
      borderColor: themeColor
    }}
    className='w-full md:flex-1 placeholder:capitalize outline-none border p-2 rounded-lg my-2 md:my-0 dark:bg-transparent dark:caret-white'
    placeholder={`Your ${name}`}
    variants={variants}
  />
}

export default Contact