import React, { forwardRef } from "react";
import type { InputProps } from "../types/page";

interface SelectProps extends InputProps {
  options: { value: string; label: string }[];
}

export const SelectFloat = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      id,
      className,
      selectClassName,
      error = false,
      disabled = false,
      options,
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
        <select
          id={id}
          className={`peer h-10 w-full border-none bg-transparent p-1 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-primary ${
            selectClassName ?? ""
          } ${error ? "!border-red-500" : ""}`}
          disabled={disabled}
          ref={ref}
          {...rest}
        >
          <option value="" hidden>
            {label}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value} className="p-1">
              {option.label}
            </option>
          ))}
        </select>
        {/* {label && (
          <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-h6Color transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
            {label}
          </span>
        )} */}
      </label>
    );
  }
);

SelectFloat.displayName = "Select";

export default SelectFloat;
