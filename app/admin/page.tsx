"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DashboardCard from "@/components/pages/admin/dashboard-card";
import { Badge } from "@/components/ui/badge";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";


import eventImage from "@/assets/image/image 2.png";
import Image from "next/image";
import TransactionList from "@/components/pages/admin/transaction-list";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import EventDetailSheet from "@/components/pages/admin/sheet";
import EventDetailContent from "@/components/pages/admin/eventdetails-sheets";
import { Tabs, TabsContent, TabsList } from "@radix-ui/react-tabs";
import { TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";



const TableHeads = [
  "Event name",
  "Event date",
  "Event category",
  "Event total attendance",
  "Event total order",
];

const TableBody = [
  {
    name: "Senja Festival",
    total: "Rp 50.000",
    category: "Music",
    attendance: "30 Peoples",
    date: "20 March 2024",
  },
  {
    name: "Xyz music",
    total: "Rp 100.000",
    category: "Music",
    attendance: "50 Peoples",
    date: "22 March 2024",
  },
  {
    name: "Jangan mandi jendral!",
    total: "Rp 70.000",
    category: "Movie",
    attendance: "40 Peoples",
    date: "25 March 2024",
  },
];



const AdminHomePage = () => {
  const [filter, setFilter] = useState("All");
  const [filteredTableBody, setFilteredTableBody] = useState(TableBody);

  const handleFilter = (category: string) => {
    setFilter(category);
    if (category === "All") {
      setFilteredTableBody(TableBody);
    } else {
      const filtered = TableBody.filter((item) => item.category === category);
      setFilteredTableBody(filtered);
    }
  };

   const [selectedEvent, setSelectedEvent] = useState(null);

  const handleRowClick = (event : any) => {
    setSelectedEvent(event);
  };

  return (
    <div className="flex flex-col items-center py-5 bg-blue-50 h-screen w-full px-10">
      <div className="w-full flex flex-row justify-between">
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-3xl">Welcome back, Purwa Widodo</h1>
        </div>
        <div>
          <Button className="bg-primary-default rounded-[4px] text-primary-white hover:bg-primary-light">Create Event</Button>  
        </div>
      </div>

      <div className="w-full items-center flex flex-col pt-10 gap-4">
        <div className="bg-white flex justify-between w-full rounded-[8px] flex-col gap-4">
          <div className="flex flex-row justify-between w-full"></div>

          <div className="w-full items-center flex flex-col gap-4 justify-between h-fit md:flex-col lg:flex-row">
            <DashboardCard
              title="Total Event"
              number="5"
              trend="This month +20%"
            />
            <DashboardCard
              title="Transaction total"
              number="25"
              trend="This month -10%"
            />
            <DashboardCard
              title="Total participant"
              number="100"
              trend="This month +5%"
            />
          </div>
        </div>

        <div className="flex flex-row justify-between w-full pt-10 pb-2">
          <h1 className="font-semibold text-lg flex items-center">
            Event list
          </h1>
          <Select onValueChange={handleFilter}>
            <SelectTrigger className="w-[180px] bg-primary-white border-slate-300 rounded-[8px]">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent className="bg-primary-white rounded-[8px] shadow-md border-slate-300">
              <SelectGroup>
                <SelectLabel>By Category</SelectLabel>
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="Music">Music</SelectItem>
                <SelectItem value="Movie">Movie</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Table list */}

        <table className="w-full pt-2 rounded-[8px] border border-slate-100">
          <thead className="bg-blue-50 border-b border-slate-100">
            <tr className="text-sm text-gray-600 text-left p-[12px]">
              {TableHeads.map((th, index) => (
                <th key={index} className="p-3">
                  {th}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="font-regular text-base">
            {filteredTableBody.map((tr, index) => (
              <tr key={index} className="bg-primary-white">
                    
                    <Sheet>
            <SheetTrigger>
              <td className="p-3 cursor-pointer">{tr.name}</td> 
              {/* <Button className="bg-primary-default rounded-[4px] text-primary-white hover:bg-primary-light">
                Create Event
              </Button> */}
            </SheetTrigger>
            <SheetContent className="w-1/2 bg-primary-white shadow-lg border-none">
              <SheetHeader>
                <SheetTitle>Event name</SheetTitle>
              </SheetHeader>

              <div className="w-full flex flex-row justify-center border bg-primary-white border-second-lightest rounded-[8px] mt-4">
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

              

              <Tabs defaultValue="eventdetail" className="w-full border-none flex flex-col gap-4 mt-5">
                <TabsList className="grid w-full grid-cols-2 shadow-sm rounded-[4px] p-2">
                  <TabsTrigger value="eventdetail" className="shadow-md rounded-[4px]">Event Details</TabsTrigger>
                  <TabsTrigger value="eventtransaction" className="shadow-md ">Event Transaction</TabsTrigger>
                </TabsList>
                <TabsContent value="eventdetail" className="border-none">
                  <Card>
                    <CardContent className="border-none">
                      <EventDetailContent/>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="eventtransaction" className="border-none">
                  <Card>
                    <CardContent>
                      <TransactionList/>
                    </CardContent>
                  </Card>

                </TabsContent>
              </Tabs>


              <SheetFooter>
                <SheetClose>
                  {/* <Button type="submit">Save changes</Button> */}
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
                <td className="p-3">{tr.date}</td>
                <td className="p-3">
                  <Badge>{tr.category}</Badge>
                </td>
                <td className="p-3">{tr.attendance}</td>
                <td className="p-3">{tr.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-full items-end">
          <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive className="bg-primary-white rounded-[8px] border-none">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>

        </div>

        
        
      </div>
    </div>
  );
};

export default AdminHomePage;
