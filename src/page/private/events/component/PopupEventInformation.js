import React from 'react'

const PopupEventInformation = () => {
  return (
    <div className="popup-event popup-event-information">
        <div className="popup-close-button popup-event-information-trigger">
            <svg className="popup-close-button-icon icon-cross">
                <use xlinkHref="#svg-cross"></use>
            </svg>
        </div>

        <figure className="popup-event-cover liquid">
            <img src="img/cover/33.jpg" alt="cover-33"/>
        </figure>

        <div className="popup-event-info">
        <p className="popup-event-title">CosWorld 2019 After Party</p>

        <div className="decorated-feature-list">
            <div className="decorated-feature">
            <svg className="decorated-feature-icon icon-events">
                <use xlinkHref="#svg-events"></use>
            </svg>

            <div className="decorated-feature-info">
                <p className="decorated-feature-title">Sunday, August 26th - 2019</p>

                <p className="decorated-feature-text">8:30 AM</p>
            </div>
            </div>

            <div className="decorated-feature">
            <svg className="decorated-feature-icon icon-pin">
                <use xlinkHref="#svg-pin"></use>
            </svg>

            <div className="decorated-feature-info">
                <p className="decorated-feature-title">CosWorld Arena</p>

                <p className="decorated-feature-text">Alchemists Avenue 310 - NY 10001 New York - USA</p>
            </div>
            </div>

            <div className="decorated-feature">
            <svg className="decorated-feature-icon icon-ticket">
                <use xlinkHref="#svg-ticket"></use>
            </svg>

            <div className="decorated-feature-info">
                <p className="decorated-feature-title">$12 U$D</p>

                <p className="decorated-feature-text">Entry Price</p>
            </div>
            </div>
        </div>

        <p className="popup-event-subtitle">Description</p>

        <p className="popup-event-text">Join us at the CosWorld after party! We'll be eating, drinking and having a great time exchanging experiences from the convention</p>

        <p className="popup-event-subtitle">Will Assist</p>

        <div className="user-avatar-list reverse medium">
            <div className="user-avatar smaller no-stats">
            <div className="user-avatar-border">
                <div className="hexagon-34-36"></div>
            </div>
        
            <div className="user-avatar-content">
                <div className="hexagon-image-30-32" data-src="img/avatar/03.jpg"></div>
            </div>
            </div>

            <div className="user-avatar smaller no-stats">
            <div className="user-avatar-border">
                <div className="hexagon-34-36"></div>
            </div>
        
            <div className="user-avatar-content">
                <div className="hexagon-image-30-32" data-src="img/avatar/05.jpg"></div>
            </div>
            </div>

            <div className="user-avatar smaller no-stats">
            <div className="user-avatar-border">
                <div className="hexagon-34-36"></div>
            </div>
        
            <div className="user-avatar-content">
                <div className="hexagon-image-30-32" data-src="img/avatar/10.jpg"></div>
            </div>
            </div>

            <div className="user-avatar smaller no-stats">
            <div className="user-avatar-border">
                <div className="hexagon-34-36"></div>
            </div>
        
            <div className="user-avatar-content">
                <div className="hexagon-image-30-32" data-src="img/avatar/02.jpg"></div>
            </div>
            </div>

            <div className="user-avatar smaller no-stats">
            <div className="user-avatar-border">
                <div className="hexagon-34-36"></div>
            </div>
        
            <div className="user-avatar-content">
                <div className="hexagon-image-30-32" data-src="img/avatar/06.jpg"></div>
            </div>
            </div>

            <div className="user-avatar smaller no-stats">
            <div className="user-avatar-border">
                <div className="hexagon-34-36"></div>
            </div>
        
            <div className="user-avatar-content">
                <div className="hexagon-image-30-32" data-src="img/avatar/07.jpg"></div>
            </div>
            </div>

            <div className="user-avatar smaller no-stats">
            <div className="user-avatar-border">
                <div className="hexagon-34-36"></div>
            </div>
        
            <div className="user-avatar-content">
                <div className="hexagon-image-30-32" data-src="img/avatar/13.jpg"></div>
            </div>
            </div>

            <div className="user-avatar smaller no-stats">
            <div className="user-avatar-border">
                <div className="hexagon-34-36"></div>
            </div>
        
            <div className="user-avatar-content">
                <div className="hexagon-image-30-32" data-src="img/avatar/08.jpg"></div>
            </div>
            </div>

            <div className="user-avatar smaller no-stats">
            <div className="user-avatar-border">
                <div className="hexagon-34-36"></div>
            </div>
        
            <div className="user-avatar-content">
                <div className="hexagon-image-30-32" data-src="img/avatar/16.jpg"></div>
            </div>
            </div>

            <div className="user-avatar smaller no-stats">
            <div className="user-avatar-border">
                <div className="hexagon-34-36"></div>
            </div>
        
            <div className="user-avatar-content">
                <div className="hexagon-image-30-32" data-src="img/avatar/23.jpg"></div>
            </div>
            </div>

            <a className="user-avatar smaller no-stats" href="group-members">
            <div className="user-avatar-border">
                <div className="hexagon-34-36"></div>
            </div>
        
            <div className="user-avatar-content">
                <div className="hexagon-image-30-32" data-src="img/avatar/11.jpg"></div>
            </div>
        
            <div className="user-avatar-overlay">
                <div className="hexagon-overlay-30-32"></div>
            </div>
        
            <div className="user-avatar-overlay-content">
                <p className="user-avatar-overlay-content-text">+31</p>
            </div>
            </a>
        </div>

        <p className="popup-event-subtitle">Google Map</p>

        <div id="g-map" className="g-map"></div>

        <p className="popup-event-button button tertiary popup-event-information-trigger">Remove from Calendar</p>
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
                </div>
                </div>

                <div className="reaction-item">
                <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/like.png" alt="reaction-like"/>
    
                <div className="simple-dropdown padded reaction-item-dropdown">
                    <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/like.png" alt="reaction-like"/> <span className="bold">Like</span></p>
                
                    <p className="simple-dropdown-text">Neko Bebop</p>

                    <p className="simple-dropdown-text">Nick Grissom</p>

                    <p className="simple-dropdown-text">Sarah Diamond</p>

                    <p className="simple-dropdown-text">Jett Spiegel</p>

                    <p className="simple-dropdown-text">Marcus Jhonson</p>

                    <p className="simple-dropdown-text">Jane Rodgers</p>

                    <p className="simple-dropdown-text"><span className="bold">and 2 more...</span></p>
                </div>
                </div>
            </div>
    
            <p className="meta-line-text">12</p>
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
    
            <p className="meta-line-text">14 Participants</p>
            </div>
        </div>
    
        <div className="content-action">
            <div className="meta-line">
            <p className="meta-line-link">1 Comments</p>
            </div>
    
            <div className="meta-line">
            <p className="meta-line-text">0 Shares</p>
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

        <div className="post-option active">
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

        <div className="post-comment-list">
      <div className="post-comment">
        <a className="user-avatar small no-outline" href="profile-timeline">
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
      
            <p className="user-avatar-badge-text">19</p>
          </div>
        </a>
  
        <p className="post-comment-text"><a className="post-comment-text-author" href="profile-timeline">Destroy Dex</a>Can't wait to see everyone at the party! Last year's was incredible and I'm hoping this year will be even better!</p>
  
        <div className="content-actions">
          <div className="content-action">
            <div className="meta-line">
              <div className="meta-line-list reaction-item-list small">
                <div className="reaction-item">
                  <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/happy.png" alt="reaction-happy"/>
      
                  <div className="simple-dropdown padded reaction-item-dropdown">
                    <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/happy.png" alt="reaction-happy"/> <span className="bold">Happy</span></p>
  
                    <p className="simple-dropdown-text">Marcus Jhonson</p>
                  </div>
                </div>
      
                <div className="reaction-item">
                  <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/like.png" alt="reaction-like"/>
      
                  <div className="simple-dropdown padded reaction-item-dropdown">
                    <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/like.png" alt="reaction-like"/> <span className="bold">Like</span></p>
                  
                    <p className="simple-dropdown-text">Neko Bebop</p>
      
                    <p className="simple-dropdown-text">Nick Grissom</p>
      
                    <p className="simple-dropdown-text">Sarah Diamond</p>
                  </div>
                </div>
              </div>
      
              <p className="meta-line-text">4</p>
            </div>
  
            <div className="meta-line">
              <p className="meta-line-link light reaction-options-small-dropdown-trigger">React!</p>
  
              <div className="reaction-options small reaction-options-small-dropdown">
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
  
            <div className="meta-line">
              <p className="meta-line-link light">Reply</p>
            </div>
  
            <div className="meta-line">
              <p className="meta-line-timestamp">15 minutes ago</p>
            </div>
  
            <div className="meta-line settings">
              <div className="post-settings-wrap">
                <div className="post-settings post-settings-dropdown-trigger">
                  <svg className="post-settings-icon icon-more-dots">
                    <use xlinkHref="#svg-more-dots"></use>
                  </svg>
                </div>
  
                <div className="simple-dropdown post-settings-dropdown">
                  <p className="simple-dropdown-link">Report Post</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div className="post-comment-form">
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
  
        <form className="form">
          <div className="form-row">
            <div className="form-item">
              <div className="form-input small">
                <label for="event-reply">Your Reply</label>
                <input type="text" id="event-reply" name="event_reply"/>
              </div>
            </div>
          </div>
        </form>
      </div>
        </div>
    </div>
  )
}

export default PopupEventInformation