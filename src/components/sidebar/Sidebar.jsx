import React from 'react';
import { NavLinks } from '../../data';

const Sidebar = () => {
  return (
    <div className="hidden md:block w-2/12 h-screen bg-bg-primary relative">
    <div className="w-full h-full flex flex-col justify-center items-center">
        {NavLinks?.map((link,ind)=>(
            <div key={ind} className='my-2 text-lg capitalize tracking-wider hover:text-text-primary'>
              <a href={`#${link.name}`}>{link.name}</a>
            </div>
        ))}
  </div>

  <div className="absolute bottom-0">
    <h1>i am facebook</h1>
  </div>
  </div>
  )
}

export default Sidebar