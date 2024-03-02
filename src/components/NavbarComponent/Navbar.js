'use client'
import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {


  const [isDesktop, setIsDesktop] = useState(false);


  useEffect(() => {

    const handleResize = () => {

      setIsDesktop(window.innerWidth < 800);
    };

    handleResize();


    window.addEventListener('resize', handleResize);


    return () => {
      window.removeEventListener('resize', handleResize);
      console.log(handleResize);
    };
  }, []);

  const DropdownMenu = () => {
    return (
      <div className=" absolute top-50  bg-transparent rounded-sm w-full h-auto ">
        <ul className='bg-[#f6f6f6] mt-[1.5rem] rounded-lg flex-col justify-center items-center' >
          <li className=' flex justify-center my-3 text-black/70 hover:text-black font-semibold pt-3 hover:cursor-pointer' >Menu 1</li>
          <li className=' flex justify-center my-3 text-black/70 hover:text-black font-semibold hover:cursor-pointer' >Menu 2</li>
          <li className=' flex justify-center my-3 text-black/70 hover:text-black font-semibold pb-3 hover:cursor-pointer' >Menu 3</li>
        </ul>
      </div>
    );
  };

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {
        isDesktop ?
          //smallNavbar

          <div className='h-[5rem] p-5 shadow-2xl w-[100vw] bg-white flex flex-row fixed top-0 left-0  justify-between lg:px-[8rem] sm:px-[4rem] overflow-hidden '>

            <div className=" text-2xl font-bold mr-8  ">
              <h2>
                Yummy<span className='text-red-600' >.</span>
              </h2>
            </div>
            <div>
              <button className='bg-red-600 text-white px-5  py-2 rounded-full' >
                Book a Table
              </button>
            </div>
            <div className='font-medium flex items-center justify-between relative z-10 ' >
              <button className='w-full flex-col justify-center items-center   lg:flex ' onClick={handleClick} >
                <span className={` bg-black/90 block transition-all duration-300 ease-out h-[2.5px] w-7 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} ></span>
                <span className={` bg-black/90 block transition-all duration-300 ease-out h-[2.5px] w-7  rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`} ></span>
                <span className={` bg-black/90 block transition-all duration-300 ease-out h-[2.5px] w-7 rounded-sm  ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'} `} ></span>
              </button>
            </div>
            {
              isOpen ?
                <motion.div
                  initial={{ translateX: "200" }}
                  animate={{ translateX: "150" }}
                  className='min-w-[100vw]  flex flex-col h-[100vh] justify-between  fixed top-[10%]  
          bg-white/80 rounded-lg backdrop-blur-md py-0 shadow-lg' >
                  <nav className='py-8 px-6 lg:text-center sm:text-left z-10 w-[100%] mx-auto flex-col justify-center '>
                    <div className='my-8' >
                      <Link href='/' className="text-black/90  text-xl"  >Home</Link>
                    </div>
                    <div className='my-8' >
                      <Link href='/' className="text-black/90 text-xl" >About</Link>
                    </div>
                    <div className='my-8' >
                      <Link href='/' className="text-black/90 text-xl" >Menu</Link>
                    </div>
                    <div className='my-8' >
                      <Link href='/' className="text-black/90 text-xl" >Events</Link>
                    </div>
                  </nav>
                </motion.div>

                : null
            }

          </div>
          :
          //large Navbar
          <div className=' w-full  h-[4rem]  flex justify-center  items-center  bg-white  fixed top-0 left-0 ;
      '>
            <div className=" text-3xl font-bold mr-8 md:mr-16 w-[18rem] lg:w-[8rem]  ">
              <h2>
                Yummy<span className='text-red-600' >.</span>
              </h2>
            </div>
            <div className='flex  ' >
              <button className='relative group text-base text-black/60 font-semibold hover:text-black mx-3 my-2 text-[14px]'>
                Home
                <span className=' h-[2px] inline-block w-0 bg-red-600 absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-150' >
                  &nbsp;
                </span>

              </button>
              <button className='relative group text-base text-black/60 font-semibold hover:text-black mx-3 my-2 text-[14px]'>
                About
                <span className=' h-[2px] inline-block w-0 bg-red-600 absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-150' >
                  &nbsp;
                </span>

              </button>
              <button className='relative group text-base text-black/60 font-semibold hover:text-black mx-3 my-2 text-[14px]'>
                Menu
                <span className=' h-[2px] inline-block w-0 bg-red-600 absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-150' >
                  &nbsp;
                </span>

              </button>
              <button className='relative group text-base text-black/60 font-semibold hover:text-black mx-3 my-2 text-[14px]'>
                Events
                <span className=' h-[2px] inline-block w-0 bg-red-600 absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-150' >
                  &nbsp;
                </span>

              </button>
              <button className='relative group text-base text-black/60 font-semibold hover:text-black mx-3 my-2 text-[14px]'>
                Chefs
                <span className=' h-[2px] inline-block w-0 bg-red-600 absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-150' >
                  &nbsp;
                </span>

              </button>
              <button className='relative group text-base text-black/60 font-semibold hover:text-black mx-3 my-2 text-[14px]'>
                Gallery
                <span className=' h-[2px] inline-block w-0 bg-red-600 absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-150' >
                  &nbsp;
                </span>

              </button>
              <div className="App   ">
                <header className="App-header">
                  <div
                    className="menu relative group  "
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button className=' group text-base text-black/60 font-semibold hover:text-black mx-3 my-2 text-[14px]'  >Drop down</button>
                    <span className=' h-[2px] inline-block w-0 bg-red-600 absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-150' >
                      &nbsp;
                    </span>
                    {/* <DropdownMenu /> */}
                    {isDropdownVisible && <DropdownMenu />}
                  </div>
                </header>
              </div>
              <button className='relative group text-base text-black/60 font-semibold hover:text-black my-2 text-[14px]'>
                Contact
                <span className=' h-[2px] inline-block w-0 bg-red-600 absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-150' >
                  &nbsp;
                </span>

              </button>
              <div className='ml-5 md:ml-24' >
                <button className='bg-red-700 hover:bg-red-600 text-white px-6  py-2 rounded-full' >
                  Book a Table
                </button>
              </div>

            </div>
          </div>
      }


    </>

  )
}


export default Navbar;


