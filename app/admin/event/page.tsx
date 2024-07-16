
import EventListAdmin from '@/components/pages/global/eventlist-admin'

import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

const AdminEventPage = () => {
  return (
    <div className='px-5 sm:10px md:20px lg:20px bg-blue-50 h-screen'>

      {/* Filter events */}

      <div className='w-full mt-4 flex flex-row items-end'>
          <Select>
            <SelectTrigger className="w-[180px] bg-primary-white border-slate-300 rounded-[8px]">
              <SelectValue placeholder="All events" />
            </SelectTrigger>
            <SelectContent className="bg-primary-white rounded-[8px] shadow-lg border-none">
              <SelectGroup>
                <SelectLabel>By Category</SelectLabel>
                <SelectItem value="All">Upcoming events</SelectItem>
                <SelectItem value="Music">Recent events</SelectItem>
                <SelectItem value="Movie">Past event</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
      </div>


      {/* event card list */}
      <div className='w-full flex flex-col gap-2 mt-4 rounded-[12px]'>
          <EventListAdmin />
          <EventListAdmin />
          <EventListAdmin />
      </div>
      <div className='w-full flex flex-col gap-4 mt-2'>
        <div className="w-full">
        <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>

      </div>
      </div>
    
    

    </div>
  )
}

export default AdminEventPage