import React from 'react'

const Badges = () => {
  return (
    <>
        <div className="section-banner">
        <img className="section-banner-icon" src="img/banner/badges-icon.png" alt="badges-icon"/>
    
        <p className="section-banner-title">Badges</p>
    
        <p className="section-banner-text">Check out all your unlocked and locked badges!</p>
        </div>

        <div className="grid grid-3-3-3-3 top-space centered">
        <div className="badge-item-stat">
            <p className="text-sticker">
            <svg className="text-sticker-icon icon-plus-small">
                <use xlinkHref="#svg-plus-small"></use>
            </svg>
            20 Exp
            </p>
        
            <img className="badge-item-stat-image-preview" src="img/badge/bronze-s.png" alt="badge-bronze-s"/>
        
            <img className="badge-item-stat-image" src="img/badge/bronze-b.png" alt="badge-bronze-b"/>
        
            <p className="badge-item-stat-title">Bronze User</p>
        
            <p className="badge-item-stat-text">Has posted more than 1 post on their profile</p>
        
            <div className="progress-stat">
            <div id="badge-bronze" className="progress-stat-bar"></div>
        
            <div className="bar-progress-wrap">
                <p className="bar-progress-info negative center"><span className="bar-progress-text no-space"></span></p>
            </div>
            </div>
        </div>

        <div className="badge-item-stat">
            <p className="text-sticker">
            <svg className="text-sticker-icon icon-plus-small">
                <use xlinkHref="#svg-plus-small"></use>
            </svg>
            40 Exp
            </p>
        
            <img className="badge-item-stat-image-preview" src="img/badge/silver-s.png" alt="badge-silver-s"/>
        
            <img className="badge-item-stat-image" src="img/badge/silver-b.png" alt="badge-silver-b"/>
        
            <p className="badge-item-stat-title">Silver User</p>
        
            <p className="badge-item-stat-text">Has posted more than 100 posts on their profile</p>
        
            <div className="progress-stat">
            <div id="badge-silver" className="progress-stat-bar"></div>
        
            <div className="bar-progress-wrap">
                <p className="bar-progress-info negative center"><span className="bar-progress-text no-space"></span></p>
            </div>
            </div>
        </div>

        <div className="badge-item-stat">
            <p className="text-sticker">
            <svg className="text-sticker-icon icon-plus-small">
                <use xlinkHref="#svg-plus-small"></use>
            </svg>
            60 Exp
            </p>
        
            <img className="badge-item-stat-image-preview" src="img/badge/gold-s.png" alt="badge-gold-s"/>
        
            <img className="badge-item-stat-image" src="img/badge/gold-b.png" alt="badge-gold-b"/>
        
            <p className="badge-item-stat-title">Gold User</p>
        
            <p className="badge-item-stat-text">Has posted more than 500 posts on their profile</p>
        
            <div className="progress-stat">
            <div id="badge-gold" className="progress-stat-bar"></div>
        
            <div className="bar-progress-wrap">
                <p className="bar-progress-info negative center"><span className="bar-progress-text no-space"></span></p>
            </div>
            </div>
        </div>

        <div className="badge-item-stat">
            <p className="text-sticker">
            <svg className="text-sticker-icon icon-plus-small">
                <use xlinkHref="#svg-plus-small"></use>
            </svg>
            100 Exp
            </p>
        
            <img className="badge-item-stat-image-preview" src="img/badge/platinum-s.png" alt="badge-platinum-s"/>
        
            <img className="badge-item-stat-image" src="img/badge/platinum-b.png" alt="badge-platinum-b"/>
        
            <p className="badge-item-stat-title">Platinum User</p>
        
            <p className="badge-item-stat-text">Has posted more than 1000 posts on their profile</p>
        
            <div className="progress-stat">
            <div id="badge-platinum" className="progress-stat-bar"></div>
        
            <div className="bar-progress-wrap">
                <p className="bar-progress-info negative center"><span className="bar-progress-text no-space"></span></p>
            </div>
            </div>
        </div>

        <div className="badge-item-stat">
            <p className="text-sticker">
            <svg className="text-sticker-icon icon-plus-small">
                <use xlinkHref="#svg-plus-small"></use>
            </svg>
            40 Exp
            </p>
        
            <img className="badge-item-stat-image-preview" src="img/badge/traveller-s.png" alt="badge-traveller-s"/>
        
            <img className="badge-item-stat-image" src="img/badge/traveller-b.png" alt="badge-traveller-b"/>
        
            <p className="badge-item-stat-title">Forum Traveller</p>
        
            <p className="badge-item-stat-text">Created at least 1 topic on 5 different groups forums</p>
        
            <div className="progress-stat">
                <div id="badge-traveller" className="progress-stat-bar"></div>
            
                <div className="bar-progress-wrap">
                <p className="bar-progress-info negative center"><span className="light">Next Tier:</span><span className="bar-progress-text"></span></p>
                </div>
            </div>
        </div>

        <div className="badge-item-stat">
            <p className="text-sticker">
            <svg className="text-sticker-icon icon-plus-small">
                <use xlinkHref="#svg-plus-small"></use>
            </svg>
            40 Exp
            </p>
        
            <img className="badge-item-stat-image-preview" src="img/badge/caffeinated-s.png" alt="badge-caffeinated-s"/>
        
            <img className="badge-item-stat-image" src="img/badge/caffeinated-b.png" alt="badge-caffeinated-b"/>
        
            <p className="badge-item-stat-title">Caffeinated</p>
        
            <p className="badge-item-stat-text">Commented on a friend's post inside 30 seconds of posted</p>
        
            <div className="progress-stat">
            <div id="badge-caffeinated" className="progress-stat-bar"></div>
        
            <div className="bar-progress-wrap">
                <p className="bar-progress-info negative center"><span className="bar-progress-text no-space"></span></p>
            </div>
            </div>
        </div>

        <div className="badge-item-stat">
            <p className="text-sticker">
            <svg className="text-sticker-icon icon-plus-small">
                <use xlinkHref="#svg-plus-small"></use>
            </svg>
            80 Exp
            </p>
        
            <img className="badge-item-stat-image-preview" src="img/badge/upowered-s.png" alt="badge-upowered-s"/>
        
            <img className="badge-item-stat-image" src="img/badge/upowered-b.png" alt="badge-upowered-b"/>
        
            <p className="badge-item-stat-title">Ultra Powered</p>
        
            <p className="badge-item-stat-text">Received 50+ reacts inside 30 minutes of posting</p>
        
            <div className="progress-stat">
            <div id="badge-upowered" className="progress-stat-bar"></div>
        
            <div className="bar-progress-wrap">
                <p className="bar-progress-info negative center"><span className="bar-progress-text no-space"></span></p>
            </div>
            </div>
        </div>

        <div className="badge-item-stat">
            <p className="text-sticker">
            <svg className="text-sticker-icon icon-plus-small">
                <use xlinkHref="#svg-plus-small"></use>
            </svg>
            40 Exp
            </p>
        
            <img className="badge-item-stat-image-preview" src="img/badge/scientist-s.png" alt="badge-scientist-s"/>
        
            <img className="badge-item-stat-image" src="img/badge/scientist-b.png" alt="badge-scientist-b"/>
        
            <p className="badge-item-stat-title">Crazy Scientist</p>
        
            <p className="badge-item-stat-text">Helped us beta test new awesome features</p>
        
            <div className="progress-stat">
            <div id="badge-scientist" className="progress-stat-bar"></div>
        
            <div className="bar-progress-wrap">
                <p className="bar-progress-info negative center"><span className="bar-progress-text no-space"></span></p>
            </div>
            </div>
        </div>

        <div className="badge-item-stat">
            <p className="text-sticker">
            <svg className="text-sticker-icon icon-plus-small">
                <use xlinkHref="#svg-plus-small"></use>
            </svg>
            20 Exp
            </p>
        
            <img className="badge-item-stat-image-preview" src="img/badge/ncreature-s.png" alt="badge-ncreature-s"/>
        
            <img className="badge-item-stat-image" src="img/badge/ncreature-b.png" alt="badge-ncreature-b"/>
        
            <p className="badge-item-stat-title">Night Creature</p>
        
            <p className="badge-item-stat-text">Created 100+ posts between 1AM and 5AM</p>
        
            <div className="progress-stat">
            <div id="badge-ncreature" className="progress-stat-bar"></div>
        
            <div className="bar-progress-wrap">
                <p className="bar-progress-info negative center"><span className="bar-progress-text no-space"></span></p>
            </div>
            </div>
        </div>

        <div className="badge-item-stat">
            <p className="text-sticker">
            <svg className="text-sticker-icon icon-plus-small">
                <use xlinkHref="#svg-plus-small"></use>
            </svg>
            40 Exp
            </p>
        
            <img className="badge-item-stat-image-preview" src="img/badge/warrior-s.png" alt="badge-warrior-s"/>
        
            <img className="badge-item-stat-image" src="img/badge/warrior-b.png" alt="badge-warrior-b"/>
        
            <p className="badge-item-stat-title">The Warrior</p>
        
            <p className="badge-item-stat-text">Helped the team enforce the communty rules</p>
        
            <div className="progress-stat">
            <div id="badge-warrior" className="progress-stat-bar"></div>
        
            <div className="bar-progress-wrap">
                <p className="bar-progress-info negative center"><span className="bar-progress-text no-space"></span></p>
            </div>
            </div>
        </div>

        <div className="badge-item-stat">
            <p className="text-sticker">
            <svg className="text-sticker-icon icon-plus-small">
                <use xlinkHref="#svg-plus-small"></use>
            </svg>
            60 Exp
            </p>
        
            <img className="badge-item-stat-image-preview" src="img/badge/liked-s.png" alt="badge-liked-s"/>
        
            <img className="badge-item-stat-image" src="img/badge/liked-b.png" alt="badge-liked-b"/>
        
            <p className="badge-item-stat-title">Liked User</p>
        
            <p className="badge-item-stat-text">Received 500+ like or love reactions in their profile posts</p>
        
            <div className="progress-stat">
            <div id="badge-liked" className="progress-stat-bar"></div>
        
            <div className="bar-progress-wrap">
                <p className="bar-progress-info negative center"><span className="bar-progress-text no-space"></span></p>
            </div>
            </div>
        </div>

        <div className="badge-item-stat">
            <p className="text-sticker">
            <svg className="text-sticker-icon icon-plus-small">
                <use xlinkHref="#svg-plus-small"></use>
            </svg>
            80 Exp
            </p>
        
            <img className="badge-item-stat-image-preview" src="img/badge/sloved-s.png" alt="badge-sloved-s"/>
        
            <img className="badge-item-stat-image" src="img/badge/sloved-b.png" alt="badge-sloved-b"/>
        
            <p className="badge-item-stat-title">Super Loved User</p>
        
            <p className="badge-item-stat-text">Received 1000+ like or love reactions in their profile posts</p>
        
            <div className="progress-stat">
            <div id="badge-sloved" className="progress-stat-bar"></div>
        
            <div className="bar-progress-wrap">
                <p className="bar-progress-info negative center"><span className="bar-progress-text no-space"></span></p>
            </div>
            </div>
        </div>

        <div className="badge-item-stat">
            <p className="text-sticker">
            <svg className="text-sticker-icon icon-plus-small">
                <use xlinkHref="#svg-plus-small"></use>
            </svg>
            40 Exp
            </p>
        
            <img className="badge-item-stat-image-preview" src="img/badge/qconq-s.png" alt="badge-qconq-s"/>
        
            <img className="badge-item-stat-image" src="img/badge/qconq-b.png" alt="badge-qconq-b"/>
        
            <p className="badge-item-stat-title">Quest Conqueror</p>
        
            <p className="badge-item-stat-text">Succesfully completed at least 10 quests at 100%</p>
        
            <div className="progress-stat">
            <div id="badge-qconq" className="progress-stat-bar"></div>
        
            <div className="bar-progress-wrap">
                <p className="bar-progress-info negative center"><span className="bar-progress-text no-space"></span></p>
            </div>
            </div>
        </div>

        <div className="badge-item-stat">
            <p className="text-sticker">
            <svg className="text-sticker-icon icon-plus-small">
                <use xlinkHref="#svg-plus-small"></use>
            </svg>
            40 Exp
            </p>
        
            <img className="badge-item-stat-image-preview" src="img/badge/villain-s.png" alt="badge-villain-s"/>
        
            <img className="badge-item-stat-image" src="img/badge/villain-b.png" alt="badge-villain-b"/>
        
            <p className="badge-item-stat-title">Super Villain</p>
        
            <p className="badge-item-stat-text">Received 100+ dislike reactions in their profile posts</p>
        
            <div className="progress-stat">
            <div id="badge-villain" className="progress-stat-bar"></div>
        
            <div className="bar-progress-wrap">
                <p className="bar-progress-info negative center"><span className="bar-progress-text no-space"></span></p>
            </div>
            </div>
        </div>

        <div className="badge-item-stat">
            <p className="text-sticker">
            <svg className="text-sticker-icon icon-plus-small">
                <use xlinkHref="#svg-plus-small"></use>
            </svg>
            20 Exp
            </p>
        
            <img className="badge-item-stat-image-preview" src="img/badge/age-s.png" alt="badge-age-s"/>
        
            <img className="badge-item-stat-image" src="img/badge/age-b.png" alt="badge-age-b"/>
        
            <p className="badge-item-stat-title">Profile Age</p>
        
            <p className="badge-item-stat-text">Congratz! You've been part of the community for 2 years</p>
        
            <div className="progress-stat">
                <div id="badge-age" className="progress-stat-bar"></div>
            
                <div className="bar-progress-wrap">
                <p className="bar-progress-info negative center"><span className="light">Next Tier:</span><span className="bar-progress-text"></span></p>
                </div>
            </div>
        </div>

        <div className="badge-item-stat">
            <p className="text-sticker">
            <svg className="text-sticker-icon icon-plus-small">
                <use xlinkHref="#svg-plus-small"></use>
            </svg>
            60 Exp
            </p>
        
            <img className="badge-item-stat-image-preview" src="img/badge/tstruck-s.png" alt="badge-tstruck-s"/>
        
            <img className="badge-item-stat-image" src="img/badge/tstruck-b.png" alt="badge-tstruck-b"/>
        
            <p className="badge-item-stat-title">Thunderstruck</p>
        
            <p className="badge-item-stat-text">The user reacted first on 50+ friends posts</p>
        
            <div className="progress-stat">
            <div id="badge-tstruck" className="progress-stat-bar"></div>
        
            <div className="bar-progress-wrap">
                <p className="bar-progress-info negative center"><span className="bar-progress-text no-space"></span></p>
            </div>
            </div>
        </div>

        <div className="badge-item-stat">
            <p className="text-sticker">
            <svg className="text-sticker-icon icon-plus-small">
                <use xlinkHref="#svg-plus-small"></use>
            </svg>
            20 Exp
            </p>
        
            <img className="badge-item-stat-image-preview" src="img/badge/uexp-s.png" alt="badge-uexp-s"/>
        
            <img className="badge-item-stat-image" src="img/badge/uexp-b.png" alt="badge-uexp-b"/>
        
            <p className="badge-item-stat-title">Universe Explorer</p>
        
            <p className="badge-item-stat-text">Joined and posted on 20 different groups</p>
        
            <div className="progress-stat">
            <div id="badge-uexp" className="progress-stat-bar"></div>
        
            <div className="bar-progress-wrap">
                <p className="bar-progress-info negative center"><span className="bar-progress-text no-space"></span></p>
            </div>
            </div>
        </div>

        <div className="badge-item-stat">
            <p className="text-sticker">
            <svg className="text-sticker-icon icon-plus-small">
                <use xlinkHref="#svg-plus-small"></use>
            </svg>
            40 Exp
            </p>
        
            <img className="badge-item-stat-image-preview" src="img/badge/globet-s.png" alt="badge-globet-s"/>
        
            <img className="badge-item-stat-image" src="img/badge/globet-b.png" alt="badge-globet-b"/>
        
            <p className="badge-item-stat-title">Globe Trotter</p>
        
            <p className="badge-item-stat-text">Has at least 10 friends from different countries</p>
        
            <div className="progress-stat">
            <div id="badge-globet" className="progress-stat-bar"></div>
        
            <div className="bar-progress-wrap">
                <p className="bar-progress-info negative center"><span className="bar-progress-text no-space"></span></p>
            </div>
            </div>
        </div>

        <div className="badge-item-stat">
            <p className="text-sticker">
            <svg className="text-sticker-icon icon-plus-small">
                <use xlinkHref="#svg-plus-small"></use>
            </svg>
            40 Exp
            </p>
        
            <img className="badge-item-stat-image-preview" src="img/badge/verifieds-s.png" alt="badge-verifieds-s"/>
        
            <img className="badge-item-stat-image" src="img/badge/verifieds-b.png" alt="badge-verifieds-b"/>
        
            <p className="badge-item-stat-title">Verified Streamer</p>
        
            <p className="badge-item-stat-text">Has linked a stream that was verified by the staff</p>
        
            <div className="progress-stat">
            <div id="badge-verifieds" className="progress-stat-bar"></div>
        
            <div className="bar-progress-wrap">
                <p className="bar-progress-info negative center"><span className="bar-progress-text no-space"></span></p>
            </div>
            </div>
        </div>

        <div className="badge-item-stat">
            <p className="text-sticker">
            <svg className="text-sticker-icon icon-plus-small">
                <use xlinkHref="#svg-plus-small"></use>
            </svg>
            80 Exp
            </p>
        
            <img className="badge-item-stat-image-preview" src="img/badge/gempost-s.png" alt="badge-gempost-s"/>
        
            <img className="badge-item-stat-image" src="img/badge/gempost-b.png" alt="badge-gempost-b"/>
        
            <p className="badge-item-stat-title">Rare GemPost</p>
        
            <p className="badge-item-stat-text">Received 100+ likes and 50+ comments on a single post</p>
        
            <div className="progress-stat">
            <div id="badge-gempost" className="progress-stat-bar"></div>
        
            <div className="bar-progress-wrap">
                <p className="bar-progress-info negative center"><span className="bar-progress-text no-space"></span></p>
            </div>
            </div>
        </div>

        <div className="badge-item-stat">
            <p className="text-sticker">
            <svg className="text-sticker-icon icon-plus-small">
                <use xlinkHref="#svg-plus-small"></use>
            </svg>
            40 Exp
            </p>
        
            <img className="badge-item-stat-image-preview" src="img/badge/peoplesp-s.png" alt="badge-peoplesp-s"/>
        
            <img className="badge-item-stat-image" src="img/badge/peoplesp-b.png" alt="badge-peoplesp-b"/>
        
            <p className="badge-item-stat-title">People's Person</p>
        
            <p className="badge-item-stat-text">Has accepted at least 200 friends requests</p>
        
            <div className="progress-stat">
            <div id="badge-peoplesp" className="progress-stat-bar"></div>
        
            <div className="bar-progress-wrap">
                <p className="bar-progress-info negative center"><span className="bar-progress-text no-space"></span></p>
            </div>
            </div>
        </div>

        <div className="badge-item-stat">
            <p className="text-sticker">
            <svg className="text-sticker-icon icon-plus-small">
                <use xlinkHref="#svg-plus-small"></use>
            </svg>
            40 Exp
            </p>
        
            <img className="badge-item-stat-image-preview" src="img/badge/rulerm-s.png" alt="badge-rulerm-s"/>
        
            <img className="badge-item-stat-image" src="img/badge/rulerm-b.png" alt="badge-rulerm-b"/>
        
            <p className="badge-item-stat-title">Ruler of Masses</p>
        
            <p className="badge-item-stat-text">Has created and admins 5+ different groups</p>
        
            <div className="progress-stat">
            <div id="badge-rulerm" className="progress-stat-bar"></div>
        
            <div className="bar-progress-wrap">
                <p className="bar-progress-info negative center"><span className="bar-progress-text no-space"></span></p>
            </div>
            </div>
        </div>

        <div className="badge-item-stat">
            <p className="text-sticker">
            <svg className="text-sticker-icon icon-plus-small">
                <use xlinkHref="#svg-plus-small"></use>
            </svg>
            20 Exp
            </p>
        
            <img className="badge-item-stat-image-preview" src="img/badge/marketeer-s.png" alt="badge-marketeer-s"/>
        
            <img className="badge-item-stat-image" src="img/badge/marketeer-b.png" alt="badge-marketeer-b"/>
        
            <p className="badge-item-stat-title">The Marketeer</p>
        
            <p className="badge-item-stat-text">Has posted at least 10 items on their shop</p>
        
            <div className="progress-stat">
            <div id="badge-marketeer" className="progress-stat-bar"></div>
        
            <div className="bar-progress-wrap">
                <p className="bar-progress-info negative center"><span className="light">Next Tier:</span><span className="bar-progress-text"></span></p>
            </div>
            </div>
        </div>

        <div className="badge-item-stat">
            <p className="text-sticker">
            <svg className="text-sticker-icon icon-plus-small">
                <use xlinkHref="#svg-plus-small"></use>
            </svg>
            80 Exp
            </p>
        
            <img className="badge-item-stat-image-preview" src="img/badge/tycoon-s.png" alt="badge-tycoon-s"/>
        
            <img className="badge-item-stat-image" src="img/badge/tycoon-b.png" alt="badge-tycoon-b"/>
        
            <p className="badge-item-stat-title">Bussiness Tycoon</p>
        
            <p className="badge-item-stat-text">Sold more than 100 items on their shop</p>
        
            <div className="progress-stat">
            <div id="badge-tycoon" className="progress-stat-bar"></div>
        
            <div className="bar-progress-wrap">
                <p className="bar-progress-info negative center"><span className="bar-progress-text no-space"></span></p>
            </div>
            </div>
        </div>

        <div className="badge-item-stat">
            <p className="text-sticker">
            <svg className="text-sticker-icon icon-plus-small">
                <use xlinkHref="#svg-plus-small"></use>
            </svg>
            40 Exp
            </p>
        
            <img className="badge-item-stat-image-preview" src="img/badge/mightiers-s.png" alt="badge-mightiers-s"/>
        
            <img className="badge-item-stat-image" src="img/badge/mightiers-b.png" alt="badge-mightiers-b"/>
        
            <p className="badge-item-stat-title">Mightier Than Sword</p>
        
            <p className="badge-item-stat-text">Wrote at least 50 blog posts in their profile</p>
        
            <div className="progress-stat">
            <div id="badge-mightiers" className="progress-stat-bar"></div>
        
            <div className="bar-progress-wrap">
                <p className="bar-progress-info negative center"><span className="bar-progress-text no-space"></span></p>
            </div>
            </div>
        </div>

        <div className="badge-item-stat">
            <p className="text-sticker">
            <svg className="text-sticker-icon icon-plus-small">
                <use xlinkHref="#svg-plus-small"></use>
            </svg>
            40 Exp
            </p>
        
            <img className="badge-item-stat-image-preview" src="img/badge/phantom-s.png" alt="badge-phantom-s"/>
        
            <img className="badge-item-stat-image" src="img/badge/phantom-b.png" alt="badge-phantom-b"/>
        
            <p className="badge-item-stat-title">The Phantom</p>
        
            <p className="badge-item-stat-text">Visited other profiles but hasn’t posted in 1+ year</p>
        
            <div className="progress-stat">
            <div id="badge-phantom" className="progress-stat-bar"></div>
        
            <div className="bar-progress-wrap">
                <p className="bar-progress-info negative center"><span className="bar-progress-text no-space"></span></p>
            </div>
            </div>
        </div>

        <div className="badge-item-stat">
            <p className="text-sticker">
            <svg className="text-sticker-icon icon-plus-small">
                <use xlinkHref="#svg-plus-small"></use>
            </svg>
            40 Exp
            </p>
        
            <img className="badge-item-stat-image-preview" src="img/badge/forumsf-s.png" alt="badge-forumsf-s"/>
        
            <img className="badge-item-stat-image" src="img/badge/forumsf-b.png" alt="badge-forumsf-b"/>
        
            <p className="badge-item-stat-title">Forums Fan</p>
        
            <p className="badge-item-stat-text">Started at least 20 topics on the forums</p>
        
            <div className="progress-stat">
            <div id="badge-forumsf" className="progress-stat-bar"></div>
        
            <div className="bar-progress-wrap">
                <p className="bar-progress-info negative center"><span className="bar-progress-text no-space"></span></p>
            </div>
            </div>
        </div>

        <div className="badge-item-stat">
            <p className="text-sticker">
            <svg className="text-sticker-icon icon-plus-small">
                <use xlinkHref="#svg-plus-small"></use>
            </svg>
            40 Exp
            </p>
        
            <img className="badge-item-stat-image-preview" src="img/badge/fcultivator-s.png" alt="badge-fcultivator-s"/>
        
            <img className="badge-item-stat-image" src="img/badge/fcultivator-b.png" alt="badge-fcultivator-b"/>
        
            <p className="badge-item-stat-title">Friendship Cultivator</p>
        
            <p className="badge-item-stat-text">Commented first on 100+ friend's posts</p>
        
            <div className="progress-stat">
            <div id="badge-fcultivator" className="progress-stat-bar"></div>
        
            <div className="bar-progress-wrap">
                <p className="bar-progress-info negative center"><span className="bar-progress-text no-space"></span></p>
            </div>
            </div>
        </div>

        <div className="badge-item-stat">
            <p className="text-sticker">
            <svg className="text-sticker-icon icon-plus-small">
                <use xlinkHref="#svg-plus-small"></use>
            </svg>
            20 Exp
            </p>
        
            <img className="badge-item-stat-image-preview" src="img/badge/splanner-s.png" alt="badge-splanner-s"/>
        
            <img className="badge-item-stat-image" src="img/badge/splanner-b.png" alt="badge-splanner-b"/>
        
            <p className="badge-item-stat-title">Super Planner</p>
        
            <p className="badge-item-stat-text">Has created at least 25 public or private events</p>
        
            <div className="progress-stat">
            <div id="badge-splanner" className="progress-stat-bar"></div>
        
            <div className="bar-progress-wrap">
                <p className="bar-progress-info negative center"><span className="bar-progress-text no-space"></span></p>
            </div>
            </div>
        </div>

        <div className="badge-item-stat">
            <p className="text-sticker">
            <svg className="text-sticker-icon icon-plus-small">
                <use xlinkHref="#svg-plus-small"></use>
            </svg>
            40 Exp
            </p>
        
            <img className="badge-item-stat-image-preview" src="img/badge/collector-s.png" alt="badge-collector-s"/>
        
            <img className="badge-item-stat-image" src="img/badge/collector-b.png" alt="badge-collector-b"/>
        
            <p className="badge-item-stat-title">The Collector</p>
        
            <p className="badge-item-stat-text">Bought at least 5 items in the markeplace</p>
        
            <div className="progress-stat">
            <div id="badge-collector" className="progress-stat-bar"></div>
        
            <div className="bar-progress-wrap">
                <p className="bar-progress-info negative center"><span className="bar-progress-text no-space"></span></p>
            </div>
            </div>
        </div>

        <div className="badge-item-stat">
            <p className="text-sticker">
            <svg className="text-sticker-icon icon-plus-small">
                <use xlinkHref="#svg-plus-small"></use>
            </svg>
            40 Exp
            </p>
        
            <img className="badge-item-stat-image-preview" src="img/badge/prophoto-s.png" alt="badge-prophoto-s"/>
        
            <img className="badge-item-stat-image" src="img/badge/prophoto-b.png" alt="badge-prophoto-b"/>
        
            <p className="badge-item-stat-title">Pro Photographer</p>
        
            <p className="badge-item-stat-text">Uploaded more than 500 photos to their profile</p>
        
            <div className="progress-stat">
            <div id="badge-prophoto" className="progress-stat-bar"></div>
        
            <div className="bar-progress-wrap">
                <p className="bar-progress-info negative center"><span className="bar-progress-text no-space"></span></p>
            </div>
            </div>
        </div>

        <div className="badge-item-stat">
            <p className="text-sticker">
            <svg className="text-sticker-icon icon-plus-small">
                <use xlinkHref="#svg-plus-small"></use>
            </svg>
            40 Exp
            </p>
        
            <img className="badge-item-stat-image-preview" src="img/badge/rmachine-s.png" alt="badge-rmachine-s"/>
        
            <img className="badge-item-stat-image" src="img/badge/rmachine-b.png" alt="badge-rmachine-b"/>
        
            <p className="badge-item-stat-title">Referral Machine</p>
        
            <p className="badge-item-stat-text">Referred at least 50 friends that joined the comunity</p>
        
            <div className="progress-stat">
            <div id="badge-rmachine" className="progress-stat-bar"></div>
        
            <div className="bar-progress-wrap">
                <p className="bar-progress-info negative center"><span className="bar-progress-text no-space"></span></p>
            </div>
            </div>
        </div>

        <div className="badge-item-stat">
            <p className="text-sticker">
            <svg className="text-sticker-icon icon-plus-small">
                <use xlinkHref="#svg-plus-small"></use>
            </svg>
            20 Exp
            </p>
        
            <img className="badge-item-stat-image-preview" src="img/badge/bronzec-s.png" alt="badge-bronzec-s"/>
        
            <img className="badge-item-stat-image" src="img/badge/bronzec-b.png" alt="badge-bronzec-b"/>
        
            <p className="badge-item-stat-title">Bronze Cup</p>
        
            <p className="badge-item-stat-text">Won third place on a verified forum competition</p>
        
            <div className="progress-stat">
            <div id="badge-bronzec" className="progress-stat-bar"></div>
        
            <div className="bar-progress-wrap">
                <p className="bar-progress-info negative center"><span className="bar-progress-text no-space"></span></p>
            </div>
            </div>
        </div>

        <div className="badge-item-stat">
            <p className="text-sticker">
            <svg className="text-sticker-icon icon-plus-small">
                <use xlinkHref="#svg-plus-small"></use>
            </svg>
            40 Exp
            </p>
        
            <img className="badge-item-stat-image-preview" src="img/badge/silverc-s.png" alt="badge-silverc-s"/>
        
            <img className="badge-item-stat-image" src="img/badge/silverc-b.png" alt="badge-silverc-b"/>
        
            <p className="badge-item-stat-title">Silver Cup</p>
        
            <p className="badge-item-stat-text">Won second place on a verified forum competition</p>
        
            <div className="progress-stat">
            <div id="badge-silverc" className="progress-stat-bar"></div>
        
            <div className="bar-progress-wrap">
                <p className="bar-progress-info negative center"><span className="bar-progress-text no-space"></span></p>
            </div>
            </div>
        </div>

        <div className="badge-item-stat">
            <p className="text-sticker">
            <svg className="text-sticker-icon icon-plus-small">
                <use xlinkHref="#svg-plus-small"></use>
            </svg>
            60 Exp
            </p>
        
            <img className="badge-item-stat-image-preview" src="img/badge/goldc-s.png" alt="badge-goldc-s"/>
        
            <img className="badge-item-stat-image" src="img/badge/goldc-b.png" alt="badge-goldc-b"/>
        
            <p className="badge-item-stat-title">Gold Cup</p>
        
            <p className="badge-item-stat-text">Won first place on a verified forum competition</p>
        
            <div className="progress-stat">
            <div id="badge-goldc" className="progress-stat-bar"></div>
        
            <div className="bar-progress-wrap">
                <p className="bar-progress-info negative center"><span className="bar-progress-text no-space"></span></p>
            </div>
            </div>
        </div>

        <div className="badge-item-stat">
            <p className="text-sticker">
            <svg className="text-sticker-icon icon-plus-small">
                <use xlinkHref="#svg-plus-small"></use>
            </svg>
            100 Exp
            </p>
        
            <img className="badge-item-stat-image-preview" src="img/badge/platinumc-s.png" alt="badge-platinumc-s"/>
        
            <img className="badge-item-stat-image" src="img/badge/platinumc-b.png" alt="badge-platinumc-b"/>
        
            <p className="badge-item-stat-title">Platinum Cup</p>
        
            <p className="badge-item-stat-text">Won an official Social Network competition</p>
        
            <div className="progress-stat">
            <div id="badge-platinumc" className="progress-stat-bar"></div>
        
            <div className="bar-progress-wrap">
                <p className="bar-progress-info negative center"><span className="bar-progress-text no-space"></span></p>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Badges