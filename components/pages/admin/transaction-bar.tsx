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
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
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
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            {/* <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" /> */}
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="pv" fill="#8884d8" />
            <Bar yAxisId="right" dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TransactionBar;
