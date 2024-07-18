"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import evetenjoyer from "@/assets/image/eventenjoyer.svg";
import Image from "next/image";
import admin from "@/assets/image/admin.svg";
import { Field, FieldProps, useFormikContext } from "formik";
import { cn } from "@/lib/utils";

const RegisterDialog = () => {
  const { setFieldValue, handleSubmit } = useFormikContext()
  const [selectedRole, setSelectedRole] = useState<string>('')

  const onSelect = (value: string) => {
    setFieldValue("role", value)
    setSelectedRole(value)
  }
  return (
    <Dialog>
      <DialogTrigger className="bg-primary-default hover:bg-primary-light w-full lg:w-full text-primary-white py-2 rounded-[4px]">
        Submit
      </DialogTrigger>
      <DialogContent className="bg-primary-white gap-8">
        <DialogHeader className="lg:max-w-[640px]">
          <DialogTitle className="text-xl">Choose your role</DialogTitle>
          <DialogDescription>
            To provide you with the best experience tailored to your needs,
            please select your role.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-row gap-8 rounded-lg">
          <Field>
            {({ field }: FieldProps) => (
              <label
                htmlFor="userRole"
                className={cn("border-2 rounded-lg px-4 flex flex-col justify-center w-full",
                  selectedRole == "USER" ? "border-primary-default" : 'border-slate-300'
                )}
              >
                <div className="flex flex-col text-lg font-medium justify-between items-center gap-3">
                  <h1>User enjoyer</h1>
                  <Input
                    {...field}
                    type="radio"
                    name="role"
                    id="userRole"
                    value="USER"
                    onChange={(e) => onSelect(e.target.value)}
                    className="hidden"
                  />
                  <Image
                    className="w-full h-full"
                    src={evetenjoyer}
                    alt="event-enjoyer"
                  />
                </div>
              </label>
            )}
          </Field>
          <Field>
            {({ field }: FieldProps) => (
              <label
                htmlFor="organizerRole"
                className={cn("border-2 rounded-lg px-4 flex flex-col justify-center w-full",
                  selectedRole == "ORGANIZER" ? "border-primary-default" : 'border-slate-300'
                )}
              >
                <div className="flex flex-col text-lg font-medium justify-between items-center gap-3">
                  <h1>As Admin</h1>
                  <Input
                    {...field}
                    type="radio"
                    name="role"
                    id="organizerRole"
                    value="ORGANIZER"
                    onChange={(e) => onSelect(e.target.value)}
                    className="hidden"
                  />
                  <Image
                    className="w-full h-full"
                    src={admin}
                    alt="event-enjoyer"
                  />
                </div>
              </label>
            )}
          </Field>
        </div>
        <DialogFooter className="w-full">
          <DialogClose className="w-full">
            <Button 
              className="bg-primary-default w-full text-primary-white hover:bg-primary-white hover:text-primary-default hover:border hover:border-primary-default" 
              onClick={() => handleSubmit()}
              type="submit"
            >
              Submit
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterDialog;
