import React from 'react'
import { useSearchParams } from 'react-router-dom';
import ProfileHeader from './component/profileHeader/ProfileHeader'
import ProfileNavigation from './component/profileNavigation/ProfileNavigation'

const LayoutProfile = ({ children }) => {

  const [searchParams] = useSearchParams();

  const id = searchParams.get('id');

  return (
    <div className="content-grid">

      {
        id 
        ?
        <>

          <ProfileHeader/>
        
          <ProfileNavigation/>
          
          {children}

        </>
        :
        <></>
      }
        
      </div>
  )
}

export default LayoutProfile