"use client"

import { useState } from "react"
import { useFormContext } from "react-hook-form"
import { Eye, EyeOff } from "lucide-react"

import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  FormControl,
  FormField as ShadcnFormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

interface FormFieldProps {
  name: string
  label: string
  type?: string
  placeholder: string
}

const FormField = ({
  name,
  label,
  type = "text",
  placeholder,
}: FormFieldProps) => {
  const { control } = useFormContext()
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <ShadcnFormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className="relative">
              <Input
                {...field}
                type={showPassword && type === "password" ? "text" : type}
                placeholder={placeholder}
                className="pr-10 focus-visible:ring-2 focus-visible:ring-primary transition-colors duration-500"
              />
              {type === "password" && (
                <Button
                  type="button"
                  onClick={togglePasswordVisibility}
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 py-2"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default FormField
