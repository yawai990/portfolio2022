import React from 'react';
import {motion} from 'framer-motion';

const Header = ({textArr,size,align,marginY3X}) => {
  return (
    <h2 id='header' className={`capitalize text-${size ? size:'3xl'} text-${align && 'center'} tracking-wide font-semibold ${marginY3X && 'my-3'}`}
    >
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
              duration:0.3,
              delay:ind *0.05
            }}
            className='inline-block'
            >{text !== ' ' ? text:<span>&nbsp;</span>}
            </motion.span>
          ))
      }
      </h2>
  )
}

export default Header