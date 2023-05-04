import React from 'react'
import { renderSocialIcon } from '../../../../../util/method/renderSocialIcon';

const UserPreviewGridNormal = (props) => {

    // Props
    const {data} = props;

    // Method
    const renderBadge = () => {
        return data?.badgeList?.map((badge, index)=> {
            if(index < 4) {
                return <div className="badge-item" key={index}>
                    <img src={badge?.img} alt={badge?.name}/>
                </div>
            }
        })
    }

    const renderSocial = () => {
        return data?.userSocial?.map((social, index) => {
            return <a key={index} className={`social-link small ${social?.name}`} href={social?.path}>
                {renderSocialIcon(social)}
            </a>
        })
    }

    // Return
    return (
        <div className="user-preview">
            <figure className="user-preview-cover liquid">
                <img src={data?.userBackground} alt="cover-04"/>
            </figure>
            <div className="user-preview-info">
                <div className="user-short-description">
                    <a className="user-short-description-avatar user-avatar medium" href="profile-timeline.html">
                        <div className="user-avatar-border">
                            <div className="hexagon-120-132"></div>
                        </div>
                        <div className="user-avatar-content">
                            <div className="hexagon-image-82-90" data-src={data?.userAvatar}></div>
                        </div>
                        <div className="user-avatar-progress">
                            <div className="hexagon-progress-100-110"></div>
                        </div>
                        <div className="user-avatar-progress-border">
                            <div className="hexagon-border-100-110"></div>
                        </div>
                        <div className="user-avatar-badge">
                            <div className="user-avatar-badge-border">
                            <div className="hexagon-32-36"></div>
                            </div>
                            <div className="user-avatar-badge-content">
                                <div className="hexagon-dark-26-28"></div>
                            </div>
                            <p className="user-avatar-badge-text">{data?.userLevel}</p>
                        </div>
                    </a>
                    <p className="user-short-description-title">
                        <a href="profile-timeline.html">{data?.userName}</a>
                    </p>
                    <p className="user-short-description-text">
                        <a href="#">{data?.userPath}</a>
                    </p>
                </div>
                <div className="badge-list small">
                    {renderBadge()}
                    <a className="badge-item" href="profile-badges.html">
                        <img src="img/badge/blank-s.png" alt="badge-blank-s"/>
                        <p className="badge-item-text">+{data?.badge?.length - 4}</p>
                    </a>
                </div>
                <div id="user-preview-stats-slides-01" className="user-preview-stats-slides">
                    <div className="user-preview-stats-slide">
                        <div className="user-stats">
                            <div className="user-stat">
                                <p className="user-stat-title">{data?.userPreviewStats?.numberPost}</p>
                                <p className="user-stat-text">posts</p>
                            </div>
                            <div className="user-stat">
                                <p className="user-stat-title">{data?.userPreviewStats?.numberFriends}</p>
                                <p className="user-stat-text">friends</p>
                            </div>
                            <div className="user-stat">
                                <p className="user-stat-title">{data?.userPreviewStats?.numberVisited}</p>
                                <p className="user-stat-text">visits</p>
                            </div>
                        </div>
                    </div>
                    <div className="user-preview-stats-slide">
                        <p className="user-preview-text">{data?.userPreviewStats?.description}</p>
                    </div>
                </div>
                <div id="user-preview-stats-roster-01" className="user-preview-stats-roster slider-roster">
                    <div className="slider-roster-item"></div>
                    <div className="slider-roster-item"></div>
                </div>
                <div className="social-links small">
                    {renderSocial()}
                    {/* <a className="social-link small twitter" href="#">
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
                    <a className="social-link small discord" href="#">
                        <svg className="social-link-icon icon-discord">
                            <use xlinkHref="#svg-discord"></use>
                        </svg>
                    </a> */}
                    
                </div>
                <div className="user-preview-actions">
                    <p className="button secondary">Add Friend +</p>
                    <p className="button primary">Send Message</p>
                </div>
            </div>
        </div>
    )
}

export default UserPreviewGridNormal