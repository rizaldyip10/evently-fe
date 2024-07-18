"use client"

import Image from 'next/image'
import React, { useState } from 'react'

import TitleDashboard from './title-dashboard'
import threedot from "@/assets/icons/three-dot.svg";
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


const RevenueBarChart = () => {

  const formatTooltipValue = (value : any) => {
    return `${value}k`;
  };

    const formatLegendValue = (value : any) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

    const formatYAxisLabel = (value : any) => {
    return `${value}k`;
  };




  return (
    <div className='flex flex-col items-center px-10 py-5 bg-primary-white w-full border-slate-100 border rounded-[8px]'>
        <div className="flex flex-col gap-2 w-full justify-between">
            <TitleDashboard name="Revenue" />
    
             <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
             
              bottom: 5,
              
            }}
          >
           
            <XAxis dataKey="name" axisLine={false} />
            
            
     
            {/* <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" /> */}
            <Tooltip 
             formatter={formatTooltipValue}
              cursor={{ fill: "transparent" }}/>

              
            <Bar yAxisId="left" dataKey="pv" fill="#475be8" radius={[4, 4, 4, 4]}/>
            
          </BarChart>
        </ResponsiveContainer>
      </div>
                        
                
                
             </div>

        </div>
    
  )
}

export default RevenueBarChart
