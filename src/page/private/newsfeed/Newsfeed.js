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
        <>
            <div className="section-banner">
            <img className="section-banner-icon" src="img/banner/newsfeed-icon.png" alt="newsfeed-icon"/>
        
            <p className="section-banner-title">Newsfeed</p>
        
            <p className="section-banner-text">Check what your friends have been up to!</p>
            </div>

            <div className="grid grid-3-6-3 mobile-prefer-content">
                <div className="grid-column">
                    <div className="widget-box">
                    <div className="progress-arc-summary">
                        <div className="progress-arc-wrap">
                        <div className="progress-arc">
                            <canvas id="profile-completion-chart"></canvas>
                        </div>
                    
                        <div className="progress-arc-info">
                            <p className="progress-arc-title">59%</p>
                        </div>
                        </div>
                    
                        <div className="progress-arc-summary-info">
                        <p className="progress-arc-summary-title">Profile Completion</p>
                    
                        <p className="progress-arc-summary-subtitle">Marina Valentine</p>
                    
                        <p className="progress-arc-summary-text">Complete your profile by filling profile info fields, completing quests &amp; unlocking badges</p>
                        </div>
                    </div>
                
                    <div className="achievement-status-list">
                        <div className="achievement-status">
                        <p className="achievement-status-progress">11/30</p>
                
                        <div className="achievement-status-info">
                            <p className="achievement-status-title">Quests</p>
                            
                            <p className="achievement-status-text">Completed</p>
                        </div>
                
                        <img className="achievement-status-image" src="img/badge/completedq-s.png" alt="bdage-completedq-s"/>
                        </div>
                
                        <div className="achievement-status">
                        <p className="achievement-status-progress">22/46</p>
                
                        <div className="achievement-status-info">
                            <p className="achievement-status-title">Badges</p>
                            
                            <p className="achievement-status-text">Unlocked</p>
                        </div>
                
                        <img className="achievement-status-image" src="img/badge/unlocked-badge.png" alt="bdage-unlocked-badge"/>
                        </div>
                    </div>
                    </div>

                    <div className="widget-box">
                    <div className="widget-box-controls">
                        <div id="badge-stat-slider-controls" className="slider-controls">
                        <div className="slider-control left">
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

                    <p className="widget-box-title">Featured Badges</p>

                    <div className="widget-box-content">
                        <div id="badge-stat-slider-items" className="widget-box-content-slider">
                        <div className="widget-box-content-slider-item">
                            <div className="badge-item-stat void">
                            <p className="text-sticker">
                                <svg className="text-sticker-icon icon-plus-small">
                                <use xlinkHref="#svg-plus-small"></use>
                                </svg>
                                20 Exp
                            </p>

                            <img className="badge-item-stat-image" src="img/badge/uexp-b.png" alt="badge-uexp-b"/>

                            <p className="badge-item-stat-title">Universe Explorer</p>

                            <p className="badge-item-stat-text">Joined and posted on 20 different groups</p>

                            <div className="progress-stat medium">
                                <div id="badge-uexp" className="progress-stat-bar"></div>

                                <div className="bar-progress-wrap">
                                <p className="bar-progress-info negative center"><span className="bar-progress-text no-space"></span></p>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="widget-box-content-slider-item">
                            <div className="badge-item-stat void">
                            <p className="text-sticker">
                                <svg className="text-sticker-icon icon-plus-small">
                                <use xlinkHref="#svg-plus-small"></use>
                                </svg>
                                40 Exp
                            </p>

                            <img className="badge-item-stat-image" src="img/badge/verifieds-b.png" alt="badge-verifieds-b"/>

                            <p className="badge-item-stat-title">Verified Streamer</p>

                            <p className="badge-item-stat-text">Has linked a stream that was verified by the staff</p>

                            <div className="progress-stat medium">
                                <div id="badge-verifieds" className="progress-stat-bar"></div>

                                <div className="bar-progress-wrap">
                                <p className="bar-progress-info negative center"><span className="bar-progress-text no-space"></span></p>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="widget-box-content-slider-item">
                            <div className="badge-item-stat void">
                            <p className="text-sticker">
                                <svg className="text-sticker-icon icon-plus-small">
                                <use xlinkHref="#svg-plus-small"></use>
                                </svg>
                                40 Exp
                            </p>

                            <img className="badge-item-stat-image" src="img/badge/qconq-b.png" alt="badge-qconq-b"/>

                            <p className="badge-item-stat-title">Quest Conqueror</p>

                            <p className="badge-item-stat-text">Succesfully completed at least 10 quests at 100%</p>

                            <div className="progress-stat medium">
                                <div id="badge-qconq" className="progress-stat-bar"></div>

                                <div className="bar-progress-wrap">
                                <p className="bar-progress-info negative center"><span className="bar-progress-text no-space"></span></p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="widget-box">
                    <div className="widget-box-settings">
                        <div className="post-settings-wrap">
                        <div className="post-settings widget-box-post-settings-dropdown-trigger">
                            <svg className="post-settings-icon icon-more-dots">
                            <use xlinkHref="#svg-more-dots"></use>
                            </svg>
                        </div>

                        <div className="simple-dropdown widget-box-post-settings-dropdown">
                            <p className="simple-dropdown-link">Widget Settings</p>
                        </div>
                        </div>
                    </div>

                    <p className="widget-box-title">Members</p>

                    <div className="widget-box-content">
                        <div className="filters">
                        <p className="filter">Newest</p>

                        <p className="filter active">Popular</p>

                        <p className="filter">Active</p>
                        </div>

                        <div className="user-status-list">
                        <div className="user-status request-small">
                            <a className="user-status-avatar" href="profile-timeline">
                            <div className="user-avatar small no-outline">
                                <div className="user-avatar-content">
                                <div className="hexagon-image-30-32" data-src="img/avatar/07.jpg"></div>
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
                            
                                <p className="user-avatar-badge-text">26</p>
                                </div>
                            </div>
                            </a>
                        
                            <p className="user-status-title"><a className="bold" href="profile-timeline">Sarah Diamond</a></p>
                        
                            <p className="user-status-text small">24.5K profile views</p>
                        
                            <div className="action-request-list">
                            <div className="action-request accept">
                                <svg className="action-request-icon icon-add-friend">
                                <use xlinkHref="#svg-add-friend"></use>
                                </svg>
                            </div>
                            </div>
                        </div>

                        <div className="user-status request-small">
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
                        
                            <p className="user-status-text small">20.1K profile views</p>
                        
                            <div className="action-request-list">
                            <div className="action-request accept">
                                <svg className="action-request-icon icon-add-friend">
                                <use xlinkHref="#svg-add-friend"></use>
                                </svg>
                            </div>
                            </div>
                        </div>

                        <div className="user-status request-small">
                            <a className="user-status-avatar" href="profile-timeline">
                            <div className="user-avatar small no-outline">
                                <div className="user-avatar-content">
                                <div className="hexagon-image-30-32" data-src="img/avatar/23.jpg"></div>
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
                            
                                <p className="user-avatar-badge-text">19</p>
                                </div>
                            </div>
                            </a>
                        
                            <p className="user-status-title"><a className="bold" href="profile-timeline">Rosie Sakura</a></p>
                        
                            <p className="user-status-text small">19.7K profile views</p>
                        
                            <div className="action-request-list">
                            <div className="action-request accept">
                                <svg className="action-request-icon icon-add-friend">
                                <use xlinkHref="#svg-add-friend"></use>
                                </svg>
                            </div>
                            </div>
                        </div>

                        <div className="user-status request-small">
                            <a className="user-status-avatar" href="profile-timeline">
                            <div className="user-avatar small no-outline">
                                <div className="user-avatar-content">
                                <div className="hexagon-image-30-32" data-src="img/avatar/15.jpg"></div>
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
                            
                                <p className="user-avatar-badge-text">22</p>
                                </div>
                            </div>
                            </a>
                        
                            <p className="user-status-title"><a className="bold" href="profile-timeline">Peter Stark</a></p>
                        
                            <p className="user-status-text small">16.5K profile views</p>
                        
                            <div className="action-request-list">
                            <div className="action-request accept">
                                <svg className="action-request-icon icon-add-friend">
                                <use xlinkHref="#svg-add-friend"></use>
                                </svg>
                            </div>
                            </div>
                        </div>

                        <div className="user-status request-small">
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
                        
                            <p className="user-status-text small">9.8K profile views</p>
                        
                            <div className="action-request-list">
                            <div className="action-request accept">
                                <svg className="action-request-icon icon-add-friend">
                                <use xlinkHref="#svg-add-friend"></use>
                                </svg>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <a className="banner-promo" href="https://themeforest.net/user/odin_design" target="_blank">
                    <img src="img/banner/banner-promo.jpg" alt="banner-promo"/>
                    </a>

                    <div className="widget-box">
                    <div className="widget-box-settings">
                        <div className="post-settings-wrap">
                        <div className="post-settings widget-box-post-settings-dropdown-trigger">
                            <svg className="post-settings-icon icon-more-dots">
                            <use xlinkHref="#svg-more-dots"></use>
                            </svg>
                        </div>
                
                        <div className="simple-dropdown widget-box-post-settings-dropdown">
                            <p className="simple-dropdown-link">Widget Settings</p>
                        </div>
                        </div>
                    </div>
                
                    <p className="widget-box-title">Open Quests</p>
                
                    <div className="widget-box-content">
                        <div className="quest-preview-list">
                        <div className="quest-preview">
                            <div className="quest-preview-info">
                            <img className="quest-preview-image" src="img/quest/openq-s.png" alt="openq-s"/>
                        
                            <p className="quest-preview-title">Nothing to hide</p>
                        
                            <p className="quest-preview-text">You have completed all your profile information fields</p>
                            </div>
                        
                            <div className="progress-stat">
                            <div id="quest-preview-nth" className="progress-stat-bar"></div>
                            </div>
                        </div>
                
                        <div className="quest-preview">
                            <div className="quest-preview-info">
                            <img className="quest-preview-image" src="img/quest/openq-s.png" alt="openq-s"/>
                        
                            <p className="quest-preview-title">Social King</p>
                        
                            <p className="quest-preview-text">You have linked at least 8 social networks to your profile</p>
                            </div>
                        
                            <div className="progress-stat">
                            <div id="quest-preview-sk" className="progress-stat-bar"></div>
                            </div>
                        </div>
                
                        <div className="quest-preview">
                            <div className="quest-preview-info">
                            <img className="quest-preview-image" src="img/quest/openq-s.png" alt="openq-s"/>
                        
                            <p className="quest-preview-title">Buffed Profile</p>
                        
                            <p className="quest-preview-text">You have posted every day for at least 30 days in a row</p>
                            </div>
                        
                            <div className="progress-stat">
                            <div id="quest-preview-bp" className="progress-stat-bar"></div>
                            </div>
                        </div>
                
                        <div className="quest-preview">
                            <div className="quest-preview-info">
                            <img className="quest-preview-image" src="img/quest/openq-s.png" alt="openq-s"/>
                        
                            <p className="quest-preview-title">Hear the People</p>
                        
                            <p className="quest-preview-text">You have created and posted your first poll</p>
                            </div>
                        
                            <div className="progress-stat">
                            <div id="quest-preview-htp" className="progress-stat-bar"></div>
                            </div>
                        </div>
                
                        <div className="quest-preview">
                            <div className="quest-preview-info">
                            <img className="quest-preview-image" src="img/quest/openq-s.png" alt="openq-s"/>
                        
                            <p className="quest-preview-title">Store Manager</p>
                        
                            <p className="quest-preview-text">You have uploaded at least 10 items in your shop</p>
                            </div>
                        
                            <div className="progress-stat">
                            <div id="quest-preview-sm" className="progress-stat-bar"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                
                    <a className="widget-box-button button small white" href="quests">See all Quests!</a>
                    </div>
                </div>
            </div>

            <div className="grid-column">
                <div className="quick-post">
                <div className="quick-post-header">
                    <div className="option-items">
                    <div className="option-item active">
                        <svg className="option-item-icon icon-status">
                        <use xlinkHref="#svg-status"></use>
                        </svg>
            
                        <p className="option-item-title">Status</p>
                    </div>
            
                    <div className="option-item">
                        <svg className="option-item-icon icon-blog-posts">
                        <use xlinkHref="#svg-blog-posts"></use>
                        </svg>
            
                        <p className="option-item-title">Blog Post</p>
                    </div>
            
                    <div className="option-item">
                        <svg className="option-item-icon icon-poll">
                        <use xlinkHref="#svg-poll"></use>
                        </svg>
            
                        <p className="option-item-title">Poll</p>
                    </div>
                    </div>
                </div>
            
                <div className="quick-post-body">
                    <form className="form">
                    <div className="form-row">
                        <div className="form-item">
                        <div className="form-textarea">
                            <textarea id="quick-post-text" name="quick-post-text" placeholder="Hi Marina! Share your post here..."></textarea>
                            <p className="form-textarea-limit-text">998/1000</p>
                        </div>
                        </div>
                    </div>
                    </form>
                </div>
            
                <div className="quick-post-footer">
                    <div className="quick-post-footer-actions">
                    <div className="quick-post-footer-action text-tooltip-tft-medium" data-title="Insert Photo">
                        <svg className="quick-post-footer-action-icon icon-camera">
                        <use xlinkHref="#svg-camera"></use>
                        </svg>
                    </div>
            
                    <div className="quick-post-footer-action text-tooltip-tft-medium" data-title="Insert GIF">
                        <svg className="quick-post-footer-action-icon icon-gif">
                        <use xlinkHref="#svg-gif"></use>
                        </svg>
                    </div>
            
                    <div className="quick-post-footer-action text-tooltip-tft-medium" data-title="Insert Tag">
                        <svg className="quick-post-footer-action-icon icon-tags">
                        <use xlinkHref="#svg-tags"></use>
                        </svg>
                    </div>
                    </div>
            
                    <div className="quick-post-footer-actions">
                        <p className="button small void">Discard</p>
            
                        <p className="button small secondary">Post</p>
                    </div>
                </div>
                </div>

                <div className="simple-tab-items">
                <form className="form">
                    <div className="form-select">
                    <select id="newsfeed-filter-category" name="newsfeed_filter_category">
                        <option value="0">All Updates</option>
                        <option value="1">Mentions</option>
                        <option value="2">Friends</option>
                        <option value="3">Groups</option>
                        <option value="4">Blog Posts</option>
                    </select>
                    <svg className="form-select-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow"></use>
                    </svg>
                    </div>
                </form>

                <p className="simple-tab-item active">All Updates</p>

                <p className="simple-tab-item">Mentions</p>

                <p className="simple-tab-item">Friends</p>

                <p className="simple-tab-item">Groups</p>

                <p className="simple-tab-item">Blog Posts</p>
                </div>

                <div className="widget-box no-padding">
                <div className="widget-box-settings">
                    <div className="post-settings-wrap">
                    <div className="post-settings widget-box-post-settings-dropdown-trigger">
                        <svg className="post-settings-icon icon-more-dots">
                        <use xlinkHref="#svg-more-dots"></use>
                        </svg>
                    </div>

                    <div className="simple-dropdown widget-box-post-settings-dropdown">
                        <p className="simple-dropdown-link">Edit Post</p>

                        <p className="simple-dropdown-link">Delete Post</p>

                        <p className="simple-dropdown-link">Make it Featured</p>

                        <p className="simple-dropdown-link">Report Post</p>

                        <p className="simple-dropdown-link">Report Author</p>
                    </div>
                    </div>
                </div>
                
                <div className="widget-box-status">
                    <div className="widget-box-status-content">
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
                    
                        <p className="user-status-title medium"><a className="bold" href="profile-timeline">Neko Bebop</a> uploaded a <span className="bold">video</span></p>
                    
                        <p className="user-status-text small">2 minutes ago</p>
                    </div>

                    <p className="widget-box-status-text">Hi to everyone! Check out my latest video of the outlaws expansion for Court Striker GO. I'm really excited because my last video had almost 50.000 views.</p>
                    </div>

                    <div className="iframe-wrap">
                    <iframe src="https://www.youtube.com/embed/rk-wIgg9fNk" allowfullscreen></iframe>
                    </div>

                    <div className="widget-box-status-content">
                    <div className="tag-list">
                        <a className="tag-item secondary" href="newsfeed">Stream</a>

                        <a className="tag-item secondary" href="newsfeed">StrikerGO</a>

                        <a className="tag-item secondary" href="newsfeed">Outlaws</a>

                        <a className="tag-item secondary" href="newsfeed">Gaming</a>
                    </div>

                    <div className="content-actions">
                        <div className="content-action">
                        <div className="meta-line">
                            <div className="meta-line-list reaction-item-list">
                            <div className="reaction-item">
                                <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/love.png" alt="reaction-love"/>
                    
                                <div className="simple-dropdown padded reaction-item-dropdown">
                                <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/love.png" alt="reaction-love"/> <span className="bold">Love</span></p>
                                
                                <p className="simple-dropdown-text">Matt Parker</p>

                                <p className="simple-dropdown-text">Destroy Dex</p>

                                <p className="simple-dropdown-text">The Green Goo</p>
                                </div>
                            </div>

                            <div className="reaction-item">
                                <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/happy.png" alt="reaction-happy"/>
                    
                                <div className="simple-dropdown padded reaction-item-dropdown">
                                <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/happy.png" alt="reaction-happy"/> <span className="bold">Happy</span></p>
                                
                                <p className="simple-dropdown-text">Sandra Strange</p>

                                <p className="simple-dropdown-text">Jane Rodgers</p>
                                </div>
                            </div>

                            <div className="reaction-item">
                                <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/like.png" alt="reaction-like"/>
                    
                                <div className="simple-dropdown padded reaction-item-dropdown">
                                <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/like.png" alt="reaction-like"/> <span className="bold">Like</span></p>
                                
                                <p className="simple-dropdown-text">Neko Bebop</p>

                                <p className="simple-dropdown-text">Nick Grissom</p>

                                <p className="simple-dropdown-text">Sarah Diamond</p>

                                <p className="simple-dropdown-text">Jett Spiegel</p>

                                <p className="simple-dropdown-text">Marcus Jhonson</p>

                                <p className="simple-dropdown-text"><span className="bold">and 6 more...</span></p>
                                </div>
                            </div>
                            </div>
                    
                            <p className="meta-line-text">16</p>
                        </div>
                    
                        <div className="meta-line">
                            <div className="meta-line-list user-avatar-list">
                            <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/07.jpg"></div>
                                </div>
                            </div>
                    
                            <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/13.jpg"></div>
                                </div>
                            </div>
                    
                            <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/22.jpg"></div>
                                </div>
                            </div>
                    
                            <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/10.jpg"></div>
                                </div>
                            </div>
                    
                            <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/08.jpg"></div>
                                </div>
                            </div>
                            </div>
                    
                            <p className="meta-line-text">19 Participants</p>
                        </div>
                        </div>
                    
                        <div className="content-action">
                        <div className="meta-line">
                            <p className="meta-line-link">2 Comments</p>
                        </div>
                    
                        <div className="meta-line">
                            <p className="meta-line-text">0 Shares</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="post-options">
                    <div className="post-option-wrap">
                    <div className="post-option reaction-options-dropdown-trigger">
                        <svg className="post-option-icon icon-thumbs-up">
                        <use xlinkHref="#svg-thumbs-up"></use>
                        </svg>

                        <p className="post-option-text">React!</p>
                    </div>

                    <div className="reaction-options reaction-options-dropdown">
                        <div className="reaction-option text-tooltip-tft" data-title="Like">
                        <img className="reaction-option-image" src="img/reaction/like.png" alt="reaction-like"/>
                        </div>

                        <div className="reaction-option text-tooltip-tft" data-title="Love">
                        <img className="reaction-option-image" src="img/reaction/love.png" alt="reaction-love"/>
                        </div>

                        <div className="reaction-option text-tooltip-tft" data-title="Dislike">
                        <img className="reaction-option-image" src="img/reaction/dislike.png" alt="reaction-dislike"/>
                        </div>

                        <div className="reaction-option text-tooltip-tft" data-title="Happy">
                        <img className="reaction-option-image" src="img/reaction/happy.png" alt="reaction-happy"/>
                        </div>

                        <div className="reaction-option text-tooltip-tft" data-title="Funny">
                        <img className="reaction-option-image" src="img/reaction/funny.png" alt="reaction-funny"/>
                        </div>

                        <div className="reaction-option text-tooltip-tft" data-title="Wow">
                        <img className="reaction-option-image" src="img/reaction/wow.png" alt="reaction-wow"/>
                        </div>

                        <div className="reaction-option text-tooltip-tft" data-title="Angry">
                        <img className="reaction-option-image" src="img/reaction/angry.png" alt="reaction-angry"/>
                        </div>

                        <div className="reaction-option text-tooltip-tft" data-title="Sad">
                        <img className="reaction-option-image" src="img/reaction/sad.png" alt="reaction-sad"/>
                        </div>
                    </div>
                    </div>

                    <div className="post-option">
                    <svg className="post-option-icon icon-comment">
                        <use xlinkHref="#svg-comment"></use>
                    </svg>

                    <p className="post-option-text">Comment</p>
                    </div>

                    <div className="post-option">
                    <svg className="post-option-icon icon-share">
                        <use xlinkHref="#svg-share"></use>
                    </svg>

                    <p className="post-option-text">Share</p>
                    </div>
                </div>
                </div>

                <div className="widget-box no-padding">
                <div className="widget-box-settings">
                    <div className="post-settings-wrap">
                    <div className="post-settings widget-box-post-settings-dropdown-trigger">
                        <svg className="post-settings-icon icon-more-dots">
                        <use xlinkHref="#svg-more-dots"></use>
                        </svg>
                    </div>
            
                    <div className="simple-dropdown widget-box-post-settings-dropdown">
                        <p className="simple-dropdown-link">Edit Post</p>
            
                        <p className="simple-dropdown-link">Delete Post</p>
            
                        <p className="simple-dropdown-link">Make it Featured</p>
            
                        <p className="simple-dropdown-link">Report Post</p>
            
                        <p className="simple-dropdown-link">Report Author</p>
                    </div>
                    </div>
                </div>
                
                <div className="widget-box-status">
                    <div className="widget-box-status-content">
                    <div className="user-status">
                        <a className="user-status-avatar" href="profile-timeline">
                        <div className="user-avatar small no-outline">
                            <div className="user-avatar-content">
                            <div className="hexagon-image-30-32" data-src="img/avatar/07.jpg"></div>
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
                        
                            <p className="user-avatar-badge-text">26</p>
                            </div>
                        </div>
                        </a>
                    
                        <p className="user-status-title medium"><a className="bold" href="profile-timeline">Sarah Diamond</a> created a <span className="bold">poll</span></p>
                    
                        <p className="user-status-text small">9 minutes ago</p>
                    </div>
            
                    <p className="widget-box-status-text">I've created a poll to ask all of you what you would like to see more in my upcoming videos! It will only take a couple of seconds...thanks to all in advance!!</p>
            
                    <div className="poll-box">
                        <p className="poll-title">What do you wanna see in my upcoming videos?</p>
                    
                        <p className="poll-text">Poll ends in 5 days</p>
                    
                        <form className="form">
                        <div className="form-row">
                            <div className="form-item">
                            <div className="checkbox-wrap">
                                <input type="radio" id="poll-option-1" name="poll_option" value="option-1"/>
                                <div className="checkbox-box round"></div>
                                <label for="poll-option-1">Retro Games</label>
                            </div>
                            </div>
                        </div>
                    
                        <div className="form-row">
                            <div className="form-item">
                            <div className="checkbox-wrap">
                                <input type="radio" id="poll-option-2" name="poll_option" value="option-2" checked/>
                                <div className="checkbox-box round"></div>
                                <label for="poll-option-2">Walkthroughs</label>
                            </div>
                            </div>
                        </div>
                    
                        <div className="form-row">
                            <div className="form-item">
                            <div className="checkbox-wrap">
                                <input type="radio" id="poll-option-3" name="poll_option" value="option-3"/>
                                <div className="checkbox-box round"></div>
                                <label for="poll-option-3">Unboxings</label>
                            </div>
                            </div>
                        </div>
                        </form>
                    
                        <div className="poll-box-actions">
                        <p className="button small secondary">Vote Now!</p>
                    
                        <p className="button small white">See Results</p>
                        </div>
                    </div>
            
                    <div className="content-actions">
                        <div className="content-action">
                        <div className="meta-line">
                            <div className="meta-line-list reaction-item-list">
                            <div className="reaction-item">
                                <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/funny.png" alt="reaction-funny"/>
                    
                                <div className="simple-dropdown padded reaction-item-dropdown">
                                <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/funny.png" alt="reaction-funny"/> <span className="bold">Funny</span></p>
                                
                                <p className="simple-dropdown-text">Matt Parker</p>
            
                                <p className="simple-dropdown-text">Destroy Dex</p>
            
                                <p className="simple-dropdown-text">The Green Goo</p>
                                </div>
                            </div>
            
                            <div className="reaction-item">
                                <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/like.png" alt="reaction-like"/>
                    
                                <div className="simple-dropdown padded reaction-item-dropdown">
                                <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/like.png" alt="reaction-like"/> <span className="bold">Like</span></p>
                                
                                <p className="simple-dropdown-text">Sandra Strange</p>
            
                                <p className="simple-dropdown-text">Jane Rodgers</p>
                                </div>
                            </div>
            
                            <div className="reaction-item">
                                <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/love.png" alt="reaction-love"/>
                    
                                <div className="simple-dropdown padded reaction-item-dropdown">
                                <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/love.png" alt="reaction-love"/> <span className="bold">Love</span></p>
                                
                                <p className="simple-dropdown-text">Neko Bebop</p>
            
                                <p className="simple-dropdown-text">Nick Grissom</p>
            
                                <p className="simple-dropdown-text">Sarah Diamond</p>
            
                                <p className="simple-dropdown-text">Jett Spiegel</p>
                                </div>
                            </div>
                            </div>
                    
                            <p className="meta-line-text">9</p>
                        </div>
                    
                        <div className="meta-line">
                            <div className="meta-line-list user-avatar-list">
                            <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/09.jpg"></div>
                                </div>
                            </div>
                    
                            <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/08.jpg"></div>
                                </div>
                            </div>
                    
                            <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/12.jpg"></div>
                                </div>
                            </div>
                    
                            <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/16.jpg"></div>
                                </div>
                            </div>
                    
                            <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/06.jpg"></div>
                                </div>
                            </div>
                            </div>
                    
                            <p className="meta-line-text">11 Participants</p>
                        </div>
                        </div>
                    
                        <div className="content-action">
                        <div className="meta-line">
                            <p className="meta-line-link">1 Comments</p>
                        </div>
                    
                        <div className="meta-line">
                            <p className="meta-line-text">0 Shares</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            
                <div className="post-options">
                    <div className="post-option-wrap">
                    <div className="post-option reaction-options-dropdown-trigger">
                        <svg className="post-option-icon icon-thumbs-up">
                        <use xlinkHref="#svg-thumbs-up"></use>
                        </svg>
            
                        <p className="post-option-text">React!</p>
                    </div>
            
                    <div className="reaction-options reaction-options-dropdown">
                        <div className="reaction-option text-tooltip-tft" data-title="Like">
                        <img className="reaction-option-image" src="img/reaction/like.png" alt="reaction-like"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Love">
                        <img className="reaction-option-image" src="img/reaction/love.png" alt="reaction-love"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Dislike">
                        <img className="reaction-option-image" src="img/reaction/dislike.png" alt="reaction-dislike"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Happy">
                        <img className="reaction-option-image" src="img/reaction/happy.png" alt="reaction-happy"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Funny">
                        <img className="reaction-option-image" src="img/reaction/funny.png" alt="reaction-funny"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Wow">
                        <img className="reaction-option-image" src="img/reaction/wow.png" alt="reaction-wow"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Angry">
                        <img className="reaction-option-image" src="img/reaction/angry.png" alt="reaction-angry"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Sad">
                        <img className="reaction-option-image" src="img/reaction/sad.png" alt="reaction-sad"/>
                        </div>
                    </div>
                    </div>
            
                    <div className="post-option">
                    <svg className="post-option-icon icon-comment">
                        <use xlinkHref="#svg-comment"></use>
                    </svg>
            
                    <p className="post-option-text">Comment</p>
                    </div>
            
                    <div className="post-option">
                    <svg className="post-option-icon icon-share">
                        <use xlinkHref="#svg-share"></use>
                    </svg>
            
                    <p className="post-option-text">Share</p>
                    </div>
                </div>
                </div>

                <div className="widget-box no-padding">
                <div className="widget-box-settings">
                    <div className="post-settings-wrap">
                    <div className="post-settings widget-box-post-settings-dropdown-trigger">
                        <svg className="post-settings-icon icon-more-dots">
                        <use xlinkHref="#svg-more-dots"></use>
                        </svg>
                    </div>
            
                    <div className="simple-dropdown widget-box-post-settings-dropdown">
                        <p className="simple-dropdown-link">Edit Post</p>
            
                        <p className="simple-dropdown-link">Delete Post</p>
            
                        <p className="simple-dropdown-link">Make it Featured</p>
            
                        <p className="simple-dropdown-link">Report Post</p>
            
                        <p className="simple-dropdown-link">Report Author</p>
                    </div>
                    </div>
                </div>
                
                <div className="widget-box-status">
                    <div className="widget-box-status-content">
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
                        
                            <p className="user-avatar-badge-text">19</p>
                            </div>
                        </div>
                        </a>
                    
                        <p className="user-status-title medium"><a className="bold" href="profile-timeline">Destroy Dex</a> uploaded <span className="bold">26 new photos</span></p>
                    
                        <p className="user-status-text small">17 minutes ago</p>
                    </div>
            
                    <p className="widget-box-status-text">Here are some of the photos from my last visit to StreamCon 2019!!</p>
            
                    <div className="picture-collage">
                        <div className="picture-collage-row medium">
                        <div className="picture-collage-item popup-picture-trigger">
                            <div className="photo-preview">
                            <figure className="photo-preview-image liquid">
                                <img src="img/cover/10.jpg" alt="photo-preview-10"/>
                            </figure>
                        
                            <div className="photo-preview-info">
                                <div className="reaction-count-list">
                                <div className="reaction-count negative">
                                    <svg className="reaction-count-icon icon-thumbs-up">
                                    <use xlinkHref="#svg-thumbs-up"></use>
                                    </svg>
                        
                                    <p className="reaction-count-text">2</p>
                                </div>
                        
                                <div className="reaction-count negative">
                                    <svg className="reaction-count-icon icon-comment">
                                    <use xlinkHref="#svg-comment"></use>
                                    </svg>
                        
                                    <p className="reaction-count-text">5</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
            
                        <div className="picture-collage-item popup-picture-trigger">
                            <div className="photo-preview">
                            <figure className="photo-preview-image liquid">
                                <img src="img/cover/12.jpg" alt="photo-preview-12"/>
                            </figure>
                        
                            <div className="photo-preview-info">
                                <div className="reaction-count-list">
                                <div className="reaction-count negative">
                                    <svg className="reaction-count-icon icon-thumbs-up">
                                    <use xlinkHref="#svg-thumbs-up"></use>
                                    </svg>
                        
                                    <p className="reaction-count-text">2</p>
                                </div>
                        
                                <div className="reaction-count negative">
                                    <svg className="reaction-count-icon icon-comment">
                                    <use xlinkHref="#svg-comment"></use>
                                    </svg>
                        
                                    <p className="reaction-count-text">5</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
            
                        <div className="picture-collage-row">
                        <div className="picture-collage-item popup-picture-trigger">
                            <div className="photo-preview">
                            <figure className="photo-preview-image liquid">
                                <img src="img/cover/16.jpg" alt="photo-preview-16"/>
                            </figure>
                        
                            <div className="photo-preview-info">
                                <div className="reaction-count-list">
                                <div className="reaction-count negative">
                                    <svg className="reaction-count-icon icon-thumbs-up">
                                    <use xlinkHref="#svg-thumbs-up"></use>
                                    </svg>
                        
                                    <p className="reaction-count-text">2</p>
                                </div>
                        
                                <div className="reaction-count negative">
                                    <svg className="reaction-count-icon icon-comment">
                                    <use xlinkHref="#svg-comment"></use>
                                    </svg>
                        
                                    <p className="reaction-count-text">5</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
            
                        <div className="picture-collage-item popup-picture-trigger">
                            <div className="photo-preview">
                            <figure className="photo-preview-image liquid">
                                <img src="img/cover/08.jpg" alt="photo-preview-08"/>
                            </figure>
                        
                            <div className="photo-preview-info">
                                <div className="reaction-count-list">
                                <div className="reaction-count negative">
                                    <svg className="reaction-count-icon icon-thumbs-up">
                                    <use xlinkHref="#svg-thumbs-up"></use>
                                    </svg>
                        
                                    <p className="reaction-count-text">2</p>
                                </div>
                        
                                <div className="reaction-count negative">
                                    <svg className="reaction-count-icon icon-comment">
                                    <use xlinkHref="#svg-comment"></use>
                                    </svg>
                        
                                    <p className="reaction-count-text">5</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
            
                        <div className="picture-collage-item">
                            <a className="picture-collage-item-overlay" href="profile-photos">
                            <p className="picture-collage-item-overlay-text">+22</p>
                            </a>
            
                            <div className="photo-preview">
                            <figure className="photo-preview-image liquid">
                                <img src="img/cover/14.jpg" alt="photo-preview-14"/>
                            </figure>
                        
                            <div className="photo-preview-info">
                                <div className="reaction-count-list">
                                <div className="reaction-count negative">
                                    <svg className="reaction-count-icon icon-thumbs-up">
                                    <use xlinkHref="#svg-thumbs-up"></use>
                                    </svg>
                        
                                    <p className="reaction-count-text">2</p>
                                </div>
                        
                                <div className="reaction-count negative">
                                    <svg className="reaction-count-icon icon-comment">
                                    <use xlinkHref="#svg-comment"></use>
                                    </svg>
                        
                                    <p className="reaction-count-text">5</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
            
                    <div className="tag-list">
                        <a className="tag-item secondary" href="newsfeed">Photos</a>
            
                        <a className="tag-item secondary" href="newsfeed">StreamCon</a>
            
                        <a className="tag-item secondary" href="newsfeed">StarGirl</a>
                    </div>
            
                    <div className="content-actions">
                        <div className="content-action">
                        <div className="meta-line">
                            <div className="meta-line-list reaction-item-list">
                            <div className="reaction-item">
                                <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/wow.png" alt="reaction-wow"/>
                    
                                <div className="simple-dropdown padded reaction-item-dropdown">
                                <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/wow.png" alt="reaction-wow"/> <span className="bold">Wow</span></p>
                                
                                <p className="simple-dropdown-text">Matt Parker</p>
                                </div>
                            </div>
            
                            <div className="reaction-item">
                                <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/like.png" alt="reaction-like"/>
                    
                                <div className="simple-dropdown padded reaction-item-dropdown">
                                <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/like.png" alt="reaction-like"/> <span className="bold">Like</span></p>
                                
                                <p className="simple-dropdown-text">Sandra Strange</p>
            
                                <p className="simple-dropdown-text">Jane Rodgers</p>
                                </div>
                            </div>
                            </div>
                    
                            <p className="meta-line-text">3</p>
                        </div>
                    
                        <div className="meta-line">
                            <div className="meta-line-list user-avatar-list">
                            <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/03.jpg"></div>
                                </div>
                            </div>
                    
                            <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/15.jpg"></div>
                                </div>
                            </div>
                    
                            <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/14.jpg"></div>
                                </div>
                            </div>
                    
                            <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/07.jpg"></div>
                                </div>
                            </div>
                
                            <div class="reaction-option text-tooltip-tft" data-title="Love">
                            <img class="reaction-option-image" src="img/reaction/love.png" alt="reaction-love"/>
                            </div>
                    
                            <p className="meta-line-text">4 Participants</p>
                        </div>
                        </div>
                    
                        <div className="content-action">
                        <div className="meta-line">
                            <p className="meta-line-link">3 Comments</p>
                        </div>
                    
                        <div className="meta-line">
                            <p className="meta-line-text">0 Shares</p>
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
            
                <div className="post-options">
                    <div className="post-option-wrap">
                    <div className="post-option reaction-options-dropdown-trigger">
                        <svg className="post-option-icon icon-thumbs-up">
                        <use xlinkHref="#svg-thumbs-up"></use>
                        </svg>
            
                        <p className="post-option-text">React!</p>
                    </div>
            
                    <div className="reaction-options reaction-options-dropdown">
                        <div className="reaction-option text-tooltip-tft" data-title="Like">
                        <img className="reaction-option-image" src="img/reaction/like.png" alt="reaction-like"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Love">
                        <img className="reaction-option-image" src="img/reaction/love.png" alt="reaction-love"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Dislike">
                        <img className="reaction-option-image" src="img/reaction/dislike.png" alt="reaction-dislike"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Happy">
                        <img className="reaction-option-image" src="img/reaction/happy.png" alt="reaction-happy"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Funny">
                        <img className="reaction-option-image" src="img/reaction/funny.png" alt="reaction-funny"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Wow">
                        <img className="reaction-option-image" src="img/reaction/wow.png" alt="reaction-wow"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Angry">
                        <img className="reaction-option-image" src="img/reaction/angry.png" alt="reaction-angry"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Sad">
                        <img className="reaction-option-image" src="img/reaction/sad.png" alt="reaction-sad"/>
                        </div>
                    </div>
                    </div>
            
                    <div className="post-option">
                    <svg className="post-option-icon icon-comment">
                        <use xlinkHref="#svg-comment"></use>
                    </svg>
            
                    <p className="post-option-text">Comment</p>
                    </div>
            
                    <div className="post-option">
                    <svg className="post-option-icon icon-share">
                        <use xlinkHref="#svg-share"></use>
                    </svg>
            
                    <p className="post-option-text">Share</p>
                    </div>
                </div>
                </div>

                <div className="widget-box no-padding">
                <div className="widget-box-settings">
                    <div className="post-settings-wrap">
                    <div className="post-settings widget-box-post-settings-dropdown-trigger">
                        <svg className="post-settings-icon icon-more-dots">
                        <use xlinkHref="#svg-more-dots"></use>
                        </svg>
                    </div>
            
                    <div className="simple-dropdown widget-box-post-settings-dropdown">
                        <p className="simple-dropdown-link">Edit Post</p>
            
                        <p className="simple-dropdown-link">Delete Post</p>
            
                        <p className="simple-dropdown-link">Make it Featured</p>
            
                        <p className="simple-dropdown-link">Report Post</p>
            
                        <p className="simple-dropdown-link">Report Author</p>
                    </div>
                    </div>
                </div>
                
                <div className="widget-box-status">
                    <div className="widget-box-status-content">
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
                    
                        <p className="user-status-title medium"><a className="bold" href="profile-timeline">Bearded Wonder</a></p>
                    
                        <p className="user-status-text small">39 minutes ago</p>
                    </div>
            
                    <p className="widget-box-status-text">Sorry everyone, but from now on, I will only be able to edit and upload one design tutorial per month. This happens because I'm having a lot on my plate right now and recording and editing the tutorials requiere a lot of attention.</p>
            
                    <div className="content-actions">
                        <div className="content-action">
                        <div className="meta-line">
                            <div className="meta-line-list reaction-item-list">
                            <div className="reaction-item">
                                <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/dislike.png" alt="reaction-dislike"/>
                    
                                <div className="simple-dropdown padded reaction-item-dropdown">
                                <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/dislike.png" alt="reaction-dislike"/> <span className="bold">Dislike</span></p>
                                
                                <p className="simple-dropdown-text">Matt Parker</p>
            
                                <p className="simple-dropdown-text">Destroy Dex</p>
            
                                <p className="simple-dropdown-text">The Green Goo</p>
                                </div>
                            </div>
            
                            <div className="reaction-item">
                                <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/love.png" alt="reaction-love"/>
                    
                                <div className="simple-dropdown padded reaction-item-dropdown">
                                <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/love.png" alt="reaction-love"/> <span className="bold">Love</span></p>
                                
                                <p className="simple-dropdown-text">Sandra Strange</p>
            
                                <p className="simple-dropdown-text">Jane Rodgers</p>
                                </div>
                            </div>
            
                            <div className="reaction-item">
                                <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/like.png" alt="reaction-like"/>
                    
                                <div className="simple-dropdown padded reaction-item-dropdown">
                                <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/like.png" alt="reaction-like"/> <span className="bold">Like</span></p>
                                
                                <p className="simple-dropdown-text">Neko Bebop</p>
            
                                <p className="simple-dropdown-text">Nick Grissom</p>
            
                                <p className="simple-dropdown-text">Sarah Diamond</p>
            
                                <p className="simple-dropdown-text">Jett Spiegel</p>
            
                                <p className="simple-dropdown-text"><span className="bold">and 2 more...</span></p>
                                </div>
                            </div>
                            </div>
                    
                            <p className="meta-line-text">11</p>
                        </div>
                    
                        <div className="meta-line">
                            <div className="meta-line-list user-avatar-list">
                            <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/08.jpg"></div>
                                </div>
                            </div>
                    
                            <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/11.jpg"></div>
                                </div>
                            </div>
                    
                            <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/06.jpg"></div>
                                </div>
                            </div>
                    
                            <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/07.jpg"></div>
                                </div>
                            </div>
                    
                            <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/10.jpg"></div>
                                </div>
                            </div>
                            </div>
                    
                            <p className="meta-line-text">18 Participants</p>
                        </div>
                        </div>
                    
                        <div className="content-action">
                        <div className="meta-line">
                            <p className="meta-line-link">15 Comments</p>
                        </div>
                    
                        <div className="meta-line">
                            <p className="meta-line-text">0 Shares</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            
                <div className="post-options">
                    <div className="post-option-wrap">
                    <div className="post-option reaction-options-dropdown-trigger">
                        <svg className="post-option-icon icon-thumbs-up">
                        <use xlinkHref="#svg-thumbs-up"></use>
                        </svg>
            
                        <p className="post-option-text">React!</p>
                    </div>
            
                    <div className="reaction-options reaction-options-dropdown">
                        <div className="reaction-option text-tooltip-tft" data-title="Like">
                        <img className="reaction-option-image" src="img/reaction/like.png" alt="reaction-like"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Love">
                        <img className="reaction-option-image" src="img/reaction/love.png" alt="reaction-love"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Dislike">
                        <img className="reaction-option-image" src="img/reaction/dislike.png" alt="reaction-dislike"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Happy">
                        <img className="reaction-option-image" src="img/reaction/happy.png" alt="reaction-happy"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Funny">
                        <img className="reaction-option-image" src="img/reaction/funny.png" alt="reaction-funny"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Wow">
                        <img className="reaction-option-image" src="img/reaction/wow.png" alt="reaction-wow"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Angry">
                        <img className="reaction-option-image" src="img/reaction/angry.png" alt="reaction-angry"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Sad">
                        <img className="reaction-option-image" src="img/reaction/sad.png" alt="reaction-sad"/>
                        </div>
                    </div>
                    </div>
            
                    <div className="post-option">
                    <svg className="post-option-icon icon-comment">
                        <use xlinkHref="#svg-comment"></use>
                    </svg>
            
                    <p className="post-option-text">Comment</p>
                    </div>
            
                    <div className="post-option">
                    <svg className="post-option-icon icon-share">
                        <use xlinkHref="#svg-share"></use>
                    </svg>
            
                    <p className="post-option-text">Share</p>
                    </div>
                </div>
                </div>

                <div className="widget-box no-padding">
                <div className="widget-box-settings">
                    <div className="post-settings-wrap">
                    <div className="post-settings widget-box-post-settings-dropdown-trigger">
                        <svg className="post-settings-icon icon-more-dots">
                        <use xlinkHref="#svg-more-dots"></use>
                        </svg>
                    </div>
            
                    <div className="simple-dropdown widget-box-post-settings-dropdown">
                        <p className="simple-dropdown-link">Edit Post</p>
            
                        <p className="simple-dropdown-link">Delete Post</p>
            
                        <p className="simple-dropdown-link">Make it Featured</p>
            
                        <p className="simple-dropdown-link">Report Post</p>
            
                        <p className="simple-dropdown-link">Report Author</p>
                    </div>
                    </div>
                </div>
                
                <div className="widget-box-status">
                    <div className="widget-box-status-content">
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
                    
                        <p className="user-status-title medium"><a className="bold" href="profile-timeline">Nick Grissom</a> shared a <span className="bold">post</span></p>
                    
                        <p className="user-status-text small">40 minutes ago</p>
                    </div>
            
                    <p className="widget-box-status-text">Keep an eye out for <a href="#">@DestroyDex</a> surprise streams for awesome givaways!</p>
            
                    <div className="widget-box no-padding">
                        <div className="widget-box-status">
                        <div className="widget-box-status-content">
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
                            
                                    <p className="user-avatar-badge-text">19</p>
                                </div>
                                </div>
                            </a>
                        
                            <p className="user-status-title medium"><a className="bold" href="profile-timeline">Destroy Dex</a></p>
                        
                            <p className="user-status-text small">6 hours ago</p>
                            </div>
            
                            <p className="widget-box-status-text">Attention everyone! From now on and through all the holydays season I'll be giving free season passes for a bunch of different games. Be on the lookout for these special streams to participate and win awesome prizes!</p>
            
                            <a className="video-status" href="https://www.twitch.tv/" target="_blank">
                            <img className="video-status-image" src="img/cover/51.jpg" alt="cover-51"/>
            
                            <div className="video-status-info">
                                <p className="video-status-meta">twitch.tv</p>
            
                                <p className="video-status-title"><span className="bold">Destroy Dex</span> on <span className="highlighted">Twitch</span></p>
            
                                <p className="video-status-text">Tune in every Sunday for awesome givaways!</p>
                            </div>
                            </a>
                        </div>
                        </div>
                    </div>
            
                    <div className="content-actions">
                        <div className="content-action">
                        <div className="meta-line">
                            <div className="meta-line-list reaction-item-list">
                            <div className="reaction-item">
                                <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/love.png" alt="reaction-love"/>
                    
                                <div className="simple-dropdown padded reaction-item-dropdown">
                                <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/love.png" alt="reaction-love"/> <span className="bold">Love</span></p>
                                
                                <p className="simple-dropdown-text">Matt Parker</p>
            
                                <p className="simple-dropdown-text">Destroy Dex</p>
            
                                <p className="simple-dropdown-text">The Green Goo</p>
                                </div>
                            </div>
            
                            <div className="reaction-item">
                                <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/happy.png" alt="reaction-happy"/>
                    
                                <div className="simple-dropdown padded reaction-item-dropdown">
                                <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/happy.png" alt="reaction-happy"/> <span className="bold">Happy</span></p>
                                
                                <p className="simple-dropdown-text">Sandra Strange</p>
                                </div>
                            </div>
            
                            <div className="reaction-item">
                                <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/like.png" alt="reaction-like"/>
                    
                                <div className="simple-dropdown padded reaction-item-dropdown">
                                <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/like.png" alt="reaction-like"/> <span className="bold">Like</span></p>
                                
                                <p className="simple-dropdown-text">Neko Bebop</p>
            
                                <p className="simple-dropdown-text">Nick Grissom</p>
            
                                <p className="simple-dropdown-text">Sarah Diamond</p>
            
                                <p className="simple-dropdown-text">Jett Spiegel</p>
            
                                <p className="simple-dropdown-text">Marcus Jhonson</p>
            
                                <p className="simple-dropdown-text">Jane Rodgers</p>
            
                                <p className="simple-dropdown-text"><span className="bold">and 6 more...</span></p>
                                </div>
                            </div>
                            </div>
                    
                            <p className="meta-line-text">16</p>
                        </div>
                    
                        <div className="meta-line">
                            <div className="meta-line-list user-avatar-list">
                            <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/07.jpg"></div>
                                </div>
                            </div>
                    
                            <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/13.jpg"></div>
                                </div>
                            </div>
                    
                            <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/22.jpg"></div>
                                </div>
                            </div>
                    
                            <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/10.jpg"></div>
                                </div>
                            </div>
                    
                            <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/08.jpg"></div>
                                </div>
                            </div>
                            </div>
                    
                            <p className="meta-line-text">19 Participants</p>
                        </div>
                        </div>
                    
                        <div className="content-action">
                        <div className="meta-line">
                            <p className="meta-line-link">2 Comments</p>
                        </div>
                    
                        <div className="meta-line">
                            <p className="meta-line-text">0 Shares</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            
                <div className="post-options">
                    <div className="post-option-wrap">
                    <div className="post-option reaction-options-dropdown-trigger">
                        <svg className="post-option-icon icon-thumbs-up">
                        <use xlinkHref="#svg-thumbs-up"></use>
                        </svg>
            
                        <p className="post-option-text">React!</p>
                    </div>
            
                    <div className="reaction-options reaction-options-dropdown">
                        <div className="reaction-option text-tooltip-tft" data-title="Like">
                        <img className="reaction-option-image" src="img/reaction/like.png" alt="reaction-like"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Love">
                        <img className="reaction-option-image" src="img/reaction/love.png" alt="reaction-love"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Dislike">
                        <img className="reaction-option-image" src="img/reaction/dislike.png" alt="reaction-dislike"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Happy">
                        <img className="reaction-option-image" src="img/reaction/happy.png" alt="reaction-happy"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Funny">
                        <img className="reaction-option-image" src="img/reaction/funny.png" alt="reaction-funny"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Wow">
                        <img className="reaction-option-image" src="img/reaction/wow.png" alt="reaction-wow"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Angry">
                        <img className="reaction-option-image" src="img/reaction/angry.png" alt="reaction-angry"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Sad">
                        <img className="reaction-option-image" src="img/reaction/sad.png" alt="reaction-sad"/>
                        </div>
                    </div>
                    </div>
            
                    <div className="post-option">
                    <svg className="post-option-icon icon-comment">
                        <use xlinkHref="#svg-comment"></use>
                    </svg>
            
                    <p className="post-option-text">Comment</p>
                    </div>
            
                    <div className="post-option">
                    <svg className="post-option-icon icon-share">
                        <use xlinkHref="#svg-share"></use>
                    </svg>
            
                    <p className="post-option-text">Share</p>
                    </div>
                </div>
                </div>

                <div className="widget-box no-padding">
                <div className="widget-box-settings">
                    <div className="post-settings-wrap">
                    <div className="post-settings widget-box-post-settings-dropdown-trigger">
                        <svg className="post-settings-icon icon-more-dots">
                        <use xlinkHref="#svg-more-dots"></use>
                        </svg>
                    </div>
            
                    <div className="simple-dropdown widget-box-post-settings-dropdown">
                        <p className="simple-dropdown-link">Edit Post</p>
            
                        <p className="simple-dropdown-link">Delete Post</p>
            
                        <p className="simple-dropdown-link">Make it Featured</p>
            
                        <p className="simple-dropdown-link">Report Post</p>
            
                        <p className="simple-dropdown-link">Report Author</p>
                    </div>
                    </div>
                </div>
                
                <div className="widget-box-status">
                    <div className="widget-box-status-content">
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
                    
                        <div className="user-status-title medium"><a className="bold" href="profile-timeline">Neko Bebop</a> replied to the discussion <a className="bold" href="forums-discussion">In your opinion, who has the best Cosplay?</a> in the forum
                        <a className="user-avatar micro no-stats" href="group-timeline">
                            <div className="user-avatar-border">
                            <div className="hexagon-22-24"></div>
                            </div>
                        
                            <div className="user-avatar-content">
                            <div className="hexagon-image-18-20" data-src="img/avatar/24.jpg"></div>
                            </div>
                        </a>
                        <a className="bold" href="group-timeline">Cosplayers of the World</a>
                        </div>
                    
                        <p className="user-status-text small">42 minutes ago</p>
                    </div>
            
                    <blockquote className="quote-box">
                        <svg className="quote-box-icon icon-quote">
                        <use xlinkHref="#svg-quote"></use>
                        </svg>
                        
                        <p className="quote-box-text">I've been cosplaying for 9 years now and I've never seen a more perfect cosplay like the Samurai Robot one from Rosie Sakura.</p>
                    </blockquote>
            
                    <div className="content-actions">
                        <div className="content-action">
                        <div className="meta-line">
                            <div className="meta-line-list reaction-item-list">
                            <div className="reaction-item">
                                <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/love.png" alt="reaction-love"/>
                    
                                <div className="simple-dropdown padded reaction-item-dropdown">
                                <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/love.png" alt="reaction-love"/> <span className="bold">Love</span></p>
                                
                                <p className="simple-dropdown-text">Matt Parker</p>
            
                                <p className="simple-dropdown-text">Destroy Dex</p>
            
                                <p className="simple-dropdown-text">The Green Goo</p>
                                </div>
                            </div>
            
                            <div className="reaction-item">
                                <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/happy.png" alt="reaction-happy"/>
                    
                                <div className="simple-dropdown padded reaction-item-dropdown">
                                <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/happy.png" alt="reaction-happy"/> <span className="bold">Happy</span></p>
                                
                                <p className="simple-dropdown-text">Sandra Strange</p>
                                </div>
                            </div>
            
                            <div className="reaction-item">
                                <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/like.png" alt="reaction-like"/>
                    
                                <div className="simple-dropdown padded reaction-item-dropdown">
                                <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/like.png" alt="reaction-like"/> <span className="bold">Like</span></p>
                                
                                <p className="simple-dropdown-text">Neko Bebop</p>
            
                                <p className="simple-dropdown-text">Nick Grissom</p>
            
                                <p className="simple-dropdown-text">Sarah Diamond</p>
            
                                <p className="simple-dropdown-text">Jett Spiegel</p>
            
                                <p className="simple-dropdown-text">Marcus Jhonson</p>
            
                                <p className="simple-dropdown-text">Jane Rodgers</p>
            
                                <p className="simple-dropdown-text"><span className="bold">and 6 more...</span></p>
                                </div>
                            </div>
                            </div>
                    
                            <p className="meta-line-text">16</p>
                        </div>
                    
                        <div className="meta-line">
                            <div className="meta-line-list user-avatar-list">
                            <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/07.jpg"></div>
                                </div>
                            </div>
                    
                            <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/13.jpg"></div>
                                </div>
                            </div>
                    
                            <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/22.jpg"></div>
                                </div>
                            </div>
                    
                            <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/10.jpg"></div>
                                </div>
                            </div>
                    
                            <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/08.jpg"></div>
                                </div>
                            </div>
                            </div>
                    
                            <p className="meta-line-text">19 Participants</p>
                        </div>
                        </div>
                    
                        <div className="content-action">
                        <div className="meta-line">
                            <p className="meta-line-link">2 Comments</p>
                        </div>
                    
                        <div className="meta-line">
                            <p className="meta-line-text">0 Shares</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            
                <div className="post-options">
                    <div className="post-option-wrap">
                    <div className="post-option reaction-options-dropdown-trigger">
                        <svg className="post-option-icon icon-thumbs-up">
                        <use xlinkHref="#svg-thumbs-up"></use>
                        </svg>
            
                        <p className="post-option-text">React!</p>
                    </div>
            
                    <div className="reaction-options reaction-options-dropdown">
                        <div className="reaction-option text-tooltip-tft" data-title="Like">
                        <img className="reaction-option-image" src="img/reaction/like.png" alt="reaction-like"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Love">
                        <img className="reaction-option-image" src="img/reaction/love.png" alt="reaction-love"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Dislike">
                        <img className="reaction-option-image" src="img/reaction/dislike.png" alt="reaction-dislike"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Happy">
                        <img className="reaction-option-image" src="img/reaction/happy.png" alt="reaction-happy"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Funny">
                        <img className="reaction-option-image" src="img/reaction/funny.png" alt="reaction-funny"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Wow">
                        <img className="reaction-option-image" src="img/reaction/wow.png" alt="reaction-wow"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Angry">
                        <img className="reaction-option-image" src="img/reaction/angry.png" alt="reaction-angry"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Sad">
                        <img className="reaction-option-image" src="img/reaction/sad.png" alt="reaction-sad"/>
                        </div>
                    </div>
                    </div>
            
                    <div className="post-option">
                    <svg className="post-option-icon icon-comment">
                        <use xlinkHref="#svg-comment"></use>
                    </svg>
            
                    <p className="post-option-text">Comment</p>
                    </div>
            
                    <div className="post-option">
                    <svg className="post-option-icon icon-share">
                        <use xlinkHref="#svg-share"></use>
                    </svg>
            
                    <p className="post-option-text">Share</p>
                    </div>
                </div>
                </div>
            
                <div className="widget-box no-padding">
                <div className="widget-box-settings">
                    <div className="post-settings-wrap">
                    <div className="post-settings widget-box-post-settings-dropdown-trigger">
                        <svg className="post-settings-icon icon-more-dots">
                        <use xlinkHref="#svg-more-dots"></use>
                        </svg>
                    </div>
            
                    <div className="simple-dropdown widget-box-post-settings-dropdown">
                        <p className="simple-dropdown-link">Edit Post</p>
            
                        <p className="simple-dropdown-link">Delete Post</p>
            
                        <p className="simple-dropdown-link">Make it Featured</p>
            
                        <p className="simple-dropdown-link">Report Post</p>
            
                        <p className="simple-dropdown-link">Report Author</p>
                    </div>
                    </div>
                </div>
                
                <div className="widget-box-status">
                    <div className="widget-box-status-content">
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
                    
                            <p class="meta-line-text">19 Participants</p>
                        </div>
                        </a>
                    
                        <p className="user-status-title medium"><a className="bold" href="profile-timeline">Nick Grissom</a></p>
                    
                        <p className="user-status-text small">1 hour ago</p>
                    </div>
            
                    <p className="widget-box-status-text">When you finally pass the quest that you've been trying for so long...</p>
                    </div>
            
                    <div className="iframe-wrap">
                    <iframe src="https://giphy.com/embed/1LnQIODGufGec" allowFullScreen></iframe>
                    </div>
            
                    <div className="widget-box-status-content">
                    <div className="content-actions">
                        <div className="content-action">
                        <div className="meta-line">
                            <div className="meta-line-list reaction-item-list">
                            <div className="reaction-item">
                                <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/love.png" alt="reaction-love"/>
                    
                                <div className="simple-dropdown padded reaction-item-dropdown">
                                <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/love.png" alt="reaction-love"/> <span className="bold">Love</span></p>
                                
                                <p className="simple-dropdown-text">Matt Parker</p>
            
                                <p className="simple-dropdown-text">Destroy Dex</p>
            
                                <p className="simple-dropdown-text">The Green Goo</p>
                                </div>
                            </div>
            
                            <div className="reaction-item">
                                <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/happy.png" alt="reaction-happy"/>
                    
                                <div className="simple-dropdown padded reaction-item-dropdown">
                                <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/happy.png" alt="reaction-happy"/> <span className="bold">Happy</span></p>
                                
                                <p className="simple-dropdown-text">Sandra Strange</p>
            
                                <p className="simple-dropdown-text">Jane Rodgers</p>
                                </div>
                            </div>
            
                            <div className="reaction-item">
                                <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/like.png" alt="reaction-like"/>
                    
                                <div className="simple-dropdown padded reaction-item-dropdown">
                                <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/like.png" alt="reaction-like"/> <span className="bold">Like</span></p>
                                
                                <p className="simple-dropdown-text">Neko Bebop</p>
            
                                <p className="simple-dropdown-text">Nick Grissom</p>
            
                                <p className="simple-dropdown-text">Sarah Diamond</p>
            
                                <p className="simple-dropdown-text">Jett Spiegel</p>
            
                                <p className="simple-dropdown-text">Marcus Jhonson</p>
            
                                <p className="simple-dropdown-text"><span className="bold">and 6 more...</span></p>
                                </div>
                            </div>
                            </div>
                    
                            <p className="meta-line-text">16</p>
                        </div>
                    
                        <div className="meta-line">
                            <div className="meta-line-list user-avatar-list">
                            <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/07.jpg"></div>
                                </div>
                            </div>
                    
                            <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/13.jpg"></div>
                                </div>
                            </div>
                    
                            <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/22.jpg"></div>
                                </div>
                            </div>
                    
                            <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/10.jpg"></div>
                                </div>
                            </div>
                    
                            <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/08.jpg"></div>
                                </div>
                            </div>
                            </div>
                    
                            <p className="meta-line-text">19 Participants</p>
                        </div>
                        </div>
                    
                        <div className="content-action">
                        <div className="meta-line">
                            <p className="meta-line-link">2 Comments</p>
                        </div>
                    
                        <div className="meta-line">
                            <p className="meta-line-text">0 Shares</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            
                <div className="post-options">
                    <div className="post-option-wrap">
                    <div className="post-option reaction-options-dropdown-trigger">
                        <svg className="post-option-icon icon-thumbs-up">
                        <use xlinkHref="#svg-thumbs-up"></use>
                        </svg>
            
                        <p className="post-option-text">React!</p>
                    </div>
            
                    <div className="reaction-options reaction-options-dropdown">
                        <div className="reaction-option text-tooltip-tft" data-title="Like">
                        <img className="reaction-option-image" src="img/reaction/like.png" alt="reaction-like"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Love">
                        <img className="reaction-option-image" src="img/reaction/love.png" alt="reaction-love"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Dislike">
                        <img className="reaction-option-image" src="img/reaction/dislike.png" alt="reaction-dislike"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Happy">
                        <img className="reaction-option-image" src="img/reaction/happy.png" alt="reaction-happy"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Funny">
                        <img className="reaction-option-image" src="img/reaction/funny.png" alt="reaction-funny"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Wow">
                        <img className="reaction-option-image" src="img/reaction/wow.png" alt="reaction-wow"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Angry">
                        <img className="reaction-option-image" src="img/reaction/angry.png" alt="reaction-angry"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Sad">
                        <img className="reaction-option-image" src="img/reaction/sad.png" alt="reaction-sad"/>
                        </div>
                    </div>
                    </div>
            
                    <div className="post-option">
                    <svg className="post-option-icon icon-comment">
                        <use xlinkHref="#svg-comment"></use>
                    </svg>
            
                    <p className="post-option-text">Comment</p>
                    </div>
            
                    <div className="post-option">
                    <svg className="post-option-icon icon-share">
                        <use xlinkHref="#svg-share"></use>
                    </svg>
            
                    <p className="post-option-text">Share</p>
                    </div>
                </div>
                </div>
            
                <div className="widget-box no-padding">
                <div className="widget-box-settings">
                    <div className="post-settings-wrap">
                    <div className="post-settings widget-box-post-settings-dropdown-trigger">
                        <svg className="post-settings-icon icon-more-dots">
                        <use xlinkHref="#svg-more-dots"></use>
                        </svg>
                    </div>
            
                    <div className="simple-dropdown widget-box-post-settings-dropdown">
                        <p className="simple-dropdown-link">Edit Post</p>
            
                        <p className="simple-dropdown-link">Delete Post</p>
            
                        <p className="simple-dropdown-link">Make it Featured</p>
            
                        <p className="simple-dropdown-link">Report Post</p>
            
                        <p className="simple-dropdown-link">Report Author</p>
                    </div>
                    </div>
                </div>
                
                <div className="widget-box-status">
                    <div className="widget-box-status-content">
                    <div className="user-status">
                        <a className="user-status-avatar" href="profile-timeline">
                        <div className="user-avatar small no-outline">
                            <div className="user-avatar-content">
                            <div className="hexagon-image-30-32" data-src="img/avatar/07.jpg"></div>
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
                        
                            <p className="user-avatar-badge-text">26</p>
                            </div>
                        </div>
                        </a>
                    
                        <p className="user-status-title medium"><a className="bold" href="profile-timeline">Sarah Diamond</a> created a <span className="bold">poll</span></p>
                    
                        <p className="user-status-text small">9 minutes ago</p>
                    </div>
            
                    <p className="widget-box-status-text">I've created a poll to ask all of you what you would like to see more in my upcoming videos! It will only take a couple of seconds...thanks to all in advance!!</p>
            
                    <div className="poll-box">
                        <p className="poll-title">What do you wanna see in my upcoming videos?</p>
                    
                        <p className="poll-text">Poll ends in 5 days</p>
                    
                        <div className="poll-results">
                        <div className="poll-result">
                            <div className="progress-stat">
                            <div className="bar-progress-wrap medium">
                                <p className="bar-progress-info medium negative regular">Walkthroughs<span className="bar-progress-text no-space"></span></p>
                            </div>
                        
                            <div id="poll-result-1" className="progress-stat-bar"></div>
                            </div>
                    
                            <div className="meta-line">
                            <div className="meta-line-list user-avatar-list">
                                <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                    <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                    <div className="hexagon-image-18-20" data-src="img/avatar/10.jpg"></div>
                                </div>
                                </div>
                    
                                <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                    <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                    <div className="hexagon-image-18-20" data-src="img/avatar/05.jpg"></div>
                                </div>
                                </div>
                    
                                <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                    <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                    <div className="hexagon-image-18-20" data-src="img/avatar/09.jpg"></div>
                                </div>
                                </div>
                    
                                <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                    <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                    <div className="hexagon-image-18-20" data-src="img/avatar/08.jpg"></div>
                                </div>
                                </div>
                    
                                <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                    <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                    <div className="hexagon-image-18-20" data-src="img/avatar/12.jpg"></div>
                                </div>
                                </div>
                    
                                <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                    <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                    <div className="hexagon-image-18-20" data-src="img/avatar/16.jpg"></div>
                                </div>
                                </div>
                    
                                <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                    <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                    <div className="hexagon-image-18-20" data-src="img/avatar/06.jpg"></div>
                                </div>
                                </div>
                    
                                <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                    <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                    <div className="hexagon-image-18-20" data-src="img/avatar/13.jpg"></div>
                                </div>
                                </div>
                    
                                <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                    <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                    <div className="hexagon-image-18-20" data-src="img/avatar/11.jpg"></div>
                                </div>
                                </div>
                    
                                <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                    <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                    <div className="hexagon-image-18-20" data-src="img/avatar/30.jpg"></div>
                                </div>
                                </div>
                    
                                <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                    <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                    <div className="hexagon-image-18-20" data-src="img/avatar/03.jpg"></div>
                                </div>
                                </div>
                    
                                <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                    <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                    <div className="hexagon-image-18-20" data-src="img/avatar/04.jpg"></div>
                                </div>
                                </div>
                            </div>
                    
                            <p className="meta-line-text">12 Votes</p>
                            </div>
                        </div>
                    
                        <div className="poll-result">
                            <div className="progress-stat">
                            <div className="bar-progress-wrap medium">
                                <p className="bar-progress-info medium negative regular">Retro Games<span className="bar-progress-text no-space"></span></p>
                            </div>
                        
                            <div id="poll-result-2" className="progress-stat-bar"></div>
                            </div>
                    
                            <div className="meta-line">
                            <div className="meta-line-list user-avatar-list">
                                <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                    <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                    <div className="hexagon-image-18-20" data-src="img/avatar/11.jpg"></div>
                                </div>
                                </div>
                    
                                <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                    <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                    <div className="hexagon-image-18-20" data-src="img/avatar/22.jpg"></div>
                                </div>
                                </div>
                    
                                <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                    <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                    <div className="hexagon-image-18-20" data-src="img/avatar/21.jpg"></div>
                                </div>
                                </div>
                    
                                <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                    <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                    <div className="hexagon-image-18-20" data-src="img/avatar/19.jpg"></div>
                                </div>
                                </div>
                    
                                <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                    <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                    <div className="hexagon-image-18-20" data-src="img/avatar/14.jpg"></div>
                                </div>
                                </div>
                    
                                <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                    <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                    <div className="hexagon-image-18-20" data-src="img/avatar/15.jpg"></div>
                                </div>
                                </div>
                    
                                <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                    <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                    <div className="hexagon-image-18-20" data-src="img/avatar/07.jpg"></div>
                                </div>
                                </div>
                            </div>
                    
                            <p className="meta-line-text">7 Votes</p>
                            </div>
                        </div>
                    
                        <div className="poll-result">
                            <div className="progress-stat">
                            <div className="bar-progress-wrap medium">
                                <p className="bar-progress-info medium negative regular">Unboxings<span className="bar-progress-text no-space"></span></p>
                            </div>
                        
                            <div id="poll-result-3" className="progress-stat-bar"></div>
                            </div>
                    
                            <div className="meta-line">
                            <div className="meta-line-list user-avatar-list">
                                <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                    <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                    <div className="hexagon-image-18-20" data-src="img/avatar/18.jpg"></div>
                                </div>
                                </div>
                    
                                <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                    <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                    <div className="hexagon-image-18-20" data-src="img/avatar/02.jpg"></div>
                                </div>
                                </div>
                            </div>
                    
                            <p className="meta-line-text">2 Votes</p>
                            </div>
                        </div>
                        </div>
                    </div>
            
                    <div className="content-actions">
                        <div className="content-action">
                        <div className="meta-line">
                            <div className="meta-line-list reaction-item-list">
                            <div className="reaction-item">
                                <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/funny.png" alt="reaction-funny"/>
                    
                                <div className="simple-dropdown padded reaction-item-dropdown">
                                <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/funny.png" alt="reaction-funny"/> <span className="bold">Funny</span></p>
                                
                                <p className="simple-dropdown-text">Matt Parker</p>
            
                                <p className="simple-dropdown-text">Destroy Dex</p>
            
                                <p className="simple-dropdown-text">The Green Goo</p>
                                </div>
                            </div>
            
                            <div className="reaction-item">
                                <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/like.png" alt="reaction-like"/>
                    
                                <div className="simple-dropdown padded reaction-item-dropdown">
                                <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/like.png" alt="reaction-like"/> <span className="bold">Like</span></p>
                                
                                <p className="simple-dropdown-text">Sandra Strange</p>
            
                                <p className="simple-dropdown-text">Jane Rodgers</p>
                                </div>
                            </div>
            
                            <div className="reaction-item">
                                <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/love.png" alt="reaction-love"/>
                    
                                <div className="simple-dropdown padded reaction-item-dropdown">
                                <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/love.png" alt="reaction-love"/> <span className="bold">Love</span></p>
                                
                                <p className="simple-dropdown-text">Neko Bebop</p>
            
                                <p className="simple-dropdown-text">Nick Grissom</p>
            
                                <p className="simple-dropdown-text">Sarah Diamond</p>
            
                                <p className="simple-dropdown-text">Jett Spiegel</p>
                                </div>
                            </div>
                            </div>
                    
                            <p className="meta-line-text">9</p>
                        </div>
                    
                        <div className="meta-line">
                            <div className="meta-line-list user-avatar-list">
                            <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/09.jpg"></div>
                                </div>
                            </div>
                    
                            <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/08.jpg"></div>
                                </div>
                            </div>
                    
                            <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/12.jpg"></div>
                                </div>
                            </div>
                    
                            <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/16.jpg"></div>
                                </div>
                            </div>
                    
                            <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/06.jpg"></div>
                                </div>
                            </div>
                            </div>
                    
                            <p className="meta-line-text">11 Participants</p>
                        </div>
                        </div>
                    
                        <div className="content-action">
                        <div className="meta-line">
                            <p className="meta-line-link">1 Comments</p>
                        </div>
                    
                        <div className="meta-line">
                            <p className="meta-line-text">0 Shares</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            
                <div className="post-options">
                    <div className="post-option-wrap">
                    <div className="post-option reaction-options-dropdown-trigger">
                        <svg className="post-option-icon icon-thumbs-up">
                        <use xlinkHref="#svg-thumbs-up"></use>
                        </svg>
            
                        <p className="post-option-text">React!</p>
                    </div>
            
                    <div className="reaction-options reaction-options-dropdown">
                        <div className="reaction-option text-tooltip-tft" data-title="Like">
                        <img className="reaction-option-image" src="img/reaction/like.png" alt="reaction-like"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Love">
                        <img className="reaction-option-image" src="img/reaction/love.png" alt="reaction-love"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Dislike">
                        <img className="reaction-option-image" src="img/reaction/dislike.png" alt="reaction-dislike"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Happy">
                        <img className="reaction-option-image" src="img/reaction/happy.png" alt="reaction-happy"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Funny">
                        <img className="reaction-option-image" src="img/reaction/funny.png" alt="reaction-funny"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Wow">
                        <img className="reaction-option-image" src="img/reaction/wow.png" alt="reaction-wow"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Angry">
                        <img className="reaction-option-image" src="img/reaction/angry.png" alt="reaction-angry"/>
                        </div>
            
                        <div className="reaction-option text-tooltip-tft" data-title="Sad">
                        <img className="reaction-option-image" src="img/reaction/sad.png" alt="reaction-sad"/>
                        </div>
                    </div>
                    </div>
            
                    <div className="post-option">
                    <svg className="post-option-icon icon-comment">
                        <use xlinkHref="#svg-comment"></use>
                    </svg>
            
                    <p className="post-option-text">Comment</p>
                    </div>
            
                    <div className="post-option">
                    <svg className="post-option-icon icon-share">
                        <use xlinkHref="#svg-share"></use>
                    </svg>
            
                    <p className="post-option-text">Share</p>
                    </div>
                </div>
                </div>

                <div className="loader-bars">
                <div className="loader-bar"></div>
                <div className="loader-bar"></div>
                <div className="loader-bar"></div>
                <div className="loader-bar"></div>
                <div className="loader-bar"></div>
                <div className="loader-bar"></div>
                <div className="loader-bar"></div>
                <div className="loader-bar"></div>
                </div>
            </div>

            <div className="grid-column">
                <div className="stats-box-slider">
                <div className="stats-box-slider-controls">
                    <p className="stats-box-slider-controls-title">Stats Box</p>
            
                    <div id="stats-box-slider-controls" className="slider-controls">
                    <div className="slider-control negative left">
                        <svg className="slider-control-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow"></use>
                        </svg>
                    </div>
            
                    <div className="slider-control negative right">
                        <svg className="slider-control-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow"></use>
                        </svg>
                    </div>
                    </div>
                </div>
                
                <div id="stats-box-slider-items" className="stats-box-slider-items">
                    <div className="stats-box stat-profile-views">
                    <div className="stats-box-value-wrap">
                        <p className="stats-box-value">87.365</p>
                
                        <div className="stats-box-diff">
                        <div className="stats-box-diff-icon positive">
                            <svg className="icon-plus-small">
                            <use xlinkHref="#svg-plus-small"></use>
                            </svg>
                        </div>
                
                        <p className="stats-box-diff-value">3.2%</p>
                        </div>
                    </div>
                
                    <p className="stats-box-title">Profile Views</p>
                
                    <p className="stats-box-text">In the last month</p>
                    </div>
            
                    <div className="stats-box stat-posts-created">
                    <div className="stats-box-value-wrap">
                        <p className="stats-box-value">294</p>
                
                        <div className="stats-box-diff">
                        <div className="stats-box-diff-icon positive">
                            <svg className="icon-plus-small">
                            <use xlinkHref="#svg-plus-small"></use>
                            </svg>
                        </div>
                
                        <p className="stats-box-diff-value">0.4%</p>
                        </div>
                    </div>
                
                    <p className="stats-box-title">Posts Created</p>
                
                    <p className="stats-box-text">In the last month</p>
                    </div>
            
                    <div className="stats-box stat-reactions-received">
                    <div className="stats-box-value-wrap">
                        <p className="stats-box-value">2560</p>
                
                        <div className="stats-box-diff">
                        <div className="stats-box-diff-icon negative">
                            <svg className="icon-minus-small">
                            <use xlinkHref="#svg-minus-small"></use>
                            </svg>
                        </div>
                
                        <p className="stats-box-diff-value">1.8%</p>
                        </div>
                    </div>
                
                    <p className="stats-box-title">Reactions Received</p>
                
                    <p className="stats-box-text">In the last month</p>
                    </div>
            
                    <div className="stats-box stat-comments-received">
                    <div className="stats-box-value-wrap">
                        <p className="stats-box-value">947</p>
                
                        <div className="stats-box-diff">
                        <div className="stats-box-diff-icon positive">
                            <svg className="icon-plus-small">
                            <use xlinkHref="#svg-plus-small"></use>
                            </svg>
                        </div>
                
                        <p className="stats-box-diff-value">4.5%</p>
                        </div>
                    </div>
                
                    <p className="stats-box-title">Comments Received</p>
                
                    <p className="stats-box-text">In the last month</p>
                    </div>
                </div>
                </div>

                <div className="widget-box">
                <div className="widget-box-controls">
                    <div id="reaction-stat-slider-controls" className="slider-controls">
                    <div className="slider-control left">
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
            
                <p className="widget-box-title">Reactions Received</p>
            
                <div className="widget-box-content">
                    <div id="reaction-stat-slider-items" className="widget-box-content-slider">
                    <div className="widget-box-content-slider-item">
                        <div className="reaction-stats">
                        <div className="reaction-stat">
                            <img className="reaction-stat-image" src="img/reaction/like.png" alt="reaction-like"/>
                
                            <p className="reaction-stat-title">12.642</p>
                
                            <p className="reaction-stat-text">Likes</p>
                        </div>
                
                        <div className="reaction-stat">
                            <img className="reaction-stat-image" src="img/reaction/love.png" alt="reaction-love"/>
                
                            <p className="reaction-stat-title">8.913</p>
                
                            <p className="reaction-stat-text">Loves</p>
                        </div>
                        </div>
                
                        <div className="reaction-stats">
                        <div className="reaction-stat">
                            <img className="reaction-stat-image" src="img/reaction/dislike.png" alt="reaction-dislike"/>
                
                            <p className="reaction-stat-title">945</p>
                
                            <p className="reaction-stat-text">Dislikes</p>
                        </div>
                
                        <div className="reaction-stat">
                            <img className="reaction-stat-image" src="img/reaction/happy.png" alt="reaction-happy"/>
                
                            <p className="reaction-stat-title">7.034</p>
                
                            <p className="reaction-stat-text">Happy</p>
                        </div>
                        </div>
                    </div>
            
                    <div className="widget-box-content-slider-item">
                        <div className="reaction-stats">
                        <div className="reaction-stat">
                            <img className="reaction-stat-image" src="img/reaction/funny.png" alt="reaction-funny"/>
                
                            <p className="reaction-stat-title">2.356</p>
                
                            <p className="reaction-stat-text">Funny</p>
                        </div>
                
                        <div className="reaction-stat">
                            <img className="reaction-stat-image" src="img/reaction/wow.png" alt="reaction-wow"/>
                
                            <p className="reaction-stat-title">5.944</p>
                
                            <p className="reaction-stat-text">Wow!</p>
                        </div>
                        </div>
                
                        <div className="reaction-stats">
                        <div className="reaction-stat">
                            <img className="reaction-stat-image" src="img/reaction/angry.png" alt="reaction-angry"/>
                
                            <p className="reaction-stat-title">1.706</p>
                
                            <p className="reaction-stat-text">Angry</p>
                        </div>
                
                        <div className="reaction-stat">
                            <img className="reaction-stat-image" src="img/reaction/sad.png" alt="reaction-sad"/>
                
                            <p className="reaction-stat-title">801</p>
                
                            <p className="reaction-stat-text">Sad</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div className="widget-box no-padding">
                <div className="widget-box-controls">
                    <div className="slider-controls">
                    <div className="slider-control left">
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
            
                <p className="widget-box-title">August 2019</p>
            
                <div className="widget-box-content">
                    <div className="calendar small">
                    <div className="calendar-week">
                        <p className="calendar-week-day"><span className="week-day-short">Sun</span><span className="week-day-long">Sunday</span></p>
                
                        <p className="calendar-week-day"><span className="week-day-short">Mon</span><span className="week-day-long">Monday</span></p>
                
                        <p className="calendar-week-day"><span className="week-day-short">Tue</span><span className="week-day-long">Tuesday</span></p>
                
                        <p className="calendar-week-day"><span className="week-day-short">Wed</span><span className="week-day-long">Wednesday</span></p>
                
                        <p className="calendar-week-day"><span className="week-day-short">Thu</span><span className="week-day-long">Thursday</span></p>
                
                        <p className="calendar-week-day"><span className="week-day-short">Fri</span><span className="week-day-long">Friday</span></p>
                
                        <p className="calendar-week-day"><span className="week-day-short">Sat</span><span className="week-day-long">Saturday</span></p>
                    </div>
                
                    <div className="calendar-days">
                        <div className="calendar-day-row">
                        <div className="calendar-day inactive">
                            <p className="calendar-day-number">29</p>
                        </div>
                
                        <div className="calendar-day inactive">
                            <p className="calendar-day-number">30</p>
                        </div>
                
                        <div className="calendar-day inactive">
                            <p className="calendar-day-number">31</p>
                        </div>
                
                        <div className="calendar-day">
                            <p className="calendar-day-number">1</p>
                        </div>
                
                        <div className="calendar-day">
                            <p className="calendar-day-number">2</p>
                
                            <div className="calendar-day-events">
                            <p className="calendar-day-event primary"><span className="calendar-day-event-text">Dex's Birthday</span></p>
                
                            <p className="calendar-day-event secondary"><span className="calendar-day-event-text">Sara's Big Stream</span></p>
                
                            <p className="calendar-day-event secondary"><span className="calendar-day-event-text">Striker GO Release</span></p>
                            </div>
                        </div>
                
                        <div className="calendar-day">
                            <p className="calendar-day-number">3</p>
                        </div>
                
                        <div className="calendar-day">
                            <p className="calendar-day-number">4</p>
                        </div>
                        </div>
                
                        <div className="calendar-day-row">
                        <div className="calendar-day">
                            <p className="calendar-day-number">5</p>
                        </div>
                
                        <div className="calendar-day">
                            <p className="calendar-day-number">6</p>
                        </div>
                
                        <div className="calendar-day current">
                            <p className="calendar-day-number">7</p>
                        </div>
                
                        <div className="calendar-day">
                            <p className="calendar-day-number">8</p>
                        </div>
                
                        <div className="calendar-day">
                            <p className="calendar-day-number">9</p>
                        </div>
                
                        <div className="calendar-day">
                            <p className="calendar-day-number">10</p>
                        </div>
                
                        <div className="calendar-day">
                            <p className="calendar-day-number">11</p>
                        </div>
                        </div>
                
                        <div className="calendar-day-row">
                        <div className="calendar-day">
                            <p className="calendar-day-number">12</p>
                        </div>
                
                        <div className="calendar-day active">
                            <p className="calendar-day-number">13</p>
                
                            <div className="calendar-day-events">
                            <p className="calendar-day-event secondary"><span className="calendar-day-event-text">Breakfast with Neko</span></p>
                
                            <p className="calendar-day-event primary"><span className="calendar-day-event-text">Streaming Party</span></p>
                            </div>
                        </div>
                
                        <div className="calendar-day">
                            <p className="calendar-day-number">14</p>
                        </div>
                
                        <div className="calendar-day">
                            <p className="calendar-day-number">15</p>
                        </div>
                
                        <div className="calendar-day">
                            <p className="calendar-day-number">16</p>
                        </div>
                
                        <div className="calendar-day">
                            <p className="calendar-day-number">17</p>
                        </div>
                
                        <div className="calendar-day">
                            <p className="calendar-day-number">18</p>
                        </div>
                        </div>
                
                        <div className="calendar-day-row">
                        <div className="calendar-day">
                            <p className="calendar-day-number">19</p>
                        </div>
                
                        <div className="calendar-day">
                            <p className="calendar-day-number">20</p>
                        </div>
                
                        <div className="calendar-day">
                            <p className="calendar-day-number">21</p>
                        </div>
                
                        <div className="calendar-day">
                            <p className="calendar-day-number">22</p>
                        </div>
                
                        <div className="calendar-day">
                            <p className="calendar-day-number">23</p>
                        </div>
                
                        <div className="calendar-day">
                            <p className="calendar-day-number">24</p>
                        </div>
                
                        <div className="calendar-day">
                            <p className="calendar-day-number">25</p>
                        </div>
                        </div>
                
                        <div className="calendar-day-row">
                        <div className="calendar-day">
                            <p className="calendar-day-number">26</p>
                
                            <div className="calendar-day-events">
                            <p className="calendar-day-event primary"><span className="calendar-day-event-text">CosWorld 2019 After...</span></p>
                            </div>
                        </div>
                
                        <div className="calendar-day">
                            <p className="calendar-day-number">27</p>
                        </div>
                
                        <div className="calendar-day">
                            <p className="calendar-day-number">28</p>
                        </div>
                
                        <div className="calendar-day">
                            <p className="calendar-day-number">29</p>
                        </div>
                
                        <div className="calendar-day">
                            <p className="calendar-day-number">30</p>
                        </div>
                
                        <div className="calendar-day inactive">
                            <p className="calendar-day-number">1</p>
                        </div>
                
                        <div className="calendar-day inactive">
                            <p className="calendar-day-number">2</p>
                        </div>
                        </div>
                    </div>
                    </div>
            
                    <div className="calendar-events-preview small">
                    <p className="calendar-events-preview-title">Monday 13th</p>
                
                    <div className="calendar-event-preview-list">
                        <div className="calendar-event-preview small secondary">
                        <div className="calendar-event-preview-start-time">
                            <p className="calendar-event-preview-start-time-title">8:30</p>
                
                            <p className="calendar-event-preview-start-time-text">AM</p>
                        </div>
                
                        <div className="calendar-event-preview-info">
                            <p className="calendar-event-preview-title">Breakfast with Neko</p>
                
                            <p className="calendar-event-preview-text">Hi Neko! I'm creating this event to invite you to have breakfast before work. Meet me at Coffebucks.</p>
                        </div>
                        </div>
                
                        <div className="calendar-event-preview small primary">
                        <div className="calendar-event-preview-start-time">
                            <p className="calendar-event-preview-start-time-title">10:00</p>
                
                            <p className="calendar-event-preview-start-time-text">PM</p>
                        </div>
                
                        <div className="calendar-event-preview-info">
                            <p className="calendar-event-preview-title">Streaming Party</p>
                
                            <p className="calendar-event-preview-text">The biggest party for Twitch streamers! Come and join us at Shenron Arena.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div className="widget-box">
                <div className="widget-box-settings">
                    <div className="post-settings-wrap">
                    <div className="post-settings widget-box-post-settings-dropdown-trigger">
                        <svg className="post-settings-icon icon-more-dots">
                        <use xlinkHref="#svg-more-dots"></use>
                        </svg>
                    </div>
            
                    <div className="simple-dropdown widget-box-post-settings-dropdown">
                        <p className="simple-dropdown-link">Widget Settings</p>
                    </div>
                    </div>
                </div>
            
                <p className="widget-box-title">Friends Activity</p>
            
                <div className="widget-box-content">
                    <div className="user-status-list">
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
                    
                        <p className="user-status-title"><a className="bold" href="profile-timeline">Neko Bebop</a> commented on Destroy Dex's <a className="highlighted" href="profile-timeline">photo</a></p>
                    
                        <p className="user-status-timestamp">3 minutes ago</p>
                    </div>
            
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
                    
                        <p className="user-status-title"><a className="bold" href="profile-timeline">Nick Grissom</a> liked Marina Valentine's <a className="highlighted" href="profile-timeline">status update</a></p>
                    
                        <p className="user-status-timestamp">12 minutes ago</p>
                    </div>
            
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
                    
                        <p className="user-status-title"><a className="bold" href="profile-timeline">The Green Goo</a> liked Nick Grissom's <a className="highlighted" href="profile-timeline">video</a></p>
                    
                        <p className="user-status-timestamp">17 minutes ago</p>
                    </div>
            
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
                    
                        <p className="user-status-title"><a className="bold" href="profile-timeline">Nick Grissom</a> changed his <a className="highlighted" href="profile-timeline">profile picture</a></p>
                    
                        <p className="user-status-timestamp">33 minutes ago</p>
                    </div>
            
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
                        
                            <p className="user-avatar-badge-text">19</p>
                            </div>
                        </div>
                        </a>
                    
                        <p className="user-status-title"><a className="bold" href="profile-timeline">Destroy Dex</a> commented on Rosie Sakura's <a className="highlighted" href="profile-timeline">profile</a></p>
                    
                        <p className="user-status-timestamp">41 minutes ago</p>
                    </div>
                    </div>
                </div>
                </div>

                <div className="widget-box">
                <div className="widget-box-settings">
                    <div className="post-settings-wrap">
                    <div className="post-settings widget-box-post-settings-dropdown-trigger">
                        <svg className="post-settings-icon icon-more-dots">
                        <use xlinkHref="#svg-more-dots"></use>
                        </svg>
                    </div>
            
                    <div className="simple-dropdown widget-box-post-settings-dropdown">
                        <p className="simple-dropdown-link">Widget Settings</p>
                    </div>
                    </div>
                </div>
            
                <p className="widget-box-title">Groups</p>
            
                <div className="widget-box-content">
                    <div className="filters">
                    <p className="filter">Newest</p>
            
                    <p className="filter active">Popular</p>
            
                    <p className="filter">Active</p>
                    </div>
            
                    <div className="user-status-list">
                    <div className="user-status request-small">
                        <a className="user-status-avatar" href="group-timeline">
                        <div className="user-avatar small no-border">
                            <div className="user-avatar-content">
                            <div className="hexagon-image-40-44" data-src="img/avatar/29.jpg"></div>
                            </div>
                        </div>
                        </a>
                    
                        <p className="user-status-title"><a className="bold" href="group-timeline">Twitch Streamers</a></p>
                    
                        <p className="user-status-text small">265 members</p>
                    
                        <div className="action-request-list">
                        <div className="action-request accept">
                            <svg className="action-request-icon icon-join-group">
                            <use xlinkHref="#svg-join-group"></use>
                            </svg>
                        </div>
                        </div>
                    </div>
            
                    <div className="user-status request-small">
                        <a className="user-status-avatar" href="group-timeline">
                        <div className="user-avatar small no-border">
                            <div className="user-avatar-content">
                            <div className="hexagon-image-40-44" data-src="img/avatar/24.jpg"></div>
                            </div>
                        </div>
                        </a>
                    
                        <p className="user-status-title"><a className="bold" href="group-timeline">Cosplayers of the World</a></p>
                    
                        <p className="user-status-text small">139 members</p>
                    
                        <div className="action-request-list">
                        <div className="action-request accept">
                            <svg className="action-request-icon icon-join-group">
                            <use xlinkHref="#svg-join-group"></use>
                            </svg>
                        </div>
                        </div>
                    </div>
            
                    <div className="user-status request-small">
                        <a className="user-status-avatar" href="group-timeline">
                        <div className="user-avatar small no-border">
                            <div className="user-avatar-content">
                            <div className="hexagon-image-40-44" data-src="img/avatar/25.jpg"></div>
                            </div>
                        </div>
                        </a>
                    
                        <p className="user-status-title"><a className="bold" href="group-timeline">Stream Designers</a></p>
                    
                        <p className="user-status-text small">466 members</p>
                    
                        <div className="action-request-list">
                        <div className="action-request accept">
                            <svg className="action-request-icon icon-join-group">
                            <use xlinkHref="#svg-join-group"></use>
                            </svg>
                        </div>
                        </div>
                    </div>
            
                    <div className="user-status request-small">
                        <a className="user-status-avatar" href="group-timeline">
                        <div className="user-avatar small no-border">
                            <div className="user-avatar-content">
                            <div className="hexagon-image-40-44" data-src="img/avatar/28.jpg"></div>
                            </div>
                        </div>
                        </a>
                    
                        <p className="user-status-title"><a className="bold" href="group-timeline">Street Artists</a></p>
                    
                        <p className="user-status-text small">951 members</p>
                    
                        <div className="action-request-list">
                        <div className="action-request decline">
                            <svg className="action-request-icon icon-leave-group">
                            <use xlinkHref="#svg-leave-group"></use>
                            </svg>
                        </div>
                        </div>
                    </div>
            
                    <div className="user-status request-small">
                        <a className="user-status-avatar" href="group-timeline">
                        <div className="user-avatar small no-border">
                            <div className="user-avatar-content">
                            <div className="hexagon-image-40-44" data-src="img/avatar/27.jpg"></div>
                            </div>
                        </div>
                        </a>
                    
                        <p className="user-status-title"><a className="bold" href="group-timeline">Gaming Watchtower</a></p>
                    
                        <p className="user-status-text small">2.365 members</p>
                    
                        <div className="action-request-list">
                        <div className="action-request accept">
                            <svg className="action-request-icon icon-join-group">
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
        </>
    )
}

export default Newsfeed