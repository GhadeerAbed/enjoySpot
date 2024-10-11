import React from 'react'
import { Activities, Blog, ContactBanner, ExpoloreMore, Hero, PackagesSection } from './components/page'


export const MainHome = () => {
  return (
    <div>
      <Hero/>
      <Activities/>
      <PackagesSection/>
      <Blog/>
      <ContactBanner/>
      <ExpoloreMore/>
    </div>
  )
}

export default MainHome 
