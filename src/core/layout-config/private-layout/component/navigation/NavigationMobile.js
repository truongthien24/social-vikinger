import React from 'react'
import { useDispatch } from 'react-redux';
import { setLoading } from '../../../../../redux/action/homeAction';
import { useNavigate } from 'react-router-dom';

const NavigationMobile = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

  return (
    <nav id="navigation-widget-mobile" className="navigation-widget navigation-widget-mobile sidebar left hidden" data-simplebar>
        
        <div className="navigation-widget-close-button">
        
        <svg className="navigation-widget-close-button-icon icon-back-arrow">
            <use xlinkHref="#svg-back-arrow"></use>
        </svg>
        
        </div>

        <div className="navigation-widget-info-wrap">
        
        <div className="navigation-widget-info">
            
            <a className="user-avatar small no-outline" onClick={()=>{
                dispatch(setLoading({
                    status: 'isLoading'
                }))
                navigate("profile-timeline")}}>
            
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
            
            </a>
            

            
            <p className="navigation-widget-info-title"><a onClick={()=>{
                dispatch(setLoading({
                    status: 'isLoading'
                }))
                navigate("profile-timeline")}}>Marina Valentine</a></p>
            

            
            <p className="navigation-widget-info-text">Welcome Back!</p>
            
        </div>
        

        
        <p className="navigation-widget-info-button button small secondary">Logout</p>
        
        </div>
    
        <p className="navigation-widget-section-title">Sections</p>
    
        <ul className="menu">
        
        <li className="menu-item">
            
            <a className="menu-item-link" onClick={()=>{
                dispatch(setLoading({
                    status: 'isLoading'
                }))
                navigate("newsfeed")}}>
            
            <svg className="menu-item-link-icon icon-newsfeed">
                <use xlinkHref="#svg-newsfeed"></use>
            </svg>
            
            Newsfeed
            </a>
            
        </li>
        

        
        <li className="menu-item">
            
            <a className="menu-item-link" onClick={()=>{
                dispatch(setLoading({
                    status: 'isLoading'
                }))
                navigate("overview")}}>
            
            <svg className="menu-item-link-icon icon-overview">
                <use xlinkHref="#svg-overview"></use>
            </svg>
            
            Overview
            </a>
            
        </li>
        

        
        <li className="menu-item">
            
            <a className="menu-item-link" onClick={()=>{
                dispatch(setLoading({
                    status: 'isLoading'
                }))
                navigate("groups")}}>
            
            <svg className="menu-item-link-icon icon-group">
                <use xlinkHref="#svg-group"></use>
            </svg>
            
            Groups
            </a>
            
        </li>
        

        
        <li className="menu-item">
            
            <a className="menu-item-link" onClick={()=>{
                dispatch(setLoading({
                    status: 'isLoading'
                }))
                navigate("members")}}>
            
            <svg className="menu-item-link-icon icon-members">
                <use xlinkHref="#svg-members"></use>
            </svg>
            
            Members
            </a>
            
        </li>
        

        
        <li className="menu-item">
            
            <a className="menu-item-link" onClick={()=>{
                dispatch(setLoading({
                    status: 'isLoading'
                }))
                navigate("badges")}}>
            
            <svg className="menu-item-link-icon icon-badges">
                <use xlinkHref="#svg-badges"></use>
            </svg>
            
            Badges
            </a>
            
        </li>
        

        
        <li className="menu-item">
            
            <a className="menu-item-link" onClick={()=>{
                dispatch(setLoading({
                    status: 'isLoading'
                }))
                navigate("quests")}}>
            
            <svg className="menu-item-link-icon icon-quests">
                <use xlinkHref="#svg-quests"></use>
            </svg>
            
            Quests
            </a>
            
        </li>
        

        
        <li className="menu-item">
            
            <a className="menu-item-link" onClick={()=>{
                dispatch(setLoading({
                    status: 'isLoading'
                }))
                navigate("streams")}}>
            
            <svg className="menu-item-link-icon icon-streams">
                <use xlinkHref="#svg-streams"></use>
            </svg>
            
            Streams
            </a>
            
        </li>
        

        
        <li className="menu-item">
            
            <a className="menu-item-link" onClick={()=>{
                dispatch(setLoading({
                    status: 'isLoading'
                }))
                navigate("events")}}>
            
            <svg className="menu-item-link-icon icon-events">
                <use xlinkHref="#svg-events"></use>
            </svg>
            
            Events
            </a>
            
        </li>
        

        
        <li className="menu-item">
            
            <a className="menu-item-link" onClick={()=>{
                dispatch(setLoading({
                    status: 'isLoading'
                }))
                navigate("forums")}}>
            
            <svg className="menu-item-link-icon icon-forums">
                <use xlinkHref="#svg-forums"></use>
            </svg>
            
            Forums
            </a>
            
        </li>
        

        
        <li className="menu-item">
            
            <a className="menu-item-link" onClick={()=>{
                dispatch(setLoading({
                    status: 'isLoading'
                }))
                navigate("marketplace")}}>
            
            <svg className="menu-item-link-icon icon-marketplace">
                <use xlinkHref="#svg-marketplace"></use>
            </svg>
            
            Marketplace
            </a>
            
        </li>
        
        </ul>
    
        <p className="navigation-widget-section-title">My Profile</p>
    
        <a className="navigation-widget-section-link" onClick={()=>{
            dispatch(setLoading({
                status: 'isLoading'
            }))
            navigate("hub-profile-info")}}>Profile Info</a>
    

    
        <a className="navigation-widget-section-link" onClick={()=>{
            dispatch(setLoading({
                status: 'isLoading'
            }))
            navigate("hub-profile-social")}}>Social &amp; Stream</a>
    

    
        <a className="navigation-widget-section-link" onClick={()=>{
            dispatch(setLoading({
                status: 'isLoading'
            }))
            navigate("hub-profile-notifications")}}>Notifications</a>
    

    
        <a className="navigation-widget-section-link" onClick={()=>{
            dispatch(setLoading({
                status: 'isLoading'
            }))
            navigate("hub-profile-messages")}}>Messages</a>
    

    
        <a className="navigation-widget-section-link" onClick={()=>{
            dispatch(setLoading({
                status: 'isLoading'
            }))
            navigate("hub-profile-requests")}}>Friend Requests</a>
    

    
        <p className="navigation-widget-section-title">Account</p>
    

    
        <a className="navigation-widget-section-link" onClick={()=>{
            dispatch(setLoading({
                status: 'isLoading'
            }))
            navigate("hub-account-info")}}>Account Info</a>
    

    
        <a className="navigation-widget-section-link" onClick={()=>{
            dispatch(setLoading({
                status: 'isLoading'
            }))
            navigate("hub-account-password")}}>Change Password</a>
        

        
        <a className="navigation-widget-section-link" onClick={()=>{
            dispatch(setLoading({
                status: 'isLoading'
            }))
            navigate("hub-account-settings")}}>General Settings</a>
        

        
        <p className="navigation-widget-section-title">Groups</p>
        

        
        <a className="navigation-widget-section-link" onClick={()=>{
            dispatch(setLoading({
                status: 'isLoading'
            }))
            navigate("hub-group-management")}}>Manage Groups</a>
        

        
        <a className="navigation-widget-section-link" onClick={()=>{
            dispatch(setLoading({
                status: 'isLoading'
            }))
            navigate("hub-group-invitations")}}>Invitations</a>
        

        
        <p className="navigation-widget-section-title">My Store</p>
        

        
        <a className="navigation-widget-section-link" onClick={()=>{
            dispatch(setLoading({
                status: 'isLoading'
            }))
            navigate("hub-store-account")}}>My Account <span className="highlighted">$250,32</span></a>
        

        
        <a className="navigation-widget-section-link" onClick={()=>{
            dispatch(setLoading({
                status: 'isLoading'
            }))
            navigate("hub-store-statement")}}>Sales Statement</a>
        

        
        <a className="navigation-widget-section-link" onClick={()=>{
            dispatch(setLoading({
                status: 'isLoading'
            }))
            navigate("hub-store-items")}}>Manage Items</a>
        

        
        <a className="navigation-widget-section-link" onClick={()=>{
            dispatch(setLoading({
                status: 'isLoading'
            }))
            navigate("hub-store-downloads")}}>Downloads</a>
        

        
        <p className="navigation-widget-section-title">Main Links</p>
        

        
        <a className="navigation-widget-section-link" onClick={()=>{
            dispatch(setLoading({
                status: 'isLoading'
            }))
            navigate(0)}}>Home</a>
        

        
        <a className="navigation-widget-section-link" onClick={()=>{
            dispatch(setLoading({
                status: 'isLoading'
            }))
            navigate(0)}}>Careers</a>
        

        
        <a className="navigation-widget-section-link" onClick={()=>{
            dispatch(setLoading({
                status: 'isLoading'
            }))
            navigate(0)}}>Faqs</a>
        

        
        <a className="navigation-widget-section-link" onClick={()=>{
            dispatch(setLoading({
                status: 'isLoading'
            }))
            navigate(0)}}>About Us</a>
        

        
        <a className="navigation-widget-section-link" onClick={()=>{
            dispatch(setLoading({
                status: 'isLoading'
            }))
            navigate(0)}}>Our Blog</a>
        

        
        <a className="navigation-widget-section-link" onClick={()=>{
            dispatch(setLoading({
                status: 'isLoading'
            }))
            navigate(0)}}>Contact Us</a>
        

        
            <a className="navigation-widget-section-link" onClick={()=>{
                dispatch(setLoading({
                    status: 'isLoading'
                }))
                navigate(0)}}>Privacy Policy</a>
        
    </nav>
  )
}

export default NavigationMobile