import React from 'react'

const PopupNewGroup = () => {
  return (
    <div class="popup-box mid popup-manage-group">
        <div class="popup-close-button popup-manage-group-trigger">
        <svg class="popup-close-button-icon icon-cross">
            <use xlinkHref="#svg-cross"></use>
        </svg>
        </div>

        <div class="popup-box-body">
        <div class="popup-box-sidebar">
            <div class="user-preview small">
            <figure class="user-preview-cover liquid">
                <img src="img/cover/29.jpg" alt="cover-29"/>
            </figure>

            <div class="user-preview-info">
                <div class="user-short-description small">
                <a class="user-short-description-avatar user-avatar no-stats" href="group-timeline.html">
                    <div class="user-avatar-border">
                    <div class="hexagon-100-108"></div>
                    </div>
                
                    <div class="user-avatar-content">
                    <div class="hexagon-image-84-92" data-src="img/avatar/24.jpg"></div>
                    </div>
                </a>
            
                <p class="user-short-description-title small"><a href="group-timeline.html">Cosplayers of the World</a></p>
            
                <p class="user-short-description-text regular">Group Organizer</p>
                </div>
            </div>
            </div>

            <div class="sidebar-menu-item">
            <div class="sidebar-menu-body secondary">
                <p class="sidebar-menu-link active">Group Info</p>

                <p class="sidebar-menu-link">Avatar and Cover</p>

                <p class="sidebar-menu-link">Social Networks</p>

                <p class="sidebar-menu-link">Settings</p>

                <p class="sidebar-menu-link">Members</p>

                <p class="sidebar-menu-link">Delete Group</p>
            </div>
            </div>

            <div class="popup-box-sidebar-footer">
            <p class="button secondary full popup-manage-group-trigger">Save Changes!</p>

            <p class="button white full popup-manage-group-trigger">Discard All</p>
            </div>
        </div>
    
        <div class="popup-box-content">
            <div class="widget-box">
            <p class="widget-box-title">Group Info</p>
        
            <div class="widget-box-content">
                <form class="form">
                <div class="form-row">
                    <div class="form-item">
                    <div class="form-input small active">
                        <label for="group-name">Group Name</label>
                        <input type="text" id="group-name" name="group_name" value="Cosplayers of the World"/>
                    </div>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-item">
                    <div class="form-input small active">
                        <label for="group-tagline">Tagline</label>
                        <input type="text" id="group-tagline" name="group_tagline" value="All Cosplayers Welcome!"/>
                    </div>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-item">
                    <div class="form-input small mid-textarea">
                        <textarea id="group-description" name="group_description" placeholder="Write a little description about the group..."></textarea>
                    </div>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-item">
                    <div class="form-input small active">
                        <label for="group-public-email">Public Email</label>
                        <input type="text" id="group-public-email" name="group_public_email" value="info@cosworld.com"/>
                    </div>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-item">
                    <div class="form-input small">
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