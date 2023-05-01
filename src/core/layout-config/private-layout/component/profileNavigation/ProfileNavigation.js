import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileNavigation = () => {

    const navigate = useNavigate();

    return (
        <nav className="section-navigation">
            <div id="section-navigation-slider" className="section-menu">
                <button className="section-menu-item active" style={{backgroundColor: 'white'}} onClick={()=>{navigate("profile-about.html")}}>
                    <svg className="section-menu-item-icon icon-profile">
                        <use xlinkHref="#svg-profile"></use>
                    </svg>
                    <p className="section-menu-item-text">About</p>
                </button>
                <button className="section-menu-item" style={{backgroundColor: 'white'}} onClick={()=>{navigate("profile-timeline.html")}}>
                    <svg className="section-menu-item-icon icon-timeline">
                        <use xlinkHref="#svg-timeline"></use>
                    </svg>
                    <p className="section-menu-item-text">Timeline</p>
                </button>
                <button className="section-menu-item" style={{backgroundColor: 'white'}} onClick={()=>{navigate("profile-friends.html")}}>
                    <svg className="section-menu-item-icon icon-friend">
                    <use xlinkHref="#svg-friend"></use>
                    </svg>
                    <p className="section-menu-item-text">Friends</p>
                </button>
                <button className="section-menu-item" style={{backgroundColor: 'white'}} onClick={()=>{navigate("profile-groups.html")}}>
                    <svg className="section-menu-item-icon icon-group">
                        <use xlinkHref="#svg-group"></use>
                    </svg>
                    <p className="section-menu-item-text">Groups</p>
                </button>
                <button className="section-menu-item" style={{backgroundColor: 'white'}} onClick={()=>{navigate("profile-photos.html")}}>
                    <svg className="section-menu-item-icon icon-photos">
                        <use xlinkHref="#svg-photos"></use>
                    </svg>
                    <p className="section-menu-item-text">Photos</p>
                </button>
                <button className="section-menu-item" style={{backgroundColor: 'white'}} onClick={()=>{navigate("profile-videos.html")}}>
                    <svg className="section-menu-item-icon icon-videos">
                        <use xlinkHref="#svg-videos"></use>
                    </svg>
                    <p className="section-menu-item-text">Videos</p>
                    
                </button>
                <button className="section-menu-item" style={{backgroundColor: 'white'}} onClick={()=>{navigate("profile-badges.html")}}>
                    <svg className="section-menu-item-icon icon-badges">
                        <use xlinkHref="#svg-badges"></use>
                    </svg>
                    <p className="section-menu-item-text">Badges</p>
                </button>
                <button className="section-menu-item" style={{backgroundColor: 'white'}} onClick={()=>{navigate("profile-stream.html")}}>
                    <svg className="section-menu-item-icon icon-streams">
                        <use xlinkHref="#svg-streams"></use>
                    </svg>
                    <p className="section-menu-item-text">Streams</p>
                </button>
                <button className="section-menu-item" style={{backgroundColor: 'white'}} onClick={()=>{navigate("profile-blog.html")}}>
                    <svg className="section-menu-item-icon icon-blog-posts">
                        <use xlinkHref="#svg-blog-posts"></use>
                    </svg>
                    <p className="section-menu-item-text">Blog</p>
                </button>
                <button className="section-menu-item" style={{backgroundColor: 'white'}} onClick={()=>{navigate("profile-forum.html")}}>
                    <svg className="section-menu-item-icon icon-forum">
                        <use xlinkHref="#svg-forum"></use>
                    </svg>
                    <p className="section-menu-item-text">Forum</p>
                </button>
                <button className="section-menu-item" style={{backgroundColor: 'white'}} onClick={()=>{navigate("profile-store.html")}}>
                    <svg className="section-menu-item-icon icon-store">
                        <use xlinkHref="#svg-store"></use>
                    </svg>
                    <p className="section-menu-item-text">Store</p>
                </button>
            </div>
            <div id="section-navigation-slider-controls" className="slider-controls">
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
        </nav>
    )
}

export default ProfileNavigation