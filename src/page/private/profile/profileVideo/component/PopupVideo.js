import React from 'react'

const PopupVideo = () => {
    return (
        <div className="popup-video">
            <div className="popup-close-button popup-video-trigger">
                <svg className="popup-close-button-icon icon-cross">
                    <use xlinkHref="#svg-cross"></use>
                </svg>
            </div>
            <div className="iframe-wrap">
                <iframe src="https://www.youtube.com/embed/6ErE27RNLDQ?start=200" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default PopupVideo