import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PopupBox from '../../../page/private/profile/profilePhotos/component/PopupBox'
import PopupPicture from '../../../page/private/profile/profilePhotos/component/PopupPicture'
import PopupVideo from '../../../page/private/profile/profileVideo/component/PopupVideo'
import HeaderPrivate from './component/headerPrivate/HeaderPrivate'
import NavigationDesktop from './component/navigation/NavigationDesktop'
import NavigationMobile from './component/navigation/NavigationMobile'
import ProfileHeader from './component/profileHeader/ProfileHeader'
import ProfileNavigation from './component/profileNavigation/ProfileNavigation'

const LayoutPrivate = ({ children }) => {

  const {id} = useParams();

  const [isNavigationWidget, setIsNavigationWidget] = useState(false)

  useEffect(()=> {
  })

  const handleNavigationWidget = () => {
    setIsNavigationWidget(!isNavigationWidget);
  }

  return (
    <>
         
      <nav id="navigation-widget-small" className={`navigation-widget navigation-widget-desktop closed sidebar left ${isNavigationWidget ? 'hidden' : 'delayed'}`}>
        
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
      
      
      <NavigationDesktop
        isNavigationWidget={isNavigationWidget}
      />
      

      <NavigationMobile/>
      
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
      
      <HeaderPrivate
        setIsNavigationWidget={handleNavigationWidget}
      />
      
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

      {children}

      <PopupBox/>
      <PopupPicture/>
      <PopupVideo/>
    </>
  )
}

export default LayoutPrivate
