import React from 'react'

const GroupMembers = () => {
  return (
    <>
        <div class="section-filters-bar v1">
            <div class="section-filters-bar-actions">
            <form class="form">
                <div class="form-input small with-button">
                <label for="members-search">Search Members</label>
                <input type="text" id="members-search" name="members_search"/>
                <button class="button secondary">
                    <svg class="icon-magnifying-glass">
                    <use xlinkHref="#svg-magnifying-glass"></use>
                    </svg>
                </button>
                </div>
        
                <div class="form-select">
                <label for="members-filter-category">Filter By</label>
                <select id="members-filter-category" name="members_filter_category">
                    <option value="0">Recently Active</option>
                    <option value="1">Newest Members</option>
                    <option value="2">Alphabetical</option>
                </select>
                <svg class="form-select-icon icon-small-arrow">
                    <use xlinkHref="#svg-small-arrow"></use>
                </svg>
                </div>
            </form>
        
            <div class="filter-tabs">
                <div class="filter-tab secondary active">
                <p class="filter-tab-text">Recently Active</p>
                </div>
        
                <div class="filter-tab secondary">
                <p class="filter-tab-text">Newest Members</p>
                </div>
        
                <div class="filter-tab secondary">
                <p class="filter-tab-text">Alphabetical</p>
                </div>
            </div>
            </div>
    
            <div class="section-filters-bar-actions">
            <div class="view-actions">
                <div class="view-action text-tooltip-tft-medium active" data-title="Big Grid">
                <svg class="view-action-icon icon-big-grid-view">
                    <use xlinkHref="#svg-big-grid-view"></use>
                </svg>
                </div>
        
                <div class="view-action text-tooltip-tft-medium" data-title="Small Grid">
                <svg class="view-action-icon icon-small-grid-view">
                    <use xlinkHref="#svg-small-grid-view"></use>
                </svg>
                </div>
        
                <div class="view-action text-tooltip-tft-medium" data-title="List">
                <svg class="view-action-icon icon-list-grid-view">
                    <use xlinkHref="#svg-list-grid-view"></use>
                </svg>
                </div>
            </div>
            </div>
        </div>
        <div class="grid grid-4-4-4 centered">
            <div class="user-preview">
            <figure class="user-preview-cover liquid">
                <img src="img/cover/04.jpg" alt="cover-04"/>
            </figure>
        
            <div class="user-preview-info">
                <div class="user-short-description">
                <a class="user-short-description-avatar user-avatar medium" href="profile-timeline.html">
                    <div class="user-avatar-border">
                    <div class="hexagon-120-132"></div>
                    </div>
                
                    <div class="user-avatar-content">
                    <div class="hexagon-image-82-90" data-src="img/avatar/05.jpg"></div>
                    </div>
                
                    <div class="user-avatar-progress">
                    <div class="hexagon-progress-100-110"></div>
                    </div>
                
                    <div class="user-avatar-progress-border">
                    <div class="hexagon-border-100-110"></div>
                    </div>
                
                    <div class="user-avatar-badge">
                    <div class="user-avatar-badge-border">
                        <div class="hexagon-32-36"></div>
                    </div>
                
                    <div class="user-avatar-badge-content">
                        <div class="hexagon-dark-26-28"></div>
                    </div>
                
                    <p class="user-avatar-badge-text">12</p>
                    </div>
                </a>
            
                <p class="user-short-description-title"><a href="profile-timeline.html">NekoBebop</a></p>
            
                <p class="user-short-description-text"><a href="#">www.store.com/nekoprints</a></p>
                </div>
            
                <div class="badge-list small">
                <div class="badge-item">
                    <img src="img/badge/silver-s.png" alt="badge-silver-s"/>
                </div>
            
                <div class="badge-item">
                    <img src="img/badge/fcultivator-s.png" alt="badge-fcultivator-s"/>
                </div>
            
                <div class="badge-item">
                    <img src="img/badge/scientist-s.png" alt="badge-scientist-s"/>
                </div>
            
                <div class="badge-item">
                    <img src="img/badge/rmachine-s.png" alt="badge-rmachine-s"/>
                </div>
            
                <a class="badge-item" href="profile-badges.html">
                    <img src="img/badge/blank-s.png" alt="badge-blank-s"/>
                    <p class="badge-item-text">+29</p>
                </a>
                </div>
        
                <div id="user-preview-stats-slides-01" class="user-preview-stats-slides">
                <div class="user-preview-stats-slide">
                    <div class="user-stats">
                    <div class="user-stat">
                        <p class="user-stat-title">874</p>
                
                        <p class="user-stat-text">posts</p>
                    </div>
                
                    <div class="user-stat">
                        <p class="user-stat-title">60</p>
                
                        <p class="user-stat-text">friends</p>
                    </div>
                
                    <div class="user-stat">
                        <p class="user-stat-title">3.9k</p>
                
                        <p class="user-stat-text">visits</p>
                    </div>
                    </div>
                </div>
            
                <div class="user-preview-stats-slide">
                    <p class="user-preview-text">Hello! I'm James Hart, but I go by the name of Destroy Dex on my stream channel. Come to check out the latest gaming news!</p>
                </div>
                </div>
        
                <div id="user-preview-stats-roster-01" class="user-preview-stats-roster slider-roster">
                <div class="slider-roster-item"></div>
        
                <div class="slider-roster-item"></div>
                </div>
        
                <div class="social-links small">
                <a class="social-link small twitter" href="#">
                    <svg class="social-link-icon icon-twitter">
                    <use xlinkHref="#svg-twitter"></use>
                    </svg>
                </a>

                <a class="social-link small instagram" href="#">
                    <svg class="social-link-icon icon-instagram">
                    <use xlinkHref="#svg-instagram"></use>
                    </svg>
                </a>

                <a class="social-link small twitch" href="#">
                    <svg class="social-link-icon icon-twitch">
                    <use xlinkHref="#svg-twitch"></use>
                    </svg>
                </a>

                <a class="social-link small discord" href="#">
                    <svg class="social-link-icon icon-discord">
                    <use xlinkHref="#svg-discord"></use>
                    </svg>
                </a>
                </div>
        
                <div class="user-preview-actions">
                <p class="button secondary">Add Friend +</p>
        
                <p class="button primary">Send Message</p>
                </div>
            </div>
            </div>
        </div>
        <div class="section-pager-bar">
            <div class="section-pager secondary">
            <div class="section-pager-item active">
                <p class="section-pager-item-text">01</p>
            </div>
        
            <div class="section-pager-item">
                <p class="section-pager-item-text">02</p>
            </div>
        
            <div class="section-pager-item">
                <p class="section-pager-item-text">03</p>
            </div>
        
            <div class="section-pager-item">
                <p class="section-pager-item-text">04</p>
            </div>
        
            <div class="section-pager-item">
                <p class="section-pager-item-text">05</p>
            </div>
        
            <div class="section-pager-item">
                <p class="section-pager-item-text">06</p>
            </div>
            </div>
    
            <div class="section-pager-controls">
            <div class="slider-control left disabled">
                <svg class="slider-control-icon icon-small-arrow">
                <use xlinkHref="#svg-small-arrow"></use>
                </svg>
            </div>
        
            <div class="slider-control right">
                <svg class="slider-control-icon icon-small-arrow">
                <use xlinkHref="#svg-small-arrow"></use>
                </svg>
            </div>
            </div>
      </div>
    </>
  )
}

export default GroupMembers