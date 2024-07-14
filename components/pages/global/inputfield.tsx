import { Field, useField } from 'formik';
import React from 'react'
import { Label } from '@/components/ui/label';

interface inputFieldProps {
  label: string
  placeholder: string
  name: string
  type: string
}


const InputField: React.FC<inputFieldProps> = ({ label, ...props }) => {

  const [, meta] = useField(props);

  return (
    <div className="grid w-full items-center gap-1.5 rounded-md">
      <Label htmlFor={props.name} className="text-[14px] text-gray-700">{label}</Label>
      <Field
        className="rounded placeholder:text-slate-400 hover:border-2 hover:border-primary-light border-2 border-slate-400 p-2 focus:outline-none focus:border-primary-darkest"
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
      />
      {meta.error && meta.touched && (
        <p className="text-error text-sm">{meta.error}</p>
      )}
    </div>
  )
}

export default InputField
