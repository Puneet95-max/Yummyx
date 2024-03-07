"use client";
import React, { useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
    NextButton,
    PrevButton,
    usePrevNextButtons
} from './sections/EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './sections/EmblaCarouselDotButtons'
import { motion } from 'framer-motion'

const TWEEN_FACTOR_BASE = 0.84

const numberWithinRange = (number, min, max) =>
    Math.min(Math.max(number, min), max)

const BiggerGalleryPage = () => {
    const { options } = { loop: true }
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    const tweenFactor = useRef(0)

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)


    const slides = [


        { 'src': '/gallery/gallery_1.jpg' },
        { 'src': '/gallery/gallery_3.jpg' },
        { 'src': '/gallery/gallery_2.jpg' },
        { 'src': '/gallery/gallery_4.jpg' },

        { 'src': '/gallery/gallery_5.jpg' },
        { 'src': '/gallery/gallery_6.jpg' },
        { 'src': '/gallery/gallery_7.jpg' },
        { 'src': '/gallery/gallery_8.jpg' },



    ];

    const setTweenFactor = useCallback((emblaApi) => {
        tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
    }, [])

    const tweenOpacity = useCallback((emblaApi, eventName) => {
        const engine = emblaApi.internalEngine()
        const scrollProgress = emblaApi.scrollProgress()
        const slidesInView = emblaApi.slidesInView()
        const isScrollEvent = eventName === 'scroll'

        emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
            let diffToTarget = scrollSnap - scrollProgress
            const slidesInSnap = engine.slideRegistry[snapIndex]

            slidesInSnap.forEach((slideIndex) => {
                if (isScrollEvent && !slidesInView.includes(slideIndex)) return

                if (engine.options.loop) {
                    engine.slideLooper.loopPoints.forEach((loopItem) => {
                        const target = loopItem.target()

                        if (slideIndex === loopItem.index && target !== 0) {
                            const sign = Math.sign(target)

                            if (sign === -1) {
                                diffToTarget = scrollSnap - (1 + scrollProgress)
                            }
                            if (sign === 1) {
                                diffToTarget = scrollSnap + (1 - scrollProgress)
                            }
                        }
                    })
                }

                const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
                const opacity = numberWithinRange(tweenValue, 0, 1).toString()
                emblaApi.slideNodes()[slideIndex].style.opacity = opacity
            })
        })
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        setTweenFactor(emblaApi)
        tweenOpacity(emblaApi)
        emblaApi
            .on('reInit', setTweenFactor)
            .on('reInit', tweenOpacity)
            .on('scroll', tweenOpacity)
    }, [emblaApi, tweenOpacity])

    return (
        <main className=' bg-[#EEEEEE]'>

            <div>
                <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        ease: 'easeInOut',
                    }}
                    viewport={{ once: true }}
                >
                    <div className='py-14 flex flex-col items-center justify-center '>
                        <p className='text-gray-500'>Gallery</p>
                        <p className='text-2xl '>CHECK OUR  <span className='text-red-700'> GALLERY</span></p>
                    </div>
                </motion.div>
            </div>

            <div className="embla">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {slides.map((slide, index) => (
                            <div className="embla__slide" key={index}>
                                <img
                                    className="embla__slide__img"
                                    src={slide.src}
                                    alt={`Slide ${index + 1}`} // Adding alt text with a dynamic index
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="embla__controls mx-11 pb-16 ">
                    <div className="embla__buttons">
                        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                    </div>

                    <div className="embla__dots">
                        {scrollSnaps.map((_, index) => (
                            <DotButton
                                key={index}
                                onClick={() => onDotButtonClick(index)}
                                className={`embla__dot ${index === selectedIndex ? 'embla__dot--selected ' : ''} `}
                                style={{ margin: '3px' }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )

}

export default BiggerGalleryPage;
