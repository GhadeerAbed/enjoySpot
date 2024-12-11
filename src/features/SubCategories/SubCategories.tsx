"use client";

import React, { useMemo } from "react";
import { CategoryList, SubCategoryTypes } from "./components/page";
import { useSWRHook } from "@/hooks/page";
import { API_SERVICES_URLS } from "@/data/page";

export const SubCategories = ({ name, name1 }: { name?: string; name1?: string }) => {
  const { data: listingTypesResponse } = useSWRHook(API_SERVICES_URLS.GET_ALL_LISTING_TYPES);
  const listingTypes = useMemo(() => listingTypesResponse?.isSuccess ? listingTypesResponse.data : [], [listingTypesResponse]);

  const mainCategory = useMemo(() => listingTypes.find((item: { name: string }) => item.name === name), [listingTypes, name]);
  const mainId = mainCategory?.id ?? null;

  const { data: subCategoriesResponse } = useSWRHook(
    mainId ? API_SERVICES_URLS.GET_ALL_LISTING_SUB_TYPES(mainId) : null
  );
  const subCategories = useMemo(() => subCategoriesResponse?.isSuccess ? subCategoriesResponse.data : [], [subCategoriesResponse]);

  const subCategory = useMemo(() => subCategories.find((item: { name: string }) => item.name === name1), [subCategories, name1]);
  const subId = subCategory?.id ?? null;

  return (
    <div className="max-w-7xl mx-auto">
      {mainId && <SubCategoryTypes id={mainId} name={name} />}
      {<CategoryList id={mainId} id1={subId} />}
    </div>
  );
};

export default SubCategories;