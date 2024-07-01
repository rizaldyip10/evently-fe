"use client"

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from "date-fns"
import { Calendar as CalendarIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React, { Dispatch, SetStateAction, useState } from 'react'

interface DatePickerProps {
    date: Date | undefined
    setDate: Dispatch<SetStateAction<Date | undefined>>
}

const DatePicker: React.FC<DatePickerProps> = ({ date, setDate }) => {
    const pathname = usePathname()
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="ghost" className='text-[10px] w-full text-default flex items-center justify-start gap-1'>
                    <CalendarIcon className='text-light w-3 h-3 md:w-5 md:h-5' />
                    {date ? <span className='text-[10px] text-default md:text-lg'>{format(date, "PPP")}</span> :
                        <span className='text-[10px] text-default md:text-lg'>Select date</span>
                    }
                </Button>
            </PopoverTrigger>
            <PopoverContent className={cn('w-auto p-0 bg-[#fff] -translate-x-[18%] -translate-y-1/2 md:translate-x-0 md:translate-y-0', pathname == '/events' ? '-translate-x-[18%] translate-y-0' : '')} align='start'>
                <Calendar
                    mode='single'
                    selected={date}
                    onSelect={(e) => setDate(e)}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}

export default DatePicker