import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getProfileByID } from '../../../../redux/action/accountAction';
import Tag from '../../../../share/component/tag/Tag';

const Post = (props) => {
    // Props
    const {data} = props;

    // State
    const [userInfo, setUserInfo] = useState();

    const dispatch = useDispatch();

    useEffect(async()=> {
        // Get info user of post
        const res = await dispatch(getProfileByID(data?.postIDPost));
        if(res) {
            setUserInfo(res);
        }
    }, [data])

    // Method
    const renderTagList = () => {
        return data?.postTag?.map((tag, index) => {
            return <Tag data={tag}/>
        })
    }

    // Return
    return (
        <div class="widget-box no-padding">
            <div class="widget-box-settings">
                <div class="post-settings-wrap">
                    <div class="post-settings widget-box-post-settings-dropdown-trigger">
                        <svg class="post-settings-icon icon-more-dots">
                        <use xlinkHref="#svg-more-dots"></use>
                        </svg>
                    </div>

                    <div class="simple-dropdown widget-box-post-settings-dropdown">
                        <p class="simple-dropdown-link">Edit Post</p>

                        <p class="simple-dropdown-link">Delete Post</p>

                        <p class="simple-dropdown-link">Make it Featured</p>

                        <p class="simple-dropdown-link">Report Post</p>

                        <p class="simple-dropdown-link">Report Author</p>
                    </div>
                </div>
            </div>
            
            <div class="widget-box-status">
                <div class="widget-box-status-content">
                    <div class="user-status">
                        <a class="user-status-avatar" href="profile-timeline">
                        <div class="user-avatar small no-outline">
                            <div class="user-avatar-content">
                                <div class="hexagon-image-30-32" data-src={userInfo?.userAvatar}></div>
                            </div>
                        
                            <div class="user-avatar-progress">
                                <div class="hexagon-progress-40-44"></div>
                            </div>
                        
                            <div class="user-avatar-progress-border">
                                <div class="hexagon-border-40-44"></div>
                            </div>
                        
                            <div class="user-avatar-badge">
                                <div class="user-avatar-badge-border">
                                    <div class="hexagon-22-24"></div>
                                </div>
                        
                                <div class="user-avatar-badge-content">
                                    <div class="hexagon-dark-16-18"></div>
                                </div>
                            
                                <p class="user-avatar-badge-text">{userInfo?.userLevel}</p>
                            </div>
                        </div>
                        </a>
                    
                        <p class="user-status-title medium">
                            <a class="bold" href="profile-timeline">
                                {userInfo?.userName}
                            </a> 
                            uploaded a 
                            <span class="bold">video</span>
                        </p>
                    
                        <p class="user-status-text small">{data?.createdAt}</p>
                    </div>

                    <p class="widget-box-status-text">{data?.postContentText}</p>
                </div>

                {
                    data?.postContentVideo
                    &&
                    <div class="iframe-wrap">
                        <iframe src="https://www.youtube.com/embed/rk-wIgg9fNk" allowfullscreen></iframe>
                    </div>
                }

                <div class="widget-box-status-content">
                    <div class="tag-list">
                        {
                            renderTagList()
                        }

                    </div>

                    <div class="content-actions">
                        <div class="content-action">
                            <div class="meta-line">
                                <div class="meta-line-list reaction-item-list">
                                <div class="reaction-item">
                                    <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/love.png" alt="reaction-love"/>
                        
                                    <div class="simple-dropdown padded reaction-item-dropdown">
                                        <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/love.png" alt="reaction-love"/> <span class="bold">Love</span></p>
                                        
                                        <p class="simple-dropdown-text">Matt Parker</p>

                                        <p class="simple-dropdown-text">Destroy Dex</p>

                                        <p class="simple-dropdown-text">The Green Goo</p>
                                    </div>
                                </div>

                                <div class="reaction-item">
                                    <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/happy.png" alt="reaction-happy"/>
                        
                                    <div class="simple-dropdown padded reaction-item-dropdown">
                                        <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/happy.png" alt="reaction-happy"/> <span class="bold">Happy</span></p>
                                        
                                        <p class="simple-dropdown-text">Sandra Strange</p>

                                        <p class="simple-dropdown-text">Jane Rodgers</p>
                                    </div>
                                </div>

                                <div class="reaction-item">
                                    <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/like.png" alt="reaction-like"/>
                        
                                    <div class="simple-dropdown padded reaction-item-dropdown">
                                        <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/like.png" alt="reaction-like"/> <span class="bold">Like</span></p>
                                    
                                        <p class="simple-dropdown-text">Neko Bebop</p>

                                        <p class="simple-dropdown-text">Nick Grissom</p>

                                        <p class="simple-dropdown-text">Sarah Diamond</p>

                                        <p class="simple-dropdown-text">Jett Spiegel</p>

                                        <p class="simple-dropdown-text">Marcus Jhonson</p>

                                        <p class="simple-dropdown-text"><span class="bold">and 6 more...</span></p>
                                    </div>
                                </div>
                                </div>
                        
                                <p class="meta-line-text">16</p>
                            </div>
                    
                            <div class="meta-line">
                                <div class="meta-line-list user-avatar-list">
                                <div class="user-avatar micro no-stats">
                                    <div class="user-avatar-border">
                                    <div class="hexagon-22-24"></div>
                                    </div>
                                
                                    <div class="user-avatar-content">
                                    <div class="hexagon-image-18-20" data-src="img/avatar/07.jpg"></div>
                                    </div>
                                </div>
                        
                                <div class="user-avatar micro no-stats">
                                    <div class="user-avatar-border">
                                    <div class="hexagon-22-24"></div>
                                    </div>
                                
                                    <div class="user-avatar-content">
                                    <div class="hexagon-image-18-20" data-src="img/avatar/13.jpg"></div>
                                    </div>
                                </div>
                        
                                <div class="user-avatar micro no-stats">
                                    <div class="user-avatar-border">
                                    <div class="hexagon-22-24"></div>
                                    </div>
                                
                                    <div class="user-avatar-content">
                                    <div class="hexagon-image-18-20" data-src="img/avatar/22.jpg"></div>
                                    </div>
                                </div>
                        
                                <div class="user-avatar micro no-stats">
                                    <div class="user-avatar-border">
                                    <div class="hexagon-22-24"></div>
                                    </div>
                                
                                    <div class="user-avatar-content">
                                    <div class="hexagon-image-18-20" data-src="img/avatar/10.jpg"></div>
                                    </div>
                                </div>
                        
                                <div class="user-avatar micro no-stats">
                                    <div class="user-avatar-border">
                                    <div class="hexagon-22-24"></div>
                                    </div>
                                
                                    <div class="user-avatar-content">
                                    <div class="hexagon-image-18-20" data-src="img/avatar/08.jpg"></div>
                                    </div>
                                </div>
                                </div>
                        
                                <p class="meta-line-text">19 Participants</p>
                            </div>
                        </div>
                    
                        <div class="content-action">
                            <div class="meta-line">
                                <p class="meta-line-link">
                                    {data?.postComment.length} 
                                    {
                                        data?.postComment.length > 0
                                        ?
                                        Comments
                                        :
                                        Comment
                                    }
                                </p>
                            </div>
                    
                            <div class="meta-line">
                                <p class="meta-line-text">
                                    {data?.postShare.length} 
                                    {
                                        data?.postShare.length > 0
                                        ?
                                        Shares
                                        :
                                        Share
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="post-options">
                <div class="post-option-wrap">
                <div class="post-option reaction-options-dropdown-trigger">
                    <svg class="post-option-icon icon-thumbs-up">
                    <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>

                    <p class="post-option-text">React!</p>
                </div>

                <div class="reaction-options reaction-options-dropdown">
                    <div class="reaction-option text-tooltip-tft" data-title="Like">
                    <img class="reaction-option-image" src="img/reaction/like.png" alt="reaction-like"/>
                    </div>

                    <div class="reaction-option text-tooltip-tft" data-title="Love">
                    <img class="reaction-option-image" src="img/reaction/love.png" alt="reaction-love"/>
                    </div>

                    <div class="reaction-option text-tooltip-tft" data-title="Dislike">
                    <img class="reaction-option-image" src="img/reaction/dislike.png" alt="reaction-dislike"/>
                    </div>

                    <div class="reaction-option text-tooltip-tft" data-title="Happy">
                    <img class="reaction-option-image" src="img/reaction/happy.png" alt="reaction-happy"/>
                    </div>

                    <div class="reaction-option text-tooltip-tft" data-title="Funny">
                    <img class="reaction-option-image" src="img/reaction/funny.png" alt="reaction-funny"/>
                    </div>

                    <div class="reaction-option text-tooltip-tft" data-title="Wow">
                    <img class="reaction-option-image" src="img/reaction/wow.png" alt="reaction-wow"/>
                    </div>

                    <div class="reaction-option text-tooltip-tft" data-title="Angry">
                    <img class="reaction-option-image" src="img/reaction/angry.png" alt="reaction-angry"/>
                    </div>

                    <div class="reaction-option text-tooltip-tft" data-title="Sad">
                    <img class="reaction-option-image" src="img/reaction/sad.png" alt="reaction-sad"/>
                    </div>
                </div>
                </div>

                <div class="post-option">
                <svg class="post-option-icon icon-comment">
                    <use xlinkHref="#svg-comment"></use>
                </svg>

                <p class="post-option-text">Comment</p>
                </div>

                <div class="post-option">
                <svg class="post-option-icon icon-share">
                    <use xlinkHref="#svg-share"></use>
                </svg>

                <p class="post-option-text">Share</p>
                </div>
            </div>
        </div>
    )
}

export default Post