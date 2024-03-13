"use client";
import Link from 'next/link'
import React from 'react'
import { useState } from 'react';

const SignUpPageContainer = () => {

    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleNameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordchange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await fetch('http://127.0.0.1:8000/sigin/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: username,
              password: password,
            }),
          });
    
          if (!response.ok) {
            throw new Error('Invalid username or password');
          }
    
          const responseData = await response.json();
          // Assuming the response contains a token and other data
          const { token, otherData } = responseData;
          
          // Do something with the token and other data, such as storing it in local storage or context
          console.log('Token:', token);
          console.log('Other Data:', otherData);
    
          // Clear form fields
          setUsername('');
          setPassword('');
          setError('');
        } catch (error) {
          setError(error.message);
          console.error('Error:', error);
        }
      };


    return (
        <>
            <main className='w-full h-screen bg-black/80 grid place-items-center rounded-md'>
                <div className='h-[70%] w-full md:w-[70%] bg-slate-50  flex'>
                    <div className='h-full w-1/3 text-black '>
                        <p className='text-3xl font-bold p-5' >Yummy <span className=' text-red-700'>.</span></p>
                        <p className='flex justify-center pt-3 font-semibold'> Welcome </p>
                        <p className='flex justify-center text-gray-700 text-[12px]'> Sign up with  Ussername and Password</p>
                        <div>
                            <form action="" className='py-10'>
                                <div className='flex flex-col justify-center px-5 py-2'>
                                    <label htmlFor="" className=''>Your Name</label>
                                    <input type="text" className='p-2 border-2' onChange={handleNameChange} placeholder='Your Name' />
                                </div>

                                <div className='flex flex-col justify-center px-5 py-2'>
                                    <label htmlFor="">Password</label>
                                    <input type="password" className='p-2 border-2' onChange={handlePasswordchange} placeholder='Password' />
                                </div>

                                <div className='px-5 flex items-center'>
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="" className='px-1'> Remember me </label>
                                </div>
                            </form>
                        </div>
                        <div className='flex justify-center'>
                            <button className='border-2 bg-red-700 text-white font-bold px-5 py-2  w-[30%]' onClick={handleSubmit}> sign up</button>
                        </div>
                        <p className='p-5 text-[15px] pt-10'> You have a account?  <span className='text-red-700'>
                            <Link href={'/login'} >
                                login
                            </Link>
                        </span></p>
                    </div>
                    <div className='h-full w-2/3 bg-slate-600'
                        style={{
                            backgroundImage: 'url("/about_images/about-2.jpg")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                    </div>
                </div>
            </main>
        </>
    )
}

export default SignUpPageContainer






