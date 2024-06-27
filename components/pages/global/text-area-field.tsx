import { Field, useField } from 'formik'
import { Label } from '@/components/ui/label';
import React from 'react'

interface TextAreaFieldProps {
    label?: string
    placeholder: string
    name: string
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({ label, ...props }) => {
    const [, meta] = useField(props)

    return (
        <div className="w-full items-center flex gap-1.5 rounded-md">
            {
                label && <Label htmlFor={props.name} className="text-[14px] text-gray-700">{label}</Label>
            }
            <Field as="textarea" className="rounded placeholder:text-slate-400 hover:border-2 hover:border-primary-lightest border border-slate-400 p-2 w-full h-32" name={props.name} placeholder={props.placeholder} />

            {meta.error && meta.touched && (
                <p className="text-error text-sm">{meta.error}</p>
            )}
        </div>
    )
}

export default TextAreaField