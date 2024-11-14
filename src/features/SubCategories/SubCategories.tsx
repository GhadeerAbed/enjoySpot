import React from 'react'
import { CategoryList, SubCategoryTypes } from './components/page'

const SubCategories = ({id , name}:{id:any ; name:string}) => {
  return (
    <div className='max-w-7xl mx-auto'>
        <SubCategoryTypes id ={id} name={name}/>
        <CategoryList  id ={id}/>
    </div>
  )
}

export default SubCategories