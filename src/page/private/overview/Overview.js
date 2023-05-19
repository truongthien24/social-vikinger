import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { setLoading } from '../../../redux/action/homeAction';

const Overview = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

  return (
    <>
        <div className="section-banner">
        <img className="section-banner-icon" src="img/banner/overview-icon.png" alt="overview-icon"/>
    
        <p className="section-banner-title">Overview</p>
    
        <p className="section-banner-text">Review your account, see stats and more!</p>
        </div>

        <div className="section-header">
        <div className="section-header-info">
            <p className="section-pretitle">Overview</p>
    
            <h2 className="section-title">My Profile</h2>
        </div>
        </div>

        <div className="grid">
        <div className="grid grid-3-3-3-3 centered">
            <div className="stats-box small stat-profile-views">
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

            <div className="stats-box small stat-posts-created">
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

            <div className="stats-box small stat-reactions-received">
            <div className="stats-box-value-wrap">
                <p className="stats-box-value">2.560</p>
        
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

            <div className="stats-box small stat-comments-received">
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

        <div className="grid grid-layout-1">
            <div className="grid-sidebar">
            <div className="profile-stats fixed-height">
                <div className="profile-stats-cover">
                <p className="profile-stats-cover-title">Welcome Back!</p>
            
                <p className="profile-stats-cover-text">Marina Valentine</p>
                </div>
            
                <div className="profile-stats-info">
                <div className="user-avatar medium">
                    <div className="user-avatar-border">
                    <div className="hexagon-120-132"></div>
                    </div>
                
                    <div className="user-avatar-content">
                    <div className="hexagon-image-82-90" data-src="img/avatar/01.jpg"></div>
                    </div>
                
                    <div className="user-avatar-progress">
                    <div className="hexagon-progress-100-110"></div>
                    </div>
                
                    <div className="user-avatar-progress-border">
                    <div className="hexagon-border-100-110"></div>
                    </div>
                
                    <div className="user-avatar-badge">
                    <div className="user-avatar-badge-border">
                        <div className="hexagon-32-36"></div>
                    </div>
                
                    <div className="user-avatar-badge-content">
                        <div className="hexagon-dark-26-28"></div>
                    </div>
                
                    <p className="user-avatar-badge-text">24</p>
                    </div>
                </div>
            
                <div className="featured-stat-list">
                    <div className="featured-stat">
                    <svg className="featured-stat-icon icon-status">
                        <use xlinkHref="#svg-status"></use>
                    </svg>
            
                    <p className="featured-stat-title">28.4</p>
            
                    <p className="featured-stat-subtitle">Posts</p>
            
                    <p className="featured-stat-text">Avg Month</p>
                    </div>
            
                    <div className="featured-stat">
                    <svg className="featured-stat-icon icon-comment">
                        <use xlinkHref="#svg-comment"></use>
                    </svg>
            
                    <p className="featured-stat-title">69.7</p>
            
                    <p className="featured-stat-subtitle">Comments</p>
            
                    <p className="featured-stat-text">Avg Month</p>
                    </div>
                </div>
            
                <div className="featured-stat-list">
                    <div className="featured-stat">
                    <div className="progress-arc-wrap small">
                        <div className="progress-arc">
                        <canvas id="posts-engagement-chart"></canvas>
                        </div>
                
                        <div className="progress-arc-info">
                        <p className="progress-arc-title">87%</p>
                        </div>
                    </div>
            
                    <p className="featured-stat-subtitle">Posts</p>
            
                    <p className="featured-stat-text">Engagement</p>
                    </div>
            
                    <div className="featured-stat">
                    <div className="progress-arc-wrap small">
                        <div className="progress-arc">
                        <canvas id="posts-shared-chart"></canvas>
                        </div>
            
                        <div className="progress-arc-info">
                        <p className="progress-arc-title">42%</p>
                        </div>
                    </div>
            
                    <p className="featured-stat-subtitle">Posts</p>
            
                    <p className="featured-stat-text">Shared</p>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div className="grid-header">
            <div className="slider-line small">
                <div id="user-stats-slider-controls" className="slider-controls">
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
            
                <div id="user-stats-slider" className="slider-slides with-separator">
                <div className="slider-slide">
                    <div className="user-stat big">
                    <p className="user-stat-title">930</p>
            
                    <p className="user-stat-text">posts</p>
                    </div>
                </div>
            
                <div className="slider-slide">
                    <div className="user-stat big">
                    <p className="user-stat-title">82</p>
            
                    <p className="user-stat-text">friends</p>
                    </div>
                </div>
            
                <div className="slider-slide">
                    <div className="user-stat big">
                    <p className="user-stat-title">5.7k</p>
            
                    <p className="user-stat-text">visits</p>
                    </div>
                </div>
            
                <div className="slider-slide">
                    <div className="user-stat big">
                    <p className="user-stat-title">13</p>
            
                    <p className="user-stat-text">badges</p>
                    </div>
                </div>
            
                <div className="slider-slide">
                    <div className="user-stat big">
                    <p className="user-stat-title">74</p>
            
                    <p className="user-stat-text">photos</p>
                    </div>
                </div>
            
                <div className="slider-slide">
                    <div className="user-stat big">
                    <p className="user-stat-title">10.6k</p>
            
                    <p className="user-stat-text">reactions (r)</p>
                    </div>
                </div>
            
                <div className="slider-slide">
                    <div className="user-stat big">
                    <p className="user-stat-title">8.4k</p>
            
                    <p className="user-stat-text">comments (r)</p>
                    </div>
                </div>
            
                <div className="slider-slide">
                    <div className="user-stat big">
                    <p className="user-stat-title">2.3k</p>
            
                    <p className="user-stat-text">shares (r)</p>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div className="grid-content">
            <div className="widget-box no-padding">
                <p className="widget-box-title">Profile Activity</p>
            
                <div className="widget-box-content padded-for-scroll" data-simplebar>
                <div className="user-status-list scroll-content">
                    <div className="user-status notification">
                    <a className="user-status-avatar" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'    
                        }))
                        navigate('/profile-timeline')}}>
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
                
                    <p className="user-status-title"><a className="bold" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'    
                        }))
                        navigate('/profile-timeline')}}>Nick Grissom</a> posted a comment on your <a className="highlighted" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'    
                        }))
                        navigate('/profile-timeline')}}>status update</a></p>
                
                    <p className="user-status-timestamp small-space">2 minutes ago</p>
                
                    <div className="user-status-icon">
                        <svg className="icon-comment">
                        <use xlinkHref="#svg-comment"></use>
                        </svg>
                    </div>
                    </div>
            
                    <div className="user-status notification">
                    <a className="user-status-avatar" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'    
                        }))
                        navigate('/profile-timeline')}}>
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
                
                    <p className="user-status-title"><a className="bold" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'    
                        }))
                        navigate('/profile-timeline')}}>Sarah Diamond</a> left a like <img className="reaction" src="img/reaction/like.png" alt="reaction-like"/> reaction on your <a className="highlighted" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'    
                        }))
                        navigate('/profile-timeline')}}>status update</a></p>
                
                    <p className="user-status-timestamp small-space">17 minutes ago</p>
                
                    <div className="user-status-icon">
                        <svg className="icon-thumbs-up">
                        <use xlinkHref="#svg-thumbs-up"></use>
                        </svg>
                    </div>
                    </div>
            
                    <div className="user-status notification">
                    <a className="user-status-avatar" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'    
                        }))
                        navigate('/profile-timeline')}}>
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
            
                    <p className="user-status-title"><a className="bold" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'    
                        }))
                        navigate('/profile-timeline')}}>Destroy Dex</a> posted a comment on your <a className="highlighted" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'    
                        }))
                        navigate('/profile-photos')}}>photo</a></p>
            
                    <p className="user-status-timestamp small-space">31 minutes ago</p>
            
                    <div className="user-status-icon">
                        <svg className="icon-comment">
                        <use xlinkHref="#svg-comment"></use>
                        </svg>
                    </div>
                    </div>
            
                    <div className="user-status notification">
                    <a className="user-status-avatar" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'    
                        }))
                        navigate('/profile-timeline')}}>
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
                
                    <p className="user-status-title"><a className="bold" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'    
                        }))
                        navigate('/profile-timeline')}}>Nick Grissom</a> shared your <a className="highlighted" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'    
                        }))
                        navigate('/profile-timeline')}}>status update</a></p>
                
                    <p className="user-status-timestamp small-space">39 minutes ago</p>
                
                    <div className="user-status-icon">
                        <svg className="icon-share">
                        <use xlinkHref="#svg-share"></use>
                        </svg>
                    </div>
                    </div>
            
                    <div className="user-status notification">
                    <a className="user-status-avatar" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'    
                        }))
                        navigate('/profile-timeline')}}>
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
            
                    <p className="user-status-title"><a className="bold" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'    
                        }))
                        navigate('/profile-timeline')}}>The Green Goo</a> left a love <img className="reaction" src="img/reaction/love.png" alt="reaction-love"/> reaction on your <a className="highlighted" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'    
                        }))
                        navigate('/profile-timeline')}}>status update</a></p>
            
                    <p className="user-status-timestamp small-space">2 hours ago</p>
            
                    <div className="user-status-icon">
                        <svg className="icon-thumbs-up">
                        <use xlinkHref="#svg-thumbs-up"></use>
                        </svg>
                    </div>
                    </div>
            
                    <div className="user-status notification">
                    <a className="user-status-avatar" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'    
                        }))
                        navigate('/profile-timeline')}}>
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
            
                    <p className="user-status-title"><a className="bold" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'    
                        }))
                        navigate('/profile-timeline')}}>Neko Bebop</a> posted a comment on your <a className="highlighted" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'    
                        }))
                        navigate('/profile-timeline')}}>status update</a></p>
            
                    <p className="user-status-timestamp small-space">3 hours ago</p>
            
                    <div className="user-status-icon">
                        <svg className="icon-comment">
                        <use xlinkHref="#svg-comment"></use>
                        </svg>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div className="grid-column grid-content-sidebar">
            <div className="stats-decoration v2 big secondary">
                <p className="stats-decoration-title">33</p>
            
                <p className="stats-decoration-subtitle">Post Engagements</p>
            
                <p className="stats-decoration-text">Today</p>
            
                <div className="percentage-diff">
                <div className="percentage-diff-icon-wrap positive">
                    <svg className="percentage-diff-icon icon-plus-small">
                    <use xlinkHref="#svg-plus-small"></use>
                    </svg>
                </div>
            
                <p className="percentage-diff-text">5.3%</p>
                </div>
            </div>
            
            <div className="stats-decoration v2 big primary">
                <p className="stats-decoration-title">126</p>
            
                <p className="stats-decoration-subtitle">Profile Views</p>
            
                <p className="stats-decoration-text">Today</p>
            
                <div className="percentage-diff">
                <div className="percentage-diff-icon-wrap negative">
                    <svg className="percentage-diff-icon icon-minus-small">
                    <use xlinkHref="#svg-minus-small"></use>
                    </svg>
                </div>
            
                <p className="percentage-diff-text">4.7%</p>
                </div>
            </div>
            </div>
        </div>

        <div className="slider-line medium">
            <div id="reaction-stats-slider-controls" className="slider-controls">
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
        
            <div id="reaction-stats-slider" className="slider-slides with-separator">
            <div className="slider-slide">
                <div className="reaction-stat">
                <img className="reaction-stat-image" src="img/reaction/like.png" alt="reaction-like"/>
        
                <p className="reaction-stat-title">12.642</p>
        
                <p className="reaction-stat-text">Likes</p>
                </div>
            </div>
        
            <div className="slider-slide">
                <div className="reaction-stat">
                <img className="reaction-stat-image" src="img/reaction/love.png" alt="reaction-love"/>
        
                <p className="reaction-stat-title">8.913</p>
        
                <p className="reaction-stat-text">Loves</p>
                </div>
            </div>
        
            <div className="slider-slide">
                <div className="reaction-stat">
                <img className="reaction-stat-image" src="img/reaction/dislike.png" alt="reaction-dislike"/>
        
                <p className="reaction-stat-title">945</p>
        
                <p className="reaction-stat-text">Dislikes</p>
                </div>
            </div>
        
            <div className="slider-slide">
                <div className="reaction-stat">
                <img className="reaction-stat-image" src="img/reaction/happy.png" alt="reaction-happy"/>
        
                <p className="reaction-stat-title">7.034</p>
        
                <p className="reaction-stat-text">Happy</p>
                </div>
            </div>
        
            <div className="slider-slide">
                <div className="reaction-stat">
                <img className="reaction-stat-image" src="img/reaction/funny.png" alt="reaction-funny"/>
        
                <p className="reaction-stat-title">2.356</p>
        
                <p className="reaction-stat-text">Funny</p>
                </div>
            </div>
        
            <div className="slider-slide">
                <div className="reaction-stat">
                <img className="reaction-stat-image" src="img/reaction/wow.png" alt="reaction-wow"/>
        
                <p className="reaction-stat-title">5.944</p>
        
                <p className="reaction-stat-text">Wow</p>
                </div>
            </div>
        
            <div className="slider-slide">
                <div className="reaction-stat">
                <img className="reaction-stat-image" src="img/reaction/angry.png" alt="reaction-angry"/>
        
                <p className="reaction-stat-title">1.706</p>
        
                <p className="reaction-stat-text">Angry</p>
                </div>
            </div>
        
            <div className="slider-slide">
                <div className="reaction-stat">
                <img className="reaction-stat-image" src="img/reaction/sad.png" alt="reaction-sad"/>
        
                <p className="reaction-stat-title">801</p>
        
                <p className="reaction-stat-text">Sad</p>
                </div>
            </div>
            </div>
        </div>

        <div className="grid grid-3-3-3-3 centered">
            <div className="featured-stat-box reactioner">
            <div className="featured-stat-box-cover">
                <p className="featured-stat-box-cover-title">Top Reactor</p>
        
                <p className="featured-stat-box-cover-text">of last month</p>
            </div>
        
            <div className="featured-stat-box-info">
                <div className="user-avatar small">
                <div className="user-avatar-border">
                    <div className="hexagon-50-56"></div>
                </div>
            
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
        
                <p className="featured-stat-box-title">94</p>
        
                <p className="featured-stat-box-subtitle">Reactions</p>
        
                <p className="featured-stat-box-text">Destroy Dex</p>
            </div>
            </div>

            <div className="featured-stat-box reactioner">
            <div className="featured-stat-box-cover">
                <p className="featured-stat-box-cover-title">Top Reactor</p>
        
                <p className="featured-stat-box-cover-text">of all time</p>
            </div>
        
            <div className="featured-stat-box-info">
                <div className="user-avatar small">
                <div className="user-avatar-border">
                    <div className="hexagon-50-56"></div>
                </div>
            
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
        
                <p className="featured-stat-box-title">1.569</p>
        
                <p className="featured-stat-box-subtitle">Reactions</p>
        
                <p className="featured-stat-box-text">Nick Grissom</p>
            </div>
            </div>
        
            <div className="featured-stat-box commenter">
            <div className="featured-stat-box-cover">
                <p className="featured-stat-box-cover-title">Top Commenter</p>
        
                <p className="featured-stat-box-cover-text">of last month</p>
            </div>
        
            <div className="featured-stat-box-info">
                <div className="user-avatar small">
                <div className="user-avatar-border">
                    <div className="hexagon-50-56"></div>
                </div>
            
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
        
                <p className="featured-stat-box-title">47</p>
        
                <p className="featured-stat-box-subtitle">Comments</p>
        
                <p className="featured-stat-box-text">Neko Bebop</p>
            </div>
            </div>

            <div className="featured-stat-box commenter">
            <div className="featured-stat-box-cover">
                <p className="featured-stat-box-cover-title">Top Commenter</p>
        
                <p className="featured-stat-box-cover-text">of all time</p>
            </div>
        
            <div className="featured-stat-box-info">
                <div className="user-avatar small">
                <div className="user-avatar-border">
                    <div className="hexagon-50-56"></div>
                </div>
            
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
        
                <p className="featured-stat-box-title">803</p>
        
                <p className="featured-stat-box-subtitle">Comments</p>
        
                <p className="featured-stat-box-text">Destroy Dex</p>
            </div>
            </div>
        </div>

        <div className="grid grid-half change-on-desktop">
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
                <p className="text-sticker medium round">
                <svg className="text-sticker-icon icon-trophy">
                    <use xlinkHref="#svg-trophy"></use>
                </svg>

                <span className="text-sticker-content">Most Popular Post</span>
                </p>

                <div className="widget-box-status-content">
                <div className="user-status">
                    <a className="user-status-avatar" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate('/profile-timeline')}}>
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
                
                    <p className="user-status-title medium"><a className="bold" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate('/profile-timeline')}}>Marina Valentine</a></p>
                
                    <p className="user-status-text small">17 hours ago</p>
                </div>
        
                <p className="widget-box-status-text">Tomorow I'll be livestreaming along with <a onClick={()=>{
                    dispatch(setLoading({
                        status: 'isLoading'
                    }))
                    navigate('/profile-timeline')}}>@DestroyDex</a> on my Youtube channel. We are gonna do a spedrun of Super Mochi Bros 3!</p>
        
                <a className="video-status" href="https://www.youtube.com/" target="_blank">
                    <img className="video-status-image" src="img/cover/50.jpg" alt="cover-50"/>
        
                    <div className="video-status-info">
                    <p className="video-status-meta">youtube.com</p>
        
                    <p className="video-status-title"><span className="bold">GameHuntress</span> on <span className="highlighted">Youtube</span></p>
        
                    <p className="video-status-text">Watch the GameHuntress play all the greatest games.</p>
                    </div>
                </a>
        
                <div className="tag-list">
                    <a className="tag-item secondary" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate('/newsfeed')}}>Stream</a>
        
                    <a className="tag-item secondary" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate('/newsfeed')}}>Youtube</a>
        
                    <a className="tag-item secondary" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate('/newsfeed')}}>Gaming</a>
        
                    <a className="tag-item secondary" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate('/newsfeed')}}>Retro</a>
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
                            <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/funny.png" alt="reaction-funny"/>
                
                            <div className="simple-dropdown padded reaction-item-dropdown">
                            <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/funny.png" alt="reaction-funny"/> <span className="bold">Funny</span></p>
                            
                            <p className="simple-dropdown-text">Neko Bebop</p>
        
                            <p className="simple-dropdown-text">Nick Grissom</p>
        
                            <p className="simple-dropdown-text">Sarah Diamond</p>
        
                            <p className="simple-dropdown-text">Jett Spiegel</p>
        
                            <p className="simple-dropdown-text">Marcus Jhonson</p>
        
                            <p className="simple-dropdown-text"><span className="bold">and 12 more...</span></p>
                            </div>
                        </div>
                        </div>
                
                        <p className="meta-line-text">22</p>
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
                
                        <p className="meta-line-text">30 Participants</p>
                    </div>
                    </div>
                
                    <div className="content-action">
                    <div className="meta-line">
                        <p className="meta-line-link">12 Comments</p>
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
            <p className="widget-box-title">Personal Activity</p>
        
            <div className="widget-box-content padded-for-scroll medium" data-simplebar>
                <div className="user-status-list scroll-content">
                <div className="user-status">
                    <div className="user-status-activity activity-reaction">
                    <svg className="user-status-activity-icon icon-thumbs-up">
                        <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    </div>
                
                    <p className="user-status-title"><a className="bold" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate('/profile-timeline')}}>Marina Valentine</a> left a love <img className="reaction" src="img/reaction/love.png" alt="reaction-love"/> reaction on <a className="highlighted" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                            navigate('/profile-timeline')}}>Destroy Dex</a>'s <a className="highlighted" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate('/profile-timeline')}}>status update</a></p>
                
                    <p className="user-status-timestamp small-space">3 minutes ago</p>
                </div>
        
                <div className="user-status">
                    <div className="user-status-activity activity-update">
                    <svg className="user-status-activity-icon icon-members">
                        <use xlinkHref="#svg-members"></use>
                    </svg>
                    </div>
                
                    <p className="user-status-title"><a className="bold" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate('/profile-timeline')}}>Marina Valentine</a> updated her <a className="highlighted" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate('/profile-photos')}}>profile picture</a></p>
                
                    <p className="user-status-timestamp small-space">11 minutes ago</p>
                </div>
        
                <div className="user-status">
                    <div className="user-status-activity activity-reaction">
                    <svg className="user-status-activity-icon icon-thumbs-up">
                        <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    </div>
                
                    <p className="user-status-title"><a className="bold" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate('/profile-timeline')}}>Marina Valentine</a> left a happy <img className="reaction" src="img/reaction/happy.png" alt="reaction-happy"/> reaction on <a className="highlighted" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                            navigate('/profile-timeline')}}>Neko Bebop</a>'s <a className="highlighted" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate('/profile-timeline')}}>status update</a></p>
                
                    <p className="user-status-timestamp small-space">3 minutes ago</p>
                </div>
        
                <div className="user-status">
                    <div className="user-status-activity activity-comment">
                    <svg className="user-status-activity-icon icon-comment">
                        <use xlinkHref="#svg-comment"></use>
                    </svg>
                    </div>
                
                    <p className="user-status-title"><a className="bold" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate('/profile-timeline')}}>Marina Valentine</a> commented on <a className="highlighted" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                            navigate('/profile-timeline')}}>Sarah Diamond</a>'s <a className="highlighted" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate('/profile-photos')}}>photo</a></p>
                
                    <p className="user-status-timestamp small-space">35 minutes ago</p>
                </div>
        
                <div className="user-status">
                    <div className="user-status-activity activity-update">
                    <svg className="user-status-activity-icon icon-status">
                        <use xlinkHref="#svg-status"></use>
                    </svg>
                    </div>
                
                    <p className="user-status-title"><a className="bold" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate('/profile-timeline')}}>Marina Valentine</a> posted a new <a className="highlighted" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate('/profile-timeline')}}>status update</a> "Hi to all! Remember"</p>
                
                    <p className="user-status-timestamp small-space">1 hour ago</p>
                </div>
        
                <div className="user-status">
                    <div className="user-status-activity activity-comment">
                    <svg className="user-status-activity-icon icon-comment">
                        <use xlinkHref="#svg-comment"></use>
                    </svg>
                    </div>
                
                    <p className="user-status-title"><a className="bold" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate('/profile-timeline')}}>Marina Valentine</a> replied to a <a className="highlighted" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                            navigate('/profile-timeline')}}>Damian Greyson</a>'s <a className="highlighted" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate('/profile-timeline')}}>comment</a></p>
                
                    <p className="user-status-timestamp small-space">1 hour ago</p>
                </div>
        
                <div className="user-status">
                    <div className="user-status-activity activity-share">
                    <svg className="user-status-activity-icon icon-share">
                        <use xlinkHref="#svg-share"></use>
                    </svg>
                    </div>
                
                    <p className="user-status-title"><a className="bold" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate('/profile-timeline')}}>Marina Valentine</a> shared <a className="highlighted" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                            navigate('/profile-timeline')}}>Destroy Dex</a>'s <a className="highlighted" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate('/profile-timeline')}}>status update</a></p>
                
                    <p className="user-status-timestamp small-space">4 hours ago</p>
                </div>
        
                <div className="user-status">
                    <div className="user-status-activity activity-reaction">
                    <svg className="user-status-activity-icon icon-thumbs-up">
                        <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    </div>
                
                    <p className="user-status-title"><a className="bold" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate('/profile-timeline')}}>Marina Valentine</a> left a wow! <img className="reaction" src="img/reaction/wow.png" alt="reaction-wow"/> reaction on <a className="highlighted" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                            navigate('/profile-timeline')}}>Destroy Dex</a>'s <a className="highlighted" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate('/profile-timeline')}}>status update</a></p>
                
                    <p className="user-status-timestamp small-space">2 days ago</p>
                </div>
        
                <div className="user-status">
                    <div className="user-status-activity activity-update">
                    <svg className="user-status-activity-icon icon-members">
                        <use xlinkHref="#svg-members"></use>
                    </svg>
                    </div>
                
                    <p className="user-status-title"><a className="bold" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate('/profile-timeline')}}>Marina Valentine</a> updated her <a className="highlighted" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate('/profile-timeline')}}>cover picture</a></p>
                
                    <p className="user-status-timestamp small-space">1 week ago</p>
                </div>
        
                <div className="user-status">
                    <div className="user-status-activity activity-reaction">
                    <svg className="user-status-activity-icon icon-thumbs-up">
                        <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    </div>
                
                    <p className="user-status-title"><a className="bold" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate('/profile-timeline')}}>Marina Valentine</a> left a like <img className="reaction" src="img/reaction/like.png" alt="reaction-like"/> reaction on <a className="highlighted" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                            navigate('/profile-timeline')}}>Nick Grissom</a>'s <a className="highlighted" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate('/profile-timeline')}}>status update</a></p>
                
                    <p className="user-status-timestamp small-space">1 week ago</p>
                </div>
        
                <div className="user-status">
                    <div className="user-status-activity activity-reaction">
                    <svg className="user-status-activity-icon icon-thumbs-up">
                        <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    </div>
                
                    <p className="user-status-title"><a className="bold" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate('/profile-timeline')}}>Marina Valentine</a> left a funny <img className="reaction" src="img/reaction/funny.png" alt="reaction-funny"/> reaction on <a className="highlighted" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                            navigate('/profile-timeline')}}>Bearded Wonder</a>'s <a className="highlighted" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate('/profile-timeline')}}>status update</a></p>
                
                    <p className="user-status-timestamp small-space">2 weeks ago</p>
                </div>
                </div>
            </div>
            </div>
        </div>

        <div className="slider-line">
            <div id="stat-block-slider-controls" className="slider-controls">
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
        
            <div id="stat-block-slider" className="slider-slides">
            <div className="slider-slide">
                <div className="stat-block">
                <div className="stat-block-decoration">
                    <svg className="stat-block-decoration-icon icon-friend">
                    <use xlinkHref="#svg-friend"></use>
                    </svg>
                </div>
        
                <div className="stat-block-info">
                    <p className="stat-block-title">Last friend added</p>
        
                    <p className="stat-block-text">5 Days Ago</p>
                </div>
                </div>
            </div>
        
            <div className="slider-slide">
                <div className="stat-block">
                <div className="stat-block-decoration">
                    <svg className="stat-block-decoration-icon icon-status">
                    <use xlinkHref="#svg-status"></use>
                    </svg>
                </div>
        
                <div className="stat-block-info">
                    <p className="stat-block-title">Last post update</p>
        
                    <p className="stat-block-text">1 Day Ago</p>
                </div>
                </div>
            </div>
        
            <div className="slider-slide">
                <div className="stat-block">
                <div className="stat-block-decoration">
                    <svg className="stat-block-decoration-icon icon-comment">
                    <use xlinkHref="#svg-comment"></use>
                    </svg>
                </div>
        
                <div className="stat-block-info">
                    <p className="stat-block-title">Most commented post</p>
        
                    <p className="stat-block-text">56 Comments</p>
                </div>
                </div>
            </div>
        
            <div className="slider-slide">
                <div className="stat-block">
                <div className="stat-block-decoration">
                    <svg className="stat-block-decoration-icon icon-thumbs-up">
                    <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                </div>
        
                <div className="stat-block-info">
                    <p className="stat-block-title">Most liked post</p>
        
                    <p className="stat-block-text">904 Likes</p>
                </div>
                </div>
            </div>
        
            <div className="slider-slide">
                <div className="stat-block">
                <div className="stat-block-decoration">
                    <svg className="stat-block-decoration-icon icon-share">
                    <use xlinkHref="#svg-share"></use>
                    </svg>
                </div>
        
                <div className="stat-block-info">
                    <p className="stat-block-title">Most shared post</p>
        
                    <p className="stat-block-text">156 Shares</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

        <div className="section-header">
        <div className="section-header-info">
            <p className="section-pretitle">Overview</p>
    
            <h2 className="section-title">Gamification</h2>
        </div>
        </div>

        <div className="grid">
        <div className="grid grid-half change-on-desktop">
            <div className="achievement-box secondary">
            <div className="achievement-box-info-wrap">
                <img className="achievement-box-image" src="img/badge/caffeinated-b.png" alt="badge-caffeinated-b"/>
        
                <div className="achievement-box-info">
                <p className="achievement-box-title">Last Badge Unlocked</p>
        
                <p className="achievement-box-text"><span className="bold">Caffeinated</span> 2 days ago</p>
                </div>
            </div>
        
            <a className="button white-solid" onClick={()=>{
                dispatch(setLoading({
                    status: 'isLoading'
                }))
                navigate('/badges')}}>Browse All</a>
            </div>
        
            <div className="achievement-box primary">
            <div className="achievement-box-info-wrap">
                <img className="achievement-box-image" src="img/quest/completedq-l.png" alt="quest-completedq-l"/>
        
                <div className="achievement-box-info">
                <p className="achievement-box-title">Last Completed Quest</p>
        
                <p className="achievement-box-text"><span className="bold">Nothing to Hide</span> 7 hours ago</p>
                </div>
            </div>
        
            <a className="button white-solid" onClick={()=>{
                dispatch(setLoading({
                    status: 'isLoading'
                }))
                navigate('/quests')}}>Browse All</a>
            </div>
        </div>

        <div className="grid grid-3-9">
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
            </div>

            <div className="grid-column">
            <div className="level-progress-box">
                <div className="level-progress-badge">
                <p className="level-progress-badge-title">Level</p>
            
                <p className="level-progress-badge-text">24</p>
                </div>
            
                <div className="progress-stat">
                <div className="bar-progress-wrap big">
                    <p className="bar-progress-info start negative progress-with-text">+<span className="bar-progress-text"></span><span className="light">to reach the next level</span></p>
            
                    <p className="progress-stat-info">13.625 total exp points received</p>
                </div>
            
                <div id="exp-to-next-level" className="progress-stat-bar"></div>
                </div>
            </div>

            <div className="widget-box no-padding">
                <p className="widget-box-title">Experience History</p>
            
                <div className="widget-box-content small-margin-top padded-for-scroll small" data-simplebar>
                <div className="exp-line-list scroll-content">
                    <div className="exp-line">
                    <svg className="exp-line-icon icon-badges">
                        <use xlinkHref="#svg-badges"></use>
                    </svg>
            
                    <p className="text-sticker small-text">
                        <svg className="text-sticker-icon icon-plus-small">
                        <use xlinkHref="#svg-plus-small"></use>
                        </svg>
                        80 EXP
                    </p>
            
                    <p className="exp-line-text">Keep it up! You reached tier II of the "The Warrior" badge</p>
            
                    <p className="exp-line-timestamp">29 minutes ago</p>
                    </div>
            
                    <div className="exp-line">
                    <svg className="exp-line-icon icon-quests">
                        <use xlinkHref="#svg-quests"></use>
                    </svg>
            
                    <p className="text-sticker small-text">
                        <svg className="text-sticker-icon icon-plus-small">
                        <use xlinkHref="#svg-plus-small"></use>
                        </svg>
                        65 EXP
                    </p>
            
                    <p className="exp-line-text">Congratz! You have completed the "Nothing to Hide" quest</p>
            
                    <p className="exp-line-timestamp">7 hours ago</p>
                    </div>
            
                    <div className="exp-line">
                    <svg className="exp-line-icon icon-badges">
                        <use xlinkHref="#svg-badges"></use>
                    </svg>
            
                    <p className="text-sticker small-text">
                        <svg className="text-sticker-icon icon-plus-small">
                        <use xlinkHref="#svg-plus-small"></use>
                        </svg>
                        40 EXP
                    </p>
            
                    <p className="exp-line-text">Great job! You just unlocked the "Caffeinated" badge</p>
            
                    <p className="exp-line-timestamp">2 days ago</p>
                    </div>
            
                    <div className="exp-line">
                    <svg className="exp-line-icon icon-badges">
                        <use xlinkHref="#svg-badges"></use>
                    </svg>
            
                    <p className="text-sticker small-text">
                        <svg className="text-sticker-icon icon-plus-small">
                        <use xlinkHref="#svg-plus-small"></use>
                        </svg>
                        100 EXP
                    </p>
            
                    <p className="exp-line-text">Amazing! You just unlocked the "Gold User" badge</p>
            
                    <p className="exp-line-timestamp">5 days ago</p>
                    </div>
            
                    <div className="exp-line">
                    <svg className="exp-line-icon icon-badges">
                        <use xlinkHref="#svg-badges"></use>
                    </svg>
            
                    <p className="text-sticker small-text">
                        <svg className="text-sticker-icon icon-plus-small">
                        <use xlinkHref="#svg-plus-small"></use>
                        </svg>
                        40 EXP
                    </p>
            
                    <p className="exp-line-text">Great job! You just unlocked the "Crazy Scientist" badge</p>
            
                    <p className="exp-line-timestamp">1 week ago</p>
                    </div>
            
                    <div className="exp-line">
                    <svg className="exp-line-icon icon-quests">
                        <use xlinkHref="#svg-quests"></use>
                    </svg>
            
                    <p className="text-sticker small-text">
                        <svg className="text-sticker-icon icon-plus-small">
                        <use xlinkHref="#svg-plus-small"></use>
                        </svg>
                        20 EXP
                    </p>
            
                    <p className="exp-line-text">Congratz! You have completed the "Press Start" quest</p>
            
                    <p className="exp-line-timestamp">2 weeks ago</p>
                    </div>
            
                    <div className="exp-line">
                    <svg className="exp-line-icon icon-quests">
                        <use xlinkHref="#svg-quests"></use>
                    </svg>
            
                    <p className="text-sticker small-text">
                        <svg className="text-sticker-icon icon-plus-small">
                        <use xlinkHref="#svg-plus-small"></use>
                        </svg>
                        60 EXP
                    </p>
            
                    <p className="exp-line-text">Congratz! You have completed the "Social King" quest</p>
            
                    <p className="exp-line-timestamp">3 weeks ago</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

        <div className="section-header">
        <div className="section-header-info">
            <p className="section-pretitle">Overview</p>
    
            <h2 className="section-title">Account Analytics</h2>
        </div>
        </div>

        <div className="grid">
        <div className="grid grid-3-3-3-3 centered">
            <div className="account-stat-box account-stat-active-users">
            <div className="account-stat-box-icon-wrap">
                <svg className="account-stat-box-icon icon-friend">
                <use xlinkHref="#svg-friend"></use>
                </svg>
            </div>
        
            <p className="account-stat-box-title">71</p>
        
            <p className="account-stat-box-subtitle">Active Users</p>
        
            <p className="account-stat-box-text">Amount of active users visiting your account at this moment</p>
            </div>

            <div className="account-stat-box account-stat-visits">
            <div className="percentage-diff">
                <div className="percentage-diff-icon-wrap positive">
                <svg className="percentage-diff-icon icon-plus-small">
                    <use xlinkHref="#svg-plus-small"></use>
                </svg>
                </div>
        
                <p className="percentage-diff-text">3.6%</p>
            </div>

            <div className="account-stat-box-icon-wrap">
                <svg className="account-stat-box-icon icon-members">
                <use xlinkHref="#svg-members"></use>
                </svg>
            </div>
        
            <p className="account-stat-box-title">262</p>
        
            <p className="account-stat-box-subtitle">Account Visits</p>
        
            <p className="account-stat-box-text">Times old or new members visited any of your acount pages this month</p>
            </div>

            <div className="account-stat-box account-stat-session-duration">
            <div className="percentage-diff">
                <div className="percentage-diff-icon-wrap negative">
                <svg className="percentage-diff-icon icon-minus-small">
                    <use xlinkHref="#svg-minus-small"></use>
                </svg>
                </div>
        
                <p className="percentage-diff-text">2.4%</p>
            </div>

            <div className="account-stat-box-icon-wrap">
                <svg className="account-stat-box-icon icon-clock">
                <use xlinkHref="#svg-clock"></use>
                </svg>
            </div>
        
            <p className="account-stat-box-title">4:39</p>
        
            <p className="account-stat-box-subtitle">Session Duration</p>
        
            <p className="account-stat-box-text">Average time in minutes of how much people spend on your pages</p>
            </div>

            <div className="account-stat-box account-stat-returning-visitors">
            <div className="percentage-diff">
                <div className="percentage-diff-icon-wrap positive">
                <svg className="percentage-diff-icon icon-plus-small">
                    <use xlinkHref="#svg-plus-small"></use>
                </svg>
                </div>
        
                <p className="percentage-diff-text">8.2%</p>
            </div>

            <div className="account-stat-box-icon-wrap">
                <svg className="account-stat-box-icon icon-return">
                <use xlinkHref="#svg-return"></use>
                </svg>
            </div>
        
            <p className="account-stat-box-title">80%</p>
        
            <p className="account-stat-box-subtitle">Returning Visitors</p>
        
            <p className="account-stat-box-text">Percentage of visitors that visited your account more than once</p>
            </div>
        </div>

        <div className="widget-box">
            <div className="widget-box-actions">
            <div className="widget-box-action">
                <p className="widget-box-title">Monthly Report</p>
            </div>
        
            <div className="widget-box-action">
                <div className="reference-item-list">
                <div className="reference-item">
                    <div className="reference-bullet primary"></div>
        
                    <p className="reference-item-text">Visits</p>
                </div>
        
                <div className="reference-item">
                    <div className="reference-bullet secondary"></div>
        
                    <p className="reference-item-text">Engagements</p>
                </div>
                </div>
        
                <div className="form-select v2">
                <select id="ve-monthly-report-date" name="ve_monthly_report_date">
                    <option value="0">September 2019</option>
                    <option value="1">November 2019</option>
                </select>
                <svg className="form-select-icon icon-small-arrow">
                    <use xlinkHref="#svg-small-arrow"></use>
                </svg>
                </div>
            </div>
            </div>
        
            <div className="widget-box-content">
            <div className="chart-wrap">
                <div className="chart">
                <canvas id="ve-monthly-report-chart"></canvas>
                </div>
            </div>
            </div>

            <div className="widget-box-footer">
            <div className="chart-info">
                <div className="progress-arc-wrap tiny">
                <div className="progress-arc">
                    <canvas id="ve-monthly-report-ratio-chart"></canvas>
                </div>
            
                <div className="progress-arc-info">
                    <p className="progress-arc-title">Ratio</p>
                </div>
                </div>

                <div className="user-stats">
                <div className="user-stat big">
                    <p className="user-stat-title">1.067</p>
            
                    <p className="user-stat-text">t. visits</p>
                </div>
            
                <div className="user-stat big">
                    <p className="user-stat-title">298</p>
            
                    <p className="user-stat-text">t. engagements</p>
                </div>
            
                <div className="user-stat big">
                    <p className="user-stat-title">34.4</p>
            
                    <p className="user-stat-text">avg visits</p>
                </div>
        
                <div className="user-stat big">
                    <p className="user-stat-title">9.6</p>
            
                    <p className="user-stat-text">avg engagements</p>
                </div>

                <div className="user-stat big">
                    <p className="user-stat-title">
                    <svg className="user-stat-title-icon positive icon-plus-small">
                        <use xlinkHref="#svg-plus-small"></use>
                    </svg>
                    26.3%
                    </p>
            
                    <p className="user-stat-text">visits / jul 2019</p>
                </div>

                <div className="user-stat big">
                    <p className="user-stat-title">
                    <svg className="user-stat-title-icon negative icon-minus-small">
                        <use xlinkHref="#svg-minus-small"></use>
                    </svg>
                    4.9%
                    </p>
            
                    <p className="user-stat-text">engagements / jul 2019</p>
                </div>
                </div>
            </div>
            </div>
        </div>

        <div className="grid grid-9-3 stretched">
            <div className="grid-column">
            <div className="widget-box">
                <p className="widget-box-title">Top Friends Activity</p>
            
                <div className="widget-box-content no-margin-top">
                <div className="table table-top-friends join-rows">
                    <div className="table-header">
                    <div className="table-header-column">
                        <p className="table-header-title">Friend</p>
                    </div>
                
                    <div className="table-header-column centered padded">
                        <p className="table-header-title">Reactions</p>
                    </div>
                
                    <div className="table-header-column centered padded">
                        <p className="table-header-title">Comments</p>
                    </div>
                
                    <div className="table-header-column centered padded">
                        <p className="table-header-title">Shares</p>
                    </div>
                
                    <div className="table-header-column centered padded">
                        <p className="table-header-title">Replies</p>
                    </div>
                
                    <div className="table-header-column padded-left">
                        <p className="table-header-title">Post Engagement</p>
                    </div>
                    </div>
                
                    <div className="table-body">
                    <div className="table-row tiny">
                        <div className="table-column">
                        <div className="user-status">
                            <a className="user-status-avatar" onClick={()=>{
                                dispatch(setLoading({
                                    status: 'isLoading'
                                }))
                                navigate('/profile-timeline')}}>
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
                        
                            <p className="user-status-title"><a className="bold" onClick={()=>{
                                dispatch(setLoading({
                                    status: 'isLoading'
                                }))
                                navigate('/profile-timeline')}}>Nick Grissom</a></p>
                        
                            <p className="user-status-text small">Friended: Jan 14, 2017</p>
                        </div>
                        </div>
                
                        <div className="table-column centered padded">
                        <p className="table-title">1569</p>
                        </div>
                
                        <div className="table-column centered padded">
                        <p className="table-title">750</p>
                        </div>
                
                        <div className="table-column centered padded">
                        <p className="table-title">109</p>
                        </div>
                
                        <div className="table-column centered padded">
                        <p className="table-title">223</p>
                        </div>
                
                        <div className="table-column padded-left">
                        <div className="progress-stat-wrap">
                            <div className="progress-stat">
                            <div id="post-engagement-1" className="progress-stat-bar"></div>
                        
                            <div className="bar-progress-wrap">
                                <p className="bar-progress-info medium negative"><span className="bar-progress-text no-space"></span></p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                
                    <div className="table-row tiny">
                        <div className="table-column">
                        <div className="user-status">
                            <a className="user-status-avatar" onClick={()=>{
                                dispatch(setLoading({
                                    status: 'isLoading'
                                }))
                                navigate('/profile-timeline')}}>
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
                        
                            <p className="user-status-title"><a className="bold" onClick={()=>{
                                dispatch(setLoading({
                                    status: 'isLoading'
                                }))
                                navigate('/profile-timeline')}}>Destroy Dex</a></p>
                        
                            <p className="user-status-text small">Friended: May 22, 2017</p>
                        </div>
                        </div>
                
                        <div className="table-column centered padded">
                        <p className="table-title">1036</p>
                        </div>
                
                        <div className="table-column centered padded">
                        <p className="table-title">803</p>
                        </div>
                
                        <div className="table-column centered padded">
                        <p className="table-title">97</p>
                        </div>
                
                        <div className="table-column centered padded">
                        <p className="table-title">126</p>
                        </div>
                
                        <div className="table-column padded-left">
                        <div className="progress-stat-wrap">
                            <div className="progress-stat">
                            <div id="post-engagement-2" className="progress-stat-bar"></div>
                        
                            <div className="bar-progress-wrap">
                                <p className="bar-progress-info medium negative"><span className="bar-progress-text no-space"></span></p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="table-row tiny">
                        <div className="table-column">
                        <div className="user-status">
                            <a className="user-status-avatar" onClick={()=>{
                                dispatch(setLoading({
                                    status: 'isLoading'
                                }))
                                navigate('/profile-timeline')}}>
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
                        
                            <p className="user-status-title"><a className="bold" onClick={()=>{
                                dispatch(setLoading({
                                    status: 'isLoading'
                                }))
                                navigate('/profile-timeline')}}>Neko Bebop</a></p>
                        
                            <p className="user-status-text small">Friended: Sep 19, 2018</p>
                        </div>
                        </div>
                
                        <div className="table-column centered padded">
                        <p className="table-title">860</p>
                        </div>
                
                        <div className="table-column centered padded">
                        <p className="table-title">662</p>
                        </div>
                
                        <div className="table-column centered padded">
                        <p className="table-title">102</p>
                        </div>
                
                        <div className="table-column centered padded">
                        <p className="table-title">91</p>
                        </div>
                
                        <div className="table-column padded-left">
                        <div className="progress-stat-wrap">
                            <div className="progress-stat">
                            <div id="post-engagement-3" className="progress-stat-bar"></div>
                        
                            <div className="bar-progress-wrap">
                                <p className="bar-progress-info medium negative"><span className="bar-progress-text no-space"></span></p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="table-row tiny">
                        <div className="table-column">
                        <div className="user-status">
                            <a className="user-status-avatar" onClick={()=>{
                                dispatch(setLoading({
                                    status: 'isLoading'
                                }))
                                navigate('/profile-timeline')}}>
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
                        
                            <p className="user-status-title"><a className="bold" onClick={()=>{
                                dispatch(setLoading({
                                    status: 'isLoading'
                                }))
                                navigate('/profile-timeline')}}>Sarah Diamond</a></p>
                        
                            <p className="user-status-text small">Friended: Aug 6, 2017</p>
                        </div>
                        </div>
                
                        <div className="table-column centered padded">
                        <p className="table-title">742</p>
                        </div>
                
                        <div className="table-column centered padded">
                        <p className="table-title">401</p>
                        </div>
                
                        <div className="table-column centered padded">
                        <p className="table-title">77</p>
                        </div>
                
                        <div className="table-column centered padded">
                        <p className="table-title">64</p>
                        </div>
                
                        <div className="table-column padded-left">
                        <div className="progress-stat-wrap">
                            <div className="progress-stat">
                            <div id="post-engagement-4" className="progress-stat-bar"></div>
                        
                            <div className="bar-progress-wrap">
                                <p className="bar-progress-info medium negative"><span className="bar-progress-text no-space"></span></p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="table-row tiny">
                        <div className="table-column">
                        <div className="user-status">
                            <a className="user-status-avatar" onClick={()=>{
                                dispatch(setLoading({
                                    status: 'isLoading'
                                }))
                                navigate('/profile-timeline')}}>
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
                        
                            <p className="user-status-title"><a className="bold" onClick={()=>{
                                dispatch(setLoading({
                                    status: 'isLoading'
                                }))
                                navigate('/profile-timeline')}}>The Green Goo</a></p>
                        
                            <p className="user-status-text small">Friended: Dec 27, 2019</p>
                        </div>
                        </div>
                
                        <div className="table-column centered padded">
                        <p className="table-title">421</p>
                        </div>
                
                        <div className="table-column centered padded">
                        <p className="table-title">200</p>
                        </div>
                
                        <div className="table-column centered padded">
                        <p className="table-title">34</p>
                        </div>
                
                        <div className="table-column centered padded">
                        <p className="table-title">22</p>
                        </div>
                
                        <div className="table-column padded-left">
                        <div className="progress-stat-wrap">
                            <div className="progress-stat">
                            <div id="post-engagement-5" className="progress-stat-bar"></div>
                        
                            <div className="bar-progress-wrap">
                                <p className="bar-progress-info medium negative"><span className="bar-progress-text no-space"></span></p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div className="grid-column">
            <div className="widget-box">
                <div className="widget-box-actions">
                <div className="widget-box-action">
                    <p className="widget-box-title">Engagements</p>
                </div>
                </div>

                <div className="widget-box-content">
                <div className="progress-arc-wrap">
                    <div className="progress-arc">
                    <canvas id="engagements-chart"></canvas>
                    </div>

                    <div className="progress-arc-info">
                    <p className="progress-arc-title">28.8K</p>

                    <p className="progress-arc-text">Engagements</p>
                    </div>
                </div>

                <div className="user-stats reference">
                    <div className="user-stat big">
                    <div className="reference-bullet secondary"></div>

                    <p className="user-stat-title">18.3K</p>
            
                    <p className="user-stat-text">reactions</p>
                    </div>
            
                    <div className="user-stat big">
                    <div className="reference-bullet primary"></div>

                    <p className="user-stat-title">5.2K</p>
            
                    <p className="user-stat-text">comments</p>
                    </div>
                </div>

                <div className="user-stats reference">
                    <div className="user-stat big">
                    <div className="reference-bullet blue"></div>

                    <p className="user-stat-title">1.4K</p>
            
                    <p className="user-stat-text">shares</p>
                    </div>
            
                    <div className="user-stat big">
                    <div className="reference-bullet light-blue"></div>

                    <p className="user-stat-title">3.9K</p>
            
                    <p className="user-stat-text">replies</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>

        <div className="grid grid-3-9 stretched">
            <div className="grid-column">
            <div className="widget-box">
                <p className="widget-box-title">Visits Top Countries</p>
            
                <div className="widget-box-content">
                <div className="country-stat-list">
                    <div className="country-stat with-progress">
                    <img className="country-stat-image" src="img/flag/usa.png" alt="flag-usa"/>
                
                    <div className="progress-stat small">
                        <div className="bar-progress-wrap">
                        <p className="bar-progress-info medium negative regular">United States<span className="bar-progress-text no-space"></span></p>
                        </div>
                    
                        <div id="top-country-1" className="progress-stat-bar"></div>
                    </div>
                    </div>
            
                    <div className="country-stat with-progress">
                    <img className="country-stat-image" src="img/flag/india.png" alt="flag-india"/>
                
                    <div className="progress-stat small">
                        <div className="bar-progress-wrap">
                        <p className="bar-progress-info medium negative regular">India<span className="bar-progress-text no-space"></span></p>
                        </div>
                    
                        <div id="top-country-2" className="progress-stat-bar"></div>
                    </div>
                    </div>
            
                    <div className="country-stat with-progress">
                    <img className="country-stat-image" src="img/flag/brazil.png" alt="flag-brazil"/>
                
                    <div className="progress-stat small">
                        <div className="bar-progress-wrap">
                        <p className="bar-progress-info medium negative regular">Brazil<span className="bar-progress-text no-space"></span></p>
                        </div>
                    
                        <div id="top-country-3" className="progress-stat-bar"></div>
                    </div>
                    </div>
                
                    <div className="country-stat">
                    <img className="country-stat-image" src="img/flag/canada.png" alt="flag-canada"/>
                
                    <p className="country-stat-title">Canada</p>
                
                    <p className="country-stat-text">8.922</p>
                    </div>
            
                    <div className="country-stat">
                    <img className="country-stat-image" src="img/flag/russia.png" alt="flag-russia"/>
                
                    <p className="country-stat-title">Russia</p>
                
                    <p className="country-stat-text">6.303</p>
                    </div>
            
                    <div className="country-stat">
                    <img className="country-stat-image" src="img/flag/turkey.png" alt="flag-turkey"/>
                
                    <p className="country-stat-title">Turkey</p>
                
                    <p className="country-stat-text">6.278</p>
                    </div>
            
                    <div className="country-stat">
                    <img className="country-stat-image" src="img/flag/france.png" alt="flag-france"/>
                
                    <p className="country-stat-title">France</p>
                
                    <p className="country-stat-text">4.520</p>
                    </div>
            
                    <div className="country-stat">
                    <img className="country-stat-image" src="img/flag/germany.png" alt="flag-germany"/>
                
                    <p className="country-stat-title">Germany</p>
                
                    <p className="country-stat-text">3.225</p>
                    </div>
            
                    <div className="country-stat">
                    <img className="country-stat-image" src="img/flag/argentina.png" alt="flag-argentina"/>
                
                    <p className="country-stat-title">Argentina</p>
                
                    <p className="country-stat-text">1.744</p>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div className="grid-column">
            <div className="widget-box">
                <div className="widget-box-actions">
                <div className="widget-box-action">
                    <p className="widget-box-title">Visits World Map</p>
                </div>

                <div className="widget-box-action">
                    <div className="form-select v2">
                    <select id="visits-map-date" name="visits_map_date">
                        <option value="0">September 2019</option>
                        <option value="1">November 2019</option>
                    </select>
                    <svg className="form-select-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow"></use>
                    </svg>
                    </div>
                </div>
                </div>

                <div className="widget-box-content">
                <img className="full-width-image" src="img/flag/map.png" alt="map"/>
                </div>
            </div>
            </div>
        </div>

        <div className="widget-box">
            <div className="widget-box-actions">
            <div className="widget-box-action">
                <p className="widget-box-title">Yearly Report</p>
            </div>
        
            <div className="widget-box-action">
                <div className="reference-item-list">
                <div className="reference-item">
                    <div className="reference-bullet primary"></div>
        
                    <p className="reference-item-text">Reactions</p>
                </div>
        
                <div className="reference-item">
                    <div className="reference-bullet blue"></div>
        
                    <p className="reference-item-text">Comments</p>
                </div>
                </div>
        
                <div className="form-select v2">
                <select id="rc-yearly-report-date" name="rc_yearly_report_date">
                    <option value="0">Jan - Dec 2018</option>
                    <option value="1">Jan - Dec 2019</option>
                </select>
                <svg className="form-select-icon icon-small-arrow">
                    <use xlinkHref="#svg-small-arrow"></use>
                </svg>
                </div>
            </div>
            </div>
        
            <div className="widget-box-content">
            <div className="chart-wrap">
                <div className="chart">
                <canvas id="rc-yearly-report-chart"></canvas>
                </div>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Overview