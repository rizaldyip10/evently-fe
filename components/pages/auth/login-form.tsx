"use client";

import { Form, Formik, FormikValues } from "formik";
import { Button } from "@/components/ui/button";
import React from 'react';
import Link from "next/link";
import InputField from "@/components/pages/global/inputfield";
import * as Yup from "yup";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const LoginForm: React.FC = () => {
  const router = useRouter()
  const onLogin = async (value: FormikValues) => {
    try {
      await signIn("credentials", {
        username: value.email,
        password: value.password,
        redirect: false
      })
      toast.success("Login success!")
      router.push("/")
    } catch (error: any) {
      const errorMsg = error?.message || "Oops... Something went wrong"
      toast.error(errorMsg)
    }
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Min. 6 characters password")
      .required("Please enter your password"),
  });

  const initialValue = {
    email: "",
    password: "",
  };
  return (
    <Formik
      validationSchema={loginSchema}
      initialValues={initialValue}
      onSubmit={(value, action) => {
        onLogin(value)
        action.resetForm()
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
            Login
          </Button>
          <div className="flex items-center gap-1">
            <p className="text-slate-400 text-sm">Don&apos;t have an account?</p>
            <Link href="/register" className="text-primary-default font-medium">
              Register
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
