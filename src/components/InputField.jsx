import React, { memo, useState } from "react"
import { cn } from "../utils/helperFunctions"
import { IoEyeOff, IoEyeSharp } from "../components/shared/Icons"
const InputField = ({
  type = "text",
  label,
  name,
  id,
  placeholder,
  register,
  children,
  errorMsg,
  ...props
}) => {
  return (
    <div className="flex w-full flex-col items-start gap-1">
      <label
        htmlFor={id}
        className="block w-full cursor-pointer text-md capitalize text-foreground/70"
      >
        {label}
      </label>
      <div className="relative flex w-full flex-col">
        <div className="w-full relative">
          <input
            type={type}
            id={id}
            placeholder={placeholder}
            className={cn(
              "w-full rounded border p-2 text-md  outline-none focus:ring-1 focus:ring-primary",
              {
                "pr-10": type == "password",
                "border-destructive focus:ring-destructive": errorMsg,
              },
            )}
            {...register(name)}
            {...props}
          />
          {children}
        </div>
        {errorMsg && (
          <p className="mt-1 text-sm font-semibold text-destructive">
            {errorMsg}
          </p>
        )}
      </div>
    </div>
  )
}

export const PasswordField = ({
  type = "password",
  label,
  name,
  id,
  placeholder,
  register,
  children,
  errorMsg,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev)
  }
  return (
    <InputField
      type={showPassword ? "text" : type}
      label={label}
      name={name}
      id={id}
      placeholder={placeholder}
      errorMsg={errorMsg}
      register={register}
      {...props}
    >
      <button
        type="button"
        onClick={toggleShowPassword}
        className="absolute right-2 top-1/2 -translate-y-1/2 transform"
      >
        {showPassword ? /*<IoEyeSharp />*/ <IoEyeOff /> : <IoEyeOff />}
      </button>
    </InputField>
  )
}
export default memo(InputField)
