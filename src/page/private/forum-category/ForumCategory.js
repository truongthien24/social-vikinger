import React from 'react'

const ForumCategory = () => {
    return (
        <>
            <div className="section-banner">
            <img className="section-banner-icon" src="img/banner/forums-icon.png" alt="forums-icon"/>
        
            <p className="section-banner-title">Forums</p>
        
            <p className="section-banner-text">Talk about anything! Gaming, music, comics and more!</p>
            </div>

            <div className="section-header">
            <div className="section-header-info">
                <p className="section-pretitle">Welcome to</p>
        
                <h2 className="section-title">Animation Watchtower</h2>
            </div>
            </div>

            <div className="section-filters-bar v7">
            <div className="section-filters-bar-actions">
                <div className="section-filters-bar-info">
                <p className="section-filters-bar-title"><a href="forums">Forums</a><span className="separator"></span><a href="forums-category">Animation Watchtower</a></p>
        
                <div className="section-filters-bar-text small-space">
                    Last post by
                    <a className="user-avatar micro no-stats" href="profile-timeline">
                    <div className="user-avatar-border">
                        <div className="hexagon-22-24"></div>
                    </div>
                
                    <div className="user-avatar-content">
                        <div className="hexagon-image-18-20" data-src="img/avatar/03.jpg"></div>
                    </div>
                    </a>
                    <a className="bold" href="profile-timeline">Nick Grissom</a>
                    2 minutes ago
                </div>
                </div>
            </div>
        
            <div className="section-filters-bar-actions">
                <form className="form">
                <div className="form-item split">
                    <div className="form-input small">
                    <label for="forum-search">Search Forums</label>
                    <input type="text" id="forum-search" name="forum_search"/>
                    </div>
        
                    <button className="button primary">
                    <svg className="icon-magnifying-glass">
                        <use xlinkHref="#svg-magnifying-glass"></use>
                    </svg>
                    </button>
                </div>
                </form>
        
                <p className="button secondary">+ Create Discussion</p>
            </div>
            </div>

            <div className="table table-forum-category">
            <div className="table-header">
                <div className="table-header-column">
                <p className="table-header-title">Category</p>
                </div>
        
                <div className="table-header-column centered padded-medium">
                <p className="table-header-title">Topics</p>
                </div>
        
                <div className="table-header-column centered padded-medium">
                <p className="table-header-title">Posts</p>
                </div>
        
                <div className="table-header-column padded-big-left">
                <p className="table-header-title">Recent Topics</p>
                </div>
            </div>
        
            <div className="table-body">
                <div className="table-row big">
                <div className="table-column">
                    <div className="forum-category">
                    <a href="forums-category">
                        <img className="forum-category-image" src="img/forum/category/07.png" alt="category-07"/>
                    </a>
        
                    <div className="forum-category-info">
                        <p className="forum-category-title"><a href="forums-category">Comics</a></p>
        
                        <p className="forum-category-text">A place for the community to talk and chat about whatever they want!</p>
                    </div>
                    </div>
                </div>
        
                <div className="table-column centered padded-medium">
                    <p className="table-title">44</p>
                </div>
        
                <div className="table-column centered padded-medium">
                    <p className="table-title">236</p>
                </div>
        
                <div className="table-column padded-big-left">
                    <a className="table-link" href="forums-discussion">Bebop Publishing will release a limited edition of "Justice"</a>
        
                    <a className="table-link" href="forums-discussion">This is the first image of the new "Multiverse" movie!</a>
        
                    <a className="table-link" href="forums-discussion">What actor do you think should play the new Captain?</a>
                </div>
                </div>
        
                <div className="table-row big">
                <div className="table-column">
                    <div className="forum-category">
                    <a href="forums-category">
                        <img className="forum-category-image" src="img/forum/category/08.png" alt="category-08"/>
                    </a>
        
                    <div className="forum-category-info">
                        <p className="forum-category-title"><a href="forums-category">Anime &amp; Manga</a></p>
        
                        <p className="forum-category-text">Everything about the gaming world! News, reviews, upcoming games and more!</p>
                    </div>
                    </div>
                </div>
        
                <div className="table-column centered padded-medium">
                    <p className="table-title">23</p>
                </div>
        
                <div className="table-column centered padded-medium">
                    <p className="table-title">109</p>
                </div>
        
                <div className="table-column padded-big-left">
                    <a className="table-link" href="forums-discussion">Come and discuss that new "Power X" transformation</a>
        
                    <a className="table-link" href="forums-discussion">Hunter's manga chapter 526 will release in December</a>
        
                    <a className="table-link" href="forums-discussion">A new animation studio will take over after this month</a>
                </div>
                </div>
            </div>
            </div>
    
            <div className="table table-forum-discussion">
            <div className="table-header">
                <div className="table-header-column">
                <p className="table-header-title">Discussion</p>
                </div>
        
                <div className="table-header-column centered padded-medium">
                <p className="table-header-title">Voices</p>
                </div>
        
                <div className="table-header-column centered padded-medium">
                <p className="table-header-title">Replies</p>
                </div>
        
                <div className="table-header-column padded-big-left">
                <p className="table-header-title">Activity</p>
                </div>
            </div>
        
            <div className="table-body">
                <div className="table-row mid">
                <div className="table-column">
                    <div className="discussion-preview pinned">
                    <a className="discussion-preview-title" href="forums-discussion">Let's discuss the current state of the Comics Cinematic Universe</a>
        
                    <div className="page-items">
                        <a className="page-item" href="forums-discussion">01</a>
        
                        <a className="page-item" href="forums-discussion">02</a>
        
                        <a className="page-item" href="forums-discussion">03</a>
        
                        <p className="page-item void">...</p>
        
                        <a className="page-item" href="forums-discussion">44</a>
        
                        <a className="page-item" href="forums-discussion">45</a>
        
                        <a className="page-item" href="forums-discussion">46</a>
                    </div>
        
                    <div className="discussion-preview-meta">
                        <p className="discussion-preview-meta-text">Started by</p>
        
                        <a className="user-avatar micro no-border" href="profile-timeline">
                        <div className="user-avatar-content">
                            <div className="hexagon-image-18-20" data-src="img/avatar/07.jpg"></div>
                        </div>
                        </a>
        
                        <p className="discussion-preview-meta-text"><a href="profile-timeline">Sarah Diamond</a> 2 months ago</p>
                    </div>
                    </div>
                </div>
        
                <div className="table-column centered padded-medium">
                    <p className="table-title">398</p>
                </div>
        
                <div className="table-column centered padded-medium">
                    <p className="table-title">941</p>
                </div>
        
                <div className="table-column padded-big-left">
                    <div className="user-status">
                    <a className="user-status-avatar" href="profile-timeline">
                        <div className="user-avatar small no-outline">
                        <div className="user-avatar-content">
                            <div className="hexagon-image-30-32" data-src="img/avatar/05.jpg"></div>
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
                    
                            <p className="user-avatar-badge-text">12</p>
                        </div>
                        </div>
                    </a>
                
                    <p className="user-status-title"><a className="bold" href="profile-timeline">Neko Bebop</a></p>
                
                    <p className="user-status-text small">1 hour, 36 minutes ago</p>
                    </div>
                </div>
                </div>
        
                <div className="table-row medium">
                <div className="table-column">
                    <div className="discussion-preview">
                    <a className="discussion-preview-title" href="forums-discussion">Bebop Publishing will release a limited edition of "Justice"</a>
        
                    <div className="discussion-preview-meta">
                        <p className="discussion-preview-meta-text">Started by</p>
        
                        <a className="user-avatar micro no-border" href="profile-timeline">
                        <div className="user-avatar-content">
                            <div className="hexagon-image-18-20" data-src="img/avatar/04.jpg"></div>
                        </div>
                        </a>
        
                        <p className="discussion-preview-meta-text"><a href="profile-timeline">Bearded Wonder</a> 5 hours ago</p>
                    </div>
                    </div>
                </div>
        
                <div className="table-column centered padded-medium">
                    <p className="table-title">19</p>
                </div>
        
                <div className="table-column centered padded-medium">
                    <p className="table-title">24</p>
                </div>
        
                <div className="table-column padded-big-left">
                    <div className="user-status">
                    <a className="user-status-avatar" href="profile-timeline">
                        <div className="user-avatar small no-outline">
                        <div className="user-avatar-content">
                            <div className="hexagon-image-30-32" data-src="img/avatar/03.jpg"></div>
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
                    
                            <p className="user-avatar-badge-text">16</p>
                        </div>
                        </div>
                    </a>
                
                    <p className="user-status-title"><a className="bold" href="profile-timeline">Nick Grissom</a></p>
                
                    <p className="user-status-text small">2 minutes ago</p>
                    </div>
                </div>
                </div>

                <div className="table-row medium">
                <div className="table-column">
                    <div className="discussion-preview">
                    <a className="discussion-preview-title" href="forums-discussion">Come and discuss that new "Power X" transformation</a>
        
                    <div className="discussion-preview-meta">
                        <p className="discussion-preview-meta-text">Started by</p>
        
                        <a className="user-avatar micro no-border" href="profile-timeline">
                        <div className="user-avatar-content">
                            <div className="hexagon-image-18-20" data-src="img/avatar/13.jpg"></div>
                        </div>
                        </a>
        
                        <p className="discussion-preview-meta-text"><a href="profile-timeline">Crimson Thunder</a> 1 hour ago</p>
                    </div>
                    </div>
                </div>
        
                <div className="table-column centered padded-medium">
                    <p className="table-title">8</p>
                </div>
        
                <div className="table-column centered padded-medium">
                    <p className="table-title">11</p>
                </div>
        
                <div className="table-column padded-big-left">
                    <div className="user-status">
                    <a className="user-status-avatar" href="profile-timeline">
                        <div className="user-avatar small no-outline">
                        <div className="user-avatar-content">
                            <div className="hexagon-image-30-32" data-src="img/avatar/01.jpg"></div>
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
                    
                            <p className="user-avatar-badge-text">24</p>
                        </div>
                        </div>
                    </a>
                
                    <p className="user-status-title"><a className="bold" href="profile-timeline">Marina Valentine</a></p>
                
                    <p className="user-status-text small">31 minutes ago</p>
                    </div>
                </div>
                </div>

                <div className="table-row medium">
                <div className="table-column">
                    <div className="discussion-preview">
                    <a className="discussion-preview-title" href="forums-discussion">This is the first image of the new "Multiverse" movie!</a>
        
                    <div className="discussion-preview-meta">
                        <p className="discussion-preview-meta-text">Started by</p>
        
                        <a className="user-avatar micro no-border" href="profile-timeline">
                        <div className="user-avatar-content">
                            <div className="hexagon-image-18-20" data-src="img/avatar/03.jpg"></div>
                        </div>
                        </a>
        
                        <p className="discussion-preview-meta-text"><a href="profile-timeline">Nick Grissom</a> 14 hours ago</p>
                    </div>
                    </div>
                </div>
        
                <div className="table-column centered padded-medium">
                    <p className="table-title">26</p>
                </div>
        
                <div className="table-column centered padded-medium">
                    <p className="table-title">33</p>
                </div>
        
                <div className="table-column padded-big-left">
                    <div className="user-status">
                    <a className="user-status-avatar" href="profile-timeline">
                        <div className="user-avatar small no-outline">
                        <div className="user-avatar-content">
                            <div className="hexagon-image-30-32" data-src="img/avatar/04.jpg"></div>
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
                    
                            <p className="user-avatar-badge-text">6</p>
                        </div>
                        </div>
                    </a>
                
                    <p className="user-status-title"><a className="bold" href="profile-timeline">Bearded Wonder</a></p>
                
                    <p className="user-status-text small">1 hour, 7 minutes ago</p>
                    </div>
                </div>
                </div>

                <div className="table-row medium">
                <div className="table-column">
                    <div className="discussion-preview">
                    <a className="discussion-preview-title" href="forums-discussion">What actor do you think should play the new Captain?</a>
        
                    <div className="discussion-preview-meta">
                        <p className="discussion-preview-meta-text">Started by</p>
        
                        <a className="user-avatar micro no-border" href="profile-timeline">
                        <div className="user-avatar-content">
                            <div className="hexagon-image-18-20" data-src="img/avatar/05.jpg"></div>
                        </div>
                        </a>
        
                        <p className="discussion-preview-meta-text"><a href="profile-timeline">Neko Bebop</a> 6 days ago</p>
                    </div>
                    </div>
                </div>
        
                <div className="table-column centered padded-medium">
                    <p className="table-title">17</p>
                </div>
        
                <div className="table-column centered padded-medium">
                    <p className="table-title">20</p>
                </div>
        
                <div className="table-column padded-big-left">
                    <div className="user-status">
                    <a className="user-status-avatar" href="profile-timeline">
                        <div className="user-avatar small no-outline">
                        <div className="user-avatar-content">
                            <div className="hexagon-image-30-32" data-src="img/avatar/05.jpg"></div>
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
                    
                            <p className="user-avatar-badge-text">12</p>
                        </div>
                        </div>
                    </a>
                
                    <p className="user-status-title"><a className="bold" href="profile-timeline">Neko Bebop</a></p>
                
                    <p className="user-status-text small">5 hours, 9 minutes ago</p>
                    </div>
                </div>
                </div>

                <div className="table-row medium">
                <div className="table-column">
                    <div className="discussion-preview">
                    <a className="discussion-preview-title" href="forums-discussion">Hunter's manga chapter 526 will release in December</a>
        
                    <div className="discussion-preview-meta">
                        <p className="discussion-preview-meta-text">Started by</p>
        
                        <a className="user-avatar micro no-border" href="profile-timeline">
                        <div className="user-avatar-content">
                            <div className="hexagon-image-18-20" data-src="img/avatar/08.jpg"></div>
                        </div>
                        </a>
        
                        <p className="discussion-preview-meta-text"><a href="profile-timeline">Damian Greyson</a> 2 weeks ago</p>
                    </div>
                    </div>
                </div>
        
                <div className="table-column centered padded-medium">
                    <p className="table-title">39</p>
                </div>
        
                <div className="table-column centered padded-medium">
                    <p className="table-title">47</p>
                </div>
        
                <div className="table-column padded-big-left">
                    <div className="user-status">
                    <a className="user-status-avatar" href="profile-timeline">
                        <div className="user-avatar small no-outline">
                        <div className="user-avatar-content">
                            <div className="hexagon-image-30-32" data-src="img/avatar/10.jpg"></div>
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
                    
                            <p className="user-avatar-badge-text">5</p>
                        </div>
                        </div>
                    </a>
                
                    <p className="user-status-title"><a className="bold" href="profile-timeline">The Green Goo</a></p>
                
                    <p className="user-status-text small">1 day, 8 hours ago</p>
                    </div>
                </div>
                </div>

                <div className="table-row medium">
                <div className="table-column">
                    <div className="discussion-preview">
                    <a className="discussion-preview-title" href="forums-discussion">A new animation studio will take over after this month</a>
        
                    <div className="discussion-preview-meta">
                        <p className="discussion-preview-meta-text">Started by</p>
        
                        <a className="user-avatar micro no-border" href="profile-timeline">
                        <div className="user-avatar-content">
                            <div className="hexagon-image-18-20" data-src="img/avatar/04.jpg"></div>
                        </div>
                        </a>
        
                        <p className="discussion-preview-meta-text"><a href="profile-timeline">Bearded Wonder</a> 2 weeks ago</p>
                    </div>
                    </div>
                </div>
        
                <div className="table-column centered padded-medium">
                    <p className="table-title">22</p>
                </div>
        
                <div className="table-column centered padded-medium">
                    <p className="table-title">29</p>
                </div>
        
                <div className="table-column padded-big-left">
                    <div className="user-status">
                    <a className="user-status-avatar" href="profile-timeline">
                        <div className="user-avatar small no-outline">
                        <div className="user-avatar-content">
                            <div className="hexagon-image-30-32" data-src="img/avatar/05.jpg"></div>
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
                    
                            <p className="user-avatar-badge-text">16</p>
                        </div>
                        </div>
                    </a>
                
                    <p className="user-status-title"><a className="bold" href="profile-timeline">Nick Grissom</a></p>
                
                    <p className="user-status-text small">6 days, 12 hours ago</p>
                    </div>
                </div>
                </div>

                <div className="table-row medium">
                <div className="table-column">
                    <div className="discussion-preview">
                    <a className="discussion-preview-title" href="forums-discussion">Season 4 of "Fireman" is officially confirmed by the creators!</a>
        
                    <div className="discussion-preview-meta">
                        <p className="discussion-preview-meta-text">Started by</p>
        
                        <a className="user-avatar micro no-border" href="profile-timeline">
                        <div className="user-avatar-content">
                            <div className="hexagon-image-18-20" data-src="img/avatar/10.jpg"></div>
                        </div>
                        </a>
        
                        <p className="discussion-preview-meta-text"><a href="profile-timeline">The Green Goo</a> 5 months ago</p>
                    </div>
                    </div>
                </div>
        
                <div className="table-column centered padded-medium">
                    <p className="table-title">7</p>
                </div>
        
                <div className="table-column centered padded-medium">
                    <p className="table-title">13</p>
                </div>
        
                <div className="table-column padded-big-left">
                    <div className="user-status">
                    <a className="user-status-avatar" href="profile-timeline">
                        <div className="user-avatar small no-outline">
                        <div className="user-avatar-content">
                            <div className="hexagon-image-30-32" data-src="img/avatar/02.jpg"></div>
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
                    
                            <p className="user-avatar-badge-text">13</p>
                        </div>
                        </div>
                    </a>
                
                    <p className="user-status-title"><a className="bold" href="profile-timeline">Destroy Dex</a></p>
                
                    <p className="user-status-text small">1 week, 3 days ago</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
    
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
        </>
    )
}

export default ForumCategory