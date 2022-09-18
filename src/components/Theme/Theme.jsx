import React from 'react';
import {BsFillSunFill,BsMoonStarsFill} from 'react-icons/bs';
import {AiFillSetting} from 'react-icons/ai';
import { useGlobalContext } from '../../context/context';
import './index.css';

const Theme = () => {
    const {darkTheme,setDarkTheme,
        showThemeColorContainer,
        setShowThemeColorContainer,themeColor} = useGlobalContext();

  return (
    <>
            <div 
            style={{
              color:themeColor
            }}
            className="w-7 h-7 rounded-full bg-white drop-shadow-lg cursor-pointer  dark:bg-slate-400 flex justify-center items-center text-lg" 
            onClick={()=>setDarkTheme(prev=>setDarkTheme(!prev))}
            >
                {darkTheme ? <BsMoonStarsFill />:
                <BsFillSunFill style={{
                                animation:'ani 1.5s ease-in-out infinite'
                }} 
                className='block'
                />}
        </div> 
        <div className="w-7 h-7 rounded-full bg-white drop-shadow-lg cursor-pointer dark:bg-slate-400 flex justify-center items-center text-lg" 
        onClick={()=>setShowThemeColorContainer('25px')}
        >
               <AiFillSetting
                style={{
                  color:themeColor,
                    animation: 'ani 1.5s linear infinite'
                }}
                id='theme_color_setting' className='block' />
        </div> 

    </>
  )
}

export default Theme