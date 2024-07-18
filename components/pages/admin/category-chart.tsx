"use client"
import React from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import TitleDashboard from './title-dashboard';


const data = [
  { name: "Music", value: 400, color: "#0088FE" },
  { name: "Movie", value: 300, color: "#00C49F" },
  { name: "Arts", value: 300, color: "#FFBB28" },
  { name: "Internationals", value: 200, color: "#FF8042" },
  { name: "Conferences", value: 100, color: "#FF8042" },
];

const CategoryChart = () => {
  return (
    <div className='flex flex-col items-center px-10 py-5 bg-primary-white w-full border-slate-100 border rounded-[8px]'>
        <TitleDashboard name="Event Category" />
      <div className="pieChartBox">
      <div className="w-full">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options flex flex-row gap-4">
        {data.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default CategoryChart
