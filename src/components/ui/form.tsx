import * as React from "react"
import { useFormContext, Controller, FormProvider } from "react-hook-form"

const Form = FormProvider

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}

function FormField({ name, children }: { name: string; children: React.ReactNode }) {
  const { control } = useFormContext()
  return <Controller name={name} control={control} render={({ field }) => children(field)} />
} 