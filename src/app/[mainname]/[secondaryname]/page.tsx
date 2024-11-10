import SubCategories from '@/features/SubCategories/SubCategories'
import React from 'react'

const SubCategoryPage = ({params}:{params:{secondaryname:string}}) => {
  console.log(params)
  return (
    <div>
      {params.secondaryname}
      
    </div>
  )
}

export default SubCategoryPage