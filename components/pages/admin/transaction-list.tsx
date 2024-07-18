import { Badge } from "@/components/ui/badge";
import React from 'react'

const TableHeads = [
  "User name",
  "Payment method",
  "price",
  "Payment status",
  
];

const TableBody = [
  {
    name: "Muklis Harianja",
    paymentmethod: "Debit",
    price: "Rp 100.000",
    paymentstatus: "Success",
  },
  {
    name: "Wawan kurniawan",
    paymentmethod: "Debit",
    price: "Rp 100.000",
    paymentstatus: "Success",
    
  }
];

const TransactionList = () => {
  return (
    <div className='w-full flex flex-col mt-10 gap-4'>
        <div className='w-full'>
            <h1 className='font-semibold text-lg'>
                Transaction list
            </h1>
        </div>
        <div className='table list view'>
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
            {TableBody.map((tr, index) => (
              <tr key={index} className="bg-primary-white">
                <td className="p-3 cursor-pointer">{tr.name}</td>
                <td className="p-3">{tr.paymentmethod}</td>
                <td className="p-3">{tr.price}</td>
                <td className="p-3">
                  <Badge>{tr.paymentstatus}</Badge>
                </td>

              </tr>
            ))}
          </tbody>
        </table>


        </div>
      
    </div>
  )
}

export default TransactionList
