import React from 'react'

const Hero = () => {
  return (
    <section id='home' className="w-full flex justfiy-center items-center bg-hero-bg bg-no-repeat bg-center bg-cover min-h-screen relative">
        <div className="w-full h-full absolute bg-black/[0.65]"></div>

            <div className='w-10/12 m-auto h-full md:w-3/5 flex justify-center flex-col items-center text-white/[0.8] relative z-10'>
                <h1 className='text-5xl mb-2'>Hi! I am 
                <strong className='ml-1'>
                 Yawai
                </strong>
                </h1>
                <p className='my-3'>Junior Web Developer</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, eius?</p>
            </div>

            <div className='hidden md:block w-2/5 p-2'>
                    <div className='w-full h-full flex justify-center items-center'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa4xjShh4ynJbrgYrW_aB4lhKSxeMzQ3cO_A&usqp=CAU" alt="" className='w-8/12 object-cover' />
                    </div>
            </div>

    </section>
  )
}

export default Hero