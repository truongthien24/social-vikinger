import React from 'react'

export const renderSocialIcon = (icon) => {
    switch(icon?.name) {
        case 'twitter': {
            return  (
                <svg className="social-link-icon icon-twitter">
                    <use xlinkHref="#svg-twitter"></use>
                </svg>
            )
        };  
        case 'instagram': {
            return  (
                <svg className="social-link-icon icon-instagram">
                    <use xlinkHref="#svg-instagram"></use>
                </svg>
            )
        }; 
        case 'twitch': {
            return  (
                <svg className="social-link-icon icon-twitch">
                    <use xlinkHref="#svg-twitch"></use>
                </svg>
            )
        }; 
        case 'discord': {
            return  (
                <svg className="social-link-icon icon-discord">
                    <use xlinkHref="#svg-discord"></use>
                </svg>
            )
        }; 
        default: return <></> 
    }
}

