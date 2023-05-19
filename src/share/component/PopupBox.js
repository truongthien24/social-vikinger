import React from 'react'

const PopupBox = () => {
  return (
    <div className="popup-box small popup-review">
        <div className="popup-close-button popup-review-trigger">
        <svg className="popup-close-button-icon icon-cross">
            <use xlinkHref="#svg-cross"></use>
        </svg>
        </div>

        <p className="popup-box-title">Review Item</p>

       <p className="popup-box-subtitle">Gaming Coins Badge Pack <span className="light">by Nick Grissom</span></p>

        <form className="form">
        <div className="form-row">
            <div className="form-item">
            <div className="form-rating-wrap">
                <label>Select Stars Rating:</label>

                <div className="rating-list form-rating">
                <div className="rating medium filled">
                    <svg className="rating-icon medium icon-star">
                    <use xlinkHref="#svg-star"></use>
                    </svg>
                </div>
            
                <div className="rating medium filled">
                    <svg className="rating-icon medium icon-star">
                    <use xlinkHref="#svg-star"></use>
                    </svg>
                </div>
            
                <div className="rating medium filled">
                    <svg className="rating-icon medium icon-star">
                    <use xlinkHref="#svg-star"></use>
                    </svg>
                </div>
            
                <div className="rating medium filled">
                    <svg className="rating-icon medium icon-star">
                    <use xlinkHref="#svg-star"></use>
                    </svg>
                </div>
            
                <div className="rating medium">
                    <svg className="rating-icon medium icon-star">
                    <use xlinkHref="#svg-star"></use>
                    </svg>
                </div>
                </div>
            </div>
            </div>
        </div>

        <div className="form-row">
            <div className="form-item">
            <div className="form-select">
                <label for="rating-reason">Rating Reason</label>
                <select id="rating-reason" name="rating_reason">
                <option value="1">Item Quality</option>
                <option value="2">Documentation Quality</option>
                <option value="3">Support Quality</option>
                </select>
                <svg className="form-select-icon icon-small-arrow">
                <use xlinkHref="#svg-small-arrow"></use>
                </svg>
            </div>
            </div>
        </div>

        <div className="form-row">
            <div className="form-item">
            <div className="form-input small">
                <label for="rating-description">Rating Description</label>
                <textarea id="rating-description" name="rating_description"></textarea>
            </div>
            </div>
        </div>

        <div className="popup-box-actions full void">
            <p className="popup-box-action full button secondary popup-review-trigger">Save Review!</p>

            <p className="popup-box-action-text">Your review and reason will be publicly visible to help other people when choosing their items!</p>
        </div>
        </form>
    </div>
  )
}

export default PopupBox