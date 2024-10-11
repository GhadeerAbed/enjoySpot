import React from 'react'
import { Blog, Hero } from './components/page'
import Activities from './components/Activities/page'
import PackagesSection from './components/PackagesSection/page'
import ContactBanner from './components/ContactBanner/page'
import ExpoloreMore from './components/ExpoloreMore/page'

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
