"use client";
import React from 'react'
import { useState, useEffect } from 'react';
import BiggerGalleryPage from './BiggerGalleryPage';
import SmallerGalleryPage from './SmallerGalleryPage';

const GalleryPageContainer = () => {

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

  return (
    <>
      <div className='' id='gallery'>

        {
          isDesktop ? (<SmallerGalleryPage />) : (<BiggerGalleryPage />)
        }
      </div>
    </>
  );
};

export default GalleryPageContainer;