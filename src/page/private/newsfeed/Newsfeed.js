import React, { useEffect } from 'react'

const Newsfeed = () => {

    useEffect(()=> {
        let script = document.createElement("script");
        let script11 = document.createElement("script");
        script.src = "/js/utils/app.js";
        script11.src = "/js/global/global.popups.js";
        script.async = true;
        script11.async = true;
        document.body.appendChild(script);
        document.body.appendChild(script11);
    }, [])
    
    return (
        <div class="content-grid">
        <div class="section-banner">
        <img class="section-banner-icon" src="img/banner/newsfeed-icon.png" alt="newsfeed-icon"/>
    
        <p class="section-banner-title">Newsfeed</p>
    
        <p class="section-banner-text">Check what your friends have been up to!</p>
        </div>

        <div class="grid grid-3-6-3 mobile-prefer-content">
        <div class="grid-column">
            <div class="widget-box">
            <div class="progress-arc-summary">
                <div class="progress-arc-wrap">
                <div class="progress-arc">
                    <canvas id="profile-completion-chart"></canvas>
                </div>
            
                <div class="progress-arc-info">
                    <p class="progress-arc-title">59%</p>
                </div>
                </div>
            
                <div class="progress-arc-summary-info">
                <p class="progress-arc-summary-title">Profile Completion</p>
            
                <p class="progress-arc-summary-subtitle">Marina Valentine</p>
            
                <p class="progress-arc-summary-text">Complete your profile by filling profile info fields, completing quests &amp; unlocking badges</p>
                </div>
            </div>
        
            <div class="achievement-status-list">
                <div class="achievement-status">
                <p class="achievement-status-progress">11/30</p>
        
                <div class="achievement-status-info">
                    <p class="achievement-status-title">Quests</p>
                    
                    <p class="achievement-status-text">Completed</p>
                </div>
        
                <img class="achievement-status-image" src="img/badge/completedq-s.png" alt="bdage-completedq-s"/>
                </div>
        
                <div class="achievement-status">
                <p class="achievement-status-progress">22/46</p>
        
                <div class="achievement-status-info">
                    <p class="achievement-status-title">Badges</p>
                    
                    <p class="achievement-status-text">Unlocked</p>
                </div>
        
                <img class="achievement-status-image" src="img/badge/unlocked-badge.png" alt="bdage-unlocked-badge"/>
                </div>
            </div>
            </div>

            <div class="widget-box">
            <div class="widget-box-controls">
                <div id="badge-stat-slider-controls" class="slider-controls">
                <div class="slider-control left">
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

            <p class="widget-box-title">Featured Badges</p>

            <div class="widget-box-content">
                <div id="badge-stat-slider-items" class="widget-box-content-slider">
                <div class="widget-box-content-slider-item">
                    <div class="badge-item-stat void">
                    <p class="text-sticker">
                        <svg class="text-sticker-icon icon-plus-small">
                        <use xlinkHref="#svg-plus-small"></use>
                        </svg>
                        20 Exp
                    </p>

                    <img class="badge-item-stat-image" src="img/badge/uexp-b.png" alt="badge-uexp-b"/>

                    <p class="badge-item-stat-title">Universe Explorer</p>

                    <p class="badge-item-stat-text">Joined and posted on 20 different groups</p>

                    <div class="progress-stat medium">
                        <div id="badge-uexp" class="progress-stat-bar"></div>

                        <div class="bar-progress-wrap">
                        <p class="bar-progress-info negative center"><span class="bar-progress-text no-space"></span></p>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="widget-box-content-slider-item">
                    <div class="badge-item-stat void">
                    <p class="text-sticker">
                        <svg class="text-sticker-icon icon-plus-small">
                        <use xlinkHref="#svg-plus-small"></use>
                        </svg>
                        40 Exp
                    </p>

                    <img class="badge-item-stat-image" src="img/badge/verifieds-b.png" alt="badge-verifieds-b"/>

                    <p class="badge-item-stat-title">Verified Streamer</p>

                    <p class="badge-item-stat-text">Has linked a stream that was verified by the staff</p>

                    <div class="progress-stat medium">
                        <div id="badge-verifieds" class="progress-stat-bar"></div>

                        <div class="bar-progress-wrap">
                        <p class="bar-progress-info negative center"><span class="bar-progress-text no-space"></span></p>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="widget-box-content-slider-item">
                    <div class="badge-item-stat void">
                    <p class="text-sticker">
                        <svg class="text-sticker-icon icon-plus-small">
                        <use xlinkHref="#svg-plus-small"></use>
                        </svg>
                        40 Exp
                    </p>

                    <img class="badge-item-stat-image" src="img/badge/qconq-b.png" alt="badge-qconq-b"/>

                    <p class="badge-item-stat-title">Quest Conqueror</p>

                    <p class="badge-item-stat-text">Succesfully completed at least 10 quests at 100%</p>

                    <div class="progress-stat medium">
                        <div id="badge-qconq" class="progress-stat-bar"></div>

                        <div class="bar-progress-wrap">
                        <p class="bar-progress-info negative center"><span class="bar-progress-text no-space"></span></p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div class="widget-box">
            <div class="widget-box-settings">
                <div class="post-settings-wrap">
                <div class="post-settings widget-box-post-settings-dropdown-trigger">
                    <svg class="post-settings-icon icon-more-dots">
                    <use xlinkHref="#svg-more-dots"></use>
                    </svg>
                </div>

                <div class="simple-dropdown widget-box-post-settings-dropdown">
                    <p class="simple-dropdown-link">Widget Settings</p>
                </div>
                </div>
            </div>

            <p class="widget-box-title">Members</p>

            <div class="widget-box-content">
                <div class="filters">
                <p class="filter">Newest</p>

                <p class="filter active">Popular</p>

                <p class="filter">Active</p>
                </div>

                <div class="user-status-list">
                <div class="user-status request-small">
                    <a class="user-status-avatar" href="profile-timeline">
                    <div class="user-avatar small no-outline">
                        <div class="user-avatar-content">
                        <div class="hexagon-image-30-32" data-src="img/avatar/07.jpg"></div>
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
                    
                        <p class="user-avatar-badge-text">26</p>
                        </div>
                    </div>
                    </a>
                
                    <p class="user-status-title"><a class="bold" href="profile-timeline">Sarah Diamond</a></p>
                
                    <p class="user-status-text small">24.5K profile views</p>
                
                    <div class="action-request-list">
                    <div class="action-request accept">
                        <svg class="action-request-icon icon-add-friend">
                        <use xlinkHref="#svg-add-friend"></use>
                        </svg>
                    </div>
                    </div>
                </div>

                <div class="user-status request-small">
                    <a class="user-status-avatar" href="profile-timeline">
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
                
                    <p class="user-status-title"><a class="bold" href="profile-timeline">Nick Grissom</a></p>
                
                    <p class="user-status-text small">20.1K profile views</p>
                
                    <div class="action-request-list">
                    <div class="action-request accept">
                        <svg class="action-request-icon icon-add-friend">
                        <use xlinkHref="#svg-add-friend"></use>
                        </svg>
                    </div>
                    </div>
                </div>

                <div class="user-status request-small">
                    <a class="user-status-avatar" href="profile-timeline">
                    <div class="user-avatar small no-outline">
                        <div class="user-avatar-content">
                        <div class="hexagon-image-30-32" data-src="img/avatar/23.jpg"></div>
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
                    
                        <p class="user-avatar-badge-text">19</p>
                        </div>
                    </div>
                    </a>
                
                    <p class="user-status-title"><a class="bold" href="profile-timeline">Rosie Sakura</a></p>
                
                    <p class="user-status-text small">19.7K profile views</p>
                
                    <div class="action-request-list">
                    <div class="action-request accept">
                        <svg class="action-request-icon icon-add-friend">
                        <use xlinkHref="#svg-add-friend"></use>
                        </svg>
                    </div>
                    </div>
                </div>

                <div class="user-status request-small">
                    <a class="user-status-avatar" href="profile-timeline">
                    <div class="user-avatar small no-outline">
                        <div class="user-avatar-content">
                        <div class="hexagon-image-30-32" data-src="img/avatar/15.jpg"></div>
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
                    
                        <p class="user-avatar-badge-text">22</p>
                        </div>
                    </div>
                    </a>
                
                    <p class="user-status-title"><a class="bold" href="profile-timeline">Peter Stark</a></p>
                
                    <p class="user-status-text small">16.5K profile views</p>
                
                    <div class="action-request-list">
                    <div class="action-request accept">
                        <svg class="action-request-icon icon-add-friend">
                        <use xlinkHref="#svg-add-friend"></use>
                        </svg>
                    </div>
                    </div>
                </div>

                <div class="user-status request-small">
                    <a class="user-status-avatar" href="profile-timeline">
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
                
                    <p class="user-status-title"><a class="bold" href="profile-timeline">Bearded Wonder</a></p>
                
                    <p class="user-status-text small">9.8K profile views</p>
                
                    <div class="action-request-list">
                    <div class="action-request accept">
                        <svg class="action-request-icon icon-add-friend">
                        <use xlinkHref="#svg-add-friend"></use>
                        </svg>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <a class="banner-promo" href="https://themeforest.net/user/odin_design" target="_blank">
            <img src="img/banner/banner-promo.jpg" alt="banner-promo"/>
            </a>

            <div class="widget-box">
            <div class="widget-box-settings">
                <div class="post-settings-wrap">
                <div class="post-settings widget-box-post-settings-dropdown-trigger">
                    <svg class="post-settings-icon icon-more-dots">
                    <use xlinkHref="#svg-more-dots"></use>
                    </svg>
                </div>
        
                <div class="simple-dropdown widget-box-post-settings-dropdown">
                    <p class="simple-dropdown-link">Widget Settings</p>
                </div>
                </div>
            </div>
        
            <p class="widget-box-title">Open Quests</p>
        
            <div class="widget-box-content">
                <div class="quest-preview-list">
                <div class="quest-preview">
                    <div class="quest-preview-info">
                    <img class="quest-preview-image" src="img/quest/openq-s.png" alt="openq-s"/>
                
                    <p class="quest-preview-title">Nothing to hide</p>
                
                    <p class="quest-preview-text">You have completed all your profile information fields</p>
                    </div>
                
                    <div class="progress-stat">
                    <div id="quest-preview-nth" class="progress-stat-bar"></div>
                    </div>
                </div>
        
                <div class="quest-preview">
                    <div class="quest-preview-info">
                    <img class="quest-preview-image" src="img/quest/openq-s.png" alt="openq-s"/>
                
                    <p class="quest-preview-title">Social King</p>
                
                    <p class="quest-preview-text">You have linked at least 8 social networks to your profile</p>
                    </div>
                
                    <div class="progress-stat">
                    <div id="quest-preview-sk" class="progress-stat-bar"></div>
                    </div>
                </div>
        
                <div class="quest-preview">
                    <div class="quest-preview-info">
                    <img class="quest-preview-image" src="img/quest/openq-s.png" alt="openq-s"/>
                
                    <p class="quest-preview-title">Buffed Profile</p>
                
                    <p class="quest-preview-text">You have posted every day for at least 30 days in a row</p>
                    </div>
                
                    <div class="progress-stat">
                    <div id="quest-preview-bp" class="progress-stat-bar"></div>
                    </div>
                </div>
        
                <div class="quest-preview">
                    <div class="quest-preview-info">
                    <img class="quest-preview-image" src="img/quest/openq-s.png" alt="openq-s"/>
                
                    <p class="quest-preview-title">Hear the People</p>
                
                    <p class="quest-preview-text">You have created and posted your first poll</p>
                    </div>
                
                    <div class="progress-stat">
                    <div id="quest-preview-htp" class="progress-stat-bar"></div>
                    </div>
                </div>
        
                <div class="quest-preview">
                    <div class="quest-preview-info">
                    <img class="quest-preview-image" src="img/quest/openq-s.png" alt="openq-s"/>
                
                    <p class="quest-preview-title">Store Manager</p>
                
                    <p class="quest-preview-text">You have uploaded at least 10 items in your shop</p>
                    </div>
                
                    <div class="progress-stat">
                    <div id="quest-preview-sm" class="progress-stat-bar"></div>
                    </div>
                </div>
                </div>
            </div>
        
            <a class="widget-box-button button small white" href="quests">See all Quests!</a>
            </div>
        </div>

        <div class="grid-column">
            <div class="quick-post">
            <div class="quick-post-header">
                <div class="option-items">
                <div class="option-item active">
                    <svg class="option-item-icon icon-status">
                    <use xlinkHref="#svg-status"></use>
                    </svg>
        
                    <p class="option-item-title">Status</p>
                </div>
        
                <div class="option-item">
                    <svg class="option-item-icon icon-blog-posts">
                    <use xlinkHref="#svg-blog-posts"></use>
                    </svg>
        
                    <p class="option-item-title">Blog Post</p>
                </div>
        
                <div class="option-item">
                    <svg class="option-item-icon icon-poll">
                    <use xlinkHref="#svg-poll"></use>
                    </svg>
        
                    <p class="option-item-title">Poll</p>
                </div>
                </div>
            </div>
        
            <div class="quick-post-body">
                <form class="form">
                <div class="form-row">
                    <div class="form-item">
                    <div class="form-textarea">
                        <textarea id="quick-post-text" name="quick-post-text" placeholder="Hi Marina! Share your post here..."></textarea>
                        <p class="form-textarea-limit-text">998/1000</p>
                    </div>
                    </div>
                </div>
                </form>
            </div>
        
            <div class="quick-post-footer">
                <div class="quick-post-footer-actions">
                <div class="quick-post-footer-action text-tooltip-tft-medium" data-title="Insert Photo">
                    <svg class="quick-post-footer-action-icon icon-camera">
                    <use xlinkHref="#svg-camera"></use>
                    </svg>
                </div>
        
                <div class="quick-post-footer-action text-tooltip-tft-medium" data-title="Insert GIF">
                    <svg class="quick-post-footer-action-icon icon-gif">
                    <use xlinkHref="#svg-gif"></use>
                    </svg>
                </div>
        
                <div class="quick-post-footer-action text-tooltip-tft-medium" data-title="Insert Tag">
                    <svg class="quick-post-footer-action-icon icon-tags">
                    <use xlinkHref="#svg-tags"></use>
                    </svg>
                </div>
                </div>
        
                <div class="quick-post-footer-actions">
                    <p class="button small void">Discard</p>
        
                    <p class="button small secondary">Post</p>
                </div>
            </div>
            </div>

            <div class="simple-tab-items">
            <form class="form">
                <div class="form-select">
                <select id="newsfeed-filter-category" name="newsfeed_filter_category">
                    <option value="0">All Updates</option>
                    <option value="1">Mentions</option>
                    <option value="2">Friends</option>
                    <option value="3">Groups</option>
                    <option value="4">Blog Posts</option>
                </select>
                <svg class="form-select-icon icon-small-arrow">
                    <use xlinkHref="#svg-small-arrow"></use>
                </svg>
                </div>
            </form>

            <p class="simple-tab-item active">All Updates</p>

            <p class="simple-tab-item">Mentions</p>

            <p class="simple-tab-item">Friends</p>

            <p class="simple-tab-item">Groups</p>

            <p class="simple-tab-item">Blog Posts</p>
            </div>

            <div class="widget-box no-padding">
            <div class="widget-box-settings">
                <div class="post-settings-wrap">
                <div class="post-settings widget-box-post-settings-dropdown-trigger">
                    <svg class="post-settings-icon icon-more-dots">
                    <use xlinkHref="#svg-more-dots"></use>
                    </svg>
                </div>

                <div class="simple-dropdown widget-box-post-settings-dropdown">
                    <p class="simple-dropdown-link">Edit Post</p>

                    <p class="simple-dropdown-link">Delete Post</p>

                    <p class="simple-dropdown-link">Make it Featured</p>

                    <p class="simple-dropdown-link">Report Post</p>

                    <p class="simple-dropdown-link">Report Author</p>
                </div>
                </div>
            </div>
            
            <div class="widget-box-status">
                <div class="widget-box-status-content">
                <div class="user-status">
                    <a class="user-status-avatar" href="profile-timeline">
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
                
                    <p class="user-status-title medium"><a class="bold" href="profile-timeline">Neko Bebop</a> uploaded a <span class="bold">video</span></p>
                
                    <p class="user-status-text small">2 minutes ago</p>
                </div>

                <p class="widget-box-status-text">Hi to everyone! Check out my latest video of the outlaws expansion for Court Striker GO. I'm really excited because my last video had almost 50.000 views.</p>
                </div>

                <div class="iframe-wrap">
                <iframe src="https://www.youtube.com/embed/rk-wIgg9fNk" allowfullscreen></iframe>
                </div>

                <div class="widget-box-status-content">
                <div class="tag-list">
                    <a class="tag-item secondary" href="newsfeed">Stream</a>

                    <a class="tag-item secondary" href="newsfeed">StrikerGO</a>

                    <a class="tag-item secondary" href="newsfeed">Outlaws</a>

                    <a class="tag-item secondary" href="newsfeed">Gaming</a>
                </div>

                <div class="content-actions">
                    <div class="content-action">
                    <div class="meta-line">
                        <div class="meta-line-list reaction-item-list">
                        <div class="reaction-item">
                            <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/love.png" alt="reaction-love"/>
                
                            <div class="simple-dropdown padded reaction-item-dropdown">
                            <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/love.png" alt="reaction-love"/> <span class="bold">Love</span></p>
                            
                            <p class="simple-dropdown-text">Matt Parker</p>

                            <p class="simple-dropdown-text">Destroy Dex</p>

                            <p class="simple-dropdown-text">The Green Goo</p>
                            </div>
                        </div>

                        <div class="reaction-item">
                            <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/happy.png" alt="reaction-happy"/>
                
                            <div class="simple-dropdown padded reaction-item-dropdown">
                            <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/happy.png" alt="reaction-happy"/> <span class="bold">Happy</span></p>
                            
                            <p class="simple-dropdown-text">Sandra Strange</p>

                            <p class="simple-dropdown-text">Jane Rodgers</p>
                            </div>
                        </div>

                        <div class="reaction-item">
                            <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/like.png" alt="reaction-like"/>
                
                            <div class="simple-dropdown padded reaction-item-dropdown">
                            <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/like.png" alt="reaction-like"/> <span class="bold">Like</span></p>
                            
                            <p class="simple-dropdown-text">Neko Bebop</p>

                            <p class="simple-dropdown-text">Nick Grissom</p>

                            <p class="simple-dropdown-text">Sarah Diamond</p>

                            <p class="simple-dropdown-text">Jett Spiegel</p>

                            <p class="simple-dropdown-text">Marcus Jhonson</p>

                            <p class="simple-dropdown-text"><span class="bold">and 6 more...</span></p>
                            </div>
                        </div>
                        </div>
                
                        <p class="meta-line-text">16</p>
                    </div>
                
                    <div class="meta-line">
                        <div class="meta-line-list user-avatar-list">
                        <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                            <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/07.jpg"></div>
                            </div>
                        </div>
                
                        <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                            <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/13.jpg"></div>
                            </div>
                        </div>
                
                        <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                            <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/22.jpg"></div>
                            </div>
                        </div>
                
                        <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                            <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/10.jpg"></div>
                            </div>
                        </div>
                
                        <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                            <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/08.jpg"></div>
                            </div>
                        </div>
                        </div>
                
                        <p class="meta-line-text">19 Participants</p>
                    </div>
                    </div>
                
                    <div class="content-action">
                    <div class="meta-line">
                        <p class="meta-line-link">2 Comments</p>
                    </div>
                
                    <div class="meta-line">
                        <p class="meta-line-text">0 Shares</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div class="post-options">
                <div class="post-option-wrap">
                <div class="post-option reaction-options-dropdown-trigger">
                    <svg class="post-option-icon icon-thumbs-up">
                    <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>

                    <p class="post-option-text">React!</p>
                </div>

                <div class="reaction-options reaction-options-dropdown">
                    <div class="reaction-option text-tooltip-tft" data-title="Like">
                    <img class="reaction-option-image" src="img/reaction/like.png" alt="reaction-like"/>
                    </div>

                    <div class="reaction-option text-tooltip-tft" data-title="Love">
                    <img class="reaction-option-image" src="img/reaction/love.png" alt="reaction-love"/>
                    </div>

                    <div class="reaction-option text-tooltip-tft" data-title="Dislike">
                    <img class="reaction-option-image" src="img/reaction/dislike.png" alt="reaction-dislike"/>
                    </div>

                    <div class="reaction-option text-tooltip-tft" data-title="Happy">
                    <img class="reaction-option-image" src="img/reaction/happy.png" alt="reaction-happy"/>
                    </div>

                    <div class="reaction-option text-tooltip-tft" data-title="Funny">
                    <img class="reaction-option-image" src="img/reaction/funny.png" alt="reaction-funny"/>
                    </div>

                    <div class="reaction-option text-tooltip-tft" data-title="Wow">
                    <img class="reaction-option-image" src="img/reaction/wow.png" alt="reaction-wow"/>
                    </div>

                    <div class="reaction-option text-tooltip-tft" data-title="Angry">
                    <img class="reaction-option-image" src="img/reaction/angry.png" alt="reaction-angry"/>
                    </div>

                    <div class="reaction-option text-tooltip-tft" data-title="Sad">
                    <img class="reaction-option-image" src="img/reaction/sad.png" alt="reaction-sad"/>
                    </div>
                </div>
                </div>

                <div class="post-option">
                <svg class="post-option-icon icon-comment">
                    <use xlinkHref="#svg-comment"></use>
                </svg>

                <p class="post-option-text">Comment</p>
                </div>

                <div class="post-option">
                <svg class="post-option-icon icon-share">
                    <use xlinkHref="#svg-share"></use>
                </svg>

                <p class="post-option-text">Share</p>
                </div>
            </div>
            </div>

            <div class="widget-box no-padding">
            <div class="widget-box-settings">
                <div class="post-settings-wrap">
                <div class="post-settings widget-box-post-settings-dropdown-trigger">
                    <svg class="post-settings-icon icon-more-dots">
                    <use xlinkHref="#svg-more-dots"></use>
                    </svg>
                </div>
        
                <div class="simple-dropdown widget-box-post-settings-dropdown">
                    <p class="simple-dropdown-link">Edit Post</p>
        
                    <p class="simple-dropdown-link">Delete Post</p>
        
                    <p class="simple-dropdown-link">Make it Featured</p>
        
                    <p class="simple-dropdown-link">Report Post</p>
        
                    <p class="simple-dropdown-link">Report Author</p>
                </div>
                </div>
            </div>
            
            <div class="widget-box-status">
                <div class="widget-box-status-content">
                <div class="user-status">
                    <a class="user-status-avatar" href="profile-timeline">
                    <div class="user-avatar small no-outline">
                        <div class="user-avatar-content">
                        <div class="hexagon-image-30-32" data-src="img/avatar/07.jpg"></div>
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
                    
                        <p class="user-avatar-badge-text">26</p>
                        </div>
                    </div>
                    </a>
                
                    <p class="user-status-title medium"><a class="bold" href="profile-timeline">Sarah Diamond</a> created a <span class="bold">poll</span></p>
                
                    <p class="user-status-text small">9 minutes ago</p>
                </div>
        
                <p class="widget-box-status-text">I've created a poll to ask all of you what you would like to see more in my upcoming videos! It will only take a couple of seconds...thanks to all in advance!!</p>
        
                <div class="poll-box">
                    <p class="poll-title">What do you wanna see in my upcoming videos?</p>
                
                    <p class="poll-text">Poll ends in 5 days</p>
                
                    <form class="form">
                    <div class="form-row">
                        <div class="form-item">
                        <div class="checkbox-wrap">
                            <input type="radio" id="poll-option-1" name="poll_option" value="option-1"/>
                            <div class="checkbox-box round"></div>
                            <label for="poll-option-1">Retro Games</label>
                        </div>
                        </div>
                    </div>
                
                    <div class="form-row">
                        <div class="form-item">
                        <div class="checkbox-wrap">
                            <input type="radio" id="poll-option-2" name="poll_option" value="option-2" checked/>
                            <div class="checkbox-box round"></div>
                            <label for="poll-option-2">Walkthroughs</label>
                        </div>
                        </div>
                    </div>
                
                    <div class="form-row">
                        <div class="form-item">
                        <div class="checkbox-wrap">
                            <input type="radio" id="poll-option-3" name="poll_option" value="option-3"/>
                            <div class="checkbox-box round"></div>
                            <label for="poll-option-3">Unboxings</label>
                        </div>
                        </div>
                    </div>
                    </form>
                
                    <div class="poll-box-actions">
                    <p class="button small secondary">Vote Now!</p>
                
                    <p class="button small white">See Results</p>
                    </div>
                </div>
        
                <div class="content-actions">
                    <div class="content-action">
                    <div class="meta-line">
                        <div class="meta-line-list reaction-item-list">
                        <div class="reaction-item">
                            <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/funny.png" alt="reaction-funny"/>
                
                            <div class="simple-dropdown padded reaction-item-dropdown">
                            <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/funny.png" alt="reaction-funny"/> <span class="bold">Funny</span></p>
                            
                            <p class="simple-dropdown-text">Matt Parker</p>
        
                            <p class="simple-dropdown-text">Destroy Dex</p>
        
                            <p class="simple-dropdown-text">The Green Goo</p>
                            </div>
                        </div>
        
                        <div class="reaction-item">
                            <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/like.png" alt="reaction-like"/>
                
                            <div class="simple-dropdown padded reaction-item-dropdown">
                            <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/like.png" alt="reaction-like"/> <span class="bold">Like</span></p>
                            
                            <p class="simple-dropdown-text">Sandra Strange</p>
        
                            <p class="simple-dropdown-text">Jane Rodgers</p>
                            </div>
                        </div>
        
                        <div class="reaction-item">
                            <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/love.png" alt="reaction-love"/>
                
                            <div class="simple-dropdown padded reaction-item-dropdown">
                            <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/love.png" alt="reaction-love"/> <span class="bold">Love</span></p>
                            
                            <p class="simple-dropdown-text">Neko Bebop</p>
        
                            <p class="simple-dropdown-text">Nick Grissom</p>
        
                            <p class="simple-dropdown-text">Sarah Diamond</p>
        
                            <p class="simple-dropdown-text">Jett Spiegel</p>
                            </div>
                        </div>
                        </div>
                
                        <p class="meta-line-text">9</p>
                    </div>
                
                    <div class="meta-line">
                        <div class="meta-line-list user-avatar-list">
                        <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                            <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/09.jpg"></div>
                            </div>
                        </div>
                
                        <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                            <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/08.jpg"></div>
                            </div>
                        </div>
                
                        <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                            <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/12.jpg"></div>
                            </div>
                        </div>
                
                        <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                            <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/16.jpg"></div>
                            </div>
                        </div>
                
                        <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                            <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/06.jpg"></div>
                            </div>
                        </div>
                        </div>
                
                        <p class="meta-line-text">11 Participants</p>
                    </div>
                    </div>
                
                    <div class="content-action">
                    <div class="meta-line">
                        <p class="meta-line-link">1 Comments</p>
                    </div>
                
                    <div class="meta-line">
                        <p class="meta-line-text">0 Shares</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        
            <div class="post-options">
                <div class="post-option-wrap">
                <div class="post-option reaction-options-dropdown-trigger">
                    <svg class="post-option-icon icon-thumbs-up">
                    <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
        
                    <p class="post-option-text">React!</p>
                </div>
        
                <div class="reaction-options reaction-options-dropdown">
                    <div class="reaction-option text-tooltip-tft" data-title="Like">
                    <img class="reaction-option-image" src="img/reaction/like.png" alt="reaction-like"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Love">
                    <img class="reaction-option-image" src="img/reaction/love.png" alt="reaction-love"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Dislike">
                    <img class="reaction-option-image" src="img/reaction/dislike.png" alt="reaction-dislike"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Happy">
                    <img class="reaction-option-image" src="img/reaction/happy.png" alt="reaction-happy"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Funny">
                    <img class="reaction-option-image" src="img/reaction/funny.png" alt="reaction-funny"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Wow">
                    <img class="reaction-option-image" src="img/reaction/wow.png" alt="reaction-wow"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Angry">
                    <img class="reaction-option-image" src="img/reaction/angry.png" alt="reaction-angry"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Sad">
                    <img class="reaction-option-image" src="img/reaction/sad.png" alt="reaction-sad"/>
                    </div>
                </div>
                </div>
        
                <div class="post-option">
                <svg class="post-option-icon icon-comment">
                    <use xlinkHref="#svg-comment"></use>
                </svg>
        
                <p class="post-option-text">Comment</p>
                </div>
        
                <div class="post-option">
                <svg class="post-option-icon icon-share">
                    <use xlinkHref="#svg-share"></use>
                </svg>
        
                <p class="post-option-text">Share</p>
                </div>
            </div>
            </div>

            <div class="widget-box no-padding">
            <div class="widget-box-settings">
                <div class="post-settings-wrap">
                <div class="post-settings widget-box-post-settings-dropdown-trigger">
                    <svg class="post-settings-icon icon-more-dots">
                    <use xlinkHref="#svg-more-dots"></use>
                    </svg>
                </div>
        
                <div class="simple-dropdown widget-box-post-settings-dropdown">
                    <p class="simple-dropdown-link">Edit Post</p>
        
                    <p class="simple-dropdown-link">Delete Post</p>
        
                    <p class="simple-dropdown-link">Make it Featured</p>
        
                    <p class="simple-dropdown-link">Report Post</p>
        
                    <p class="simple-dropdown-link">Report Author</p>
                </div>
                </div>
            </div>
            
            <div class="widget-box-status">
                <div class="widget-box-status-content">
                <div class="user-status">
                    <a class="user-status-avatar" href="profile-timeline">
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
                    
                        <p class="user-avatar-badge-text">19</p>
                        </div>
                    </div>
                    </a>
                
                    <p class="user-status-title medium"><a class="bold" href="profile-timeline">Destroy Dex</a> uploaded <span class="bold">26 new photos</span></p>
                
                    <p class="user-status-text small">17 minutes ago</p>
                </div>
        
                <p class="widget-box-status-text">Here are some of the photos from my last visit to StreamCon 2019!!</p>
        
                <div class="picture-collage">
                    <div class="picture-collage-row medium">
                    <div class="picture-collage-item popup-picture-trigger">
                        <div class="photo-preview">
                        <figure class="photo-preview-image liquid">
                            <img src="img/cover/10.jpg" alt="photo-preview-10"/>
                        </figure>
                    
                        <div class="photo-preview-info">
                            <div class="reaction-count-list">
                            <div class="reaction-count negative">
                                <svg class="reaction-count-icon icon-thumbs-up">
                                <use xlinkHref="#svg-thumbs-up"></use>
                                </svg>
                    
                                <p class="reaction-count-text">2</p>
                            </div>
                    
                            <div class="reaction-count negative">
                                <svg class="reaction-count-icon icon-comment">
                                <use xlinkHref="#svg-comment"></use>
                                </svg>
                    
                                <p class="reaction-count-text">5</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
        
                    <div class="picture-collage-item popup-picture-trigger">
                        <div class="photo-preview">
                        <figure class="photo-preview-image liquid">
                            <img src="img/cover/12.jpg" alt="photo-preview-12"/>
                        </figure>
                    
                        <div class="photo-preview-info">
                            <div class="reaction-count-list">
                            <div class="reaction-count negative">
                                <svg class="reaction-count-icon icon-thumbs-up">
                                <use xlinkHref="#svg-thumbs-up"></use>
                                </svg>
                    
                                <p class="reaction-count-text">2</p>
                            </div>
                    
                            <div class="reaction-count negative">
                                <svg class="reaction-count-icon icon-comment">
                                <use xlinkHref="#svg-comment"></use>
                                </svg>
                    
                                <p class="reaction-count-text">5</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
        
                    <div class="picture-collage-row">
                    <div class="picture-collage-item popup-picture-trigger">
                        <div class="photo-preview">
                        <figure class="photo-preview-image liquid">
                            <img src="img/cover/16.jpg" alt="photo-preview-16"/>
                        </figure>
                    
                        <div class="photo-preview-info">
                            <div class="reaction-count-list">
                            <div class="reaction-count negative">
                                <svg class="reaction-count-icon icon-thumbs-up">
                                <use xlinkHref="#svg-thumbs-up"></use>
                                </svg>
                    
                                <p class="reaction-count-text">2</p>
                            </div>
                    
                            <div class="reaction-count negative">
                                <svg class="reaction-count-icon icon-comment">
                                <use xlinkHref="#svg-comment"></use>
                                </svg>
                    
                                <p class="reaction-count-text">5</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
        
                    <div class="picture-collage-item popup-picture-trigger">
                        <div class="photo-preview">
                        <figure class="photo-preview-image liquid">
                            <img src="img/cover/08.jpg" alt="photo-preview-08"/>
                        </figure>
                    
                        <div class="photo-preview-info">
                            <div class="reaction-count-list">
                            <div class="reaction-count negative">
                                <svg class="reaction-count-icon icon-thumbs-up">
                                <use xlinkHref="#svg-thumbs-up"></use>
                                </svg>
                    
                                <p class="reaction-count-text">2</p>
                            </div>
                    
                            <div class="reaction-count negative">
                                <svg class="reaction-count-icon icon-comment">
                                <use xlinkHref="#svg-comment"></use>
                                </svg>
                    
                                <p class="reaction-count-text">5</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
        
                    <div class="picture-collage-item">
                        <a class="picture-collage-item-overlay" href="profile-photos">
                        <p class="picture-collage-item-overlay-text">+22</p>
                        </a>
        
                        <div class="photo-preview">
                        <figure class="photo-preview-image liquid">
                            <img src="img/cover/14.jpg" alt="photo-preview-14"/>
                        </figure>
                    
                        <div class="photo-preview-info">
                            <div class="reaction-count-list">
                            <div class="reaction-count negative">
                                <svg class="reaction-count-icon icon-thumbs-up">
                                <use xlinkHref="#svg-thumbs-up"></use>
                                </svg>
                    
                                <p class="reaction-count-text">2</p>
                            </div>
                    
                            <div class="reaction-count negative">
                                <svg class="reaction-count-icon icon-comment">
                                <use xlinkHref="#svg-comment"></use>
                                </svg>
                    
                                <p class="reaction-count-text">5</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
        
                <div class="tag-list">
                    <a class="tag-item secondary" href="newsfeed">Photos</a>
        
                    <a class="tag-item secondary" href="newsfeed">StreamCon</a>
        
                    <a class="tag-item secondary" href="newsfeed">StarGirl</a>
                </div>
        
                <div class="content-actions">
                    <div class="content-action">
                    <div class="meta-line">
                        <div class="meta-line-list reaction-item-list">
                        <div class="reaction-item">
                            <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/wow.png" alt="reaction-wow"/>
                
                            <div class="simple-dropdown padded reaction-item-dropdown">
                            <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/wow.png" alt="reaction-wow"/> <span class="bold">Wow</span></p>
                            
                            <p class="simple-dropdown-text">Matt Parker</p>
                            </div>
                        </div>
        
                        <div class="reaction-item">
                            <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/like.png" alt="reaction-like"/>
                
                            <div class="simple-dropdown padded reaction-item-dropdown">
                            <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/like.png" alt="reaction-like"/> <span class="bold">Like</span></p>
                            
                            <p class="simple-dropdown-text">Sandra Strange</p>
        
                            <p class="simple-dropdown-text">Jane Rodgers</p>
                            </div>
                        </div>
                        </div>
                
                        <p class="meta-line-text">3</p>
                    </div>
                
                    <div class="meta-line">
                        <div class="meta-line-list user-avatar-list">
                        <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                            <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/03.jpg"></div>
                            </div>
                        </div>
                
                        <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                            <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/15.jpg"></div>
                            </div>
                        </div>
                
                        <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                            <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/14.jpg"></div>
                            </div>
                        </div>
                
                        <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                            <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/07.jpg"></div>
                            </div>
                        </div>
                        </div>
                
                        <p class="meta-line-text">4 Participants</p>
                    </div>
                    </div>
                
                    <div class="content-action">
                    <div class="meta-line">
                        <p class="meta-line-link">3 Comments</p>
                    </div>
                
                    <div class="meta-line">
                        <p class="meta-line-text">0 Shares</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        
            <div class="post-options">
                <div class="post-option-wrap">
                <div class="post-option reaction-options-dropdown-trigger">
                    <svg class="post-option-icon icon-thumbs-up">
                    <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
        
                    <p class="post-option-text">React!</p>
                </div>
        
                <div class="reaction-options reaction-options-dropdown">
                    <div class="reaction-option text-tooltip-tft" data-title="Like">
                    <img class="reaction-option-image" src="img/reaction/like.png" alt="reaction-like"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Love">
                    <img class="reaction-option-image" src="img/reaction/love.png" alt="reaction-love"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Dislike">
                    <img class="reaction-option-image" src="img/reaction/dislike.png" alt="reaction-dislike"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Happy">
                    <img class="reaction-option-image" src="img/reaction/happy.png" alt="reaction-happy"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Funny">
                    <img class="reaction-option-image" src="img/reaction/funny.png" alt="reaction-funny"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Wow">
                    <img class="reaction-option-image" src="img/reaction/wow.png" alt="reaction-wow"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Angry">
                    <img class="reaction-option-image" src="img/reaction/angry.png" alt="reaction-angry"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Sad">
                    <img class="reaction-option-image" src="img/reaction/sad.png" alt="reaction-sad"/>
                    </div>
                </div>
                </div>
        
                <div class="post-option">
                <svg class="post-option-icon icon-comment">
                    <use xlinkHref="#svg-comment"></use>
                </svg>
        
                <p class="post-option-text">Comment</p>
                </div>
        
                <div class="post-option">
                <svg class="post-option-icon icon-share">
                    <use xlinkHref="#svg-share"></use>
                </svg>
        
                <p class="post-option-text">Share</p>
                </div>
            </div>
            </div>

            <div class="widget-box no-padding">
            <div class="widget-box-settings">
                <div class="post-settings-wrap">
                <div class="post-settings widget-box-post-settings-dropdown-trigger">
                    <svg class="post-settings-icon icon-more-dots">
                    <use xlinkHref="#svg-more-dots"></use>
                    </svg>
                </div>
        
                <div class="simple-dropdown widget-box-post-settings-dropdown">
                    <p class="simple-dropdown-link">Edit Post</p>
        
                    <p class="simple-dropdown-link">Delete Post</p>
        
                    <p class="simple-dropdown-link">Make it Featured</p>
        
                    <p class="simple-dropdown-link">Report Post</p>
        
                    <p class="simple-dropdown-link">Report Author</p>
                </div>
                </div>
            </div>
            
            <div class="widget-box-status">
                <div class="widget-box-status-content">
                <div class="user-status">
                    <a class="user-status-avatar" href="profile-timeline">
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
                
                    <p class="user-status-title medium"><a class="bold" href="profile-timeline">Bearded Wonder</a></p>
                
                    <p class="user-status-text small">39 minutes ago</p>
                </div>
        
                <p class="widget-box-status-text">Sorry everyone, but from now on, I will only be able to edit and upload one design tutorial per month. This happens because I'm having a lot on my plate right now and recording and editing the tutorials requiere a lot of attention.</p>
        
                <div class="content-actions">
                    <div class="content-action">
                    <div class="meta-line">
                        <div class="meta-line-list reaction-item-list">
                        <div class="reaction-item">
                            <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/dislike.png" alt="reaction-dislike"/>
                
                            <div class="simple-dropdown padded reaction-item-dropdown">
                            <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/dislike.png" alt="reaction-dislike"/> <span class="bold">Dislike</span></p>
                            
                            <p class="simple-dropdown-text">Matt Parker</p>
        
                            <p class="simple-dropdown-text">Destroy Dex</p>
        
                            <p class="simple-dropdown-text">The Green Goo</p>
                            </div>
                        </div>
        
                        <div class="reaction-item">
                            <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/love.png" alt="reaction-love"/>
                
                            <div class="simple-dropdown padded reaction-item-dropdown">
                            <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/love.png" alt="reaction-love"/> <span class="bold">Love</span></p>
                            
                            <p class="simple-dropdown-text">Sandra Strange</p>
        
                            <p class="simple-dropdown-text">Jane Rodgers</p>
                            </div>
                        </div>
        
                        <div class="reaction-item">
                            <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/like.png" alt="reaction-like"/>
                
                            <div class="simple-dropdown padded reaction-item-dropdown">
                            <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/like.png" alt="reaction-like"/> <span class="bold">Like</span></p>
                            
                            <p class="simple-dropdown-text">Neko Bebop</p>
        
                            <p class="simple-dropdown-text">Nick Grissom</p>
        
                            <p class="simple-dropdown-text">Sarah Diamond</p>
        
                            <p class="simple-dropdown-text">Jett Spiegel</p>
        
                            <p class="simple-dropdown-text"><span class="bold">and 2 more...</span></p>
                            </div>
                        </div>
                        </div>
                
                        <p class="meta-line-text">11</p>
                    </div>
                
                    <div class="meta-line">
                        <div class="meta-line-list user-avatar-list">
                        <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                            <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/08.jpg"></div>
                            </div>
                        </div>
                
                        <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                            <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/11.jpg"></div>
                            </div>
                        </div>
                
                        <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                            <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/06.jpg"></div>
                            </div>
                        </div>
                
                        <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                            <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/07.jpg"></div>
                            </div>
                        </div>
                
                        <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                            <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/10.jpg"></div>
                            </div>
                        </div>
                        </div>
                
                        <p class="meta-line-text">18 Participants</p>
                    </div>
                    </div>
                
                    <div class="content-action">
                    <div class="meta-line">
                        <p class="meta-line-link">15 Comments</p>
                    </div>
                
                    <div class="meta-line">
                        <p class="meta-line-text">0 Shares</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        
            <div class="post-options">
                <div class="post-option-wrap">
                <div class="post-option reaction-options-dropdown-trigger">
                    <svg class="post-option-icon icon-thumbs-up">
                    <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
        
                    <p class="post-option-text">React!</p>
                </div>
        
                <div class="reaction-options reaction-options-dropdown">
                    <div class="reaction-option text-tooltip-tft" data-title="Like">
                    <img class="reaction-option-image" src="img/reaction/like.png" alt="reaction-like"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Love">
                    <img class="reaction-option-image" src="img/reaction/love.png" alt="reaction-love"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Dislike">
                    <img class="reaction-option-image" src="img/reaction/dislike.png" alt="reaction-dislike"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Happy">
                    <img class="reaction-option-image" src="img/reaction/happy.png" alt="reaction-happy"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Funny">
                    <img class="reaction-option-image" src="img/reaction/funny.png" alt="reaction-funny"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Wow">
                    <img class="reaction-option-image" src="img/reaction/wow.png" alt="reaction-wow"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Angry">
                    <img class="reaction-option-image" src="img/reaction/angry.png" alt="reaction-angry"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Sad">
                    <img class="reaction-option-image" src="img/reaction/sad.png" alt="reaction-sad"/>
                    </div>
                </div>
                </div>
        
                <div class="post-option">
                <svg class="post-option-icon icon-comment">
                    <use xlinkHref="#svg-comment"></use>
                </svg>
        
                <p class="post-option-text">Comment</p>
                </div>
        
                <div class="post-option">
                <svg class="post-option-icon icon-share">
                    <use xlinkHref="#svg-share"></use>
                </svg>
        
                <p class="post-option-text">Share</p>
                </div>
            </div>
            </div>

            <div class="widget-box no-padding">
            <div class="widget-box-settings">
                <div class="post-settings-wrap">
                <div class="post-settings widget-box-post-settings-dropdown-trigger">
                    <svg class="post-settings-icon icon-more-dots">
                    <use xlinkHref="#svg-more-dots"></use>
                    </svg>
                </div>
        
                <div class="simple-dropdown widget-box-post-settings-dropdown">
                    <p class="simple-dropdown-link">Edit Post</p>
        
                    <p class="simple-dropdown-link">Delete Post</p>
        
                    <p class="simple-dropdown-link">Make it Featured</p>
        
                    <p class="simple-dropdown-link">Report Post</p>
        
                    <p class="simple-dropdown-link">Report Author</p>
                </div>
                </div>
            </div>
            
            <div class="widget-box-status">
                <div class="widget-box-status-content">
                <div class="user-status">
                    <a class="user-status-avatar" href="profile-timeline">
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
                
                    <p class="user-status-title medium"><a class="bold" href="profile-timeline">Nick Grissom</a> shared a <span class="bold">post</span></p>
                
                    <p class="user-status-text small">40 minutes ago</p>
                </div>
        
                <p class="widget-box-status-text">Keep an eye out for <a href="#">@DestroyDex</a> surprise streams for awesome givaways!</p>
        
                <div class="widget-box no-padding">
                    <div class="widget-box-status">
                    <div class="widget-box-status-content">
                        <div class="user-status">
                        <a class="user-status-avatar" href="profile-timeline">
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
                        
                                <p class="user-avatar-badge-text">19</p>
                            </div>
                            </div>
                        </a>
                    
                        <p class="user-status-title medium"><a class="bold" href="profile-timeline">Destroy Dex</a></p>
                    
                        <p class="user-status-text small">6 hours ago</p>
                        </div>
        
                        <p class="widget-box-status-text">Attention everyone! From now on and through all the holydays season I'll be giving free season passes for a bunch of different games. Be on the lookout for these special streams to participate and win awesome prizes!</p>
        
                        <a class="video-status" href="https://www.twitch.tv/" target="_blank">
                        <img class="video-status-image" src="img/cover/51.jpg" alt="cover-51"/>
        
                        <div class="video-status-info">
                            <p class="video-status-meta">twitch.tv</p>
        
                            <p class="video-status-title"><span class="bold">Destroy Dex</span> on <span class="highlighted">Twitch</span></p>
        
                            <p class="video-status-text">Tune in every Sunday for awesome givaways!</p>
                        </div>
                        </a>
                    </div>
                    </div>
                </div>
        
                <div class="content-actions">
                    <div class="content-action">
                    <div class="meta-line">
                        <div class="meta-line-list reaction-item-list">
                        <div class="reaction-item">
                            <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/love.png" alt="reaction-love"/>
                
                            <div class="simple-dropdown padded reaction-item-dropdown">
                            <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/love.png" alt="reaction-love"/> <span class="bold">Love</span></p>
                            
                            <p class="simple-dropdown-text">Matt Parker</p>
        
                            <p class="simple-dropdown-text">Destroy Dex</p>
        
                            <p class="simple-dropdown-text">The Green Goo</p>
                            </div>
                        </div>
        
                        <div class="reaction-item">
                            <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/happy.png" alt="reaction-happy"/>
                
                            <div class="simple-dropdown padded reaction-item-dropdown">
                            <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/happy.png" alt="reaction-happy"/> <span class="bold">Happy</span></p>
                            
                            <p class="simple-dropdown-text">Sandra Strange</p>
                            </div>
                        </div>
        
                        <div class="reaction-item">
                            <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/like.png" alt="reaction-like"/>
                
                            <div class="simple-dropdown padded reaction-item-dropdown">
                            <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/like.png" alt="reaction-like"/> <span class="bold">Like</span></p>
                            
                            <p class="simple-dropdown-text">Neko Bebop</p>
        
                            <p class="simple-dropdown-text">Nick Grissom</p>
        
                            <p class="simple-dropdown-text">Sarah Diamond</p>
        
                            <p class="simple-dropdown-text">Jett Spiegel</p>
        
                            <p class="simple-dropdown-text">Marcus Jhonson</p>
        
                            <p class="simple-dropdown-text">Jane Rodgers</p>
        
                            <p class="simple-dropdown-text"><span class="bold">and 6 more...</span></p>
                            </div>
                        </div>
                        </div>
                
                        <p class="meta-line-text">16</p>
                    </div>
                
                    <div class="meta-line">
                        <div class="meta-line-list user-avatar-list">
                        <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                            <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/07.jpg"></div>
                            </div>
                        </div>
                
                        <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                            <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/13.jpg"></div>
                            </div>
                        </div>
                
                        <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                            <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/22.jpg"></div>
                            </div>
                        </div>
                
                        <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                            <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/10.jpg"></div>
                            </div>
                        </div>
                
                        <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                            <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/08.jpg"></div>
                            </div>
                        </div>
                        </div>
                
                        <p class="meta-line-text">19 Participants</p>
                    </div>
                    </div>
                
                    <div class="content-action">
                    <div class="meta-line">
                        <p class="meta-line-link">2 Comments</p>
                    </div>
                
                    <div class="meta-line">
                        <p class="meta-line-text">0 Shares</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        
            <div class="post-options">
                <div class="post-option-wrap">
                <div class="post-option reaction-options-dropdown-trigger">
                    <svg class="post-option-icon icon-thumbs-up">
                    <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
        
                    <p class="post-option-text">React!</p>
                </div>
        
                <div class="reaction-options reaction-options-dropdown">
                    <div class="reaction-option text-tooltip-tft" data-title="Like">
                    <img class="reaction-option-image" src="img/reaction/like.png" alt="reaction-like"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Love">
                    <img class="reaction-option-image" src="img/reaction/love.png" alt="reaction-love"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Dislike">
                    <img class="reaction-option-image" src="img/reaction/dislike.png" alt="reaction-dislike"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Happy">
                    <img class="reaction-option-image" src="img/reaction/happy.png" alt="reaction-happy"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Funny">
                    <img class="reaction-option-image" src="img/reaction/funny.png" alt="reaction-funny"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Wow">
                    <img class="reaction-option-image" src="img/reaction/wow.png" alt="reaction-wow"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Angry">
                    <img class="reaction-option-image" src="img/reaction/angry.png" alt="reaction-angry"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Sad">
                    <img class="reaction-option-image" src="img/reaction/sad.png" alt="reaction-sad"/>
                    </div>
                </div>
                </div>
        
                <div class="post-option">
                <svg class="post-option-icon icon-comment">
                    <use xlinkHref="#svg-comment"></use>
                </svg>
        
                <p class="post-option-text">Comment</p>
                </div>
        
                <div class="post-option">
                <svg class="post-option-icon icon-share">
                    <use xlinkHref="#svg-share"></use>
                </svg>
        
                <p class="post-option-text">Share</p>
                </div>
            </div>
            </div>

            <div class="widget-box no-padding">
            <div class="widget-box-settings">
                <div class="post-settings-wrap">
                <div class="post-settings widget-box-post-settings-dropdown-trigger">
                    <svg class="post-settings-icon icon-more-dots">
                    <use xlinkHref="#svg-more-dots"></use>
                    </svg>
                </div>
        
                <div class="simple-dropdown widget-box-post-settings-dropdown">
                    <p class="simple-dropdown-link">Edit Post</p>
        
                    <p class="simple-dropdown-link">Delete Post</p>
        
                    <p class="simple-dropdown-link">Make it Featured</p>
        
                    <p class="simple-dropdown-link">Report Post</p>
        
                    <p class="simple-dropdown-link">Report Author</p>
                </div>
                </div>
            </div>
            
            <div class="widget-box-status">
                <div class="widget-box-status-content">
                <div class="user-status">
                    <a class="user-status-avatar" href="profile-timeline">
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
                
                    <div class="user-status-title medium"><a class="bold" href="profile-timeline">Neko Bebop</a> replied to the discussion <a class="bold" href="forums-discussion">In your opinion, who has the best Cosplay?</a> in the forum
                    <a class="user-avatar micro no-stats" href="group-timeline">
                        <div class="user-avatar-border">
                        <div class="hexagon-22-24"></div>
                        </div>
                    
                        <div class="user-avatar-content">
                        <div class="hexagon-image-18-20" data-src="img/avatar/24.jpg"></div>
                        </div>
                    </a>
                    <a class="bold" href="group-timeline">Cosplayers of the World</a>
                    </div>
                
                    <p class="user-status-text small">42 minutes ago</p>
                </div>
        
                <blockquote class="quote-box">
                    <svg class="quote-box-icon icon-quote">
                    <use xlinkHref="#svg-quote"></use>
                    </svg>
                    
                    <p class="quote-box-text">I've been cosplaying for 9 years now and I've never seen a more perfect cosplay like the Samurai Robot one from Rosie Sakura.</p>
                </blockquote>
        
                <div class="content-actions">
                    <div class="content-action">
                    <div class="meta-line">
                        <div class="meta-line-list reaction-item-list">
                        <div class="reaction-item">
                            <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/love.png" alt="reaction-love"/>
                
                            <div class="simple-dropdown padded reaction-item-dropdown">
                            <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/love.png" alt="reaction-love"/> <span class="bold">Love</span></p>
                            
                            <p class="simple-dropdown-text">Matt Parker</p>
        
                            <p class="simple-dropdown-text">Destroy Dex</p>
        
                            <p class="simple-dropdown-text">The Green Goo</p>
                            </div>
                        </div>
        
                        <div class="reaction-item">
                            <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/happy.png" alt="reaction-happy"/>
                
                            <div class="simple-dropdown padded reaction-item-dropdown">
                            <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/happy.png" alt="reaction-happy"/> <span class="bold">Happy</span></p>
                            
                            <p class="simple-dropdown-text">Sandra Strange</p>
                            </div>
                        </div>
        
                        <div class="reaction-item">
                            <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/like.png" alt="reaction-like"/>
                
                            <div class="simple-dropdown padded reaction-item-dropdown">
                            <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/like.png" alt="reaction-like"/> <span class="bold">Like</span></p>
                            
                            <p class="simple-dropdown-text">Neko Bebop</p>
        
                            <p class="simple-dropdown-text">Nick Grissom</p>
        
                            <p class="simple-dropdown-text">Sarah Diamond</p>
        
                            <p class="simple-dropdown-text">Jett Spiegel</p>
        
                            <p class="simple-dropdown-text">Marcus Jhonson</p>
        
                            <p class="simple-dropdown-text">Jane Rodgers</p>
        
                            <p class="simple-dropdown-text"><span class="bold">and 6 more...</span></p>
                            </div>
                        </div>
                        </div>
                
                        <p class="meta-line-text">16</p>
                    </div>
                
                    <div class="meta-line">
                        <div class="meta-line-list user-avatar-list">
                        <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                            <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/07.jpg"></div>
                            </div>
                        </div>
                
                        <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                            <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/13.jpg"></div>
                            </div>
                        </div>
                
                        <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                            <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/22.jpg"></div>
                            </div>
                        </div>
                
                        <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                            <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/10.jpg"></div>
                            </div>
                        </div>
                
                        <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                            <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/08.jpg"></div>
                            </div>
                        </div>
                        </div>
                
                        <p class="meta-line-text">19 Participants</p>
                    </div>
                    </div>
                
                    <div class="content-action">
                    <div class="meta-line">
                        <p class="meta-line-link">2 Comments</p>
                    </div>
                
                    <div class="meta-line">
                        <p class="meta-line-text">0 Shares</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        
            <div class="post-options">
                <div class="post-option-wrap">
                <div class="post-option reaction-options-dropdown-trigger">
                    <svg class="post-option-icon icon-thumbs-up">
                    <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
        
                    <p class="post-option-text">React!</p>
                </div>
        
                <div class="reaction-options reaction-options-dropdown">
                    <div class="reaction-option text-tooltip-tft" data-title="Like">
                    <img class="reaction-option-image" src="img/reaction/like.png" alt="reaction-like"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Love">
                    <img class="reaction-option-image" src="img/reaction/love.png" alt="reaction-love"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Dislike">
                    <img class="reaction-option-image" src="img/reaction/dislike.png" alt="reaction-dislike"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Happy">
                    <img class="reaction-option-image" src="img/reaction/happy.png" alt="reaction-happy"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Funny">
                    <img class="reaction-option-image" src="img/reaction/funny.png" alt="reaction-funny"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Wow">
                    <img class="reaction-option-image" src="img/reaction/wow.png" alt="reaction-wow"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Angry">
                    <img class="reaction-option-image" src="img/reaction/angry.png" alt="reaction-angry"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Sad">
                    <img class="reaction-option-image" src="img/reaction/sad.png" alt="reaction-sad"/>
                    </div>
                </div>
                </div>
        
                <div class="post-option">
                <svg class="post-option-icon icon-comment">
                    <use xlinkHref="#svg-comment"></use>
                </svg>
        
                <p class="post-option-text">Comment</p>
                </div>
        
                <div class="post-option">
                <svg class="post-option-icon icon-share">
                    <use xlinkHref="#svg-share"></use>
                </svg>
        
                <p class="post-option-text">Share</p>
                </div>
            </div>
            </div>
        
            <div class="widget-box no-padding">
            <div class="widget-box-settings">
                <div class="post-settings-wrap">
                <div class="post-settings widget-box-post-settings-dropdown-trigger">
                    <svg class="post-settings-icon icon-more-dots">
                    <use xlinkHref="#svg-more-dots"></use>
                    </svg>
                </div>
        
                <div class="simple-dropdown widget-box-post-settings-dropdown">
                    <p class="simple-dropdown-link">Edit Post</p>
        
                    <p class="simple-dropdown-link">Delete Post</p>
        
                    <p class="simple-dropdown-link">Make it Featured</p>
        
                    <p class="simple-dropdown-link">Report Post</p>
        
                    <p class="simple-dropdown-link">Report Author</p>
                </div>
                </div>
            </div>
            
            <div class="widget-box-status">
                <div class="widget-box-status-content">
                <div class="user-status">
                    <a class="user-status-avatar" href="profile-timeline">
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
                
                    <p class="user-status-title medium"><a class="bold" href="profile-timeline">Nick Grissom</a></p>
                
                    <p class="user-status-text small">1 hour ago</p>
                </div>
        
                <p class="widget-box-status-text">When you finally pass the quest that you've been trying for so long...</p>
                </div>
        
                <div class="iframe-wrap">
                <iframe src="https://giphy.com/embed/1LnQIODGufGec" allowFullScreen></iframe>
                </div>
        
                <div class="widget-box-status-content">
                <div class="content-actions">
                    <div class="content-action">
                    <div class="meta-line">
                        <div class="meta-line-list reaction-item-list">
                        <div class="reaction-item">
                            <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/love.png" alt="reaction-love"/>
                
                            <div class="simple-dropdown padded reaction-item-dropdown">
                            <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/love.png" alt="reaction-love"/> <span class="bold">Love</span></p>
                            
                            <p class="simple-dropdown-text">Matt Parker</p>
        
                            <p class="simple-dropdown-text">Destroy Dex</p>
        
                            <p class="simple-dropdown-text">The Green Goo</p>
                            </div>
                        </div>
        
                        <div class="reaction-item">
                            <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/happy.png" alt="reaction-happy"/>
                
                            <div class="simple-dropdown padded reaction-item-dropdown">
                            <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/happy.png" alt="reaction-happy"/> <span class="bold">Happy</span></p>
                            
                            <p class="simple-dropdown-text">Sandra Strange</p>
        
                            <p class="simple-dropdown-text">Jane Rodgers</p>
                            </div>
                        </div>
        
                        <div class="reaction-item">
                            <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/like.png" alt="reaction-like"/>
                
                            <div class="simple-dropdown padded reaction-item-dropdown">
                            <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/like.png" alt="reaction-like"/> <span class="bold">Like</span></p>
                            
                            <p class="simple-dropdown-text">Neko Bebop</p>
        
                            <p class="simple-dropdown-text">Nick Grissom</p>
        
                            <p class="simple-dropdown-text">Sarah Diamond</p>
        
                            <p class="simple-dropdown-text">Jett Spiegel</p>
        
                            <p class="simple-dropdown-text">Marcus Jhonson</p>
        
                            <p class="simple-dropdown-text"><span class="bold">and 6 more...</span></p>
                            </div>
                        </div>
                        </div>
                
                        <p class="meta-line-text">16</p>
                    </div>
                
                    <div class="meta-line">
                        <div class="meta-line-list user-avatar-list">
                        <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                            <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/07.jpg"></div>
                            </div>
                        </div>
                
                        <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                            <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/13.jpg"></div>
                            </div>
                        </div>
                
                        <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                            <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/22.jpg"></div>
                            </div>
                        </div>
                
                        <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                            <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/10.jpg"></div>
                            </div>
                        </div>
                
                        <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                            <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/08.jpg"></div>
                            </div>
                        </div>
                        </div>
                
                        <p class="meta-line-text">19 Participants</p>
                    </div>
                    </div>
                
                    <div class="content-action">
                    <div class="meta-line">
                        <p class="meta-line-link">2 Comments</p>
                    </div>
                
                    <div class="meta-line">
                        <p class="meta-line-text">0 Shares</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        
            <div class="post-options">
                <div class="post-option-wrap">
                <div class="post-option reaction-options-dropdown-trigger">
                    <svg class="post-option-icon icon-thumbs-up">
                    <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
        
                    <p class="post-option-text">React!</p>
                </div>
        
                <div class="reaction-options reaction-options-dropdown">
                    <div class="reaction-option text-tooltip-tft" data-title="Like">
                    <img class="reaction-option-image" src="img/reaction/like.png" alt="reaction-like"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Love">
                    <img class="reaction-option-image" src="img/reaction/love.png" alt="reaction-love"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Dislike">
                    <img class="reaction-option-image" src="img/reaction/dislike.png" alt="reaction-dislike"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Happy">
                    <img class="reaction-option-image" src="img/reaction/happy.png" alt="reaction-happy"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Funny">
                    <img class="reaction-option-image" src="img/reaction/funny.png" alt="reaction-funny"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Wow">
                    <img class="reaction-option-image" src="img/reaction/wow.png" alt="reaction-wow"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Angry">
                    <img class="reaction-option-image" src="img/reaction/angry.png" alt="reaction-angry"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Sad">
                    <img class="reaction-option-image" src="img/reaction/sad.png" alt="reaction-sad"/>
                    </div>
                </div>
                </div>
        
                <div class="post-option">
                <svg class="post-option-icon icon-comment">
                    <use xlinkHref="#svg-comment"></use>
                </svg>
        
                <p class="post-option-text">Comment</p>
                </div>
        
                <div class="post-option">
                <svg class="post-option-icon icon-share">
                    <use xlinkHref="#svg-share"></use>
                </svg>
        
                <p class="post-option-text">Share</p>
                </div>
            </div>
            </div>
        
            <div class="widget-box no-padding">
            <div class="widget-box-settings">
                <div class="post-settings-wrap">
                <div class="post-settings widget-box-post-settings-dropdown-trigger">
                    <svg class="post-settings-icon icon-more-dots">
                    <use xlinkHref="#svg-more-dots"></use>
                    </svg>
                </div>
        
                <div class="simple-dropdown widget-box-post-settings-dropdown">
                    <p class="simple-dropdown-link">Edit Post</p>
        
                    <p class="simple-dropdown-link">Delete Post</p>
        
                    <p class="simple-dropdown-link">Make it Featured</p>
        
                    <p class="simple-dropdown-link">Report Post</p>
        
                    <p class="simple-dropdown-link">Report Author</p>
                </div>
                </div>
            </div>
            
            <div class="widget-box-status">
                <div class="widget-box-status-content">
                <div class="user-status">
                    <a class="user-status-avatar" href="profile-timeline">
                    <div class="user-avatar small no-outline">
                        <div class="user-avatar-content">
                        <div class="hexagon-image-30-32" data-src="img/avatar/07.jpg"></div>
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
                    
                        <p class="user-avatar-badge-text">26</p>
                        </div>
                    </div>
                    </a>
                
                    <p class="user-status-title medium"><a class="bold" href="profile-timeline">Sarah Diamond</a> created a <span class="bold">poll</span></p>
                
                    <p class="user-status-text small">9 minutes ago</p>
                </div>
        
                <p class="widget-box-status-text">I've created a poll to ask all of you what you would like to see more in my upcoming videos! It will only take a couple of seconds...thanks to all in advance!!</p>
        
                <div class="poll-box">
                    <p class="poll-title">What do you wanna see in my upcoming videos?</p>
                
                    <p class="poll-text">Poll ends in 5 days</p>
                
                    <div class="poll-results">
                    <div class="poll-result">
                        <div class="progress-stat">
                        <div class="bar-progress-wrap medium">
                            <p class="bar-progress-info medium negative regular">Walkthroughs<span class="bar-progress-text no-space"></span></p>
                        </div>
                    
                        <div id="poll-result-1" class="progress-stat-bar"></div>
                        </div>
                
                        <div class="meta-line">
                        <div class="meta-line-list user-avatar-list">
                            <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                                <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                                <div class="hexagon-image-18-20" data-src="img/avatar/10.jpg"></div>
                            </div>
                            </div>
                
                            <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                                <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                                <div class="hexagon-image-18-20" data-src="img/avatar/05.jpg"></div>
                            </div>
                            </div>
                
                            <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                                <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                                <div class="hexagon-image-18-20" data-src="img/avatar/09.jpg"></div>
                            </div>
                            </div>
                
                            <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                                <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                                <div class="hexagon-image-18-20" data-src="img/avatar/08.jpg"></div>
                            </div>
                            </div>
                
                            <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                                <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                                <div class="hexagon-image-18-20" data-src="img/avatar/12.jpg"></div>
                            </div>
                            </div>
                
                            <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                                <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                                <div class="hexagon-image-18-20" data-src="img/avatar/16.jpg"></div>
                            </div>
                            </div>
                
                            <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                                <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                                <div class="hexagon-image-18-20" data-src="img/avatar/06.jpg"></div>
                            </div>
                            </div>
                
                            <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                                <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                                <div class="hexagon-image-18-20" data-src="img/avatar/13.jpg"></div>
                            </div>
                            </div>
                
                            <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                                <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                                <div class="hexagon-image-18-20" data-src="img/avatar/11.jpg"></div>
                            </div>
                            </div>
                
                            <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                                <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                                <div class="hexagon-image-18-20" data-src="img/avatar/30.jpg"></div>
                            </div>
                            </div>
                
                            <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                                <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                                <div class="hexagon-image-18-20" data-src="img/avatar/03.jpg"></div>
                            </div>
                            </div>
                
                            <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                                <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                                <div class="hexagon-image-18-20" data-src="img/avatar/04.jpg"></div>
                            </div>
                            </div>
                        </div>
                
                        <p class="meta-line-text">12 Votes</p>
                        </div>
                    </div>
                
                    <div class="poll-result">
                        <div class="progress-stat">
                        <div class="bar-progress-wrap medium">
                            <p class="bar-progress-info medium negative regular">Retro Games<span class="bar-progress-text no-space"></span></p>
                        </div>
                    
                        <div id="poll-result-2" class="progress-stat-bar"></div>
                        </div>
                
                        <div class="meta-line">
                        <div class="meta-line-list user-avatar-list">
                            <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                                <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                                <div class="hexagon-image-18-20" data-src="img/avatar/11.jpg"></div>
                            </div>
                            </div>
                
                            <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                                <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                                <div class="hexagon-image-18-20" data-src="img/avatar/22.jpg"></div>
                            </div>
                            </div>
                
                            <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                                <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                                <div class="hexagon-image-18-20" data-src="img/avatar/21.jpg"></div>
                            </div>
                            </div>
                
                            <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                                <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                                <div class="hexagon-image-18-20" data-src="img/avatar/19.jpg"></div>
                            </div>
                            </div>
                
                            <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                                <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                                <div class="hexagon-image-18-20" data-src="img/avatar/14.jpg"></div>
                            </div>
                            </div>
                
                            <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                                <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                                <div class="hexagon-image-18-20" data-src="img/avatar/15.jpg"></div>
                            </div>
                            </div>
                
                            <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                                <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                                <div class="hexagon-image-18-20" data-src="img/avatar/07.jpg"></div>
                            </div>
                            </div>
                        </div>
                
                        <p class="meta-line-text">7 Votes</p>
                        </div>
                    </div>
                
                    <div class="poll-result">
                        <div class="progress-stat">
                        <div class="bar-progress-wrap medium">
                            <p class="bar-progress-info medium negative regular">Unboxings<span class="bar-progress-text no-space"></span></p>
                        </div>
                    
                        <div id="poll-result-3" class="progress-stat-bar"></div>
                        </div>
                
                        <div class="meta-line">
                        <div class="meta-line-list user-avatar-list">
                            <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                                <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                                <div class="hexagon-image-18-20" data-src="img/avatar/18.jpg"></div>
                            </div>
                            </div>
                
                            <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                                <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                                <div class="hexagon-image-18-20" data-src="img/avatar/02.jpg"></div>
                            </div>
                            </div>
                        </div>
                
                        <p class="meta-line-text">2 Votes</p>
                        </div>
                    </div>
                    </div>
                </div>
        
                <div class="content-actions">
                    <div class="content-action">
                    <div class="meta-line">
                        <div class="meta-line-list reaction-item-list">
                        <div class="reaction-item">
                            <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/funny.png" alt="reaction-funny"/>
                
                            <div class="simple-dropdown padded reaction-item-dropdown">
                            <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/funny.png" alt="reaction-funny"/> <span class="bold">Funny</span></p>
                            
                            <p class="simple-dropdown-text">Matt Parker</p>
        
                            <p class="simple-dropdown-text">Destroy Dex</p>
        
                            <p class="simple-dropdown-text">The Green Goo</p>
                            </div>
                        </div>
        
                        <div class="reaction-item">
                            <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/like.png" alt="reaction-like"/>
                
                            <div class="simple-dropdown padded reaction-item-dropdown">
                            <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/like.png" alt="reaction-like"/> <span class="bold">Like</span></p>
                            
                            <p class="simple-dropdown-text">Sandra Strange</p>
        
                            <p class="simple-dropdown-text">Jane Rodgers</p>
                            </div>
                        </div>
        
                        <div class="reaction-item">
                            <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/love.png" alt="reaction-love"/>
                
                            <div class="simple-dropdown padded reaction-item-dropdown">
                            <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/love.png" alt="reaction-love"/> <span class="bold">Love</span></p>
                            
                            <p class="simple-dropdown-text">Neko Bebop</p>
        
                            <p class="simple-dropdown-text">Nick Grissom</p>
        
                            <p class="simple-dropdown-text">Sarah Diamond</p>
        
                            <p class="simple-dropdown-text">Jett Spiegel</p>
                            </div>
                        </div>
                        </div>
                
                        <p class="meta-line-text">9</p>
                    </div>
                
                    <div class="meta-line">
                        <div class="meta-line-list user-avatar-list">
                        <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                            <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/09.jpg"></div>
                            </div>
                        </div>
                
                        <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                            <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/08.jpg"></div>
                            </div>
                        </div>
                
                        <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                            <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/12.jpg"></div>
                            </div>
                        </div>
                
                        <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                            <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/16.jpg"></div>
                            </div>
                        </div>
                
                        <div class="user-avatar micro no-stats">
                            <div class="user-avatar-border">
                            <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/06.jpg"></div>
                            </div>
                        </div>
                        </div>
                
                        <p class="meta-line-text">11 Participants</p>
                    </div>
                    </div>
                
                    <div class="content-action">
                    <div class="meta-line">
                        <p class="meta-line-link">1 Comments</p>
                    </div>
                
                    <div class="meta-line">
                        <p class="meta-line-text">0 Shares</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        
            <div class="post-options">
                <div class="post-option-wrap">
                <div class="post-option reaction-options-dropdown-trigger">
                    <svg class="post-option-icon icon-thumbs-up">
                    <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
        
                    <p class="post-option-text">React!</p>
                </div>
        
                <div class="reaction-options reaction-options-dropdown">
                    <div class="reaction-option text-tooltip-tft" data-title="Like">
                    <img class="reaction-option-image" src="img/reaction/like.png" alt="reaction-like"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Love">
                    <img class="reaction-option-image" src="img/reaction/love.png" alt="reaction-love"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Dislike">
                    <img class="reaction-option-image" src="img/reaction/dislike.png" alt="reaction-dislike"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Happy">
                    <img class="reaction-option-image" src="img/reaction/happy.png" alt="reaction-happy"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Funny">
                    <img class="reaction-option-image" src="img/reaction/funny.png" alt="reaction-funny"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Wow">
                    <img class="reaction-option-image" src="img/reaction/wow.png" alt="reaction-wow"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Angry">
                    <img class="reaction-option-image" src="img/reaction/angry.png" alt="reaction-angry"/>
                    </div>
        
                    <div class="reaction-option text-tooltip-tft" data-title="Sad">
                    <img class="reaction-option-image" src="img/reaction/sad.png" alt="reaction-sad"/>
                    </div>
                </div>
                </div>
        
                <div class="post-option">
                <svg class="post-option-icon icon-comment">
                    <use xlinkHref="#svg-comment"></use>
                </svg>
        
                <p class="post-option-text">Comment</p>
                </div>
        
                <div class="post-option">
                <svg class="post-option-icon icon-share">
                    <use xlinkHref="#svg-share"></use>
                </svg>
        
                <p class="post-option-text">Share</p>
                </div>
            </div>
            </div>

            <div class="loader-bars">
            <div class="loader-bar"></div>
            <div class="loader-bar"></div>
            <div class="loader-bar"></div>
            <div class="loader-bar"></div>
            <div class="loader-bar"></div>
            <div class="loader-bar"></div>
            <div class="loader-bar"></div>
            <div class="loader-bar"></div>
            </div>
        </div>

        <div class="grid-column">
            <div class="stats-box-slider">
            <div class="stats-box-slider-controls">
                <p class="stats-box-slider-controls-title">Stats Box</p>
        
                <div id="stats-box-slider-controls" class="slider-controls">
                <div class="slider-control negative left">
                    <svg class="slider-control-icon icon-small-arrow">
                    <use xlinkHref="#svg-small-arrow"></use>
                    </svg>
                </div>
        
                <div class="slider-control negative right">
                    <svg class="slider-control-icon icon-small-arrow">
                    <use xlinkHref="#svg-small-arrow"></use>
                    </svg>
                </div>
                </div>
            </div>
            
            <div id="stats-box-slider-items" class="stats-box-slider-items">
                <div class="stats-box stat-profile-views">
                <div class="stats-box-value-wrap">
                    <p class="stats-box-value">87.365</p>
            
                    <div class="stats-box-diff">
                    <div class="stats-box-diff-icon positive">
                        <svg class="icon-plus-small">
                        <use xlinkHref="#svg-plus-small"></use>
                        </svg>
                    </div>
            
                    <p class="stats-box-diff-value">3.2%</p>
                    </div>
                </div>
            
                <p class="stats-box-title">Profile Views</p>
            
                <p class="stats-box-text">In the last month</p>
                </div>
        
                <div class="stats-box stat-posts-created">
                <div class="stats-box-value-wrap">
                    <p class="stats-box-value">294</p>
            
                    <div class="stats-box-diff">
                    <div class="stats-box-diff-icon positive">
                        <svg class="icon-plus-small">
                        <use xlinkHref="#svg-plus-small"></use>
                        </svg>
                    </div>
            
                    <p class="stats-box-diff-value">0.4%</p>
                    </div>
                </div>
            
                <p class="stats-box-title">Posts Created</p>
            
                <p class="stats-box-text">In the last month</p>
                </div>
        
                <div class="stats-box stat-reactions-received">
                <div class="stats-box-value-wrap">
                    <p class="stats-box-value">2560</p>
            
                    <div class="stats-box-diff">
                    <div class="stats-box-diff-icon negative">
                        <svg class="icon-minus-small">
                        <use xlinkHref="#svg-minus-small"></use>
                        </svg>
                    </div>
            
                    <p class="stats-box-diff-value">1.8%</p>
                    </div>
                </div>
            
                <p class="stats-box-title">Reactions Received</p>
            
                <p class="stats-box-text">In the last month</p>
                </div>
        
                <div class="stats-box stat-comments-received">
                <div class="stats-box-value-wrap">
                    <p class="stats-box-value">947</p>
            
                    <div class="stats-box-diff">
                    <div class="stats-box-diff-icon positive">
                        <svg class="icon-plus-small">
                        <use xlinkHref="#svg-plus-small"></use>
                        </svg>
                    </div>
            
                    <p class="stats-box-diff-value">4.5%</p>
                    </div>
                </div>
            
                <p class="stats-box-title">Comments Received</p>
            
                <p class="stats-box-text">In the last month</p>
                </div>
            </div>
            </div>

            <div class="widget-box">
            <div class="widget-box-controls">
                <div id="reaction-stat-slider-controls" class="slider-controls">
                <div class="slider-control left">
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
        
            <p class="widget-box-title">Reactions Received</p>
        
            <div class="widget-box-content">
                <div id="reaction-stat-slider-items" class="widget-box-content-slider">
                <div class="widget-box-content-slider-item">
                    <div class="reaction-stats">
                    <div class="reaction-stat">
                        <img class="reaction-stat-image" src="img/reaction/like.png" alt="reaction-like"/>
            
                        <p class="reaction-stat-title">12.642</p>
            
                        <p class="reaction-stat-text">Likes</p>
                    </div>
            
                    <div class="reaction-stat">
                        <img class="reaction-stat-image" src="img/reaction/love.png" alt="reaction-love"/>
            
                        <p class="reaction-stat-title">8.913</p>
            
                        <p class="reaction-stat-text">Loves</p>
                    </div>
                    </div>
            
                    <div class="reaction-stats">
                    <div class="reaction-stat">
                        <img class="reaction-stat-image" src="img/reaction/dislike.png" alt="reaction-dislike"/>
            
                        <p class="reaction-stat-title">945</p>
            
                        <p class="reaction-stat-text">Dislikes</p>
                    </div>
            
                    <div class="reaction-stat">
                        <img class="reaction-stat-image" src="img/reaction/happy.png" alt="reaction-happy"/>
            
                        <p class="reaction-stat-title">7.034</p>
            
                        <p class="reaction-stat-text">Happy</p>
                    </div>
                    </div>
                </div>
        
                <div class="widget-box-content-slider-item">
                    <div class="reaction-stats">
                    <div class="reaction-stat">
                        <img class="reaction-stat-image" src="img/reaction/funny.png" alt="reaction-funny"/>
            
                        <p class="reaction-stat-title">2.356</p>
            
                        <p class="reaction-stat-text">Funny</p>
                    </div>
            
                    <div class="reaction-stat">
                        <img class="reaction-stat-image" src="img/reaction/wow.png" alt="reaction-wow"/>
            
                        <p class="reaction-stat-title">5.944</p>
            
                        <p class="reaction-stat-text">Wow!</p>
                    </div>
                    </div>
            
                    <div class="reaction-stats">
                    <div class="reaction-stat">
                        <img class="reaction-stat-image" src="img/reaction/angry.png" alt="reaction-angry"/>
            
                        <p class="reaction-stat-title">1.706</p>
            
                        <p class="reaction-stat-text">Angry</p>
                    </div>
            
                    <div class="reaction-stat">
                        <img class="reaction-stat-image" src="img/reaction/sad.png" alt="reaction-sad"/>
            
                        <p class="reaction-stat-title">801</p>
            
                        <p class="reaction-stat-text">Sad</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div class="widget-box no-padding">
            <div class="widget-box-controls">
                <div class="slider-controls">
                <div class="slider-control left">
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
        
            <p class="widget-box-title">August 2019</p>
        
            <div class="widget-box-content">
                <div class="calendar small">
                <div class="calendar-week">
                    <p class="calendar-week-day"><span class="week-day-short">Sun</span><span class="week-day-long">Sunday</span></p>
            
                    <p class="calendar-week-day"><span class="week-day-short">Mon</span><span class="week-day-long">Monday</span></p>
            
                    <p class="calendar-week-day"><span class="week-day-short">Tue</span><span class="week-day-long">Tuesday</span></p>
            
                    <p class="calendar-week-day"><span class="week-day-short">Wed</span><span class="week-day-long">Wednesday</span></p>
            
                    <p class="calendar-week-day"><span class="week-day-short">Thu</span><span class="week-day-long">Thursday</span></p>
            
                    <p class="calendar-week-day"><span class="week-day-short">Fri</span><span class="week-day-long">Friday</span></p>
            
                    <p class="calendar-week-day"><span class="week-day-short">Sat</span><span class="week-day-long">Saturday</span></p>
                </div>
            
                <div class="calendar-days">
                    <div class="calendar-day-row">
                    <div class="calendar-day inactive">
                        <p class="calendar-day-number">29</p>
                    </div>
            
                    <div class="calendar-day inactive">
                        <p class="calendar-day-number">30</p>
                    </div>
            
                    <div class="calendar-day inactive">
                        <p class="calendar-day-number">31</p>
                    </div>
            
                    <div class="calendar-day">
                        <p class="calendar-day-number">1</p>
                    </div>
            
                    <div class="calendar-day">
                        <p class="calendar-day-number">2</p>
            
                        <div class="calendar-day-events">
                        <p class="calendar-day-event primary"><span class="calendar-day-event-text">Dex's Birthday</span></p>
            
                        <p class="calendar-day-event secondary"><span class="calendar-day-event-text">Sara's Big Stream</span></p>
            
                        <p class="calendar-day-event secondary"><span class="calendar-day-event-text">Striker GO Release</span></p>
                        </div>
                    </div>
            
                    <div class="calendar-day">
                        <p class="calendar-day-number">3</p>
                    </div>
            
                    <div class="calendar-day">
                        <p class="calendar-day-number">4</p>
                    </div>
                    </div>
            
                    <div class="calendar-day-row">
                    <div class="calendar-day">
                        <p class="calendar-day-number">5</p>
                    </div>
            
                    <div class="calendar-day">
                        <p class="calendar-day-number">6</p>
                    </div>
            
                    <div class="calendar-day current">
                        <p class="calendar-day-number">7</p>
                    </div>
            
                    <div class="calendar-day">
                        <p class="calendar-day-number">8</p>
                    </div>
            
                    <div class="calendar-day">
                        <p class="calendar-day-number">9</p>
                    </div>
            
                    <div class="calendar-day">
                        <p class="calendar-day-number">10</p>
                    </div>
            
                    <div class="calendar-day">
                        <p class="calendar-day-number">11</p>
                    </div>
                    </div>
            
                    <div class="calendar-day-row">
                    <div class="calendar-day">
                        <p class="calendar-day-number">12</p>
                    </div>
            
                    <div class="calendar-day active">
                        <p class="calendar-day-number">13</p>
            
                        <div class="calendar-day-events">
                        <p class="calendar-day-event secondary"><span class="calendar-day-event-text">Breakfast with Neko</span></p>
            
                        <p class="calendar-day-event primary"><span class="calendar-day-event-text">Streaming Party</span></p>
                        </div>
                    </div>
            
                    <div class="calendar-day">
                        <p class="calendar-day-number">14</p>
                    </div>
            
                    <div class="calendar-day">
                        <p class="calendar-day-number">15</p>
                    </div>
            
                    <div class="calendar-day">
                        <p class="calendar-day-number">16</p>
                    </div>
            
                    <div class="calendar-day">
                        <p class="calendar-day-number">17</p>
                    </div>
            
                    <div class="calendar-day">
                        <p class="calendar-day-number">18</p>
                    </div>
                    </div>
            
                    <div class="calendar-day-row">
                    <div class="calendar-day">
                        <p class="calendar-day-number">19</p>
                    </div>
            
                    <div class="calendar-day">
                        <p class="calendar-day-number">20</p>
                    </div>
            
                    <div class="calendar-day">
                        <p class="calendar-day-number">21</p>
                    </div>
            
                    <div class="calendar-day">
                        <p class="calendar-day-number">22</p>
                    </div>
            
                    <div class="calendar-day">
                        <p class="calendar-day-number">23</p>
                    </div>
            
                    <div class="calendar-day">
                        <p class="calendar-day-number">24</p>
                    </div>
            
                    <div class="calendar-day">
                        <p class="calendar-day-number">25</p>
                    </div>
                    </div>
            
                    <div class="calendar-day-row">
                    <div class="calendar-day">
                        <p class="calendar-day-number">26</p>
            
                        <div class="calendar-day-events">
                        <p class="calendar-day-event primary"><span class="calendar-day-event-text">CosWorld 2019 After...</span></p>
                        </div>
                    </div>
            
                    <div class="calendar-day">
                        <p class="calendar-day-number">27</p>
                    </div>
            
                    <div class="calendar-day">
                        <p class="calendar-day-number">28</p>
                    </div>
            
                    <div class="calendar-day">
                        <p class="calendar-day-number">29</p>
                    </div>
            
                    <div class="calendar-day">
                        <p class="calendar-day-number">30</p>
                    </div>
            
                    <div class="calendar-day inactive">
                        <p class="calendar-day-number">1</p>
                    </div>
            
                    <div class="calendar-day inactive">
                        <p class="calendar-day-number">2</p>
                    </div>
                    </div>
                </div>
                </div>
        
                <div class="calendar-events-preview small">
                <p class="calendar-events-preview-title">Monday 13th</p>
            
                <div class="calendar-event-preview-list">
                    <div class="calendar-event-preview small secondary">
                    <div class="calendar-event-preview-start-time">
                        <p class="calendar-event-preview-start-time-title">8:30</p>
            
                        <p class="calendar-event-preview-start-time-text">AM</p>
                    </div>
            
                    <div class="calendar-event-preview-info">
                        <p class="calendar-event-preview-title">Breakfast with Neko</p>
            
                        <p class="calendar-event-preview-text">Hi Neko! I'm creating this event to invite you to have breakfast before work. Meet me at Coffebucks.</p>
                    </div>
                    </div>
            
                    <div class="calendar-event-preview small primary">
                    <div class="calendar-event-preview-start-time">
                        <p class="calendar-event-preview-start-time-title">10:00</p>
            
                        <p class="calendar-event-preview-start-time-text">PM</p>
                    </div>
            
                    <div class="calendar-event-preview-info">
                        <p class="calendar-event-preview-title">Streaming Party</p>
            
                        <p class="calendar-event-preview-text">The biggest party for Twitch streamers! Come and join us at Shenron Arena.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div class="widget-box">
            <div class="widget-box-settings">
                <div class="post-settings-wrap">
                <div class="post-settings widget-box-post-settings-dropdown-trigger">
                    <svg class="post-settings-icon icon-more-dots">
                    <use xlinkHref="#svg-more-dots"></use>
                    </svg>
                </div>
        
                <div class="simple-dropdown widget-box-post-settings-dropdown">
                    <p class="simple-dropdown-link">Widget Settings</p>
                </div>
                </div>
            </div>
        
            <p class="widget-box-title">Friends Activity</p>
        
            <div class="widget-box-content">
                <div class="user-status-list">
                <div class="user-status">
                    <a class="user-status-avatar" href="profile-timeline">
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
                
                    <p class="user-status-title"><a class="bold" href="profile-timeline">Neko Bebop</a> commented on Destroy Dex's <a class="highlighted" href="profile-timeline">photo</a></p>
                
                    <p class="user-status-timestamp">3 minutes ago</p>
                </div>
        
                <div class="user-status">
                    <a class="user-status-avatar" href="profile-timeline">
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
                
                    <p class="user-status-title"><a class="bold" href="profile-timeline">Nick Grissom</a> liked Marina Valentine's <a class="highlighted" href="profile-timeline">status update</a></p>
                
                    <p class="user-status-timestamp">12 minutes ago</p>
                </div>
        
                <div class="user-status">
                    <a class="user-status-avatar" href="profile-timeline">
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
                
                    <p class="user-status-title"><a class="bold" href="profile-timeline">The Green Goo</a> liked Nick Grissom's <a class="highlighted" href="profile-timeline">video</a></p>
                
                    <p class="user-status-timestamp">17 minutes ago</p>
                </div>
        
                <div class="user-status">
                    <a class="user-status-avatar" href="profile-timeline">
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
                
                    <p class="user-status-title"><a class="bold" href="profile-timeline">Nick Grissom</a> changed his <a class="highlighted" href="profile-timeline">profile picture</a></p>
                
                    <p class="user-status-timestamp">33 minutes ago</p>
                </div>
        
                <div class="user-status">
                    <a class="user-status-avatar" href="profile-timeline">
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
                    
                        <p class="user-avatar-badge-text">19</p>
                        </div>
                    </div>
                    </a>
                
                    <p class="user-status-title"><a class="bold" href="profile-timeline">Destroy Dex</a> commented on Rosie Sakura's <a class="highlighted" href="profile-timeline">profile</a></p>
                
                    <p class="user-status-timestamp">41 minutes ago</p>
                </div>
                </div>
            </div>
            </div>

            <div class="widget-box">
            <div class="widget-box-settings">
                <div class="post-settings-wrap">
                <div class="post-settings widget-box-post-settings-dropdown-trigger">
                    <svg class="post-settings-icon icon-more-dots">
                    <use xlinkHref="#svg-more-dots"></use>
                    </svg>
                </div>
        
                <div class="simple-dropdown widget-box-post-settings-dropdown">
                    <p class="simple-dropdown-link">Widget Settings</p>
                </div>
                </div>
            </div>
        
            <p class="widget-box-title">Groups</p>
        
            <div class="widget-box-content">
                <div class="filters">
                <p class="filter">Newest</p>
        
                <p class="filter active">Popular</p>
        
                <p class="filter">Active</p>
                </div>
        
                <div class="user-status-list">
                <div class="user-status request-small">
                    <a class="user-status-avatar" href="group-timeline">
                    <div class="user-avatar small no-border">
                        <div class="user-avatar-content">
                        <div class="hexagon-image-40-44" data-src="img/avatar/29.jpg"></div>
                        </div>
                    </div>
                    </a>
                
                    <p class="user-status-title"><a class="bold" href="group-timeline">Twitch Streamers</a></p>
                
                    <p class="user-status-text small">265 members</p>
                
                    <div class="action-request-list">
                    <div class="action-request accept">
                        <svg class="action-request-icon icon-join-group">
                        <use xlinkHref="#svg-join-group"></use>
                        </svg>
                    </div>
                    </div>
                </div>
        
                <div class="user-status request-small">
                    <a class="user-status-avatar" href="group-timeline">
                    <div class="user-avatar small no-border">
                        <div class="user-avatar-content">
                        <div class="hexagon-image-40-44" data-src="img/avatar/24.jpg"></div>
                        </div>
                    </div>
                    </a>
                
                    <p class="user-status-title"><a class="bold" href="group-timeline">Cosplayers of the World</a></p>
                
                    <p class="user-status-text small">139 members</p>
                
                    <div class="action-request-list">
                    <div class="action-request accept">
                        <svg class="action-request-icon icon-join-group">
                        <use xlinkHref="#svg-join-group"></use>
                        </svg>
                    </div>
                    </div>
                </div>
        
                <div class="user-status request-small">
                    <a class="user-status-avatar" href="group-timeline">
                    <div class="user-avatar small no-border">
                        <div class="user-avatar-content">
                        <div class="hexagon-image-40-44" data-src="img/avatar/25.jpg"></div>
                        </div>
                    </div>
                    </a>
                
                    <p class="user-status-title"><a class="bold" href="group-timeline">Stream Designers</a></p>
                
                    <p class="user-status-text small">466 members</p>
                
                    <div class="action-request-list">
                    <div class="action-request accept">
                        <svg class="action-request-icon icon-join-group">
                        <use xlinkHref="#svg-join-group"></use>
                        </svg>
                    </div>
                    </div>
                </div>
        
                <div class="user-status request-small">
                    <a class="user-status-avatar" href="group-timeline">
                    <div class="user-avatar small no-border">
                        <div class="user-avatar-content">
                        <div class="hexagon-image-40-44" data-src="img/avatar/28.jpg"></div>
                        </div>
                    </div>
                    </a>
                
                    <p class="user-status-title"><a class="bold" href="group-timeline">Street Artists</a></p>
                
                    <p class="user-status-text small">951 members</p>
                
                    <div class="action-request-list">
                    <div class="action-request decline">
                        <svg class="action-request-icon icon-leave-group">
                        <use xlinkHref="#svg-leave-group"></use>
                        </svg>
                    </div>
                    </div>
                </div>
        
                <div class="user-status request-small">
                    <a class="user-status-avatar" href="group-timeline">
                    <div class="user-avatar small no-border">
                        <div class="user-avatar-content">
                        <div class="hexagon-image-40-44" data-src="img/avatar/27.jpg"></div>
                        </div>
                    </div>
                    </a>
                
                    <p class="user-status-title"><a class="bold" href="group-timeline">Gaming Watchtower</a></p>
                
                    <p class="user-status-text small">2.365 members</p>
                
                    <div class="action-request-list">
                    <div class="action-request accept">
                        <svg class="action-request-icon icon-join-group">
                        <use xlinkHref="#svg-join-group"></use>
                        </svg>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    )
}

export default Newsfeed