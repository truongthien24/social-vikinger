import React from 'react'

const HubAccountSettings = () => {
  return (
    <div className="account-hub-content">
        <div className="section-header">
        <div className="section-header-info">
            <p className="section-pretitle">Account</p>

            <h2 className="section-title">General Settings</h2>
        </div>
        </div>

        <div className="grid-column">
        <div className="widget-box">
            <p className="widget-box-title">Email Notifications</p>

            <div className="widget-box-content">
            <div className="switch-option-list">
                <div className="switch-option">
                <p className="switch-option-title">Comments</p>

                <p className="switch-option-text">You'll be notified when someone comments on your posts and/or replies to your comments</p>

                <div className="form-switch active">
                    <div className="form-switch-button"></div>
                </div>
                </div>

                <div className="switch-option">
                <p className="switch-option-title">Tags</p>

                <p className="switch-option-text">These are notifications for when someone tags you in a post of image</p>

                <div className="form-switch active">
                    <div className="form-switch-button"></div>
                </div>
                </div>

                <div className="switch-option">
                <p className="switch-option-title">Friend Requests</p>

                <p className="switch-option-text">You'll be notified when someone send you a friend request</p>

                <div className="form-switch active">
                    <div className="form-switch-button"></div>
                </div>
                </div>

                <div className="switch-option">
                <p className="switch-option-title">Groups</p>

                <p className="switch-option-text">These are notifications for activity on groups you created or joined</p>

                <div className="form-switch">
                    <div className="form-switch-button"></div>
                </div>
                </div>

                <div className="switch-option">
                <p className="switch-option-title">Events</p>

                <p className="switch-option-text">You'll be notified about events you created or added to your calendar</p>

                <div className="form-switch active">
                    <div className="form-switch-button"></div>
                </div>
                </div>

                <div className="switch-option">
                <p className="switch-option-title">Marketplace</p>

                <p className="switch-option-text">These are notifications for marketplace items you posted</p>

                <div className="form-switch">
                    <div className="form-switch-button"></div>
                </div>
                </div>
            </div>
            </div>
        </div>

        <div className="widget-box">
            <p className="widget-box-title">Privacy Settings</p>
        
            <div className="widget-box-content">
            <form className="form">
                <div className="form-row split">
                <div className="form-item centered">
                    <label className="form-title" for="profile-privacy-visibility">Who can see your profile?</label>
                </div>

                <div className="form-item">
                    <div className="form-select">
                    <select id="profile-privacy-visibility" name="profile_privacy_visibility">
                        <option value="1" selected>Members Only</option>
                        <option value="2">Everyone (Public)</option>
                    </select>
                    <svg className="form-select-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow"></use>
                    </svg>
                    </div>
                </div>
                </div>

                <div className="form-row split">
                <div className="form-item centered">
                    <label className="form-title" for="profile-privacy-friend-request">Who can send you a friend request?</label>
                </div>

                <div className="form-item">
                    <div className="form-select">
                    <select id="profile-privacy-friend-request" name="profile_privacy_friend_request">
                        <option value="1" selected>Everyone (Public)</option>
                        <option value="2">Friends of Friends</option>
                        <option value="3">No One (Private)</option>
                    </select>
                    <svg className="form-select-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow"></use>
                    </svg>
                    </div>
                </div>
                </div>

                <div className="form-row split">
                <div className="form-item centered">
                    <label className="form-title" for="profile-privacy-chat-activity">Who can see your chat activity?</label>
                </div>

                <div className="form-item">
                    <div className="form-select">
                    <select id="profile-privacy-chat-activity" name="profile_privacy_chat_activity">
                        <option value="1" selected>Friends Only</option>
                        <option value="2">Everyone (Public)</option>
                    </select>
                    <svg className="form-select-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow"></use>
                    </svg>
                    </div>
                </div>
                </div>
            </form>
            </div>
        </div>
        </div>
    </div>
  )
}

export default HubAccountSettings