import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoading } from '../../../../redux/action/homeAction';

const ProfileForum = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <>
            <section className="section">
                <div className="section-header">
                    <div className="section-header-info">
                    <p className="section-pretitle">Browse Marina's</p>
            
                    <h2 className="section-title">Forum Discussions</h2>
                    </div>
                </div>

                <div className="section-filters-bar v5">
                    <div className="section-filters-bar-actions">
                    <div className="filter-tabs">
                        <div className="filter-tab active">
                        <p className="filter-tab-text">Topics Started</p>
                        </div>
                
                        <div className="filter-tab">
                        <p className="filter-tab-text">My Replies</p>
                        </div>
                
                        <div className="filter-tab">
                        <p className="filter-tab-text">Liked Topics</p>
                        </div>
                    </div>
                
                    <form className="form">
                        <div className="form-select">
                            <label for="forum-filter-category">Filter By</label>
                            <select id="forum-filter-category" name="forum_filter_category">
                                <option value="0">Topics Started</option>
                                <option value="1">My Replies</option>
                                <option value="2">Liked Topics</option>
                            </select>
                            <svg className="form-select-icon icon-small-arrow">
                                <use xlinkHref="#svg-small-arrow"></use>
                            </svg>
                        </div>
                    </form>
                    </div>
                
                    <div className="section-filters-bar-actions">
                        <form className="form">
                            <div className="form-item split medium">
                            <div className="form-select small">
                                <label for="forum-filter-order">Order By</label>
                                <select id="forum-filter-order" name="forum_filter_order">
                                <option value="0">Newest First</option>
                                <option value="1">Oldest First</option>
                                </select>
                                <svg className="form-select-icon icon-small-arrow">
                                <use xlinkHref="#svg-small-arrow"></use>
                                </svg>
                            </div>
                        
                            <button className="button primary">Apply Filter</button>
                            </div>
                        </form>
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
                    <div className="table-row medium">
                        <div className="table-column">
                        <div className="discussion-preview">
                            <a className="discussion-preview-title" onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/forums-discussion')}}>The recent issue of "Darkman" features a new masked hero</a>
                
                            <div className="discussion-preview-meta">
                            <p className="discussion-preview-meta-text">Started by</p>
                
                            <a className="user-avatar micro no-border" href="profile-timeline">
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/01.jpg"></div>
                                </div>
                            </a>
                
                            <p className="discussion-preview-meta-text"><a href="profile-timeline">Marina Valentine</a> 22 minutes ago<span className="separator">-</span><a className="highlighted" onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/forums-category')}}>Comics</a></p>
                            </div>
                        </div>
                        </div>
                
                        <div className="table-column centered padded-medium">
                        <p className="table-title">4</p>
                        </div>
                
                        <div className="table-column centered padded-medium">
                        <p className="table-title">12</p>
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
                        
                            <p className="user-status-text small">3 hours, 22 minutes ago</p>
                        </div>
                        </div>
                    </div>

                    <div className="table-row medium">
                        <div className="table-column">
                        <div className="discussion-preview">
                            <a className="discussion-preview-title" onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/forums-discussion')}}>I played the new "Monstermon: Vibranium" and it's awesome!</a>
                
                            <div className="discussion-preview-meta">
                            <p className="discussion-preview-meta-text">Started by</p>
                
                            <a className="user-avatar micro no-border" href="profile-timeline">
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/01.jpg"></div>
                                </div>
                            </a>
                
                            <p className="discussion-preview-meta-text"><a href="profile-timeline">Marina Valentine</a> 6 hours ago<span className="separator">-</span><a className="highlighted" onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/forums-category')}}>The Arcade</a></p>
                            </div>
                        </div>
                        </div>
                
                        <div className="table-column centered padded-medium">
                        <p className="table-title">7</p>
                        </div>
                
                        <div className="table-column centered padded-medium">
                        <p className="table-title">19</p>
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
                        
                            <p className="user-status-text small">23 minutes ago</p>
                        </div>
                        </div>
                    </div>

                    <div className="table-row medium">
                        <div className="table-column">
                        <div className="discussion-preview">
                            <a className="discussion-preview-title" onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/forums-discussion')}}>What do you like and dislike about the new forum looks?</a>
                
                            <div className="discussion-preview-meta">
                            <p className="discussion-preview-meta-text">Started by</p>
                
                            <a className="user-avatar micro no-border" href="profile-timeline">
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/01.jpg"></div>
                                </div>
                            </a>
                
                            <p className="discussion-preview-meta-text"><a href="profile-timeline">Marina Valentine</a> 1 day ago<span className="separator">-</span><a className="highlighted" onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/forums-category')}}>Community Hangout</a></p>
                            </div>
                        </div>
                        </div>
                
                        <div className="table-column centered padded-medium">
                        <p className="table-title">36</p>
                        </div>
                
                        <div className="table-column centered padded-medium">
                        <p className="table-title">57</p>
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
                        
                            <p className="user-status-text small">42 minutes ago</p>
                        </div>
                        </div>
                    </div>

                    <div className="table-row medium">
                        <div className="table-column">
                        <div className="discussion-preview">
                            <a className="discussion-preview-title" onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/forums-discussion')}}>Let's post photos of our workspaces!</a>
                
                            <div className="discussion-preview-meta">
                            <p className="discussion-preview-meta-text">Started by</p>
                
                            <a className="user-avatar micro no-border" href="profile-timeline">
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/01.jpg"></div>
                                </div>
                            </a>
                
                            <p className="discussion-preview-meta-text"><a href="profile-timeline">Marina Valentine</a> 3 days ago<span className="separator">-</span><a className="highlighted" onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/forums-category')}}>Community Hangout</a></p>
                            </div>
                        </div>
                        </div>
                
                        <div className="table-column centered padded-medium">
                        <p className="table-title">22</p>
                        </div>
                
                        <div className="table-column centered padded-medium">
                        <p className="table-title">31</p>
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
                        
                            <p className="user-status-text small">1 hour, 35 minutes ago</p>
                        </div>
                        </div>
                    </div>

                    <div className="table-row medium">
                        <div className="table-column">
                        <div className="discussion-preview">
                            <a className="discussion-preview-title" onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/forums-discussion')}}>The new "Dragon Adventure" manga answers what happened with Spike</a>
                
                            <div className="discussion-preview-meta">
                            <p className="discussion-preview-meta-text">Started by</p>
                
                            <a className="user-avatar micro no-border" href="profile-timeline">
                                <div className="user-avatar-content">
                                <div className="hexagon-image-18-20" data-src="img/avatar/01.jpg"></div>
                                </div>
                            </a>
                
                            <p className="discussion-preview-meta-text"><a href="profile-timeline">Marina Valentine</a> 1 week ago<span className="separator">-</span><a className="highlighted" onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/forums-category')}}>Anime &amp; Manga</a></p>
                            </div>
                        </div>
                        </div>
                
                        <div className="table-column centered padded-medium">
                        <p className="table-title">40</p>
                        </div>
                
                        <div className="table-column centered padded-medium">
                        <p className="table-title">105</p>
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
                        
                            <p className="user-status-text small">6 days ago</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProfileForum