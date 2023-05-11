import React from 'react'

const PopupManageItem = () => {
  return (
    <div class="popup-box mid popup-manage-item">
        <div class="popup-close-button popup-manage-item-trigger">
        <svg class="popup-close-button-icon icon-cross">
            <use xlinkHref="#svg-cross"></use>
        </svg>
        </div>

        <div class="popup-box-body">
        <div class="popup-box-sidebar">
            <div class="product-preview">
            <a href="marketplace-product.html">
                <figure class="product-preview-image liquid">
                <img src="img/marketplace/items/10.jpg" alt="item-10"/>
                </figure>
            </a>
        
            <div class="product-preview-info">
                <p class="text-sticker"><span class="highlighted">$</span> 26.00</p>
        
                <p class="product-preview-title"><a href="marketplace-product.html">Pixel Diamond Gaming Magazine</a></p>
        
                <p class="product-preview-category digital"><a href="marketplace-category.html">HTML Templates</a></p>
            </div>
            </div>

            <div class="sidebar-menu-item">
            <div class="sidebar-menu-body">
                <p class="sidebar-menu-link active">Main Details</p>

                <p class="sidebar-menu-link">Preview Images</p>

                <p class="sidebar-menu-link">Description</p>

                <p class="sidebar-menu-link">Pack Files</p>
            </div>
            </div>

            <div class="popup-box-sidebar-footer">
            <p class="button primary full popup-manage-item-trigger">Save Changes!</p>

            <p class="button white full popup-manage-item-trigger">Discard All</p>
            </div>
        </div>
    
        <div class="popup-box-content limited" data-simplebar>
            <div class="widget-box">
            <p class="widget-box-title">Main Details</p>
        
            <div class="widget-box-content">
                <form class="form">
                <div class="form-row">
                    <div class="form-item">
                    <div class="form-input small active">
                        <label for="item-name">Item Name</label>
                        <input type="text" id="item-name" name="item_name" value="Pixel Diamond Gaming Magazine"/>
                    </div>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-item">
                    <div class="form-select">
                        <label for="item-category">Category</label>
                        <select id="item-category" name="item_category">
                        <option value="1">Digital - HTML Templates</option>
                        <option value="1">Digital - Logos &amp; Badges</option>
                        <option value="2">Physical - Art Prints</option>
                        </select>
                        <svg class="form-select-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow"></use>
                        </svg>
                    </div>
                    </div>
                </div>

                <div class="form-row split">
                    <div class="form-item">
                    <div class="form-counter-wrap">
                        <label>Regular License Price</label>
                        <div class="form-counter full with-currency">
                        <p class="form-counter-value">26</p>
            
                        <div class="form-counter-controls">
                            <div class="form-counter-control form-counter-control-increase">
                            <svg class="form-counter-icon icon-small-arrow">
                                <use xlinkHref="#svg-small-arrow"></use>
                            </svg>
                            </div>
            
                            <div class="form-counter-control form-counter-control-decrease">
                            <svg class="form-counter-icon icon-small-arrow">
                                <use xlinkHref="#svg-small-arrow"></use>
                            </svg>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div class="form-item">
                    <div class="form-counter-wrap">
                        <label>Extended License Price</label>
                        <div class="form-counter full with-currency">
                        <p class="form-counter-value">900</p>
            
                        <div class="form-counter-controls">
                            <div class="form-counter-control form-counter-control-increase">
                            <svg class="form-counter-icon icon-small-arrow">
                                <use xlinkHref="#svg-small-arrow"></use>
                            </svg>
                            </div>
            
                            <div class="form-counter-control form-counter-control-decrease">
                            <svg class="form-counter-icon icon-small-arrow">
                                <use xlinkHref="#svg-small-arrow"></use>
                            </svg>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-item">
                    <div class="form-input small active">
                        <label for="item-url">Item URL</label>
                        <input type="text" id="item-url" name="item_url" value="http://odindesign-themes.com/pixel-diamond/"/>
                    </div>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-item">
                    <div class="form-input small mid-textarea">
                        <textarea id="item-tags" name="item_tags" placeholder="Write the items tags here separated by commas (max 15)..."></textarea>
                    </div>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-item">
                    <div class="form-input small mid-textarea">
                        <textarea id="item-files" name="item_files" placeholder="Write the files included here separated by commas..."></textarea>
                    </div>
                    </div>
                </div>
                </form>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default PopupManageItem