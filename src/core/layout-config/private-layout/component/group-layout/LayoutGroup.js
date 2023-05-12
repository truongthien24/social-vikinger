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
        <div class="content-grid">
            <div class="profile-header v2">
                <figure class="profile-header-cover liquid">
                    <img src="img/cover/29.jpg" alt="cover-29"/>
                </figure>

                <div class="profile-header-info">
                    <div class="user-short-description big">
                    <a class="user-short-description-avatar user-avatar big no-stats" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate({
                            pathname: '/group-timeline',
                            search: `?id=${'123'}`
                        })
                    }}>
                        <div class="user-avatar-border">
                        <div class="hexagon-148-164"></div>
                        </div>
                    
                        <div class="user-avatar-content">
                        <div class="hexagon-image-124-136" data-src="img/avatar/24.jpg"></div>
                        </div>
                    </a>

                    <a class="user-short-description-avatar user-short-description-avatar-mobile user-avatar medium no-stats" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate({
                            pathname: 'profile-timeline',
                            search: `?id=${'123'}`
                        })
                    }}>
                        <div class="user-avatar-border">
                        <div class="hexagon-120-130"></div>
                        </div>
                    
                        <div class="user-avatar-content">
                        <div class="hexagon-image-100-110" data-src="img/avatar/24.jpg"></div>
                        </div>
                    </a>
                
                    <p class="user-short-description-title"><a onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate({
                            pathname: 'profile-timeline',
                            search: `?id=${'123'}`
                        })
                    }}>Cosplayers of the World</a></p>
                
                    <p class="user-short-description-text">All cosplayers welcome!</p>
                    </div>

                    <div class="user-stats">
                    <div class="user-stat big">
                        <div class="user-stat-icon">
                        <svg class="icon-public">
                            <use xlinkHref="#svg-public"></use>
                        </svg>
                        </div>
                
                        <p class="user-stat-text">public</p>
                    </div>

                    <div class="user-stat big">
                        <p class="user-stat-title">139</p>
                
                        <p class="user-stat-text">members</p>
                    </div>
                
                    <div class="user-stat big">
                        <p class="user-stat-title">105</p>
                
                        <p class="user-stat-text">posts</p>
                    </div>
                
                    <div class="user-stat big">
                        <p class="user-stat-title">7.3k</p>
                
                        <p class="user-stat-text">visits</p>
                    </div>
                    </div>

                    <div class="tag-sticker">
                    <svg class="tag-sticker-icon icon-public">
                        <use xlinkHref="#svg-public"></use>
                    </svg>
                    </div>

                    <div class="profile-header-info-actions">
                    <p class="profile-header-info-action button secondary">
                        <svg class="icon-join-group">
                        <use xlinkHref="#svg-join-group"></use>
                        </svg>
                    </p>
                    
                    <a class="profile-header-info-action button" href="hub-group-management">
                        <svg class="icon-more-dots">
                        <use xlinkHref="#svg-more-dots"></use>
                        </svg>
                    </a>
                    </div>
                </div>
            </div>
            <GroupNavigation/>
            {children}
        </div>
        <PopupEvent/>
    </>
  )
}

export default LayoutGroup