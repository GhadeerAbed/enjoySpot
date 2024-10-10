import React from 'react'
import { Activities, Blog, Hero, Packages } from './components/page'

export const MainHome = () => {
  return (
    <div>
      <Hero/>
      <Activities/>
      <Packages />
      <Blog/>
      </div>
    
  )
}

export default MainHome 
