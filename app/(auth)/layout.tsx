import Image from 'next/image'
import React from 'react'
import loginasset from "@/assets/image/login-assets.svg";
import singupassetweb from "@/assets/image/signup-assets-web.svg";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen lg:h-screen items-center justify-center bg-primary-white  grid-cols-2 p-5 md:flex flex-row">
            <div className="bg-purple-50 p-6 w-full lg:px-32 lg:w-[1000px] lg:h-full h-full">
                { children }
            </div>
            <div className="md:hidden">
                <Image src={loginasset} width={1000} height={1000} alt="signup-image" />
            </div>
            <div className="md:w-full hidden md:block h-screen py-5">
                <Image
                    className="w-full h-full object-cover"
                    src={singupassetweb}
                    alt="Signup-image"
                />
            </div>
        </div>
    )
}

export default AuthLayout