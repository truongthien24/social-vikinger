import React from 'react'

const PopupPicture = () => {
    return (
        <div className="popup-picture">
            <div className="popup-close-button popup-picture-trigger">
                <svg className="popup-close-button-icon icon-cross">
                    <use xlinkHref="#svg-cross"></use>
                </svg>
            </div>

            <div className="widget-box no-padding">
            <div className="widget-box-scrollable" data-simplebar>
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
                
                    <p className="user-status-title medium"><a className="bold" href="profile-timeline">Marina Valentine</a></p>
                
                    <p className="user-status-text small">29 minutes ago</p>
                    </div>
                    
                    <p className="widget-box-status-text">Here's a sneak peek of the official box cover art for <a href="#">Machine Wasteland II</a>! Remember that I'll be having a stream showing a preview tommorrow at 9PM PCT!</p>

                    <div className="tag-list">
                    <a className="tag-item secondary" href="newsfeed">Cover</a>
            
                    <a className="tag-item secondary" href="newsfeed">Preview</a>
            
                    <a className="tag-item secondary" href="newsfeed">Art</a>
            
                    <a className="tag-item secondary" href="newsfeed">Machine</a>
            
                    <a className="tag-item secondary" href="newsfeed">Wasteland</a>
                    </div>
            
                    <div className="content-actions">
                    <div className="content-action">
                        <div className="meta-line">
                        <div className="meta-line-list reaction-item-list">
                            <div className="reaction-item">
                            <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/love.png" alt="reaction-love"/>
                
                            <div className="simple-dropdown padded reaction-item-dropdown">
                                <p className="simple-dropdown-text">
                                    <img className="reaction" src="img/reaction/love.png" alt="reaction-love"/> <span className="bold">Love</span></p>
                            
                                <p className="simple-dropdown-text">Destroy Dex</p>
            
                                <p className="simple-dropdown-text">The Green Goo</p>
            
                                <p className="simple-dropdown-text">Bearded Wonder</p>
            
                                <p className="simple-dropdown-text">Sandra Strange</p>
            
                                <p className="simple-dropdown-text">Matt Parker</p>
            
                                <p className="simple-dropdown-text">James Murdock</p>
            
                                <p className="simple-dropdown-text"><span className="bold">and 14 more...</span></p>
                            </div>
                            </div>
            
                            <div className="reaction-item">
                            <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/wow.png" alt="reaction-wow"/>
                
                            <div className="simple-dropdown padded reaction-item-dropdown">
                                <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/wow.png" alt="reaction-wow"/> <span className="bold">Wow</span></p>
                            
                                <p className="simple-dropdown-text">Jett Spiegel</p>
                            </div>
                            </div>
            
                            <div className="reaction-item">
                            <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/like.png" alt="reaction-like"/>
                
                            <div className="simple-dropdown padded reaction-item-dropdown">
                                <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/like.png" alt="reaction-like"/> <span className="bold">Like</span></p>
                            
                                <p className="simple-dropdown-text">Neko Bebop</p>
                
                                <p className="simple-dropdown-text">Nick Grissom</p>
                
                                <p className="simple-dropdown-text">Sarah Diamond</p>
                            </div>
                            </div>
                        </div>
                
                        <p className="meta-line-text">24</p>
                        </div>
                    </div>
                
                    <div className="content-action">
                        <div className="meta-line">
                        <p className="meta-line-link">13 Comments</p>
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
                    <div className="post-option no-text reaction-options-dropdown-trigger">
                    <svg className="post-option-icon icon-thumbs-up">
                        <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    </div>
            
                    <div className="reaction-options small reaction-options-dropdown">
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
            
                <div className="post-option no-text active">
                    <svg className="post-option-icon icon-comment">
                    <use xlinkHref="#svg-comment"></use>
                    </svg>
                </div>
            
                <div className="post-option no-text">
                    <svg className="post-option-icon icon-share">
                    <use xlinkHref="#svg-share"></use>
                    </svg>
                </div>
                </div>
            
                <div className="post-comment-list">
                <div className="post-comment">
                    <a className="user-avatar small no-outline" href="profile-timeline">
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
                    </a>
            
                    <p className="post-comment-text"><a className="post-comment-text-author" href="profile-timeline">Neko Bebop</a>It's always a pleasure to do this streams with you! If we have at least half the fun than last time it will be an incredible success!</p>
            
                    <div className="content-actions">
                    <div className="content-action">
                        <div className="meta-line">
                        <div className="meta-line-list reaction-item-list small">
                            <div className="reaction-item">
                            <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/happy.png" alt="reaction-happy"/>
                
                            <div className="simple-dropdown padded reaction-item-dropdown">
                                <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/happy.png" alt="reaction-happy"/> <span className="bold">Happy</span></p>
            
                                <p className="simple-dropdown-text">Marcus Jhonson</p>
                            </div>
                            </div>
                
                            <div className="reaction-item">
                            <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/like.png" alt="reaction-like"/>
                
                            <div className="simple-dropdown padded reaction-item-dropdown">
                                <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/like.png" alt="reaction-like"/> <span className="bold">Like</span></p>
                            
                                <p className="simple-dropdown-text">Neko Bebop</p>
                
                                <p className="simple-dropdown-text">Nick Grissom</p>
                
                                <p className="simple-dropdown-text">Sarah Diamond</p>
                            </div>
                            </div>
                        </div>
                
                        <p className="meta-line-text">4</p>
                        </div>
            
                        <div className="meta-line">
                        <p className="meta-line-link light reaction-options-small-dropdown-trigger">React!</p>
            
                        <div className="reaction-options small reaction-options-small-dropdown">
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
            
                        <div className="meta-line">
                        <p className="meta-line-link light">Reply</p>
                        </div>
            
                        <div className="meta-line">
                        <p className="meta-line-timestamp">15 min ago</p>
                        </div>
            
                        <div className="meta-line settings">
                        <div className="post-settings-wrap">
                            <div className="post-settings post-settings-dropdown-trigger">
                            <svg className="post-settings-icon icon-more-dots">
                                <use xlinkHref="#svg-more-dots"></use>
                            </svg>
                            </div>
            
                            <div className="simple-dropdown post-settings-dropdown">
                            <p className="simple-dropdown-link">Report Post</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            
                <div className="post-comment unread reply-2">
                    <a className="user-avatar small no-outline" href="profile-timeline">
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
                    </a>
            
                    <p className="post-comment-text"><a className="post-comment-text-author" href="profile-timeline">Nick Grissom</a>I wouldn't miss it for anything!! Love both streams!</p>
            
                    <div className="content-actions">
                    <div className="content-action">
                        <div className="meta-line">
                        <div className="meta-line-list reaction-item-list small">
                            <div className="reaction-item">
                            <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/like.png" alt="reaction-like"/>
                
                            <div className="simple-dropdown padded reaction-item-dropdown">
                                <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/like.png" alt="reaction-like"/> <span className="bold">Like</span></p>
                            
                                <p className="simple-dropdown-text">Neko Bebop</p>
                            </div>
                            </div>
                        </div>
                
                        <p className="meta-line-text">1</p>
                        </div>
            
                        <div className="meta-line">
                        <p className="meta-line-link light reaction-options-small-dropdown-trigger">React!</p>
            
                        <div className="reaction-options small reaction-options-small-dropdown">
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
            
                        <div className="meta-line">
                        <p className="meta-line-link light">Reply</p>
                        </div>
            
                        <div className="meta-line">
                        <p className="meta-line-timestamp">2 min ago</p>
                        </div>
            
                        <div className="meta-line settings">
                        <div className="post-settings-wrap">
                            <div className="post-settings post-settings-dropdown-trigger">
                            <svg className="post-settings-icon icon-more-dots">
                                <use xlinkHref="#svg-more-dots"></use>
                            </svg>
                            </div>
            
                            <div className="simple-dropdown post-settings-dropdown">
                            <p className="simple-dropdown-link">Report Post</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            
                <div className="post-comment">
                    <a className="user-avatar small no-outline" href="profile-timeline">
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
                    </a>
            
                    <p className="post-comment-text"><a className="post-comment-text-author" href="profile-timeline">Destroy Dex</a>YEAHHH!! <a href="profile-timeline">@MarinaValentine</a> I really enjoyed your last stream and it also was really funny! Can't wait!</p>
            
                    <div className="content-actions">
                    <div className="content-action">
                        <div className="meta-line">
                        <p className="meta-line-link light reaction-options-small-dropdown-trigger">React!</p>
            
                        <div className="reaction-options small reaction-options-small-dropdown">
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
            
                        <div className="meta-line">
                        <p className="meta-line-link light">Reply</p>
                        </div>
            
                        <div className="meta-line">
                        <p className="meta-line-timestamp">27 min ago</p>
                        </div>
            
                        <div className="meta-line settings">
                        <div className="post-settings-wrap">
                            <div className="post-settings post-settings-dropdown-trigger">
                            <svg className="post-settings-icon icon-more-dots">
                                <use xlinkHref="#svg-more-dots"></use>
                            </svg>
                            </div>
            
                            <div className="simple-dropdown post-settings-dropdown">
                            <p className="simple-dropdown-link">Report Post</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            
                <div className="post-comment">
                    <a className="user-avatar small no-outline" href="profile-timeline">
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
                    </a>
            
                    <p className="post-comment-text"><a className="post-comment-text-author" href="profile-timeline">Sarah Diamond</a>That sounds awesome Marina! And also thanks a lot for the art sneak peek! I went to the GameCon last week and had a great time playing the game's open demo.</p>
            
                    <div className="content-actions">
                    <div className="content-action">
                        <div className="meta-line">
                        <p className="meta-line-link light reaction-options-small-dropdown-trigger">React!</p>
            
                        <div className="reaction-options small reaction-options-small-dropdown">
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
            
                        <div className="meta-line">
                        <p className="meta-line-link light">Reply</p>
                        </div>
            
                        <div className="meta-line">
                        <p className="meta-line-timestamp">39 min ago</p>
                        </div>
            
                        <div className="meta-line settings">
                        <div className="post-settings-wrap">
                            <div className="post-settings post-settings-dropdown-trigger">
                            <svg className="post-settings-icon icon-more-dots">
                                <use xlinkHref="#svg-more-dots"></use>
                            </svg>
                            </div>
            
                            <div className="simple-dropdown post-settings-dropdown">
                            <p className="simple-dropdown-link">Report Post</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            
                <p className="post-comment-heading">Load More Comments <span className="highlighted">9+</span></p>
                </div>
            </div>

            <div className="post-comment-form bordered-top">
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
        
                <form className="form">
                <div className="form-row">
                    <div className="form-item">
                    <div className="form-input small">
                        <label for="popup-post-reply">Your Reply</label>
                        <input type="text" id="popup-post-reply" name="popup_post_reply"/>
                    </div>
                    </div>
                </div>
                </form>
            </div>
            </div>

            <div className="popup-picture-image-wrap">
            <figure className="popup-picture-image">
                <img src="img/cover/04.jpg" alt="cover-04"/>
            </figure>
            </div>
        </div>
    )
}

export default PopupPicture