import React from 'react'
import Image from "next/image";
import logo from "@/assets/image/logo.svg";
import RegisterForm from '@/components/pages/auth/register-form';
import { getCookiesServer } from '@/utils/server-cookies';

const RegisterPage = () => {
  const token = getCookiesServer("sid")
  return (
    <div className="w-full h-full lg:flex lg:flex-col lg:justify-center">
      <div className=" flex flex-col gap-4 mb-8 md:w-[380px] lg:px-3">
        <div className="w-full flex  gap-2 justify-center">
          <Image src={logo} alt="logo-icon" width={100} height={100} />
        </div>
        <div className="flex flex-col">
          <p className="text-md text-dark text-center lg:text-xl lg:font-medium lg:text-center">
            Effortlessly explore a seamless event platform tailored to your
            needs
          </p>
        </div>
      </div>
      <div className='md:w-[380px]'>
        <RegisterForm />
      </div>
    </div>
  )
}

export default RegisterPage
