import React from "react";
import Image from "next/image";
import { arrowDown } from "../../../public/images/page";
import { DropdownProps } from "@/types/page";
import { Input } from "../page";

const Dropdown: React.FC<DropdownProps> = ({
  label,
  icon,
  inputType = "text",
  placeholder = "Enter value",
  options,
  customContent,
}) => {
  return (
    <div className="relative w-full sm:w-auto ">
      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center gap-2 lg:border-r  border-gray-200 pb-1 text-h6Color transition hover:border-h6Color">
          <div className=" flex space-x-2 justify-center items-center  border-h6Color border rounded-full p-2 md:border-none lg:border-none">
            <Image src={icon} width={18} height={18} alt={label} className="mx-2"/>

            <span className="text-sm text-h6Color pr-10">{label}</span>
            <span className="transition group-open:-rotate-180 pr-3">
              <Image
                src={arrowDown} // Replace with your arrowDown icon path
                width={20}
                height={20}
                alt="arrowDown"
              />
            </span>
          </div>
        </summary>
        <div className="z-50 group-open:absolute group-open:start-0 group-open:mt-2">
          <div className="w-full sm:w-96 rounded border border-gray-200 bg-white p-4">
            {customContent ? (
              customContent
            ) : options ? (
              <ul className="list-none">
                {options.map((option, index) => (
                  <li
                    key={index}
                    className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            ) : (
              <Input
                type={inputType}
                className="w-full border p-2 rounded-md"
                placeholder={placeholder}
              />
            )}
          </div>
        </div>
      </details>
    </div>
  );
};

export default Dropdown;
