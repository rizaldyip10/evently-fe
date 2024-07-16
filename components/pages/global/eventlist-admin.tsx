import React from "react";
import eventImage from "@/assets/image/image 2.png";
import Image from "next/image";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const EventListAdmin = () => {
  return (
    <div className="w-full p-3 sm:p-4 md:p-6 bg-primary-white rounded-[8px] shadow-sm border-slate-200">
      <div className="w-full flex flex-col sm:flex-row items-start sm:items-center gap-4 px-2 sm:px-3 md:px-5 py-2 rounded-[8px] cursor-pointer">
        {/* event date and month */}
        <div className="date and month flex flex-row sm:flex-col justify-center items-center bg-primary-default text-primary-white px-4 sm:px-5 md:px-6 py-2 sm:py-3 md:py-4 rounded-[12px]">
          <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl mr-2 sm:mr-0">
            18
          </h1>
          <p className="text-xs sm:text-sm md:text-base">Jul</p>
        </div>

        {/* Event name */}
        <div className="flex flex-col justify-center gap-1 w-full sm:w-1/3">
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold w-full">
            Jalangkung Festival
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-400">
            Batam Island, Indonesia
          </p>
        </div>

        <div className="w-1/2 flex flex-row sm:flex-row md:flex-row justify-between sm:justify-start md:justify-between mt-2 sm:m  t-0">
          <div className="w-1/2 sm:w-1/2 md:w-full md:mb-2">
            <p className="font-medium text-sm sm:text-base md:text-lg">
              15 july 2024
            </p>
          </div>

          <div className="w-1/2 sm:w-1/2 md:w-full">
            <p className="font-medium text-sm sm:text-base md:text-lg">
              100 People
            </p>
          </div>
        </div>

        <div className="w-full sm:w-1/6 mt-2 sm:mt-0">
          <Badge className="text-xs sm:text-sm md:text-base">Music</Badge>
        </div>
      </div>

      
    </div>

    
  );
};

export default EventListAdmin;
