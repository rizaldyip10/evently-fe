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
import TitleDashboard from "@/components/pages/admin/title-dashboard";

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

  const handleFilter = (category : string) => {
    setFilter(category);
    if (category === "All") {
      setFilteredTableBody(TableBody);
    } else {
      const filtered = TableBody.filter((item) => item.category === category);
      setFilteredTableBody(filtered);
    }
  };

  return (
    <div className="flex flex-col items-center px-10 py-5 bg-blue-50 h-screen">
      <div className="w-full flex flex-row justify-between">
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-3xl">Welcome back, Purwa Widodo</h1>
          <p className="text-base text-gray-700">Lorem</p>
        </div>
        <div>
          <Button className="bg-primary-default rounded-[4px] text-primary-white hover:bg-primary-light">
            Create event
          </Button>
        </div>
      </div>

      <div className="w-full items-center flex flex-col pt-10 gap-4">
        <div className="bg-white flex justify-between w-full rounded-[8px] flex-col gap-4">
          <div className="flex flex-row justify-between w-full">
            <h1 className="font-medium text-lg">Total events</h1>
          </div>

          <div className="w-full items-center flex flex-row gap-4 justify-between h-fit">
            <DashboardCard title="Total Event" number="5" trend="This month +20%" />
            <DashboardCard title="Transaction total" number="25" trend="This month -10%" />
            <DashboardCard title="Total participant" number="100" trend="This month +5%" />
          </div>
        </div>

        <div className="flex flex-row justify-between w-full pt-10 pb-2">
          <h1 className="font-semibold text-lg flex items-center">Title</h1>
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
                <td className="p-3">{tr.name}</td>
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
      </div>
    </div>
  );
};

export default AdminHomePage;
