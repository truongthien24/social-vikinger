import React from 'react'
import { renderSocialIcon } from '../../../../../util/method/renderSocialIcon';

const UserPreviewGridSmall = (props) => {

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
        <div className="user-preview small">
            <figure className="user-preview-cover liquid">
                <img src={data?.userBackground} alt="cover-04"/>
            </figure>
            <div className="user-preview-info">
                <div className="user-short-description small">
                    <a className="user-short-description-avatar user-avatar" href="profile-timeline">
                        <div className="user-avatar-border">
                            <div className="hexagon-100-110"></div>
                        </div>
                        <div className="user-avatar-content">
                            <div className="hexagon-image-68-74" data-src={data?.userAvatar}></div>
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
                            <p className="user-avatar-badge-text">{data?.userLevel}</p>
                        </div>
                    </a>
                    <p className="user-short-description-title">
                        <a href="profile-timeline">{data?.userName}</a>
                    </p>
                    <p className="user-short-description-text">
                        <a href="#">{data?.userPath}</a>
                    </p>
                </div>
                <div className="badge-list small">
                    {renderBadge()}
                    <a className="badge-item" href="profile-badges">
                        <img src="img/badge/blank-s.png" alt="badge-blank-s"/>
                        <p className="badge-item-text">+{data?.badge?.length - 4}</p>
                    </a>
                </div>
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
                <div className="social-links small">
                    {renderSocial()}
                </div>
            </div>
            <div className="user-preview-footer">
                <div className="user-preview-footer-action">
                    <p className="button void void-secondary">
                        <svg className="button-icon icon-add-friend">
                            <use xlinkHref="#svg-add-friend"></use>
                        </svg>
                    </p>
                </div>
                <div className="user-preview-footer-action">
                    <p className="button void void-primary">
                        <svg className="button-icon icon-comment">
                            <use xlinkHref="#svg-comment"></use>
                        </svg>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default UserPreviewGridSmall