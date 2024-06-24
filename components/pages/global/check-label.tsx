import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import React, { Dispatch, SetStateAction } from 'react'

interface CheckLabelProps {
    label: string
    value: string
    onChange?: Dispatch<SetStateAction<string[]>>
}

const CheckLabel: React.FC<CheckLabelProps> = ({ label, value, onChange }) => {
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      const isChecked = e.target.checked
      const newVal = e.target.value
      onChange(preVal => {
        if (isChecked) {
          return [...preVal, newVal]
        } else {
          return preVal.filter(val => val != newVal)
        }
      })
    }
  }

  return (
    <div className='flex items-center gap-x-2'>
        <Input id={value} value={value} type='checkbox' className='w-4 h-4' onChange={(e) => handleChange(e)}  />
        <label htmlFor={value} className='font-medium text-light text-sm'>
            { label }
        </label>
    </div>
  )
}

export default CheckLabel