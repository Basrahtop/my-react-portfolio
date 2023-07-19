import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'


const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#0a192f]'>

        {/** container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-blue-600 font-bold'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-8xl font-bold text-[#ccd6f6]'>Dev Basrahtop</h1>
            <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b8]'>I am a UI/UX Designer/Front-End Developer</h2>
            <p className='text-[#8892b0] py-8 max-w-[700px]'>I offer Web design, Graphics design, Frontend development, Digital Marketing,
            Data Analytics, Mentoring and Ralational Database Management.
            </p>
               <div>
                <button className='text-white group border-2 px-6 py-3 sm:py-4 items-center my-2 flex hover:bg-blue-600 hover:border-blue-600 sm:px-8'>
                   View Works <span className='group-hover:rotate-90 duration-300'>< HiArrowNarrowRight className='ml-4' /></span>
                </button>
               </div>
        </div>


    </div>
  )
}

export default Home