import * as React from "react"
import { useFormContext, Controller, FormProvider } from "react-hook-form"

export function Form({ children, ...props }: React.ComponentProps<typeof FormProvider>) {
  return <FormProvider {...props}>{children}</FormProvider>
}

export function FormField({ name, children }: { name: string; children: React.ReactNode }) {
  const { control } = useFormContext()
  return <Controller name={name} control={control} render={({ field }) => children(field)} />
} 