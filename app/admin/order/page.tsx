"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
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
import axios from "@/utils/axios";

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

const paymentStatus = ["Success", "Pending", "Fail"];

const AdminOrderPage = () => {
  const [filteredTableBody, setFilteredTableBody] = useState(TableBody);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPaymentStatus, setSelectedPaymentStatus] = useState<string>("All");

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://evently-be-smlkc3wkza-et.a.run.app/api/v1/transactions/event/dwp-2024"
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchEventList = async () => {
      try {
        setLoading(true);
        const data = await getData();
        setFilteredTableBody(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    fetchEventList();
  }, []);

  useEffect(() => {
    if (selectedPaymentStatus === "All") {
      setFilteredTableBody(TableBody);
    } else {
      const filteredData = TableBody.filter(
        (item) =>
          item.paymentstatus.toLowerCase() === selectedPaymentStatus.toLowerCase()
      );
      setFilteredTableBody(filteredData);
    }
  }, [selectedPaymentStatus]);

  const handlePaymentStatusChange = (value: string) => {
    setSelectedPaymentStatus(value);
  };

  return (
    <div className="w-full px-20 flex flex-col gap-4 bg-blue-50 h-screen">
      {/* Dashboard card for Order */}

      {/* Dashboard filter */}
      <div className="filter w-full flex flex-row mt-4 gap-4">
        <Select onValueChange={handlePaymentStatusChange}>
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
                        : "secondary" // for 'fail' or any other status
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
