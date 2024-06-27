"use client"
import React from 'react'
import Image from "next/image";
import logo from "@/assets/image/logo.svg";
import * as Yup from "yup";
import { Button } from '@/components/ui/button';
import loginasset from "@/assets/image/login-assets.svg";
import singupassetweb from "@/assets/image/signup-assets-web.svg";
import { Form, Formik } from "formik";
import InputField from '@/components/pages/global/inputfield';

const RegisterPage = () => {

  const initialValue  = {
    name: "",
    email:"",
    password: ""
  };

  const registerSchema = Yup.object().shape({
    name: Yup.string().min(3, "Please enter your name, min 3 characters").required("Your name is required"),
    email: Yup.string().email("Please enter your valid email").required("Email is required"),
    password: Yup.string().min(6, "Enter your password").required("Password is required")
  });

  interface ValuesItems{
    name: string,
    email: string,
    password: string
  };

  const onRegister = (value: ValuesItems) => {
    console.log(value)
  };



  return (
    <div className="min-h-screen lg:h-screen items-center justify-center bg-primary-white  grid-cols-2 my-5 md:flex flex-row">
      
      <div className="bg-purple-50 p-6 w-full lg:px-32 lg:w-[1000px] lg:h-full h-full">
        <div className="w-full h-full lg:flex lg:flex-col lg:justify-center">
          <div className=" flex flex-col gap-4 mb-8 md:w[-360px] lg:px-5">
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

          <Formik
            validationSchema={registerSchema}
            initialValues={initialValue}
            onSubmit={(values, action) => {
              onRegister(values);
              action.resetForm();
            }}
          >
            {() => (
              <Form className="flex flex-col gap-4 my-4 pb-4 w-full lg:px-5">
                <InputField
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="purwawidodo"
                />
                <InputField
                  label="Email"
                  name="email"
                  type="text"
                  placeholder="purwa@widodo.com"
                />
                <InputField
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Input your password"
                />
                <Button
                  className="bg-primary-default hover:bg-primary-light w-full lg:w-full text-primary-white py-4 rounded-[4px]"
                  type="submit"
                >
                  Signup
                </Button>

                <p className="text-slate-400 text-sm">Already have an account? <button className="text-primary-default font-medium">Login</button></p>
              </Form>
            )}
          </Formik>

        </div>
          
      </div>
      <div className="md:hidden">
        <Image src={loginasset} width={1000} height={1000} alt="signup-image" />
      </div>
      <div className="md:w-full hidden md:block h-screen">
        <Image
          className="w-full h-full object-cover"
          src={singupassetweb}
          alt="Signup-image"
        />
      </div>
    </div>
  )
}

export default RegisterPage
