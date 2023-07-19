import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 '>
        
       <form method='POST' action="https://getform.io/f/365a125b-a9a7-40ec-a30c-13909d7413b8" className='max-w-[600px] flex flex-col w-full'>
        <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-blue-600 text-gray-300'>Contact</p>
        <p className='text-gray-300 p-4'>Submit the form below or shot me an email - devbasrahtop@gmail.com</p>
        </div>

        <input className='p-2 bg-[#ccd6f6]'type="text" name='name' placeholder='Your Name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" name='email' placeholder='Your Email' />
        <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
       </form>
        
        </div>
  )
}

export default Contact