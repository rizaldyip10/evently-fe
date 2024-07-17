import React from "react";
import { Badge } from "@/components/ui/badge";

interface EventListProps {
  date: string;
  month: string;
  eventTitle: string;
  location: string;
  detailDate: string;
  attendance: string;
  badge: string;
}

const EventListAdmin: React.FC<EventListProps> = ({
  date,
  month,
  eventTitle,
  location,
  detailDate,
  attendance,
  badge
}) => {
  return (
    <div className="w-full p-3 sm:p-4 md:p-6 bg-primary-white rounded-[8px] shadow-sm border-slate-200">
      <div className="w-full flex flex-col sm:flex-row items-start sm:items-center gap-4 px-2 sm:px-3 md:px-5 py-2 rounded-[8px] cursor-pointer">
        {/* event date and month */}
        <div className="date and month flex flex-row sm:flex-col justify-center items-center bg-primary-default text-primary-white px-4 sm:px-5 md:px-6 py-2 sm:py-3 md:py-4 rounded-[12px]">
          <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl mr-2 sm:mr-0">
            {date}
          </h1>
          <p className="text-xs sm:text-sm md:text-base">{month}</p>
        </div>

        {/* Event name */}
        <div className="flex flex-col justify-center gap-1 w-full sm:w-1/3">
          <h1 className="text-lg sm:text-xl md:text-xl font-semibold w-full">
            {eventTitle}
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-400">
            {location}
          </p>
        </div>

        <div className="w-1/2 flex flex-row sm:flex-row md:flex-row justify-between sm:justify-start md:justify-between mt-2 sm:mt-0">
          <div className="w-1/2 sm:w-1/2 md:w-full md:mb-2">
            <p className="font-medium text-sm sm:text-base md:text-lg">
              {detailDate}
            </p>
          </div>

          <div className="w-1/2 sm:w-1/2 md:w-full">
            <p className="font-medium text-sm sm:text-base md:text-lg">
              {attendance}
            </p>
          </div>
        </div>

        <div className="w-full sm:w-1/6 mt-2 sm:mt-0">
          <Badge className="text-xs sm:text-sm md:text-base">{badge}</Badge>
        </div>
      </div>
    </div>
  );
};

export default EventListAdmin;