"use client"

import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

const AuthBtn: React.FC = () => {
    const router = useRouter()
  return (
    <div className='flex items-center justify-between gap-8'>
        <Button variant="outline" className="bg-white border-primary-default text-primary-default text-sm rounded-[4px] w-[70px] hover:bg-primary-default hover:text-lightest" onClick={() => router.push("/login")}>
            Log In
        </Button>
        <Button className='bg-primary-default text-lightest text-sm rounded-[4px] w-[70px] font-normal hover:bg-primary-lightest hover:text-primary-default' onClick={() => router.push("/register")}>
            Sign Up
        </Button>
    </div>
  )
}

export default AuthBtn