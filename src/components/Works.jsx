import React from 'react'
import WorkImg from '../assets/projects/workImg.jpeg'
import RealEstate from '../assets/projects/realestate.jpg'

const Works = () => {
  return (
    <div name='works' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>

   {/**Container */}
   <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
    <div className='pb-8'>
        <p className='text-4xl inline font-bold border-b-4 border-blue-600 '>Works</p>
        <p className='py-6'>Checkout Some of my recent works</p>
    </div>

    {/**Card Container */}
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

        {/**Card Items 1*/}
        <div style={{backgroundImage: `url(${WorkImg})`}}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/**Hover Effect */}
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                    React JS Application 
                </span>
                <div className='pt-8 text-center'>
                    <a href="/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                </div>
            </div>
        </div>

        {/**Card Items 2*/}

        <div style={{backgroundImage: `url(${RealEstate})`}}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/**Hover Effect */}
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                    React JS Application 
                </span>
                <div className='pt-8 text-center'>
                    <a href="/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                </div>
            </div>
        </div>

            {/**Card Items 3*/}
        <div style={{backgroundImage: `url(${WorkImg})`}}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/**Hover Effect */}
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                    React JS Application 
                </span>
                <div className='pt-8 text-center'>
                    <a href="/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                </div>
            </div>
        </div>

            {/**Card Items 4*/}
        <div style={{backgroundImage: `url(${WorkImg})`}}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/**Hover Effect */}
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                    React JS Application 
                </span>
                <div className='pt-8 text-center'>
                    <a href="/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                </div>
            </div>
        </div>

                {/**Card Items 5*/}

        <div style={{backgroundImage: `url(${WorkImg})`}}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/**Hover Effect */}
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                    React JS Application 
                </span>
                <div className='pt-8 text-center'>
                    <a href="/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                </div>
            </div>
        </div>

         {/**Card Items 6*/}

         <div style={{backgroundImage: `url(${WorkImg})`}}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/**Hover Effect */}
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                    React JS Application 
                </span>
                <div className='pt-8 text-center'>
                    <a href="/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
   </div>
    
    </div>
  )
}

export default Works