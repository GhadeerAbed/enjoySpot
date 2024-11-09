import router from 'next/navigation';
import React from 'react'

const MainCategoryPage = ({ params }: { params: { mainname: string } }) => {
  return (
    <div>{params.mainname} page</div>
  )
}

export default MainCategoryPage