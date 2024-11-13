"use client";
import React, { useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import Image from "next/image";
export const CurrenciesSelector = ({ data }: { data: any }) => {
  const [selected, setSelected] = useState(data[0]);
  return (
    <div>
      <Listbox value={selected} onChange={setSelected}>
        <ListboxButton
          className={clsx(
            "relative block w-full rounded-lg capitalize py-1.5 pr-8 pl-3 text-left  text-primary font-semibold",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-primary"
          )}
        >
          <Image
            src={`https://enjoyspot.premiumasp.net${selected.countryFlagImagePath}`}
            width={40}
            height={40}
            alt="currency"
             className=" w-6 h-6 rounded-full"
          />
          <ChevronDownIcon
            className="group  absolute top-2.5 right-2.5 size-4 fill-primary font-semibold cursor-pointer"
            aria-hidden="true"
          />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          transition
          className={clsx(
            "rounded-xl border border-white bg-white shadow-md p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none w-[140px] h-[210px] overflow-y-auto dropdown-language mt-5",
            "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
          )}
        >
          {data.map((person: any) => (
            <ListboxOption
              key={person.name}
              value={person}
              className="group flex cursor-pointer items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white "
            >
              <CheckIcon className="invisible size-4 fill-primary group-data-[selected]:visible" />
              <Image
                key={person.id}
                src={`https://enjoyspot.premiumasp.net${person.countryFlagImagePath}`}
                width={40}
                height={40}
                alt="currency"
                className=" w-6 h-6 rounded-full"
              />
              <div className=" text-primary whitespace-nowrap">
                {person.name}
              </div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
};

export default CurrenciesSelector;
