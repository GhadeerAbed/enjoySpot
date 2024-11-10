import React from 'react'
import { SubCategoryTypes } from './components/page'

const SubCategories = ({id , name}:{id:any ; name:string}) => {
  return (
    <div>
        <SubCategoryTypes id ={id} name={name}/>
    </div>
  )
}

export default SubCategories