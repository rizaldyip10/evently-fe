"use client"

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from "date-fns"
import { Calendar as CalendarIcon } from 'lucide-react';
import React, { useState } from 'react'

const DatePicker: React.FC = () => {
    const [date, setDate] = useState<Date>();

  return (
    <Popover>
        <PopoverTrigger asChild>
            <Button variant="ghost" className='text-[10px] text-default flex items-center gap-1'>
                <CalendarIcon className='text-light w-3 h-3 md:w-5 md:h-5' />
                { date ? format(date, "PPP") : 
                    <span className='text-[10px] text-default md:text-base'>Select date</span> 
                }
            </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0 bg-[#fff] -translate-x-[18%] -translate-y-1/2 md:translate-x-0 md:translate-y-0' align='start'>
            <Calendar
                mode='single'
                selected={date}
                onSelect={setDate}
                initialFocus
            />
        </PopoverContent>
    </Popover>
  )
}

export default DatePicker