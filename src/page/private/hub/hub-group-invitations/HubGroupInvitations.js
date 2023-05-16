import React from 'react'

const HubGroupInvitations = () => {
  return (
    <div className="account-hub-content">
        <div className="section-header">
        <div className="section-header-info">
            <p className="section-pretitle">Groups</p>

            <h2 className="section-title">Invitations <span className="highlighted">1</span></h2>
        </div>
        </div>

        <div className="grid grid-3-3-3 centered-on-mobile">
          <div className="user-preview small">
            <figure className="user-preview-cover liquid">
              <img src="img/cover/48.jpg" alt="cover-48"/>
            </figure>
        
            <div className="user-preview-info">
              <div className="tag-sticker">
                <svg className="tag-sticker-icon icon-public">
                  <use xlinkHref="#svg-public"></use>
                </svg>
              </div>
        
              <div className="user-short-description small">
                <a className="user-short-description-avatar user-avatar no-stats" href="group-timeline">
                  <div className="user-avatar-border">
                    <div className="hexagon-100-108"></div>
                  </div>
              
                  <div className="user-avatar-content">
                    <div className="hexagon-image-84-92" data-src="img/avatar/28.jpg"></div>
                  </div>
                </a>
          
                <p className="user-short-description-title"><a href="group-timeline">Street Artists</a></p>
          
                <p className="user-short-description-text">Sharing the art!</p>
              </div>
        
              <div className="user-stats">
                <div className="user-stat">
                  <p className="user-stat-title">951</p>
          
                  <p className="user-stat-text">members</p>
                </div>
          
                <div className="user-stat">
                  <p className="user-stat-title">408</p>
          
                  <p className="user-stat-text">posts</p>
                </div>
          
                <div className="user-stat">
                  <p className="user-stat-title">9.2k</p>
          
                  <p className="user-stat-text">visits</p>
                </div>
              </div>
        
              <div className="user-preview-actions">
                <p className="button white white-tertiary">
                  <svg className="button-icon icon-leave-group">
                    <use xlinkHref="#svg-leave-group"></use>
                  </svg>
                </p>
        
                <p className="button secondary">
                  <svg className="button-icon icon-join-group">
                    <use xlinkHref="#svg-join-group"></use>
                  </svg>
                </p>
              </div>
            </div>
        
            <div className="user-preview-footer padded">
              <div className="user-preview-author">
                <a className="user-preview-author-image user-avatar micro no-border" href="profile-timeline">
                  <div className="user-avatar-content">
                    <div className="hexagon-image-18-20" data-src="img/avatar/05.jpg"></div>
                  </div>
                </a>
        
                <p className="user-preview-author-title">Invited By</p>
        
                <p className="user-preview-author-text"><a href="profile-timeline">Neko Bebop</a></p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HubGroupInvitations