import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { setLoading } from '../../../../redux/action/homeAction'

const GroupsTimeLine = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    return (
        <div className="grid grid-3-6-3 mobile-prefer-content">
            <div className="grid-column">
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

                <p className="widget-box-title">Social Networks</p>

                <div className="widget-box-content">
                    <div className="social-links multiline align-left">
                    <a className="social-link small facebook" href="#">
                        <svg className="social-link-icon icon-facebook">
                        <use xlinkHref="#svg-facebook"></use>
                        </svg>
                    </a>

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

                    <a className="social-link small artstation" href="#">
                        <svg className="social-link-icon icon-artstation">
                        <use xlinkHref="#svg-artstation"></use>
                        </svg>
                    </a>

                    <a className="social-link small youtube" href="#">
                        <svg className="social-link-icon icon-youtube">
                        <use xlinkHref="#svg-youtube"></use>
                        </svg>
                    </a>

                    <a className="social-link small discord" href="#">
                        <svg className="social-link-icon icon-discord">
                        <use xlinkHref="#svg-discord"></use>
                        </svg>
                    </a>

                    <a className="social-link small patreon" href="#">
                        <svg className="social-link-icon icon-patreon">
                        <use xlinkHref="#svg-patreon"></use>
                        </svg>
                    </a>
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

                <p className="widget-box-title">Group Info</p>

                <div className="widget-box-content">
                    <p className="paragraph">Hello everyone! This is a group open to all for cosplayers around the world to talk about their passion, trade tips, ask for opinions and have a great time!</p>

                    <div className="information-line-list">
                    <div className="information-line">
                        <p className="information-line-title">Created</p>

                        <p className="information-line-text">April 9th, 2018</p>
                    </div>

                    <div className="information-line">
                        <p className="information-line-title">Type</p>

                        <p className="information-line-text">Public</p>
                    </div>

                    <div className="information-line">
                        <p className="information-line-title">Email</p>

                        <p className="information-line-text"><a href="#">info@cosworld.com</a></p>
                    </div>

                    <div className="information-line">
                        <p className="information-line-title">Web</p>

                        <p className="information-line-text"><a href="#">www.cosplayworld.com</a></p>
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

                <p className="widget-box-title">Upcoming Events <span className="highlighted">2</span></p>

                <div className="widget-box-content">
                    <div className="event-preview-list">
                    <div className="event-preview small">
                        <figure className="event-preview-cover liquid">
                        <img src="img/cover/33.jpg" alt="cover-33"/>
                        </figure>

                        <div className="event-preview-info">
                        <div className="date-sticker">
                            <p className="date-sticker-day">26</p>
                    
                            <p className="date-sticker-month">Aug</p>
                        </div>

                        <p className="event-preview-title popup-event-information-trigger">CosWorld 2019 After Party</p>

                        <p className="event-preview-timestamp">11:00 PM</p>

                        <p className="event-preview-text">Join us at the CosWorld after party! We'll be eating, drinking and having a great time exchanging experience from the convention.</p>

                        <div className="meta-line">
                            <div className="meta-line-list user-avatar-list">
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
                                <div className="hexagon-image-18-20" data-src="img/avatar/02.jpg"></div>
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
                                <div className="hexagon-image-18-20" data-src="img/avatar/05.jpg"></div>
                                </div>
                            </div>
                            </div>

                            <p className="meta-line-text">+24 will assist</p>
                        </div>
                        </div>
                    </div>

                    <div className="event-preview small">
                        <figure className="event-preview-cover liquid">
                        <img src="img/cover/43.jpg" alt="cover-43"/>
                        </figure>

                        <div className="event-preview-info">
                        <div className="date-sticker">
                            <p className="date-sticker-day">31</p>
                    
                            <p className="date-sticker-month">Oct</p>
                        </div>

                        <p className="event-preview-title popup-event-information-trigger">USA Halloween Meetup 2019</p>

                        <p className="event-preview-timestamp">12:30 PM</p>

                        <p className="event-preview-text">Let's celebrate Halloween together with our best cosplays! Come and bring your friends!</p>

                        <div className="meta-line">
                            <div className="meta-line-list user-avatar-list">
                            <div className="user-avatar micro no-stats">
                                <div className="user-avatar-border">
                                <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/02.jpg"></div>
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
                                <div className="hexagon-image-18-20" data-src="img/avatar/13.jpg"></div>
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
                            </div>

                            <p className="meta-line-text">+31 will assist</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="grid-column">
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
                    <div className="tag-sticker">
                    <svg className="tag-sticker-icon primary icon-pinned">
                        <use xlinkHref="#svg-pinned"></use>
                    </svg>
                    </div>

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
                    
                        <p className="user-status-title medium"><a className="bold" href="profile-timeline">Neko Bebop</a></p>
                    
                        <p className="user-status-text small">2 weeks ago</p>
                    </div>
            
                    <p className="widget-box-status-text">Hi! And welcome to the group! for those who just join us, we invite you to our Discord official channel, where we talk about cosplays, conventions, DIY, costume tips and more!</p>
            
                    <a className="video-status" href="https://discordapp.com/" target="_blank">
                        <img className="video-status-image" src="img/cover/52.jpg" alt="cover-52"/>
            
                        <div className="video-status-info">
                        <p className="video-status-meta">discordapp.com</p>
            
                        <p className="video-status-title"><span className="bold">Cosplayers of the World</span> on <span className="highlighted">Discord</span></p>
            
                        <p className="video-status-text">Let's talk about everything cosplay related!.</p>
                        </div>
                    </a>
            
                    <div className="tag-list">
                        <a className="tag-item secondary" href="newsfeed">Discord</a>
            
                        <a className="tag-item secondary" href="newsfeed">Cosplay</a>
            
                        <a className="tag-item secondary" href="newsfeed">Costume</a>
            
                        <a className="tag-item secondary" href="newsfeed">Channel</a>
                    </div>
            
                    <div className="content-actions">
                        <div className="content-action">
                        <div className="meta-line">
                            <div className="meta-line-list reaction-item-list">
                            <div className="reaction-item">
                                <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/happy.png" alt="reaction-happy"/>
                    
                                <div className="simple-dropdown padded reaction-item-dropdown">
                                <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/happy.png" alt="reaction-happy"/> <span className="bold">Happy</span></p>
                                
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
            
                                <p className="simple-dropdown-text">Marcus Jhonson</p>
            
                                <p className="simple-dropdown-text"><span className="bold">and 74 more...</span></p>
                                </div>
                            </div>
                            </div>
                    
                            <p className="meta-line-text">84</p>
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
                                <div className="hexagon-image-18-20" data-src="img/avatar/02.jpg"></div>
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
                                <div className="hexagon-image-18-20" data-src="img/avatar/10.jpg"></div>
                                </div>
                            </div>
                            </div>
                    
                            <p className="meta-line-text">109 Participants</p>
                        </div>
                        </div>
                    
                        <div className="content-action">
                        <div className="meta-line">
                            <p className="meta-line-link">28 Comments</p>
                        </div>
                    
                        <div className="meta-line">
                            <p className="meta-line-text">3 Shares</p>
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
                    
                        <p className="user-status-title medium"><a className="bold" href="profile-timeline">Marina Valentine</a> uploaded <span className="bold">23 new photos</span></p>
                    
                        <p className="user-status-text small">17 minutes ago</p>
                    </div>
            
                    <p className="widget-box-status-text">Hey! I've compiled a list of the best cosplays out there for inspiration :D</p>
            
                    <div className="picture-collage">
                        <div className="picture-collage-row medium">
                        <div className="picture-collage-item popup-picture-trigger">
                            <div className="photo-preview">
                            <figure className="photo-preview-image liquid">
                                <img src="img/cover/30.jpg" alt="photo-preview-30"/>
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
                                <img src="img/cover/45.jpg" alt="photo-preview-45"/>
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
                                <img src="img/cover/33.jpg" alt="photo-preview-33"/>
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
                                <img src="img/cover/44.jpg" alt="photo-preview-44"/>
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
                            <a className="picture-collage-item-overlay" href="#">
                            <p className="picture-collage-item-overlay-text">+19</p>
                            </a>
            
                            <div className="photo-preview">
                            <figure className="photo-preview-image liquid">
                                <img src="img/cover/37.jpg" alt="photo-preview-37"/>
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
            
                        <a className="tag-item secondary" href="newsfeed">Cosplay</a>
            
                        <a className="tag-item secondary" href="newsfeed">Inspiration</a>
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
                        <a className="user-avatar micro no-stats" onClick={()=>{
                            dispatch(setLoading({
                                status: 'isLoading'
                            }))
                        }}>
                            <div className="user-avatar-border">
                            <div className="hexagon-22-24"></div>
                            </div>
                        
                            <div className="user-avatar-content">
                            <div className="hexagon-image-18-20" data-src="img/avatar/24.jpg"></div>
                            </div>
                        </a>
                        <a className="bold" onClick={()=>{
                            dispatch(setLoading({
                                status: 'isLoading'
                            }))
                        }}>Cosplayers of the World</a>
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
                        </div>
                        </a>
                    
                        <p className="user-status-title medium"><a className="bold" href="profile-timeline">Nick Grissom</a> uploaded a <span className="bold">video</span></p>
                    
                        <p className="user-status-text small">1 hour ago</p>
                    </div>
            
                    <p className="widget-box-status-text">Here's a video I made of all the awesome CosplayWonder 2018!</p>
                    </div>
            
                    <div className="iframe-wrap">
                    <iframe src="https://www.youtube.com/embed/eVjwc1H7r74?start=43" allowfullscreen></iframe>
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

                <p className="widget-box-title">Group Organizers</p>

                <div className="widget-box-content">
                    <div className="user-status-list">
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
                    
                        <p className="user-status-text small">2 friends in common</p>
                    </div>

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
                    
                        <p className="user-status-text small">1 friends in common</p>
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

                <p className="widget-box-title">Photos <span className="highlighted">30</span></p>

                <div className="widget-box-content">
                    <div className="picture-item-list small">
                    <div className="picture-item popup-picture-trigger">
                        <figure className="picture round liquid">
                        <img src="img/avatar/24.jpg" alt="avatar-24"/>
                        </figure>
                    </div>

                    <div className="picture-item popup-picture-trigger">
                        <figure className="picture round liquid">
                        <img src="img/cover/30.jpg" alt="cover-30"/>
                        </figure>
                    </div>

                    <div className="picture-item popup-picture-trigger">
                        <figure className="picture round liquid">
                        <img src="img/cover/45.jpg" alt="cover-45"/>
                        </figure>
                    </div>

                    <div className="picture-item popup-picture-trigger">
                        <figure className="picture round liquid">
                        <img src="img/cover/34.jpg" alt="cover-34"/>
                        </figure>
                    </div>

                    <div className="picture-item popup-picture-trigger">
                        <figure className="picture round liquid">
                        <img src="img/cover/27.jpg" alt="cover-27"/>
                        </figure>
                    </div>

                    <div className="picture-item popup-picture-trigger">
                        <figure className="picture round liquid">
                        <img src="img/cover/38.jpg" alt="cover-38"/>
                        </figure>
                    </div>

                    <div className="picture-item popup-picture-trigger">
                        <figure className="picture round liquid">
                        <img src="img/cover/35.jpg" alt="cover-35"/>
                        </figure>
                    </div>

                    <div className="picture-item popup-picture-trigger">
                        <figure className="picture round liquid">
                        <img src="img/cover/31.jpg" alt="cover-31"/>
                        </figure>
                    </div>

                    <div className="picture-item popup-picture-trigger">
                        <figure className="picture round liquid">
                        <img src="img/cover/44.jpg" alt="cover-44"/>
                        </figure>
                    </div>

                    <div className="picture-item popup-picture-trigger">
                        <figure className="picture round liquid">
                        <img src="img/cover/42.jpg" alt="cover-42"/>
                        </figure>
                    </div>

                    <div className="picture-item popup-picture-trigger">
                        <figure className="picture round liquid">
                        <img src="img/cover/37.jpg" alt="cover-37"/>
                        </figure>
                    </div>

                    <a className="picture-item" href="#">
                        <figure className="picture round liquid">
                        <img src="img/cover/29.jpg" alt="cover-29"/>
                        </figure>

                        <div className="picture-item-overlay round">
                        <p className="picture-item-overlay-text">+61</p>
                        </div>
                    </a>
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

                <p className="widget-box-title">Discussions <span className="highlighted">16</span></p>

                <div className="widget-box-content">
                    <div className="filters">
                    <p className="filter">Newest</p>

                    <p className="filter active">Popular</p>
                    </div>

                    <div className="post-preview-line-list">
                    <div className="post-preview-line">
                        <p className="post-preview-line-title"><a href="forums-discussion">In your opinion, who has the best cosplay?</a></p>
                    
                        <div className="post-preview-line-meta">
                        <a className="user-avatar micro no-border" href="profile-timeline">
                            <div className="user-avatar-content">
                            <div className="hexagon-image-18-20" data-src="img/avatar/05.jpg"></div>
                            </div>
                        </a>
                    
                        <p className="post-preview-line-author"><a href="profile-timeline">By Neko Bebop</a></p>
                    
                        <p className="post-preview-line-timestamp">2 weeks ago</p>
                        </div>
                    </div>

                    <div className="post-preview-line">
                        <p className="post-preview-line-title"><a href="forums-discussion">Preparing everything for CosWorld 2019, show your works here!</a></p>
                    
                        <div className="post-preview-line-meta">
                        <a className="user-avatar micro no-border" href="profile-timeline">
                            <div className="user-avatar-content">
                            <div className="hexagon-image-18-20" data-src="img/avatar/03.jpg"></div>
                            </div>
                        </a>
                    
                        <p className="post-preview-line-author"><a href="profile-timeline">By Nick Grissom</a></p>
                    
                        <p className="post-preview-line-timestamp">13 hours ago</p>
                        </div>
                    </div>

                    <div className="post-preview-line">
                        <p className="post-preview-line-title"><a href="forums-discussion">Official Topic! Let's organize the global meetups for all continents!</a></p>
                    
                        <div className="post-preview-line-meta">
                        <a className="user-avatar micro no-border" href="profile-timeline">
                            <div className="user-avatar-content">
                            <div className="hexagon-image-18-20" data-src="img/avatar/02.jpg"></div>
                            </div>
                        </a>
                    
                        <p className="post-preview-line-author"><a href="profile-timeline">By Destroy Dex</a></p>
                    
                        <p className="post-preview-line-timestamp">5 days ago</p>
                        </div>
                    </div>

                    <div className="post-preview-line">
                        <p className="post-preview-line-title"><a href="forums-discussion">Share your cosplay tips here! Tutorials, DIY's, paints and more</a></p>
                    
                        <div className="post-preview-line-meta">
                        <a className="user-avatar micro no-border" href="profile-timeline">
                            <div className="user-avatar-content">
                            <div className="hexagon-image-18-20" data-src="img/avatar/05.jpg"></div>
                            </div>
                        </a>
                    
                        <p className="post-preview-line-author"><a href="profile-timeline">By Neko Bebop</a></p>
                    
                        <p className="post-preview-line-timestamp">20 hours ago</p>
                        </div>
                    </div>

                    <div className="post-preview-line">
                        <p className="post-preview-line-title"><a href="forums-discussion">Check out all the pictures I took at the CosplayWonder 2018</a></p>
                    
                        <div className="post-preview-line-meta">
                        <a className="user-avatar micro no-border" href="profile-timeline">
                            <div className="user-avatar-content">
                            <div className="hexagon-image-18-20" data-src="img/avatar/07.jpg"></div>
                            </div>
                        </a>
                    
                        <p className="post-preview-line-author"><a href="profile-timeline">By Sarah Diamond</a></p>
                    
                        <p className="post-preview-line-timestamp">19 days ago</p>
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

                <p className="widget-box-title">Videos <span className="highlighted">4</span></p>

                <div className="widget-box-content">
                    <div className="video-box-list">
                    <div className="video-box small">
                        <div className="video-box-cover popup-video-trigger">
                        <figure className="video-box-cover-image liquid">
                            <img src="img/cover/30.jpg" alt="cover-30"/>
                        </figure>
                    
                        <div className="play-button">
                            <svg className="play-button-icon icon-play">
                            <use xlinkHref="#svg-play"></use>
                            </svg>
                        </div>
                    
                        <div className="video-box-info">
                            <p className="video-box-title">My Latest Cosplay</p>
                    
                            <p className="video-box-text">1 hour ago</p>
                        </div>
                        </div>
                    </div>

                    <div className="video-box small">
                        <div className="video-box-cover popup-video-trigger">
                        <figure className="video-box-cover-image liquid">
                            <img src="img/cover/44.jpg" alt="cover-44"/>
                        </figure>
                    
                        <div className="play-button">
                            <svg className="play-button-icon icon-play">
                            <use xlinkHref="#svg-play"></use>
                            </svg>
                        </div>
                    
                        <div className="video-box-info">
                            <p className="video-box-title">Jenny primary Photoshoot</p>
                    
                            <p className="video-box-text">12 days ago</p>
                        </div>
                        </div>
                    </div>

                    <div className="video-box small">
                        <div className="video-box-cover popup-video-trigger">
                        <figure className="video-box-cover-image liquid">
                            <img src="img/cover/42.jpg" alt="cover-42"/>
                        </figure>
                    
                        <div className="play-button">
                            <svg className="play-button-icon icon-play">
                            <use xlinkHref="#svg-play"></use>
                            </svg>
                        </div>
                    
                        <div className="video-box-info">
                            <p className="video-box-title">Tabatha Arcade Gaming Tips</p>
                    
                            <p className="video-box-text">5 days ago</p>
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