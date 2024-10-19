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
      <div className="mx-20"><ExpoloreMore/></div>
      
    </div>
  )
}

export default MainHome 
