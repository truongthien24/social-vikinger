import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoading } from '../../../../redux/action/homeAction';
import PopupNewGroup from '../../../../share/component/PopupNewGroup';

const HubGroupManagement = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

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
        <div className="account-hub-content">
            <div className="section-header">
            <div className="section-header-info">
                <p className="section-pretitle">Groups</p>

                <h2 className="section-title">Manage Groups</h2>
            </div>
            </div>

            <div className="grid grid-3-3-3 centered-on-mobile">
            <div className="create-entity-box">
                <div className="create-entity-box-cover"></div>
            
                <div className="create-entity-box-avatar">
                <svg className="create-entity-box-avatar-icon icon-group">
                    <use xlinkHref="#svg-group"></use>
                </svg>
                </div>
            
                <div className="create-entity-box-info">
                <p className="create-entity-box-title">Create New Group</p>
            
                <p className="create-entity-box-text">Share your passion with others!</p>
            
                <p className="button secondary full popup-manage-group-trigger">Start Creating!</p>
                </div>
            </div>

            <div className="user-preview small fixed-height-medium">
                <figure className="user-preview-cover liquid">
                <img src="img/cover/29.jpg" alt="cover-29"/>
                </figure>

                <div className="user-preview-info">
                <div className="user-short-description small">
                    <a className="user-short-description-avatar user-avatar no-stats" onClick={()=>{navigate("/group-timeline")}}>
                    <div className="user-avatar-border">
                        <div className="hexagon-100-108"></div>
                    </div>
                
                    <div className="user-avatar-content">
                        <div className="hexagon-image-84-92" data-src="img/avatar/24.jpg"></div>
                    </div>
                    </a>
            
                    <p className="user-short-description-title small"><a onClick={()=>{navigate("/group-timeline")}}>Cosplayers of the World</a></p>
            
                    <p className="user-short-description-text regular">Group Organizer</p>
                </div>

                <p className="button white full popup-manage-group-trigger">Manage Group</p>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default HubGroupManagement