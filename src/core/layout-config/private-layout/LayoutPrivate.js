import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import HeaderPrivate from './component/headerPrivate/HeaderPrivate'
import ProfileHeader from './component/profileHeader/ProfileHeader'
import ProfileNavigation from './component/profileNavigation/ProfileNavigation'

const LayoutPrivate = ({ children }) => {

  const {id} = useParams();

  useEffect(()=> {
  })

  return (
    <>
         
      <nav id="navigation-widget-small" className="navigation-widget navigation-widget-desktop closed sidebar left delayed">
        
        <a className="user-avatar small no-outline online" href="profile-timeline.html">
          
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
          
          <li className="menu-item">
            
            <a className="menu-item-link text-tooltip-tfr" href="newsfeed.html" data-title="Newsfeed">
              
              <svg className="menu-item-link-icon icon-newsfeed">
                <use xlinkHref="#svg-newsfeed"></use>
              </svg>
              
            </a>
            
          </li>
          

          
          <li className="menu-item">
            
            <a className="menu-item-link text-tooltip-tfr" href="overview.html" data-title="Overview">
              
              <svg className="menu-item-link-icon icon-overview">
                <use xlinkHref="#svg-overview"></use>
              </svg>
              
            </a>
            
          </li>
          

          
          <li className="menu-item">
            
            <a className="menu-item-link text-tooltip-tfr" href="groups.html" data-title="Groups">
              
              <svg className="menu-item-link-icon icon-group">
                <use xlinkHref="#svg-group"></use>
              </svg>
              
            </a>
            
          </li>
          

          
          <li className="menu-item">
            
            <a className="menu-item-link text-tooltip-tfr" href="members.html" data-title="Members">
              
              <svg className="menu-item-link-icon icon-members">
                <use xlinkHref="#svg-members"></use>
              </svg>
              
            </a>
            
          </li>
          

          
          <li className="menu-item">
            
            <a className="menu-item-link text-tooltip-tfr" href="badges.html" data-title="Badges">
              
              <svg className="menu-item-link-icon icon-badges">
                <use xlinkHref="#svg-badges"></use>
              </svg>
              
            </a>
            
          </li>
          

          
          <li className="menu-item">
            
            <a className="menu-item-link text-tooltip-tfr" href="quests.html" data-title="Quests">
              
              <svg className="menu-item-link-icon icon-quests">
                <use xlinkHref="#svg-quests"></use>
              </svg>
              
            </a>
            
          </li>
          

          
          <li className="menu-item">
            
            <a className="menu-item-link text-tooltip-tfr" href="streams.html" data-title="Streams">
              
              <svg className="menu-item-link-icon icon-streams">
                <use xlinkHref="#svg-streams"></use>
              </svg>
              
            </a>
            
          </li>
          

          
          <li className="menu-item">
            
            <a className="menu-item-link text-tooltip-tfr" href="events.html" data-title="Events">
              
              <svg className="menu-item-link-icon icon-events">
                <use xlinkHref="#svg-events"></use>
              </svg>
              
            </a>
            
          </li>
          

          
          <li className="menu-item">
            
            <a className="menu-item-link text-tooltip-tfr" href="forums.html" data-title="Forums">
              
              <svg className="menu-item-link-icon icon-forums">
                <use xlinkHref="#svg-forums"></use>
              </svg>
              
            </a>
            
          </li>
          

          
          <li className="menu-item">
            
            <a className="menu-item-link text-tooltip-tfr" href="marketplace.html" data-title="Marketplace">
              
              <svg className="menu-item-link-icon icon-marketplace">
                <use xlinkHref="#svg-marketplace"></use>
              </svg>
              
            </a>
            
          </li>
          
        </ul>
        
      </nav>
      

      
      <nav id="navigation-widget" className="navigation-widget navigation-widget-desktop sidebar left hidden" data-simplebar>
        
        <figure className="navigation-widget-cover liquid">
          <img src="img/cover/01.jpg" alt="cover-01"/>
        </figure>
        

        
        <div className="user-short-description">
          
          <a className="user-short-description-avatar user-avatar medium" href="profile-timeline.html">
            
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
            
          </a>
          

          
          <p className="user-short-description-title"><a href="profile-timeline.html">Marina Valentine</a></p>
          

          
          <p className="user-short-description-text"><a href="#">www.gamehuntress.com</a></p>
          
        </div>
        

        
        <div className="badge-list small">
          
          <div className="badge-item">
            <img src="img/badge/gold-s.png" alt="badge-gold-s"/>
          </div>
          

          
          <div className="badge-item">
            <img src="img/badge/age-s.png" alt="badge-age-s"/>
          </div>
          

          
          <div className="badge-item">
            <img src="img/badge/caffeinated-s.png" alt="badge-caffeinated-s"/>
          </div>
          

          
          <div className="badge-item">
            <img src="img/badge/warrior-s.png" alt="badge-warrior-s"/>
          </div>
          

          
          <a className="badge-item" href="profile-badges.html">
            <img src="img/badge/blank-s.png" alt="badge-blank-s"/>
            
            <p className="badge-item-text">+9</p>
            
          </a>
          
        </div>
        

        
        <div className="user-stats">
          
          <div className="user-stat">
            
            <p className="user-stat-title">930</p>
            

            
            <p className="user-stat-text">posts</p>
            
          </div>
          

          
          <div className="user-stat">
            
            <p className="user-stat-title">82</p>
            

            
            <p className="user-stat-text">friends</p>
            
          </div>
          

          
          <div className="user-stat">
            
            <p className="user-stat-title">5.7k</p>
            

            
            <p className="user-stat-text">visits</p>
            
          </div>
          
        </div>
        

        
        <ul className="menu">
          
          <li className="menu-item">
            
            <a className="menu-item-link" href="newsfeed.html">
              
              <svg className="menu-item-link-icon icon-newsfeed">
                <use xlinkHref="#svg-newsfeed"></use>
              </svg>
              
              Newsfeed
            </a>
            
          </li>
          

          
          <li className="menu-item">
            
            <a className="menu-item-link" href="overview.html">
              
              <svg className="menu-item-link-icon icon-overview">
                <use xlinkHref="#svg-overview"></use>
              </svg>
              
              Overview
            </a>
            
          </li>
          

          
          <li className="menu-item">
            
            <a className="menu-item-link" href="groups.html">
              
              <svg className="menu-item-link-icon icon-group">
                <use xlinkHref="#svg-group"></use>
              </svg>
              
              Groups
            </a>
            
          </li>
          

          
          <li className="menu-item">
            
            <a className="menu-item-link" href="members.html">
              
              <svg className="menu-item-link-icon icon-members">
                <use xlinkHref="#svg-members"></use>
              </svg>
              
              Members
            </a>
            
          </li>
          

          
          <li className="menu-item">
            
            <a className="menu-item-link" href="badges.html">
              
              <svg className="menu-item-link-icon icon-badges">
                <use xlinkHref="#svg-badges"></use>
              </svg>
              
              Badges
            </a>
            
          </li>
          

          
          <li className="menu-item">
            
            <a className="menu-item-link" href="quests.html">
              
              <svg className="menu-item-link-icon icon-quests">
                <use xlinkHref="#svg-quests"></use>
              </svg>
              
              Quests
            </a>
            
          </li>
          

          
          <li className="menu-item">
            
            <a className="menu-item-link" href="streams.html">
              
              <svg className="menu-item-link-icon icon-streams">
                <use xlinkHref="#svg-streams"></use>
              </svg>
              
              Streams
            </a>
            
          </li>
          

          
          <li className="menu-item">
            
            <a className="menu-item-link" href="events.html">
              
              <svg className="menu-item-link-icon icon-events">
                <use xlinkHref="#svg-events"></use>
              </svg>
              
              Events
            </a>
            
          </li>
          

          
          <li className="menu-item">
            
            <a className="menu-item-link" href="forums.html">
              
              <svg className="menu-item-link-icon icon-forums">
                <use xlinkHref="#svg-forums"></use>
              </svg>
              
              Forums
            </a>
            
          </li>
          

          
          <li className="menu-item">
            
            <a className="menu-item-link" href="marketplace.html">
              
              <svg className="menu-item-link-icon icon-marketplace">
                <use xlinkHref="#svg-marketplace"></use>
              </svg>
              
              Marketplace
            </a>
            
          </li>
          
        </ul>
        
      </nav>
      

      
      <nav id="navigation-widget-mobile" className="navigation-widget navigation-widget-mobile sidebar left hidden" data-simplebar>
        
        <div className="navigation-widget-close-button">
          
          <svg className="navigation-widget-close-button-icon icon-back-arrow">
            <use xlinkHref="#svg-back-arrow"></use>
          </svg>
          
        </div>
        

        
        <div className="navigation-widget-info-wrap">
          
          <div className="navigation-widget-info">
            
            <a className="user-avatar small no-outline" href="profile-timeline.html">
              
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
            

            
            <p className="navigation-widget-info-title"><a href="profile-timeline.html">Marina Valentine</a></p>
            

            
            <p className="navigation-widget-info-text">Welcome Back!</p>
            
          </div>
          

          
          <p className="navigation-widget-info-button button small secondary">Logout</p>
          
        </div>
        

        
        <p className="navigation-widget-section-title">Sections</p>
        

        
        <ul className="menu">
          
          <li className="menu-item">
            
            <a className="menu-item-link" href="newsfeed.html">
              
              <svg className="menu-item-link-icon icon-newsfeed">
                <use xlinkHref="#svg-newsfeed"></use>
              </svg>
              
              Newsfeed
            </a>
            
          </li>
          

          
          <li className="menu-item">
            
            <a className="menu-item-link" href="overview.html">
              
              <svg className="menu-item-link-icon icon-overview">
                <use xlinkHref="#svg-overview"></use>
              </svg>
              
              Overview
            </a>
            
          </li>
          

          
          <li className="menu-item">
            
            <a className="menu-item-link" href="groups.html">
              
              <svg className="menu-item-link-icon icon-group">
                <use xlinkHref="#svg-group"></use>
              </svg>
              
              Groups
            </a>
            
          </li>
          

          
          <li className="menu-item">
            
            <a className="menu-item-link" href="members.html">
              
              <svg className="menu-item-link-icon icon-members">
                <use xlinkHref="#svg-members"></use>
              </svg>
              
              Members
            </a>
            
          </li>
          

          
          <li className="menu-item">
            
            <a className="menu-item-link" href="badges.html">
              
              <svg className="menu-item-link-icon icon-badges">
                <use xlinkHref="#svg-badges"></use>
              </svg>
              
              Badges
            </a>
            
          </li>
          

          
          <li className="menu-item">
            
            <a className="menu-item-link" href="quests.html">
              
              <svg className="menu-item-link-icon icon-quests">
                <use xlinkHref="#svg-quests"></use>
              </svg>
              
              Quests
            </a>
            
          </li>
          

          
          <li className="menu-item">
            
            <a className="menu-item-link" href="streams.html">
              
              <svg className="menu-item-link-icon icon-streams">
                <use xlinkHref="#svg-streams"></use>
              </svg>
              
              Streams
            </a>
            
          </li>
          

          
          <li className="menu-item">
            
            <a className="menu-item-link" href="events.html">
              
              <svg className="menu-item-link-icon icon-events">
                <use xlinkHref="#svg-events"></use>
              </svg>
              
              Events
            </a>
            
          </li>
          

          
          <li className="menu-item">
            
            <a className="menu-item-link" href="forums.html">
              
              <svg className="menu-item-link-icon icon-forums">
                <use xlinkHref="#svg-forums"></use>
              </svg>
              
              Forums
            </a>
            
          </li>
          

          
          <li className="menu-item">
            
            <a className="menu-item-link" href="marketplace.html">
              
              <svg className="menu-item-link-icon icon-marketplace">
                <use xlinkHref="#svg-marketplace"></use>
              </svg>
              
              Marketplace
            </a>
            
          </li>
          
        </ul>
        

        
        <p className="navigation-widget-section-title">My Profile</p>
        

        
        <a className="navigation-widget-section-link" href="hub-profile-info.html">Profile Info</a>
        

        
        <a className="navigation-widget-section-link" href="hub-profile-social.html">Social &amp; Stream</a>
        

        
        <a className="navigation-widget-section-link" href="hub-profile-notifications.html">Notifications</a>
        

        
        <a className="navigation-widget-section-link" href="hub-profile-messages.html">Messages</a>
        

        
        <a className="navigation-widget-section-link" href="hub-profile-requests.html">Friend Requests</a>
        

        
        <p className="navigation-widget-section-title">Account</p>
        

        
        <a className="navigation-widget-section-link" href="hub-account-info.html">Account Info</a>
        

        
        <a className="navigation-widget-section-link" href="hub-account-password.html">Change Password</a>
        

        
        <a className="navigation-widget-section-link" href="hub-account-settings.html">General Settings</a>
        

        
        <p className="navigation-widget-section-title">Groups</p>
        

        
        <a className="navigation-widget-section-link" href="hub-group-management.html">Manage Groups</a>
        

        
        <a className="navigation-widget-section-link" href="hub-group-invitations.html">Invitations</a>
        

        
        <p className="navigation-widget-section-title">My Store</p>
        

        
        <a className="navigation-widget-section-link" href="hub-store-account.html">My Account <span className="highlighted">$250,32</span></a>
        

        
        <a className="navigation-widget-section-link" href="hub-store-statement.html">Sales Statement</a>
        

        
        <a className="navigation-widget-section-link" href="hub-store-items.html">Manage Items</a>
        

        
        <a className="navigation-widget-section-link" href="hub-store-downloads.html">Downloads</a>
        

        
        <p className="navigation-widget-section-title">Main Links</p>
        

        
        <a className="navigation-widget-section-link" href="#">Home</a>
        

        
        <a className="navigation-widget-section-link" href="#">Careers</a>
        

        
        <a className="navigation-widget-section-link" href="#">Faqs</a>
        

        
        <a className="navigation-widget-section-link" href="#">About Us</a>
        

        
        <a className="navigation-widget-section-link" href="#">Our Blog</a>
        

        
        <a className="navigation-widget-section-link" href="#">Contact Us</a>
        

        
        <a className="navigation-widget-section-link" href="#">Privacy Policy</a>
        
      </nav>
      

      
      <aside id="chat-widget-messages" className="chat-widget closed sidebar right">
        
        <div className="chat-widget-messages" data-simplebar>
          
          <div className="chat-widget-message">
            
            <div className="user-status">
              
              <div className="user-status-avatar">
                
                <div className="user-avatar small no-outline online">
                  
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
                
              </div>
              
          
              
              <p className="user-status-title"><span className="bold">Nick Grissom</span></p>
              
          
              
              <p className="user-status-text small">Can you stream the new game?</p>
              
          
              
              <p className="user-status-timestamp floaty">2hrs</p>
              
            </div>
            
          </div>
          

          
          <div className="chat-widget-message">
            
            <div className="user-status">
              
              <div className="user-status-avatar">
                
                <div className="user-avatar small no-outline online">
                  
                  <div className="user-avatar-content">
                    
                    <div className="hexagon-image-30-32" data-src="img/avatar/20.jpg"></div>
                    
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
                    
              
                    
                    <p className="user-avatar-badge-text">9</p>
                    
                  </div>
                  
                </div>
                
              </div>
              
          
              
              <p className="user-status-title"><span className="bold">Matt Parker</span></p>
              
          
              
              <p className="user-status-text small">Can you stream the new game?</p>
              
          
              
              <p className="user-status-timestamp floaty">2hrs</p>
              
            </div>
            
          </div>
          

          
          <div className="chat-widget-message">
            
            <div className="user-status">
              
              <div className="user-status-avatar">
                
                <div className="user-avatar small no-outline away">
                  
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
                
              </div>
              
          
              
              <p className="user-status-title"><span className="bold">Neko Bebop</span></p>
              
          
              
              <p className="user-status-text small">Awesome! I'll see you there!</p>
              
          
              
              <p className="user-status-timestamp floaty">54mins</p>
              
            </div>
            
          </div>
          

          
          <div className="chat-widget-message">
            
            <div className="user-status">
              
              <div className="user-status-avatar">
                
                <div className="user-avatar small no-outline offline">
                  
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
                
              </div>
              
          
              
              <p className="user-status-title"><span className="bold">Bearded Wonder</span></p>
              
          
              
              <p className="user-status-text small">Great! Then we'll meet with them at...</p>
              
          
              
              <p className="user-status-timestamp floaty">2hrs</p>
              
            </div>
            
          </div>
          

          
          <div className="chat-widget-message">
            
            <div className="user-status">
              
              <div className="user-status-avatar">
                
                <div className="user-avatar small no-outline online">
                  
                  <div className="user-avatar-content">
                    
                    <div className="hexagon-image-30-32" data-src="img/avatar/09.jpg"></div>
                    
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
                    
              
                    
                    <p className="user-avatar-badge-text">27</p>
                    
                  </div>
                  
                </div>
                
              </div>
              
          
              
              <p className="user-status-title"><span className="bold">Sandra Strange</span></p>
              
          
              
              <p className="user-status-text small">Can you stream the new game?</p>
              
          
              
              <p className="user-status-timestamp floaty">2hrs</p>
              
            </div>
            
          </div>
          

          
          <div className="chat-widget-message">
            
            <div className="user-status">
              
              <div className="user-status-avatar">
                
                <div className="user-avatar small no-outline online">
                  
                  <div className="user-avatar-content">
                    
                    <div className="hexagon-image-30-32" data-src="img/avatar/12.jpg"></div>
                    
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
                    
              
                    
                    <p className="user-avatar-badge-text">10</p>
                    
                  </div>
                  
                </div>
                
              </div>
              
          
              
              <p className="user-status-title"><span className="bold">James Murdock</span></p>
              
          
              
              <p className="user-status-text small">Great! Then we'll meet with them at...</p>
              
          
              
              <p className="user-status-timestamp floaty">7hrs</p>
              
            </div>
            
          </div>
          

          
          <div className="chat-widget-message">
            
            <div className="user-status">
              
              <div className="user-status-avatar">
                
                <div className="user-avatar small no-outline away">
                  
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
                
              </div>
              
          
              
              <p className="user-status-title"><span className="bold">The Green Goo</span></p>
              
          
              
              <p className="user-status-text small">Can you stream the new game?</p>
              
          
              
              <p className="user-status-timestamp floaty">2hrs</p>
              
            </div>
            
          </div>
          

          
          <div className="chat-widget-message">
            
            <div className="user-status">
              
              <div className="user-status-avatar">
                
                <div className="user-avatar small no-outline online">
                  
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
                
              </div>
              
          
              
              <p className="user-status-title"><span className="bold">Sarah Diamond</span></p>
              
          
              
              <p className="user-status-text small">I'm sending you the latest news of...</p>
              
          
              
              <p className="user-status-timestamp floaty">16hrs</p>
              
            </div>
            
          </div>
          

          
          <div className="chat-widget-message">
            
            <div className="user-status">
              
              <div className="user-status-avatar">
                
                <div className="user-avatar small no-outline offline">
                  
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
                
              </div>
              
          
              
              <p className="user-status-title"><span className="bold">Destroy Dex</span></p>
              
          
              
              <p className="user-status-text small">Can you stream the new game?</p>
              
          
              
              <p className="user-status-timestamp floaty">2hrs</p>
              
            </div>
            
          </div>
          

          
          <div className="chat-widget-message">
            
            <div className="user-status">
              
              <div className="user-status-avatar">
                
                <div className="user-avatar small no-outline online">
                  
                  <div className="user-avatar-content">
                    
                    <div className="hexagon-image-30-32" data-src="img/avatar/08.jpg"></div>
                    
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
                    
              
                    
                    <p className="user-avatar-badge-text">4</p>
                    
                  </div>
                  
                </div>
                
              </div>
              
          
              
              <p className="user-status-title"><span className="bold">Damian Greyson</span></p>
              
          
              
              <p className="user-status-text small">Can you stream the new game?</p>
              
          
              
              <p className="user-status-timestamp floaty">2hrs</p>
              
            </div>
            
          </div>
          

          
          <div className="chat-widget-message">
            
            <div className="user-status">
              
              <div className="user-status-avatar">
                
                <div className="user-avatar small no-outline online">
                  
                  <div className="user-avatar-content">
                    
                    <div className="hexagon-image-30-32" data-src="img/avatar/14.jpg"></div>
                    
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
                    
              
                    
                    <p className="user-avatar-badge-text">3</p>
                    
                  </div>
                  
                </div>
                
              </div>
              
          
              
              <p className="user-status-title"><span className="bold">Paul Lang</span></p>
              
          
              
              <p className="user-status-text small">Can you stream the new game?</p>
              
          
              
              <p className="user-status-timestamp floaty">2hrs</p>
              
            </div>
            
          </div>
          
        </div>
        

        
        <form className="chat-widget-form">
          
          <div className="interactive-input small">
            <input type="text" id="chat-widget-search" name="chat_widget_search" placeholder="Search Messages..."/>
            
            <div className="interactive-input-icon-wrap">
              
              <svg className="interactive-input-icon icon-magnifying-glass">
                <use xlinkHref="#svg-magnifying-glass"></use>
              </svg>
              
            </div>
            

            
            <div className="interactive-input-action">
              
              <svg className="interactive-input-action-icon icon-cross-thin">
                <use xlinkHref="#svg-cross-thin"></use>
              </svg>
              
            </div>
            
          </div>
          
        </form>
        

        
        <div className="chat-widget-button">
          
          <div className="chat-widget-button-icon">
            
            <div className="burger-icon">
              
              <div className="burger-icon-bar"></div>
              

              
              <div className="burger-icon-bar"></div>
              

              
              <div className="burger-icon-bar"></div>
              
            </div>
            
          </div>
          

          
          <p className="chat-widget-button-text">Messages / Chat</p>
          
        </div>
        
      </aside>
      

      
      <aside id="chat-widget-message" className="chat-widget chat-widget-overlay hidden sidebar right">
        
        <div className="chat-widget-header">
          
          <div className="chat-widget-close-button">
            
            <svg className="chat-widget-close-button-icon icon-back-arrow">
              <use xlinkHref="#svg-back-arrow"></use>
            </svg>
            
          </div>
          

          
          <div className="user-status">
            
            <div className="user-status-avatar">
              
              <div className="user-avatar small no-outline online">
                
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
              
            </div>
            

            
            <p className="user-status-title"><span className="bold">Nick Grissom</span></p>
            

            
            <p className="user-status-tag online">Online</p>
            
          </div>
          
        </div>
        

        
        <div className="chat-widget-conversation" data-simplebar>
          
          <div className="chat-widget-speaker left">
            
            <div className="chat-widget-speaker-avatar">
              
              <div className="user-avatar tiny no-border">
                
                <div className="user-avatar-content">
                  
                  <div className="hexagon-image-24-26" data-src="img/avatar/03.jpg"></div>
                  
                </div>
                
              </div>
              
            </div>
            

            
            <p className="chat-widget-speaker-message">Hi Marina! It's been a long time!</p>
            

            
            <p className="chat-widget-speaker-timestamp">Yesterday at 8:36PM</p>
            
          </div>
          

          
          <div className="chat-widget-speaker right">
            
            <p className="chat-widget-speaker-message">Hey Nick!</p>
            

            
            <p className="chat-widget-speaker-message">You're right, it's been a really long time! I think the last time we saw was at Neko's party</p>
            

            
            <p className="chat-widget-speaker-timestamp">10:05AM</p>
            
          </div>
          

          
          <div className="chat-widget-speaker left">
            
            <div className="chat-widget-speaker-avatar">
              
              <div className="user-avatar tiny no-border">
                
                <div className="user-avatar-content">
                  
                  <div className="hexagon-image-24-26" data-src="img/avatar/03.jpg"></div>
                  
                </div>
                
              </div>
              
            </div>
            

            
            <p className="chat-widget-speaker-message">Yeah! I remember now! The stream launch party</p>
            

            
            <p className="chat-widget-speaker-message">That reminds me that I wanted to ask you something</p>
            

            
            <p className="chat-widget-speaker-message">Can you stream the new game?</p>
            
          </div>
          
        </div>
        

        
        <form className="chat-widget-form">
          
          <div className="interactive-input small">
            <input type="text" id="chat-widget-message-text" name="chat_widget_message_text" placeholder="Write a message..."/>
            
            <div className="interactive-input-icon-wrap">
              
              <svg className="interactive-input-icon icon-send-message">
                <use xlinkHref="#svg-send-message"></use>
              </svg>
              
            </div>
            

            
            <div className="interactive-input-action">
              
              <svg className="interactive-input-action-icon icon-cross-thin">
                <use xlinkHref="#svg-cross-thin"></use>
              </svg>
              
            </div>
            
          </div>
          
        </form>
        
      </aside>
      

      <HeaderPrivate/>
      

      
      <aside className="floaty-bar">
        
        <div className="bar-actions">
          
          <div className="progress-stat">
            
            <div className="bar-progress-wrap">
              
              <p className="bar-progress-info">Next: <span className="bar-progress-text"></span></p>
              
            </div>
            
        
            
            <div id="logged-user-level-cp" className="progress-stat-bar"></div>
            
          </div>
          
        </div>
        

        
        <div className="bar-actions">
          
          <div className="action-list dark">
            
            <a className="action-list-item" href="marketplace-cart.html">
              
              <svg className="action-list-item-icon icon-shopping-bag">
                <use xlinkHref="#svg-shopping-bag"></use>
              </svg>
              
            </a>
            

            
            <a className="action-list-item" href="hub-profile-requests.html">
              
              <svg className="action-list-item-icon icon-friend">
                <use xlinkHref="#svg-friend"></use>
              </svg>
              
            </a>
            

            
            <a className="action-list-item" href="hub-profile-messages.html">
              
              <svg className="action-list-item-icon icon-messages">
                <use xlinkHref="#svg-messages"></use>
              </svg>
              
            </a>
            

            
            <a className="action-list-item unread" href="hub-profile-notifications.html">
              
              <svg className="action-list-item-icon icon-notification">
                <use xlinkHref="#svg-notification"></use>
              </svg>
              
            </a>
            
          </div>
          

          
          <a className="action-item-wrap" href="hub-profile-info.html">
            
            <div className="action-item dark">
              
              <svg className="action-item-icon icon-settings">
                <use xlinkHref="#svg-settings"></use>
              </svg>
              
            </div>
            
          </a>
          
        </div>
        
      </aside>
      

      
      <div className="content-grid">
        
        <ProfileHeader/>
        

        <ProfileNavigation/>
        
        {children}
        </div>
    </>
  )
}

export default LayoutPrivate
