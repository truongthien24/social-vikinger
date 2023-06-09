import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getGroupByIDUser } from '../../../../../redux/action/groupAction';

const PostPreviewNormalGrid = (props) => {

    // Props
    const {data} = props;

    const profileId = JSON.parse(localStorage.getItem('profileId'));

    const navigate = useNavigate();

    // Return
    return (
        <div className="user-preview">
        
            <figure className="user-preview-cover liquid">
                <img src={data?.groupBackground} alt="cover-29"/>
            </figure>
            <div className="user-preview-info">
            
                <div className="tag-sticker">
                    
                    <svg className="tag-sticker-icon icon-public">
                        <use xlinkHref="#svg-public"></use>
                    </svg>
                    
                </div>
            
                <div className="user-short-description">
                    
                    <a className="user-short-description-avatar user-avatar medium no-stats" href={()=> {
                        navigate('/group-timeline')
                    }}>
                    
                        <div className="user-avatar-border">
                            
                            <div className="hexagon-120-130"></div>
                            
                        </div>
                    
                        <div className="user-avatar-content">
                            
                            <div className="hexagon-image-100-110" data-src={data?.groupAvatar}>
                            </div>
                            
                        </div>
                    
                    </a>
                    
                    <p className="user-short-description-title"><a href="group-timeline">{data?.groupName}</a></p>
                    
                    <p className="user-short-description-text">{data?.groupDescription}</p>
                    
                </div>

                <div className="user-stats">
                    
                    <div className="user-stat">
                    
                        <p className="user-stat-title">{data?.groupMember?.length}</p>
                        
                        <p className="user-stat-text">members</p>
                    
                    </div>
                    
                    <div className="user-stat">
                    
                        <p className="user-stat-title">{data?.groupPost?.length}</p>
                        
                        <p className="user-stat-text">posts</p>
                    
                    </div>
                    
                    <div className="user-stat">
                    
                        <p className="user-stat-title">{data?.groupVisited}</p>
                        
                        <p className="user-stat-text">visits</p>
                    
                    </div>
                    
                </div>
            
                <div className="user-avatar-list medium reverse centered">
                    
                    <div className="user-avatar smaller no-stats">
                    
                        <div className="user-avatar-border">
                            
                            <div className="hexagon-34-36"></div>
                            
                        </div>
                    
                        <div className="user-avatar-content">
                            
                            <div className="hexagon-image-30-32" data-src="img/avatar/03.jpg"></div>
                            
                        </div>
                    
                    </div>
                    
                    
                    <div className="user-avatar smaller no-stats">
                    
                        <div className="user-avatar-border">
                            
                            <div className="hexagon-34-36"></div>
                            
                        </div>
                    
                        <div className="user-avatar-content">
                            
                            <div className="hexagon-image-30-32" data-src="img/avatar/05.jpg"></div>
                            
                        </div>
                    
                    </div>
                    
                    <div className="user-avatar smaller no-stats">
                    
                        <div className="user-avatar-border">
                            
                            <div className="hexagon-34-36"></div>
                            
                        </div>
                    
                        <div className="user-avatar-content">
                            
                            <div className="hexagon-image-30-32" data-src="img/avatar/10.jpg"></div>
                            
                        </div>
                    
                    </div>
                    
                    <div className="user-avatar smaller no-stats">
                    
                        <div className="user-avatar-border">
                            
                            <div className="hexagon-34-36"></div>
                            
                        </div>
                    
                        <div className="user-avatar-content">
                            
                            <div className="hexagon-image-30-32" data-src="img/avatar/02.jpg"></div>
                            
                        </div>
                    
                    </div>
                    
                    <div className="user-avatar smaller no-stats">
                    
                        <div className="user-avatar-border">
                            
                            <div className="hexagon-34-36"></div>
                            
                        </div>
                    
                        <div className="user-avatar-content">
                            
                            <div className="hexagon-image-30-32" data-src="img/avatar/06.jpg"></div>
                            
                        </div>
                    
                    </div>
                    
                    
                    <a className="user-avatar smaller no-stats" href="group-members">
                    
                        <div className="user-avatar-border">
                            
                            <div className="hexagon-34-36"></div>
                            
                        </div>
                    
                        <div className="user-avatar-content">
                            
                            <div className="hexagon-image-30-32" data-src="img/avatar/23.jpg"></div>
                            
                        </div>
      
                        <div className="user-avatar-overlay">
                            
                            <div className="hexagon-overlay-30-32"></div>
                            
                        </div>
                    
                        <div className="user-avatar-overlay-content">
                            
                            <p className="user-avatar-overlay-content-text">+132</p>
                            
                        </div>
                    
                    </a>
                    
                </div>
            
                <div className="user-preview-actions">
                    
                    <p className="button secondary full">
                    
                        <svg className="button-icon icon-join-group">
                            <use xlinkHref="#svg-join-group"></use>
                        </svg>
                        
                        Join Group!
                    </p>
                    
                </div>
            
            </div>
        </div>
    )
}

export default PostPreviewNormalGrid