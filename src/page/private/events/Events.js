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
    <>
    <div className="section-banner">
      <img className="section-banner-icon" src="img/banner/events-icon.png" alt="events-icon"/>
  
      <p className="section-banner-title">Events</p>
  
      <p className="section-banner-text">Easily manage and create events or reminders!</p>
    </div>

    <div className="section-header">
      <div className="section-header-info">
        <p className="section-pretitle">Get a quick look!</p>
  
        <h2 className="section-title">Events Calendar</h2>
      </div>
    </div>

    <div className="section-filters-bar v6">
      <div className="section-filters-bar-actions">
        <form className="form">
          <div className="form-item split">
            <div className="form-input small">
              <label for="events-search">Search Events</label>
              <input type="text" id="events-search" name="events_search"/>
            </div>
  
            <button className="button primary">
              <svg className="icon-magnifying-glass">
                <use xlinkHref="#svg-magnifying-glass"></use>
              </svg>
            </button>
          </div>
        </form>
      </div>
  
      <div className="section-filters-bar-actions">
        <p className="button secondary popup-event-creation-trigger">+ Add New Event</p>
      </div>
    </div>

    <div className="calendar-widget">
      <div className="calendar-widget-header">
        <div className="calendar-widget-header-actions">
          <div className="slider-controls">
            <div className="slider-control left">
              <svg className="slider-control-icon icon-big-arrow">
                <use xlinkHref="#svg-big-arrow"></use>
              </svg>
            </div>
    
            <div className="slider-control right">
              <svg className="slider-control-icon icon-big-arrow">
                <use xlinkHref="#svg-big-arrow"></use>
              </svg>
            </div>
          </div>

          <p className="calendar-widget-title">August 2019</p>
        </div>

        <div className="calendar-widget-header-actions">
          <div className="view-actions">
            <a className="view-action text-tooltip-tft-medium active" href="events" data-title="Monthly">
              <svg className="view-action-icon icon-events-monthly">
                <use xlinkHref="#svg-events-monthly"></use>
              </svg>
            </a>
    
            <a className="view-action text-tooltip-tft-medium" href="events-weekly" data-title="Weekly">
              <svg className="view-action-icon icon-events-weekly">
                <use xlinkHref="#svg-events-weekly"></use>
              </svg>
            </a>
    
            <a className="view-action text-tooltip-tft-medium" href="events-daily" data-title="Daily">
              <svg className="view-action-icon icon-events-daily">
                <use xlinkHref="#svg-events-daily"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="calendar full">
        <div className="calendar-week">
          <p className="calendar-week-day"><span className="week-day-short">Sun</span><span className="week-day-long">Sunday</span></p>
    
          <p className="calendar-week-day"><span className="week-day-short">Mon</span><span className="week-day-long">Monday</span></p>
    
          <p className="calendar-week-day"><span className="week-day-short">Tue</span><span className="week-day-long">Tuesday</span></p>
    
          <p className="calendar-week-day"><span className="week-day-short">Wed</span><span className="week-day-long">Wednesday</span></p>
    
          <p className="calendar-week-day"><span className="week-day-short">Thu</span><span className="week-day-long">Thursday</span></p>
    
          <p className="calendar-week-day"><span className="week-day-short">Fri</span><span className="week-day-long">Friday</span></p>
    
          <p className="calendar-week-day"><span className="week-day-short">Sat</span><span className="week-day-long">Saturday</span></p>
        </div>
    
        <div className="calendar-days">
          <div className="calendar-day-row">
            <div className="calendar-day inactive">
              <p className="calendar-day-number">29</p>
            </div>
    
            <div className="calendar-day inactive">
              <p className="calendar-day-number">30</p>
            </div>
    
            <div className="calendar-day inactive">
              <p className="calendar-day-number">31</p>
            </div>
    
            <div className="calendar-day">
              <p className="calendar-day-number">1</p>
            </div>
    
            <div className="calendar-day">
              <p className="calendar-day-number">2</p>
    
              <div className="calendar-day-events">
                <p className="calendar-day-event primary popup-event-information-trigger"><span className="calendar-day-event-text">Dex's Birthday</span></p>
    
                <p className="calendar-day-event secondary popup-event-information-trigger"><span className="calendar-day-event-text">Sara's Big Stream</span></p>
    
                <p className="calendar-day-event secondary popup-event-information-trigger"><span className="calendar-day-event-text">Striker GO Release</span></p>
              </div>
            </div>
    
            <div className="calendar-day">
              <p className="calendar-day-number">3</p>
            </div>
    
            <div className="calendar-day">
              <p className="calendar-day-number">4</p>
            </div>
          </div>
    
          <div className="calendar-day-row">
            <div className="calendar-day">
              <p className="calendar-day-number">5</p>
            </div>
    
            <div className="calendar-day">
              <p className="calendar-day-number">6</p>
            </div>
    
            <div className="calendar-day current">
              <p className="calendar-day-number">7</p>
            </div>
    
            <div className="calendar-day">
              <p className="calendar-day-number">8</p>
            </div>
    
            <div className="calendar-day">
              <p className="calendar-day-number">9</p>
            </div>
    
            <div className="calendar-day">
              <p className="calendar-day-number">10</p>
            </div>
    
            <div className="calendar-day">
              <p className="calendar-day-number">11</p>
            </div>
          </div>
    
          <div className="calendar-day-row">
            <div className="calendar-day">
              <p className="calendar-day-number">12</p>
            </div>
    
            <div className="calendar-day active">
              <p className="calendar-day-number">13</p>
    
              <div className="calendar-day-events">
                <p className="calendar-day-event secondary popup-event-information-trigger"><span className="calendar-day-event-text">Breakfast with Neko</span></p>
    
                <p className="calendar-day-event primary popup-event-information-trigger"><span className="calendar-day-event-text">Streaming Party</span></p>
              </div>
            </div>
    
            <div className="calendar-day">
              <p className="calendar-day-number">14</p>
            </div>
    
            <div className="calendar-day">
              <p className="calendar-day-number">15</p>
            </div>
    
            <div className="calendar-day">
              <p className="calendar-day-number">16</p>
            </div>
    
            <div className="calendar-day">
              <p className="calendar-day-number">17</p>
            </div>
    
            <div className="calendar-day">
              <p className="calendar-day-number">18</p>
            </div>
          </div>
    
          <div className="calendar-day-row">
            <div className="calendar-day">
              <p className="calendar-day-number">19</p>
            </div>
    
            <div className="calendar-day">
              <p className="calendar-day-number">20</p>
            </div>
    
            <div className="calendar-day">
              <p className="calendar-day-number">21</p>
            </div>
    
            <div className="calendar-day">
              <p className="calendar-day-number">22</p>
            </div>
    
            <div className="calendar-day">
              <p className="calendar-day-number">23</p>
            </div>
    
            <div className="calendar-day">
              <p className="calendar-day-number">24</p>
            </div>
    
            <div className="calendar-day">
              <p className="calendar-day-number">25</p>
            </div>
          </div>
    
          <div className="calendar-day-row">
            <div className="calendar-day">
              <p className="calendar-day-number">26</p>
    
              <div className="calendar-day-events">
                <p className="calendar-day-event primary popup-event-information-trigger"><span className="calendar-day-event-text">CosWorld 2019 After...</span></p>
              </div>
            </div>
    
            <div className="calendar-day">
              <p className="calendar-day-number">27</p>
            </div>
    
            <div className="calendar-day">
              <p className="calendar-day-number">28</p>
            </div>
    
            <div className="calendar-day">
              <p className="calendar-day-number">29</p>
            </div>
    
            <div className="calendar-day">
              <p className="calendar-day-number">30</p>
            </div>
    
            <div className="calendar-day inactive">
              <p className="calendar-day-number">1</p>
            </div>
    
            <div className="calendar-day inactive">
              <p className="calendar-day-number">2</p>
            </div>
          </div>
        </div>
      </div>

      <div className="calendar-events-preview">
        <p className="calendar-events-preview-title">Monday, August 13th - 2019</p>
    
        <div className="calendar-event-preview-list">
          <div className="calendar-event-preview secondary">
            <div className="calendar-event-preview-start-time">
              <p className="calendar-event-preview-start-time-title">8:30</p>
    
              <p className="calendar-event-preview-start-time-text">AM</p>
            </div>
    
            <div className="calendar-event-preview-info">
              <p className="calendar-event-preview-title popup-event-information-trigger">Breakfast with Neko</p>
    
              <p className="calendar-event-preview-text">Hi Neko! I'm creating this event to invite you to have breakfast before work. Meet me at Coffebucks.</p>
    
              <p className="calendar-event-preview-time"><span className="bold">8:30</span> AM</p>
            </div>
          </div>
    
          <div className="calendar-event-preview primary">
            <div className="calendar-event-preview-start-time">
              <p className="calendar-event-preview-start-time-title">10:00</p>
    
              <p className="calendar-event-preview-start-time-text">PM</p>
            </div>
    
            <div className="calendar-event-preview-info">
              <p className="calendar-event-preview-title popup-event-information-trigger">Streaming Party</p>
    
              <p className="calendar-event-preview-text">The biggest party for Twitch streamers! Come and join us at Shenron Arena.</p>
    
              <p className="calendar-event-preview-time"><span className="bold">10:00</span> PM - <span className="bold">11:30</span> PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="section-header">
      <div className="section-header-info">
        <p className="section-pretitle">See what's next!</p>
  
        <h2 className="section-title">Upcoming Events</h2>
      </div>
    </div>

    <div className="grid grid-3-3-3-3 centered">
      <div className="event-preview">
        <figure className="event-preview-cover liquid">
          <img src="img/cover/47.jpg" alt="cover-47"/>
        </figure>
    
        <div className="event-preview-info">
          <div className="event-preview-info-top">
            <div className="date-sticker">
              <p className="date-sticker-day">13</p>
      
              <p className="date-sticker-month">Aug</p>
            </div>
    
            <p className="event-preview-title popup-event-information-trigger">Breakfast with Neko</p>
    
            <p className="event-preview-timestamp"><span className="bold">8:30</span> AM</p>
    
            <p className="event-preview-text">Hi Neko! I'm creating this event to invite you to have breakfast before work. Meet me at Coffebucks.</p>
          </div>
    
          <div className="event-preview-info-bottom">
            <div className="decorated-text">
              <svg className="decorated-text-icon icon-pin">
                <use xlinkHref="#svg-pin"></use>
              </svg>
    
              <p className="decorated-text-content">Downtown Coffeebucks</p>
            </div>
    
            <div className="meta-line">
              <div className="meta-line-list user-avatar-list">
                <div className="user-avatar micro no-stats">
                  <div className="user-avatar-border">
                    <div className="hexagon-22-24"></div>
                  </div>
              
                  <div className="user-avatar-content">
                    <div className="hexagon-image-18-20" data-src="img/avatar/05.jpg"></div>
                  </div>
                </div>
    
                <div className="user-avatar micro no-stats">
                  <div className="user-avatar-border">
                    <div className="hexagon-22-24"></div>
                  </div>
              
                  <div className="user-avatar-content">
                    <div className="hexagon-image-18-20" data-src="img/avatar/01.jpg"></div>
                  </div>
                </div>
              </div>
    
              <p className="meta-line-text">will assist</p>
            </div>
    
            <p className="button white white-tertiary">Remove from Calendar</p>
          </div>
        </div>
      </div>

      <div className="event-preview">
        <figure className="event-preview-cover liquid">
          <img src="img/cover/23.jpg" alt="cover-23"/>
        </figure>
    
        <div className="event-preview-info">
          <div className="event-preview-info-top">
            <div className="date-sticker">
              <p className="date-sticker-day">13</p>
      
              <p className="date-sticker-month">Aug</p>
            </div>
      
            <p className="event-preview-title popup-event-information-trigger">Streaming Party</p>
      
            <p className="event-preview-timestamp"><span className="bold">10:00</span> PM - <span className="bold">11:30</span> PM</p>
      
            <p className="event-preview-text">The biggest party for Twitch streamers! Come and join us at Shenron Arena.</p>
          </div>
    
          <div className="event-preview-info-bottom">
            <div className="decorated-text">
              <svg className="decorated-text-icon icon-pin">
                <use xlinkHref="#svg-pin"></use>
              </svg>
      
              <p className="decorated-text-content">Shenron Arena</p>
            </div>
      
            <div className="meta-line">
              <div className="meta-line-list user-avatar-list">
                <div className="user-avatar micro no-stats">
                  <div className="user-avatar-border">
                    <div className="hexagon-22-24"></div>
                  </div>
              
                  <div className="user-avatar-content">
                    <div className="hexagon-image-18-20" data-src="img/avatar/09.jpg"></div>
                  </div>
                </div>
      
                <div className="user-avatar micro no-stats">
                  <div className="user-avatar-border">
                    <div className="hexagon-22-24"></div>
                  </div>
              
                  <div className="user-avatar-content">
                    <div className="hexagon-image-18-20" data-src="img/avatar/08.jpg"></div>
                  </div>
                </div>

                <div className="user-avatar micro no-stats">
                  <div className="user-avatar-border">
                    <div className="hexagon-22-24"></div>
                  </div>
              
                  <div className="user-avatar-content">
                    <div className="hexagon-image-18-20" data-src="img/avatar/12.jpg"></div>
                  </div>
                </div>

                <div className="user-avatar micro no-stats">
                  <div className="user-avatar-border">
                    <div className="hexagon-22-24"></div>
                  </div>
              
                  <div className="user-avatar-content">
                    <div className="hexagon-image-18-20" data-src="img/avatar/16.jpg"></div>
                  </div>
                </div>

                <div className="user-avatar micro no-stats">
                  <div className="user-avatar-border">
                    <div className="hexagon-22-24"></div>
                  </div>
              
                  <div className="user-avatar-content">
                    <div className="hexagon-image-18-20" data-src="img/avatar/06.jpg"></div>
                  </div>
                </div>
              </div>
      
              <p className="meta-line-text">+31 will assist</p>
            </div>
      
            <p className="button white white-tertiary">Remove from Calendar</p>
          </div>
        </div>
      </div>

      <div className="event-preview">
        <figure className="event-preview-cover liquid">
          <img src="img/cover/33.jpg" alt="cover-33"/>
        </figure>
    
        <div className="event-preview-info">
          <div className="event-preview-info-top">
            <div className="date-sticker">
              <p className="date-sticker-day">26</p>
      
              <p className="date-sticker-month">Aug</p>
            </div>
      
            <p className="event-preview-title popup-event-information-trigger">CosWorld 2019 After Party</p>
      
            <p className="event-preview-timestamp"><span className="bold">11:00</span> PM</p>
      
            <p className="event-preview-text">Join us at the CosWorld after party! We'll be eating, drinking and having a great time exchanging experiences...</p>
          </div>
    
          <div className="event-preview-info-bottom">
            <div className="decorated-text">
              <svg className="decorated-text-icon icon-pin">
                <use xlinkHref="#svg-pin"></use>
              </svg>
      
              <p className="decorated-text-content">CosWorld Arena</p>
            </div>
      
            <div className="meta-line">
              <div className="meta-line-list user-avatar-list">
                <div className="user-avatar micro no-stats">
                  <div className="user-avatar-border">
                    <div className="hexagon-22-24"></div>
                  </div>
              
                  <div className="user-avatar-content">
                    <div className="hexagon-image-18-20" data-src="img/avatar/06.jpg"></div>
                  </div>
                </div>
      
                <div className="user-avatar micro no-stats">
                  <div className="user-avatar-border">
                    <div className="hexagon-22-24"></div>
                  </div>
              
                  <div className="user-avatar-content">
                    <div className="hexagon-image-18-20" data-src="img/avatar/07.jpg"></div>
                  </div>
                </div>

                <div className="user-avatar micro no-stats">
                  <div className="user-avatar-border">
                    <div className="hexagon-22-24"></div>
                  </div>
              
                  <div className="user-avatar-content">
                    <div className="hexagon-image-18-20" data-src="img/avatar/02.jpg"></div>
                  </div>
                </div>

                <div className="user-avatar micro no-stats">
                  <div className="user-avatar-border">
                    <div className="hexagon-22-24"></div>
                  </div>
              
                  <div className="user-avatar-content">
                    <div className="hexagon-image-18-20" data-src="img/avatar/10.jpg"></div>
                  </div>
                </div>

                <div className="user-avatar micro no-stats">
                  <div className="user-avatar-border">
                    <div className="hexagon-22-24"></div>
                  </div>
              
                  <div className="user-avatar-content">
                    <div className="hexagon-image-18-20" data-src="img/avatar/05.jpg"></div>
                  </div>
                </div>
              </div>
      
              <p className="meta-line-text">+24 will assist</p>
            </div>
      
            <p className="button white white-tertiary">Remove from Calendar</p>
          </div>
        </div>
      </div>

      <div className="event-preview">
        <figure className="event-preview-cover liquid">
          <img src="img/cover/40.jpg" alt="cover-40"/>
        </figure>
    
        <div className="event-preview-info">
          <div className="event-preview-info-top">
            <div className="date-sticker">
              <p className="date-sticker-day">9</p>
      
              <p className="date-sticker-month">Sep</p>
            </div>
      
            <p className="event-preview-title popup-event-information-trigger">Artistic Painting Course</p>
      
            <p className="event-preview-timestamp"><span className="bold">6:00</span> PM</p>
      
            <p className="event-preview-text">Come to have a great time with us at our artistic painting course! Begginers and experts welcome!</p>
          </div>
    
          <div className="event-preview-info-bottom">
            <div className="decorated-text">
              <svg className="decorated-text-icon icon-pin">
                <use xlinkHref="#svg-pin"></use>
              </svg>
      
              <p className="decorated-text-content">Xavier's Art Center</p>
            </div>
      
            <div className="meta-line">
              <div className="meta-line-list user-avatar-list">
                <div className="user-avatar micro no-stats">
                  <div className="user-avatar-border">
                    <div className="hexagon-22-24"></div>
                  </div>
              
                  <div className="user-avatar-content">
                    <div className="hexagon-image-18-20" data-src="img/avatar/13.jpg"></div>
                  </div>
                </div>
      
                <div className="user-avatar micro no-stats">
                  <div className="user-avatar-border">
                    <div className="hexagon-22-24"></div>
                  </div>
              
                  <div className="user-avatar-content">
                    <div className="hexagon-image-18-20" data-src="img/avatar/12.jpg"></div>
                  </div>
                </div>

                <div className="user-avatar micro no-stats">
                  <div className="user-avatar-border">
                    <div className="hexagon-22-24"></div>
                  </div>
              
                  <div className="user-avatar-content">
                    <div className="hexagon-image-18-20" data-src="img/avatar/11.jpg"></div>
                  </div>
                </div>

                <div className="user-avatar micro no-stats">
                  <div className="user-avatar-border">
                    <div className="hexagon-22-24"></div>
                  </div>
              
                  <div className="user-avatar-content">
                    <div className="hexagon-image-18-20" data-src="img/avatar/03.jpg"></div>
                  </div>
                </div>

                <div className="user-avatar micro no-stats">
                  <div className="user-avatar-border">
                    <div className="hexagon-22-24"></div>
                  </div>
              
                  <div className="user-avatar-content">
                    <div className="hexagon-image-18-20" data-src="img/avatar/04.jpg"></div>
                  </div>
                </div>
              </div>
      
              <p className="meta-line-text">+17 will assist</p>
            </div>
      
            <p className="button white white-tertiary">Remove from Calendar</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Events