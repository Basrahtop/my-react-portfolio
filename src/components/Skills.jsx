import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import Github from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import Node from '../assets/node.png'
import ReactImg from '../assets/react.png'
import Mongo from '../assets/mongo.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>

        {/** Container */}
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center p-4 w-full h-full'>
            <div>
            <p className='text-4xl inline font-bold border-b-4 border-blue-600 '>Skills</p>
            <p className='py-4'>// These are the technologies I have worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center gap-4 py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto ' src={HTML} alt="HTML Logo" />
                <p className='my-4'>HTML</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto ' src={CSS} alt="HTML Logo" />
                <p className='my-4'>CSS</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto ' src={JavaScript} alt="HTML Logo" />
                <p className='my-4'>JavaScript</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto ' src={ReactImg} alt="HTML Logo" />
                <p className='my-4'>React</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto ' src={Tailwind} alt="HTML Logo" />
                <p className='my-4'>Tailwind</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto ' src={Github} alt="HTML Logo" />
                <p className='my-4'>Github</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto ' src={Mongo} alt="HTML Logo" />
                <p className='my-4'>Mongo</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto ' src={Node} alt="HTML Logo" />
                <p className='my-4'>Node</p>
            </div>
        </div>
        </div>

        


    </div>
  )
}

export default Skills