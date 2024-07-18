import { Input } from '@/components/ui/input'
import React from 'react'

interface RadioOptionProps {
    label: string
    value: string
    name: string
    checked: boolean
    onChange: (value: string) => void
}

const RadioOption: React.FC<RadioOptionProps> = ({ label, value, name, checked, onChange }) => {
    return (
        <label htmlFor={`${name}-${value}`} className='flex items-center gap-2'>
            <Input 
                type='radio' 
                id={`${name}-${value}`} 
                value={value} 
                name={name} 
                onChange={() => onChange(value)}
                className='w-4 h-4'
                checked={checked}
            />
            <p className='font-medium text-light text-sm'>
                {label}
            </p>
        </label>
    )
}

export default RadioOption