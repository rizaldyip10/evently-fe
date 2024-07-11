"use client"
import threedot from "@/assets/icons/three-dot.svg"
import { LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import Image from "next/image";
import React, { useState } from "react";  



const data = [
    {
    name: 'Page A', 
    uv: 400,
    pv: 2400, 
    amt: 2400
    }, 
    {
    name: 'Page B', 
    uv: 300,
    pv: 2200, 
    amt: 2400
    },
    {
    name: 'Page C', 
    uv: 600,
    pv: 3000, 
    amt: 3000
    },
    {
    name: 'Page S', 
    uv: 500,
    pv: 2800, 
    amt: 2800

    }

];


interface DashboardCardProps {
    title: string;
    number: string;
    trend: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({title, number, trend}) => {

    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState('This week');

    const handleFilterClick = (filter : string) => {
        setSelectedFilter(filter);
        setIsFilterOpen(false);
    };


  return (
        <div className="flex flex-row w-full h-fit justify-center items-center bg-primary-white border border-slate-100 rounded-[8px]">
            <div className="flex flex-col gap-2 w-full h-fit p-3">
                <div className="w-full flex flex-row justify-between">
                    <p className="text-gray-600">{title}</p>
                    <div className="relative">
                        <button onClick={() => setIsFilterOpen(!isFilterOpen)}>
                            <Image
                            src={threedot}
                            width={14}
                            height={14}
                            alt="three-dot-filter">
                            </Image>
                        </button>
                        {
                            isFilterOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-primary-white rounded-[8px] shadow-lg z-10">
                                    <div className="py-1">
                                        {['This week' , 'This month' , 'This year'].map((filter) => (
                                           <button
                                           key={filter}
                                            className={`block w-full text-left px-4 py-2 text-sm ${
                                                selectedFilter === filter
                                                    ? 'bg-gray-100 text-gray-900'
                                                    : 'text-gray-700 hover:bg-gray-100'
                                            }`}
                                            onClick={() => handleFilterClick(filter)}
                                            >
                                                {filter}

                                           </button>
                                        ))}

                                    </div>

                                </div>
                            )
                        }

                    </div>

                </div>
                <div className="w-full flex flex-row justify-between">
                    <div className="w-full flex flex-col gap-1">
                        <h1 className="font-medium text-3xl">{number}</h1>
                        <p className="text-sm font-medium text-green-700">{trend}</p>
                    </div>
                        <div className="w-full flex flex-row justify-center">
                            <ResponsiveContainer width="70%" height="100%">
                                 <LineChart width={100} height={50} data={data}>
                                <Line 
                                type="monotone" 
                                dataKey="uv" 
                                stroke="#17B26A"
                                strokeWidth={2}
                                />
                                <Tooltip
                                contentStyle={{background:"transparent", border:"none"}}
                                labelStyle={{display:"none"}}
                                position={{x:5, y:30}}/>
                            </LineChart>

                            </ResponsiveContainer>
           
                               
                            
                        </div>
                </div>
            </div>
          </div>

  )
}

export default DashboardCard;
