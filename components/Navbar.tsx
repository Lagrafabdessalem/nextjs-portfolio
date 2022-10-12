import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import {AiOutlineMenu, AiOutlineClose, AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn, FaTwitter} from 'react-icons/fa'

function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () =>{
    setNav(!nav)
  };
useEffect(() => {
  const handleShadow = () =>{
    if(window.scrollY >= 90){
setShadow(true) ;}
      else {
setShadow(false);
    }
  };
  window.addEventListener("scroll", handleShadow);

}, []);
  return (
    <div className={shadow ? 'fixed w-full h-20 shadow-lg z-10' : 'fixed w-full h-20 z-10' }>
      <div className='flex justify-center items-center w-full h-full  2xl:px-16'>
          <ul className='hidden md:flex'>
            <Link href='/#main'>
              <li className='ml-10 text-xl uppercase hover:border-b'>Home</li>
            </Link>
            <Link href='/#about'>
              <li className='ml-10 text-xl uppercase hover:border-b'>About</li>
            </Link>
            <Link href='/#portfolio'>
              <li className='ml-10 text-xl uppercase hover:border-b'>Projects</li>
            </Link>
            <Link href='/#contact'>
              <li className='ml-10 text-xl uppercase hover:border-b'>Contact</li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden ml-[450px] text-white">
          <AiOutlineMenu size={28}/>
        </div>
        </div>


      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/75' : ''}>
        <div className={nav 
        ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#163052] p-10 ease-in-duration-500'
      :'fixed left-[-100%] top-0 p-10 ease-in-duration-500'
      }>
<div>
  <div className='flex justify-center items-center  '>
    <Image src="/Assets/profile.png" width="170" height="170" alt="Logo" className='rounded-full'/>
    <div onClick={handleNav} className='rounded-full p-3 shadow-lg shadow-gray-400 relative left-20'>
    <AiOutlineClose />
    </div>
  </div>
  <div className='border-b border-black my-4'>
    <p className='py-4 w-[85%] md:w-[98%]'>Welcome to the next powerfull website builder</p>
  </div>
</div>
<div className='py-4 flex flex-col'>
  <ul className='uppercase'>
    <Link href="/">
      <li className='text-sm py-4'>Home</li>
    </Link>
    <Link href="/">
      <li className='text-sm py-4'>About</li>
    </Link>
    <Link href="/">
      <li className='text-sm py-4'>Skills</li>
    </Link>
    <Link href="/">
      <li className='text-sm py-4'>Projects</li>
    </Link>
    <Link href="/">
      <li className='text-sm py-4'>Contact</li>
    </Link>
  </ul>
  <div className='pt-16'>
    <p className='uppercase tracking-widest text-blue'>Let's contact</p>
    <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
      <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-50'>
      <FaLinkedinIn />
      </div>
      <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-50'>
      <FaGithub />
      </div>
      <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-50'>
      <FaTwitter />
      </div>
      <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-50'>
      <AiOutlineMail />
      </div>
     
    </div>
  </div>
</div>
        </div>
        </div>
        </div>
  )
}

export default Navbar