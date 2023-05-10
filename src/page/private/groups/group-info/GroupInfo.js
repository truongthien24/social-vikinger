import React from 'react'

const GroupInfo = () => {
  return (
    <div class="grid grid-3-6-3">
      <div class="grid-column">
        <div class="widget-box">
          <div class="widget-box-settings">
            <div class="post-settings-wrap">
              <div class="post-settings widget-box-post-settings-dropdown-trigger">
                <svg class="post-settings-icon icon-more-dots">
                  <use xlinkHref="#svg-more-dots"></use>
                </svg>
              </div>

              <div class="simple-dropdown widget-box-post-settings-dropdown">
                <p class="simple-dropdown-link">Widget Settings</p>
              </div>
            </div>
          </div>

          <p class="widget-box-title">Social Networks</p>

          <div class="widget-box-content">
            <div class="social-links multiline align-left">
              <a class="social-link small facebook" href="#">
                <svg class="social-link-icon icon-facebook">
                  <use xlinkHref="#svg-facebook"></use>
                </svg>
              </a>

              <a class="social-link small twitter" href="#">
                <svg class="social-link-icon icon-twitter">
                  <use xlinkHref="#svg-twitter"></use>
                </svg>
              </a>

              <a class="social-link small instagram" href="#">
                <svg class="social-link-icon icon-instagram">
                  <use xlinkHref="#svg-instagram"></use>
                </svg>
              </a>

              <a class="social-link small twitch" href="#">
                <svg class="social-link-icon icon-twitch">
                  <use xlinkHref="#svg-twitch"></use>
                </svg>
              </a>

              <a class="social-link small artstation" href="#">
                <svg class="social-link-icon icon-artstation">
                  <use xlinkHref="#svg-artstation"></use>
                </svg>
              </a>

              <a class="social-link small youtube" href="#">
                <svg class="social-link-icon icon-youtube">
                  <use xlinkHref="#svg-youtube"></use>
                </svg>
              </a>

              <a class="social-link small discord" href="#">
                <svg class="social-link-icon icon-discord">
                  <use xlinkHref="#svg-discord"></use>
                </svg>
              </a>

              <a class="social-link small patreon" href="#">
                <svg class="social-link-icon icon-patreon">
                  <use xlinkHref="#svg-patreon"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="widget-box">
          <div class="widget-box-settings">
            <div class="post-settings-wrap">
              <div class="post-settings widget-box-post-settings-dropdown-trigger">
                <svg class="post-settings-icon icon-more-dots">
                  <use xlinkHref="#svg-more-dots"></use>
                </svg>
              </div>

              <div class="simple-dropdown widget-box-post-settings-dropdown">
                <p class="simple-dropdown-link">Widget Settings</p>
              </div>
            </div>
          </div>

          <p class="widget-box-title">Group Info</p>

          <div class="widget-box-content">
            <p class="paragraph">Hello everyone! This is a group open to all for cosplayers around the world to talk about their passion, trade tips, ask for opinions and have a great time!</p>

            <div class="information-line-list">
              <div class="information-line">
                <p class="information-line-title">Created</p>

                <p class="information-line-text">April 9th, 2018</p>
              </div>

              <div class="information-line">
                <p class="information-line-title">Type</p>

                <p class="information-line-text">Public</p>
              </div>

              <div class="information-line">
                <p class="information-line-title">Email</p>

                <p class="information-line-text"><a href="#">info@cosworld.com</a></p>
              </div>

              <div class="information-line">
                <p class="information-line-title">Web</p>

                <p class="information-line-text"><a href="#">www.cosplayworld.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid-column">
        <div class="grid grid-half">
          <div class="stats-decoration v2 secondary">
            <p class="stats-decoration-title">659</p>
        
            <p class="stats-decoration-subtitle">Group Views</p>
        
            <p class="stats-decoration-text">Last Month</p>
        
            <div class="percentage-diff">
              <div class="percentage-diff-icon-wrap positive">
                <svg class="percentage-diff-icon icon-plus-small">
                  <use xlinkHref="#svg-plus-small"></use>
                </svg>
              </div>
        
              <p class="percentage-diff-text">8.1%</p>
            </div>
          </div>
        
          <div class="stats-decoration v2 primary">
            <p class="stats-decoration-title">14</p>
        
            <p class="stats-decoration-subtitle">New Discussions</p>
        
            <p class="stats-decoration-text">Last Month</p>
        
            <div class="percentage-diff">
              <div class="percentage-diff-icon-wrap negative">
                <svg class="percentage-diff-icon icon-minus-small">
                  <use xlinkHref="#svg-minus-small"></use>
                </svg>
              </div>
        
              <p class="percentage-diff-text">0.2%</p>
            </div>
          </div>
        </div>

        <div class="widget-box">
          <div class="widget-box-actions">
            <div class="widget-box-action">
              <p class="widget-box-title">New Members</p>
            </div>

            <div class="widget-box-action">
              <div class="form-select v2">
                <select id="members-report-date" name="members_report_date">
                  <option value="0">Jan - Dec 2018</option>
                  <option value="1">Jan - Dec 2019</option>
                </select>
                <svg class="form-select-icon icon-small-arrow">
                  <use xlinkHref="#svg-small-arrow"></use>
                </svg>
              </div>
            </div>
          </div>

          <div class="widget-box-content">
            <div class="chart-wrap">
              <div class="chart">
                <canvas id="members-report-chart"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid-column">
        <div class="widget-box">
          <div class="widget-box-settings">
            <div class="post-settings-wrap">
              <div class="post-settings widget-box-post-settings-dropdown-trigger">
                <svg class="post-settings-icon icon-more-dots">
                  <use xlinkHref="#svg-more-dots"></use>
                </svg>
              </div>

              <div class="simple-dropdown widget-box-post-settings-dropdown">
                <p class="simple-dropdown-link">Widget Settings</p>
              </div>
            </div>
          </div>

          <p class="widget-box-title">Group Rules</p>

          <div class="widget-box-content">
            <p class="paragraph">Hi! To ensure that this is a great place for everyone to have a wondefull time, we have some rules. Breaking them will result in a ban from the group.</p>

            <ol class="ordered-item-list">
              <li class="ordered-item">
                <p class="ordered-item-bullet">01-</p>

                <p class="ordered-item-text">Be positive! Respect and help other viewers</p>
              </li>

              <li class="ordered-item">
                <p class="ordered-item-bullet">02-</p>

                <p class="ordered-item-text">No insults, aggravations or any other bad language</p>
              </li>

              <li class="ordered-item">
                <p class="ordered-item-bullet">03-</p>

                <p class="ordered-item-text">No self promotions</p>
              </li>

              <li class="ordered-item">
                <p class="ordered-item-bullet">04-</p>

                <p class="ordered-item-text">Avoid political or religious discussions</p>
              </li>

              <li class="ordered-item">
                <p class="ordered-item-bullet">05-</p>

                <p class="ordered-item-text">No comment spamming</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GroupInfo