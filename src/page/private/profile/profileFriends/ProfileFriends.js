import React, { useEffect, useState } from 'react'
import { fakeData } from './helper'
import { useDispatch } from 'react-redux';
import { getProfileByID } from '../../../../redux/action/accountAction';
import ProfileFriendsNormal from './component/ProfileFriendsGridNormal';
import ProfileFriendGridSmall from './component/ProfileFriendGridSmall';
import { setLoading } from '../../../../redux/action/homeAction';
import ProfileFriendList from './component/ProfileFriendList';

const ProfileFriends = () => {

    const [profileInfo, setProfileInfo] = useState([]);
    const [grid, setGrid] = useState('normal-grid');
    
    const dispatch = useDispatch();

    const profileId = JSON.parse(localStorage.getItem('profileId'));

    // Effect
    useEffect(async()=> {
        const res = await dispatch(getProfileByID(profileId))
        setProfileInfo(res);
    },[profileId])

    useEffect(()=> {
        let script11 = document.createElement("script");
        let script16 = document.createElement("script");
        script16.src = "/js/content/content.js";
        script11.src = "/js/global/global.hexagons.js";
        script11.async = true;
        script16.async = true;
        document.body.appendChild(script11);
        document.body.appendChild(script16);
        setTimeout(()=> {
            dispatch(setLoading({
                status: 'done'
            }))
        }, 700)
    }, [grid])
    

    // Method
    const renderGrid = () => {
        if(grid === 'normal-grid')  {
            return <ProfileFriendsNormal
                data={fakeData}
            />
        } else if (grid === 'small-grid') {
            return <ProfileFriendGridSmall
                data={fakeData}
            />
        } else 
        return <ProfileFriendList
            data={fakeData}
        />
    }

    // Return
    return (
    <>
        <section className="section">
            <div className="section-header">
            
                <div className="section-header-info">
                    
                    <p className="section-pretitle">Browse Marina's</p>
                    
                    <h2 className="section-title">Friends <span className="highlighted">{profileInfo?.friends?.length}</span></h2>
                    
                </div>
            
            </div>
            <div className="section-filters-bar v1">
            
                <div className="section-filters-bar-actions">
                    
                    <form className="form">
                    
                        <div className="form-input small with-button">
                            <label htmlFor="friends-search">Search Friends</label>
                            <input type="text" id="friends-search" name="friends_search"/>
                            
                            <button className="button primary">
                            
                            <svg className="icon-magnifying-glass">
                                <use xlinkHref="#svg-magnifying-glass"></use>
                            </svg>
                            
                            </button>
                            
                        </div>
                    
                        <div className="form-select">
                            <label htmlFor="friends-filter-category">Filter By</label>
                            <select id="friends-filter-category" name="friends_filter_category">
                                <option value="0">Recently Active</option>
                                <option value="1">Newest Friends</option>
                                <option value="2">Alphabetical</option>
                            </select>
                            
                            <svg className="form-select-icon icon-small-arrow">
                                <use xlinkHref="#svg-small-arrow"></use>
                            </svg>
                        </div>
                    </form>
                    <div className="filter-tabs">
                        <div className="filter-tab active">
                            <p className="filter-tab-text">Recently Active</p>
                        </div>
                        <div className="filter-tab">
                            <p className="filter-tab-text">Newest Friends</p>
                        </div>
                        <div className="filter-tab">
                            <p className="filter-tab-text">Alphabetical</p>
                        </div>
                    </div>
                </div>
            <div className="section-filters-bar-actions">
                <div className="view-actions">
                    <a className={`view-action text-tooltip-tft-medium ${grid === 'normal-grid' ? 'active' : ''}`} onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        setGrid("normal-grid")
                    }} data-title="Big Grid">
                        <svg className="view-action-icon icon-big-grid-view">
                            <use xlinkHref="#svg-big-grid-view"></use>
                        </svg>
                    </a>
                    <a className={`view-action text-tooltip-tft-medium ${grid === 'small-grid' ? 'active' : ''}`} onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        setGrid("small-grid")
                    }} data-title="Small Grid">
                        <svg className="view-action-icon icon-small-grid-view">
                            <use xlinkHref="#svg-small-grid-view"></use>
                        </svg>
                    </a>
                    <a className={`view-action text-tooltip-tft-medium ${grid === 'list' ? 'active' : ''}`} onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        setGrid("list")
                    }} data-title="List">
                        <svg className="view-action-icon icon-list-grid-view">
                            <use xlinkHref="#svg-list-grid-view"></use>
                        </svg>
                    </a>
                </div>
            </div>
            </div>
            {
                renderGrid()
            }
            <div className="section-pager-bar">
            
                <div className="section-pager">
                    
                    <div className="section-pager-item active">
                    
                        <p className="section-pager-item-text">01</p>
                    
                    </div>
                    
                    <div className="section-pager-item">
                    
                        <p className="section-pager-item-text">02</p>
                    
                    </div>
            
                    <div className="section-pager-item">
                    
                        <p className="section-pager-item-text">03</p>
                    
                    </div>
                    
                    <div className="section-pager-item">
                    
                        <p className="section-pager-item-text">04</p>
                    
                    </div>
                    
                    <div className="section-pager-item">
                    
                        <p className="section-pager-item-text">05</p>
                    
                    </div>
                    
            
                    
                    <div className="section-pager-item">
                    
                        <p className="section-pager-item-text">06</p>
                    
                    </div>
                    
                </div>
                <div className="section-pager-controls">
                    
                    <div className="slider-control left disabled">
                    
                        <svg className="slider-control-icon icon-small-arrow">
                            <use xlinkHref="#svg-small-arrow"></use>
                        </svg>
                    
                    </div>
                    
                    <div className="slider-control right">
                    
                        <svg className="slider-control-icon icon-small-arrow">
                            <use xlinkHref="#svg-small-arrow"></use>
                        </svg>
                    
                    </div>
                    
                </div>
            
            </div>
        </section>
    </>
    )
}

export default ProfileFriends