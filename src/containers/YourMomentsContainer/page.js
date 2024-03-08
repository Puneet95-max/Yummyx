"use client";
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion'

const YourMomentsContainer = () => {
    const settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Default to 3 slide
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 768, // Change the breakpoint value as needed
                settings: {
                    slidesToShow: 1, // Show 3 slides on larger screens
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="slider-container overflow-x-hidden py-10 " id='event'>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 1,
                    ease: 'easeInOut',
                }}
                viewport={{ once: true, }}
            >

                <div className='py-14 flex flex-col items-center justify-center px-5 text-center '>
                    <p className='text-gray-500 py-1'  >EVENTS</p>
                    <p className='text-2xl '>SHARE <span className='text-red-700'> YOUR MOMENTS &nbsp;</span>ON OUR RESTAURANT<span></span></p>
                </div>



                <Slider {...settings}>
                    <div className='h-[550px]  relative'>
                        <img src="/events/events_1.jpg" alt="" className=' p-2 h-full ' />
                        <div className='absolute top-2 right-2 left-2 bottom-2 bg-black/60 flex flex-col justify-end text-white p-5'>
                            <div className='font-bold text-3xl py-3'>Custom Parties</div>
                            <div className='font-bold text-2xl my-2  border-b-2 border-b-red-700 w-[40%] md:w-[30%]'>Rs 7999/- </div>
                            <div>
                                Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum voluptas eos omnis facere. Enim facilis veritatis id est rem repudiandae nulla expedita quas.
                            </div>
                        </div>
                    </div>



                    <div className='h-[550px]  relative'>
                        <img src="/events/events_2.jpg" alt="" className=' p-2 h-full ' />
                        <div className='absolute top-2 right-2 left-2 bottom-2 bg-black/60 flex flex-col justify-end text-white p-5'>
                            <div className='font-bold text-3xl py-3'>Private Parties</div>
                            <div className='font-bold text-2xl my-2  border-b-2 border-b-red-700 w-[40%] md:w-[35%]'>Rs 14999/-</div>

                            <div>
                                In delectus sint qui et enim. Et ab repudiandae inventore quaerat doloribus. Facere nemo vero est ut dolores ea assumenda et. Delectus saepe accusamus aspernatur.
                            </div>
                        </div>
                    </div>

                    <div className='h-[550px]  relative'>
                        <img src="/events/events_3.jpg" alt="" className=' p-2 h-full ' />
                        <div className='absolute top-2 right-2 left-2 bottom-2 bg-black/60 flex flex-col justify-end text-white p-5'>
                            <div className='font-bold text-3xl py-3'>Birthday Parties</div>
                            <div className='font-bold text-2xl my-2  border-b-2 border-b-red-700 w-[45%] md:w-[35%]'>Rs 29999/-</div>
                            <div>

                                Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.

                            </div>
                        </div>
                    </div>
                </Slider>
            </motion.div>
        </div>
    );
}

export default YourMomentsContainer;
