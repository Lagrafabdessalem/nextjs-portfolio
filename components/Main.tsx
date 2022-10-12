import Image from 'next/image'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

function Main () {
  return (
    <div id='main' className='w-full  text-center py-24 z-0'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 justify-center items-center flex '>
            <div>
                <Image src="/Assets/profile.png" alt='profile' width="200px" height="200px" className='rounded-full'/>
                <p>Let's Build something together</p>
                <h1 className='py-4'>Hi, I'm <span className=' text-[3.50rem]'>Lagraf</span></h1>
                <h1 className='py-4 max-w-[70%] m-auto'>A Front-End Web Developer</h1>
                <p className='py-4 max-w-[70%] m-auto'>Front en developer develop Modern website and professinal with good design creative templates  </p>
                <div className='flex items*center justify-between max-w-[370px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer bg-[#13263f] '>
                        <FaLinkedinIn />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer bg-[#13263f] '>
                        <FaGithub />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer bg-[#13263f] '>
                        <FaTwitter />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer bg-[#13263f]'>
                        <AiOutlineMail />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main