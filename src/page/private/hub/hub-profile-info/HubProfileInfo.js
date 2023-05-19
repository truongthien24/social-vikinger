import React, { useEffect } from 'react'

const HubProfileInfo = () => {


    return (
        <div className="account-hub-content">
            <div className="section-header">
            <div className="section-header-info">
                <p className="section-pretitle">My Profile</p>

                <h2 className="section-title">Profile Info</h2>
            </div>
            </div>

            <div className="grid-column">
            <div className="grid grid-3-3-3 centered">
                <div className="user-preview small fixed-height">
                <figure className="user-preview-cover liquid">
                    <img src="img/cover/01.jpg" alt="cover-01"/>
                </figure>
            
                <div className="user-preview-info">
                    <div className="user-short-description small">
                    <div className="user-short-description-avatar user-avatar">
                        <div className="user-avatar-border">
                        <div className="hexagon-100-110"></div>
                        </div>
                    
                        <div className="user-avatar-content">
                        <div className="hexagon-image-68-74" data-src="img/avatar/01.jpg"></div>
                        </div>
                    
                        <div className="user-avatar-progress">
                        <div className="hexagon-progress-84-92"></div>
                        </div>
                    
                        <div className="user-avatar-progress-border">
                        <div className="hexagon-border-84-92"></div>
                        </div>
                    
                        <div className="user-avatar-badge">
                        <div className="user-avatar-badge-border">
                            <div className="hexagon-28-32"></div>
                        </div>
                    
                        <div className="user-avatar-badge-content">
                            <div className="hexagon-dark-22-24"></div>
                        </div>
                    
                        <p className="user-avatar-badge-text">24</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div className="upload-box">
                <svg className="upload-box-icon icon-members">
                    <use xlinkHref="#svg-members"></use>
                </svg>
            
                <p className="upload-box-title">Change Avatar</p>
            
                <p className="upload-box-text">110x110px size minimum</p>
                </div>
            
                <div className="upload-box">
                <svg className="upload-box-icon icon-photos">
                    <use xlinkHref="#svg-photos"></use>
                </svg>
            
                <p className="upload-box-title">Change Cover</p>
            
                <p className="upload-box-text">1184x300px size minimum</p>
                </div>
            </div>

            <div className="widget-box">
                <p className="widget-box-title">About Your Profile</p>
            
                <div className="widget-box-content">
                <form className="form">
                    <div className="form-row split">
                    <div className="form-item">
                        <div className="form-input small active">
                        <label for="profile-name">Profile Name</label>
                        <input type="text" id="profile-name" name="profile_name" value="Marina Valentine"/>
                        </div>
                    </div>

                    <div className="form-item">
                        <div className="form-input small active">
                        <label for="profile-tagline">Tagline</label>
                        <input type="text" id="profile-tagline" name="profile_tagline" value="www.gamehuntress.com"/>
                        </div>
                    </div>
                    </div>

                    <div className="form-row split">
                    <div className="form-item">
                        <div className="form-input small full">
                        <textarea id="profile-description" name="profile_description" placeholder="Write a little description about you..."></textarea>
                        </div>
                    </div>

                    <div className="form-item">
                        <div className="form-input small active">
                        <label for="profile-public-email">Public Email</label>
                        <input type="text" id="profile-public-email" name="profile_public_email" value="ghuntress@yourmail.com"/>
                        </div>

                        <div className="form-input small">
                        <label for="profile-public-website">Public Website</label>
                        <input type="text" id="profile-public-website" name="profile_public_website"/>
                        </div>
                    </div>
                    </div>

                    <div className="form-row split">
                    <div className="form-item">
                        <div className="form-select">
                        <label for="profile-country">Country</label>
                        <select id="profile-country" name="profile_country">
                            <option value="0">Select your Country</option>
                            <option value="1" selected>United States</option>
                        </select>
                        <svg className="form-select-icon icon-small-arrow">
                            <use xlinkHref="#svg-small-arrow"></use>
                        </svg>
                        </div>
                    </div>

                    <div className="form-item">
                        <div className="form-select">
                        <label for="profile-city">City</label>
                        <select id="profile-city" name="profile_city">
                            <option value="0">Select your City</option>
                            <option value="1" selected>New York</option>
                        </select>
                        <svg className="form-select-icon icon-small-arrow">
                            <use xlinkHref="#svg-small-arrow"></use>
                        </svg>
                        </div>
                    </div>
                    </div>

                    <div className="form-row split">
                    <div className="form-item">
                        <div className="form-input-decorated">
                        <div className="form-input small active">
                            <label for="profile-birthday">Birthday</label>
                            <input type="text" id="profile-birthday" name="profile_birthday" value="August 24th, 1987"/>
                        </div>
            
                        <svg className="form-input-icon icon-events">
                            <use xlinkHref="#svg-events"></use>
                        </svg>
                        </div>
                    </div>

                    <div className="form-item">
                        <div className="form-input small active">
                        <label for="profile-occupation">Occupation</label>
                        <input type="text" id="profile-occupation" name="profile_occupation" value="Costume Designer"/>
                        </div>
                    </div>
                    </div>

                    <div className="form-row split">
                    <div className="form-item">
                        <div className="form-select">
                        <label for="profile-status">Status</label>
                        <select id="profile-status" name="profile_status">
                            <option value="0">Select your Status</option>
                            <option value="1" selected>In a Relationship</option>
                        </select>
                        <svg className="form-select-icon icon-small-arrow">
                            <use xlinkHref="#svg-small-arrow"></use>
                        </svg>
                        </div>
                    </div>

                    <div className="form-item">
                        <div className="form-input small">
                        <label for="profile-birthplace">Birthplace</label>
                        <input type="text" id="profile-birthplace" name="profile_birthplace"/>
                        </div>
                    </div>
                    </div>

                    <div className="form-row split">
                    <div className="form-item">
                        <div className="form-input small">
                        <label for="profile-psid">Ps ID</label>
                        <input type="text" id="profile-psid" name="profile_psid"/>
                        </div>
                    </div>

                    <div className="form-item">
                        <div className="form-input small">
                        <label for="profile-xbid">Xb ID</label>
                        <input type="text" id="profile-xbid" name="profile_xbid"/>
                        </div>
                    </div>
                    </div>
                </form>
                </div>
            </div>

            <div className="widget-box">
                <p className="widget-box-title">Manage Badges</p>
            
                <div className="widget-box-content">
                <div className="draggable-items">
                    <div className="draggable-item">
                    <div className="badge-item">
                        <img src="img/badge/gold-s.png" alt="badge-gold-s"/>
                    </div>
                    </div>
                
                    <div className="draggable-item">
                    <div className="badge-item">
                        <img src="img/badge/age-s.png" alt="badge-age-s"/>
                    </div>
                    </div>
                
                    <div className="draggable-item">
                    <div className="badge-item">
                        <img src="img/badge/caffeinated-s.png" alt="badge-caffeinated-s"/>
                    </div>
                    </div>
                
                    <div className="draggable-item">
                    <div className="badge-item">
                        <img src="img/badge/warrior-s.png" alt="badge-warrior-s"/>
                    </div>
                    </div>
                
                    <div className="draggable-item">
                    <div className="badge-item">
                        <img src="img/badge/traveller-s.png" alt="badge-traveller-s"/>
                    </div>
                    </div>
                
                    <div className="draggable-item">
                    <div className="badge-item">
                        <img src="img/badge/scientist-s.png" alt="badge-scientist-s"/>
                    </div>
                    </div>
                
                    <div className="draggable-item">
                    <div className="badge-item">
                        <img src="img/badge/ncreature-s.png" alt="badge-ncreature-s"/>
                    </div>
                    </div>
                
                    <div className="draggable-item">
                    <div className="badge-item">
                        <img src="img/badge/mightiers-s.png" alt="badge-mightiers-s"/>
                    </div>
                    </div>
                
                    <div className="draggable-item">
                    <div className="badge-item">
                        <img src="img/badge/phantom-s.png" alt="badge-phantom-s"/>
                    </div>
                    </div>
                
                    <div className="draggable-item">
                    <div className="badge-item">
                        <img src="img/badge/collector-s.png" alt="badge-collector-s"/>
                    </div>
                    </div>
                
                    <div className="draggable-item">
                    <div className="badge-item">
                        <img src="img/badge/bronzec-s.png" alt="badge-bronzec-s"/>
                    </div>
                    </div>
                
                    <div className="draggable-item">
                    <div className="badge-item">
                        <img src="img/badge/silverc-s.png" alt="badge-silverc-s"/>
                    </div>
                    </div>
                
                    <div className="draggable-item">
                    <div className="badge-item">
                        <img src="img/badge/goldc-s.png" alt="badge-goldc-s"/>
                    </div>
                    </div>
                
                    <div className="draggable-item empty"></div>
                
                    <div className="draggable-item empty"></div>
                
                    <div className="draggable-item empty"></div>
                
                    <div className="draggable-item empty"></div>
                
                    <div className="draggable-item empty"></div>
                
                    <div className="draggable-item empty"></div>
                
                    <div className="draggable-item empty"></div>
                </div>

                <p className="widget-box-text light">Choose the order in which your badges are shown. Just drag and place them wherever you want!</p>
                </div>
            </div>

            <div className="widget-box">
                <p className="widget-box-title">Interests</p>
            
                <div className="widget-box-content">
                <form className="form">
                    <div className="form-row split">
                    <div className="form-item">
                        <div className="form-input small mid-textarea active">
                        <label for="profile-favourite-shows">Favourite TV Shows</label>
                        <textarea id="profile-favourite-shows" name="profile_favourite_shows">Breaking Good, RedDevil, People of Interest, The Running Dead, Found,  American Guy, The Last Windbender, Game of Wars.</textarea>
                        </div>
                    </div>

                    <div className="form-item">
                        <div className="form-input small mid-textarea active">
                        <label for="profile-favourite-music">Favourite Music Bands / Artists</label>
                        <textarea id="profile-favourite-music" name="profile_favourite_music">Iron Maid, DC/AC, Megablow, Kung Fighters, System of a Revenge, Rammstown.</textarea>
                        </div>
                    </div>
                    </div>

                    <div className="form-row split">
                    <div className="form-item">
                        <div className="form-input small mid-textarea active">
                        <label for="profile-favourite-movies">Favourite Movies</label>
                        <textarea id="profile-favourite-movies" name="profile_favourite_movies">The Revengers Saga, The Scarred Wizard and the Fire Crown, Crime Squad, Metal Man, The Dark Rider, Watchers, The Impossible Heist.</textarea>
                        </div>
                    </div>

                    <div className="form-item">
                        <div className="form-input small mid-textarea active">
                        <label for="profile-favourite-books">Favourite Books</label>
                        <textarea id="profile-favourite-books" name="profile_favourite_books">The Crime of the Century, Egiptian Mythology 101, The Scarred Wizard, Lord of the Wings, Amongst Gods, The Oracle, A Tale of Air and Water</textarea>
                        </div>
                    </div>
                    </div>

                    <div className="form-row split">
                    <div className="form-item">
                        <div className="form-input small mid-textarea active">
                        <label for="profile-favourite-games">Favourite Games</label>
                        <textarea id="profile-favourite-games" name="profile_favourite_games">The First of Us, Assassin's Squad, Dark Assylum, NMAK16, Last Cause 4, Grand Snatch Auto</textarea>
                        </div>
                    </div>

                    <div className="form-item">
                        <div className="form-input small mid-textarea">
                        <label for="profile-hobbies">My Hobbies</label>
                        <textarea id="profile-hobbies" name="profile_hobbies"></textarea>
                        </div>
                    </div>
                    </div>
                </form>
                </div>
            </div>

            <div className="widget-box">
                <p className="widget-box-title">Jobs &amp; Education</p>
            
                <div className="widget-box-content">
                <form className="form">
                    <div className="form-row split">
                    <div className="form-item">
                        <div className="form-input small active">
                        <label for="profile-job-1-title">Title or Place</label>
                        <input type="text" id="profile-job-1-title" name="profile_job_1_title" value="Lead Costume Designer"/>
                        </div>
                    </div>

                    <div className="form-row split">
                        <div className="form-item">
                        <div className="form-select">
                            <label for="profile-job-1-year-started">Year Started</label>
                            <select id="profile-job-1-year-started" name="profile_job_1_year_started">
                            <option value="0">Select Year</option>
                            <option value="1" selected>2015</option>
                            </select>
                            <svg className="form-select-icon icon-small-arrow">
                            <use xlinkHref="#svg-small-arrow"></use>
                            </svg>
                        </div>
                        </div>

                        <div className="form-item">
                        <div className="form-select">
                            <label for="profile-job-1-year-ended">Year Ended</label>
                            <select id="profile-job-1-year-ended" name="profile_job_1_year_ended">
                            <option value="0">Select Year</option>
                            <option value="1" selected>Now</option>
                            </select>
                            <svg className="form-select-icon icon-small-arrow">
                            <use xlinkHref="#svg-small-arrow"></use>
                            </svg>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="form-row">
                    <div className="form-item">
                        <div className="form-input small mid-textarea active">
                        <label for="profile-job-1-description">Description</label>
                        <textarea id="profile-job-1-description" name="profile_job_1_description">Lead Costume Designer for the "Amazzo Costumes" agency. I’m in charge of a ten person group, overseeing all the proyects and talking to potential clients. I also handle some face to face interviews for new candidates.</textarea>
                        </div>
                    </div>
                    </div>

                    <div className="form-row split">
                    <div className="form-item">
                        <div className="form-input small">
                        <label for="profile-job-2-title">Title or Place</label>
                        <input type="text" id="profile-job-2-title" name="profile_job_2_title"/>
                        </div>
                    </div>

                    <div className="form-row split">
                        <div className="form-item">
                        <div className="form-select">
                            <label for="profile-job-2-year-started">Year Started</label>
                            <select id="profile-job-2-year-started" name="profile_job_2_year_started">
                            <option value="0">Select Year</option>
                            <option value="1" selected>2019</option>
                            </select>
                            <svg className="form-select-icon icon-small-arrow">
                            <use xlinkHref="#svg-small-arrow"></use>
                            </svg>
                        </div>
                        </div>

                        <div className="form-item">
                        <div className="form-select">
                            <label for="profile-job-2-year-ended">Year Ended</label>
                            <select id="profile-job-2-year-ended" name="profile_job_2_year_ended">
                            <option value="0">Select Year</option>
                            <option value="1" selected>2019</option>
                            </select>
                            <svg className="form-select-icon icon-small-arrow">
                            <use xlinkHref="#svg-small-arrow"></use>
                            </svg>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="form-row">
                    <div className="form-item">
                        <div className="form-input small mid-textarea">
                        <label for="profile-job-2-description">Description</label>
                        <textarea id="profile-job-2-description" name="profile_job_2_description"></textarea>
                        </div>
                    </div>
                    </div>
                </form>

                <p className="button small white add-field-button">+ Add New Field</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default HubProfileInfo