'use client'
import React from 'react'
import Link from 'next/link'
import { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { YummyContext } from '@/contexts/YummyContext';

const Navbar = () => {

  const { showProfile } = useContext(YummyContext)

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

          <div className='h-[4rem] p-5 shadow-2xl w-[100vw] bg-white flex flex-row fixed top-0 left-0  items-center justify-between lg:px-[8rem] sm:px-[4rem] overflow-hidden z-30 '>

            <div className=" text-2xl font-bold mr-8  ">
              <h2>
                Yummy<span className='text-red-600' >.</span>
              </h2>
            </div>
            <div>
              <Link href={'login'}>
                {
                  showProfile ? (<Link href={'/profile'}>
                    <button className='bg-red-700 hover:bg-red-600 text-white px-6 font-bold  py-2 rounded-full' >
                      Profile
                    </button>
                  </Link>) : (<Link href={'/sign-up'}>
                    <button className='bg-red-700 hover:bg-red-600 text-white px-6 font-bold  py-2 rounded-full' >
                      login/sign up
                    </button>
                  </Link>)
                }
              </Link>
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
                  className='min-w-[100vw]  flex flex-col h-[100vh] justify-between  fixed top-[8.5%]  
          bg-white/80 rounded-lg backdrop-blur-md py-0 shadow-lg' >
                  <nav className='py-8 px-6 lg:text-center sm:text-left z-10 w-[100%] mx-auto flex-col justify-center '>
                    <div className='my-8' >
                      <ScrollLink to="home" smooth={true} duration={500} offset={-70} onClick={() => { setIsOpen(false) }}
                        className="text-black/90  text-xl"  >
                        Home
                      </ScrollLink>
                    </div>
                    <div className='my-8' >
                      <ScrollLink to="about" smooth={true} duration={500} offset={-70} onClick={() => { setIsOpen(false) }}
                        className="text-black/90  text-xl"  >
                        About
                      </ScrollLink>
                    </div>
                    <div className='my-8' >
                      <ScrollLink to="menu" smooth={true} duration={500} offset={-70} onClick={() => { setIsOpen(false) }}
                        className="text-black/90  text-xl"  >
                        Menu
                      </ScrollLink>
                    </div>
                    <ScrollLink to="event" smooth={true} duration={500} offset={-70} onClick={() => { setIsOpen(false) }}
                      className="text-black/90  text-xl"  >
                      Events
                    </ScrollLink>
                  </nav>
                </motion.div>

                : null
            }

          </div>
          :
          //large Navbar
          <div className=' w-full  h-[5rem]  flex justify-evenly items-center  bg-white  fixed top-0 left-0  z-30
      '>
            <div className=" text-3xl font-bold mr-8  w-[18rem] lg:w-[8rem]  ">
              <h2>
                Yummy<span className='text-red-600' >.</span>
              </h2>
            </div>
            <div className='flex'>

              <button className='relative group text-base text-black/60 font-semibold hover:text-black mx-3 my-2 text-[14px]'>
                <ScrollLink to="home" smooth={true} duration={500} offset={-70}>
                  Home
                </ScrollLink>
                <span className=' h-[2px] inline-block w-0 bg-red-600 absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-150' >
                  &nbsp;
                </span>
              </button>

              <button className='relative group text-base text-black/60 font-semibold hover:text-black mx-3 my-2 text-[14px]'>
                <ScrollLink to="about" smooth={true} duration={500} offset={-70}>
                  About
                </ScrollLink>
                <span className=' h-[2px] inline-block w-0 bg-red-600 absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-150' >
                  &nbsp;
                </span>

              </button>
              <button className='relative group text-base text-black/60 font-semibold hover:text-black mx-3 my-2 text-[14px]'>
                <ScrollLink to="menu" smooth={true} duration={500} offset={-70}>
                  Menu
                </ScrollLink>
                <span className=' h-[2px] inline-block w-0 bg-red-600 absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-150' >
                  &nbsp;
                </span>

              </button>
              <button className='relative group text-base text-black/60 font-semibold hover:text-black mx-3 my-2 text-[14px]'>
                <ScrollLink to="event" smooth={true} duration={500} offset={-70}>
                  Events
                </ScrollLink>
                <span className=' h-[2px] inline-block w-0 bg-red-600 absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-150' >
                  &nbsp;
                </span>

              </button>
              <button className='relative group text-base text-black/60 font-semibold hover:text-black mx-3 my-2 text-[14px]'>
                <ScrollLink to="chefs" smooth={true} duration={500} offset={-70}>
                  Chefs
                </ScrollLink>
                <span className=' h-[2px] inline-block w-0 bg-red-600 absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-150' >
                  &nbsp;
                </span>

              </button>
              <button className='relative group text-base text-black/60 font-semibold hover:text-black mx-3 my-2 text-[14px]'>
                <ScrollLink to="gallery" smooth={true} duration={500} offset={-70}>
                  Gallery
                </ScrollLink>
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
                    <button className=' group text-base text-black/60 font-semibold hover:text-black mx-3 my-2 text-[14px] flex items-center'  >
                      Drop down <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg>
                      </span>
                    </button>
                    <span className=' h-[2px] inline-block w-0 bg-red-600 absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-150' >
                      &nbsp;
                    </span>
                    {/* <DropdownMenu /> */}
                    {isDropdownVisible && <DropdownMenu />}
                  </div>
                </header>
              </div>
              <button className='relative group text-base text-black/60 font-semibold hover:text-black my-2 text-[14px]'>
                <ScrollLink to="contact" smooth={true} duration={500} offset={-70}>
                  Contact
                </ScrollLink>
                <span className=' h-[2px] inline-block w-0 bg-red-600 absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-150' >
                  &nbsp;
                </span>

              </button>
            </div>
            <div className='ml-5 md:ml-24' >
              {
                showProfile ? (<Link href={'/profile'}>
                  <button className='bg-red-700 hover:bg-red-600 text-white px-6 font-bold  py-2 rounded-full' >
                    Profile
                  </button>
                </Link>) : (<Link href={'/sign-up'}>
                  <button className='bg-red-700 hover:bg-red-600 text-white px-6 font-bold  py-2 rounded-full' >
                    login/sign up
                  </button>
                </Link>)
              }
            </div>

          </div>
      }


    </>

  )
}


export default Navbar;


