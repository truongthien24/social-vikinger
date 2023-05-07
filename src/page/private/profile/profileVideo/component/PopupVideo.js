import React from 'react'

const PopupVideo = () => {
    return (
        <div class="popup-video">
            <div class="popup-close-button popup-video-trigger">
                <svg class="popup-close-button-icon icon-cross">
                    <use xlinkHref="#svg-cross"></use>
                </svg>
            </div>
            <div class="iframe-wrap">
                <iframe src="https://www.youtube.com/embed/6ErE27RNLDQ?start=200" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default PopupVideo