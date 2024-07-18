"use client";
import React, { useState } from "react";
import threedot from "@/assets/icons/three-dot.svg";
import Image from "next/image";
import {
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import TitleDashboard from "./title-dashboard";

interface TitleDashboardProps {
  name: string;
}


const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    uv: 3000,
    pv: 4000,
    amt: 2200,
  },
  {
    name: "Sep",
    uv: 2500,
    pv: 3500,
    amt: 2300,
  },
  {
    name: "Oct",
    uv: 2800,
    pv: 3800,
    amt: 2400,
  },
  {
    name: "Nov",
    uv: 3200,
    pv: 4200,
    amt: 2500,
  },
  {
    name: "Dec",
    uv: 3800,
    pv: 5000,
    amt: 2600,
  },
];

const TransactionBar: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("This week");

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
    setIsFilterOpen(false);
  };

  return (
    <div className="flex flex-col items-center px-10 py-5 bg-primary-white w-full border-slate-100 border rounded-[8px]">
      <div className="flex flex-row gap-2 w-full justify-between">
        <TitleDashboard name="Event" />
        <div className="relative md:hidden">
          <button onClick={() => setIsFilterOpen(!isFilterOpen)}>
            <Image
              src={threedot}
              width={14}
              height={14}
              alt="three-dot-filter"
            ></Image>
          </button>
          {isFilterOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-primary-white rounded-[8px] shadow-lg z-10">
              <div className="py-1">
                {["This week", "This month", "This year"].map((filter) => (
                  <button
                    key={filter}
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      selectedFilter === filter
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => handleFilterClick(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
    
              bottom: 5,
            }}
          >
           
            <XAxis dataKey="name"  axisLine={false}/>
            {/* <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" /> */}
            <Tooltip />
  
            <Bar yAxisId="left" dataKey="pv" fill="#17B26A" />

          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TransactionBar;
