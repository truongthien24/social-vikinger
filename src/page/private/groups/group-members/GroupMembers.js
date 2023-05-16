import React from 'react'

const GroupMembers = () => {
  return (
    <>
        <div className="section-filters-bar v1">
            <div className="section-filters-bar-actions">
            <form className="form">
                <div className="form-input small with-button">
                <label for="members-search">Search Members</label>
                <input type="text" id="members-search" name="members_search"/>
                <button className="button secondary">
                    <svg className="icon-magnifying-glass">
                    <use xlinkHref="#svg-magnifying-glass"></use>
                    </svg>
                </button>
                </div>
        
                <div className="form-select">
                <label for="members-filter-category">Filter By</label>
                <select id="members-filter-category" name="members_filter_category">
                    <option value="0">Recently Active</option>
                    <option value="1">Newest Members</option>
                    <option value="2">Alphabetical</option>
                </select>
                <svg className="form-select-icon icon-small-arrow">
                    <use xlinkHref="#svg-small-arrow"></use>
                </svg>
                </div>
            </form>
        
            <div className="filter-tabs">
                <div className="filter-tab secondary active">
                <p className="filter-tab-text">Recently Active</p>
                </div>
        
                <div className="filter-tab secondary">
                <p className="filter-tab-text">Newest Members</p>
                </div>
        
                <div className="filter-tab secondary">
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
                <img src="img/cover/04.jpg" alt="cover-04"/>
            </figure>
        
            <div className="user-preview-info">
                <div className="user-short-description">
                <a className="user-short-description-avatar user-avatar medium" href="profile-timeline">
                    <div className="user-avatar-border">
                    <div className="hexagon-120-132"></div>
                    </div>
                
                    <div className="user-avatar-content">
                    <div className="hexagon-image-82-90" data-src="img/avatar/05.jpg"></div>
                    </div>
                
                    <div className="user-avatar-progress">
                    <div className="hexagon-progress-100-110"></div>
                    </div>
                
                    <div className="user-avatar-progress-border">
                    <div className="hexagon-border-100-110"></div>
                    </div>
                
                    <div className="user-avatar-badge">
                    <div className="user-avatar-badge-border">
                        <div className="hexagon-32-36"></div>
                    </div>
                
                    <div className="user-avatar-badge-content">
                        <div className="hexagon-dark-26-28"></div>
                    </div>
                
                    <p className="user-avatar-badge-text">12</p>
                    </div>
                </a>
            
                <p className="user-short-description-title"><a href="profile-timeline">NekoBebop</a></p>
            
                <p className="user-short-description-text"><a href="#">www.store.com/nekoprints</a></p>
                </div>
            
                <div className="badge-list small">
                <div className="badge-item">
                    <img src="img/badge/silver-s.png" alt="badge-silver-s"/>
                </div>
            
                <div className="badge-item">
                    <img src="img/badge/fcultivator-s.png" alt="badge-fcultivator-s"/>
                </div>
            
                <div className="badge-item">
                    <img src="img/badge/scientist-s.png" alt="badge-scientist-s"/>
                </div>
            
                <div className="badge-item">
                    <img src="img/badge/rmachine-s.png" alt="badge-rmachine-s"/>
                </div>
            
                <a className="badge-item" href="profile-badges">
                    <img src="img/badge/blank-s.png" alt="badge-blank-s"/>
                    <p className="badge-item-text">+29</p>
                </a>
                </div>
        
                <div id="user-preview-stats-slides-01" className="user-preview-stats-slides">
                <div className="user-preview-stats-slide">
                    <div className="user-stats">
                    <div className="user-stat">
                        <p className="user-stat-title">874</p>
                
                        <p className="user-stat-text">posts</p>
                    </div>
                
                    <div className="user-stat">
                        <p className="user-stat-title">60</p>
                
                        <p className="user-stat-text">friends</p>
                    </div>
                
                    <div className="user-stat">
                        <p className="user-stat-title">3.9k</p>
                
                        <p className="user-stat-text">visits</p>
                    </div>
                    </div>
                </div>
            
                <div className="user-preview-stats-slide">
                    <p className="user-preview-text">Hello! I'm James Hart, but I go by the name of Destroy Dex on my stream channel. Come to check out the latest gaming news!</p>
                </div>
                </div>
        
                <div id="user-preview-stats-roster-01" className="user-preview-stats-roster slider-roster">
                <div className="slider-roster-item"></div>
        
                <div className="slider-roster-item"></div>
                </div>
        
                <div className="social-links small">
                <a className="social-link small twitter" href="#">
                    <svg className="social-link-icon icon-twitter">
                    <use xlinkHref="#svg-twitter"></use>
                    </svg>
                </a>

                <a className="social-link small instagram" href="#">
                    <svg className="social-link-icon icon-instagram">
                    <use xlinkHref="#svg-instagram"></use>
                    </svg>
                </a>

                <a className="social-link small twitch" href="#">
                    <svg className="social-link-icon icon-twitch">
                    <use xlinkHref="#svg-twitch"></use>
                    </svg>
                </a>

                <a className="social-link small discord" href="#">
                    <svg className="social-link-icon icon-discord">
                    <use xlinkHref="#svg-discord"></use>
                    </svg>
                </a>
                </div>
        
                <div className="user-preview-actions">
                <p className="button secondary">Add Friend +</p>
        
                <p className="button primary">Send Message</p>
                </div>
            </div>
            </div>
        </div>
        <div className="section-pager-bar">
            <div className="section-pager secondary">
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
    </>
  )
}

export default GroupMembers