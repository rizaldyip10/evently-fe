import { Switch } from '@/components/ui/switch'
import React from 'react'

interface SwitchLabelProps {
    name: string
    value: string
    onChange?: () => void
}

const SwitchLabel: React.FC<SwitchLabelProps> = ({ name, value, onChange }) => {
  return (
    <div className='flex items-center gap-x-2'>
        <Switch id={value} value={value} className='data-[state=checked]:bg-primary-lightest data-[state=unchecked]:bg-lightest' />
        <label htmlFor={value} className='font-medium text-light text-sm'>
            { name }
        </label>
    </div>
  )
}

export default SwitchLabel