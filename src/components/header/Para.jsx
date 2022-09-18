import React from 'react';
import {motion} from 'framer-motion';

const Para = ({textArr,size,align,marginY3X}) => {
  return (
    <>
      {
          textArr.map((text,ind)=>(
            <motion.span 
            key={ind}
            initial={{
              rotateX:90,
              rotateY:-60
            }}
            whileInView={{
              rotateX:0,
              rotateY:0
            }}
            transition={{
              duration:0.07,
              delay:ind *0.03
            }}
            className='inline-block'
            >{text !== ' ' ? text:<span>&nbsp;</span>}
            </motion.span>
          ))
      }
      </>
  )
}

export default Para;