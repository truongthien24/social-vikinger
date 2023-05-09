import React from 'react'
import ProfileHeader from '../profileHeader/ProfileHeader'
import ProfileNavigation from '../profileNavigation/ProfileNavigation'

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