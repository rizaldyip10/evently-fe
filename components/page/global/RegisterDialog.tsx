"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import evetenjoyer from "@/assets/image/eventenjoyer.svg";
import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import admin from "@/assets/image/admin.svg";

const RegisterDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="bg-primary-default hover:bg-primary-light w-full lg:w-full text-primary-white py-4 rounded-[4px]">
          Submit
        </Button>
        <DialogHeader className="lg:max-w-[640px]">
          <DialogContent className="bg-primary-white">
            <DialogTitle>Choose your role</DialogTitle>
            <DialogDescription>
              To provide you with the best experience tailored to your needs,
              please select your role.
            </DialogDescription>

            <div className="flex flex-row gap-8 rounded-lg">
              <div className="border-2 border-slate-300 rounded-lg px-4 flex flex-col justify-center w-full">
                <div className="flex flex-row  text-lg font-medium justify-between items-center">
                  User enjoyer
                  <Input type="radio" />
                </div>
                <div className="w-full bottom-1 border-slate-400 px-4">
                  <Image
                    className="w-full h-full"
                    src={evetenjoyer}
                    alt="event-enjoyer"
                  />
                </div>
              </div>

              <div className="border-2 border-slate-300 rounded-lg px-4 flex flex-col justify-center w-full">
                <div className="flex flex-row  text-lg font-medium justify-between items-center">
                  As Admin
                  <Input type="radio" />
                </div>
                <div className="w-full bottom-1 border-slate-400 px-4">
                  <Image
                    className="w-full h-full"
                    src={admin}
                    alt="event-enjoyer"
                  />
                </div>
              </div>
            </div>
          </DialogContent>
        </DialogHeader>
      </DialogTrigger>
    </Dialog>
  );
};

export default RegisterDialog;
