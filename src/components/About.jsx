import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col items-center justify-center h-full w-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 sm:border-b-8 border-blue-600'>About</p>
          </div>
        </div>
        <div></div>

        <div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div>
            <p className='sm:text-right font-bold text-4xl'>Hi, I am Dev Basrahtop, nice to meet you Please take a look around</p>
          </div>
          <div>
            <p>I am dev Basrahtop and professional graphics designer/web designer with over five years of working experience in the 
              design and creative industry and one and half years of freelancing experience. I have worked with big companies and with
              start up Businesses. I love tearing ideas down and build from scratch to ensure effective and total control of my clients
              projects.effective delivery and my clients satisfaction has been my watchword ever since my years of working experience. 
              I have worked single handedly and together with my teams in ensuring many completed projects for my clients.</p>
          </div>
        </div>
      </div>
        </div>

    </div>
  )
}

export default About