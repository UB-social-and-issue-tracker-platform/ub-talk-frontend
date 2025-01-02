import { useFormContext } from "react-hook-form"
import { Input } from "./ui/input"

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
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <Input
        id={name}
        type={type}
        {...register(name)}
        placeholder={placeholder}
        className="focus-visible:ring-2 focus-visible:ring-primary transition-colors duration-500"
      />
      {errors[name] && (
        <p className="mt-2 text-sm text-red-600">{errors[name]?.message}</p>
      )}
    </div>
  )
}

export default FormField
