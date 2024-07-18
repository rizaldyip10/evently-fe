import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from '@/components/ui/button';
import TransactionList from './transaction-list';
import eventImage from "@/assets/image/image 2.png";
import Image from "next/image";


const EventDetailSheet = () => {
  return (
    <div>
        <Sheet>
            <SheetTrigger>
              <Button className="bg-primary-default rounded-[4px] text-primary-white hover:bg-primary-light">
                Create Event
              </Button>
            </SheetTrigger>
            <SheetContent className="w-1/2 bg-primary-white shadow-lg border-none">
              <SheetHeader>
                <SheetTitle>Event name</SheetTitle>
              </SheetHeader>

              <div className="w-full flex flex-col justify-center border bg-primary-white border-second-lightest rounded-[8px] mt-4">
                <div className="w-full">
                  <Image
                    alt=""  
                    src={eventImage}
                    className="w-full h-32 object-cover"
                  />
                </div>
                <div className="w-full flex p-5 justify-center gap-4">
                  <div className="flex flex-col items-center">
                    <p className="font-semibold text-xl text-primary-default">
                      SEPT
                    </p>
                    <h1 className="font-bold text-2xl text-default">22</h1>
                  </div>
                  <div className="flex flex-col">
                    <h1 className="font-semibold text-xl text-default ">
                      Drive in Senja: Back to The Future
                    </h1>
                    <p className="font-semibold text-base text-light ">
                      Parkiran Utama Mall @ Alam Sutra
                    </p>
                    <p className="text-base text-light">20:00 - 21:56</p>
                    <p className="text-base text-light">IDR 212.000</p>
                  </div>
                </div>
              </div>

              {/* Transaction list */}
              <div className="table list transaction">
                <TransactionList />
              </div>
              <SheetFooter>
                <SheetClose>
                  {/* <Button type="submit">Save changes</Button> */}
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
      
    </div>
  )
}

export default EventDetailSheet
