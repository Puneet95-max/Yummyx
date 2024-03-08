"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion'

const SmallerGalleryPage = () => {
    const settings = {
        autoplplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: true, // Show arrows in mobile view
                    centerMode: true,
                    centerPadding: '50px', // Add margin in x-axis
                    autoplplay: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true,
                    autoplplay: true,
                },
            },
        ],
    };

    return (
        <main className='bg-[#EEEEEE] pb-10'>
            <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1,
                    ease: 'easeInOut',
                }}
                viewport={{ once: true }}
            >
                <div>
                    <div className='py-14 flex flex-col items-center justify-center '>
                        <p className='text-gray-500'>Gallery</p>
                        <p className='text-2xl '>CHECK OUR  <span className='text-red-700'> GALLERY</span></p>
                    </div>

                </div >
                <Slider {...settings} className='py-5'>
                    <div className=''>
                        <img src="gallery/gallery_1.jpg" alt="Slide 1" className='px-2' />
                    </div>
                    <div>
                        <img src="gallery/gallery_2.jpg" alt="Slide 2" className='px-2' />
                    </div>
                    <div>
                        <img src="gallery/gallery_3.jpg" alt="Slide 3" className='px-2' />
                    </div>
                    <div>
                        <img src="gallery/gallery_4.jpg" alt="Slide 3" className='px-2' />
                    </div>
                    <div>
                        <img src="gallery/gallery_5.jpg" alt="Slide 3" className='px-2' />
                    </div>
                   
                </Slider>
            </motion.div>
        </main >
    );
};

export default SmallerGalleryPage;
