"use client";

import { useState } from "react";
import EyeShowIcon from "@/shared/components/icons/EyeShowIcon";
import EyeHideIcon from "@/shared/components/icons/EyeHideIcon";
import { Control, FieldValues, Path } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/shared/components/UI/Form";
import { Input, InputProps } from "@/shared/components/UI/Input";

const PasswordInput = <T extends FieldValues>({
  control,
  name,
  placeholder = "Пароль",
  ...props
}: {
  control: Control<T>;
  name: Path<T>;
  placeholder?: string;
} & InputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const type = showPassword ? "text" : "password";

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              autoComplete="off"
              hasError={!!fieldState.error}
              endIcon={
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ")
                      togglePasswordVisibility();
                  }}
                  className="cursor-pointer"
                  tabIndex={0}
                  aria-label={
                    showPassword ? "Скрыть пароль" : "Показать пароль"
                  }
                >
                  {showPassword ? <EyeHideIcon /> : <EyeShowIcon />}
                </button>
              }
              {...field}
              {...props}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default PasswordInput;
