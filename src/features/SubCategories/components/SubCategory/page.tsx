"use client";
import { API_SERVICES_URLS } from "@/data/page";
import { useSWRHook } from "@/hooks/page";
import Link from "next/link";
import React from "react";

export const SubCategoryTypes = ({ id, name }: { id: any; name: string }) => {
  const { data } = useSWRHook(API_SERVICES_URLS.GET_ALL_LISTING_SUB_TYPES(id));
  console.log(data)
  const listingSubTypes = data?.isSuccess ? data.data : [];
  return (
    <div>
      <div className="flex justify-center items-center gap-10 text-secondary pb-6">
        {listingSubTypes.map((item: any) => {
          let modifiedIcon = item.webIcon;
          if (/stroke=".*?"/.test(modifiedIcon)) {
            modifiedIcon = modifiedIcon.replace(
              /stroke=".*?"/g,
              'stroke="currentColor"'
            );
          } else if (/fill=".*?"/.test(modifiedIcon)) {
            modifiedIcon = modifiedIcon.replace(
              /fill=".*?"/g,
              'fill="currentColor"'
            );
            
          }

          return (
            <Link
              key={item.id}
              href={`${name}/${item.name}`}
              className="flex items-center flex-col gap-2 group"
            >
              <div
                className="icon group-hover:text-[#00ADEE]"
                dangerouslySetInnerHTML={{ __html: modifiedIcon }}
              />
              <p className="group-hover:text-[#00ADEE]">{item.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SubCategoryTypes;
