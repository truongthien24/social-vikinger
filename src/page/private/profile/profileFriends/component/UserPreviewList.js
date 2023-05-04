import React from 'react'
import { useNavigate } from 'react-router-dom';
import { renderSocialIcon } from '../../../../../util/method/renderSocialIcon';

const UserPreviewList = (props) => {

    // Props
    const {data} = props;

    const navigate = useNavigate();

        // Method
        const renderBadge = () => {
            return data?.badgeList?.map((badge, index)=> {
                if(index < 4) {
                    return <div className="badge-item" key={index}>
                        <img src={badge?.img} alt={badge?.name}/>
                    </div>
                }
            })
        }
    
        const renderSocial = () => {
            return data?.userSocial?.map((social, index) => {
                return <a key={index} className={`social-link small ${social?.name}`} href={social?.path}>
                    {renderSocialIcon(social)}
                </a>
            })
        }

    // Return
    return (
        <div class="user-preview landscape">
        
            <figure class="user-preview-cover liquid">
                <img src={data?.userBackground} alt="cover-04" style={{borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px'}}/>
            </figure>
            <div class="user-preview-info">
            
                <div class="user-short-description landscape tiny">
                    
                    <a class="user-short-description-avatar user-avatar small" onClick={()=> {
                        localStorage.setItem('profileId', JSON.stringify(data?.id));
                        navigate('/profile-timeline')
                    }}>
                    
                        <div class="user-avatar-border">
                            
                            <div class="hexagon-50-56"></div>
                            
                        </div>
                        
                        <div class="user-avatar-content">
                            
                            <div class="hexagon-image-30-32" data-src={data?.userAvatar}></div>
                            
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
                            
                    
                            
                            <p class="user-avatar-badge-text">{data?.userLevel}</p>
                            
                        </div>
                    
                    </a>
                    
            
                    
                    <p class="user-short-description-title"><a href="profile-timeline.html">{data?.userName}</a></p>
                    
            
                    
                    <p class="user-short-description-text"><a href="#">{data?.userPath}</a></p>
                    
                </div>

                <div class="badge-list small">
                    
                    {
                        renderBadge()
                    }
                    
                    <a class="badge-item" href="profile-badges.html">
                    <img src="img/badge/blank-s.png" alt="badge-blank-s"/>
                    
                    <p class="badge-item-text">+29</p>
                    
                    </a>
                    
                </div>

                <div class="user-stats">
                    
                    <div class="user-stat">
                    
                        <p class="user-stat-title">{data?.userPreviewStats?.numberPost}</p>
                        <p class="user-stat-text">posts</p>
                    
                    </div>
                    <div class="user-stat">
                    
                        <p class="user-stat-title">{data?.userPreviewStats?.numberFriends}</p>
                        <p class="user-stat-text">friends</p>
                        
                    </div>
                    <div class="user-stat">
                    
                        <p class="user-stat-title">{data?.userPreviewStats?.numberVisited}</p>
                        <p class="user-stat-text">visits</p>
                    
                    </div>
                    
                </div>
                
                <div class="social-links small">
                    
                    {
                        renderSocial()
                    }
                    
                </div>

                <div class="user-preview-actions">
                    
                    <p class="button secondary">
                    
                    <svg class="button-icon icon-add-friend">
                        <use xlinkHref="#svg-add-friend"></use>
                    </svg>
                    
                    </p>
                    
                    <p class="button primary">
                    
                    <svg class="button-icon icon-comment">
                        <use xlinkHref="#svg-comment"></use>
                    </svg>
                    
                    </p>
                    
                </div>
            
            </div>
            
        </div>
    )
}

export default UserPreviewList