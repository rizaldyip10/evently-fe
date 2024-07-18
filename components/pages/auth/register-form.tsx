"use client"

import React from 'react'
import * as Yup from "yup";
import { Form, Formik, FormikValues } from "formik";
import RegisterDialog from '@/components/page/global/RegisterDialog';
import InputField from '@/components/pages/global/inputfield';
import Link from 'next/link';
import toast from 'react-hot-toast';
import axios from '@/utils/axios';
import { whiteSpaceRegex } from '@/lib/whitespace-regex';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
    const router = useRouter()
    const initialValue = {
        name: "",
        email: "",
        password: "",
        role: ""
      };
    
      const registerSchema = Yup.object().shape({
        name: Yup.string().min(3, "Please enter your name, min 3 characters").required("Your name is required"),
        email: Yup.string().email("Please enter your valid email").required("Email is required"),
        password: Yup.string().min(6, "Enter your password").required("Password is required"),
        role: Yup.string().required("Please select your role"),
        referralCode: Yup.string().min(3, "Please enter a valid referral code").matches(whiteSpaceRegex, "You cannot enter whitespace only in this field")
      });
    
      const onRegister = async (value: FormikValues) => {
        try {
            await axios.post("/auth/register", value)
            toast.success("Register success! Please login to your account")
            router.push("/login")
        } catch (error) {
            console.error(error);
            toast.error("Oops... something went wrong")
        }
      };

    return (
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
                    <InputField
                        label="Referral Code"
                        name="referralCode"
                        type="text"
                        placeholder="Enter referral code if you have one"
                    />
                    <RegisterDialog />
                    <div className='flex items-center gap-1'>
                        <p className="text-slate-400 text-sm">Already have an account?</p>
                        <Link href="/login" className="text-primary-default font-medium">
                            Login
                        </Link>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default RegisterForm