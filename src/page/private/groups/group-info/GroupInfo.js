import React from 'react'

const GroupInfo = () => {
  return (
    <div className="grid grid-3-6-3">
      <div className="grid-column">
        <div className="widget-box">
          <div className="widget-box-settings">
            <div className="post-settings-wrap">
              <div className="post-settings widget-box-post-settings-dropdown-trigger">
                <svg className="post-settings-icon icon-more-dots">
                  <use xlinkHref="#svg-more-dots"></use>
                </svg>
              </div>

              <div className="simple-dropdown widget-box-post-settings-dropdown">
                <p className="simple-dropdown-link">Widget Settings</p>
              </div>
            </div>
          </div>

          <p className="widget-box-title">Social Networks</p>

          <div className="widget-box-content">
            <div className="social-links multiline align-left">
              <a className="social-link small facebook" href="#">
                <svg className="social-link-icon icon-facebook">
                  <use xlinkHref="#svg-facebook"></use>
                </svg>
              </a>

              <a className="social-link small twitter" href="#">
                <svg className="social-link-icon icon-twitter">
                  <use xlinkHref="#svg-twitter"></use>
                </svg>
              </a>

              <a className="social-link small instagram" href="#">
                <svg className="social-link-icon icon-instagram">
                  <use xlinkHref="#svg-instagram"></use>
                </svg>
              </a>

              <a className="social-link small twitch" href="#">
                <svg className="social-link-icon icon-twitch">
                  <use xlinkHref="#svg-twitch"></use>
                </svg>
              </a>

              <a className="social-link small artstation" href="#">
                <svg className="social-link-icon icon-artstation">
                  <use xlinkHref="#svg-artstation"></use>
                </svg>
              </a>

              <a className="social-link small youtube" href="#">
                <svg className="social-link-icon icon-youtube">
                  <use xlinkHref="#svg-youtube"></use>
                </svg>
              </a>

              <a className="social-link small discord" href="#">
                <svg className="social-link-icon icon-discord">
                  <use xlinkHref="#svg-discord"></use>
                </svg>
              </a>

              <a className="social-link small patreon" href="#">
                <svg className="social-link-icon icon-patreon">
                  <use xlinkHref="#svg-patreon"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="widget-box">
          <div className="widget-box-settings">
            <div className="post-settings-wrap">
              <div className="post-settings widget-box-post-settings-dropdown-trigger">
                <svg className="post-settings-icon icon-more-dots">
                  <use xlinkHref="#svg-more-dots"></use>
                </svg>
              </div>

              <div className="simple-dropdown widget-box-post-settings-dropdown">
                <p className="simple-dropdown-link">Widget Settings</p>
              </div>
            </div>
          </div>

          <p className="widget-box-title">Group Info</p>

          <div className="widget-box-content">
            <p className="paragraph">Hello everyone! This is a group open to all for cosplayers around the world to talk about their passion, trade tips, ask for opinions and have a great time!</p>

            <div className="information-line-list">
              <div className="information-line">
                <p className="information-line-title">Created</p>

                <p className="information-line-text">April 9th, 2018</p>
              </div>

              <div className="information-line">
                <p className="information-line-title">Type</p>

                <p className="information-line-text">Public</p>
              </div>

              <div className="information-line">
                <p className="information-line-title">Email</p>

                <p className="information-line-text"><a href="#">info@cosworld.com</a></p>
              </div>

              <div className="information-line">
                <p className="information-line-title">Web</p>

                <p className="information-line-text"><a href="#">www.cosplayworld.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-column">
        <div className="grid grid-half">
          <div className="stats-decoration v2 secondary">
            <p className="stats-decoration-title">659</p>
        
            <p className="stats-decoration-subtitle">Group Views</p>
        
            <p className="stats-decoration-text">Last Month</p>
        
            <div className="percentage-diff">
              <div className="percentage-diff-icon-wrap positive">
                <svg className="percentage-diff-icon icon-plus-small">
                  <use xlinkHref="#svg-plus-small"></use>
                </svg>
              </div>
        
              <p className="percentage-diff-text">8.1%</p>
            </div>
          </div>
        
          <div className="stats-decoration v2 primary">
            <p className="stats-decoration-title">14</p>
        
            <p className="stats-decoration-subtitle">New Discussions</p>
        
            <p className="stats-decoration-text">Last Month</p>
        
            <div className="percentage-diff">
              <div className="percentage-diff-icon-wrap negative">
                <svg className="percentage-diff-icon icon-minus-small">
                  <use xlinkHref="#svg-minus-small"></use>
                </svg>
              </div>
        
              <p className="percentage-diff-text">0.2%</p>
            </div>
          </div>
        </div>

        <div className="widget-box">
          <div className="widget-box-actions">
            <div className="widget-box-action">
              <p className="widget-box-title">New Members</p>
            </div>

            <div className="widget-box-action">
              <div className="form-select v2">
                <select id="members-report-date" name="members_report_date">
                  <option value="0">Jan - Dec 2018</option>
                  <option value="1">Jan - Dec 2019</option>
                </select>
                <svg className="form-select-icon icon-small-arrow">
                  <use xlinkHref="#svg-small-arrow"></use>
                </svg>
              </div>
            </div>
          </div>

          <div className="widget-box-content">
            <div className="chart-wrap">
              <div className="chart">
                <canvas id="members-report-chart"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-column">
        <div className="widget-box">
          <div className="widget-box-settings">
            <div className="post-settings-wrap">
              <div className="post-settings widget-box-post-settings-dropdown-trigger">
                <svg className="post-settings-icon icon-more-dots">
                  <use xlinkHref="#svg-more-dots"></use>
                </svg>
              </div>

              <div className="simple-dropdown widget-box-post-settings-dropdown">
                <p className="simple-dropdown-link">Widget Settings</p>
              </div>
            </div>
          </div>

          <p className="widget-box-title">Group Rules</p>

          <div className="widget-box-content">
            <p className="paragraph">Hi! To ensure that this is a great place for everyone to have a wondefull time, we have some rules. Breaking them will result in a ban from the group.</p>

            <ol className="ordered-item-list">
              <li className="ordered-item">
                <p className="ordered-item-bullet">01-</p>

                <p className="ordered-item-text">Be positive! Respect and help other viewers</p>
              </li>

              <li className="ordered-item">
                <p className="ordered-item-bullet">02-</p>

                <p className="ordered-item-text">No insults, aggravations or any other bad language</p>
              </li>

              <li className="ordered-item">
                <p className="ordered-item-bullet">03-</p>

                <p className="ordered-item-text">No self promotions</p>
              </li>

              <li className="ordered-item">
                <p className="ordered-item-bullet">04-</p>

                <p className="ordered-item-text">Avoid political or religious discussions</p>
              </li>

              <li className="ordered-item">
                <p className="ordered-item-bullet">05-</p>

                <p className="ordered-item-text">No comment spamming</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GroupInfo