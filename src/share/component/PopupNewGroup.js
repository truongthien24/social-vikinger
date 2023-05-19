import React from 'react'

const PopupNewGroup = () => {
  return (
    <div className="popup-box mid popup-manage-group">
        <div className="popup-close-button popup-manage-group-trigger">
        <svg className="popup-close-button-icon icon-cross">
            <use xlinkHref="#svg-cross"></use>
        </svg>
        </div>

        <div className="popup-box-body">
        <div className="popup-box-sidebar">
            <div className="user-preview small">
            <figure className="user-preview-cover liquid">
                <img src="img/cover/29.jpg" alt="cover-29"/>
            </figure>

            <div className="user-preview-info">
                <div className="user-short-description small">
                <a className="user-short-description-avatar user-avatar no-stats" href="group-timeline">
                    <div className="user-avatar-border">
                    <div className="hexagon-100-108"></div>
                    </div>
                
                    <div className="user-avatar-content">
                    <div className="hexagon-image-84-92" data-src="img/avatar/24.jpg"></div>
                    </div>
                </a>
            
                <p className="user-short-description-title small"><a href="group-timeline">Cosplayers of the World</a></p>
            
                <p className="user-short-description-text regular">Group Organizer</p>
                </div>
            </div>
            </div>

            <div className="sidebar-menu-item">
            <div className="sidebar-menu-body secondary">
                <p className="sidebar-menu-link active">Group Info</p>

                <p className="sidebar-menu-link">Avatar and Cover</p>

                <p className="sidebar-menu-link">Social Networks</p>

                <p className="sidebar-menu-link">Settings</p>

                <p className="sidebar-menu-link">Members</p>

                <p className="sidebar-menu-link">Delete Group</p>
            </div>
            </div>

            <div className="popup-box-sidebar-footer">
            <p className="button secondary full popup-manage-group-trigger">Save Changes!</p>

            <p className="button white full popup-manage-group-trigger">Discard All</p>
            </div>
        </div>
    
        <div className="popup-box-content">
            <div className="widget-box">
            <p className="widget-box-title">Group Info</p>
        
            <div className="widget-box-content">
                <form className="form">
                <div className="form-row">
                    <div className="form-item">
                    <div className="form-input small active">
                        <label for="group-name">Group Name</label>
                        <input type="text" id="group-name" name="group_name" value="Cosplayers of the World"/>
                    </div>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-item">
                    <div className="form-input small active">
                        <label for="group-tagline">Tagline</label>
                        <input type="text" id="group-tagline" name="group_tagline" value="All Cosplayers Welcome!"/>
                    </div>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-item">
                    <div className="form-input small mid-textarea">
                        <textarea id="group-description" name="group_description" placeholder="Write a little description about the group..."></textarea>
                    </div>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-item">
                    <div className="form-input small active">
                        <label for="group-public-email">Public Email</label>
                        <input type="text" id="group-public-email" name="group_public_email" value="info@cosworld.com"/>
                    </div>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-item">
                    <div className="form-input small">
                        <label for="group-public-website">Public Website</label>
                        <input type="text" id="group-public-website" name="group_public_website"/>
                    </div>
                    </div>
                </div>
                </form>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default PopupNewGroup