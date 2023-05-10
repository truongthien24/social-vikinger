import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { setLoading } from '../../../../redux/action/homeAction'

const GroupsTimeLine = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    return (
        <div class="grid grid-3-6-3 mobile-prefer-content">
            <div class="grid-column">
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

                <p class="widget-box-title">Social Networks</p>

                <div class="widget-box-content">
                    <div class="social-links multiline align-left">
                    <a class="social-link small facebook" href="#">
                        <svg class="social-link-icon icon-facebook">
                        <use xlinkHref="#svg-facebook"></use>
                        </svg>
                    </a>

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

                    <a class="social-link small artstation" href="#">
                        <svg class="social-link-icon icon-artstation">
                        <use xlinkHref="#svg-artstation"></use>
                        </svg>
                    </a>

                    <a class="social-link small youtube" href="#">
                        <svg class="social-link-icon icon-youtube">
                        <use xlinkHref="#svg-youtube"></use>
                        </svg>
                    </a>

                    <a class="social-link small discord" href="#">
                        <svg class="social-link-icon icon-discord">
                        <use xlinkHref="#svg-discord"></use>
                        </svg>
                    </a>

                    <a class="social-link small patreon" href="#">
                        <svg class="social-link-icon icon-patreon">
                        <use xlinkHref="#svg-patreon"></use>
                        </svg>
                    </a>
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

                <p class="widget-box-title">Group Info</p>

                <div class="widget-box-content">
                    <p class="paragraph">Hello everyone! This is a group open to all for cosplayers around the world to talk about their passion, trade tips, ask for opinions and have a great time!</p>

                    <div class="information-line-list">
                    <div class="information-line">
                        <p class="information-line-title">Created</p>

                        <p class="information-line-text">April 9th, 2018</p>
                    </div>

                    <div class="information-line">
                        <p class="information-line-title">Type</p>

                        <p class="information-line-text">Public</p>
                    </div>

                    <div class="information-line">
                        <p class="information-line-title">Email</p>

                        <p class="information-line-text"><a href="#">info@cosworld.com</a></p>
                    </div>

                    <div class="information-line">
                        <p class="information-line-title">Web</p>

                        <p class="information-line-text"><a href="#">www.cosplayworld.com</a></p>
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
                        <a class="user-status-avatar" href="profile-timeline.html">
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
                    
                        <p class="user-status-title"><a class="bold" href="profile-timeline.html">Sarah Diamond</a></p>
                    
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
                        <a class="user-status-avatar" href="profile-timeline.html">
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
                    
                        <p class="user-status-title"><a class="bold" href="profile-timeline.html">Rosie Sakura</a></p>
                    
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
                        <a class="user-status-avatar" href="profile-timeline.html">
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
                    
                        <p class="user-status-title"><a class="bold" href="profile-timeline.html">Peter Stark</a></p>
                    
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

                <p class="widget-box-title">Upcoming Events <span class="highlighted">2</span></p>

                <div class="widget-box-content">
                    <div class="event-preview-list">
                    <div class="event-preview small">
                        <figure class="event-preview-cover liquid">
                        <img src="img/cover/33.jpg" alt="cover-33"/>
                        </figure>

                        <div class="event-preview-info">
                        <div class="date-sticker">
                            <p class="date-sticker-day">26</p>
                    
                            <p class="date-sticker-month">Aug</p>
                        </div>

                        <p class="event-preview-title popup-event-information-trigger">CosWorld 2019 After Party</p>

                        <p class="event-preview-timestamp">11:00 PM</p>

                        <p class="event-preview-text">Join us at the CosWorld after party! We'll be eating, drinking and having a great time exchanging experience from the convention.</p>

                        <div class="meta-line">
                            <div class="meta-line-list user-avatar-list">
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
                                <div class="hexagon-image-18-20" data-src="img/avatar/02.jpg"></div>
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
                                <div class="hexagon-image-18-20" data-src="img/avatar/05.jpg"></div>
                                </div>
                            </div>
                            </div>

                            <p class="meta-line-text">+24 will assist</p>
                        </div>
                        </div>
                    </div>

                    <div class="event-preview small">
                        <figure class="event-preview-cover liquid">
                        <img src="img/cover/43.jpg" alt="cover-43"/>
                        </figure>

                        <div class="event-preview-info">
                        <div class="date-sticker">
                            <p class="date-sticker-day">31</p>
                    
                            <p class="date-sticker-month">Oct</p>
                        </div>

                        <p class="event-preview-title popup-event-information-trigger">USA Halloween Meetup 2019</p>

                        <p class="event-preview-timestamp">12:30 PM</p>

                        <p class="event-preview-text">Let's celebrate Halloween together with our best cosplays! Come and bring your friends!</p>

                        <div class="meta-line">
                            <div class="meta-line-list user-avatar-list">
                            <div class="user-avatar micro no-stats">
                                <div class="user-avatar-border">
                                <div class="hexagon-22-24"></div>
                                </div>
                            
                                <div class="user-avatar-content">
                                <div class="hexagon-image-18-20" data-src="img/avatar/02.jpg"></div>
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
                                <div class="hexagon-image-18-20" data-src="img/avatar/13.jpg"></div>
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
                            </div>

                            <p class="meta-line-text">+31 will assist</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div class="grid-column">
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
                    <div class="tag-sticker">
                    <svg class="tag-sticker-icon primary icon-pinned">
                        <use xlinkHref="#svg-pinned"></use>
                    </svg>
                    </div>

                    <div class="widget-box-status-content">
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
                    
                        <p class="user-status-title medium"><a class="bold" href="profile-timeline.html">Neko Bebop</a></p>
                    
                        <p class="user-status-text small">2 weeks ago</p>
                    </div>
            
                    <p class="widget-box-status-text">Hi! And welcome to the group! for those who just join us, we invite you to our Discord official channel, where we talk about cosplays, conventions, DIY, costume tips and more!</p>
            
                    <a class="video-status" href="https://discordapp.com/" target="_blank">
                        <img class="video-status-image" src="img/cover/52.jpg" alt="cover-52"/>
            
                        <div class="video-status-info">
                        <p class="video-status-meta">discordapp.com</p>
            
                        <p class="video-status-title"><span class="bold">Cosplayers of the World</span> on <span class="highlighted">Discord</span></p>
            
                        <p class="video-status-text">Let's talk about everything cosplay related!.</p>
                        </div>
                    </a>
            
                    <div class="tag-list">
                        <a class="tag-item secondary" href="newsfeed.html">Discord</a>
            
                        <a class="tag-item secondary" href="newsfeed.html">Cosplay</a>
            
                        <a class="tag-item secondary" href="newsfeed.html">Costume</a>
            
                        <a class="tag-item secondary" href="newsfeed.html">Channel</a>
                    </div>
            
                    <div class="content-actions">
                        <div class="content-action">
                        <div class="meta-line">
                            <div class="meta-line-list reaction-item-list">
                            <div class="reaction-item">
                                <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/happy.png" alt="reaction-happy"/>
                    
                                <div class="simple-dropdown padded reaction-item-dropdown">
                                <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/happy.png" alt="reaction-happy"/> <span class="bold">Happy</span></p>
                                
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
            
                                <p class="simple-dropdown-text">Marcus Jhonson</p>
            
                                <p class="simple-dropdown-text"><span class="bold">and 74 more...</span></p>
                                </div>
                            </div>
                            </div>
                    
                            <p class="meta-line-text">84</p>
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
                                <div class="hexagon-image-18-20" data-src="img/avatar/02.jpg"></div>
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
                                <div class="hexagon-image-18-20" data-src="img/avatar/10.jpg"></div>
                                </div>
                            </div>
                            </div>
                    
                            <p class="meta-line-text">109 Participants</p>
                        </div>
                        </div>
                    
                        <div class="content-action">
                        <div class="meta-line">
                            <p class="meta-line-link">28 Comments</p>
                        </div>
                    
                        <div class="meta-line">
                            <p class="meta-line-text">3 Shares</p>
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
                    
                        <p class="user-status-title medium"><a class="bold" href="profile-timeline.html">Marina Valentine</a> uploaded <span class="bold">23 new photos</span></p>
                    
                        <p class="user-status-text small">17 minutes ago</p>
                    </div>
            
                    <p class="widget-box-status-text">Hey! I've compiled a list of the best cosplays out there for inspiration :D</p>
            
                    <div class="picture-collage">
                        <div class="picture-collage-row medium">
                        <div class="picture-collage-item popup-picture-trigger">
                            <div class="photo-preview">
                            <figure class="photo-preview-image liquid">
                                <img src="img/cover/30.jpg" alt="photo-preview-30"/>
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
                                <img src="img/cover/45.jpg" alt="photo-preview-45"/>
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
                                <img src="img/cover/33.jpg" alt="photo-preview-33"/>
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
                                <img src="img/cover/44.jpg" alt="photo-preview-44"/>
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
                            <a class="picture-collage-item-overlay" href="#">
                            <p class="picture-collage-item-overlay-text">+19</p>
                            </a>
            
                            <div class="photo-preview">
                            <figure class="photo-preview-image liquid">
                                <img src="img/cover/37.jpg" alt="photo-preview-37"/>
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
                        <a class="tag-item secondary" href="newsfeed.html">Photos</a>
            
                        <a class="tag-item secondary" href="newsfeed.html">Cosplay</a>
            
                        <a class="tag-item secondary" href="newsfeed.html">Inspiration</a>
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
                    
                        <div class="user-status-title medium"><a class="bold" href="profile-timeline.html">Neko Bebop</a> replied to the discussion <a class="bold" href="forums-discussion.html">In your opinion, who has the best Cosplay?</a> in the forum
                        <a class="user-avatar micro no-stats" onClick={()=>{
                            dispatch(setLoading({
                                status: 'isLoading'
                            }))
                        }}>
                            <div class="user-avatar-border">
                            <div class="hexagon-22-24"></div>
                            </div>
                        
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/24.jpg"></div>
                            </div>
                        </a>
                        <a class="bold" onClick={()=>{
                            dispatch(setLoading({
                                status: 'isLoading'
                            }))
                        }}>Cosplayers of the World</a>
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
                    
                        <p class="user-status-title medium"><a class="bold" href="profile-timeline.html">Nick Grissom</a> uploaded a <span class="bold">video</span></p>
                    
                        <p class="user-status-text small">1 hour ago</p>
                    </div>
            
                    <p class="widget-box-status-text">Here's a video I made of all the awesome CosplayWonder 2018!</p>
                    </div>
            
                    <div class="iframe-wrap">
                    <iframe src="https://www.youtube.com/embed/eVjwc1H7r74?start=43" allowfullscreen></iframe>
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
                    
                        <p class="user-status-title medium"><a class="bold" href="profile-timeline.html">Bearded Wonder</a></p>
                    
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

                <p class="widget-box-title">Group Organizers</p>

                <div class="widget-box-content">
                    <div class="user-status-list">
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
                    
                        <p class="user-status-text small">2 friends in common</p>
                    </div>

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
                    
                        <p class="user-status-text small">1 friends in common</p>
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

                <p class="widget-box-title">Photos <span class="highlighted">30</span></p>

                <div class="widget-box-content">
                    <div class="picture-item-list small">
                    <div class="picture-item popup-picture-trigger">
                        <figure class="picture round liquid">
                        <img src="img/avatar/24.jpg" alt="avatar-24"/>
                        </figure>
                    </div>

                    <div class="picture-item popup-picture-trigger">
                        <figure class="picture round liquid">
                        <img src="img/cover/30.jpg" alt="cover-30"/>
                        </figure>
                    </div>

                    <div class="picture-item popup-picture-trigger">
                        <figure class="picture round liquid">
                        <img src="img/cover/45.jpg" alt="cover-45"/>
                        </figure>
                    </div>

                    <div class="picture-item popup-picture-trigger">
                        <figure class="picture round liquid">
                        <img src="img/cover/34.jpg" alt="cover-34"/>
                        </figure>
                    </div>

                    <div class="picture-item popup-picture-trigger">
                        <figure class="picture round liquid">
                        <img src="img/cover/27.jpg" alt="cover-27"/>
                        </figure>
                    </div>

                    <div class="picture-item popup-picture-trigger">
                        <figure class="picture round liquid">
                        <img src="img/cover/38.jpg" alt="cover-38"/>
                        </figure>
                    </div>

                    <div class="picture-item popup-picture-trigger">
                        <figure class="picture round liquid">
                        <img src="img/cover/35.jpg" alt="cover-35"/>
                        </figure>
                    </div>

                    <div class="picture-item popup-picture-trigger">
                        <figure class="picture round liquid">
                        <img src="img/cover/31.jpg" alt="cover-31"/>
                        </figure>
                    </div>

                    <div class="picture-item popup-picture-trigger">
                        <figure class="picture round liquid">
                        <img src="img/cover/44.jpg" alt="cover-44"/>
                        </figure>
                    </div>

                    <div class="picture-item popup-picture-trigger">
                        <figure class="picture round liquid">
                        <img src="img/cover/42.jpg" alt="cover-42"/>
                        </figure>
                    </div>

                    <div class="picture-item popup-picture-trigger">
                        <figure class="picture round liquid">
                        <img src="img/cover/37.jpg" alt="cover-37"/>
                        </figure>
                    </div>

                    <a class="picture-item" href="#">
                        <figure class="picture round liquid">
                        <img src="img/cover/29.jpg" alt="cover-29"/>
                        </figure>

                        <div class="picture-item-overlay round">
                        <p class="picture-item-overlay-text">+61</p>
                        </div>
                    </a>
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

                <p class="widget-box-title">Discussions <span class="highlighted">16</span></p>

                <div class="widget-box-content">
                    <div class="filters">
                    <p class="filter">Newest</p>

                    <p class="filter active">Popular</p>
                    </div>

                    <div class="post-preview-line-list">
                    <div class="post-preview-line">
                        <p class="post-preview-line-title"><a href="forums-discussion.html">In your opinion, who has the best cosplay?</a></p>
                    
                        <div class="post-preview-line-meta">
                        <a class="user-avatar micro no-border" href="profile-timeline.html">
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/05.jpg"></div>
                            </div>
                        </a>
                    
                        <p class="post-preview-line-author"><a href="profile-timeline.html">By Neko Bebop</a></p>
                    
                        <p class="post-preview-line-timestamp">2 weeks ago</p>
                        </div>
                    </div>

                    <div class="post-preview-line">
                        <p class="post-preview-line-title"><a href="forums-discussion.html">Preparing everything for CosWorld 2019, show your works here!</a></p>
                    
                        <div class="post-preview-line-meta">
                        <a class="user-avatar micro no-border" href="profile-timeline.html">
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/03.jpg"></div>
                            </div>
                        </a>
                    
                        <p class="post-preview-line-author"><a href="profile-timeline.html">By Nick Grissom</a></p>
                    
                        <p class="post-preview-line-timestamp">13 hours ago</p>
                        </div>
                    </div>

                    <div class="post-preview-line">
                        <p class="post-preview-line-title"><a href="forums-discussion.html">Official Topic! Let's organize the global meetups for all continents!</a></p>
                    
                        <div class="post-preview-line-meta">
                        <a class="user-avatar micro no-border" href="profile-timeline.html">
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/02.jpg"></div>
                            </div>
                        </a>
                    
                        <p class="post-preview-line-author"><a href="profile-timeline.html">By Destroy Dex</a></p>
                    
                        <p class="post-preview-line-timestamp">5 days ago</p>
                        </div>
                    </div>

                    <div class="post-preview-line">
                        <p class="post-preview-line-title"><a href="forums-discussion.html">Share your cosplay tips here! Tutorials, DIY's, paints and more</a></p>
                    
                        <div class="post-preview-line-meta">
                        <a class="user-avatar micro no-border" href="profile-timeline.html">
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/05.jpg"></div>
                            </div>
                        </a>
                    
                        <p class="post-preview-line-author"><a href="profile-timeline.html">By Neko Bebop</a></p>
                    
                        <p class="post-preview-line-timestamp">20 hours ago</p>
                        </div>
                    </div>

                    <div class="post-preview-line">
                        <p class="post-preview-line-title"><a href="forums-discussion.html">Check out all the pictures I took at the CosplayWonder 2018</a></p>
                    
                        <div class="post-preview-line-meta">
                        <a class="user-avatar micro no-border" href="profile-timeline.html">
                            <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/07.jpg"></div>
                            </div>
                        </a>
                    
                        <p class="post-preview-line-author"><a href="profile-timeline.html">By Sarah Diamond</a></p>
                    
                        <p class="post-preview-line-timestamp">19 days ago</p>
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

                <p class="widget-box-title">Videos <span class="highlighted">4</span></p>

                <div class="widget-box-content">
                    <div class="video-box-list">
                    <div class="video-box small">
                        <div class="video-box-cover popup-video-trigger">
                        <figure class="video-box-cover-image liquid">
                            <img src="img/cover/30.jpg" alt="cover-30"/>
                        </figure>
                    
                        <div class="play-button">
                            <svg class="play-button-icon icon-play">
                            <use xlinkHref="#svg-play"></use>
                            </svg>
                        </div>
                    
                        <div class="video-box-info">
                            <p class="video-box-title">My Latest Cosplay</p>
                    
                            <p class="video-box-text">1 hour ago</p>
                        </div>
                        </div>
                    </div>

                    <div class="video-box small">
                        <div class="video-box-cover popup-video-trigger">
                        <figure class="video-box-cover-image liquid">
                            <img src="img/cover/44.jpg" alt="cover-44"/>
                        </figure>
                    
                        <div class="play-button">
                            <svg class="play-button-icon icon-play">
                            <use xlinkHref="#svg-play"></use>
                            </svg>
                        </div>
                    
                        <div class="video-box-info">
                            <p class="video-box-title">Jenny primary Photoshoot</p>
                    
                            <p class="video-box-text">12 days ago</p>
                        </div>
                        </div>
                    </div>

                    <div class="video-box small">
                        <div class="video-box-cover popup-video-trigger">
                        <figure class="video-box-cover-image liquid">
                            <img src="img/cover/42.jpg" alt="cover-42"/>
                        </figure>
                    
                        <div class="play-button">
                            <svg class="play-button-icon icon-play">
                            <use xlinkHref="#svg-play"></use>
                            </svg>
                        </div>
                    
                        <div class="video-box-info">
                            <p class="video-box-title">Tabatha Arcade Gaming Tips</p>
                    
                            <p class="video-box-text">5 days ago</p>
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

export default GroupsTimeLine