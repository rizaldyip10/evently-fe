"use client"

import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

interface AuthBtnProps {
    containerStyle: string
}

const AuthBtn: React.FC<AuthBtnProps> = ({ containerStyle }) => {
    const router = useRouter()
  return (
    <div className={containerStyle}>
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