import React, { useEffect, useState } from 'react'
import { fakeData } from './helper'
import { useDispatch } from 'react-redux';
import { getProfileByID } from '../../../../redux/action/accountAction';
import { setLoading } from '../../../../redux/action/homeAction';
import ProfileGroupsNormalGrid from './component/ProfileGroupsNormalGrid';
import { getGroupByIDUser } from '../../../../redux/action/groupAction';
import ProfileGroupsSmallGrid from './component/ProfileGroupsSmallGrid';
import ProfileGroupsList from './component/ProfileGroupList';

const ProfileGroups = () => {

    const [profileInfo, setProfileInfo] = useState([]);
    const [grid, setGrid] = useState('normal-grid');
    
    const dispatch = useDispatch();

    const profileId = JSON.parse(localStorage.getItem('profileId'));

    // Effect
    useEffect(async()=> {
        const res = await dispatch(getGroupByIDUser(profileId));
        setProfileInfo(res);
    },[profileId])

    useEffect(()=> {
        setTimeout(()=> {
            dispatch(setLoading({
                status: 'done'
            }))
        }, 700)
    }, [grid])


    // Method
    const renderGrid = () => {
        if(grid === 'normal-grid')  {
            return <ProfileGroupsNormalGrid
                data={profileInfo}
            />
        } else if (grid === 'small-grid') {
            return <ProfileGroupsSmallGrid
                data={profileInfo}
            />
        } else 
        return <ProfileGroupsList
            data={profileInfo}
        />
    }

    // Return
    return (
    <>
        <section className="section">
            <div className="section-header">
            
                <div className="section-header-info">
                    
                    <p className="section-pretitle">Browse Marina's</p>
                    
                    <h2 className="section-title">Groups <span className="highlighted">{profileInfo?.friends?.group}</span></h2>
                    
                </div>
            
            </div>
            <div className="section-filters-bar v1">
            
                <div className="section-filters-bar-actions">
                    
                    <form className="form">
                    
                        <div className="form-input small with-button">
                            <label htmlFor="groups-search">Search Groups</label>
                            <input type="text" id="groups-search" name="groups_search"/>
                            <button className="button primary">
                                <svg className="icon-magnifying-glass">
                                    <use xlinkHref="#svg-magnifying-glass"></use>
                                </svg>
                            </button>
                            
                        </div>
                    
                        <div className="form-select">
                            <label htmlFor="groups-filter-category">Filter By</label>
                            <select id="groups-filter-category" name="groups_filter_category">
                                <option value="0">Newly Created</option>
                                <option value="1">Most Members</option>
                                <option value="2">Alphabetical</option>
                            </select>
                            <svg className="form-select-icon icon-small-arrow">
                                <use xlinkHref="#svg-small-arrow"></use>
                            </svg>
                        </div>
                    </form>
                    <div className="filter-tabs">
                        <div className="filter-tab active">
                            <p className="filter-tab-text">Newly Created</p>
                        </div>
                        <div className="filter-tab">
                            <p className="filter-tab-text">Post Members</p>
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
        </section>
    </>
    )
}

export default ProfileGroups