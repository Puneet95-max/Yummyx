import { useInView, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { motion } from 'framer-motion'
import Image from "next/image";
import icon1 from "/public/about_images/notebook.png";
import icon2 from "/public/about_images/diamond .png";
import icon3 from "/public/about_images/site-alt.png";


const Stats = () => {
  const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
      if (isInView) {
        motionValue.set(value);
      }
    }, [isInView, value, motionValue]);

    useEffect(() => {
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      });
    }, [springValue, value]);

    return <span ref={ref}></span>;
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='w-full h-full '
      >
        <div className="  md:flex md:flex-col lg:flex-col sm:flex sm:flex-col  bg-black/10 justify-center py-[5rem] w-[100vw] lg:h-auto xl:h-[35rem] xl:flex-row  xl:px-[10rem]  overflow-x-hidden   "
          style={{ overflowX: 'hidden' }}
        >
          <div className="bg-red-600 text-white py-10 px-8 lg:max-w-[25rem] sm:w-full md:w-[30rem]  lg:mx-auto md:mx-auto  mx-4   ">
            <h2 className="text-3xl  pb-6 font-bold">Why Choose Yummy?</h2>
            <p className="  text-justify ">
              What sets Yummy apart is not just the delectable menu, but the dedication to creating a welcoming atmosphere that resonates with warmth and elegance. From the moment you step through our doors, you are greeted by a symphony of flavors and a visually stunning setting that transforms dining into an art form.
            </p>
            <div
              className=" mx-auto
                    my-5 max-w-[8rem] border bg-red-500 shadow hover:shadow-2xl hover:cursor-pointer hover:bg-white text-[12px] font-bold hover:text-red-600 px-4 text-white rounded-3xl py-2 transition-[background] ease-out duration-500 "
            >
              <span className=" text-center block">Learn More</span>
            </div>
          </div>

          {/* <section className="md:flex"> */}

            <div className="  md:mx-auto  mx-4   my-8 xl:w-[20rem] lg:max-w-[16rem] md:w-[20rem]  lg:mx-auto text-center sm:mx-5 bg-white px-6 py-8 h transition-all ease-out duration-200">
              <div className="w-[4rem] mb-4 h-[4rem] flex items-center px-4 rounded-full  mx-auto bg-red-500   ">
                <Image src={icon1} />
              </div>
              <h2 className="text-xl py-6 font-bold ">
                Impeccable Service
              </h2>
              <p className="text-black/70">
                At Yummy, we understand that exceptional service is the cornerstone of a remarkable dining experience.
              </p>
            </div>

            <div className="  md:mx-auto  mx-4   my-8 xl:w-[20rem] lg:max-w-[16rem] md:w-[20rem]  lg:mx-auto text-center sm:mx-5 bg-white px-6 py-8  transition-all ease-out duration-200">
              <div className="w-[4rem] mb-4 h-[4rem] flex items-center px-4 rounded-full  mx-auto bg-red-500   ">
                <Image src={icon2} />
              </div>
              <h2 className="text-xl  py-6  font-bold">
                Ambiance
              </h2>
              <p className="text-black/70">
                Yummy isn't just a hotel; it's an immersive experience. Step into an ambiance that seamlessly atmosphere.
              </p>
            </div>

            <div className="  md:mx-auto  mx-4   my-8 xl:w-[20rem] lg:max-w-[16rem] md:w-[20rem]  lg:mx-auto text-center sm:mx-5 bg-white px-6 py-8  transition-all ease-out duration-200">
              <div className="w-[4rem] mb-4 h-[4rem] flex items-center  rounded-full  mx-auto p-4 bg-red-500 ">
                <Image src={icon3} />
              </div>
              <h2 className="text-xl py-6 font-bold">

                Culinary Excellence
              </h2>
              <p className="text-black/70">
                At Yummy, we pride ourselves on delivering a culinary experience that transcends expectations.

              </p>
            </div>

          {/* </section> */}

        </div>
      </motion.div>
      <div className="bg-stats bg-fixed bg-cover flex  h-[60vh] w-full overflow-hidden ">
        <div className="bg-black/50 h-full w-full xl:flex-row md:flex sm:flex-col  justify-evenly  items-center  ">
          <div className="flex justify-center my-10 mt-[4rem] xl:mt-0 " >
            <span className="block w-full   text-center   text-white lg:text-6xl font-bold md:text-4xl sm:text-xl xs:xl ">
              <p className="text-3xl md:text-5xl">
                <AnimatedNumbers value={232} />
              </p>
              <p className="text-base text-white/70 flex justify-center ">Client</p>{" "}
            </span>
          </div>
          <div className="flex justify-center my-10 xl:mt-0" >
            <span className="block w-full   text-center   text-white lg:text-6xl font-bold md:text-4xl sm:text-xl xs:xl ">
              <p className="text-3xl md:text-5xl">
                <AnimatedNumbers value={521} />
              </p>
              <p className="text-base text-white/70 flex justify-center">Projects</p>{" "}
            </span>
          </div>
          <div className="flex justify-center my-10 xl:mt-0" >
            <span className="block w-full   text-center   text-white lg:text-6xl font-bold md:text-4xl sm:text-xl xs:xl ">
              <p className="text-3xl md:text-5xl">
                <AnimatedNumbers value={1453} />
              </p>
              <p className="text-base  text-white/70 flex justify-center">Hours of Support</p>{" "}
            </span>
          </div>
          <div className="flex justify-center my-10  xl:mt-0" >
            <span className="block w-full   text-center   text-white lg:text-6xl font-bold md:text-4xl sm:text-xl xs:xl ">
              <p className="text-3xl md:text-5xl ">
                <AnimatedNumbers value={32} />
              </p>
              <p className="text-base text-white/70 flex justify-center">Workers</p>{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
