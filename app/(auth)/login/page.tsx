"use client";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import InputField from "@/components/page/global/inputfield";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import loginasset from "@/assets/image/login-assets.svg";
import singupassetweb from "@/assets/image/signup-assets-web.svg";
import logo from "@/assets/image/logo.svg";

const EventHiveSignup = () => {
  const signupSchema = Yup.object().shape({
    email: Yup.string().email("Email is invaild").required("Email is required"),
    password: Yup.string()
      .min(6, "Min. 6 characters password")
      .required("Please enter your password"),
  });

  const initialValue = {
    email: "",
    password: "",
  };

  interface ValueItems {

    email: string;
    password: string;
  }

  const onLogin = async (value: ValueItems) => {
    console.log(value);
  };

  return (
    <div className="min-h-screen lg:h-screen items-center justify-center bg-primary-white  grid-cols-2 my-5 md:flex flex-row">
      
      <div className="bg-purple-50 p-6 w-full lg:px-32 lg:w-[1000px] lg:h-full">
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
            validationSchema={signupSchema}
            initialValues={initialValue}
            onSubmit={(values, action) => {
              onLogin(values);
              action.resetForm();
            }}
          >
            {() => (
              <Form className="flex flex-col gap-4 my-4 pb-4 w-full lg:px-5">
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

                <p className="text-slate-400 text-sm">Don't have an account? <button className="text-primary-default font-medium">Register</button></p>
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
  );
};

export default EventHiveSignup;
