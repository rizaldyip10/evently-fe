"use client";
import React, { useState } from "react";
import InputField from "@/components/page/global/inputfield";
import { Form, Formik } from "formik";
import DatePicker from "@/components/pages/homepage/date-picker";
import plus from "@/assets/icons/plus-circle.svg";
import Image from "next/image";

const Page = () => {
  const [date, setDate] = useState<Date>();
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex flex-col justify-between items-start bg-primary-white border border-slate-400 p-5 mt-4 rounded-[12px] mx-8 hover:border-primary-default cursor-pointer ">
        <div className="w-full flex flex-row justify-between">
          <div className="w-full" onClick={handleToggle}>
            <h1 className="text-2xl font-semibold">Event Title</h1>
            <p className="text-gray-700">
              A short and sweet sentence about your event.
            </p>
          </div>
          <div onClick={handleToggle}>
            <Image src={plus} alt="icon-plus-event" width={32} height={32} />
          </div>
        </div>

        {isOpen && (
          <div className="w-full bg-primary-white border-slate-400 rounded-[12px] flex flex-col">
            <Formik
              initialValues={{ file: null, text: "" }}
              onSubmit={(values) => {
                console.log(values);
                // Handle form submission logic here
              }}
            >
              {({ setFieldValue }) => (
                <Form>
                  <div className="flex flex-col gap-4 mt-4">
                    <InputField
                      label="Event name"
                      name="event name"
                      type="text"
                      placeholder="Event name"
                    />

                    <textarea
                      className="border rounded-[4px] p-2 border-slate-400"
                      name="event description"
                      placeholder="Event description"
                    />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        )}
      </div>

      <div className="flex flex-col justify-between items-start bg-primary-white border border-slate-400 p-5 mt-4 rounded-[12px] mx-8 hover:border-primary-default cursor-pointer ">
        <div className="w-full flex flex-row justify-between">
          <div className="w-full" onClick={handleToggle}>
            <h1 className="text-2xl font-semibold">Date and Location</h1>
            <p className="text-gray-700">
              Select the date for your event and Specify the location
            </p>
          </div>
          <div onClick={handleToggle}>
            <Image src={plus} alt="icon-plus-event" width={32} height={32} />
          </div>
        </div>

        {isOpen && (
          <div className="w-full bg-primary-white border-slate-400 rounded-[12px] flex flex-col">
            <Formik
              initialValues={{ file: null, text: "" }}
              onSubmit={(values) => {
                console.log(values);
                // Handle form submission logic here
              }}
            >
              {({ setFieldValue }) => (
                <Form>
                  <div className="flex flex-col gap-4 mt-4">
                    <InputField
                      label="Event name"
                      name="event name"
                      type="text"
                      placeholder="Event name"
                    />

                    <textarea
                      className="border rounded-[4px] p-2 border-slate-400"
                      name="event description"
                      placeholder="Event description"
                    />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
