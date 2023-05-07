import React from 'react'
import PostPreviewList from './PostPreviewList';
import PostPreviewSmallGrid from './PostPreviewSmallGrid';

const ProfileGroupsList = (props) => {
    // Props
    const {data} = props;

    // Method
    const renderPost = () => {
        return data?.map((post, index)=> {
            return <PostPreviewList
                data={post}
                key={index}
            />
        })
    }

    // Return
    return (
        <div className="grid">
            {
                renderPost()
            }
        </div>
    )
}

export default ProfileGroupsList