import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoading } from '../../../redux/action/homeAction';

const MarketPlaceCategory = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
  return (
    <>
        <div class="content-grid">
            <div class="section-banner">
            <img class="section-banner-icon" src="img/banner/marketplace-icon.png" alt="marketplace-icon"/>
        
            <p class="section-banner-title">Marketplace</p>
        
            <p class="section-banner-text">The best place for the community to buy and sell!</p>
            </div>

            <div class="section-header">
            <div class="section-header-info">
                <p class="section-pretitle">Browse Products</p>
        
                <h2 class="section-title">Digital Items</h2>
            </div>

            <div class="section-header-actions">
                <a class="section-header-subsection" onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace')}}>Marketplace</a>
        
                <p class="section-header-subsection">Digital Items</p>
            </div>
            </div>

            <div class="section-filters-bar v4">
            <div class="section-filters-bar-actions">
                <form class="form">
                <div class="form-item split">
                    <div class="form-input small">
                    <label for="items-search">Search Items</label>
                    <input type="text" id="items-search" name="items_search"/>
                    </div>
        
                    <button class="button primary">
                    <svg class="icon-magnifying-glass">
                        <use xlinkHref="#svg-magnifying-glass"></use>
                    </svg>
                    </button>
                </div>
                </form>
            </div>
        
            <div class="section-filters-bar-actions">
                <form class="form">
                <div class="form-item split medium">
                    <div class="form-select small">
                    <label for="items-filter-category">Filter By</label>
                    <select id="items-filter-category" name="items_filter_category">
                        <option value="0">Date Published</option>
                        <option value="1">Price</option>
                    </select>
                    <svg class="form-select-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow"></use>
                    </svg>
                    </div>
            
                    <div class="form-select small">
                    <label for="items-filter-order">Order By</label>
                    <select id="items-filter-order" name="items_filter_order">
                        <option value="0">Descending</option>
                        <option value="1">Ascending</option>
                    </select>
                    <svg class="form-select-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow"></use>
                    </svg>
                    </div>
                
                    <button class="button secondary">Apply Filters</button>
                </div>
                </form>
            </div>
            </div>

            <div class="grid grid-3-9 small-space">
            <div class="marketplace-sidebar">
                <div class="sidebar-box">
                <p class="sidebar-box-title">Categories</p>
            
                <div class="sidebar-box-items">
                    <div class="checkbox-line">
                    <div class="checkbox-wrap">
                        <input type="checkbox" id="category-all" name="category_all"/>
                        <div class="checkbox-box">
                        <svg class="icon-cross">
                            <use xlinkHref="#svg-cross"></use>
                        </svg>
                        </div>
                        <label for="category-all">All Categories</label>
                    </div>
            
                    <p class="checkbox-line-text">1207</p>
                    </div>
            
                    <div class="checkbox-line">
                    <div class="checkbox-wrap">
                        <input type="checkbox" id="category-psd" name="category_psd"/>
                        <div class="checkbox-box">
                        <svg class="icon-cross">
                            <use xlinkHref="#svg-cross"></use>
                        </svg>
                        </div>
                        <label for="category-psd">PSD Templates</label>
                    </div>
            
                    <p class="checkbox-line-text">134</p>
                    </div>
            
                    <div class="checkbox-line">
                    <div class="checkbox-wrap">
                        <input type="checkbox" id="category-html" name="category_html" checked/>
                        <div class="checkbox-box">
                        <svg class="icon-cross">
                            <use xlinkHref="#svg-cross"></use>
                        </svg>
                        </div>
                        <label for="category-html">HTML Templates</label>
                    </div>
            
                    <p class="checkbox-line-text">566</p>
                    </div>
            
                    <div class="checkbox-line">
                    <div class="checkbox-wrap">
                        <input type="checkbox" id="category-wp" name="category_wp"/>
                        <div class="checkbox-box">
                        <svg class="icon-cross">
                            <use xlinkHref="#svg-cross"></use>
                        </svg>
                        </div>
                        <label for="category-wp">WP Templates</label>
                    </div>
            
                    <p class="checkbox-line-text">209</p>
                    </div>
            
                    <div class="checkbox-line">
                    <div class="checkbox-wrap">
                        <input type="checkbox" id="category-illustrations" name="category_illustrations"/>
                        <div class="checkbox-box">
                        <svg class="icon-cross">
                            <use xlinkHref="#svg-cross"></use>
                        </svg>
                        </div>
                        <label for="category-illustrations">Illustrations</label>
                    </div>
            
                    <p class="checkbox-line-text">80</p>
                    </div>
            
                    <div class="checkbox-line">
                    <div class="checkbox-wrap">
                        <input type="checkbox" id="category-logos-and-badges" name="category_logos-and-badges" checked/>
                        <div class="checkbox-box">
                        <svg class="icon-cross">
                            <use xlinkHref="#svg-cross"></use>
                        </svg>
                        </div>
                        <label for="category-logos-and-badges">Logos and Badges</label>
                    </div>
            
                    <p class="checkbox-line-text">21</p>
                    </div>
            
                    <div class="checkbox-line">
                    <div class="checkbox-wrap">
                        <input type="checkbox" id="category-stream-packs" name="category_stream-packs"/>
                        <div class="checkbox-box">
                        <svg class="icon-cross">
                            <use xlinkHref="#svg-cross"></use>
                        </svg>
                        </div>
                        <label for="category-stream-packs">Stream Packs</label>
                    </div>
            
                    <p class="checkbox-line-text">197</p>
                    </div>
                </div>
            
                <p class="sidebar-box-title">Files Included</p>
            
                <div class="sidebar-box-items">
                    <div class="checkbox-line">
                    <div class="checkbox-wrap">
                        <input type="checkbox" id="category-photoshop" name="category_photoshop"/>
                        <div class="checkbox-box">
                        <svg class="icon-cross">
                            <use xlinkHref="#svg-cross"></use>
                        </svg>
                        </div>
                        <label for="category-photoshop">Photoshop PSD</label>
                    </div>
            
                    <p class="checkbox-line-text">785</p>
                    </div>
            
                    <div class="checkbox-line">
                    <div class="checkbox-wrap">
                        <input type="checkbox" id="category-illustrator" name="category_illustrator"/>
                        <div class="checkbox-box">
                        <svg class="icon-cross">
                            <use xlinkHref="#svg-cross"></use>
                        </svg>
                        </div>
                        <label for="category-illustrator">Illustrator AI</label>
                    </div>
            
                    <p class="checkbox-line-text">398</p>
                    </div>
            
                    <div class="checkbox-line">
                    <div class="checkbox-wrap">
                        <input type="checkbox" id="category-sketch" name="category_sketch"/>
                        <div class="checkbox-box">
                        <svg class="icon-cross">
                            <use xlinkHref="#svg-cross"></use>
                        </svg>
                        </div>
                        <label for="category-sketch">Sketch SKETCH</label>
                    </div>
            
                    <p class="checkbox-line-text">22</p>
                    </div>
            
                    <div class="checkbox-line">
                    <div class="checkbox-wrap">
                        <input type="checkbox" id="category-html-css" name="category_html-css"/>
                        <div class="checkbox-box">
                        <svg class="icon-cross">
                            <use xlinkHref="#svg-cross"></use>
                        </svg>
                        </div>
                        <label for="category-html-css">HTML &amp; CSS</label>
                    </div>
            
                    <p class="checkbox-line-text">566</p>
                    </div>
            
                    <div class="checkbox-line">
                    <div class="checkbox-wrap">
                        <input type="checkbox" id="category-wordpress" name="wordpress"/>
                        <div class="checkbox-box">
                        <svg class="icon-cross">
                            <use xlinkHref="#svg-cross"></use>
                        </svg>
                        </div>
                        <label for="category-wordpress">WordPress</label>
                    </div>
            
                    <p class="checkbox-line-text">209</p>
                    </div>
                </div>
            
                <p class="sidebar-box-title">Price Range</p>
            
                <div class="sidebar-box-items small-space">
                    <div class="form-item split">
                    <div class="form-input small active always-active currency-decorated">
                        <label for="price-from">From</label>
                        <input type="text" id="price-from" name="price_from"/>
                    </div>
            
                    <div class="form-input small active always-active currency-decorated">
                        <label for="price-to">To</label>
                        <input type="text" id="price-to" name="price_to"/>
                    </div>
                    </div>
                </div>
            
                <p class="button small primary">Apply Price Filter!</p>
            
                <p class="sidebar-box-title">Reviews</p>
            
                <div class="sidebar-box-items">
                    <div class="checkbox-line">
                    <div class="checkbox-wrap">
                        <input type="radio" id="reviews-all" name="reviews-rating" value="reviews-all"/>
                        <div class="checkbox-box round"></div>
                        <label for="reviews-all">All Reviews</label>
                    </div>
            
                    <p class="checkbox-line-text">1207</p>
                    </div>
            
                    <div class="checkbox-line">
                    <div class="checkbox-wrap checkbox-rating">
                        <input type="radio" id="reviews-4-up" name="reviews-rating" value="reviews-4-up" checked/>
                        <div class="checkbox-box round"></div>
            
                        <div class="rating-list">
                        <div class="rating filled">
                            <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                            </svg>
                        </div>
                
                        <div class="rating filled">
                            <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                            </svg>
                        </div>
                
                        <div class="rating filled">
                            <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                            </svg>
                        </div>
                
                        <div class="rating filled">
                            <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                            </svg>
                        </div>
                
                        <div class="rating">
                            <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                            </svg>
                        </div>
                        </div>
            
                        <label for="reviews-4-up">4 +</label>
                    </div>
            
                    <p class="checkbox-line-text">964</p>
                    </div>
            
                    <div class="checkbox-line">
                    <div class="checkbox-wrap checkbox-rating">
                        <input type="radio" id="reviews-3-up" name="reviews-rating" value="reviews-3-up"/>
                        <div class="checkbox-box round"></div>
            
                        <div class="rating-list">
                        <div class="rating filled">
                            <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                            </svg>
                        </div>
                
                        <div class="rating filled">
                            <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                            </svg>
                        </div>
                
                        <div class="rating filled">
                            <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                            </svg>
                        </div>
                
                        <div class="rating">
                            <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                            </svg>
                        </div>
                
                        <div class="rating">
                            <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                            </svg>
                        </div>
                        </div>
            
                        <label for="reviews-3-up">3 +</label>
                    </div>
            
                    <p class="checkbox-line-text">214</p>
                    </div>
            
                    <div class="checkbox-line">
                    <div class="checkbox-wrap checkbox-rating">
                        <input type="radio" id="reviews-2-up" name="reviews-rating" value="reviews-2-up"/>
                        <div class="checkbox-box round"></div>
            
                        <div class="rating-list">
                        <div class="rating filled">
                            <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                            </svg>
                        </div>
                
                        <div class="rating filled">
                            <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                            </svg>
                        </div>
                
                        <div class="rating">
                            <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                            </svg>
                        </div>
                
                        <div class="rating">
                            <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                            </svg>
                        </div>
                
                        <div class="rating">
                            <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                            </svg>
                        </div>
                        </div>
            
                        <label for="reviews-2-up">2 +</label>
                    </div>
            
                    <p class="checkbox-line-text">102</p>
                    </div>
            
                    <div class="checkbox-line">
                    <div class="checkbox-wrap checkbox-rating">
                        <input type="radio" id="reviews-1-up" name="reviews-rating" value="reviews-1-up"/>
                        <div class="checkbox-box round"></div>
            
                        <div class="rating-list">
                        <div class="rating filled">
                            <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                            </svg>
                        </div>
                
                        <div class="rating">
                            <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                            </svg>
                        </div>
                
                        <div class="rating">
                            <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                            </svg>
                        </div>
                
                        <div class="rating">
                            <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                            </svg>
                        </div>
                
                        <div class="rating">
                            <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                            </svg>
                        </div>
                        </div>
            
                        <label for="reviews-1-up">1 +</label>
                    </div>
            
                    <p class="checkbox-line-text">76</p>
                    </div>
                </div>
                </div>
            </div>

            <div class="marketplace-content">
                <div class="grid grid-3-3-3 centered">
                <div class="product-preview">
                    <a href="marketplace-product.html">
                    <figure class="product-preview-image liquid">
                        <img src="img/marketplace/items/01.jpg" alt="item-01"/>
                    </figure>
                    </a>
                
                    <div class="product-preview-info">
                    <p class="text-sticker"><span class="highlighted">$</span> 12.00</p>
                
                    <p class="product-preview-title"><a href="marketplace-product.html">Twitch Stream UI Pack</a></p>
                
                    <p class="product-preview-category digital"><a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-category')}}>Stream Packs</a></p>
                
                    <p class="product-preview-text">Awesome hexagon themed stream pack, you can change all colors and...</p>
                    </div>
                
                    <div class="product-preview-meta">
                    <div class="product-preview-author">
                        <a class="product-preview-author-image user-avatar micro no-border" href="profile-timeline.html">
                        <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/01.jpg"></div>
                        </div>
                        </a>
                
                        <p class="product-preview-author-title">Posted By</p>
                
                        <p class="product-preview-author-text"><a href="profile-timeline.html">Marina Valentine</a></p>
                    </div>
                
                    <div class="rating-list">
                        <div class="rating filled">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div class="rating filled">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div class="rating filled">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div class="rating filled">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div class="rating">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="product-preview">
                    <a href="marketplace-product.html">
                    <figure class="product-preview-image liquid">
                        <img src="img/marketplace/items/03.jpg" alt="item-03"/>
                    </figure>
                    </a>
                
                    <div class="product-preview-info">
                    <p class="text-sticker"><span class="highlighted">$</span> 40.00</p>
                
                    <p class="product-preview-title"><a href="marketplace-product.html">Flaming Skull Team Logo</a></p>
                
                    <p class="product-preview-category digital"><a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-category')}}>Logos &amp; Badges</a></p>
                
                    <p class="product-preview-text">Get this incredible horned skull logo! It's really easy to change colors with the...</p>
                    </div>
                
                    <div class="product-preview-meta">
                    <div class="product-preview-author">
                        <a class="product-preview-author-image user-avatar micro no-border" href="profile-timeline.html">
                        <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/01.jpg"></div>
                        </div>
                        </a>
                
                        <p class="product-preview-author-title">Posted By</p>
                
                        <p class="product-preview-author-text"><a href="profile-timeline.html">Marina Valentine</a></p>
                    </div>
                
                    <div class="rating-list">
                        <div class="rating filled">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div class="rating filled">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div class="rating filled">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div class="rating filled">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div class="rating">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="product-preview">
                    <a href="marketplace-product.html">
                    <figure class="product-preview-image liquid">
                        <img src="img/marketplace/items/13.jpg" alt="item-13"/>
                    </figure>
                    </a>
                
                    <div class="product-preview-info">
                    <p class="text-sticker"><span class="highlighted">$</span> 24.00</p>
                
                    <p class="product-preview-title"><a href="marketplace-product.html">American Football Team Page</a></p>
                
                    <p class="product-preview-category digital"><a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-category')}}>HTML Templates</a></p>
                
                    <p class="product-preview-text">Perfect template for American Football teams, with all you need, like results...</p>
                    </div>
                
                    <div class="product-preview-meta">
                    <div class="product-preview-author">
                        <a class="product-preview-author-image user-avatar micro no-border" href="profile-timeline.html">
                        <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/01.jpg"></div>
                        </div>
                        </a>
                
                        <p class="product-preview-author-title">Posted By</p>
                
                        <p class="product-preview-author-text"><a href="profile-timeline.html">Marina Valentine</a></p>
                    </div>
                
                    <div class="rating-list">
                        <div class="rating filled">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div class="rating filled">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div class="rating filled">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div class="rating filled">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div class="rating">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="product-preview">
                    <a href="marketplace-product.html">
                    <figure class="product-preview-image liquid">
                        <img src="img/marketplace/items/05.jpg" alt="item-05"/>
                    </figure>
                    </a>
                
                    <div class="product-preview-info">
                    <p class="text-sticker"><span class="highlighted">$</span> 24.00</p>
                
                    <p class="product-preview-title"><a href="marketplace-product.html">Emerald Dragon Digital Marketpl...</a></p>
                
                    <p class="product-preview-category digital"><a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-category')}}>HTML Templates</a></p>
                
                    <p class="product-preview-text">Digital marketplace HTML template with all you need to build your own web...</p>
                    </div>
                
                    <div class="product-preview-meta">
                    <div class="product-preview-author">
                        <a class="product-preview-author-image user-avatar micro no-border" href="profile-timeline.html">
                        <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/01.jpg"></div>
                        </div>
                        </a>
                
                        <p class="product-preview-author-title">Posted By</p>
                
                        <p class="product-preview-author-text"><a href="profile-timeline.html">Marina Valentine</a></p>
                    </div>
                
                    <div class="rating-list">
                        <div class="rating filled">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div class="rating filled">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div class="rating filled">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div class="rating filled">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div class="rating">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="product-preview">
                    <a href="marketplace-product.html">
                    <figure class="product-preview-image liquid">
                        <img src="img/marketplace/items/09.jpg" alt="item-09"/>
                    </figure>
                    </a>
                
                    <div class="product-preview-info">
                    <p class="text-sticker"><span class="highlighted">$</span> 5.00</p>
                
                    <p class="product-preview-title"><a href="marketplace-product.html">People Illustrations Pack 01</a></p>
                
                    <p class="product-preview-category digital"><a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-category')}}>Illustrations</a></p>
                
                    <p class="product-preview-text">Pack that includes 6 people illustrations made with PS vectors. Photoshop files...</p>
                    </div>
                
                    <div class="product-preview-meta">
                    <div class="product-preview-author">
                        <a class="product-preview-author-image user-avatar micro no-border" href="profile-timeline.html">
                        <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/02.jpg"></div>
                        </div>
                        </a>
                
                        <p class="product-preview-author-title">Posted By</p>
                
                        <p class="product-preview-author-text"><a href="profile-timeline.html">Destroy Dex</a></p>
                    </div>
                
                    <div class="rating-list">
                        <div class="rating filled">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div class="rating filled">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div class="rating filled">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div class="rating filled">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div class="rating">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="product-preview">
                    <a href="marketplace-product.html">
                    <figure class="product-preview-image liquid">
                        <img src="img/marketplace/items/08.jpg" alt="item-08"/>
                    </figure>
                    </a>
                
                    <div class="product-preview-info">
                    <p class="text-sticker"><span class="highlighted">$</span> 5.00</p>
                
                    <p class="product-preview-title"><a href="marketplace-product.html">People Illustrations Pack 02</a></p>
                
                    <p class="product-preview-category digital"><a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-category')}}>Illustrations</a></p>
                
                    <p class="product-preview-text">Pack that includes 6 people illustrations made with PS vectors. Photoshop files...</p>
                    </div>
                
                    <div class="product-preview-meta">
                    <div class="product-preview-author">
                        <a class="product-preview-author-image user-avatar micro no-border" href="profile-timeline.html">
                        <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/02.jpg"></div>
                        </div>
                        </a>
                
                        <p class="product-preview-author-title">Posted By</p>
                
                        <p class="product-preview-author-text"><a href="profile-timeline.html">Destroy Dex</a></p>
                    </div>
                
                    <div class="rating-list">
                        <div class="rating filled">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div class="rating filled">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div class="rating filled">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div class="rating filled">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div class="rating">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="product-preview">
                    <a href="marketplace-product.html">
                    <figure class="product-preview-image liquid">
                        <img src="img/marketplace/items/10.jpg" alt="item-10"/>
                    </figure>
                    </a>
                
                    <div class="product-preview-info">
                    <p class="text-sticker"><span class="highlighted">$</span> 26.00</p>
                
                    <p class="product-preview-title"><a href="marketplace-product.html">Pixel Diamond Gaming Magazine</a></p>
                
                    <p class="product-preview-category digital"><a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-category')}}>HTML Templates</a></p>
                
                    <p class="product-preview-text">Awesome HTML template for eSports and gaming! Also includes a forum...</p>
                    </div>
                
                    <div class="product-preview-meta">
                    <div class="product-preview-author">
                        <a class="product-preview-author-image user-avatar micro no-border" href="profile-timeline.html">
                        <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/01.jpg"></div>
                        </div>
                        </a>
                
                        <p class="product-preview-author-title">Posted By</p>
                
                        <p class="product-preview-author-text"><a href="profile-timeline.html">Marina Valentine</a></p>
                    </div>
                
                    <div class="rating-list">
                        <div class="rating filled">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div class="rating filled">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div class="rating filled">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div class="rating filled">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div class="rating">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="product-preview">
                    <a href="marketplace-product.html">
                    <figure class="product-preview-image liquid">
                        <img src="img/marketplace/items/11.jpg" alt="item-11"/>
                    </figure>
                    </a>
                
                    <div class="product-preview-info">
                    <p class="text-sticker"><span class="highlighted">$</span> 6.00</p>
                
                    <p class="product-preview-title"><a href="marketplace-product.html">Gaming Coin Badges Pack</a></p>
                
                    <p class="product-preview-category digital"><a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-category')}}>Logos &amp; Badges</a></p>
                
                    <p class="product-preview-text">Very detailed gaming coin illustration badges, perfect for forums and...</p>
                    </div>
                
                    <div class="product-preview-meta">
                    <div class="product-preview-author">
                        <a class="product-preview-author-image user-avatar micro no-border" href="profile-timeline.html">
                        <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/03.jpg"></div>
                        </div>
                        </a>
                
                        <p class="product-preview-author-title">Posted By</p>
                
                        <p class="product-preview-author-text"><a href="profile-timeline.html">Nick Grissom</a></p>
                    </div>
                
                    <div class="rating-list">
                        <div class="rating filled">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div class="rating filled">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div class="rating filled">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div class="rating filled">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div class="rating filled">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="product-preview">
                    <a href="marketplace-product.html">
                    <figure class="product-preview-image liquid">
                        <img src="img/marketplace/items/14.jpg" alt="item-14"/>
                    </figure>
                    </a>
                
                    <div class="product-preview-info">
                    <p class="text-sticker"><span class="highlighted">$</span> 26.00</p>
                
                    <p class="product-preview-title"><a href="marketplace-product.html">Asgard- Social Media Builder for...</a></p>
                
                    <p class="product-preview-category digital"><a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-category')}}>WP Templates</a></p>
                
                    <p class="product-preview-text">Incredible fullscreen design, perfect for illustrators and artists who wanna sell...</p>
                    </div>
                
                    <div class="product-preview-meta">
                    <div class="product-preview-author">
                        <a class="product-preview-author-image user-avatar micro no-border" href="profile-timeline.html">
                        <div class="user-avatar-content">
                            <div class="hexagon-image-18-20" data-src="img/avatar/03.jpg"></div>
                        </div>
                        </a>
                
                        <p class="product-preview-author-title">Posted By</p>
                
                        <p class="product-preview-author-text"><a href="profile-timeline.html">Nick Grissom</a></p>
                    </div>
                
                    <div class="rating-list">
                        <div class="rating filled">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div class="rating filled">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div class="rating filled">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div class="rating filled">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div class="rating filled">
                        <svg class="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div class="section-pager-bar-wrap align-right">
                <div class="section-pager-bar">
                    <div class="section-pager">
                    <div class="section-pager-item active">
                        <p class="section-pager-item-text">01</p>
                    </div>
                
                    <div class="section-pager-item">
                        <p class="section-pager-item-text">02</p>
                    </div>
                
                    <div class="section-pager-item">
                        <p class="section-pager-item-text">03</p>
                    </div>
                
                    <div class="section-pager-item">
                        <p class="section-pager-item-text">04</p>
                    </div>
                
                    <div class="section-pager-item">
                        <p class="section-pager-item-text">05</p>
                    </div>
                
                    <div class="section-pager-item">
                        <p class="section-pager-item-text">06</p>
                    </div>
                    </div>
                
                    <div class="section-pager-controls">
                    <div class="slider-control left disabled">
                        <svg class="slider-control-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow"></use>
                        </svg>
                    </div>
                
                    <div class="slider-control right">
                        <svg class="slider-control-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow"></use>
                        </svg>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default MarketPlaceCategory