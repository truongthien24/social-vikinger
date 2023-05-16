import React from 'react'

const HubProfileSocial = () => {
  return (
    <div className="account-hub-content">
        <div className="section-header">
        <div className="section-header-info">
            <p className="section-pretitle">My Profile</p>

            <h2 className="section-title">Social Networks</h2>
        </div>
        </div>

        <div className="grid-column">
        <div className="widget-box">
            <p className="widget-box-title">Your Social Accounts</p>
        
            <div className="widget-box-content">
            <form className="form">
                <div className="form-row split">
                <div className="form-item">
                    <div className="form-input social-input small active">
                    <div className="social-link no-hover facebook">
                        <svg className="icon-facebook">
                        <use xlinkHref="#svg-facebook"></use>
                        </svg>
                    </div>
                
                    <label for="social-account-facebook">Facebook Username</label>
                    <input type="text" id="social-account-facebook" name="social_account_facebook" value="marinavalentine182"/>
                    </div>
                </div>

                <div className="form-item">
                    <div className="form-input social-input small active">
                    <div className="social-link no-hover twitter">
                        <svg className="icon-twitter">
                        <use xlinkHref="#svg-twitter"></use>
                        </svg>
                    </div>
                
                    <label for="social-account-twitter">Twitter Username</label>
                    <input type="text" id="social-account-twitter" name="social_account_twitter" value="dghuntress"/>
                    </div>
                </div>
                </div>

                <div className="form-row split">
                <div className="form-item">
                    <div className="form-input social-input small active">
                    <div className="social-link no-hover instagram">
                        <svg className="icon-instagram">
                        <use xlinkHref="#svg-instagram"></use>
                        </svg>
                    </div>
                
                    <label for="social-account-instagram">Instagram Username</label>
                    <input type="text" id="social-account-instagram" name="social_account_instagram" value="mvalentine"/>
                    </div>
                </div>

                <div className="form-item">
                    <div className="form-input social-input small active">
                    <div className="social-link no-hover twitch">
                        <svg className="icon-twitch">
                        <use xlinkHref="#svg-twitch"></use>
                        </svg>
                    </div>
                
                    <label for="social-account-twitch">Twitch Username</label>
                    <input type="text" id="social-account-twitch" name="social_account_twitch" value="gamehuntress"/>
                    </div>
                </div>
                </div>

                <div className="form-row split">
                <div className="form-item">
                    <div className="form-input social-input small">
                    <div className="social-link no-hover google">
                        <svg className="icon-google">
                        <use xlinkHref="#svg-google"></use>
                        </svg>
                    </div>
                
                    <label for="social-account-google">Google + Username</label>
                    <input type="text" id="social-account-google" name="social_account_google"/>
                    </div>
                </div>

                <div className="form-item">
                    <div className="form-input social-input small active">
                    <div className="social-link no-hover youtube">
                        <svg className="icon-youtube">
                        <use xlinkHref="#svg-youtube"></use>
                        </svg>
                    </div>
                
                    <label for="social-account-youtube">Youtube Username</label>
                    <input type="text" id="social-account-youtube" name="social_account_youtube" value="dagamehuntress"/>
                    </div>
                </div>
                </div>

                <div className="form-row split">
                <div className="form-item">
                    <div className="form-input social-input small active">
                    <div className="social-link no-hover patreon">
                        <svg className="icon-patreon">
                        <use xlinkHref="#svg-patreon"></use>
                        </svg>
                    </div>
                
                    <label for="social-account-patreon">Patreon Username</label>
                    <input type="text" id="social-account-patreon" name="social_account_patreon" value="huntressplays"/>
                    </div>
                </div>

                <div className="form-item">
                    <div className="form-input social-input small active">
                    <div className="social-link no-hover discord">
                        <svg className="icon-discord">
                        <use xlinkHref="#svg-discord"></use>
                        </svg>
                    </div>
                
                    <label for="social-account-discord">Discord Channel</label>
                    <input type="text" id="social-account-discord" name="social_account_discord" value="huntressgrounds"/>
                    </div>
                </div>
                </div>

                <div className="form-row split">
                <div className="form-item">
                    <div className="form-input social-input small">
                    <div className="social-link no-hover deviantart">
                        <svg className="icon-deviantart">
                        <use xlinkHref="#svg-deviantart"></use>
                        </svg>
                    </div>
                
                    <label for="social-account-deviantart">DeviantArt Username</label>
                    <input type="text" id="social-account-deviantart" name="social_account_deviantart"/>
                    </div>
                </div>

                <div className="form-item">
                    <div className="form-input social-input small">
                    <div className="social-link no-hover behance">
                        <svg className="icon-behance">
                        <use xlinkHref="#svg-behance"></use>
                        </svg>
                    </div>
                
                    <label for="social-account-behance">Behance Username</label>
                    <input type="text" id="social-account-behance" name="social_account_behance"/>
                    </div>
                </div>
                </div>

                <div className="form-row split">
                <div className="form-item">
                    <div className="form-input social-input small">
                    <div className="social-link no-hover dribbble">
                        <svg className="icon-dribbble">
                        <use xlinkHref="#svg-dribbble"></use>
                        </svg>
                    </div>
                
                    <label for="social-account-dribbble">Dribbble Username</label>
                    <input type="text" id="social-account-dribbble" name="social_account_dribbble"/>
                    </div>
                </div>

                <div className="form-item">
                    <div className="form-input social-input small">
                    <div className="social-link no-hover artstation">
                        <svg className="icon-artstation">
                        <use xlinkHref="#svg-artstation"></use>
                        </svg>
                    </div>
                
                    <label for="social-account-artstation">ArtStation Username</label>
                    <input type="text" id="social-account-artstation" name="social_account_artstation"/>
                    </div>
                </div>
                </div>
            </form>
            </div>
        </div>

        <div className="widget-box">
            <p className="widget-box-title">Twitter Feed</p>
        
            <div className="widget-box-content">
            <div className="switch-option">
                <p className="switch-option-title">Enable Twitter Feed</p>

                <p className="switch-option-text">Turn on this switch to show your connected twitter account in your profile page</p>

                <div className="form-switch active">
                <div className="form-switch-button"></div>
                </div>

                <a className="button twitter" href="#">
                <svg className="button-icon spaced icon-twitter">
                    <use xlinkHref="#svg-twitter"></use>
                </svg>
                Link your Twitter Account
                </a>

                <p className="switch-option-meta">Linked Account: <span className="bold">@dghuntress</span></p>
            </div>
            </div>
        </div>
        </div>

        <div className="section-header">
        <div className="section-header-info">
            <p className="section-pretitle">My Profile</p>

            <h2 className="section-title">Twitch Stream</h2>
        </div>
        </div>

        <div className="grid-column">
        <div className="widget-box">
            <p className="widget-box-title">Connect your Account</p>
        
            <div className="widget-box-content">
            <div className="switch-option">
                <p className="switch-option-title">Enable Stream Profile Section</p>

                <p className="switch-option-text">Turn on this switch to show your connected stream in your profile for everyone to see!</p>

                <div className="form-switch">
                <div className="form-switch-button"></div>
                </div>

                <a className="button twitch" href="#">
                <svg className="button-icon spaced icon-twitch">
                    <use xlinkHref="#svg-twitch"></use>
                </svg>
                Link your Twitch Account
                </a>

                <p className="switch-option-meta">Linked Account: <span className="bold">@gamehuntress</span></p>
            </div>
            </div>
        </div>

        <div className="widget-box">
            <p className="widget-box-title">Your Channel FAQs</p>
        
            <div className="widget-box-content">
            <form className="form">
                <div className="form-row split">
                <div className="form-item">
                    <div className="form-input small active">
                    <label for="profile-social-question-1">Question</label>
                    <input type="text" id="profile-social-question-1" name="profile_social_question_1" value="Do I only play new games?"/>
                    </div>
                </div>

                <div className="form-item">
                    <div className="form-input small mid-textarea active">
                    <label for="profile-social-answer-1">Answer</label>
                    <textarea id="profile-social-answer-1" name="profile_social_answer_1">Although I play a lot of newer games, I also have a small time on weekends that I use to play some cool retro games.</textarea>
                    </div>
                </div>
                </div>

                <div className="form-row split">
                <div className="form-item">
                    <div className="form-input small active">
                    <label for="profile-social-question-2">Question</label>
                    <input type="text" id="profile-social-question-2" name="profile_social_question_2" value="Do I take stream requests?"/>
                    </div>
                </div>

                <div className="form-item">
                    <div className="form-input small mid-textarea active">
                    <label for="profile-social-answer-2">Answer</label>
                    <textarea id="profile-social-answer-2" name="profile_social_answer_2">Yes! Join me on my channel's chatbox every saturday and I'll be taking game requests for upcoming streams.</textarea>
                    </div>
                </div>
                </div>

                <div className="form-row split">
                <div className="form-item">
                    <div className="form-input small">
                    <label for="profile-social-question-3">Question</label>
                    <input type="text" id="profile-social-question-3" name="profile_social_question_3"/>
                    </div>
                </div>

                <div className="form-item">
                    <div className="form-input small mid-textarea">
                    <label for="profile-social-answer-3">Answer</label>
                    <textarea id="profile-social-answer-3" name="profile_social_answer_3"></textarea>
                    </div>
                </div>
                </div>
            </form>

            <p className="button small white add-field-button">+ Add New Field</p>
            </div>
        </div>

        <div className="widget-box">
            <p className="widget-box-title">Your Streaming Schedule</p>
        
            <div className="widget-box-content">
            <form className="form">
                <div className="form-row">
                <div className="form-item">
                    <div className="form-input small mid-textarea active">
                    <label for="profile-social-stream-schedule-description">Description</label>
                    <textarea id="profile-social-stream-schedule-description" name="profile_social_stream_schedule_description">My main stream is Saturday at 9PM but I also make "Let's Play" streams on weekdays. In addition I make special morning streams at 10AM all 1st‘s, 15th’s and 30th’s of every month with the lastest gaming news. All times are EDT Eastern Daylight Time</textarea>
                    </div>
                </div>
                </div>

                <div className="form-row split">
                <div className="form-item">
                    <div className="form-select">
                    <label for="profile-social-stream-schedule-monday">Monday</label>
                    <select id="profile-social-stream-schedule-monday" name="profile_social_stream_schedule_monday">
                        <option value="0">-</option>
                        <option value="1" selected>10PM</option>
                    </select>
                    <svg className="form-select-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow"></use>
                    </svg>
                    </div>
                </div>

                <div className="form-item">
                    <div className="form-select">
                    <label for="profile-social-stream-schedule-tuesday">Tuesday</label>
                    <select id="profile-social-stream-schedule-tuesday" name="profile_social_stream_schedule_tuesday">
                        <option value="0">-</option>
                        <option value="1">10PM</option>
                    </select>
                    <svg className="form-select-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow"></use>
                    </svg>
                    </div>
                </div>

                <div className="form-item">
                    <div className="form-select">
                    <label for="profile-social-stream-schedule-wednesday">Wednesday</label>
                    <select id="profile-social-stream-schedule-wednesday" name="profile_social_stream_schedule_wednesday">
                        <option value="0">-</option>
                        <option value="1" selected>9PM</option>
                    </select>
                    <svg className="form-select-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow"></use>
                    </svg>
                    </div>
                </div>

                <div className="form-item">
                    <div className="form-select">
                    <label for="profile-social-stream-schedule-thursday">Thursday</label>
                    <select id="profile-social-stream-schedule-thursday" name="profile_social_stream_schedule_thursday">
                        <option value="0">-</option>
                        <option value="1" selected>10PM</option>
                    </select>
                    <svg className="form-select-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow"></use>
                    </svg>
                    </div>
                </div>
                </div>

                <div className="form-row split">
                <div className="form-item">
                    <div className="form-select">
                    <label for="profile-social-stream-schedule-friday">Friday</label>
                    <select id="profile-social-stream-schedule-friday" name="profile_social_stream_schedule_friday">
                        <option value="0">-</option>
                        <option value="1" selected>9PM</option>
                    </select>
                    <svg className="form-select-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow"></use>
                    </svg>
                    </div>
                </div>

                <div className="form-item">
                    <div className="form-select">
                    <label for="profile-social-stream-schedule-saturday">Saturday</label>
                    <select id="profile-social-stream-schedule-saturday" name="profile_social_stream_schedule_saturday">
                        <option value="0">-</option>
                        <option value="1" selected>9PM</option>
                    </select>
                    <svg className="form-select-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow"></use>
                    </svg>
                    </div>
                </div>

                <div className="form-item">
                    <div className="form-select">
                    <label for="profile-social-stream-schedule-sunday">Sunday</label>
                    <select id="profile-social-stream-schedule-sunday" name="profile_social_stream_schedule_sunday">
                        <option value="0">-</option>
                        <option value="1">9PM</option>
                    </select>
                    <svg className="form-select-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow"></use>
                    </svg>
                    </div>
                </div>

                <div className="form-item"></div>
                </div>
            </form>
            </div>
        </div>
        </div>
    </div>
  )
}

export default HubProfileSocial