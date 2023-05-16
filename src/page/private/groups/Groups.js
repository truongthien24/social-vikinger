import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { setLoading } from '../../../redux/action/homeAction'

const Groups = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

  return (
    <>
        <div className="section-banner">
        <img className="section-banner-icon" src="img/banner/groups-icon.png" alt="groups-icon"/>
    
        <p className="section-banner-title">Groups (7)</p>
    
        <p className="section-banner-text">Browse all the groups of the community!</p>
        </div>

        <div className="section-filters-bar v1">
        <div className="section-filters-bar-actions">
            <form className="form">
            <div className="form-input small with-button">
                <label for="groups-search">Search Groups</label>
                <input type="text" id="groups-search" name="groups_search"/>
                <button className="button primary">
                <svg className="icon-magnifying-glass">
                    <use xlinkHref="#svg-magnifying-glass"></use>
                </svg>
                </button>
            </div>
    
            <div className="form-select">
                <label for="groups-filter-category">Filter By</label>
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
                <p className="filter-tab-text">Most Members</p>
            </div>
    
            <div className="filter-tab">
                <p className="filter-tab-text">Alphabetical</p>
            </div>
            </div>
        </div>
    
        <div className="section-filters-bar-actions">
            <div className="view-actions">
            <div className="view-action text-tooltip-tft-medium active" data-title="Big Grid">
                <svg className="view-action-icon icon-big-grid-view">
                <use xlinkHref="#svg-big-grid-view"></use>
                </svg>
            </div>
    
            <div className="view-action text-tooltip-tft-medium" data-title="Small Grid">
                <svg className="view-action-icon icon-small-grid-view">
                <use xlinkHref="#svg-small-grid-view"></use>
                </svg>
            </div>
    
            <div className="view-action text-tooltip-tft-medium" data-title="List">
                <svg className="view-action-icon icon-list-grid-view">
                <use xlinkHref="#svg-list-grid-view"></use>
                </svg>
            </div>
            </div>
        </div>
        </div>

        <div className="grid grid-4-4-4 centered">
        <div className="user-preview">
            <figure className="user-preview-cover liquid">
            <img src="img/cover/29.jpg" alt="cover-29"/>
            </figure>
        
            <div className="user-preview-info">
            <div className="tag-sticker">
                <svg className="tag-sticker-icon icon-public">
                <use xlinkHref="#svg-public"></use>
                </svg>
            </div>
        
            <div className="user-short-description">
                <a className="user-short-description-avatar user-avatar medium no-stats" onClick={()=> {
                    dispatch(setLoading({
                        status: 'isLoading'
                    }));
                    navigate({
                        pathname: '/group-timeline',
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
        
                <p className="user-short-description-title"><a onClick={()=> {
                    dispatch(setLoading({
                        status: 'isLoading'
                    }));
                    navigate({
                        pathname: '/group-timeline',
                    search: `?id=${'123'}`})
                }}>Cosplayers of the World</a></p>
        
                <p className="user-short-description-text">All cosplayers welcome!</p>
            </div>
        
            <div className="user-stats">
                <div className="user-stat">
                <p className="user-stat-title">139</p>
        
                <p className="user-stat-text">members</p>
                </div>
        
                <div className="user-stat">
                <p className="user-stat-title">105</p>
        
                <p className="user-stat-text">posts</p>
                </div>
        
                <div className="user-stat">
                <p className="user-stat-title">7.3k</p>
        
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

        <div className="user-preview">
            <figure className="user-preview-cover liquid">
            <img src="img/cover/08.jpg" alt="cover-08"/>
            </figure>
        
            <div className="user-preview-info">
            <div className="tag-sticker">
                <svg className="tag-sticker-icon icon-private">
                <use xlinkHref="#svg-private"></use>
                </svg>
            </div>
        
            <div className="user-short-description">
                <a className="user-short-description-avatar user-avatar medium no-stats" onClick={()=> {
                    dispatch(setLoading({
                        status: 'isLoading'
                    }));
                    navigate({
                        pathname: '/group-timeline',
                    search: `?id=${'123'}`})
                }}>
                <div className="user-avatar-border">
                    <div className="hexagon-120-130"></div>
                </div>
        
                <div className="user-avatar-content">
                    <div className="hexagon-image-100-110" data-src="img/avatar/29.jpg"></div>
                </div>
                </a>
        
                <p className="user-short-description-title"><a onClick={()=> {
                    dispatch(setLoading({
                        status: 'isLoading'
                    }));
                    navigate({
                        pathname: '/group-timeline',
                    search: `?id=${'123'}`})
                }}>Twitch Streamers</a></p>
        
                <p className="user-short-description-text">Twitch gaming streamers group</p>
            </div>
        
            <div className="user-stats">
                <div className="user-stat">
                <p className="user-stat-title">265</p>
        
                <p className="user-stat-text">members</p>
                </div>
        
                <div className="user-stat">
                <p className="user-stat-title">168</p>
        
                <p className="user-stat-text">posts</p>
                </div>
        
                <div className="user-stat">
                <p className="user-stat-title">11.2k</p>
        
                <p className="user-stat-text">visits</p>
                </div>
            </div>
        
            <div className="user-avatar-list medium reverse centered">
                <div className="user-avatar smaller no-stats">
                <div className="user-avatar-border">
                    <div className="hexagon-34-36"></div>
                </div>
            
                <div className="user-avatar-content">
                    <div className="hexagon-image-30-32" data-src="img/avatar/07.jpg"></div>
                </div>
                </div>
                
                <div className="user-avatar smaller no-stats">
                <div className="user-avatar-border">
                    <div className="hexagon-34-36"></div>
                </div>
            
                <div className="user-avatar-content">
                    <div className="hexagon-image-30-32" data-src="img/avatar/13.jpg"></div>
                </div>
                </div>
        
                <div className="user-avatar smaller no-stats">
                <div className="user-avatar-border">
                    <div className="hexagon-34-36"></div>
                </div>
            
                <div className="user-avatar-content">
                    <div className="hexagon-image-30-32" data-src="img/avatar/08.jpg"></div>
                </div>
                </div>
        
                <div className="user-avatar smaller no-stats">
                <div className="user-avatar-border">
                    <div className="hexagon-34-36"></div>
                </div>
            
                <div className="user-avatar-content">
                    <div className="hexagon-image-30-32" data-src="img/avatar/16.jpg"></div>
                </div>
                </div>
        
                <div className="user-avatar smaller no-stats">
                <div className="user-avatar-border">
                    <div className="hexagon-34-36"></div>
                </div>
            
                <div className="user-avatar-content">
                    <div className="hexagon-image-30-32" data-src="img/avatar/23.jpg"></div>
                </div>
                </div>
        
                <a className="user-avatar smaller no-stats" href="group-members">
                <div className="user-avatar-border">
                    <div className="hexagon-34-36"></div>
                </div>
            
                <div className="user-avatar-content">
                    <div className="hexagon-image-30-32" data-src="img/avatar/11.jpg"></div>
                </div>
            
                <div className="user-avatar-overlay">
                    <div className="hexagon-overlay-30-32"></div>
                </div>
            
                <div className="user-avatar-overlay-content">
                    <p className="user-avatar-overlay-content-text">+260</p>
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

        <div className="user-preview">
            <figure className="user-preview-cover liquid">
            <img src="img/cover/27.jpg" alt="cover-27"/>
            </figure>
        
            <div className="user-preview-info">
            <div className="tag-sticker">
                <svg className="tag-sticker-icon icon-public">
                <use xlinkHref="#svg-public"></use>
                </svg>
            </div>
        
            <div className="user-short-description">
                <a className="user-short-description-avatar user-avatar medium no-stats" onClick={()=> {
                    dispatch(setLoading({
                        status: 'isLoading'
                    }));
                    navigate({
                        pathname: '/group-timeline',
                    search: `?id=${'123'}`})
                }}>
                <div className="user-avatar-border">
                    <div className="hexagon-120-130"></div>
                </div>
        
                <div className="user-avatar-content">
                    <div className="hexagon-image-100-110" data-src="img/avatar/25.jpg"></div>
                </div>
                </a>
        
                <p className="user-short-description-title"><a onClick={()=> {
                    dispatch(setLoading({
                        status: 'isLoading'
                    }));
                    navigate({
                        pathname: '/group-timeline',
                    search: `?id=${'123'}`})
                }}>Stream Designers</a></p>
        
                <p className="user-short-description-text">Designers Assemble!</p>
            </div>
        
            <div className="user-stats">
                <div className="user-stat">
                <p className="user-stat-title">466</p>
        
                <p className="user-stat-text">members</p>
                </div>
        
                <div className="user-stat">
                <p className="user-stat-title">205</p>
        
                <p className="user-stat-text">posts</p>
                </div>
        
                <div className="user-stat">
                <p className="user-stat-title">7.9k</p>
        
                <p className="user-stat-text">visits</p>
                </div>
            </div>
        
            <div className="user-avatar-list medium reverse centered">
                <div className="user-avatar smaller no-stats">
                <div className="user-avatar-border">
                    <div className="hexagon-34-36"></div>
                </div>
            
                <div className="user-avatar-content">
                    <div className="hexagon-image-30-32" data-src="img/avatar/12.jpg"></div>
                </div>
                </div>
                
                <div className="user-avatar smaller no-stats">
                <div className="user-avatar-border">
                    <div className="hexagon-34-36"></div>
                </div>
            
                <div className="user-avatar-content">
                    <div className="hexagon-image-30-32" data-src="img/avatar/15.jpg"></div>
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
                    <div className="hexagon-image-30-32" data-src="img/avatar/09.jpg"></div>
                </div>
                </div>
        
                <div className="user-avatar smaller no-stats">
                <div className="user-avatar-border">
                    <div className="hexagon-34-36"></div>
                </div>
            
                <div className="user-avatar-content">
                    <div className="hexagon-image-30-32" data-src="img/avatar/07.jpg"></div>
                </div>
                </div>
        
                <a className="user-avatar smaller no-stats" href="group-members">
                <div className="user-avatar-border">
                    <div className="hexagon-34-36"></div>
                </div>
            
                <div className="user-avatar-content">
                    <div className="hexagon-image-30-32" data-src="img/avatar/13.jpg"></div>
                </div>
            
                <div className="user-avatar-overlay">
                    <div className="hexagon-overlay-30-32"></div>
                </div>
            
                <div className="user-avatar-overlay-content">
                    <p className="user-avatar-overlay-content-text">+461</p>
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

        <div className="user-preview">
            <figure className="user-preview-cover liquid">
            <img src="img/cover/48.jpg" alt="cover-48"/>
            </figure>
        
            <div className="user-preview-info">
            <div className="tag-sticker">
                <svg className="tag-sticker-icon icon-public">
                <use xlinkHref="#svg-public"></use>
                </svg>
            </div>
        
            <div className="user-short-description">
                <a className="user-short-description-avatar user-avatar medium no-stats" onClick={()=> {
                    dispatch(setLoading({
                        status: 'isLoading'
                    }));
                    navigate({
                        pathname: '/group-timeline',
                    search: `?id=${'123'}`})
                }}>
                <div className="user-avatar-border">
                    <div className="hexagon-120-130"></div>
                </div>
        
                <div className="user-avatar-content">
                    <div className="hexagon-image-100-110" data-src="img/avatar/28.jpg"></div>
                </div>
                </a>
        
                <p className="user-short-description-title"><a onClick={()=> {
                    dispatch(setLoading({
                        status: 'isLoading'
                    }));
                    navigate({
                        pathname: '/group-timeline',
                    search: `?id=${'123'}`})
                }}>Street Artists</a></p>
        
                <p className="user-short-description-text">Sharing the art!</p>
            </div>
        
            <div className="user-stats">
                <div className="user-stat">
                <p className="user-stat-title">951</p>
        
                <p className="user-stat-text">members</p>
                </div>
        
                <div className="user-stat">
                <p className="user-stat-title">408</p>
        
                <p className="user-stat-text">posts</p>
                </div>
        
                <div className="user-stat">
                <p className="user-stat-title">9.2k</p>
        
                <p className="user-stat-text">visits</p>
                </div>
            </div>
        
            <div className="user-avatar-list medium reverse centered">
                <div className="user-avatar smaller no-stats">
                <div className="user-avatar-border">
                    <div className="hexagon-34-36"></div>
                </div>
            
                <div className="user-avatar-content">
                    <div className="hexagon-image-30-32" data-src="img/avatar/09.jpg"></div>
                </div>
                </div>
                
                <div className="user-avatar smaller no-stats">
                <div className="user-avatar-border">
                    <div className="hexagon-34-36"></div>
                </div>
            
                <div className="user-avatar-content">
                    <div className="hexagon-image-30-32" data-src="img/avatar/12.jpg"></div>
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
                    <div className="hexagon-image-30-32" data-src="img/avatar/15.jpg"></div>
                </div>
                </div>
        
                <div className="user-avatar smaller no-stats">
                <div className="user-avatar-border">
                    <div className="hexagon-34-36"></div>
                </div>
            
                <div className="user-avatar-content">
                    <div className="hexagon-image-30-32" data-src="img/avatar/08.jpg"></div>
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
                    <p className="user-avatar-overlay-content-text">+946</p>
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

        <div className="user-preview">
            <figure className="user-preview-cover liquid">
            <img src="img/cover/05.jpg" alt="cover-05"/>
            </figure>
        
            <div className="user-preview-info">
            <div className="tag-sticker">
                <svg className="tag-sticker-icon icon-public">
                <use xlinkHref="#svg-public"></use>
                </svg>
            </div>
        
            <div className="user-short-description">
                <a className="user-short-description-avatar user-avatar medium no-stats" onClick={()=> {
                    dispatch(setLoading({
                        status: 'isLoading'
                    }));
                    navigate({
                        pathname: '/group-timeline',
                    search: `?id=${'123'}`})
                }}>
                <div className="user-avatar-border">
                    <div className="hexagon-120-130"></div>
                </div>
        
                <div className="user-avatar-content">
                    <div className="hexagon-image-100-110" data-src="img/avatar/27.jpg"></div>
                </div>
                </a>
        
                <p className="user-short-description-title"><a onClick={()=> {
                    dispatch(setLoading({
                        status: 'isLoading'
                    }));
                    navigate({
                        pathname: '/group-timeline',
                    search: `?id=${'123'}`})
                }}>Gaming Watchtower</a></p>
        
                <p className="user-short-description-text">News, releases and more!</p>
            </div>
        
            <div className="user-stats">
                <div className="user-stat">
                <p className="user-stat-title">2.365</p>
        
                <p className="user-stat-text">members</p>
                </div>
        
                <div className="user-stat">
                <p className="user-stat-title">618</p>
        
                <p className="user-stat-text">posts</p>
                </div>
        
                <div className="user-stat">
                <p className="user-stat-title">14.2k</p>
        
                <p className="user-stat-text">visits</p>
                </div>
            </div>
        
            <div className="user-avatar-list medium reverse centered">
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
                    <div className="hexagon-image-30-32" data-src="img/avatar/07.jpg"></div>
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
                    <div className="hexagon-image-30-32" data-src="img/avatar/11.jpg"></div>
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
        
                <a className="user-avatar smaller no-stats" href="group-members">
                <div className="user-avatar-border">
                    <div className="hexagon-34-36"></div>
                </div>
            
                <div className="user-avatar-content">
                    <div className="hexagon-image-30-32" data-src="img/avatar/16.jpg"></div>
                </div>
            
                <div className="user-avatar-overlay">
                    <div className="hexagon-overlay-30-32"></div>
                </div>
            
                <div className="user-avatar-overlay-content">
                    <p className="user-avatar-overlay-content-text">+2.3k</p>
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

        <div className="user-preview">
            <figure className="user-preview-cover liquid">
            <img src="img/cover/41.jpg" alt="cover-41"/>
            </figure>
        
            <div className="user-preview-info">
            <div className="tag-sticker">
                <svg className="tag-sticker-icon icon-public">
                <use xlinkHref="#svg-public"></use>
                </svg>
            </div>
        
            <div className="user-short-description">
                <a className="user-short-description-avatar user-avatar medium no-stats" onClick={()=> {
                    dispatch(setLoading({
                        status: 'isLoading'
                    }));
                    navigate({
                        pathname: '/group-timeline',
                    search: `?id=${'123'}`})
                }}>
                <div className="user-avatar-border">
                    <div className="hexagon-120-130"></div>
                </div>
        
                <div className="user-avatar-content">
                    <div className="hexagon-image-100-110" data-src="img/avatar/26.jpg"></div>
                </div>
                </a>
        
                <p className="user-short-description-title"><a onClick={()=> {
                    dispatch(setLoading({
                        status: 'isLoading'
                    }));
                    navigate({
                        pathname: '/group-timeline',
                    search: `?id=${'123'}`})
                }}>Retro Arcade</a></p>
        
                <p className="user-short-description-text">All related to old games</p>
            </div>
        
            <div className="user-stats">
                <div className="user-stat">
                <p className="user-stat-title">307</p>
        
                <p className="user-stat-text">members</p>
                </div>
        
                <div className="user-stat">
                <p className="user-stat-title">558</p>
        
                <p className="user-stat-text">posts</p>
                </div>
        
                <div className="user-stat">
                <p className="user-stat-title">7.3k</p>
        
                <p className="user-stat-text">visits</p>
                </div>
            </div>
        
            <div className="user-avatar-list medium reverse centered">
                <div className="user-avatar smaller no-stats">
                <div className="user-avatar-border">
                    <div className="hexagon-34-36"></div>
                </div>
            
                <div className="user-avatar-content">
                    <div className="hexagon-image-30-32" data-src="img/avatar/23.jpg"></div>
                </div>
                </div>
                
                <div className="user-avatar smaller no-stats">
                <div className="user-avatar-border">
                    <div className="hexagon-34-36"></div>
                </div>
            
                <div className="user-avatar-content">
                    <div className="hexagon-image-30-32" data-src="img/avatar/16.jpg"></div>
                </div>
                </div>
        
                <div className="user-avatar smaller no-stats">
                <div className="user-avatar-border">
                    <div className="hexagon-34-36"></div>
                </div>
            
                <div className="user-avatar-content">
                    <div className="hexagon-image-30-32" data-src="img/avatar/09.jpg"></div>
                </div>
                </div>
        
                <div className="user-avatar smaller no-stats">
                <div className="user-avatar-border">
                    <div className="hexagon-34-36"></div>
                </div>
            
                <div className="user-avatar-content">
                    <div className="hexagon-image-30-32" data-src="img/avatar/12.jpg"></div>
                </div>
                </div>
        
                <div className="user-avatar smaller no-stats">
                <div className="user-avatar-border">
                    <div className="hexagon-34-36"></div>
                </div>
            
                <div className="user-avatar-content">
                    <div className="hexagon-image-30-32" data-src="img/avatar/08.jpg"></div>
                </div>
                </div>
        
                <a className="user-avatar smaller no-stats" href="group-members">
                <div className="user-avatar-border">
                    <div className="hexagon-34-36"></div>
                </div>
            
                <div className="user-avatar-content">
                    <div className="hexagon-image-30-32" data-src="img/avatar/15.jpg"></div>
                </div>
            
                <div className="user-avatar-overlay">
                    <div className="hexagon-overlay-30-32"></div>
                </div>
            
                <div className="user-avatar-overlay-content">
                    <p className="user-avatar-overlay-content-text">+302</p>
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

        <div className="user-preview">
            <figure className="user-preview-cover liquid">
            <img src="img/cover/46.jpg" alt="cover-46"/>
            </figure>
        
            <div className="user-preview-info">
            <div className="tag-sticker">
                <svg className="tag-sticker-icon icon-public">
                <use xlinkHref="#svg-public"></use>
                </svg>
            </div>
        
            <div className="user-short-description">
                <a className="user-short-description-avatar user-avatar medium no-stats" onClick={()=> {
                    dispatch(setLoading({
                        status: 'isLoading'
                    }));
                    navigate({
                        pathname: '/group-timeline',
                    search: `?id=${'123'}`})
                }}>
                <div className="user-avatar-border">
                    <div className="hexagon-120-130"></div>
                </div>
        
                <div className="user-avatar-content">
                    <div className="hexagon-image-100-110" data-src="img/avatar/30.jpg"></div>
                </div>
                </a>
        
                <p className="user-short-description-title"><a onClick={()=> {
                    dispatch(setLoading({
                        status: 'isLoading'
                    }));
                    navigate({
                        pathname: '/group-timeline',
                    search: `?id=${'123'}`})
                }}>Living in Japan</a></p>
        
                <p className="user-short-description-text">Share your experiences abroad!</p>
            </div>
        
            <div className="user-stats">
                <div className="user-stat">
                <p className="user-stat-title">66</p>
        
                <p className="user-stat-text">members</p>
                </div>
        
                <div className="user-stat">
                <p className="user-stat-title">101</p>
        
                <p className="user-stat-text">posts</p>
                </div>
        
                <div className="user-stat">
                <p className="user-stat-title">2.4k</p>
        
                <p className="user-stat-text">visits</p>
                </div>
            </div>
        
            <div className="user-avatar-list medium reverse centered">
                <div className="user-avatar smaller no-stats">
                <div className="user-avatar-border">
                    <div className="hexagon-34-36"></div>
                </div>
            
                <div className="user-avatar-content">
                    <div className="hexagon-image-30-32" data-src="img/avatar/13.jpg"></div>
                </div>
                </div>
                
                <div className="user-avatar smaller no-stats">
                <div className="user-avatar-border">
                    <div className="hexagon-34-36"></div>
                </div>
            
                <div className="user-avatar-content">
                    <div className="hexagon-image-30-32" data-src="img/avatar/15.jpg"></div>
                </div>
                </div>
        
                <div className="user-avatar smaller no-stats">
                <div className="user-avatar-border">
                    <div className="hexagon-34-36"></div>
                </div>
            
                <div className="user-avatar-content">
                    <div className="hexagon-image-30-32" data-src="img/avatar/07.jpg"></div>
                </div>
                </div>
        
                <div className="user-avatar smaller no-stats">
                <div className="user-avatar-border">
                    <div className="hexagon-34-36"></div>
                </div>
            
                <div className="user-avatar-content">
                    <div className="hexagon-image-30-32" data-src="img/avatar/16.jpg"></div>
                </div>
                </div>
        
                <div className="user-avatar smaller no-stats">
                <div className="user-avatar-border">
                    <div className="hexagon-34-36"></div>
                </div>
            
                <div className="user-avatar-content">
                    <div className="hexagon-image-30-32" data-src="img/avatar/11.jpg"></div>
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
                    <p className="user-avatar-overlay-content-text">+61</p>
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
        </div>
    </>
  )
}

export default Groups