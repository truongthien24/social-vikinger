import React, { useEffect } from 'react'

const ChatWidgetMessage = () => {

    useEffect(() => {
        let script = document.createElement("script");
        let script12 = document.createElement("script");
        script.src = "/js/utils/app.js";
        script12.src = "/js/sidebar/sidebar.js";
        script.async = true;
        script12.async = true;
        document.body.appendChild(script);
        document.body.appendChild(script12);
    }, [])

    return (
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
    )
}

export default ChatWidgetMessage