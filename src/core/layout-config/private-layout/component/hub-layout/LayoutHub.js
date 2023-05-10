import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoading } from '../../../../../redux/action/homeAction';
import PopupNewGroup from '../../../../../share/component/PopupNewGroup';

const LayoutHub = ({children}) => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const {pathname} = window.location

    useEffect(()=> {
        let script = document.createElement("script");
        let script11 = document.createElement("script");
        script.src = "/js/utils/app.js";
        script11.src = "/js/global/global.accordions.js";
        script.async = true;
        script11.async = true;
        document.body.appendChild(script);
        document.body.appendChild(script11);
    }, [])

  return (
    <>
        <div class="content-grid">
            <div class="section-banner">
            <img class="section-banner-icon" src="img/banner/accounthub-icon.png" alt="accounthub-icon"/>
        
            <p class="section-banner-title">Account Hub</p>
        
            <p class="section-banner-text">Profile info, messages, settings and much more!</p>
            </div>

            <div class="grid grid-3-9 medium-space">
                <div class="account-hub-sidebar">
                    <div class="sidebar-box no-padding">
                        <div class="sidebar-menu round-borders">
                            <div class="sidebar-menu-item">
                                <div class="sidebar-menu-header accordion-trigger-linked">
                                    <svg class="sidebar-menu-header-icon icon-profile">
                                    <use xlinkHref="#svg-profile"></use>
                                    </svg>

                                    <div class="sidebar-menu-header-control-icon">
                                    <svg class="sidebar-menu-header-control-icon-open icon-minus-small">
                                        <use xlinkHref="#svg-minus-small"></use>
                                    </svg>

                                    <svg class="sidebar-menu-header-control-icon-closed icon-plus-small">
                                        <use xlinkHref="#svg-plus-small"></use>
                                    </svg>
                                    </div>

                                    <p class="sidebar-menu-header-title">My Profile</p>

                                    <p class="sidebar-menu-header-text">Change your avatar &amp; cover, accept friends, read messages and more!</p>
                                </div>

                                <div class="sidebar-menu-body accordion-content-linked">
                                    <a class="sidebar-menu-link" onClick={()=>{navigate("/hub-profile-info")}}>Profile Info</a>

                                    <a class="sidebar-menu-link" onClick={()=>{navigate("/hub-profile-social")}}>Social &amp; Stream</a>

                                    <a class="sidebar-menu-link" onClick={()=>{navigate("/hub-profile-notifications")}}>Notifications</a>

                                    <a class="sidebar-menu-link" onClick={()=>{navigate("/hub-profile-messages")}}>Messages</a>

                                    <a class="sidebar-menu-link" onClick={()=>{navigate("/hub-profile-requests")}}>Friend Requests</a>
                                </div>
                            </div>

                            <div class="sidebar-menu-item">
                            <div class="sidebar-menu-header accordion-trigger-linked">
                                <svg class="sidebar-menu-header-icon icon-settings">
                                <use xlinkHref="#svg-settings"></use>
                                </svg>

                                <div class="sidebar-menu-header-control-icon">
                                <svg class="sidebar-menu-header-control-icon-open icon-minus-small">
                                    <use xlinkHref="#svg-minus-small"></use>
                                </svg>

                                <svg class="sidebar-menu-header-control-icon-closed icon-plus-small">
                                    <use xlinkHref="#svg-plus-small"></use>
                                </svg>
                                </div>

                                <p class="sidebar-menu-header-title">Account</p>

                                <p class="sidebar-menu-header-text">Change settings, configure notifications, and review your privacy</p>
                            </div>

                            <div class="sidebar-menu-body accordion-content-linked">
                                <a class="sidebar-menu-link" onClick={()=>{navigate("/hub-account-info")}}>Account Info</a>

                                <a class="sidebar-menu-link" onClick={()=>{navigate("/hub-account-password")}}>Change Password</a>

                                <a class="sidebar-menu-link" onClick={()=>{navigate("/hub-account-settings")}}>General Settings</a>
                            </div>
                            </div>

                            <div class="sidebar-menu-item">
                            <div class="sidebar-menu-header accordion-trigger-linked">
                                <svg class="sidebar-menu-header-icon icon-group">
                                <use xlinkHref="#svg-group"></use>
                                </svg>

                                <div class="sidebar-menu-header-control-icon">
                                <svg class="sidebar-menu-header-control-icon-open icon-minus-small">
                                    <use xlinkHref="#svg-minus-small"></use>
                                </svg>

                                <svg class="sidebar-menu-header-control-icon-closed icon-plus-small">
                                    <use xlinkHref="#svg-plus-small"></use>
                                </svg>
                                </div>

                                <p class="sidebar-menu-header-title">Groups</p>

                                <p class="sidebar-menu-header-text">Create new groups, manage the ones you created or accept invites!</p>
                            </div>

                            <div class="sidebar-menu-body accordion-content-linked accordion-open">
                                <a class="sidebar-menu-link active" onClick={()=>{navigate("/hub-group-management")}}>Manage Groups</a>

                                <a class="sidebar-menu-link" onClick={()=>{navigate("/hub-group-invitations")}}>Invitations</a>
                            </div>
                            </div>

                            <div class="sidebar-menu-item">
                            <div class="sidebar-menu-header accordion-trigger-linked">
                                <svg class="sidebar-menu-header-icon icon-store">
                                <use xlinkHref="#svg-store"></use>
                                </svg>

                                <div class="sidebar-menu-header-control-icon">
                                <svg class="sidebar-menu-header-control-icon-open icon-minus-small">
                                    <use xlinkHref="#svg-minus-small"></use>
                                </svg>

                                <svg class="sidebar-menu-header-control-icon-closed icon-plus-small">
                                    <use xlinkHref="#svg-plus-small"></use>
                                </svg>
                                </div>

                                <p class="sidebar-menu-header-title">My Store</p>

                                <p class="sidebar-menu-header-text">Review your account, manage products check stats and much more!</p>
                            </div>

                            <div class="sidebar-menu-body accordion-content-linked">
                                <a class="sidebar-menu-link" onClick={()=>{navigate("/hub-store-account.html")}}>My Account</a>

                                <a class="sidebar-menu-link" onClick={()=>{navigate("/hub-store-statement.html")}}>Sales Statement</a>

                                <a class="sidebar-menu-link" onClick={()=>{navigate("/hub-store-items.html")}}>Manage Items</a>

                                <a class="sidebar-menu-link" onClick={()=>{navigate("/hub-store-downloads.html")}}>Downloads</a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                {children}
            </div>
        </div>
        <PopupNewGroup/>
    </>
  )
}

export default LayoutHub