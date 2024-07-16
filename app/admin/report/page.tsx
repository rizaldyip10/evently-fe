import CategoryChart from "@/components/pages/admin/category-chart";
import RevenueBarChart from "@/components/pages/admin/revenue-bar";
import TransactionBar from "@/components/pages/admin/transaction-bar";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AdminReportPage = () => {
  return (
    <div className="flex flex-col items-center px-20 py-5  bg-blue-50 h-screen gap-4">
      <div className="w-full flex flex-row gap-4">
     


      </div>
      <div className="grid grid-cols-2 w-full gap-4">
          <TransactionBar />
          <CategoryChart />


        </div>
        <div className="w-full">
          <RevenueBarChart />

        </div>
                  
          

    </div>
  );
};

export default AdminReportPage;
