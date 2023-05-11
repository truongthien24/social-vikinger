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
        <div class="account-hub-content">
            <div class="section-header">
            <div class="section-header-info">
                <p class="section-pretitle">My Store</p>

                <h2 class="section-title">Downloads <span class="highlighted">2</span></h2>
            </div>
            </div>

            <div class="section-filters-bar v2">
            <form class="form">
                <div class="form-item split medium">
                <div class="form-select">
                    <label for="downloads-filter-category">Filter By</label>
                    <select id="downloads-filter-category" name="downloads_filter_category">
                    <option value="1">All Categories</option>
                    </select>
                    <svg class="form-select-icon icon-small-arrow">
                    <use xlinkHref="#svg-small-arrow"></use>
                    </svg>
                </div>
        
                <div class="form-select">
                    <label for="downloads-filter-order">Order By</label>
                    <select id="downloads-filter-order" name="downloads_filter_order">
                    <option value="1">Purchase Date (Latest to Oldest)</option>
                    <option value="2">Purchase Date (Oldest to Latest)</option>
                    </select>
                    <svg class="form-select-icon icon-small-arrow">
                    <use xlinkHref="#svg-small-arrow"></use>
                    </svg>
                </div>
            
                <button class="button primary">Filter Downloads!</button>
                </div>
            </form>
            </div>

            <div class="table-wrap" data-simplebar>
            <div class="table table-downloads split-rows">
                <div class="table-header">
                <div class="table-header-column">
                    <p class="table-header-title">Item</p>
                </div>
            
                <div class="table-header-column padded">
                    <p class="table-header-title">Date</p>
                </div>
            
                <div class="table-header-column padded">
                    <p class="table-header-title">License</p>
                </div>
            
                <div class="table-header-column padded">
                    <p class="table-header-title">Price</p>
                </div>
            
                <div class="table-header-column padded-left"></div>
                </div>
            
                <div class="table-body same-color-rows">
                <div class="table-row medium">
                    <div class="table-column">
                    <div class="product-preview tiny">
                        <a href="marketplace-product.html">
                        <figure class="product-preview-image short liquid">
                            <img src="img/marketplace/items/11.jpg" alt="item-11"/>
                        </figure>
                        </a>
            
                        <div class="product-preview-info">
                        <p class="product-preview-title"><a href="marketplace-product.html">Gaming Coin Badges Pack</a></p>
            
                        <p class="product-preview-category digital"><a href="marketplace-category.html">Illustrations</a></p>
            
                        <p class="product-preview-creator"><a href="profile-timeline.html">Nick Grissom</a></p>
                        </div>
                    </div>
                    </div>
            
                    <div class="table-column padded">
                    <p class="table-title">11/14/19</p>
                    </div>
            
                    <div class="table-column padded">
                    <p class="table-title">Regular</p>
                    </div>
            
                    <div class="table-column padded">
                    <p class="price-title"><span class="currency">$</span> 6.00</p>
                    </div>
            
                    <div class="table-column padded-left">
                    <div class="table-actions">
                        <p class="button secondary">Download</p>
            
                        <div class="button with-only-icon popup-review-trigger">
                        <div class="rating-list">
                            <div class="rating dark filled">
                            <svg class="rating-icon icon-star">
                                <use xlinkHref="#svg-star"></use>
                            </svg>
                            </div>
                    
                            <div class="rating dark filled">
                            <svg class="rating-icon icon-star">
                                <use xlinkHref="#svg-star"></use>
                            </svg>
                            </div>
                    
                            <div class="rating dark filled">
                            <svg class="rating-icon icon-star">
                                <use xlinkHref="#svg-star"></use>
                            </svg>
                            </div>
                    
                            <div class="rating dark filled">
                            <svg class="rating-icon icon-star">
                                <use xlinkHref="#svg-star"></use>
                            </svg>
                            </div>
                    
                            <div class="rating dark filled">
                            <svg class="rating-icon icon-star">
                                <use xlinkHref="#svg-star"></use>
                            </svg>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="table-row medium">
                    <div class="table-column">
                    <div class="product-preview tiny">
                        <a href="marketplace-product.html">
                        <figure class="product-preview-image short liquid">
                            <img src="img/marketplace/items/08.jpg" alt="item-08"/>
                        </figure>
                        </a>
            
                        <div class="product-preview-info">
                        <p class="product-preview-title"><a href="marketplace-product.html">People Illustrations Pack 02</a></p>
            
                        <p class="product-preview-category digital"><a href="marketplace-category.html">Illustrations</a></p>
            
                        <p class="product-preview-creator"><a href="profile-timeline.html">Destroy Dex</a></p>
                        </div>
                    </div>
                    </div>
            
                    <div class="table-column padded">
                    <p class="table-title">04/21/19</p>
                    </div>
            
                    <div class="table-column padded">
                    <p class="table-title">Regular</p>
                    </div>
            
                    <div class="table-column padded">
                    <p class="price-title"><span class="currency">$</span> 5.00</p>
                    </div>
            
                    <div class="table-column padded-left">
                    <div class="table-actions">
                        <p class="button secondary">Download</p>
            
                        <div class="button with-only-icon popup-review-trigger">
                        <div class="rating-list">
                            <div class="rating dark filled">
                            <svg class="rating-icon icon-star">
                                <use xlinkHref="#svg-star"></use>
                            </svg>
                            </div>
                    
                            <div class="rating dark filled">
                            <svg class="rating-icon icon-star">
                                <use xlinkHref="#svg-star"></use>
                            </svg>
                            </div>
                    
                            <div class="rating dark filled">
                            <svg class="rating-icon icon-star">
                                <use xlinkHref="#svg-star"></use>
                            </svg>
                            </div>
                    
                            <div class="rating dark filled">
                            <svg class="rating-icon icon-star">
                                <use xlinkHref="#svg-star"></use>
                            </svg>
                            </div>
                    
                            <div class="rating dark">
                            <svg class="rating-icon icon-star">
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