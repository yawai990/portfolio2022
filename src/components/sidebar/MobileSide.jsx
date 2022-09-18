import React from 'react';
import { NavLinks } from '../../data';
import {motion} from 'framer-motion';
import {TiTimes} from 'react-icons/ti';
import { useGlobalContext } from '../../context/context';

const MobileSide = () => {
    const {currentPage,setPage,themeColor,
        sideActive,setSideActive} = useGlobalContext();

        const setPageSide =(page,setSide)=>{
            setPage(page)
            setSideActive(setSide)
        }
  return (
    <section
    style={{
        width:sideActive ? '100vw':'0',
        overflow:'hidden'
    }}
     className='h-screen absolute block bg-black/[0.55] z-50 md:hidden duration-200'>

            <div className="w-3/5 h-screen dark:bg-dark-bg dark:text-white dark:drop-shadow-light bg-[#f5f5f5] relative">

                <div className='p-4 flex justify-around items-center'>
                    <div className='flex-1'>Logo</div>

                    <button className='flex justify-center items-center bg-white drop-shadow-lg text-xl text-red-400 rounded-full p-1'
                    onClick={()=>setSideActive(false)}
                    >
                        <TiTimes />
                    </button>
                </div>

                    <div className="w-full flex flex-col justify-center items-start p-3">
                        {NavLinks?.map(link=>(
                            <motion.div 
                            key={link.id} 
                            style={{
                                backgroundColor:currentPage === link.name ? themeColor:''
                            }}
                            className='w-full my-2 text-lg capitalize tracking-wider hover:text-text-primary hover:bg-gray-400 rounded-lg'
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
                            className='w-full h-full rounded-lg drop-shadow-xl block duration-300 px-5 py-2 text-black dark:text-white'
                            onClick={()=>setPageSide(link.name,false)} 
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
    </section>
  )
}

export default MobileSide