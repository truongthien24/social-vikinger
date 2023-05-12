import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
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
import { useDispatch } from 'react-redux'
import { setLoading } from '../../../redux/action/homeAction'

const LayoutPrivate = ({ children }) => {

  const [isNavigationWidget, setIsNavigationWidget] = useState(false)

  const handleNavigationWidget = () => {
    setIsNavigationWidget(!isNavigationWidget);
  }

  useEffect(() => {
    let script = document.createElement("script");
    let script12 = document.createElement("script");
    script.src = "/js/utils/app.js";
    script12.src = "/js/content/content.js";
    script.async = true;
    script12.async = true;
    document.body.appendChild(script);
    document.body.appendChild(script12);
  }, [])


  const dispatch = useDispatch();

  const navigate = useNavigate();



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
            
            <a className="action-list-item" onClick={()=>{
              dispatch(setLoading({
                status: 'isLoading'
              }))
              navigate("marketplace-cart")}}>
              
              <svg className="action-list-item-icon icon-shopping-bag">
                <use xlinkHref="#svg-shopping-bag"></use>
              </svg>
              
            </a>
            

            
            <a className="action-list-item" onClick={()=>{
              dispatch(setLoading({
                status: 'isLoading'
              }))
              navigate("hub-profile-requests")}}>
              
              <svg className="action-list-item-icon icon-friend">
                <use xlinkHref="#svg-friend"></use>
              </svg>
              
            </a>
            

            
            <a className="action-list-item" onClick={()=>{
              dispatch(setLoading({
                status: 'isLoading'
              }))
              navigate("hub-profile-messages")}}>
              
              <svg className="action-list-item-icon icon-messages">
                <use xlinkHref="#svg-messages"></use>
              </svg>
              
            </a>
            

            
            <a className="action-list-item unread" onClick={()=>{
              dispatch(setLoading({
                status: 'isLoading'
              }))
              navigate("hub-profile-notifications")}}>
              
              <svg className="action-list-item-icon icon-notification">
                <use xlinkHref="#svg-notification"></use>
              </svg>
              
            </a>
            
          </div>
          

          
          <a className="action-item-wrap" onClick={()=>{
            dispatch(setLoading({
              status: 'isLoading'
            }))
            navigate("hub-profile-info")}}>
            
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
