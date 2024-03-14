"use client";
import React from 'react'
import Link from 'next/link'
import { useState, useContext } from 'react';
import { YummyContext } from '@/contexts/YummyContext';
import { useRouter } from 'next/navigation';

const LoginPageContainer = () => {

    const { LoginApi, LoginApiResponse } = useContext(YummyContext)
    const router =  useRouter()

    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState(false);

    const handleNameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!username || !password) {
            setError(true)
        }
        else {
            LoginApi({
                "username": username,
                "password": password
            });
        }
    };

    return (
        <>
            <main className='w-full h-screen bg-black/80 grid place-items-center rounded-md'>
                <div className='h-[70%] w-full md:w-[70%] bg-slate-50  flex'>
                    <div className='h-full w-full md:w-1/3 text-black '>
                        <Link href={'/'}><p className='text-3xl font-bold p-5' >Yummy <span className=' text-red-700'>.</span></p></Link>
                        <p className='flex justify-center pt-3 font-semibold'> Welcome Back</p>
                        <p className='flex justify-center text-gray-700 text-[12px]'> login with your NAME and Password</p>
                        <div>
                            <form action="" className='py-10'>
                                <div className='flex flex-col justify-center px-5 py-2'>
                                    <label htmlFor="" className=''>Your Name</label>
                                    <input type="text" className='p-2 border-2' onChange={handleNameChange} required />
                                    {error && !username && (
                                        <p className='text-red-500 text-sm text-center'>Please fill username</p>
                                    )}
                                </div>


                                <div className='flex flex-col justify-center px-5 py-2'>
                                    <label htmlFor="">Password</label>
                                    <input type="password" className='p-2 border-2' onChange={handlePasswordChange} required />
                                    {error && !password && (
                                        <p className='text-red-500 text-sm text-center'>Please fill password</p>
                                    )}
                                </div>

                                <div className='px-5 flex items-center'>
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="" className='px-1'> Remember me </label>
                                </div>
                            </form>
                        </div>
                        <div className='flex justify-center'>
                            <button className='border-2 bg-red-700 text-white font-bold px-5 py-2  w-[30%]' onClick={handleSubmit}> Login</button>
                        </div>

                        {
                            LoginApiResponse && LoginApiResponse.detail && <>
                                <p className='text-red-500 text-sm text-center'>{LoginApiResponse.detail}</p>
                            </>
                        }

                        <p className='p-5 text-[15px] pt-10'> Do not have a account?   <span className='text-red-700'>
                            <Link href={'/sign-up'}>
                                sign up
                            </Link>
                        </span>
                        </p>
                    </div>
                    <div className='h-full w-2/3 bg-slate-600 hidden md:block'
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

export default LoginPageContainer