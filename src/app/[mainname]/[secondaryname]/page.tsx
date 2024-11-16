"use client"
import { API_SERVICES_URLS } from '@/data/page';
import { SubCategories } from '@/features/page';
import { useSWRHook } from '@/hooks/page';
import React from 'react'

const SubCategoryPage = ({params}:{params:{secondaryname:string ,mainname:string}}) => {
  const { data: listingTypesResponse } = useSWRHook(API_SERVICES_URLS.GET_ALL_LISTING_TYPES);
  const listingTypes = listingTypesResponse?.isSuccess ? listingTypesResponse.data : [];
  const mainCategory = listingTypes.find(
    (item: { name: string }) => item.name === params.mainname
  );
  const mainId = mainCategory ? mainCategory.id : null;

  const { data: subCategoriesResponse } = useSWRHook(
    mainId ? API_SERVICES_URLS.GET_ALL_LISTING_SUB_TYPES(mainId) : null
  );
  const subCategories = subCategoriesResponse?.isSuccess ? subCategoriesResponse.data : [];
  const subCategory = subCategories.find(
    (item: { name: string }) => item.name === params.secondaryname
  );
  const subId = subCategory ? subCategory.id : null;


  return (
    <div>
      <SubCategories id={mainId} name={params.mainname} id1={subId} />
    </div>
  );
}

export default SubCategoryPage