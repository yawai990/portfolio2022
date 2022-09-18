import React from 'react';
import {FiPhoneCall} from 'react-icons/fi';
import { useGlobalContext } from '../../context/context';
import './index.css';

const Viber = () => {
    const {themeColor} = useGlobalContext();

  return (
    <div 
    id='viber_btn_container'
     style={{
        background:themeColor
     }}
    className='w-36 h-10 rounded-full text-white flex justify-center items-center relative'>
        <a href='https://msng.link/o/?959250364540=vi' target='_blank' rel='noreferrer' type='button' className="w-full h-full flex justify-center items-center">
            <span className='p-1'>
                <FiPhoneCall />
                </span>
            <span>Message Me</span>
        </a>
    </div>
  )
}

export default Viber