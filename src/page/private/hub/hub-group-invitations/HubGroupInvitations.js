import React from 'react'

const HubGroupInvitations = () => {
  return (
    <div class="account-hub-content">
        <div class="section-header">
        <div class="section-header-info">
            <p class="section-pretitle">Groups</p>

            <h2 class="section-title">Invitations <span class="highlighted">1</span></h2>
        </div>
        </div>

        <div class="grid grid-3-3-3 centered-on-mobile">
          <div class="user-preview small">
            <figure class="user-preview-cover liquid">
              <img src="img/cover/48.jpg" alt="cover-48"/>
            </figure>
        
            <div class="user-preview-info">
              <div class="tag-sticker">
                <svg class="tag-sticker-icon icon-public">
                  <use xlinkHref="#svg-public"></use>
                </svg>
              </div>
        
              <div class="user-short-description small">
                <a class="user-short-description-avatar user-avatar no-stats" href="group-timeline.html">
                  <div class="user-avatar-border">
                    <div class="hexagon-100-108"></div>
                  </div>
              
                  <div class="user-avatar-content">
                    <div class="hexagon-image-84-92" data-src="img/avatar/28.jpg"></div>
                  </div>
                </a>
          
                <p class="user-short-description-title"><a href="group-timeline.html">Street Artists</a></p>
          
                <p class="user-short-description-text">Sharing the art!</p>
              </div>
        
              <div class="user-stats">
                <div class="user-stat">
                  <p class="user-stat-title">951</p>
          
                  <p class="user-stat-text">members</p>
                </div>
          
                <div class="user-stat">
                  <p class="user-stat-title">408</p>
          
                  <p class="user-stat-text">posts</p>
                </div>
          
                <div class="user-stat">
                  <p class="user-stat-title">9.2k</p>
          
                  <p class="user-stat-text">visits</p>
                </div>
              </div>
        
              <div class="user-preview-actions">
                <p class="button white white-tertiary">
                  <svg class="button-icon icon-leave-group">
                    <use xlinkHref="#svg-leave-group"></use>
                  </svg>
                </p>
        
                <p class="button secondary">
                  <svg class="button-icon icon-join-group">
                    <use xlinkHref="#svg-join-group"></use>
                  </svg>
                </p>
              </div>
            </div>
        
            <div class="user-preview-footer padded">
              <div class="user-preview-author">
                <a class="user-preview-author-image user-avatar micro no-border" href="profile-timeline.html">
                  <div class="user-avatar-content">
                    <div class="hexagon-image-18-20" data-src="img/avatar/05.jpg"></div>
                  </div>
                </a>
        
                <p class="user-preview-author-title">Invited By</p>
        
                <p class="user-preview-author-text"><a href="profile-timeline.html">Neko Bebop</a></p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HubGroupInvitations