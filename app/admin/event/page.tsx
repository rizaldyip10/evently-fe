"use client"

import { useEffect, useState } from 'react';
import EventListAdmin from '@/components/pages/global/eventlist-admin';
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
import { Input } from "@/components/ui/input";
import useDebounce from '@/hooks/useDebounce';

interface Event {
  date: string;
  month: string;
  eventTitle: string;
  location: string;
  detailDate: string;
  attendance: string;
  badge: string;
}

const AdminEventPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      // Replace this with your actual API call
      console.log('Searching for:', debouncedSearchTerm);
      // Simulating API call with setTimeout
      setTimeout(() => {
        const filteredEvents = [
          {
            date: "18",
            month: "Jul",
            eventTitle: "Jalangkung Festival",
            location: "Batam Island, Indonesia",
            detailDate: "15 July 2024",
            attendance: "100 People",
            badge: "Music"
          },
          {
            date: "20",
            month: "Aug",
            eventTitle: "Rock Concert",
            location: "Jakarta, Indonesia",
            detailDate: "20 August 2024",
            attendance: "500 People",
            badge: "Music"
          }
        ].filter(event => 
          event.eventTitle.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
          event.location.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        );
        setEvents(filteredEvents);
      }, 500);
    };

    fetchEvents();
  }, [debouncedSearchTerm]);

  return (
    <div className='px-5 sm:10px md:20px lg:20px bg-blue-50 h-screen'>
      <div className='w-full flex flex-row'>
        <div className='w-full mt-4'>
          <Input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-sm rounded-[8px] border-slate-300 bg-primary-white"
          />
        </div>

        <div className='w-full mt-4 flex flex-row items-start'>
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
      </div>

      <div className='w-full flex flex-col gap-2 mt-4 rounded-[12px]'>
        {events.map((event, index) => (
          <EventListAdmin 
            key={index}
            date={event.date}
            month={event.month}
            eventTitle={event.eventTitle}
            location={event.location}
            detailDate={event.detailDate}
            attendance={event.attendance}
            badge={event.badge}
          />
        ))}
      </div>

      {/* Pagination component remains unchanged */}
    </div>
  )
}

export default AdminEventPage;