import React, { useEffect } from 'react'

const Events = () => {

  useEffect(()=> {
    let script = document.createElement("script");
    let script11 = document.createElement("script");
    let script12 = document.createElement("script");
    script.src = "/js/utils/app.js";
    script12.src = "/js/global/global.popups.js";
    script.async = true;
    script12.async = true;
    document.body.appendChild(script);
    document.body.appendChild(script12);
  }, [])

  return (
    <div class="content-grid">
    <div class="section-banner">
      <img class="section-banner-icon" src="img/banner/events-icon.png" alt="events-icon"/>
  
      <p class="section-banner-title">Events</p>
  
      <p class="section-banner-text">Easily manage and create events or reminders!</p>
    </div>

    <div class="section-header">
      <div class="section-header-info">
        <p class="section-pretitle">Get a quick look!</p>
  
        <h2 class="section-title">Events Calendar</h2>
      </div>
    </div>

    <div class="section-filters-bar v6">
      <div class="section-filters-bar-actions">
        <form class="form">
          <div class="form-item split">
            <div class="form-input small">
              <label for="events-search">Search Events</label>
              <input type="text" id="events-search" name="events_search"/>
            </div>
  
            <button class="button primary">
              <svg class="icon-magnifying-glass">
                <use xlinkHref="#svg-magnifying-glass"></use>
              </svg>
            </button>
          </div>
        </form>
      </div>
  
      <div class="section-filters-bar-actions">
        <p class="button secondary popup-event-creation-trigger">+ Add New Event</p>
      </div>
    </div>

    <div class="calendar-widget">
      <div class="calendar-widget-header">
        <div class="calendar-widget-header-actions">
          <div class="slider-controls">
            <div class="slider-control left">
              <svg class="slider-control-icon icon-big-arrow">
                <use xlinkHref="#svg-big-arrow"></use>
              </svg>
            </div>
    
            <div class="slider-control right">
              <svg class="slider-control-icon icon-big-arrow">
                <use xlinkHref="#svg-big-arrow"></use>
              </svg>
            </div>
          </div>

          <p class="calendar-widget-title">August 2019</p>
        </div>

        <div class="calendar-widget-header-actions">
          <div class="view-actions">
            <a class="view-action text-tooltip-tft-medium active" href="events" data-title="Monthly">
              <svg class="view-action-icon icon-events-monthly">
                <use xlinkHref="#svg-events-monthly"></use>
              </svg>
            </a>
    
            <a class="view-action text-tooltip-tft-medium" href="events-weekly" data-title="Weekly">
              <svg class="view-action-icon icon-events-weekly">
                <use xlinkHref="#svg-events-weekly"></use>
              </svg>
            </a>
    
            <a class="view-action text-tooltip-tft-medium" href="events-daily" data-title="Daily">
              <svg class="view-action-icon icon-events-daily">
                <use xlinkHref="#svg-events-daily"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="calendar full">
        <div class="calendar-week">
          <p class="calendar-week-day"><span class="week-day-short">Sun</span><span class="week-day-long">Sunday</span></p>
    
          <p class="calendar-week-day"><span class="week-day-short">Mon</span><span class="week-day-long">Monday</span></p>
    
          <p class="calendar-week-day"><span class="week-day-short">Tue</span><span class="week-day-long">Tuesday</span></p>
    
          <p class="calendar-week-day"><span class="week-day-short">Wed</span><span class="week-day-long">Wednesday</span></p>
    
          <p class="calendar-week-day"><span class="week-day-short">Thu</span><span class="week-day-long">Thursday</span></p>
    
          <p class="calendar-week-day"><span class="week-day-short">Fri</span><span class="week-day-long">Friday</span></p>
    
          <p class="calendar-week-day"><span class="week-day-short">Sat</span><span class="week-day-long">Saturday</span></p>
        </div>
    
        <div class="calendar-days">
          <div class="calendar-day-row">
            <div class="calendar-day inactive">
              <p class="calendar-day-number">29</p>
            </div>
    
            <div class="calendar-day inactive">
              <p class="calendar-day-number">30</p>
            </div>
    
            <div class="calendar-day inactive">
              <p class="calendar-day-number">31</p>
            </div>
    
            <div class="calendar-day">
              <p class="calendar-day-number">1</p>
            </div>
    
            <div class="calendar-day">
              <p class="calendar-day-number">2</p>
    
              <div class="calendar-day-events">
                <p class="calendar-day-event primary popup-event-information-trigger"><span class="calendar-day-event-text">Dex's Birthday</span></p>
    
                <p class="calendar-day-event secondary popup-event-information-trigger"><span class="calendar-day-event-text">Sara's Big Stream</span></p>
    
                <p class="calendar-day-event secondary popup-event-information-trigger"><span class="calendar-day-event-text">Striker GO Release</span></p>
              </div>
            </div>
    
            <div class="calendar-day">
              <p class="calendar-day-number">3</p>
            </div>
    
            <div class="calendar-day">
              <p class="calendar-day-number">4</p>
            </div>
          </div>
    
          <div class="calendar-day-row">
            <div class="calendar-day">
              <p class="calendar-day-number">5</p>
            </div>
    
            <div class="calendar-day">
              <p class="calendar-day-number">6</p>
            </div>
    
            <div class="calendar-day current">
              <p class="calendar-day-number">7</p>
            </div>
    
            <div class="calendar-day">
              <p class="calendar-day-number">8</p>
            </div>
    
            <div class="calendar-day">
              <p class="calendar-day-number">9</p>
            </div>
    
            <div class="calendar-day">
              <p class="calendar-day-number">10</p>
            </div>
    
            <div class="calendar-day">
              <p class="calendar-day-number">11</p>
            </div>
          </div>
    
          <div class="calendar-day-row">
            <div class="calendar-day">
              <p class="calendar-day-number">12</p>
            </div>
    
            <div class="calendar-day active">
              <p class="calendar-day-number">13</p>
    
              <div class="calendar-day-events">
                <p class="calendar-day-event secondary popup-event-information-trigger"><span class="calendar-day-event-text">Breakfast with Neko</span></p>
    
                <p class="calendar-day-event primary popup-event-information-trigger"><span class="calendar-day-event-text">Streaming Party</span></p>
              </div>
            </div>
    
            <div class="calendar-day">
              <p class="calendar-day-number">14</p>
            </div>
    
            <div class="calendar-day">
              <p class="calendar-day-number">15</p>
            </div>
    
            <div class="calendar-day">
              <p class="calendar-day-number">16</p>
            </div>
    
            <div class="calendar-day">
              <p class="calendar-day-number">17</p>
            </div>
    
            <div class="calendar-day">
              <p class="calendar-day-number">18</p>
            </div>
          </div>
    
          <div class="calendar-day-row">
            <div class="calendar-day">
              <p class="calendar-day-number">19</p>
            </div>
    
            <div class="calendar-day">
              <p class="calendar-day-number">20</p>
            </div>
    
            <div class="calendar-day">
              <p class="calendar-day-number">21</p>
            </div>
    
            <div class="calendar-day">
              <p class="calendar-day-number">22</p>
            </div>
    
            <div class="calendar-day">
              <p class="calendar-day-number">23</p>
            </div>
    
            <div class="calendar-day">
              <p class="calendar-day-number">24</p>
            </div>
    
            <div class="calendar-day">
              <p class="calendar-day-number">25</p>
            </div>
          </div>
    
          <div class="calendar-day-row">
            <div class="calendar-day">
              <p class="calendar-day-number">26</p>
    
              <div class="calendar-day-events">
                <p class="calendar-day-event primary popup-event-information-trigger"><span class="calendar-day-event-text">CosWorld 2019 After...</span></p>
              </div>
            </div>
    
            <div class="calendar-day">
              <p class="calendar-day-number">27</p>
            </div>
    
            <div class="calendar-day">
              <p class="calendar-day-number">28</p>
            </div>
    
            <div class="calendar-day">
              <p class="calendar-day-number">29</p>
            </div>
    
            <div class="calendar-day">
              <p class="calendar-day-number">30</p>
            </div>
    
            <div class="calendar-day inactive">
              <p class="calendar-day-number">1</p>
            </div>
    
            <div class="calendar-day inactive">
              <p class="calendar-day-number">2</p>
            </div>
          </div>
        </div>
      </div>

      <div class="calendar-events-preview">
        <p class="calendar-events-preview-title">Monday, August 13th - 2019</p>
    
        <div class="calendar-event-preview-list">
          <div class="calendar-event-preview secondary">
            <div class="calendar-event-preview-start-time">
              <p class="calendar-event-preview-start-time-title">8:30</p>
    
              <p class="calendar-event-preview-start-time-text">AM</p>
            </div>
    
            <div class="calendar-event-preview-info">
              <p class="calendar-event-preview-title popup-event-information-trigger">Breakfast with Neko</p>
    
              <p class="calendar-event-preview-text">Hi Neko! I'm creating this event to invite you to have breakfast before work. Meet me at Coffebucks.</p>
    
              <p class="calendar-event-preview-time"><span class="bold">8:30</span> AM</p>
            </div>
          </div>
    
          <div class="calendar-event-preview primary">
            <div class="calendar-event-preview-start-time">
              <p class="calendar-event-preview-start-time-title">10:00</p>
    
              <p class="calendar-event-preview-start-time-text">PM</p>
            </div>
    
            <div class="calendar-event-preview-info">
              <p class="calendar-event-preview-title popup-event-information-trigger">Streaming Party</p>
    
              <p class="calendar-event-preview-text">The biggest party for Twitch streamers! Come and join us at Shenron Arena.</p>
    
              <p class="calendar-event-preview-time"><span class="bold">10:00</span> PM - <span class="bold">11:30</span> PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section-header">
      <div class="section-header-info">
        <p class="section-pretitle">See what's next!</p>
  
        <h2 class="section-title">Upcoming Events</h2>
      </div>
    </div>

    <div class="grid grid-3-3-3-3 centered">
      <div class="event-preview">
        <figure class="event-preview-cover liquid">
          <img src="img/cover/47.jpg" alt="cover-47"/>
        </figure>
    
        <div class="event-preview-info">
          <div class="event-preview-info-top">
            <div class="date-sticker">
              <p class="date-sticker-day">13</p>
      
              <p class="date-sticker-month">Aug</p>
            </div>
    
            <p class="event-preview-title popup-event-information-trigger">Breakfast with Neko</p>
    
            <p class="event-preview-timestamp"><span class="bold">8:30</span> AM</p>
    
            <p class="event-preview-text">Hi Neko! I'm creating this event to invite you to have breakfast before work. Meet me at Coffebucks.</p>
          </div>
    
          <div class="event-preview-info-bottom">
            <div class="decorated-text">
              <svg class="decorated-text-icon icon-pin">
                <use xlinkHref="#svg-pin"></use>
              </svg>
    
              <p class="decorated-text-content">Downtown Coffeebucks</p>
            </div>
    
            <div class="meta-line">
              <div class="meta-line-list user-avatar-list">
                <div class="user-avatar micro no-stats">
                  <div class="user-avatar-border">
                    <div class="hexagon-22-24"></div>
                  </div>
              
                  <div class="user-avatar-content">
                    <div class="hexagon-image-18-20" data-src="img/avatar/05.jpg"></div>
                  </div>
                </div>
    
                <div class="user-avatar micro no-stats">
                  <div class="user-avatar-border">
                    <div class="hexagon-22-24"></div>
                  </div>
              
                  <div class="user-avatar-content">
                    <div class="hexagon-image-18-20" data-src="img/avatar/01.jpg"></div>
                  </div>
                </div>
              </div>
    
              <p class="meta-line-text">will assist</p>
            </div>
    
            <p class="button white white-tertiary">Remove from Calendar</p>
          </div>
        </div>
      </div>

      <div class="event-preview">
        <figure class="event-preview-cover liquid">
          <img src="img/cover/23.jpg" alt="cover-23"/>
        </figure>
    
        <div class="event-preview-info">
          <div class="event-preview-info-top">
            <div class="date-sticker">
              <p class="date-sticker-day">13</p>
      
              <p class="date-sticker-month">Aug</p>
            </div>
      
            <p class="event-preview-title popup-event-information-trigger">Streaming Party</p>
      
            <p class="event-preview-timestamp"><span class="bold">10:00</span> PM - <span class="bold">11:30</span> PM</p>
      
            <p class="event-preview-text">The biggest party for Twitch streamers! Come and join us at Shenron Arena.</p>
          </div>
    
          <div class="event-preview-info-bottom">
            <div class="decorated-text">
              <svg class="decorated-text-icon icon-pin">
                <use xlinkHref="#svg-pin"></use>
              </svg>
      
              <p class="decorated-text-content">Shenron Arena</p>
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
      
              <p class="meta-line-text">+31 will assist</p>
            </div>
      
            <p class="button white white-tertiary">Remove from Calendar</p>
          </div>
        </div>
      </div>

      <div class="event-preview">
        <figure class="event-preview-cover liquid">
          <img src="img/cover/33.jpg" alt="cover-33"/>
        </figure>
    
        <div class="event-preview-info">
          <div class="event-preview-info-top">
            <div class="date-sticker">
              <p class="date-sticker-day">26</p>
      
              <p class="date-sticker-month">Aug</p>
            </div>
      
            <p class="event-preview-title popup-event-information-trigger">CosWorld 2019 After Party</p>
      
            <p class="event-preview-timestamp"><span class="bold">11:00</span> PM</p>
      
            <p class="event-preview-text">Join us at the CosWorld after party! We'll be eating, drinking and having a great time exchanging experiences...</p>
          </div>
    
          <div class="event-preview-info-bottom">
            <div class="decorated-text">
              <svg class="decorated-text-icon icon-pin">
                <use xlinkHref="#svg-pin"></use>
              </svg>
      
              <p class="decorated-text-content">CosWorld Arena</p>
            </div>
      
            <div class="meta-line">
              <div class="meta-line-list user-avatar-list">
                <div class="user-avatar micro no-stats">
                  <div class="user-avatar-border">
                    <div class="hexagon-22-24"></div>
                  </div>
              
                  <div class="user-avatar-content">
                    <div class="hexagon-image-18-20" data-src="img/avatar/06.jpg"></div>
                  </div>
                </div>
      
                <div class="user-avatar micro no-stats">
                  <div class="user-avatar-border">
                    <div class="hexagon-22-24"></div>
                  </div>
              
                  <div class="user-avatar-content">
                    <div class="hexagon-image-18-20" data-src="img/avatar/07.jpg"></div>
                  </div>
                </div>

                <div class="user-avatar micro no-stats">
                  <div class="user-avatar-border">
                    <div class="hexagon-22-24"></div>
                  </div>
              
                  <div class="user-avatar-content">
                    <div class="hexagon-image-18-20" data-src="img/avatar/02.jpg"></div>
                  </div>
                </div>

                <div class="user-avatar micro no-stats">
                  <div class="user-avatar-border">
                    <div class="hexagon-22-24"></div>
                  </div>
              
                  <div class="user-avatar-content">
                    <div class="hexagon-image-18-20" data-src="img/avatar/10.jpg"></div>
                  </div>
                </div>

                <div class="user-avatar micro no-stats">
                  <div class="user-avatar-border">
                    <div class="hexagon-22-24"></div>
                  </div>
              
                  <div class="user-avatar-content">
                    <div class="hexagon-image-18-20" data-src="img/avatar/05.jpg"></div>
                  </div>
                </div>
              </div>
      
              <p class="meta-line-text">+24 will assist</p>
            </div>
      
            <p class="button white white-tertiary">Remove from Calendar</p>
          </div>
        </div>
      </div>

      <div class="event-preview">
        <figure class="event-preview-cover liquid">
          <img src="img/cover/40.jpg" alt="cover-40"/>
        </figure>
    
        <div class="event-preview-info">
          <div class="event-preview-info-top">
            <div class="date-sticker">
              <p class="date-sticker-day">9</p>
      
              <p class="date-sticker-month">Sep</p>
            </div>
      
            <p class="event-preview-title popup-event-information-trigger">Artistic Painting Course</p>
      
            <p class="event-preview-timestamp"><span class="bold">6:00</span> PM</p>
      
            <p class="event-preview-text">Come to have a great time with us at our artistic painting course! Begginers and experts welcome!</p>
          </div>
    
          <div class="event-preview-info-bottom">
            <div class="decorated-text">
              <svg class="decorated-text-icon icon-pin">
                <use xlinkHref="#svg-pin"></use>
              </svg>
      
              <p class="decorated-text-content">Xavier's Art Center</p>
            </div>
      
            <div class="meta-line">
              <div class="meta-line-list user-avatar-list">
                <div class="user-avatar micro no-stats">
                  <div class="user-avatar-border">
                    <div class="hexagon-22-24"></div>
                  </div>
              
                  <div class="user-avatar-content">
                    <div class="hexagon-image-18-20" data-src="img/avatar/13.jpg"></div>
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
                    <div class="hexagon-image-18-20" data-src="img/avatar/11.jpg"></div>
                  </div>
                </div>

                <div class="user-avatar micro no-stats">
                  <div class="user-avatar-border">
                    <div class="hexagon-22-24"></div>
                  </div>
              
                  <div class="user-avatar-content">
                    <div class="hexagon-image-18-20" data-src="img/avatar/03.jpg"></div>
                  </div>
                </div>

                <div class="user-avatar micro no-stats">
                  <div class="user-avatar-border">
                    <div class="hexagon-22-24"></div>
                  </div>
              
                  <div class="user-avatar-content">
                    <div class="hexagon-image-18-20" data-src="img/avatar/04.jpg"></div>
                  </div>
                </div>
              </div>
      
              <p class="meta-line-text">+17 will assist</p>
            </div>
      
            <p class="button white white-tertiary">Remove from Calendar</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Events