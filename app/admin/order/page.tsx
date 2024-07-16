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

import TitleDashboard from "@/components/pages/admin/title-dashboard";
import { Badge } from "@/components/ui/badge";

const TableHeads = [
  "User name",
  "Event name",
  "Payment status",
  "Date payment",
  "Price",
];

const TableBody = [
  {
    name: "Muklis harianja",
    eventname: "XYZ festival",
    datepayment: "24-04-2024",
    paymentstatus: "success",
    price: "Rp 200.000",
  },
  {
    name: "Bapak Zaldy",
    eventname: "Music Concert",
    datepayment: "20-03-2024",
    paymentstatus: "pending",
    price: "Rp 100.000",
  },
  {
    name: "Hadi mulyadi",
    eventname: "Movie Premiere",
    datepayment: "23-03-2024",
    paymentstatus: "success",
    price: "Rp 70.000",
  },
];

const eventCategory = [
  "Music",
  "Movies",
  "Arts",
  "Internationals",
  "Conferences",
];

const paymentStatus = ["Success", "Pending", "Fail"];

const AdminOrderPage = () => {
  const [filteredTableBody, setFilteredTableBody] = useState(TableBody);
  return (
    <div className="w-full px-20 flex flex-col gap-4 bg-blue-50 h-screen">
      {/* Dashboard card for Order */}
      <div className="w-full flex flex-row gap-4 mt-10 ">
        <DashboardCard title="Total Order" number="5" trend="This month +20%" />
        <DashboardCard
          title="Success Payment"
          number="5"
          trend="This month +20%"
        />
      </div>

      {/* Dashboard filter */}
      <div className="filter w-full flex flex-row mt-4 gap-4">
        <Select>
          <SelectTrigger className="w-[180px] bg-primary-white border-slate-300 rounded-[8px]">
            <SelectValue placeholder="Event category" />
          </SelectTrigger>
          <SelectContent className="bg-primary-white rounded-[8px] shadow-md border-slate-300">
            <SelectGroup>
              <SelectLabel>By Category</SelectLabel>
              <SelectItem value="All">All</SelectItem>
              {eventCategory.map((category, index) => (
                <SelectItem key={index} value={category.toLocaleLowerCase()}>
                  {category}
                </SelectItem>
              ))}
              <SelectItem value="Music">Music</SelectItem>
              <SelectItem value="Movie">Movie</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[180px] bg-primary-white border-slate-300 rounded-[8px]">
            <SelectValue placeholder="Payment status" />
          </SelectTrigger>
          <SelectContent className="bg-primary-white rounded-[8px] shadow-md border-slate-300">
            <SelectGroup>
              <SelectLabel>Payment Status</SelectLabel>
              <SelectItem value="All">All</SelectItem>
              {paymentStatus.map((status, index) => (
                <SelectItem key={index} value={status.toLowerCase()}>
                  {status}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Table list view */}

      <div>
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
                <td className="p-3 cursor-pointer font-medium">{tr.name}</td>
                <td className="p-3">{tr.eventname}</td>
                <td className="p-3">
                  <Badge
                    className={
                      tr.paymentstatus.toLowerCase() === "success"
                        ? "default"
                        : tr.paymentstatus.toLowerCase() === "pending"
                        ? "error"
                        : "secondary" // for 'pending' or any other status
                    }
                  >
                    {tr.paymentstatus}
                  </Badge>
                </td>
                <td className="p-3 font-medium">{tr.datepayment}</td>
                <td className="p-3 font-semibold">{tr.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminOrderPage;
