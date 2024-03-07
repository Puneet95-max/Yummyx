"use client";
import React from 'react'
import { useState, useEffect } from 'react';
import BiggerGalleryPage from './BiggerGalleryPage';
import SmallerGalleryPage from './SmallerGalleryPage';

const Gallery = () => {

    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsDesktop(window.innerWidth > 600);
      };
  
      // Initial check on mount
      handleResize();
  
      // Add event listener for window resize
      window.addEventListener('resize', handleResize);
  
      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
        <>
            {isDesktop ? (
                <BiggerGalleryPage />
            ) : (
                <SmallerGalleryPage />
            )}
        </>
    );
}; s

export default Gallery;