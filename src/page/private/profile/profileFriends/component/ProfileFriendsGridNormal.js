import React from 'react'
import UserPreviewGridNormal from './UserPreviewGridNormal';

const ProfileFriendsNormal = (props) => {

    // Props
    const {data} = props;

    // Method
    const renderUserPreview = () => {
      return data?.map((item, index) => {
          return <UserPreviewGridNormal data={item} key={index}/>
      })
    }

    // Return
    return (
      <div className="grid grid-4-4-4 centered">
        {
          renderUserPreview()
        }
    </div>
  )
}

export default ProfileFriendsNormal