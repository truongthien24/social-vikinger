import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { setLoading } from '../../../../../redux/action/homeAction';
import GroupNavigation from './component/GroupNavigation';
import PopupEvent from './component/PopupEvent';

const LayoutGroup = ({children}) => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');

  return (
    <>
        <>
            <div className="profile-header v2">
                <figure className="profile-header-cover liquid">
                    <img src="img/cover/29.jpg" alt="cover-29"/>
                </figure>

                <div className="profile-header-info">
                    <div className="user-short-description big">
                    <a className="user-short-description-avatar user-avatar big no-stats" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate({
                            pathname: '/group-timeline',
                            search: `?id=${'123'}`
                        })
                    }}>
                        <div className="user-avatar-border">
                        <div className="hexagon-148-164"></div>
                        </div>
                    
                        <div className="user-avatar-content">
                        <div className="hexagon-image-124-136" data-src="img/avatar/24.jpg"></div>
                        </div>
                    </a>

                    <a className="user-short-description-avatar user-short-description-avatar-mobile user-avatar medium no-stats" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate({
                            pathname: 'profile-timeline',
                            search: `?id=${'123'}`
                        })
                    }}>
                        <div className="user-avatar-border">
                        <div className="hexagon-120-130"></div>
                        </div>
                    
                        <div className="user-avatar-content">
                        <div className="hexagon-image-100-110" data-src="img/avatar/24.jpg"></div>
                        </div>
                    </a>
                
                    <p className="user-short-description-title"><a onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate({
                            pathname: 'profile-timeline',
                            search: `?id=${'123'}`
                        })
                    }}>Cosplayers of the World</a></p>
                
                    <p className="user-short-description-text">All cosplayers welcome!</p>
                    </div>

                    <div className="user-stats">
                    <div className="user-stat big">
                        <div className="user-stat-icon">
                        <svg className="icon-public">
                            <use xlinkHref="#svg-public"></use>
                        </svg>
                        </div>
                
                        <p className="user-stat-text">public</p>
                    </div>

                    <div className="user-stat big">
                        <p className="user-stat-title">139</p>
                
                        <p className="user-stat-text">members</p>
                    </div>
                
                    <div className="user-stat big">
                        <p className="user-stat-title">105</p>
                
                        <p className="user-stat-text">posts</p>
                    </div>
                
                    <div className="user-stat big">
                        <p className="user-stat-title">7.3k</p>
                
                        <p className="user-stat-text">visits</p>
                    </div>
                    </div>

                    <div className="tag-sticker">
                    <svg className="tag-sticker-icon icon-public">
                        <use xlinkHref="#svg-public"></use>
                    </svg>
                    </div>

                    <div className="profile-header-info-actions">
                    <p className="profile-header-info-action button secondary">
                        <svg className="icon-join-group">
                        <use xlinkHref="#svg-join-group"></use>
                        </svg>
                    </p>
                    
                    <a className="profile-header-info-action button" href="hub-group-management">
                        <svg className="icon-more-dots">
                        <use xlinkHref="#svg-more-dots"></use>
                        </svg>
                    </a>
                    </div>
                </div>
            </div>
            <GroupNavigation/>
            {children}
        </>
        <PopupEvent/>
    </>
  )
}

export default LayoutGroup