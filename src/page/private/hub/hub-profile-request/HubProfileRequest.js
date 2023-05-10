import React from 'react'

const HubProfileRequest = () => {
  return (
    <div class="account-hub-content">
        <div class="section-header">
        <div class="section-header-info">
            <p class="section-pretitle">My Profile</p>

            <h2 class="section-title">Friend Requests <span class="highlighted">3</span></h2>
        </div>

        <div class="section-header-actions">
            <p class="section-header-action">Find Friends</p>
    
            <p class="section-header-action">Settings</p>
        </div>
        </div>

        <div class="notification-box-list">
        <div class="notification-box">
            <div class="user-status request">
            <a class="user-status-avatar" href="profile-timeline.html">
                <div class="user-avatar small no-outline">
                <div class="user-avatar-content">
                    <div class="hexagon-image-30-32" data-src="img/avatar/16.jpg"></div>
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
            
                    <p class="user-avatar-badge-text">14</p>
                </div>
                </div>
            </a>

            <p class="user-status-title"><a class="bold" href="profile-timeline.html">Ginny Danvers</a></p>

            <p class="user-status-text small-space">6 friends in common</p>

            <div class="action-request-list">
                <p class="action-request accept with-text">
                <svg class="action-request-icon icon-add-friend">
                    <use xlinkHref="#svg-add-friend"></use>
                </svg>

                <span class="action-request-text">Add Friend</span>
                </p>

                <div class="action-request decline">
                <svg class="action-request-icon icon-remove-friend">
                    <use xlinkHref="#svg-remove-friend"></use>
                </svg>
                </div>
            </div>
            </div>
        </div>

        <div class="notification-box">
            <div class="user-status request">
            <a class="user-status-avatar" href="profile-timeline.html">
                <div class="user-avatar small no-outline">
                <div class="user-avatar-content">
                    <div class="hexagon-image-30-32" data-src="img/avatar/14.jpg"></div>
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
            
                    <p class="user-avatar-badge-text">3</p>
                </div>
                </div>
            </a>

            <p class="user-status-title"><a class="bold" href="profile-timeline.html">Paul Lang</a></p>

            <p class="user-status-text small-space">2 friends in common</p>

            <div class="action-request-list">
                <p class="action-request accept with-text">
                <svg class="action-request-icon icon-add-friend">
                    <use xlinkHref="#svg-add-friend"></use>
                </svg>
                
                <span class="action-request-text">Add Friend</span>
                </p>

                <div class="action-request decline">
                <svg class="action-request-icon icon-remove-friend">
                    <use xlinkHref="#svg-remove-friend"></use>
                </svg>
                </div>
            </div>
            </div>
        </div>

        <div class="notification-box">
            <div class="user-status request">
            <a class="user-status-avatar" href="profile-timeline.html">
                <div class="user-avatar small no-outline">
                <div class="user-avatar-content">
                    <div class="hexagon-image-30-32" data-src="img/avatar/11.jpg"></div>
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
            
                    <p class="user-avatar-badge-text">9</p>
                </div>
                </div>
            </a>

            <p class="user-status-title"><a class="bold" href="profile-timeline.html">Cassie May</a></p>

            <p class="user-status-text small-space">4 friends in common</p>

            <div class="action-request-list">
                <p class="action-request accept with-text">
                <svg class="action-request-icon icon-add-friend">
                    <use xlinkHref="#svg-add-friend"></use>
                </svg>
                
                <span class="action-request-text">Add Friend</span>
                </p>

                <div class="action-request decline">
                <svg class="action-request-icon icon-remove-friend">
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