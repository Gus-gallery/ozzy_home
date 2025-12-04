import React from 'react'
import NavHome from '../components/NavHome'
import LandingBG from '../components/LandingBG'

const Landingpage = () => {
  return (
    <div>
        <NavHome />
        <LandingBG />
        <div className="w-full overflow-hidden absolute md:-mt-2 md:-py-4 px-6 md:opacity-80">
          
        </div>
    </div>
  )
}

export default Landingpage