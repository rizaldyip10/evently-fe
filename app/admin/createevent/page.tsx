"use client"
import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import Image from "next/image";
import createbg from "@/assets/image/createeventbg.jpg";
import InputField from "@/components/pages/global/inputfield";

import plus from "@/assets/icons/plus-circle.svg";
import timeicon from "@/assets/icons/clock.svg";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { uploadImageToCloudinary } from "@/app/utils/UploadFileCloudinary";

const Page = () => {
  const [date, setDate] = useState<Date>();
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [imagePreview, setImagePreview] = useState<string>("");

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

  const audience = ["+18 Audience Only", "Everyone"];

  return (
    <div className="flex flex-col gap-4 px-4 sm:px-6 md:px-8 lg:px-10">
      {/* Event Cover Upload */}
      <div className="flex flex-col justify-between items-start bg-primary-white border border-slate-400 p-3 sm:p-4 md:p-5 mt-4 rounded-[12px] mx-2 sm:mx-4 md:mx-6 lg:mx-8 hover:border-primary-default cursor-pointer">
        <div className="w-full h-full bg-primary-white border-slate-400 rounded-[12px] flex flex-col">
          <Formik
            initialValues={{ file: null, text: "" }}
            onSubmit={async (values) => {
              try {
                if (values.file) {
                  const uploadedImageUrl = await uploadImageToCloudinary(values.file);
                  console.log("Uploaded Image URL:", uploadedImageUrl);
                  setImagePreview(uploadedImageUrl);
                  console.log("ini upload image", uploadedImageUrl)
                }
              } catch (error) {
                console.error("Image upload failed:", error);
              }
            }}
          >
            {({ setFieldValue }) => (
              <Form>
                <div className="flex flex-col gap-2 mt-4">
                  <label
                    htmlFor="fileupload"
                    className="relative w-full h-24 sm:h-32 md:h-36 text-primary-white font-semibold"
                  >
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 rounded-[12px] bg-dark">
                      <h1 className="text-white text-center text-sm sm:text-base md:text-lg">
                        Upload event cover
                      </h1>
                    </div>
                    <Image
                      className="w-full h-24 sm:h-32 md:h-36 object-cover rounded-[12px]"
                      src={imagePreview || createbg}
                      alt="background-img"
                      width={100}
                      height={100}
                    />
                    <InputField
                      hidden
                      id="fileupload"
                      label=""
                      name="file"
                      type="file"
                      placeholder="Event name"
                       onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        const file = event.currentTarget.files?.[0];
                        if (file) {
                          setFieldValue("file", file);
                        }
                      }}
                    />
                  </label>
                </div>
                <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      {/* Event Title and Description */}
      <div className="flex flex-col justify-between items-start bg-primary-white border border-slate-400 p-3 sm:p-4 md:p-5 mt-4 rounded-[12px] mx-2 sm:mx-4 md:mx-6 lg:mx-8 hover:border-primary-default cursor-pointer">
        <div className="w-full flex flex-row justify-between">
          <div className="w-full">
            <h1 className="text-xl sm:text-2xl font-semibold">Event Title</h1>
            <p className="text-gray-700 text-sm sm:text-base">
              A short and sweet sentence about your event.
            </p>
          </div>
          <div className="">
            <Image src={plus} alt="icon-plus-event" width={32} height={32} />
          </div>
        </div>
        <div className="w-full bg-primary-white border-slate-400 rounded-[12px] flex flex-col">
          <Formik
            initialValues={{ file: null, text: "" }}
            onSubmit={(values) => {
              console.log(values);
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
                    className="border rounded-[4px] p-2 border-slate-400 text-sm sm:text-base"
                    name="event description"
                    placeholder="Event description"
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      {/* Event Category */}
      <div className="flex flex-col justify-between items-start bg-primary-white border border-slate-400 p-3 sm:p-4 md:p-5 mt-4 rounded-[12px] mx-2 sm:mx-4 md:mx-6 lg:mx-8 hover:border-primary-default cursor-pointer">
        <div className="w-full flex flex-row justify-between">
          <div className="w-full">
            <h1 className="text-xl sm:text-2xl font-semibold">Event Category</h1>
            <p className="text-gray-700 text-sm sm:text-base">
              Choose event category for your event
            </p>
          </div>
          <div>
            <Image src={plus} alt="icon-plus-event" width={32} height={32} />
          </div>
        </div>
        <div className="w-full bg-primary-white border-slate-400 rounded-[8px] flex flex-col mt-2">
          <Select>
            <SelectTrigger className="w-full bg-primary-white border-slate-300 rounded-[4px] hover:border-primary-default text-sm sm:text-base">
              <SelectValue placeholder="Select category" />
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

      {/* Date and Location */}
      <div className="flex flex-col justify-between items-start bg-primary-white border border-slate-400 p-3 sm:p-4 md:p-5 mt-4 rounded-[12px] mx-2 sm:mx-4 md:mx-6 lg:mx-8 hover:border-primary-default cursor-pointer">
        <div className="w-full flex flex-row justify-between">
          <div className="w-full">
            <h1 className="text-xl sm:text-2xl font-semibold">Date and Location</h1>
            <p className="text-gray-700 text-sm sm:text-base">
              Select the date for your event and specify the location.
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
            }}
          >
            {({ setFieldValue }) => (
              <Form>
                <div className="flex flex-col gap-2 mt-4">
                  <div className="flex flex-col w-full">
                    <InputField
                      label=""
                      name="Event Date"
                      type="date"
                      placeholder="Event Date"
                    />
                  </div>
                  <div className="w-full flex flex-col sm:flex-row gap-4">
                    <div className="w-full flex flex-col">
                      <Select
                        onValueChange={handleStartTimeChange}
                      >
                        <SelectTrigger className="w-full bg-primary-white border-slate-300 rounded-[4px] hover:border-primary-default text-sm sm:text-base">
                          <div className="flex flex-row justify-between items-center">
                            <Image src={timeicon} alt="timeicon" />
                            <SelectValue placeholder="Start Time" />
                          </div>
                        </SelectTrigger>
                        <SelectContent className="bg-primary-white rounded-[8px] shadow-md border-slate-300 w-full">
                          <SelectGroup className="w-full">
                            <SelectLabel>By Start Time</SelectLabel>
                            {times.map((time, index) => (
                              <SelectItem key={index} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="w-full flex flex-col">
                      <Select
                        onValueChange={handleEndTimeChange}
                      >
                        <SelectTrigger className="w-full bg-primary-white border-slate-300 rounded-[4px] hover:border-primary-default text-sm sm:text-base">
                          <div className="flex flex-row justify-between items-center">
                            <Image src={timeicon} alt="timeicon" />
                            <SelectValue placeholder="End Time" />
                          </div>
                        </SelectTrigger>
                        <SelectContent className="bg-primary-white rounded-[8px] shadow-md border-slate-300 w-full">
                          <SelectGroup className="w-full">
                            <SelectLabel>By End Time</SelectLabel>
                            {times.map((time, index) => (
                              <SelectItem key={index} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <InputField
                  label=""
                  name="location"
                  type="text"
                  placeholder="Location"
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>

      {/* Privacy and Audience */}
      <div className="flex flex-col justify-between items-start bg-primary-white border border-slate-400 p-3 sm:p-4 md:p-5 mt-4 rounded-[12px] mx-2 sm:mx-4 md:mx-6 lg:mx-8 hover:border-primary-default cursor-pointer">
        <div className="w-full flex flex-row justify-between">
          <div className="w-full">
            <h1 className="text-xl sm:text-2xl font-semibold">Privacy and Audience</h1>
            <p className="text-gray-700 text-sm sm:text-base">
              Specify your privacy settings and audience.
            </p>
          </div>
          <div>
            <Image src={plus} alt="icon-plus-event" width={32} height={32} />
          </div>
        </div>
        <div className="w-full bg-primary-white border-slate-400 rounded-[12px] flex flex-col mt-2">
          <Formik
            initialValues={{ privacy: "public", audience: "" }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ setFieldValue }) => (
              <Form>
                <div className="flex flex-col gap-2 mt-4">
                  <div className="flex flex-col w-full">
                    <Select
                      onValueChange={(value) => setFieldValue("privacy", value)}
                    >
                      <SelectTrigger className="w-full bg-primary-white border-slate-300 rounded-[4px] hover:border-primary-default text-sm sm:text-base">
                        <SelectValue placeholder="Select Privacy" />
                      </SelectTrigger>
                      <SelectContent className="bg-primary-white rounded-[8px] shadow-md border-slate-300 w-full">
                        <SelectGroup className="w-full">
                          <SelectLabel>By Privacy</SelectLabel>
                          <SelectItem value="public">Public</SelectItem>
                          <SelectItem value="private">Private</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col w-full mt-2">
                    <Select
                      onValueChange={(value) => setFieldValue("audience", value)}
                    >
                      <SelectTrigger className="w-full bg-primary-white border-slate-300 rounded-[4px] hover:border-primary-default text-sm sm:text-base">
                        <SelectValue placeholder="Select Audience" />
                      </SelectTrigger>
                      <SelectContent className="bg-primary-white rounded-[8px] shadow-md border-slate-300 w-full">
                        <SelectGroup className="w-full">
                          <SelectLabel>By Audience</SelectLabel>
                          {audience.map((aud, index) => (
                            <SelectItem key={index} value={aud}>
                              {aud}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Page;
