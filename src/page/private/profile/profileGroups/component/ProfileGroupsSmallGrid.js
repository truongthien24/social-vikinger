import React from 'react'
import PostPreviewSmallGrid from './PostPreviewSmallGrid';

const ProfileGroupsSmallGrid = (props) => {
    // Props
    const {data} = props;

    // Method
    const renderPost = () => {
        return data?.map((post, index)=> {
            return <PostPreviewSmallGrid
                data={post}
                key={index}
            />
        })
    }

    // Return
    return (
        <div className="grid grid-3-3-3-3 centered">
            {
                renderPost()
            }
        </div>
    )
}

export default ProfileGroupsSmallGrid