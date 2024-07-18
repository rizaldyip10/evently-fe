import { Field, useField } from 'formik';
import React from 'react'
import { Label } from '@/components/ui/label';
import { useFormik } from 'formik';


interface inputFieldProps{
    label: string
    placeholder: string
    name: string
    type: string
    id?: string
    hidden?: boolean
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


const InputField: React.FC<inputFieldProps> = ({ label, ...props }) => {

  const [, meta] = useField(props);

  return (
    <div className="grid w-full items-center gap-1.5 rounded-md">
        <Label htmlFor={props.name} className="text-[14px] text-gray-700">{label}</Label>
        <Field  id={props.id} hidden={props.hidden} className="rounded placeholder:text-slate-400 hover:border-2 hover:border-primary-lightest border border-slate-400 p-2 " type={props.type} name={props.name} placeholder={props.placeholder}/>

         {meta.error && meta.touched && (
                <p className="text-error text-sm">{meta.error}</p>
            )}
    </div>
  )
}

export default InputField
