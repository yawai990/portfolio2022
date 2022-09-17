import React,{useState} from 'react';
import {Contact,Hero,Sidebar,About,Skills,Projects,Theme} from './components';
import {BsCheckLg} from 'react-icons/bs';
import { useGlobalContext } from './context/context';
import { ThemeColor } from './data';

const App = () => {
        const {darkTheme,
                  showThemeColorContainer,
                  setShowThemeColorContainer,
                  themeColor,setThemeColor
                } = useGlobalContext();

          const setMode=(color,px)=>{
            setShowThemeColorContainer(px)
            setThemeColor(color)
          }

  return (
    <div className={darkTheme ? 'dark':''}>
    <div className="w-screen h-screen overflow-hidden flex scroll-smooth dark:bg-dark-bg">
    
      {/* side bar */}
      <Sidebar />

                <div className='w-12/12 md:w-10/12 max-h-screen overflow-scroll overflow-x-hidden scroll-smooth snap-y snap-mandatory duration-100 relative'>

                  <div className="fixed top-5 right-12 flex gap-3 z-10">
                        <Theme />
                  </div>

                  <div id='theme_color_container'
                  style={{
                    right:showThemeColorContainer
                  }}
                  className='fixed top-14 bg-white flex gap-2 p-2 rounded-lg duration-200 z-20 bg-gray-600 dark:bg-slate-500'>
                      {
                        ThemeColor.map((color,ind)=>(
                          <div key={ind} 
                          style={{
                            backgroundColor:color
                          }}
                          className="w-7 h-7 rounded-full cursor-pointer flex justify-center items-center text-white drop-shadow-lg"
                          onClick={()=>setMode(color,'-100%')}
                          >
                            {themeColor === color ? <BsCheckLg />:''}
                            </div>
                        ))
                      }
             </div>

                  <Hero />
                  <About />
                  <Skills />
                  <Projects />
                <Contact />
                </div>
    </div>

    </div>
  )
}

export default App