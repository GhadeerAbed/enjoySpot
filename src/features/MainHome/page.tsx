import React from 'react'
import { Hero, PackagesSection } from './components/page'
import Activities from './components/Activities/page'

export const MainHome = () => {
  return (
    <div>
      <Hero/>
      <Activities/>
      <PackagesSection />
    </div>
  )
}

export default MainHome 
