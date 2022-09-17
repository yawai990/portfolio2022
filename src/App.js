import React from 'react';
import {Contact,Hero,Sidebar,About,Skills,Projects} from './components';

const App = () => {

  return (
    <>
    <div className="w-screen h-screen overflow-hidden flex scroll-smooth dark:bg-dark-bg">
    
      {/* side bar */}
      <Sidebar />

                <div className='w-12/12 md:w-10/12 max-h-screen overflow-scroll overflow-x-hidden scroll-smooth snap-y'>
                  <Hero />
                  <About />
                  <Skills />
                  <Projects />
                <Contact />
                </div>
    </div>

    </>
  )
}

export default App