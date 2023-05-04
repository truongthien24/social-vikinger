import React from 'react'
import UserPreviewGridSmall from './UserPreviewGridSmall';

const ProfileFriendGridSmall = (props) => {

    // Props
    const {data} = props;

    // Method
    const renderUserPreview = () => {
        return data?.map((item, index) => {
            return <UserPreviewGridSmall data={item} key={index}/>
        })
    }

    // Return
    return (
        <div className="grid grid-3-3-3-3 centered">
            {
                renderUserPreview()
            }
        </div>
    )
}

export default ProfileFriendGridSmall