import React from 'react';
import {Contact,Hero,Sidebar,About} from './components';

const App = () => {

  return (
    <>
    <div className="w-screen h-screen overflow-hidden flex scroll-smooth">
    
      {/* side bar */}
      <Sidebar />

                <div className='w-12/12 md:w-10/12 max-h-screen overflow-scroll overflow-x-hidden scroll-smooth'>
                  <Hero />
                  <About />
                <Contact />
                </div>
    </div>

    </>
  )
}

export default App