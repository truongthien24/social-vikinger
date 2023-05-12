import React from 'react'

const PopupEventInformation = () => {
  return (
    <div class="popup-event popup-event-information">
        <div class="popup-close-button popup-event-information-trigger">
            <svg class="popup-close-button-icon icon-cross">
                <use xlinkHref="#svg-cross"></use>
            </svg>
        </div>

        <figure class="popup-event-cover liquid">
            <img src="img/cover/33.jpg" alt="cover-33"/>
        </figure>

        <div class="popup-event-info">
        <p class="popup-event-title">CosWorld 2019 After Party</p>

        <div class="decorated-feature-list">
            <div class="decorated-feature">
            <svg class="decorated-feature-icon icon-events">
                <use xlinkHref="#svg-events"></use>
            </svg>

            <div class="decorated-feature-info">
                <p class="decorated-feature-title">Sunday, August 26th - 2019</p>

                <p class="decorated-feature-text">8:30 AM</p>
            </div>
            </div>

            <div class="decorated-feature">
            <svg class="decorated-feature-icon icon-pin">
                <use xlinkHref="#svg-pin"></use>
            </svg>

            <div class="decorated-feature-info">
                <p class="decorated-feature-title">CosWorld Arena</p>

                <p class="decorated-feature-text">Alchemists Avenue 310 - NY 10001 New York - USA</p>
            </div>
            </div>

            <div class="decorated-feature">
            <svg class="decorated-feature-icon icon-ticket">
                <use xlinkHref="#svg-ticket"></use>
            </svg>

            <div class="decorated-feature-info">
                <p class="decorated-feature-title">$12 U$D</p>

                <p class="decorated-feature-text">Entry Price</p>
            </div>
            </div>
        </div>

        <p class="popup-event-subtitle">Description</p>

        <p class="popup-event-text">Join us at the CosWorld after party! We'll be eating, drinking and having a great time exchanging experiences from the convention</p>

        <p class="popup-event-subtitle">Will Assist</p>

        <div class="user-avatar-list reverse medium">
            <div class="user-avatar smaller no-stats">
            <div class="user-avatar-border">
                <div class="hexagon-34-36"></div>
            </div>
        
            <div class="user-avatar-content">
                <div class="hexagon-image-30-32" data-src="img/avatar/03.jpg"></div>
            </div>
            </div>

            <div class="user-avatar smaller no-stats">
            <div class="user-avatar-border">
                <div class="hexagon-34-36"></div>
            </div>
        
            <div class="user-avatar-content">
                <div class="hexagon-image-30-32" data-src="img/avatar/05.jpg"></div>
            </div>
            </div>

            <div class="user-avatar smaller no-stats">
            <div class="user-avatar-border">
                <div class="hexagon-34-36"></div>
            </div>
        
            <div class="user-avatar-content">
                <div class="hexagon-image-30-32" data-src="img/avatar/10.jpg"></div>
            </div>
            </div>

            <div class="user-avatar smaller no-stats">
            <div class="user-avatar-border">
                <div class="hexagon-34-36"></div>
            </div>
        
            <div class="user-avatar-content">
                <div class="hexagon-image-30-32" data-src="img/avatar/02.jpg"></div>
            </div>
            </div>

            <div class="user-avatar smaller no-stats">
            <div class="user-avatar-border">
                <div class="hexagon-34-36"></div>
            </div>
        
            <div class="user-avatar-content">
                <div class="hexagon-image-30-32" data-src="img/avatar/06.jpg"></div>
            </div>
            </div>

            <div class="user-avatar smaller no-stats">
            <div class="user-avatar-border">
                <div class="hexagon-34-36"></div>
            </div>
        
            <div class="user-avatar-content">
                <div class="hexagon-image-30-32" data-src="img/avatar/07.jpg"></div>
            </div>
            </div>

            <div class="user-avatar smaller no-stats">
            <div class="user-avatar-border">
                <div class="hexagon-34-36"></div>
            </div>
        
            <div class="user-avatar-content">
                <div class="hexagon-image-30-32" data-src="img/avatar/13.jpg"></div>
            </div>
            </div>

            <div class="user-avatar smaller no-stats">
            <div class="user-avatar-border">
                <div class="hexagon-34-36"></div>
            </div>
        
            <div class="user-avatar-content">
                <div class="hexagon-image-30-32" data-src="img/avatar/08.jpg"></div>
            </div>
            </div>

            <div class="user-avatar smaller no-stats">
            <div class="user-avatar-border">
                <div class="hexagon-34-36"></div>
            </div>
        
            <div class="user-avatar-content">
                <div class="hexagon-image-30-32" data-src="img/avatar/16.jpg"></div>
            </div>
            </div>

            <div class="user-avatar smaller no-stats">
            <div class="user-avatar-border">
                <div class="hexagon-34-36"></div>
            </div>
        
            <div class="user-avatar-content">
                <div class="hexagon-image-30-32" data-src="img/avatar/23.jpg"></div>
            </div>
            </div>

            <a class="user-avatar smaller no-stats" href="group-members">
            <div class="user-avatar-border">
                <div class="hexagon-34-36"></div>
            </div>
        
            <div class="user-avatar-content">
                <div class="hexagon-image-30-32" data-src="img/avatar/11.jpg"></div>
            </div>
        
            <div class="user-avatar-overlay">
                <div class="hexagon-overlay-30-32"></div>
            </div>
        
            <div class="user-avatar-overlay-content">
                <p class="user-avatar-overlay-content-text">+31</p>
            </div>
            </a>
        </div>

        <p class="popup-event-subtitle">Google Map</p>

        <div id="g-map" class="g-map"></div>

        <p class="popup-event-button button tertiary popup-event-information-trigger">Remove from Calendar</p>
        </div>

        <div class="content-actions">
        <div class="content-action">
            <div class="meta-line">
            <div class="meta-line-list reaction-item-list">
                <div class="reaction-item">
                <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/happy.png" alt="reaction-happy"/>
    
                <div class="simple-dropdown padded reaction-item-dropdown">
                    <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/happy.png" alt="reaction-happy"/> <span class="bold">Happy</span></p>
                
                    <p class="simple-dropdown-text">Matt Parker</p>

                    <p class="simple-dropdown-text">Destroy Dex</p>

                    <p class="simple-dropdown-text">The Green Goo</p>
                </div>
                </div>

                <div class="reaction-item">
                <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/love.png" alt="reaction-love"/>
    
                <div class="simple-dropdown padded reaction-item-dropdown">
                    <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/love.png" alt="reaction-love"/> <span class="bold">Love</span></p>
                
                    <p class="simple-dropdown-text">Sandra Strange</p>
                </div>
                </div>

                <div class="reaction-item">
                <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/like.png" alt="reaction-like"/>
    
                <div class="simple-dropdown padded reaction-item-dropdown">
                    <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/like.png" alt="reaction-like"/> <span class="bold">Like</span></p>
                
                    <p class="simple-dropdown-text">Neko Bebop</p>

                    <p class="simple-dropdown-text">Nick Grissom</p>

                    <p class="simple-dropdown-text">Sarah Diamond</p>

                    <p class="simple-dropdown-text">Jett Spiegel</p>

                    <p class="simple-dropdown-text">Marcus Jhonson</p>

                    <p class="simple-dropdown-text">Jane Rodgers</p>

                    <p class="simple-dropdown-text"><span class="bold">and 2 more...</span></p>
                </div>
                </div>
            </div>
    
            <p class="meta-line-text">12</p>
            </div>
    
            <div class="meta-line">
            <div class="meta-line-list user-avatar-list">
                <div class="user-avatar micro no-stats">
                <div class="user-avatar-border">
                    <div class="hexagon-22-24"></div>
                </div>
            
                <div class="user-avatar-content">
                    <div class="hexagon-image-18-20" data-src="img/avatar/09.jpg"></div>
                </div>
                </div>
    
                <div class="user-avatar micro no-stats">
                <div class="user-avatar-border">
                    <div class="hexagon-22-24"></div>
                </div>
            
                <div class="user-avatar-content">
                    <div class="hexagon-image-18-20" data-src="img/avatar/08.jpg"></div>
                </div>
                </div>
    
                <div class="user-avatar micro no-stats">
                <div class="user-avatar-border">
                    <div class="hexagon-22-24"></div>
                </div>
            
                <div class="user-avatar-content">
                    <div class="hexagon-image-18-20" data-src="img/avatar/12.jpg"></div>
                </div>
                </div>
    
                <div class="user-avatar micro no-stats">
                <div class="user-avatar-border">
                    <div class="hexagon-22-24"></div>
                </div>
            
                <div class="user-avatar-content">
                    <div class="hexagon-image-18-20" data-src="img/avatar/16.jpg"></div>
                </div>
                </div>
    
                <div class="user-avatar micro no-stats">
                <div class="user-avatar-border">
                    <div class="hexagon-22-24"></div>
                </div>
            
                <div class="user-avatar-content">
                    <div class="hexagon-image-18-20" data-src="img/avatar/06.jpg"></div>
                </div>
                </div>
            </div>
    
            <p class="meta-line-text">14 Participants</p>
            </div>
        </div>
    
        <div class="content-action">
            <div class="meta-line">
            <p class="meta-line-link">1 Comments</p>
            </div>
    
            <div class="meta-line">
            <p class="meta-line-text">0 Shares</p>
            </div>
        </div>
        </div>

        <div class="post-options">
        <div class="post-option-wrap">
            <div class="post-option reaction-options-dropdown-trigger">
            <svg class="post-option-icon icon-thumbs-up">
                <use xlinkHref="#svg-thumbs-up"></use>
            </svg>

            <p class="post-option-text">React!</p>
            </div>

            <div class="reaction-options reaction-options-dropdown">
            <div class="reaction-option text-tooltip-tft" data-title="Like">
                <img class="reaction-option-image" src="img/reaction/like.png" alt="reaction-like"/>
            </div>

            <div class="reaction-option text-tooltip-tft" data-title="Love">
                <img class="reaction-option-image" src="img/reaction/love.png" alt="reaction-love"/>
            </div>

            <div class="reaction-option text-tooltip-tft" data-title="Dislike">
                <img class="reaction-option-image" src="img/reaction/dislike.png" alt="reaction-dislike"/>
            </div>

            <div class="reaction-option text-tooltip-tft" data-title="Happy">
                <img class="reaction-option-image" src="img/reaction/happy.png" alt="reaction-happy"/>
            </div>

            <div class="reaction-option text-tooltip-tft" data-title="Funny">
                <img class="reaction-option-image" src="img/reaction/funny.png" alt="reaction-funny"/>
            </div>

            <div class="reaction-option text-tooltip-tft" data-title="Wow">
                <img class="reaction-option-image" src="img/reaction/wow.png" alt="reaction-wow"/>
            </div>

            <div class="reaction-option text-tooltip-tft" data-title="Angry">
                <img class="reaction-option-image" src="img/reaction/angry.png" alt="reaction-angry"/>
            </div>

            <div class="reaction-option text-tooltip-tft" data-title="Sad">
                <img class="reaction-option-image" src="img/reaction/sad.png" alt="reaction-sad"/>
            </div>
            </div>
        </div>

        <div class="post-option active">
            <svg class="post-option-icon icon-comment">
            <use xlinkHref="#svg-comment"></use>
            </svg>

            <p class="post-option-text">Comment</p>
        </div>

        <div class="post-option">
            <svg class="post-option-icon icon-share">
            <use xlinkHref="#svg-share"></use>
            </svg>

            <p class="post-option-text">Share</p>
        </div>
        </div>

        <div class="post-comment-list">
      <div class="post-comment">
        <a class="user-avatar small no-outline" href="profile-timeline">
          <div class="user-avatar-content">
            <div class="hexagon-image-30-32" data-src="img/avatar/02.jpg"></div>
          </div>
      
          <div class="user-avatar-progress">
            <div class="hexagon-progress-40-44"></div>
          </div>
      
          <div class="user-avatar-progress-border">
            <div class="hexagon-border-40-44"></div>
          </div>
      
          <div class="user-avatar-badge">
            <div class="user-avatar-badge-border">
              <div class="hexagon-22-24"></div>
            </div>
      
            <div class="user-avatar-badge-content">
              <div class="hexagon-dark-16-18"></div>
            </div>
      
            <p class="user-avatar-badge-text">19</p>
          </div>
        </a>
  
        <p class="post-comment-text"><a class="post-comment-text-author" href="profile-timeline">Destroy Dex</a>Can't wait to see everyone at the party! Last year's was incredible and I'm hoping this year will be even better!</p>
  
        <div class="content-actions">
          <div class="content-action">
            <div class="meta-line">
              <div class="meta-line-list reaction-item-list small">
                <div class="reaction-item">
                  <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/happy.png" alt="reaction-happy"/>
      
                  <div class="simple-dropdown padded reaction-item-dropdown">
                    <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/happy.png" alt="reaction-happy"/> <span class="bold">Happy</span></p>
  
                    <p class="simple-dropdown-text">Marcus Jhonson</p>
                  </div>
                </div>
      
                <div class="reaction-item">
                  <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/like.png" alt="reaction-like"/>
      
                  <div class="simple-dropdown padded reaction-item-dropdown">
                    <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/like.png" alt="reaction-like"/> <span class="bold">Like</span></p>
                  
                    <p class="simple-dropdown-text">Neko Bebop</p>
      
                    <p class="simple-dropdown-text">Nick Grissom</p>
      
                    <p class="simple-dropdown-text">Sarah Diamond</p>
                  </div>
                </div>
              </div>
      
              <p class="meta-line-text">4</p>
            </div>
  
            <div class="meta-line">
              <p class="meta-line-link light reaction-options-small-dropdown-trigger">React!</p>
  
              <div class="reaction-options small reaction-options-small-dropdown">
                <div class="reaction-option text-tooltip-tft" data-title="Like">
                  <img class="reaction-option-image" src="img/reaction/like.png" alt="reaction-like"/>
                </div>
      
                <div class="reaction-option text-tooltip-tft" data-title="Love">
                  <img class="reaction-option-image" src="img/reaction/love.png" alt="reaction-love"/>
                </div>
      
                <div class="reaction-option text-tooltip-tft" data-title="Dislike">
                  <img class="reaction-option-image" src="img/reaction/dislike.png" alt="reaction-dislike"/>
                </div>
      
                <div class="reaction-option text-tooltip-tft" data-title="Happy">
                  <img class="reaction-option-image" src="img/reaction/happy.png" alt="reaction-happy"/>
                </div>
      
                <div class="reaction-option text-tooltip-tft" data-title="Funny">
                  <img class="reaction-option-image" src="img/reaction/funny.png" alt="reaction-funny"/>
                </div>
      
                <div class="reaction-option text-tooltip-tft" data-title="Wow">
                  <img class="reaction-option-image" src="img/reaction/wow.png" alt="reaction-wow"/>
                </div>
      
                <div class="reaction-option text-tooltip-tft" data-title="Angry">
                  <img class="reaction-option-image" src="img/reaction/angry.png" alt="reaction-angry"/>
                </div>
      
                <div class="reaction-option text-tooltip-tft" data-title="Sad">
                  <img class="reaction-option-image" src="img/reaction/sad.png" alt="reaction-sad"/>
                </div>
              </div>
            </div>
  
            <div class="meta-line">
              <p class="meta-line-link light">Reply</p>
            </div>
  
            <div class="meta-line">
              <p class="meta-line-timestamp">15 minutes ago</p>
            </div>
  
            <div class="meta-line settings">
              <div class="post-settings-wrap">
                <div class="post-settings post-settings-dropdown-trigger">
                  <svg class="post-settings-icon icon-more-dots">
                    <use xlinkHref="#svg-more-dots"></use>
                  </svg>
                </div>
  
                <div class="simple-dropdown post-settings-dropdown">
                  <p class="simple-dropdown-link">Report Post</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="post-comment-form">
        <div class="user-avatar small no-outline">
          <div class="user-avatar-content">
            <div class="hexagon-image-30-32" data-src="img/avatar/01.jpg"></div>
          </div>
      
          <div class="user-avatar-progress">
            <div class="hexagon-progress-40-44"></div>
          </div>
      
          <div class="user-avatar-progress-border">
            <div class="hexagon-border-40-44"></div>
          </div>
      
          <div class="user-avatar-badge">
            <div class="user-avatar-badge-border">
              <div class="hexagon-22-24"></div>
            </div>
      
            <div class="user-avatar-badge-content">
              <div class="hexagon-dark-16-18"></div>
            </div>
      
            <p class="user-avatar-badge-text">24</p>
          </div>
        </div>
  
        <form class="form">
          <div class="form-row">
            <div class="form-item">
              <div class="form-input small">
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