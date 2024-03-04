'use client'
import { useState } from 'react'
import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
import Starters from '@/components/MenuComponent/Starters'
import Breakfast from '@/components/MenuComponent/Breakfast'
import Lunch from '@/components/MenuComponent/Lunch'
import Dinner from '@/components/MenuComponent/Dinner'
const Menupage = () => {
  const [selectedContent, setSelectedContent] = useState('Starters');

    const handleClick = (content) => {
        setSelectedContent(content);
    };
  return (
    <>
    <main className='w-full h-full my-10 overflow-hidden' >
      <div className='w-full flex justify-center items-center' >
        <button  onClick={()=>handleClick('Starters')} className='lg:text-2xl text-base  font-semibold mx-5 text-red-600 relative group' >Starters
        <span  className={`h-[2px] w-0 inline-block  bg-red-600 absolute left-0 -bottom-1 transition-[width]  ${selectedContent==='Starters'? 'w-full':'w-0'} `} >&nbsp;</span>
        </button>
        <button  onClick={()=>handleClick('Breakfast')} className='lg:text-2xl text-base  font-semibold mx-5 text-red-600 relative group ' >Breakfast
        <span className={`h-[2px] w-0 inline-block  bg-red-600 absolute left-0 -bottom-1 transition-[width]  ${selectedContent==='Breakfast'? 'w-full':'w-0'} `} >&nbsp;</span>
</button>
        <button  onClick={()=>handleClick('Lunch')} className='lg:text-2xl text-base  font-semibold mx-5 text-red-600 relative group ' >Lunch
        <span className={`h-[2px] w-0 inline-block  bg-red-600 absolute left-0 -bottom-1 transition-[width]  ${selectedContent==='Lunch'? 'w-full':'w-0'} `} >&nbsp;</span>
</button>
        <button  onClick={()=>handleClick('Dinner')} className='lg:text-2xl text-base  font-semibold mx-5 text-red-600 relative group ' >Dinner
        <span className={`h-[2px] w-0 inline-block  bg-red-600 absolute left-0 -bottom-1 transition-[width]  ${selectedContent==='Dinner'? 'w-full':'w-0'} `} >&nbsp;</span>
</button>
      </div>
      <div>
        <motion.div
          initial={{opacity:0,y:20}}
          animate={{opacity:1, y:0}}
          transition={{duration:0.5}}
          className='w-full h-full '
          key={selectedContent}
        >
          {selectedContent==='Starters'&& <Starters/>}
          {selectedContent==='Breakfast'&& <Breakfast/>}
          {selectedContent==='Lunch'&& <Lunch/>}
          {selectedContent==='Dinner'&& <Dinner/>}
        </motion.div>
      </div>
 
    </main>
    </>
  )
}

export default Menupage