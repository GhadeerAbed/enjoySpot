import React, { forwardRef } from "react";
import type { InputProps } from "../types/page";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      id,
      className,
      inputClassName,
      type = "text",
      error = false,
      disabled = false,
      startIcon,
      endIcon,
      ...rest
    },
    ref
  ) => {
    return (
      <label
        htmlFor={id}
        className={`relative block overflow-hidden border-b border-h6Color bg-transparent pt-3 focus-within:border-blue-600 ${
          className ?? ""
        }`}
      >
        <input
          type={type}
          id={id}
          placeholder={label}
          className={`peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm ${
            inputClassName ?? ""
          } ${error ? "!border-red-500" : ""}`}
          disabled={disabled}
          ref={ref}
          {...rest}
        />
        {label && (
          <span className="absolute start-0 top-2 -translate-y-1/2 text-xs  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs text-primary">
            {label}
          </span>
        )}
        {endIcon && <span className="absolute right-0">{endIcon}</span>}
      </label>
    );
  }
);

Input.displayName = "Input";

export default Input;
