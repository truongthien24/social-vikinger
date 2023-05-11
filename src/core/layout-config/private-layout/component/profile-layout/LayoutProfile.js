import React from 'react'
import ProfileHeader from './component/profileHeader/ProfileHeader'
import ProfileNavigation from './component/profileNavigation/ProfileNavigation'

const LayoutProfile = ({ children }) => {
  return (
    <div className="content-grid">
        
        <ProfileHeader/>
        
        <ProfileNavigation/>
        
        {children}

      </div>
  )
}

export default LayoutProfile