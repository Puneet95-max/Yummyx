"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SmallerGalleryPage = () => {
    const settings = {
        dots: true,
        infinite: true,
        // fade: true,
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
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true,
                },
            },
        ],
    };

    return (
        <div>
            <h2>Responsive Carousel</h2>
            <Slider {...settings}>
                <div className=''>
                    <img src="gallery/gallery_1.jpg" alt="Slide 1"  className='px-2'/>
                </div>
                <div>
                    <img src="gallery/gallery_2.jpg" alt="Slide 2" className='px-2' />
                </div>
                <div>
                    <img src="gallery/gallery_3.jpg" alt="Slide 3" className='px-2' />
                </div>
                {/* Add more slides as needed */}
            </Slider>
        </div>
    );
};

export default SmallerGalleryPage;
