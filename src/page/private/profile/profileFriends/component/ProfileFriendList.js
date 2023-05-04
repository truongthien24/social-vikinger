import React from 'react'
import UserPreviewList from './UserPreviewList';

const ProfileFriendList = (props) => {

    // Props
    const {data} = props;

    // Method
    const renderUserPreview = () => {
      return data?.map((item, index) => {
          return <UserPreviewList data={item} key={index}/>
      })
    }

    // Return
    return (
        <div className="grid">
            {
            renderUserPreview()
            }
        </div>
    )
}

export default ProfileFriendList