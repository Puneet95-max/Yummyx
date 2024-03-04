import Image from 'next/image'
import React from 'react'


const ImageGrid = ({items}) => {
  return (
    <>
    <div className='grid lg:grid-cols-3 justify-center  gap-6 xl:mx-[15rem] sm:flex-col md:grid-cols-2 px-[2rem] ' >
        {items.map((item,index)=>(
            <div key={index}className='bg-black/10  rounded-[2rem] lg:py-[3rem]  p-5 px-[6rem] sm:p-3 sm:px-5 hover:scale-[1.05] transform transiton-transform duration-200 ease-in-out  '  >
                <Image  src={item.img} width={200} height={200} className=' rounded-lg  w-[250px] h-[250px] mx-auto ' />
                <div className='flex-col' >
                <h2 className='flex justify-center lg:text-2xl sm:text-base font-bold text-black/70 my-4 ' >{item.name}</h2>
                <p className=' flex justify-center lg:text-base text-gray-500  sm:text-sm font-semibold' >{item.Desc}</p>
                <h3 className='text-red-500 font-bold lg:text-4xl sm:text-base flex justify-center my-3' >{item.price}</h3>
                </div>
            </div>
            
        ))}
    </div>
    
    </>
  )
}

export default ImageGrid