import { BlackYacht, Fishing, PrivateSvg, Sharing } from '@/components/page'

import React from 'react'

export const Category = () => {
  return (
    <div>
        <PrivateSvg className="hover:text-h1Color text-primary"/>
        <Sharing className="hover:text-h1Color text-primary"/>
        <BlackYacht className="hover:text-h1Color text-primary"/>
        <Fishing className="hover:text-h1Color text-primary"/>
    </div>
  )
}

export default Category