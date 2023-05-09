import React from 'react'

const ForumCategory = () => {
    return (
        <div class="content-grid">
            <div class="section-banner">
            <img class="section-banner-icon" src="img/banner/forums-icon.png" alt="forums-icon"/>
        
            <p class="section-banner-title">Forums</p>
        
            <p class="section-banner-text">Talk about anything! Gaming, music, comics and more!</p>
            </div>

            <div class="section-header">
            <div class="section-header-info">
                <p class="section-pretitle">Welcome to</p>
        
                <h2 class="section-title">Animation Watchtower</h2>
            </div>
            </div>

            <div class="section-filters-bar v7">
            <div class="section-filters-bar-actions">
                <div class="section-filters-bar-info">
                <p class="section-filters-bar-title"><a href="forums.html">Forums</a><span class="separator"></span><a href="forums-category.html">Animation Watchtower</a></p>
        
                <div class="section-filters-bar-text small-space">
                    Last post by
                    <a class="user-avatar micro no-stats" href="profile-timeline.html">
                    <div class="user-avatar-border">
                        <div class="hexagon-22-24"></div>
                    </div>
                
                    <div class="user-avatar-content">
                        <div class="hexagon-image-18-20" data-src="img/avatar/03.jpg"></div>
                    </div>
                    </a>
                    <a class="bold" href="profile-timeline.html">Nick Grissom</a>
                    2 minutes ago
                </div>
                </div>
            </div>
        
            <div class="section-filters-bar-actions">
                <form class="form">
                <div class="form-item split">
                    <div class="form-input small">
                    <label for="forum-search">Search Forums</label>
                    <input type="text" id="forum-search" name="forum_search"/>
                    </div>
        
                    <button class="button primary">
                    <svg class="icon-magnifying-glass">
                        <use xlinkHref="#svg-magnifying-glass"></use>
                    </svg>
                    </button>
                </div>
                </form>
        
                <p class="button secondary">+ Create Discussion</p>
            </div>
            </div>

            <div class="table table-forum-category">
            <div class="table-header">
                <div class="table-header-column">
                <p class="table-header-title">Category</p>
                </div>
        
                <div class="table-header-column centered padded-medium">
                <p class="table-header-title">Topics</p>
                </div>
        
                <div class="table-header-column centered padded-medium">
                <p class="table-header-title">Posts</p>
                </div>
        
                <div class="table-header-column padded-big-left">
                <p class="table-header-title">Recent Topics</p>
                </div>
            </div>
        
            <div class="table-body">
                <div class="table-row big">
                <div class="table-column">
                    <div class="forum-category">
                    <a href="forums-category.html">
                        <img class="forum-category-image" src="img/forum/category/07.png" alt="category-07"/>
                    </a>
        
                    <div class="forum-category-info">
                        <p class="forum-category-title"><a href="forums-category.html">Comics</a></p>
        
                        <p class="forum-category-text">A place for the community to talk and chat about whatever they want!</p>
                    </div>
                    </div>
                </div>
        
                <div class="table-column centered padded-medium">
                    <p class="table-title">44</p>
                </div>
        
                <div class="table-column centered padded-medium">
                    <p class="table-title">236</p>
                </div>
        
                <div class="table-column padded-big-left">
                    <a class="table-link" href="forums-discussion.html">Bebop Publishing will release a limited edition of "Justice"</a>
        
                    <a class="table-link" href="forums-discussion.html">This is the first image of the new "Multiverse" movie!</a>
        
                    <a class="table-link" href="forums-discussion.html">What actor do you think should play the new Captain?</a>
                </div>
                </div>
        
                <div class="table-row big">
                <div class="table-column">
                    <div class="forum-category">
                    <a href="forums-category.html">
                        <img class="forum-category-image" src="img/forum/category/08.png" alt="category-08"/>
                    </a>
        
                    <div class="forum-category-info">
                        <p class="forum-category-title"><a href="forums-category.html">Anime &amp; Manga</a></p>
        
                        <p class="forum-category-text">Everything about the gaming world! News, reviews, upcoming games and more!</p>
                    </div>
                    </div>
                </div>
        
                <div class="table-column centered padded-medium">
                    <p class="table-title">23</p>
                </div>
        
                <div class="table-column centered padded-medium">
                    <p class="table-title">109</p>
                </div>
        
                <div class="table-column padded-big-left">
                    <a class="table-link" href="forums-discussion.html">Come and discuss that new "Power X" transformation</a>
        
                    <a class="table-link" href="forums-discussion.html">Hunter's manga chapter 526 will release in December</a>
        
                    <a class="table-link" href="forums-discussion.html">A new animation studio will take over after this month</a>
                </div>
                </div>
            </div>
            </div>
    
            <div class="table table-forum-discussion">
            <div class="table-header">
                <div class="table-header-column">
                <p class="table-header-title">Discussion</p>
                </div>
        
                <div class="table-header-column centered padded-medium">
                <p class="table-header-title">Voices</p>
                </div>
        
                <div class="table-header-column centered padded-medium">
                <p class="table-header-title">Replies</p>
                </div>
        
                <div class="table-header-column padded-big-left">
                <p class="table-header-title">Activity</p>
                </div>
            </div>
        
            <div class="table-body">
                <div class="table-row mid">
                <div class="table-column">
                    <div class="discussion-preview pinned">
                    <a class="discussion-preview-title" href="forums-discussion.html">Let's discuss the current state of the Comics Cinematic Universe</a>
        
                    <div class="page-items">
                        <a class="page-item" href="forums-discussion.html">01</a>
        
                        <a class="page-item" href="forums-discussion.html">02</a>
        
                        <a class="page-item" href="forums-discussion.html">03</a>
        
                        <p class="page-item void">...</p>
        
                        <a class="page-item" href="forums-discussion.html">44</a>
        
                        <a class="page-item" href="forums-discussion.html">45</a>
        
                        <a class="page-item" href="forums-discussion.html">46</a>
                    </div>
        
                    <div class="discussion-preview-meta">
                        <p class="discussion-preview-meta-text">Started by</p>
        
                        <a class="user-avatar micro no-border" href="profile-timeline.html">
                        <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/07.jpg"></div>
                        </div>
                        </a>
        
                        <p class="discussion-preview-meta-text"><a href="profile-timeline.html">Sarah Diamond</a> 2 months ago</p>
                    </div>
                    </div>
                </div>
        
                <div class="table-column centered padded-medium">
                    <p class="table-title">398</p>
                </div>
        
                <div class="table-column centered padded-medium">
                    <p class="table-title">941</p>
                </div>
        
                <div class="table-column padded-big-left">
                    <div class="user-status">
                    <a class="user-status-avatar" href="profile-timeline.html">
                        <div class="user-avatar small no-outline">
                        <div class="user-avatar-content">
                            <div class="hexagon-image-30-32" data-src="img/avatar/05.jpg"></div>
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
                    
                            <p class="user-avatar-badge-text">12</p>
                        </div>
                        </div>
                    </a>
                
                    <p class="user-status-title"><a class="bold" href="profile-timeline.html">Neko Bebop</a></p>
                
                    <p class="user-status-text small">1 hour, 36 minutes ago</p>
                    </div>
                </div>
                </div>
        
                <div class="table-row medium">
                <div class="table-column">
                    <div class="discussion-preview">
                    <a class="discussion-preview-title" href="forums-discussion.html">Bebop Publishing will release a limited edition of "Justice"</a>
        
                    <div class="discussion-preview-meta">
                        <p class="discussion-preview-meta-text">Started by</p>
        
                        <a class="user-avatar micro no-border" href="profile-timeline.html">
                        <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/04.jpg"></div>
                        </div>
                        </a>
        
                        <p class="discussion-preview-meta-text"><a href="profile-timeline.html">Bearded Wonder</a> 5 hours ago</p>
                    </div>
                    </div>
                </div>
        
                <div class="table-column centered padded-medium">
                    <p class="table-title">19</p>
                </div>
        
                <div class="table-column centered padded-medium">
                    <p class="table-title">24</p>
                </div>
        
                <div class="table-column padded-big-left">
                    <div class="user-status">
                    <a class="user-status-avatar" href="profile-timeline.html">
                        <div class="user-avatar small no-outline">
                        <div class="user-avatar-content">
                            <div class="hexagon-image-30-32" data-src="img/avatar/03.jpg"></div>
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
                    
                            <p class="user-avatar-badge-text">16</p>
                        </div>
                        </div>
                    </a>
                
                    <p class="user-status-title"><a class="bold" href="profile-timeline.html">Nick Grissom</a></p>
                
                    <p class="user-status-text small">2 minutes ago</p>
                    </div>
                </div>
                </div>

                <div class="table-row medium">
                <div class="table-column">
                    <div class="discussion-preview">
                    <a class="discussion-preview-title" href="forums-discussion.html">Come and discuss that new "Power X" transformation</a>
        
                    <div class="discussion-preview-meta">
                        <p class="discussion-preview-meta-text">Started by</p>
        
                        <a class="user-avatar micro no-border" href="profile-timeline.html">
                        <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/13.jpg"></div>
                        </div>
                        </a>
        
                        <p class="discussion-preview-meta-text"><a href="profile-timeline.html">Crimson Thunder</a> 1 hour ago</p>
                    </div>
                    </div>
                </div>
        
                <div class="table-column centered padded-medium">
                    <p class="table-title">8</p>
                </div>
        
                <div class="table-column centered padded-medium">
                    <p class="table-title">11</p>
                </div>
        
                <div class="table-column padded-big-left">
                    <div class="user-status">
                    <a class="user-status-avatar" href="profile-timeline.html">
                        <div class="user-avatar small no-outline">
                        <div class="user-avatar-content">
                            <div class="hexagon-image-30-32" data-src="img/avatar/01.jpg"></div>
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
                    
                            <p class="user-avatar-badge-text">24</p>
                        </div>
                        </div>
                    </a>
                
                    <p class="user-status-title"><a class="bold" href="profile-timeline.html">Marina Valentine</a></p>
                
                    <p class="user-status-text small">31 minutes ago</p>
                    </div>
                </div>
                </div>

                <div class="table-row medium">
                <div class="table-column">
                    <div class="discussion-preview">
                    <a class="discussion-preview-title" href="forums-discussion.html">This is the first image of the new "Multiverse" movie!</a>
        
                    <div class="discussion-preview-meta">
                        <p class="discussion-preview-meta-text">Started by</p>
        
                        <a class="user-avatar micro no-border" href="profile-timeline.html">
                        <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/03.jpg"></div>
                        </div>
                        </a>
        
                        <p class="discussion-preview-meta-text"><a href="profile-timeline.html">Nick Grissom</a> 14 hours ago</p>
                    </div>
                    </div>
                </div>
        
                <div class="table-column centered padded-medium">
                    <p class="table-title">26</p>
                </div>
        
                <div class="table-column centered padded-medium">
                    <p class="table-title">33</p>
                </div>
        
                <div class="table-column padded-big-left">
                    <div class="user-status">
                    <a class="user-status-avatar" href="profile-timeline.html">
                        <div class="user-avatar small no-outline">
                        <div class="user-avatar-content">
                            <div class="hexagon-image-30-32" data-src="img/avatar/04.jpg"></div>
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
                    
                            <p class="user-avatar-badge-text">6</p>
                        </div>
                        </div>
                    </a>
                
                    <p class="user-status-title"><a class="bold" href="profile-timeline.html">Bearded Wonder</a></p>
                
                    <p class="user-status-text small">1 hour, 7 minutes ago</p>
                    </div>
                </div>
                </div>

                <div class="table-row medium">
                <div class="table-column">
                    <div class="discussion-preview">
                    <a class="discussion-preview-title" href="forums-discussion.html">What actor do you think should play the new Captain?</a>
        
                    <div class="discussion-preview-meta">
                        <p class="discussion-preview-meta-text">Started by</p>
        
                        <a class="user-avatar micro no-border" href="profile-timeline.html">
                        <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/05.jpg"></div>
                        </div>
                        </a>
        
                        <p class="discussion-preview-meta-text"><a href="profile-timeline.html">Neko Bebop</a> 6 days ago</p>
                    </div>
                    </div>
                </div>
        
                <div class="table-column centered padded-medium">
                    <p class="table-title">17</p>
                </div>
        
                <div class="table-column centered padded-medium">
                    <p class="table-title">20</p>
                </div>
        
                <div class="table-column padded-big-left">
                    <div class="user-status">
                    <a class="user-status-avatar" href="profile-timeline.html">
                        <div class="user-avatar small no-outline">
                        <div class="user-avatar-content">
                            <div class="hexagon-image-30-32" data-src="img/avatar/05.jpg"></div>
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
                    
                            <p class="user-avatar-badge-text">12</p>
                        </div>
                        </div>
                    </a>
                
                    <p class="user-status-title"><a class="bold" href="profile-timeline.html">Neko Bebop</a></p>
                
                    <p class="user-status-text small">5 hours, 9 minutes ago</p>
                    </div>
                </div>
                </div>

                <div class="table-row medium">
                <div class="table-column">
                    <div class="discussion-preview">
                    <a class="discussion-preview-title" href="forums-discussion.html">Hunter's manga chapter 526 will release in December</a>
        
                    <div class="discussion-preview-meta">
                        <p class="discussion-preview-meta-text">Started by</p>
        
                        <a class="user-avatar micro no-border" href="profile-timeline.html">
                        <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/08.jpg"></div>
                        </div>
                        </a>
        
                        <p class="discussion-preview-meta-text"><a href="profile-timeline.html">Damian Greyson</a> 2 weeks ago</p>
                    </div>
                    </div>
                </div>
        
                <div class="table-column centered padded-medium">
                    <p class="table-title">39</p>
                </div>
        
                <div class="table-column centered padded-medium">
                    <p class="table-title">47</p>
                </div>
        
                <div class="table-column padded-big-left">
                    <div class="user-status">
                    <a class="user-status-avatar" href="profile-timeline.html">
                        <div class="user-avatar small no-outline">
                        <div class="user-avatar-content">
                            <div class="hexagon-image-30-32" data-src="img/avatar/10.jpg"></div>
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
                    
                            <p class="user-avatar-badge-text">5</p>
                        </div>
                        </div>
                    </a>
                
                    <p class="user-status-title"><a class="bold" href="profile-timeline.html">The Green Goo</a></p>
                
                    <p class="user-status-text small">1 day, 8 hours ago</p>
                    </div>
                </div>
                </div>

                <div class="table-row medium">
                <div class="table-column">
                    <div class="discussion-preview">
                    <a class="discussion-preview-title" href="forums-discussion.html">A new animation studio will take over after this month</a>
        
                    <div class="discussion-preview-meta">
                        <p class="discussion-preview-meta-text">Started by</p>
        
                        <a class="user-avatar micro no-border" href="profile-timeline.html">
                        <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/04.jpg"></div>
                        </div>
                        </a>
        
                        <p class="discussion-preview-meta-text"><a href="profile-timeline.html">Bearded Wonder</a> 2 weeks ago</p>
                    </div>
                    </div>
                </div>
        
                <div class="table-column centered padded-medium">
                    <p class="table-title">22</p>
                </div>
        
                <div class="table-column centered padded-medium">
                    <p class="table-title">29</p>
                </div>
        
                <div class="table-column padded-big-left">
                    <div class="user-status">
                    <a class="user-status-avatar" href="profile-timeline.html">
                        <div class="user-avatar small no-outline">
                        <div class="user-avatar-content">
                            <div class="hexagon-image-30-32" data-src="img/avatar/05.jpg"></div>
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
                    
                            <p class="user-avatar-badge-text">16</p>
                        </div>
                        </div>
                    </a>
                
                    <p class="user-status-title"><a class="bold" href="profile-timeline.html">Nick Grissom</a></p>
                
                    <p class="user-status-text small">6 days, 12 hours ago</p>
                    </div>
                </div>
                </div>

                <div class="table-row medium">
                <div class="table-column">
                    <div class="discussion-preview">
                    <a class="discussion-preview-title" href="forums-discussion.html">Season 4 of "Fireman" is officially confirmed by the creators!</a>
        
                    <div class="discussion-preview-meta">
                        <p class="discussion-preview-meta-text">Started by</p>
        
                        <a class="user-avatar micro no-border" href="profile-timeline.html">
                        <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/10.jpg"></div>
                        </div>
                        </a>
        
                        <p class="discussion-preview-meta-text"><a href="profile-timeline.html">The Green Goo</a> 5 months ago</p>
                    </div>
                    </div>
                </div>
        
                <div class="table-column centered padded-medium">
                    <p class="table-title">7</p>
                </div>
        
                <div class="table-column centered padded-medium">
                    <p class="table-title">13</p>
                </div>
        
                <div class="table-column padded-big-left">
                    <div class="user-status">
                    <a class="user-status-avatar" href="profile-timeline.html">
                        <div class="user-avatar small no-outline">
                        <div class="user-avatar-content">
                            <div class="hexagon-image-30-32" data-src="img/avatar/02.jpg"></div>
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
                    
                            <p class="user-avatar-badge-text">13</p>
                        </div>
                        </div>
                    </a>
                
                    <p class="user-status-title"><a class="bold" href="profile-timeline.html">Destroy Dex</a></p>
                
                    <p class="user-status-text small">1 week, 3 days ago</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
    
            <div class="section-pager-bar">
            <div class="section-pager">
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
        </div>
    )
}

export default ForumCategory