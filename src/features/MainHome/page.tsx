import React from 'react'
import { Blog, Hero } from './components/page'
import Activities from './components/Activities/page'
import PackagesSection from './components/PackagesSection/page'

export const MainHome = () => {
  return (
    <div>
      <Hero/>
      <Activities/>
      <PackagesSection/>
      <Blog/>
    </div>
  )
}

export default MainHome 
