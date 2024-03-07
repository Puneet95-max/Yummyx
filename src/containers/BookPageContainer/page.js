import React from 'react'

const BookPageContainer = () => {
    return (
        <>
            <main className='bg-[#EEEEEE] flex flex-col my-10 mx-5  md:mx-20 rounded-md md:flex-row'>
                <section>
                    <div>
                        <img src="/book_table.jpg" className='w-[400px] h-[450px] md:h-[550px]' alt="" />
                    </div>
                </section>

                <section>
                    <div className=' px-5'>
                        <form action="">
                            <section className='md:flex md:mt-10 md:p-5'>
                                <div className='flex justify-center md:mx-2   '>
                                    <input type="text" placeholder='Your Name' className=' w-full    border  border-gray-400  md:p-3  p-2 my-2 mt-5  md:mt-2  ' />
                                </div>

                                <div className='flex justify-center md:mx-2' >
                                    <input type="email" placeholder='Your Email' className='w-full border  border-gray-400  p-2 my-2' />
                                </div>

                                <div className='flex justify-center md:mx-2'>
                                    <input type="number" placeholder='Phone Number' className=' w-full border  border-gray-400  p-2 my-2' />
                                </div>
                            </section>

                            <section className='md:flex md:px-5'>
                                <div className='flex justify-center md:mx-2'>
                                    <input type="text" placeholder='Date' className='w-full border  border-gray-400  md:p-3  p-2 my-2' />
                                </div>

                                <div className='flex justify-center md:mx-2'>
                                    <input type="text" placeholder='Time' className=' w-full border  border-gray-400  p-2 my-2' />
                                </div>

                                <div className='flex justify-center md:mx-2'>
                                    <input type="text" placeholder='# of People' className=' w-full border  border-gray-400  p-2 my-2' />
                                </div>
                            </section>

                            <div className='flex justify-center md:p-5'>
                                <textarea className='w-full my-2 h-[130px] md:mx-2 md:p-3 md:h-[200px] border  border-gray-400  p-2' placeholder='Message'></textarea>
                            </div>
                        </form>
                    </div>
                    <div className='flex justify-center'>
                        <button className='flex justify-center mx-12 my-5  md:px-8  md:py-3 md:text-xl    rounded-3xl bg-red-700  text-white px-4 py-2'>
                            Book a Table
                        </button>
                    </div>
                </section>
            </main>
        </>
    )


}

export default BookPageContainer;