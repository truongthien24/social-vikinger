import React from 'react'

const PopupManageItem = () => {
  return (
    <div className="popup-box mid popup-manage-item">
        <div className="popup-close-button popup-manage-item-trigger">
        <svg className="popup-close-button-icon icon-cross">
            <use xlinkHref="#svg-cross"></use>
        </svg>
        </div>

        <div className="popup-box-body">
        <div className="popup-box-sidebar">
            <div className="product-preview">
            <a href="marketplace-product">
                <figure className="product-preview-image liquid">
                <img src="img/marketplace/items/10.jpg" alt="item-10"/>
                </figure>
            </a>
        
            <div className="product-preview-info">
                <p className="text-sticker"><span className="highlighted">$</span> 26.00</p>
        
                <p className="product-preview-title"><a href="marketplace-product">Pixel Diamond Gaming Magazine</a></p>
        
                <p className="product-preview-category digital"><a href="marketplace-category">HTML Templates</a></p>
            </div>
            </div>

            <div className="sidebar-menu-item">
            <div className="sidebar-menu-body">
                <p className="sidebar-menu-link active">Main Details</p>

                <p className="sidebar-menu-link">Preview Images</p>

                <p className="sidebar-menu-link">Description</p>

                <p className="sidebar-menu-link">Pack Files</p>
            </div>
            </div>

            <div className="popup-box-sidebar-footer">
            <p className="button primary full popup-manage-item-trigger">Save Changes!</p>

            <p className="button white full popup-manage-item-trigger">Discard All</p>
            </div>
        </div>
    
        <div className="popup-box-content limited" data-simplebar>
            <div className="widget-box">
            <p className="widget-box-title">Main Details</p>
        
            <div className="widget-box-content">
                <form className="form">
                <div className="form-row">
                    <div className="form-item">
                    <div className="form-input small active">
                        <label for="item-name">Item Name</label>
                        <input type="text" id="item-name" name="item_name" value="Pixel Diamond Gaming Magazine"/>
                    </div>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-item">
                    <div className="form-select">
                        <label for="item-category">Category</label>
                        <select id="item-category" name="item_category">
                        <option value="1">Digital - HTML Templates</option>
                        <option value="1">Digital - Logos &amp; Badges</option>
                        <option value="2">Physical - Art Prints</option>
                        </select>
                        <svg className="form-select-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow"></use>
                        </svg>
                    </div>
                    </div>
                </div>

                <div className="form-row split">
                    <div className="form-item">
                    <div className="form-counter-wrap">
                        <label>Regular License Price</label>
                        <div className="form-counter full with-currency">
                        <p className="form-counter-value">26</p>
            
                        <div className="form-counter-controls">
                            <div className="form-counter-control form-counter-control-increase">
                            <svg className="form-counter-icon icon-small-arrow">
                                <use xlinkHref="#svg-small-arrow"></use>
                            </svg>
                            </div>
            
                            <div className="form-counter-control form-counter-control-decrease">
                            <svg className="form-counter-icon icon-small-arrow">
                                <use xlinkHref="#svg-small-arrow"></use>
                            </svg>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="form-item">
                    <div className="form-counter-wrap">
                        <label>Extended License Price</label>
                        <div className="form-counter full with-currency">
                        <p className="form-counter-value">900</p>
            
                        <div className="form-counter-controls">
                            <div className="form-counter-control form-counter-control-increase">
                            <svg className="form-counter-icon icon-small-arrow">
                                <use xlinkHref="#svg-small-arrow"></use>
                            </svg>
                            </div>
            
                            <div className="form-counter-control form-counter-control-decrease">
                            <svg className="form-counter-icon icon-small-arrow">
                                <use xlinkHref="#svg-small-arrow"></use>
                            </svg>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-item">
                    <div className="form-input small active">
                        <label for="item-url">Item URL</label>
                        <input type="text" id="item-url" name="item_url" value="http://odindesign-themes.com/pixel-diamond/"/>
                    </div>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-item">
                    <div className="form-input small mid-textarea">
                        <textarea id="item-tags" name="item_tags" placeholder="Write the items tags here separated by commas (max 15)..."></textarea>
                    </div>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-item">
                    <div className="form-input small mid-textarea">
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