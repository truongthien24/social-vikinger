import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoading } from '../../../../redux/action/homeAction';
import PopupNewGroup from '../../../../share/component/PopupNewGroup';

const HubGroupManagement = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    // useEffect(()=> {
    //     let script = document.createElement("script");
    //     let script11 = document.createElement("script");
    //     let script12 = document.createElement("script");
    //     script.src = "/js/utils/app.js";
    //     script11.src = "/js/global/global.accordions.js";
    //     script12.src = "/js/global/global.popups.js";
    //     script.async = true;
    //     script11.async = true;
    //     script12.async = true;
    //     document.body.appendChild(script);
    //     document.body.appendChild(script11);
    //     document.body.appendChild(script12);

    //     return () => {
    //         dispatch(setLoading({
    //             status: 'isLoading'
    //         }))
    //     }
    // }, [])

  return (
    <>
        <div class="account-hub-content">
            <div class="section-header">
            <div class="section-header-info">
                <p class="section-pretitle">Groups</p>

                <h2 class="section-title">Manage Groups</h2>
            </div>
            </div>

            <div class="grid grid-3-3-3 centered-on-mobile">
            <div class="create-entity-box">
                <div class="create-entity-box-cover"></div>
            
                <div class="create-entity-box-avatar">
                <svg class="create-entity-box-avatar-icon icon-group">
                    <use xlinkHref="#svg-group"></use>
                </svg>
                </div>
            
                <div class="create-entity-box-info">
                <p class="create-entity-box-title">Create New Group</p>
            
                <p class="create-entity-box-text">Share your passion with others!</p>
            
                <p class="button secondary full popup-manage-group-trigger">Start Creating!</p>
                </div>
            </div>

            <div class="user-preview small fixed-height-medium">
                <figure class="user-preview-cover liquid">
                <img src="img/cover/29.jpg" alt="cover-29"/>
                </figure>

                <div class="user-preview-info">
                <div class="user-short-description small">
                    <a class="user-short-description-avatar user-avatar no-stats" onClick={()=>{navigate("/group-timeline.html")}}>
                    <div class="user-avatar-border">
                        <div class="hexagon-100-108"></div>
                    </div>
                
                    <div class="user-avatar-content">
                        <div class="hexagon-image-84-92" data-src="img/avatar/24.jpg"></div>
                    </div>
                    </a>
            
                    <p class="user-short-description-title small"><a onClick={()=>{navigate("/group-timeline.html")}}>Cosplayers of the World</a></p>
            
                    <p class="user-short-description-text regular">Group Organizer</p>
                </div>

                <p class="button white full popup-manage-group-trigger">Manage Group</p>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default HubGroupManagement