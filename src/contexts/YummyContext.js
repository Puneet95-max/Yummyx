"use client";
import { createContext, useState, useEffect } from "react";
import React from 'react'
import { useRouter } from "next/navigation";

export const YummyContext = createContext();

export default function YummyContextProvider(props) {

    const router = useRouter();

    const [userData, setUserData] = useState({});
    const [userToken, setUserToken] = useState('');
    const [showProfile, setShowProfile] = useState(false);
    const [error, setError] = useState('')
    const [LoginApiResponse, setLoginApiResponse] = useState({});
    const [SignUpApiResponse, setSignUpApiResponse] = useState()

    const LoginApi = async (data) => {

        try {
            const response = await fetch('http://127.0.0.1:8000/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const res = await response.json();
                setLoginApiResponse(res);
                throw new Error('Failed to log in');
            }

            const responseData = await response.json();
            setUserData(responseData.user);
            setUserToken(responseData.token);

            const { token } = responseData;
            localStorage.setItem('token', token);
            setShowProfile(true)
            router.push('/')
        } catch (error) {
            setError('Invalid username or password');
            console.error('Error:', error);
        }
    };


    const SignUpApi = async (data) => {

        try {
            const response = await fetch('http://127.0.0.1:8000/signup/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const res = await response.json();
                setSignUpApiResponse(res);
                throw new Error('Invalid username or password');
            }

            const responseData = await response.json();
            setUserData(responseData.user);
            setUserToken(responseData.token);

            const { token } = responseData;
            localStorage.setItem('token', token);
            setShowProfile(true)
            router.push('/')
        } catch (error) {
            setError(error.message);
            console.error('Error:', error);
        }
    };
  console.log(SignUpApiResponse)

    return (
        <YummyContext.Provider value={{
            LoginApi,
            LoginApiResponse,
            showProfile,
            SignUpApi,
            userData,
            SignUpApiResponse,
        }} >
            {props.children}
        </YummyContext.Provider>
    )
}

