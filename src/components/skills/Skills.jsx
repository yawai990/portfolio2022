import React from 'react';
import { skillImg } from '../../data';
import {motion} from 'framer-motion';
import './index.css';

const Skills = () => {
  return (
        <div id="skills" className="w-full">

            <div className='p-2'>

            <h4 className='font-semibold uppercase tracking-wide text-2xl'>Core skills</h4>
            </div>

                <div className="w-full">
                    <div className="w-full h-44 bg-[#F2D388] flex justify-center items-center p-4">
                        <p className='w-11/12 md:w-2/5 text-lg text-center tracking-wide p-2'>Passionate about crafting the deligtful and functional experiences and focused on writing clean and efficient code</p>
                    </div>

                        <div className="w-full py-4">
    
                            <h5 className="font-semibold tracking-wide text-xl text-center my-2 p-2 mb-3">Web Development Skills</h5>

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
                                className="w-28 h-28 rounded-full drop-shadow-lg cursor-pointer"
                                >
                                    <div  id='skill_img_container' className='w-full h-full flex justify-center items-center bg-white p-2' >
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


        </div>
  )
}

export default Skills