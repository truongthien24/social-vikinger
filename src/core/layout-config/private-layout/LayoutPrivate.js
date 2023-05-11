import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PopupEventCreate from '../../../page/private/events/component/PopupEventCreate'
import PopupEventInformation from '../../../page/private/events/component/PopupEventInformation'
import PopupBox from '../../../page/private/profile/profilePhotos/component/PopupBox'
import PopupPicture from '../../../page/private/profile/profilePhotos/component/PopupPicture'
import PopupVideo from '../../../page/private/profile/profileVideo/component/PopupVideo'
import ChatWidgetMessage from './component/chat-widget-message/ChatWidgetMessage'
import ChatWidgetMessages from './component/chat-widget-messages/ChatWidgetMessages'
import HeaderPrivate from './component/headerPrivate/HeaderPrivate'
import NavigationDesktop from './component/navigation/NavigationDesktop'
import NavigationMobile from './component/navigation/NavigationMobile'
import NavigationSmall from './component/navigation/NavigationSmall'

const LayoutPrivate = ({ children }) => {

  const [isNavigationWidget, setIsNavigationWidget] = useState(false)

  const handleNavigationWidget = () => {
    setIsNavigationWidget(!isNavigationWidget);
  }


  return (
    <>
      <NavigationSmall
        isNavigationWidget={isNavigationWidget}
      />
      
      <NavigationDesktop
        isNavigationWidget={isNavigationWidget}
      />

      <NavigationMobile/>

      
      <ChatWidgetMessages/>

      <ChatWidgetMessage/>
    
      
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
      <PopupEventCreate/>
      <PopupEventInformation/>
    </>
  )
}

export default LayoutPrivate
