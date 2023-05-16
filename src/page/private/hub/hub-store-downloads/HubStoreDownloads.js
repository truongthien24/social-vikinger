import React, { useEffect } from 'react'

const HubStoreDownloads = () => {

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
        <div className="account-hub-content">
            <div className="section-header">
            <div className="section-header-info">
                <p className="section-pretitle">My Store</p>

                <h2 className="section-title">Downloads <span className="highlighted">2</span></h2>
            </div>
            </div>

            <div className="section-filters-bar v2">
            <form className="form">
                <div className="form-item split medium">
                <div className="form-select">
                    <label for="downloads-filter-category">Filter By</label>
                    <select id="downloads-filter-category" name="downloads_filter_category">
                    <option value="1">All Categories</option>
                    </select>
                    <svg className="form-select-icon icon-small-arrow">
                    <use xlinkHref="#svg-small-arrow"></use>
                    </svg>
                </div>
        
                <div className="form-select">
                    <label for="downloads-filter-order">Order By</label>
                    <select id="downloads-filter-order" name="downloads_filter_order">
                    <option value="1">Purchase Date (Latest to Oldest)</option>
                    <option value="2">Purchase Date (Oldest to Latest)</option>
                    </select>
                    <svg className="form-select-icon icon-small-arrow">
                    <use xlinkHref="#svg-small-arrow"></use>
                    </svg>
                </div>
            
                <button className="button primary">Filter Downloads!</button>
                </div>
            </form>
            </div>

            <div className="table-wrap" data-simplebar>
            <div className="table table-downloads split-rows">
                <div className="table-header">
                <div className="table-header-column">
                    <p className="table-header-title">Item</p>
                </div>
            
                <div className="table-header-column padded">
                    <p className="table-header-title">Date</p>
                </div>
            
                <div className="table-header-column padded">
                    <p className="table-header-title">License</p>
                </div>
            
                <div className="table-header-column padded">
                    <p className="table-header-title">Price</p>
                </div>
            
                <div className="table-header-column padded-left"></div>
                </div>
            
                <div className="table-body same-color-rows">
                <div className="table-row medium">
                    <div className="table-column">
                    <div className="product-preview tiny">
                        <a href="marketplace-product">
                        <figure className="product-preview-image short liquid">
                            <img src="img/marketplace/items/11.jpg" alt="item-11"/>
                        </figure>
                        </a>
            
                        <div className="product-preview-info">
                        <p className="product-preview-title"><a href="marketplace-product">Gaming Coin Badges Pack</a></p>
            
                        <p className="product-preview-category digital"><a href="marketplace-category">Illustrations</a></p>
            
                        <p className="product-preview-creator"><a href="profile-timeline">Nick Grissom</a></p>
                        </div>
                    </div>
                    </div>
            
                    <div className="table-column padded">
                    <p className="table-title">11/14/19</p>
                    </div>
            
                    <div className="table-column padded">
                    <p className="table-title">Regular</p>
                    </div>
            
                    <div className="table-column padded">
                    <p className="price-title"><span className="currency">$</span> 6.00</p>
                    </div>
            
                    <div className="table-column padded-left">
                    <div className="table-actions">
                        <p className="button secondary">Download</p>
            
                        <div className="button with-only-icon popup-review-trigger">
                        <div className="rating-list">
                            <div className="rating dark filled">
                            <svg className="rating-icon icon-star">
                                <use xlinkHref="#svg-star"></use>
                            </svg>
                            </div>
                    
                            <div className="rating dark filled">
                            <svg className="rating-icon icon-star">
                                <use xlinkHref="#svg-star"></use>
                            </svg>
                            </div>
                    
                            <div className="rating dark filled">
                            <svg className="rating-icon icon-star">
                                <use xlinkHref="#svg-star"></use>
                            </svg>
                            </div>
                    
                            <div className="rating dark filled">
                            <svg className="rating-icon icon-star">
                                <use xlinkHref="#svg-star"></use>
                            </svg>
                            </div>
                    
                            <div className="rating dark filled">
                            <svg className="rating-icon icon-star">
                                <use xlinkHref="#svg-star"></use>
                            </svg>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="table-row medium">
                    <div className="table-column">
                    <div className="product-preview tiny">
                        <a href="marketplace-product">
                        <figure className="product-preview-image short liquid">
                            <img src="img/marketplace/items/08.jpg" alt="item-08"/>
                        </figure>
                        </a>
            
                        <div className="product-preview-info">
                        <p className="product-preview-title"><a href="marketplace-product">People Illustrations Pack 02</a></p>
            
                        <p className="product-preview-category digital"><a href="marketplace-category">Illustrations</a></p>
            
                        <p className="product-preview-creator"><a href="profile-timeline">Destroy Dex</a></p>
                        </div>
                    </div>
                    </div>
            
                    <div className="table-column padded">
                    <p className="table-title">04/21/19</p>
                    </div>
            
                    <div className="table-column padded">
                    <p className="table-title">Regular</p>
                    </div>
            
                    <div className="table-column padded">
                    <p className="price-title"><span className="currency">$</span> 5.00</p>
                    </div>
            
                    <div className="table-column padded-left">
                    <div className="table-actions">
                        <p className="button secondary">Download</p>
            
                        <div className="button with-only-icon popup-review-trigger">
                        <div className="rating-list">
                            <div className="rating dark filled">
                            <svg className="rating-icon icon-star">
                                <use xlinkHref="#svg-star"></use>
                            </svg>
                            </div>
                    
                            <div className="rating dark filled">
                            <svg className="rating-icon icon-star">
                                <use xlinkHref="#svg-star"></use>
                            </svg>
                            </div>
                    
                            <div className="rating dark filled">
                            <svg className="rating-icon icon-star">
                                <use xlinkHref="#svg-star"></use>
                            </svg>
                            </div>
                    
                            <div className="rating dark filled">
                            <svg className="rating-icon icon-star">
                                <use xlinkHref="#svg-star"></use>
                            </svg>
                            </div>
                    
                            <div className="rating dark">
                            <svg className="rating-icon icon-star">
                                <use xlinkHref="#svg-star"></use>
                            </svg>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default HubStoreDownloads