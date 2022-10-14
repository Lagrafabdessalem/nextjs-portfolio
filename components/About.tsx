import React from 'react'
import { FaAward, FaUser } from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import { AiFillGithub, AiFillHtml5 } from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {TbBrandJavascript} from 'react-icons/tb'
import {GrReactjs} from 'react-icons/gr'
import {SiTailwindcss} from 'react-icons/si'
import {SiFirebase} from 'react-icons/si'

function About() {
  return (
    <div id='about' className='w-full md:h-screen '>
        <div className='  max-width-[1240px] m-auto  items-center text-center flex flex-col gap-4  '>
            <h2 className='flex justify-center font-bold text-4xl'>About</h2>
            <p className='py-4 max-w-[30%] m-auto'>Front en developer develop Modern website and professinal with good design creative templates</p>
           
         <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center items-center justify-center flex-wrap '>
         <div className='w-64 rounded-[20px] bg-[#0c1d33] border-solid p-14 flex flex-col gap-3 shadow-gray-400	'>
             <div className='flex justify-center'>
                <FaAward className='text-lg'/>
                </div>
                <h5 className='text-3xl'>Skills</h5>
                <span className="text-xl">+10 Web technologies</span>
            </div>
            <div className='w-64 rounded-[20px] bg-[#0c1d33] border-solid p-14 flex flex-col gap-3 shadow-gray-400	'>
             <div className='flex justify-center'>
                <FaAward className='text-lg'/>
                </div>
                <h5 className='text-3xl'>Experience</h5>
                <span className="text-xl">3+ years working</span>
            </div>

            <div className='about-cards w-64 rounded-[20px] bg-[#0c1d33] border-solid p-14 flex flex-col gap-3 shadow-gray-400	'>
                <div className='flex justify-center'>
                <FaUser className='text-lg' />
                </div>
                <h5 className='text-3xl'>Clients</h5>
                <span className='text-xl'>200+ worldwide</span>
            </div>

            <div className='about-cards w-64 rounded-[20px] bg-[#0c1d33] border-solid p-14 flex flex-col gap-3 shadow-gray-400 '>
                <div className='flex justify-center'>
                <VscFolderLibrary className='text-lg' />
                </div>
                <h5 className='text-3xl'>Projects</h5>
                <span className='text-xl'>10+ Completed Projects</span>
            </div>
            </div>

            
        <div className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 justify-center '>           
        <div className='w-36 py-6 shadow-xl rounded-xl bg-[#13263f] shadow-gray-400'>
                <div className='flex gap-4 justify-center items-center'>
                    <AiFillHtml5 className="text-[#e86030] text-3xl" />
                <div className=' items-center justify-center'>
                    <span>HTML</span>
                </div>
            </div>
            </div>

            <div className='w-36 py-6 shadow-xl rounded-xl bg-[#13263f] shadow-gray-400'>
                <div className='flex gap-4 justify-center items-center'>
                    <DiCss3 className="text-[#31a7dc] text-3xl" />
                <div className='items-center justify-center'>
                    <span>CSS</span>
                </div>
            </div>
            </div>

           
            <div className='w-36 py-6 shadow-xl rounded-xl bg-[#13263f] shadow-gray-400'>
                <div className='flex gap-4 justify-center items-center'>
                    <TbBrandJavascript className="text-[#efd81d]" />
                <div className='flex flex-col items-center justify-center'>
                    <span>Javascript</span>
                </div>
            </div>
            </div>

            <div className='w-36 py-6 shadow-xl rounded-xl bg-[#13263f] shadow-gray-400'>
                <div className='flex gap-4 justify-center items-center'>
                    <GrReactjs className='text-[#05c6e7]' />
                <div className='flex flex-col items-center justify-center'>
                    <span>React</span>
                </div>
            </div>
            </div>

            <div className='w-36 py-6 shadow-xl rounded-xl bg-[#13263f] shadow-gray-400'>
                <div className='flex gap-4 justify-center items-center'>
                    <SiTailwindcss className='text-[#36b7f0]' />
                <div className='flex flex-col items-center justify-center'>
                    <span>Tailwind</span>
                </div>
            </div>
            </div>

            
            <div className='w-36 py-6 shadow-xl rounded-xl bg-[#13263f] shadow-gray-400'>
                <div className='flex gap-4 justify-center items-center'>
                    <AiFillGithub className='text-[#000000]' />
                <div className='flex flex-col items-center justify-center'>
                    <span>Github</span>
                </div>
            </div>
            </div>

         
            <div className='w-36 py-6 shadow-xl rounded-xl bg-[#13263f] shadow-gray-400'>
                <div className='flex gap-4 justify-center items-center'>
                    <SiFirebase className='text-[#f2b12a]' />
                <div className='flex flex-col items-center justify-center'>
                    <span></span>Firebase
                </div>
            </div>
            </div>

           
            <div className='w-36 py-6 shadow-xl rounded-xl bg-[#13263f] shadow-gray-400'>
                <div className='flex gap-4 justify-center items-center'>
                    <AiFillHtml5 />
                <div className='flex flex-col items-center justify-center'>
                    HTML
                </div>
            </div>
            
            </div>
          </div>
            
            </div>
            </div>
  )
}

export default About
