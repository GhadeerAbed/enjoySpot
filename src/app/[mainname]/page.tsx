"use client"
import { API_SERVICES_URLS } from '@/data/page';
import SubCategories from '@/features/SubCategories/SubCategories';
import { useSWRHook } from '@/hooks/page';
import React from 'react'

const MainCategoryPage = ({ params }: { params: { mainname: string } }) => {
  const { data } = useSWRHook(API_SERVICES_URLS.GET_ALL_LISTING_TYPES);
  const listingTypes = data?.isSuccess ? data.data : [];
  const mainCategoryId = listingTypes.find((item: { name: string }) => item.name === params.mainname);
  const mainId = mainCategoryId ? mainCategoryId.id : null; 

  return (
    <div>
      <SubCategories id={mainId} name={params.mainname}/>
      {params.mainname} page
      
    </div>
  )
}

export default MainCategoryPage