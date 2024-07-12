import CategoryChart from "@/components/pages/admin/category-chart";
import TransactionBar from "@/components/pages/admin/transaction-bar";
import React from "react";

const AdminReportPage = () => {
  return (
    <div className="flex flex-col items-center px-10 py-5  bg-blue-50 h-screen">
      <div className="w-full flex flex-row">
        AdminReportPage

      </div>
      <div className="flex flex-row w-full gap-4">
          <TransactionBar />
          <CategoryChart />

        </div>
          

    </div>
  );
};

export default AdminReportPage;
