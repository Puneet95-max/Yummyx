"use client";
import React from 'react'
import { useContext } from 'react'
import { YummyContext } from '@/contexts/YummyContext';

function ProfilePageContainer() {

  const { userData } = useContext(YummyContext)
  return (
    <>
      <div className='text-3xl  flex justify-center pt-20'>    Hi &nbsp;
        {
          userData && userData.username
        }
      </div>

    </>
  )
}

export default ProfilePageContainer