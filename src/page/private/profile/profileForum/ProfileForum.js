import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoading } from '../../../../redux/action/homeAction';

const ProfileForum = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <>
            <section class="section">
                <div class="section-header">
                    <div class="section-header-info">
                    <p class="section-pretitle">Browse Marina's</p>
            
                    <h2 class="section-title">Forum Discussions</h2>
                    </div>
                </div>

                <div class="section-filters-bar v5">
                    <div class="section-filters-bar-actions">
                    <div class="filter-tabs">
                        <div class="filter-tab active">
                        <p class="filter-tab-text">Topics Started</p>
                        </div>
                
                        <div class="filter-tab">
                        <p class="filter-tab-text">My Replies</p>
                        </div>
                
                        <div class="filter-tab">
                        <p class="filter-tab-text">Liked Topics</p>
                        </div>
                    </div>
                
                    <form class="form">
                        <div class="form-select">
                            <label for="forum-filter-category">Filter By</label>
                            <select id="forum-filter-category" name="forum_filter_category">
                                <option value="0">Topics Started</option>
                                <option value="1">My Replies</option>
                                <option value="2">Liked Topics</option>
                            </select>
                            <svg class="form-select-icon icon-small-arrow">
                                <use xlinkHref="#svg-small-arrow"></use>
                            </svg>
                        </div>
                    </form>
                    </div>
                
                    <div class="section-filters-bar-actions">
                        <form class="form">
                            <div class="form-item split medium">
                            <div class="form-select small">
                                <label for="forum-filter-order">Order By</label>
                                <select id="forum-filter-order" name="forum_filter_order">
                                <option value="0">Newest First</option>
                                <option value="1">Oldest First</option>
                                </select>
                                <svg class="form-select-icon icon-small-arrow">
                                <use xlinkHref="#svg-small-arrow"></use>
                                </svg>
                            </div>
                        
                            <button class="button primary">Apply Filter</button>
                            </div>
                        </form>
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
                    <div class="table-row medium">
                        <div class="table-column">
                        <div class="discussion-preview">
                            <a class="discussion-preview-title" onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/forums-discussion')}}>The recent issue of "Darkman" features a new masked hero</a>
                
                            <div class="discussion-preview-meta">
                            <p class="discussion-preview-meta-text">Started by</p>
                
                            <a class="user-avatar micro no-border" href="profile-timeline">
                                <div class="user-avatar-content">
                                <div class="hexagon-image-18-20" data-src="img/avatar/01.jpg"></div>
                                </div>
                            </a>
                
                            <p class="discussion-preview-meta-text"><a href="profile-timeline">Marina Valentine</a> 22 minutes ago<span class="separator">-</span><a class="highlighted" onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/forums-category')}}>Comics</a></p>
                            </div>
                        </div>
                        </div>
                
                        <div class="table-column centered padded-medium">
                        <p class="table-title">4</p>
                        </div>
                
                        <div class="table-column centered padded-medium">
                        <p class="table-title">12</p>
                        </div>
                
                        <div class="table-column padded-big-left">
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
                        
                            <p class="user-status-title"><a class="bold" href="profile-timeline">Bearded Wonder</a></p>
                        
                            <p class="user-status-text small">3 hours, 22 minutes ago</p>
                        </div>
                        </div>
                    </div>

                    <div class="table-row medium">
                        <div class="table-column">
                        <div class="discussion-preview">
                            <a class="discussion-preview-title" onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/forums-discussion')}}>I played the new "Monstermon: Vibranium" and it's awesome!</a>
                
                            <div class="discussion-preview-meta">
                            <p class="discussion-preview-meta-text">Started by</p>
                
                            <a class="user-avatar micro no-border" href="profile-timeline">
                                <div class="user-avatar-content">
                                <div class="hexagon-image-18-20" data-src="img/avatar/01.jpg"></div>
                                </div>
                            </a>
                
                            <p class="discussion-preview-meta-text"><a href="profile-timeline">Marina Valentine</a> 6 hours ago<span class="separator">-</span><a class="highlighted" onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/forums-category')}}>The Arcade</a></p>
                            </div>
                        </div>
                        </div>
                
                        <div class="table-column centered padded-medium">
                        <p class="table-title">7</p>
                        </div>
                
                        <div class="table-column centered padded-medium">
                        <p class="table-title">19</p>
                        </div>
                
                        <div class="table-column padded-big-left">
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
                        
                            <p class="user-status-title"><a class="bold" href="profile-timeline">Nick Grissom</a></p>
                        
                            <p class="user-status-text small">23 minutes ago</p>
                        </div>
                        </div>
                    </div>

                    <div class="table-row medium">
                        <div class="table-column">
                        <div class="discussion-preview">
                            <a class="discussion-preview-title" onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/forums-discussion')}}>What do you like and dislike about the new forum looks?</a>
                
                            <div class="discussion-preview-meta">
                            <p class="discussion-preview-meta-text">Started by</p>
                
                            <a class="user-avatar micro no-border" href="profile-timeline">
                                <div class="user-avatar-content">
                                <div class="hexagon-image-18-20" data-src="img/avatar/01.jpg"></div>
                                </div>
                            </a>
                
                            <p class="discussion-preview-meta-text"><a href="profile-timeline">Marina Valentine</a> 1 day ago<span class="separator">-</span><a class="highlighted" onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/forums-category')}}>Community Hangout</a></p>
                            </div>
                        </div>
                        </div>
                
                        <div class="table-column centered padded-medium">
                        <p class="table-title">36</p>
                        </div>
                
                        <div class="table-column centered padded-medium">
                        <p class="table-title">57</p>
                        </div>
                
                        <div class="table-column padded-big-left">
                        <div class="user-status">
                            <a class="user-status-avatar" href="profile-timeline">
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
                        
                            <p class="user-status-title"><a class="bold" href="profile-timeline">Marina Valentine</a></p>
                        
                            <p class="user-status-text small">42 minutes ago</p>
                        </div>
                        </div>
                    </div>

                    <div class="table-row medium">
                        <div class="table-column">
                        <div class="discussion-preview">
                            <a class="discussion-preview-title" onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/forums-discussion')}}>Let's post photos of our workspaces!</a>
                
                            <div class="discussion-preview-meta">
                            <p class="discussion-preview-meta-text">Started by</p>
                
                            <a class="user-avatar micro no-border" href="profile-timeline">
                                <div class="user-avatar-content">
                                <div class="hexagon-image-18-20" data-src="img/avatar/01.jpg"></div>
                                </div>
                            </a>
                
                            <p class="discussion-preview-meta-text"><a href="profile-timeline">Marina Valentine</a> 3 days ago<span class="separator">-</span><a class="highlighted" onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/forums-category')}}>Community Hangout</a></p>
                            </div>
                        </div>
                        </div>
                
                        <div class="table-column centered padded-medium">
                        <p class="table-title">22</p>
                        </div>
                
                        <div class="table-column centered padded-medium">
                        <p class="table-title">31</p>
                        </div>
                
                        <div class="table-column padded-big-left">
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
                        
                            <p class="user-status-title"><a class="bold" href="profile-timeline">Neko Bebop</a></p>
                        
                            <p class="user-status-text small">1 hour, 35 minutes ago</p>
                        </div>
                        </div>
                    </div>

                    <div class="table-row medium">
                        <div class="table-column">
                        <div class="discussion-preview">
                            <a class="discussion-preview-title" onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/forums-discussion')}}>The new "Dragon Adventure" manga answers what happened with Spike</a>
                
                            <div class="discussion-preview-meta">
                            <p class="discussion-preview-meta-text">Started by</p>
                
                            <a class="user-avatar micro no-border" href="profile-timeline">
                                <div class="user-avatar-content">
                                <div class="hexagon-image-18-20" data-src="img/avatar/01.jpg"></div>
                                </div>
                            </a>
                
                            <p class="discussion-preview-meta-text"><a href="profile-timeline">Marina Valentine</a> 1 week ago<span class="separator">-</span><a class="highlighted" onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/forums-category')}}>Anime &amp; Manga</a></p>
                            </div>
                        </div>
                        </div>
                
                        <div class="table-column centered padded-medium">
                        <p class="table-title">40</p>
                        </div>
                
                        <div class="table-column centered padded-medium">
                        <p class="table-title">105</p>
                        </div>
                
                        <div class="table-column padded-big-left">
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
                        
                            <p class="user-status-title"><a class="bold" href="profile-timeline">Nick Grissom</a></p>
                        
                            <p class="user-status-text small">6 days ago</p>
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