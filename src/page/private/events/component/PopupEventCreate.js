import React from 'react'

const PopupEventCreate = () => {
  return (
    <div class="popup-box small popup-event-creation">
        <div class="popup-close-button popup-event-creation-trigger">
        <svg class="popup-close-button-icon icon-cross">
            <use xlinkHref="#svg-cross"></use>
        </svg>
        </div>

        <p class="popup-box-title">+ Add New Event</p>

        <form class="form">
        <div class="form-row">
            <div class="form-item">
            <div class="form-select">
                <label for="event-category">Category</label>
                <select id="event-category" name="event_category">
                <option value="0">Big Events</option>
                <option value="1">Small Events</option>
                <option value="2">Gaming Events</option>
                <option value="3">Cosplay Events</option>
                </select>
                <svg class="form-select-icon icon-small-arrow">
                <use xlinkHref="#svg-small-arrow"></use>
                </svg>
            </div>
            </div>
        </div>

        <div class="form-row">
            <div class="form-item">
            <div class="form-input small">
                <label for="event-name">Event Name</label>
                <input type="text" id="event-name" name="event_name"/>
            </div>
            </div>
        </div>

        <div class="form-row">
            <div class="form-item">
            <div class="form-input-decorated">
                <div class="form-input small">
                <label for="event-location">Event Location</label>
                <input type="text" id="event-location" name="event_location"/>
                </div>

                <svg class="form-input-icon icon-pin">
                <use xlinkHref="#svg-pin"></use>
                </svg>
            </div>
            </div>
        </div>

        <div class="form-row">
            <div class="form-item">
            <div class="form-input-decorated">
                <div class="form-input small">
                <label for="event-date">Event Date</label>
                <input type="text" id="event-date" name="event_date"/>
                </div>

                <svg class="form-input-icon icon-events">
                <use xlinkHref="#svg-events"></use>
                </svg>
            </div>
            </div>
        </div>

        <div class="form-row">
            <div class="form-item split join-on-mobile medium">
            <div class="form-select">
                <label for="event-time-start">Start Time</label>
                <select id="event-time-start" name="event_time-start">
                <option value="0">1:00</option>
                <option value="1">2:00</option>
                <option value="2">3:00</option>
                <option value="3">4:00</option>
                <option value="4">5:00</option>
                <option value="5">6:00</option>
                <option value="6">7:00</option>
                <option value="7">8:00</option>
                </select>
                <svg class="form-select-icon icon-small-arrow">
                <use xlinkHref="#svg-small-arrow"></use>
                </svg>
            </div>

            <div class="form-select">
                <label for="event-time-annotation">AM - PM</label>
                <select id="event-time-annotation" name="event_time-annotation">
                <option value="0">PM</option>
                <option value="1">AM</option>
                </select>
                <svg class="form-select-icon icon-small-arrow">
                <use xlinkHref="#svg-small-arrow"></use>
                </svg>
            </div>
            </div>
        </div>

        <div class="form-row">
            <div class="form-item">
            <div class="checkbox-wrap">
                <input type="checkbox" id="event-add-end-time" name="event_add-end-time"/>
                <div class="checkbox-box">
                <svg class="icon-cross">
                    <use xlinkHref="#svg-cross"></use>
                </svg>
                </div>
                <label for="event-add-end-time">Add End Time</label>
            </div>
            </div>
        </div>

        <div class="form-row">
            <div class="form-item">
            <div class="form-input small">
                <label for="event-description">Event Description</label>
                <textarea id="event-description" name="event_description"></textarea>
            </div>
            </div>
        </div>

        <div class="form-row">
            <div class="form-item">
            <div class="form-input-decorated">
                <div class="form-input small">
                <label for="event-cover-photo">Event Cover Photo</label>
                <input type="text" id="event-cover-photo" name="event_cover_photo"/>
                </div>

                <svg class="form-input-icon icon-photos">
                <use xlinkHref="#svg-photos"></use>
                </svg>
            </div>
            </div>
        </div>

        <div class="form-row">
            <div class="form-add-items">
            <p class="form-add-items-title">Invite Friends</p>

            <div class="form-add-items-info">
                <div class="form-add-items-button">
                <svg class="form-add-items-button-icon icon-plus">
                    <use xlinkHref="#svg-plus"></use>
                </svg>
                </div>

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
                    <div class="hexagon-image-30-32" data-src="img/avatar/23.jpg"></div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>

        <div class="popup-box-actions medium void">
            <button class="popup-box-action full button secondary">Create Event!</button>
        </div>
        </form>
    </div>
  )
}

export default PopupEventCreate