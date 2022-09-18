import React from 'react';
import { NavLinks } from '../../data';
import {motion} from 'framer-motion';
import { useGlobalContext } from '../../context/context';

const Sidebar = () => {
  const {currentPage,setPage,themeColor} = useGlobalContext();
  
  return (

    <div className="hidden md:block md:w-3/12 lg:w-2/12 h-screen dark:bg-dark-bg dark:text-white dark:drop-shadow-light bg-[#f5f5f5] relative">
    <div className="w-full h-full flex flex-col justify-center items-center">
        {NavLinks?.map(link=>(
            <motion.div key={link.id} className='my-2 text-lg capitalize tracking-wider hover:text-text-primary'
            animate={{
              x:[-40,0],
              opacity:[0,1]
            }}
            transition={{
              type:'spring',
              delay:0.09*link.id,
              duration:0.5
            }}
            >
              <a href={`#${link.name}`} 
              style={{
                width:'130px',
                padding:'8px 0',
                backgroundColor:currentPage === link.name ? themeColor:''
              }}
              className={currentPage === link.name ? 'rounded-lg drop-shadow-xl text-white block text-center duration-300':''}
              onClick={()=>setPage(link.name)} 
              >
                {link.name}
                </a>
            </motion.div>
        ))}
  </div>


                <footer className='w-full absolute bottom-0 text-center bg-[#182747] py-2 text-white'>
                        <p style={{
                          fontSize:'14px'
                        }}>
                          <small>Designed by Yawai</small>
                        </p>
                </footer>
  </div>

  )
}

export default Sidebar