"use client";
import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import DatePicker from "@/components/pages/homepage/date-picker";
import plus from "@/assets/icons/plus-circle.svg";
import Image from "next/image";
import InputField from "@/components/pages/global/inputfield";

import timeicon from "@/assets/icons/clock.svg";
import createbg from "@/assets/image/createeventbg.jpg";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Page = () => {
  const [date, setDate] = useState<Date>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");

  const handleStartTimeChange = (value: string) => {
    setStartTime(value);
  };

  const handleEndTimeChange = (value: string) => {
    setEndTime(value);
  };

  const times = [
    "00:00",
    "00:30",
    "01:00",
    "01:30",
    "02:00",
    "02:30",
    "03:00",
    "03:30",
    "04:00",
    "04:30",
    "05:00",
    "05:30",
    "06:00",
    "06:30",
    "07:00",
    "07:30",
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
    "23:00",
    "23:30",
  ];

  const audiance = ["+18 Audiance Only", "Everyone"];

  return (
    <div className="flex flex-col gap-4 px-10">
      <div className="flex flex-col justify-between items-start bg-primary-white border border-slate-400 p-5 mt-4 rounded-[12px] mx-8 hover:border-primary-default cursor-pointer">
        <div className="w-full h-full bg-primary-white border-slate-400 rounded-[12px] flex flex-col">
          <div className="">
            <Formik
              initialValues={{ file: null, text: "" }}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              <Form>
                <div className="flex flex-col gap-2 mt-4">
                  <label
                    htmlFor="fileupload"
                    className="relative w-full h-36 text-primary-white font-semibold"
                  >
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 rounded-[12px] bg-dark">
                      <h1 className="text-white text-center">
                        Upload event cover
                      </h1>
                    </div>
                    <Image
                      className="w-full h-36 object-cover rounded-[12px]"
                      src={createbg}
                      alt="background-img"
                      width={100}
                      height={100}
                    />
                    <InputField
                      hidden
                      id="fileupload"
                      label=""
                      name="event name"
                      type="file"
                      placeholder="Event name"
                    />
                  </label>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between items-start bg-primary-white border border-slate-400 p-5 mt-4 rounded-[12px] mx-8 hover:border-primary-default cursor-pointer">
        <div className="w-full flex flex-row justify-between">
          <div className="w-full">
            <h1 className="text-2xl font-semibold">Event Title</h1>
            <p className="text-gray-700">
              A short and sweet sentence about your event.
            </p>
          </div>
          <div>
            <Image src={plus} alt="icon-plus-event" width={32} height={32} />
          </div>
        </div>
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
                <div className="flex flex-col gap-2 mt-4">
                  <InputField
                    label=""
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
      </div>

      {/* Select event category */}


      <div className="flex flex-col justify-between items-start bg-primary-white border border-slate-400 p-5 mt-4 rounded-[12px] mx-8 hover:border-primary-default cursor-pointer">
        <div className="w-full flex flex-row justify-between">
          <div className="w-full">
            <h1 className="text-2xl font-semibold">Event Category</h1>
            <p className="text-gray-700">
              Choose event category for your event
            </p>
          </div>
          <div>
            <Image src={plus} alt="icon-plus-event" width={32} height={32} />
          </div>
        </div>
        <div className="w-full bg-primary-white border-slate-400 rounded-[8px] flex flex-col mt-2">
          <Select >
            <SelectTrigger className="w-full bg-primary-white border-slate-300 rounded-[4px] hover:border-primary-default">
              <SelectValue placeholder="Select category"/>
            </SelectTrigger>
            <SelectContent className="bg-primary-white rounded-[8px] shadow-md border-slate-300 w-full">
              <SelectGroup className="w-full">
                <SelectLabel>By Category</SelectLabel>
                <SelectItem value="music">Music</SelectItem>
                <SelectItem value="movies">Movies</SelectItem>
                <SelectItem value="arts">Arts</SelectItem>
                <SelectItem value="international">Internationals</SelectItem>
                <SelectItem value="conferences">Conferences</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          
        </div>
      </div>

      {/* create event location container */}

      <div className="flex flex-col justify-between items-start bg-primary-white border border-slate-400 p-5 mt-4 rounded-[12px] mx-8 hover:border-primary-default cursor-pointer">
        <div className="w-full flex flex-row justify-between">
          <div className="w-full">
            <h1 className="text-2xl font-semibold">Date and Location</h1>
            <p className="text-gray-700">
              Select the date for your event and specify the location.
            </p>
          </div>
          <div onClick={handleToggle}>
            <Image src={plus} alt="icon-plus-event" width={32} height={32} />
          </div>
        </div>
        <div className="w-full bg-primary-white border-slate-400 rounded-[12px] flex flex-col gap-2">
          <Formik
            initialValues={{ file: null, text: "" }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ setFieldValue }) => (
              <Form>
                <div className="flex flex-row gap-2 mt-4">
                  <div className="border w-full border-slate-400 rounded-[4px] hover:border-primary-default">
                    <DatePicker date={date} setDate={setDate} />
                  </div>
                  <div className="border w-full border-slate-400 rounded-[4px] hover:border-primary-default gap-2 px-4 flex flex-row">
                    <Image
                      src={timeicon}
                      alt="time-icon"
                      width={24}
                      height={24}
                    />
                    <Field
                      as="select"
                      value={startTime}
                      onChange={(e: any) =>
                        handleStartTimeChange(e.target.value)
                      }
                      className="w-full h-full"
                    >
                      <option value="">Select Start Time</option>
                      {times.map((timeOption, index) => (
                        <option key={index} value={timeOption}>
                          {timeOption}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <div className="border w-full border-slate-400 rounded-[4px] hover:border-primary-default gap-2 flex flex-row px-4">
                    <Image
                      src={timeicon}
                      alt="time-icon"
                      width={24}
                      height={24}
                    />
                    <Field
                      as="select"
                      value={endTime}
                      onChange={(e: any) => handleEndTimeChange(e.target.value)}
                      className="w-full h-full"
                    >
                      <option value="">Select End Time</option>
                      {times.map((timeOption, index) => (
                        <option key={index} value={timeOption}>
                          {timeOption}
                        </option>
                      ))}
                    </Field>
                  </div>
                </div>
                <InputField
                  label=""
                  name="Event location"
                  type="text"
                  placeholder="Location"
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>

      {/* Additional information */}

      <div className="flex flex-col justify-between items-start bg-primary-white border border-slate-400 p-5 mt-4 rounded-[12px] mx-8 hover:border-primary-default cursor-pointer">
        <div className="w-full flex flex-row justify-between">
          <div className="w-full">
            <h1 className="text-2xl font-semibold">Additional Informations</h1>
            <p className="text-gray-700">
              Please add audiance information and the attention information{" "}
            </p>
          </div>
          <div onClick={handleToggle}>
            <Image src={plus} alt="icon-plus-event" width={32} height={32} />
          </div>
        </div>
        <div className="w-full bg-primary-white border-slate-400 rounded-[12px] flex flex-col gap-2">
          <Formik
            initialValues={{ file: null, text: "" }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ setFieldValue }) => (
              <Form className="flex flex-row gap-2 mt-2">
                <InputField
                  label=""
                  name="Audiance Information"
                  type="text"
                  placeholder="Audiance Information"
                />
                <InputField
                  label=""
                  name="Attention Information"
                  type="text"
                  placeholder="Attention Information"
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className="w-full px-8">
        <button className="w-full bg-primary-default text-primary-white p-2 rounded-[8px] hover:bg-primary-light">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Page;
