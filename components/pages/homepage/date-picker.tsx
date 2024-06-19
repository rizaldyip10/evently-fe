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
                <CalendarIcon className='text-light w-3 h-3' />
                { date ? format(date, "PPP") : 
                    <span className='text-[10px] text-default'>Select date</span> 
                }
            </Button>
        </PopoverTrigger>
        <PopoverContent className=''>
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