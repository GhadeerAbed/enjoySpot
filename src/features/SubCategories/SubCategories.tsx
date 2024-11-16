import React from 'react'
import { CategoryList, SubCategoryTypes } from './components/page'

export const SubCategories = ({id , name ,id1}:{id?:any ; name?:string ;id1?:any}) => {
  return (
    <div className='max-w-7xl mx-auto'>
        <SubCategoryTypes id ={id} name={name}/>
        <CategoryList  id ={id}  id1={id1}/>
    </div>
  )
}

export default SubCategories