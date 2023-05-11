import React, { useEffect } from 'react'

const ChatWidgetMessages = () => {

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
    )
}

export default ChatWidgetMessages