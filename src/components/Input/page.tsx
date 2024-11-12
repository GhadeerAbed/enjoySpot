import React, { useMemo, useState, forwardRef } from "react";
import usePasswordInput from "./usePasswordInput";
import type { InputProps } from "../types/page";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      id,
      helperText,
      className,
      inputClassName,
      startIcon,
      endIcon,
      inputSize = "medium",
      type = "text",
      error = false,
      withoutHelperText = false,
      labelClassName,
      variant = "floating", // Setting default to "floating"
      disabled = false,
      handleEndIcon = () => {},
      endIconClassName,
      startIconClassName,
      ...rest
    },
    ref
  ) => {
    const { passwordInputType, passwordInputIcon } =
      usePasswordInput(inputSize);
    const inputType = type === "password" ? passwordInputType : type;
    const inputEndIcon = type === "password" ? passwordInputIcon : endIcon;

    const classNames = useMemo(() => {
      const classes = {
        inputContainer: "",
        label: "",
        input: "",
        helperText: "inline-flex min-h-[20px] text-xs mt-1",
        icon: "absolute text-gray-400 select-none top-1/2 -translate-y-2/4",
        startIcon: `left-4 ${startIconClassName ?? ""}`,
        endIcon: `right-4 ${endIconClassName ?? ""}`,
      };

      if (variant === "floating") {
        classes.inputContainer = `relative block overflow-hidden border-b border-h4Color bg-transparent pt-6 focus-within:border-blue-600 ${
          className ?? ""
        }`;
        classes.input =
          "peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm";
        classes.label =
          "absolute start-0 top-2  text-xs text-h4Color transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs";
      } else {
        // Default styling
        classes.inputContainer = `flex-1 mb-3 relative text-gray-dark ${
          className ?? ""
        }`;
        classes.label = `block mb-2 text-fontColor1 text-sm font-[500] ${
          labelClassName ?? ""
        }`;
        classes.input = `block w-full border-borderColor focus:ring-black text-sm focus:border-black rounded-lg ${
          inputClassName || ""
        } ${disabled ? "bg-secondary" : ""}`;

        // Add size-based modifications for default variant
        if (inputSize === "large") {
          classes.input += " py-4 px-5";
          classes.inputContainer += " text-lg";
        } else if (inputSize === "small") {
          classes.input += " py-3 px-3 text-sm";
          classes.inputContainer += " text-sm";
        } else {
          classes.input += " py-2 px-4";
          classes.inputContainer += " text-base";
        }
      }

      if (error) {
        classes.input += " !border-red focus:border-red";
      }

      return classes;
    }, [
      className,
      labelClassName,
      variant,
      inputSize,
      error,
      disabled,
      startIconClassName,
      endIconClassName,
    ]);

    return (
      <div className={classNames.inputContainer}>
        {label && (
          <label htmlFor={id} className={classNames.label}>
            {label}
          </label>
        )}
        <div className="relative flex-1">
          {startIcon && (
            <span className={`${classNames.icon} ${classNames.startIcon}`}>
              {startIcon}
            </span>
          )}
          <input
            id={id}
            type={inputType}
            className={classNames.input}
            disabled={disabled}
            ref={ref}
            placeholder={label} // Placeholder to trigger floating effect
            {...rest}
          />
          {inputEndIcon && (
            <span
              className={`${classNames.icon} ${classNames.endIcon}`}
              onClick={() => handleEndIcon()}
            >
              {inputEndIcon}
            </span>
          )}
        </div>
        {!withoutHelperText && error && (
          <p className={classNames.helperText}>{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
