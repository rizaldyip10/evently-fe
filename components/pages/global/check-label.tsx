import { Checkbox } from '@/components/ui/checkbox'
import React from 'react'

interface CheckLabelProps {
    label: string
    value: string
    onChange?: () => void
}

const CheckLabel: React.FC<CheckLabelProps> = ({ label, value, onChange }) => {
  return (
    <div className='flex items-center gap-x-2'>
        <Checkbox id={value} value={value} />
        <label htmlFor={value} className='font-medium text-light text-sm'>
            { label }
        </label>
    </div>
  )
}

export default CheckLabel