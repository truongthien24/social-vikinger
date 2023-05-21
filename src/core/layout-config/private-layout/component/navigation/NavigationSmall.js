import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoading } from '../../../../../redux/action/homeAction';
import MenuItem from './component/MenuItem';

const NavigationSmall = (props) => {
    const {isNavigationWidget} = props;

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const data = [
        {
            path: 'newsfeed',
            icon: (<svg className="menu-item-link-icon icon-newsfeed">
                <use xlinkHref="#svg-newsfeed"></use>
            </svg>),
            title: 'Newsfeed',
        },
        {
            path: 'overview',
            icon: (<svg className="menu-item-link-icon icon-overview">
                <use xlinkHref="#svg-overview"></use>
            </svg>),
            title: 'Overview',
        },
        {
            path: 'groups',
            icon: (<svg className="menu-item-link-icon icon-group">
                <use xlinkHref="#svg-group"></use>
            </svg>),
            title: 'Groups',
        },
        {
            path: 'members',
            icon: (<svg className="menu-item-link-icon icon-members">
                <use xlinkHref="#svg-members"></use>
            </svg>),
            title: 'Members',
        },
        {
            path: 'badges',
            icon: (<svg className="menu-item-link-icon icon-badges">
                <use xlinkHref="#svg-badges"></use>
            </svg>),
            title: 'Badges',
        },
        {
            path: 'quests',
            icon: (<svg className="menu-item-link-icon icon-quests">
                <use xlinkHref="#svg-quests"></use>
            </svg>),
            title: 'Quests',
        },
        {
            path: 'streams',
            icon: (<svg className="menu-item-link-icon icon-streams">
                <use xlinkHref="#svg-streams"></use>
            </svg>),
            title: 'Streams',
        },
        {
            path: 'events',
            icon: ( <svg className="menu-item-link-icon icon-events">
                <use xlinkHref="#svg-events"></use>
            </svg>),
            title: 'Events',
        },
        {
            path: 'forums',
            icon: (<svg className="menu-item-link-icon icon-forums">
                <use xlinkHref="#svg-forums"></use>
            </svg>),
            title: 'Forums',
        },
        {
            path: 'marketplace',
            icon: (<svg className="menu-item-link-icon icon-marketplace">
                <use xlinkHref="#svg-marketplace"></use>
            </svg>),
            title: 'Marketplace',
        },
    ]

    const renderMenu = () => {
        return data?.map((menu, index)=> {
            return <MenuItem
                data={menu}
                key={index}
            />
        })
    }


  return (
    <nav id="navigation-widget-small" className={`navigation-widget navigation-widget-desktop closed sidebar left ${isNavigationWidget ? 'hidden' : 'delayed'}`}>
        
        <a className="user-avatar small no-outline online" onClick={()=> {
            dispatch(setLoading({
                status: 'isLoading'
            }))
            navigate({
                pathname: '/profile-timeline',
                search: `?id=${JSON.parse(localStorage.getItem('profileId'))}`
            })
        }}>
        
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

        <ul className="menu small">
            {renderMenu()}
        </ul>
    
    </nav>
  )
}

export default NavigationSmall