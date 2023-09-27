import React, { useState, useRef } from 'react';
import { Sidebar, MobileSide, Theme, Viber, Loading, Main } from './components';
import { BsCheckLg } from 'react-icons/bs';
import { AiOutlineBars } from 'react-icons/ai';
import { useGlobalContext } from './context/context';
import { ThemeColor } from './data';
import cn from 'classnames'


const App = () => {
  const [loading, setLoading] = useState(true);
  const [miniSidebar, setMiniSideBar] = useState(true);
  const { darkTheme,
    showThemeColorContainer,
    setShowThemeColorContainer,
    themeColor, setThemeColor,
    setSideActive
  } = useGlobalContext();

  const setMode = (color, px) => {
    setShowThemeColorContainer(px)
    setThemeColor(color)
    localStorage.setItem('themeColor', color)
  };

  setTimeout(() => {
    setLoading(false)
  }, 1000);

  const mainPageStyle = cn('w-full overflow-scroll overflow-x-hidden scroll-smooth snap-y snap-mandatory duration-100 relative', {
    " md:w-10/12": !miniSidebar,
  })

  if (loading) {
    return <Loading />
  }

  return (
    <div className={darkTheme === 'dark' ? 'dark' : ''}>
      <div className="w-screen h-screen flex scroll-smooth dark:bg-dark-bg relative overflow-hidden">

        {/* side bar */}
        <Sidebar miniSidebar={miniSidebar} setMiniSideBar={setMiniSideBar} />
        <MobileSide />

        <div className={mainPageStyle}>

          {/* viber message icon */}
          <div className='fixed bottom-5 right-10 z-40'>
            <Viber />
          </div>

          {/* side bar button */}
          <div className="fixed top-3 z-20 px-3 md:hidden">
            <button style={{
              color: themeColor
            }}
              onClick={() => setSideActive(true)}
              className='p-2 text-2xl bg-white drop-shadow-lg rounded-full dark:bg-slate-500 dark:font-semibold'

            >
              <AiOutlineBars />
            </button>
          </div>

          {/* theme & color */}
          <div className="fixed top-5 right-12 flex gap-3 z-10">
            <Theme />
          </div>

          <div id='theme_color_container'
            style={{
              right: showThemeColorContainer
            }}
            className='fixed top-14 flex gap-2 p-2 rounded-lg duration-200 z-20 bg-gray-600 dark:bg-slate-500'>
            {
              ThemeColor.map((color, ind) => (
                <div key={ind}
                  style={{
                    backgroundColor: color
                  }}
                  className="w-7 h-7 rounded-full cursor-pointer flex justify-center items-center text-white drop-shadow-lg"
                  onClick={() => setMode(color, '-100%')}
                >
                  {themeColor === color ? <BsCheckLg /> : ''}
                </div>
              ))
            }
          </div>

          <Main />

        </div>
      </div>

    </div>
  )
}

export default App