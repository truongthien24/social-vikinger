import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { renderSocialIcon } from '../../../../../util/method/renderSocialIcon';
import { setLoading } from '../../../../../redux/action/homeAction';

const UserPreviewList = (props) => {

    // Props
    const {data} = props;

    const [searchParams] = useSearchParams();

    const id = searchParams.get('id');

    const jwt = JSON.parse(localStorage.getItem('jwt'))

    const dispatch = useDispatch();

    const navigate = useNavigate()

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
        <div className="user-preview landscape">
        
            <figure className="user-preview-cover liquid">
                <img src={data?.userBackground} alt="cover-04" style={{borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px'}}/>
            </figure>
            <div className="user-preview-info">
            
                <div className="user-short-description landscape tiny">
                    
                    <a className="user-short-description-avatar user-avatar small" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate({
                            pathname: "/profile-timeline",
                            search: `?id=${data?.id}`
                        })
                    }}>
                    
                        <div className="user-avatar-border">
                            
                            <div className="hexagon-50-56"></div>
                            
                        </div>
                        
                        <div className="user-avatar-content">
                            
                            <div className="hexagon-image-30-32" data-src={data?.userAvatar}></div>
                            
                        </div>
                        
                        <div className="user-avatar-progress">
                            
                            <div className="hexagon-progress-40-44"></div>
                            
                        </div>
                        
                        <div className="user-avatar-progress-border">
                            
                            <div className="hexagon-border-40-44"></div>
                            
                        </div>
                        
                    
                        
                        <div className="user-avatar-badge">
                            
                            <div className="user-avatar-badge-border">
                            
                                <div className="hexagon-22-24"></div>
                            
                            </div>
                            
                    
                            
                            <div className="user-avatar-badge-content">
                            
                                <div className="hexagon-dark-16-18"></div>
                            
                            </div>
                            
                    
                            
                            <p className="user-avatar-badge-text">{data?.userLevel}</p>
                            
                        </div>
                    
                    </a>
                    
            
                    
                    <p className="user-short-description-title"><a onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate({
                            pathname: "/profile-timeline",
                            search: `?id=${data?.id}`
                        })
                    }}>{data?.userName}</a></p>
                    
            
                    
                    <p className="user-short-description-text"><a href="#">{data?.userPath}</a></p>
                    
                </div>

                <div className="badge-list small">
                    
                    {
                        renderBadge()
                    }
                    
                    <a className="badge-item" href="profile-badges">
                    <img src="img/badge/blank-s.png" alt="badge-blank-s"/>
                    
                    <p className="badge-item-text">+29</p>
                    
                    </a>
                    
                </div>

                <div className="user-stats">
                    
                    <div className="user-stat">
                    
                        <p className="user-stat-title">{data?.userPreviewStats?.numberPost}</p>
                        <p className="user-stat-text">posts</p>
                    
                    </div>
                    <div className="user-stat">
                    
                        <p className="user-stat-title">{data?.userPreviewStats?.numberFriends}</p>
                        <p className="user-stat-text">friends</p>
                        
                    </div>
                    <div className="user-stat">
                    
                        <p className="user-stat-title">{data?.userPreviewStats?.numberVisited}</p>
                        <p className="user-stat-text">visits</p>
                    
                    </div>
                    
                </div>
                
                <div className="social-links small">
                    
                    {
                        renderSocial()
                    }
                    
                </div>

                <div className="user-preview-actions">

                    {
                        jwt != id
                        &&
                        <p className="button secondary">
                    
                            <svg className="button-icon icon-add-friend">
                                <use xlinkHref="#svg-add-friend"></use>
                            </svg>
                        
                        </p>
                    }
                    

                    
                    <p className="button primary">
                    
                        <svg className="button-icon icon-comment">
                            <use xlinkHref="#svg-comment"></use>
                        </svg>
                    
                    </p>
                    
                </div>
            
            </div>
            
        </div>
    )
}

export default UserPreviewList