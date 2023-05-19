import React from 'react'

const HubProfileRequest = () => {
  return (
    <div className="account-hub-content">
        <div className="section-header">
        <div className="section-header-info">
            <p className="section-pretitle">My Profile</p>

            <h2 className="section-title">Friend Requests <span className="highlighted">3</span></h2>
        </div>

        <div className="section-header-actions">
            <p className="section-header-action">Find Friends</p>
    
            <p className="section-header-action">Settings</p>
        </div>
        </div>

        <div className="notification-box-list">
        <div className="notification-box">
            <div className="user-status request">
            <a className="user-status-avatar" href="profile-timeline">
                <div className="user-avatar small no-outline">
                <div className="user-avatar-content">
                    <div className="hexagon-image-30-32" data-src="img/avatar/16.jpg"></div>
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
            
                    <p className="user-avatar-badge-text">14</p>
                </div>
                </div>
            </a>

            <p className="user-status-title"><a className="bold" href="profile-timeline">Ginny Danvers</a></p>

            <p className="user-status-text small-space">6 friends in common</p>

            <div className="action-request-list">
                <p className="action-request accept with-text">
                <svg className="action-request-icon icon-add-friend">
                    <use xlinkHref="#svg-add-friend"></use>
                </svg>

                <span className="action-request-text">Add Friend</span>
                </p>

                <div className="action-request decline">
                <svg className="action-request-icon icon-remove-friend">
                    <use xlinkHref="#svg-remove-friend"></use>
                </svg>
                </div>
            </div>
            </div>
        </div>

        <div className="notification-box">
            <div className="user-status request">
            <a className="user-status-avatar" href="profile-timeline">
                <div className="user-avatar small no-outline">
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
            </a>

            <p className="user-status-title"><a className="bold" href="profile-timeline">Paul Lang</a></p>

            <p className="user-status-text small-space">2 friends in common</p>

            <div className="action-request-list">
                <p className="action-request accept with-text">
                <svg className="action-request-icon icon-add-friend">
                    <use xlinkHref="#svg-add-friend"></use>
                </svg>
                
                <span className="action-request-text">Add Friend</span>
                </p>

                <div className="action-request decline">
                <svg className="action-request-icon icon-remove-friend">
                    <use xlinkHref="#svg-remove-friend"></use>
                </svg>
                </div>
            </div>
            </div>
        </div>

        <div className="notification-box">
            <div className="user-status request">
            <a className="user-status-avatar" href="profile-timeline">
                <div className="user-avatar small no-outline">
                <div className="user-avatar-content">
                    <div className="hexagon-image-30-32" data-src="img/avatar/11.jpg"></div>
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
            </a>

            <p className="user-status-title"><a className="bold" href="profile-timeline">Cassie May</a></p>

            <p className="user-status-text small-space">4 friends in common</p>

            <div className="action-request-list">
                <p className="action-request accept with-text">
                <svg className="action-request-icon icon-add-friend">
                    <use xlinkHref="#svg-add-friend"></use>
                </svg>
                
                <span className="action-request-text">Add Friend</span>
                </p>

                <div className="action-request decline">
                <svg className="action-request-icon icon-remove-friend">
                    <use xlinkHref="#svg-remove-friend"></use>
                </svg>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default HubProfileRequest