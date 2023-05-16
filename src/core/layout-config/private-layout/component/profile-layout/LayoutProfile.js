import React from 'react'
import ProfileHeader from './component/profileHeader/ProfileHeader'
import ProfileNavigation from './component/profileNavigation/ProfileNavigation'

const LayoutProfile = ({ children }) => {
  return (
    <>
        
        <ProfileHeader/>
        
        <ProfileNavigation/>
        
        {children}

    </>
  )
}

export default LayoutProfile