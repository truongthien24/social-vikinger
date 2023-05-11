import React from 'react'

const PopupBox = () => {
  return (
    <div class="popup-box small popup-review">
        <div class="popup-close-button popup-review-trigger">
        <svg class="popup-close-button-icon icon-cross">
            <use xlinkHref="#svg-cross"></use>
        </svg>
        </div>

        <p class="popup-box-title">Review Item</p>

       <p class="popup-box-subtitle">Gaming Coins Badge Pack <span class="light">by Nick Grissom</span></p>

        <form class="form">
        <div class="form-row">
            <div class="form-item">
            <div class="form-rating-wrap">
                <label>Select Stars Rating:</label>

                <div class="rating-list form-rating">
                <div class="rating medium filled">
                    <svg class="rating-icon medium icon-star">
                    <use xlinkHref="#svg-star"></use>
                    </svg>
                </div>
            
                <div class="rating medium filled">
                    <svg class="rating-icon medium icon-star">
                    <use xlinkHref="#svg-star"></use>
                    </svg>
                </div>
            
                <div class="rating medium filled">
                    <svg class="rating-icon medium icon-star">
                    <use xlinkHref="#svg-star"></use>
                    </svg>
                </div>
            
                <div class="rating medium filled">
                    <svg class="rating-icon medium icon-star">
                    <use xlinkHref="#svg-star"></use>
                    </svg>
                </div>
            
                <div class="rating medium">
                    <svg class="rating-icon medium icon-star">
                    <use xlinkHref="#svg-star"></use>
                    </svg>
                </div>
                </div>
            </div>
            </div>
        </div>

        <div class="form-row">
            <div class="form-item">
            <div class="form-select">
                <label for="rating-reason">Rating Reason</label>
                <select id="rating-reason" name="rating_reason">
                <option value="1">Item Quality</option>
                <option value="2">Documentation Quality</option>
                <option value="3">Support Quality</option>
                </select>
                <svg class="form-select-icon icon-small-arrow">
                <use xlinkHref="#svg-small-arrow"></use>
                </svg>
            </div>
            </div>
        </div>

        <div class="form-row">
            <div class="form-item">
            <div class="form-input small">
                <label for="rating-description">Rating Description</label>
                <textarea id="rating-description" name="rating_description"></textarea>
            </div>
            </div>
        </div>

        <div class="popup-box-actions full void">
            <p class="popup-box-action full button secondary popup-review-trigger">Save Review!</p>

            <p class="popup-box-action-text">Your review and reason will be publicly visible to help other people when choosing their items!</p>
        </div>
        </form>
    </div>
  )
}

export default PopupBox