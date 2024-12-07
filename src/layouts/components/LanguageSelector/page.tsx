"use client";
import React, { useState } from "react";
import { Language } from "@/data/layoutData/Language";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

export const LanguageSelector = () => {
  const [selected, setSelected] = useState(Language[1]);
  return (
    <div>
      <Listbox value={selected} onChange={setSelected}>
        <ListboxButton
          className={clsx(
            "relative block w-full rounded-lg capitalize py-1.5 pr-8 pl-3 text-left  text-primary font-semibold",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-primary"
          )}
        >
          {selected.code}
          <ChevronDownIcon
            className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-primary font-semibold"
            aria-hidden="true"
          />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          transition
          className={clsx(
            "rounded-xl border border-white bg-white shadow-md p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none w-[140px] h-[210px] overflow-y-auto dropdown-language",
            "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
          )}
        >
          {Language.map((person) => (
            <ListboxOption
              key={person.name}
              value={person}
              className="group flex cursor-pointer items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white "
            >
              <CheckIcon className="invisible size-4 fill-primary group-data-[selected]:visible" />
              <div className="text-sm/6 text-primary whitespace-nowrap">
                {person.name}
              </div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
};

export default LanguageSelector;
