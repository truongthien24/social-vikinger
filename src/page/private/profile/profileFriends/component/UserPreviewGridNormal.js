import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { renderSocialIcon } from '../../../../../util/method/renderSocialIcon';
import { setLoading } from '../../../../../redux/action/homeAction';

const UserPreviewGridNormal = (props) => {

    // Props
    const {data} = props;

    const [searchParams] = useSearchParams();

    const id = searchParams.get('id');

    const jwt = JSON.parse(localStorage.getItem('jwt'))

    const dispatch = useDispatch();

    const navigate = useNavigate()

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
                    <a className="user-short-description-avatar user-avatar medium" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate({
                            pathname: "/profile-timeline",
                            search: `?id=${data?.id}`
                        })
                    }}>
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
                        <a onClick={()=>{
                            dispatch(setLoading({
                                status: 'isLoading'
                            }))
                            navigate({
                                pathname: "/profile-timeline",
                                search: ``
                            })
                        }}>{data?.userName}</a>
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
                </div>
                <div className="user-preview-actions">
                    {
                        jwt != id
                        &&
                        <p className="button secondary">Add Friend +</p>
                    }
                    <p className="button primary">Send Message</p>
                </div>
            </div>
        </div>
    )
}

export default UserPreviewGridNormal