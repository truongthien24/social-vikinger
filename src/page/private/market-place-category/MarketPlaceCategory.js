import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoading } from '../../../redux/action/homeAction';

const MarketPlaceCategory = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
  return (

        <>
            <div className="section-banner">
            <img className="section-banner-icon" src="img/banner/marketplace-icon.png" alt="marketplace-icon"/>
        
            <p className="section-banner-title">Marketplace</p>
        
            <p className="section-banner-text">The best place for the community to buy and sell!</p>
            </div>

            <div className="section-header">
            <div className="section-header-info">
                <p className="section-pretitle">Browse Products</p>
        
                <h2 className="section-title">Digital Items</h2>
            </div>

            <div className="section-header-actions">
                <a className="section-header-subsection" onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace')}}>Marketplace</a>
        
                <p className="section-header-subsection">Digital Items</p>
            </div>
            </div>

            <div className="section-filters-bar v4">
            <div className="section-filters-bar-actions">
                <form className="form">
                <div className="form-item split">
                    <div className="form-input small">
                    <label for="items-search">Search Items</label>
                    <input type="text" id="items-search" name="items_search"/>
                    </div>
        
                    <button className="button primary">
                    <svg className="icon-magnifying-glass">
                        <use xlinkHref="#svg-magnifying-glass"></use>
                    </svg>
                    </button>
                </div>
                </form>
            </div>
        
            <div className="section-filters-bar-actions">
                <form className="form">
                <div className="form-item split medium">
                    <div className="form-select small">
                    <label for="items-filter-category">Filter By</label>
                    <select id="items-filter-category" name="items_filter_category">
                        <option value="0">Date Published</option>
                        <option value="1">Price</option>
                    </select>
                    <svg className="form-select-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow"></use>
                    </svg>
                    </div>
            
                    <div className="form-select small">
                    <label for="items-filter-order">Order By</label>
                    <select id="items-filter-order" name="items_filter_order">
                        <option value="0">Descending</option>
                        <option value="1">Ascending</option>
                    </select>
                    <svg className="form-select-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow"></use>
                    </svg>
                    </div>
                
                    <button className="button secondary">Apply Filters</button>
                </div>
                </form>
            </div>
            </div>

            <div className="grid grid-3-9 small-space">
            <div className="marketplace-sidebar">
                <div className="sidebar-box">
                <p className="sidebar-box-title">Categories</p>
            
                <div className="sidebar-box-items">
                    <div className="checkbox-line">
                    <div className="checkbox-wrap">
                        <input type="checkbox" id="category-all" name="category_all"/>
                        <div className="checkbox-box">
                        <svg className="icon-cross">
                            <use xlinkHref="#svg-cross"></use>
                        </svg>
                        </div>
                        <label for="category-all">All Categories</label>
                    </div>
            
                    <p className="checkbox-line-text">1207</p>
                    </div>
            
                    <div className="checkbox-line">
                    <div className="checkbox-wrap">
                        <input type="checkbox" id="category-psd" name="category_psd"/>
                        <div className="checkbox-box">
                        <svg className="icon-cross">
                            <use xlinkHref="#svg-cross"></use>
                        </svg>
                        </div>
                        <label for="category-psd">PSD Templates</label>
                    </div>
            
                    <p className="checkbox-line-text">134</p>
                    </div>
            
                    <div className="checkbox-line">
                    <div className="checkbox-wrap">
                        <input type="checkbox" id="category-html" name="category_html" checked/>
                        <div className="checkbox-box">
                        <svg className="icon-cross">
                            <use xlinkHref="#svg-cross"></use>
                        </svg>
                        </div>
                        <label for="category-html">HTML Templates</label>
                    </div>
            
                    <p className="checkbox-line-text">566</p>
                    </div>
            
                    <div className="checkbox-line">
                    <div className="checkbox-wrap">
                        <input type="checkbox" id="category-wp" name="category_wp"/>
                        <div className="checkbox-box">
                        <svg className="icon-cross">
                            <use xlinkHref="#svg-cross"></use>
                        </svg>
                        </div>
                        <label for="category-wp">WP Templates</label>
                    </div>
            
                    <p className="checkbox-line-text">209</p>
                    </div>
            
                    <div className="checkbox-line">
                    <div className="checkbox-wrap">
                        <input type="checkbox" id="category-illustrations" name="category_illustrations"/>
                        <div className="checkbox-box">
                        <svg className="icon-cross">
                            <use xlinkHref="#svg-cross"></use>
                        </svg>
                        </div>
                        <label for="category-illustrations">Illustrations</label>
                    </div>
            
                    <p className="checkbox-line-text">80</p>
                    </div>
            
                    <div className="checkbox-line">
                    <div className="checkbox-wrap">
                        <input type="checkbox" id="category-logos-and-badges" name="category_logos-and-badges" checked/>
                        <div className="checkbox-box">
                        <svg className="icon-cross">
                            <use xlinkHref="#svg-cross"></use>
                        </svg>
                        </div>
                        <label for="category-logos-and-badges">Logos and Badges</label>
                    </div>
            
                    <p className="checkbox-line-text">21</p>
                    </div>
            
                    <div className="checkbox-line">
                    <div className="checkbox-wrap">
                        <input type="checkbox" id="category-stream-packs" name="category_stream-packs"/>
                        <div className="checkbox-box">
                        <svg className="icon-cross">
                            <use xlinkHref="#svg-cross"></use>
                        </svg>
                        </div>
                        <label for="category-stream-packs">Stream Packs</label>
                    </div>
            
                    <p className="checkbox-line-text">197</p>
                    </div>
                </div>
            
                <p className="sidebar-box-title">Files Included</p>
            
                <div className="sidebar-box-items">
                    <div className="checkbox-line">
                    <div className="checkbox-wrap">
                        <input type="checkbox" id="category-photoshop" name="category_photoshop"/>
                        <div className="checkbox-box">
                        <svg className="icon-cross">
                            <use xlinkHref="#svg-cross"></use>
                        </svg>
                        </div>
                        <label for="category-photoshop">Photoshop PSD</label>
                    </div>
            
                    <p className="checkbox-line-text">785</p>
                    </div>
            
                    <div className="checkbox-line">
                    <div className="checkbox-wrap">
                        <input type="checkbox" id="category-illustrator" name="category_illustrator"/>
                        <div className="checkbox-box">
                        <svg className="icon-cross">
                            <use xlinkHref="#svg-cross"></use>
                        </svg>
                        </div>
                        <label for="category-illustrator">Illustrator AI</label>
                    </div>
            
                    <p className="checkbox-line-text">398</p>
                    </div>
            
                    <div className="checkbox-line">
                    <div className="checkbox-wrap">
                        <input type="checkbox" id="category-sketch" name="category_sketch"/>
                        <div className="checkbox-box">
                        <svg className="icon-cross">
                            <use xlinkHref="#svg-cross"></use>
                        </svg>
                        </div>
                        <label for="category-sketch">Sketch SKETCH</label>
                    </div>
            
                    <p className="checkbox-line-text">22</p>
                    </div>
            
                    <div className="checkbox-line">
                    <div className="checkbox-wrap">
                        <input type="checkbox" id="category-html-css" name="category_html-css"/>
                        <div className="checkbox-box">
                        <svg className="icon-cross">
                            <use xlinkHref="#svg-cross"></use>
                        </svg>
                        </div>
                        <label for="category-html-css">HTML &amp; CSS</label>
                    </div>
            
                    <p className="checkbox-line-text">566</p>
                    </div>
            
                    <div className="checkbox-line">
                    <div className="checkbox-wrap">
                        <input type="checkbox" id="category-wordpress" name="wordpress"/>
                        <div className="checkbox-box">
                        <svg className="icon-cross">
                            <use xlinkHref="#svg-cross"></use>
                        </svg>
                        </div>
                        <label for="category-wordpress">WordPress</label>
                    </div>
            
                    <p className="checkbox-line-text">209</p>
                    </div>
                </div>
            
                <p className="sidebar-box-title">Price Range</p>
            
                <div className="sidebar-box-items small-space">
                    <div className="form-item split">
                    <div className="form-input small active always-active currency-decorated">
                        <label for="price-from">From</label>
                        <input type="text" id="price-from" name="price_from"/>
                    </div>
            
                    <div className="form-input small active always-active currency-decorated">
                        <label for="price-to">To</label>
                        <input type="text" id="price-to" name="price_to"/>
                    </div>
                    </div>
                </div>
            
                <p className="button small primary">Apply Price Filter!</p>
            
                <p className="sidebar-box-title">Reviews</p>
            
                <div className="sidebar-box-items">
                    <div className="checkbox-line">
                    <div className="checkbox-wrap">
                        <input type="radio" id="reviews-all" name="reviews-rating" value="reviews-all"/>
                        <div className="checkbox-box round"></div>
                        <label for="reviews-all">All Reviews</label>
                    </div>
            
                    <p className="checkbox-line-text">1207</p>
                    </div>
            
                    <div className="checkbox-line">
                    <div className="checkbox-wrap checkbox-rating">
                        <input type="radio" id="reviews-4-up" name="reviews-rating" value="reviews-4-up" checked/>
                        <div className="checkbox-box round"></div>
            
                        <div className="rating-list">
                        <div className="rating filled">
                            <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                            </svg>
                        </div>
                
                        <div className="rating filled">
                            <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                            </svg>
                        </div>
                
                        <div className="rating filled">
                            <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                            </svg>
                        </div>
                
                        <div className="rating filled">
                            <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                            </svg>
                        </div>
                
                        <div className="rating">
                            <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                            </svg>
                        </div>
                        </div>
            
                        <label for="reviews-4-up">4 +</label>
                    </div>
            
                    <p className="checkbox-line-text">964</p>
                    </div>
            
                    <div className="checkbox-line">
                    <div className="checkbox-wrap checkbox-rating">
                        <input type="radio" id="reviews-3-up" name="reviews-rating" value="reviews-3-up"/>
                        <div className="checkbox-box round"></div>
            
                        <div className="rating-list">
                        <div className="rating filled">
                            <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                            </svg>
                        </div>
                
                        <div className="rating filled">
                            <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                            </svg>
                        </div>
                
                        <div className="rating filled">
                            <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                            </svg>
                        </div>
                
                        <div className="rating">
                            <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                            </svg>
                        </div>
                
                        <div className="rating">
                            <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                            </svg>
                        </div>
                        </div>
            
                        <label for="reviews-3-up">3 +</label>
                    </div>
            
                    <p className="checkbox-line-text">214</p>
                    </div>
            
                    <div className="checkbox-line">
                    <div className="checkbox-wrap checkbox-rating">
                        <input type="radio" id="reviews-2-up" name="reviews-rating" value="reviews-2-up"/>
                        <div className="checkbox-box round"></div>
            
                        <div className="rating-list">
                        <div className="rating filled">
                            <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                            </svg>
                        </div>
                
                        <div className="rating filled">
                            <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                            </svg>
                        </div>
                
                        <div className="rating">
                            <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                            </svg>
                        </div>
                
                        <div className="rating">
                            <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                            </svg>
                        </div>
                
                        <div className="rating">
                            <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                            </svg>
                        </div>
                        </div>
            
                        <label for="reviews-2-up">2 +</label>
                    </div>
            
                    <p className="checkbox-line-text">102</p>
                    </div>
            
                    <div className="checkbox-line">
                    <div className="checkbox-wrap checkbox-rating">
                        <input type="radio" id="reviews-1-up" name="reviews-rating" value="reviews-1-up"/>
                        <div className="checkbox-box round"></div>
            
                        <div className="rating-list">
                        <div className="rating filled">
                            <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                            </svg>
                        </div>
                
                        <div className="rating">
                            <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                            </svg>
                        </div>
                
                        <div className="rating">
                            <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                            </svg>
                        </div>
                
                        <div className="rating">
                            <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                            </svg>
                        </div>
                
                        <div className="rating">
                            <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                            </svg>
                        </div>
                        </div>
            
                        <label for="reviews-1-up">1 +</label>
                    </div>
            
                    <p className="checkbox-line-text">76</p>
                    </div>
                </div>
                </div>
            </div>

            <div className="marketplace-content">
                <div className="grid grid-3-3-3 centered">
                <div className="product-preview">
                    <a href="marketplace-product">
                    <figure className="product-preview-image liquid">
                        <img src="img/marketplace/items/01.jpg" alt="item-01"/>
                    </figure>
                    </a>
                
                    <div className="product-preview-info">
                    <p className="text-sticker"><span className="highlighted">$</span> 12.00</p>
                
                    <p className="product-preview-title"><a href="marketplace-product">Twitch Stream UI Pack</a></p>
                
                    <p className="product-preview-category digital"><a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-category')}}>Stream Packs</a></p>
                
                    <p className="product-preview-text">Awesome hexagon themed stream pack, you can change all colors and...</p>
                    </div>
                
                    <div className="product-preview-meta">
                    <div className="product-preview-author">
                        <a className="product-preview-author-image user-avatar micro no-border" href="profile-timeline">
                        <div className="user-avatar-content">
                            <div className="hexagon-image-18-20" data-src="img/avatar/01.jpg"></div>
                        </div>
                        </a>
                
                        <p className="product-preview-author-title">Posted By</p>
                
                        <p className="product-preview-author-text"><a href="profile-timeline">Marina Valentine</a></p>
                    </div>
                
                    <div className="rating-list">
                        <div className="rating filled">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div className="rating filled">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div className="rating filled">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div className="rating filled">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div className="rating">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="product-preview">
                    <a href="marketplace-product">
                    <figure className="product-preview-image liquid">
                        <img src="img/marketplace/items/03.jpg" alt="item-03"/>
                    </figure>
                    </a>
                
                    <div className="product-preview-info">
                    <p className="text-sticker"><span className="highlighted">$</span> 40.00</p>
                
                    <p className="product-preview-title"><a href="marketplace-product">Flaming Skull Team Logo</a></p>
                
                    <p className="product-preview-category digital"><a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-category')}}>Logos &amp; Badges</a></p>
                
                    <p className="product-preview-text">Get this incredible horned skull logo! It's really easy to change colors with the...</p>
                    </div>
                
                    <div className="product-preview-meta">
                    <div className="product-preview-author">
                        <a className="product-preview-author-image user-avatar micro no-border" href="profile-timeline">
                        <div className="user-avatar-content">
                            <div className="hexagon-image-18-20" data-src="img/avatar/01.jpg"></div>
                        </div>
                        </a>
                
                        <p className="product-preview-author-title">Posted By</p>
                
                        <p className="product-preview-author-text"><a href="profile-timeline">Marina Valentine</a></p>
                    </div>
                
                    <div className="rating-list">
                        <div className="rating filled">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div className="rating filled">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div className="rating filled">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div className="rating filled">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div className="rating">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="product-preview">
                    <a href="marketplace-product">
                    <figure className="product-preview-image liquid">
                        <img src="img/marketplace/items/13.jpg" alt="item-13"/>
                    </figure>
                    </a>
                
                    <div className="product-preview-info">
                    <p className="text-sticker"><span className="highlighted">$</span> 24.00</p>
                
                    <p className="product-preview-title"><a href="marketplace-product">American Football Team Page</a></p>
                
                    <p className="product-preview-category digital"><a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-category')}}>HTML Templates</a></p>
                
                    <p className="product-preview-text">Perfect template for American Football teams, with all you need, like results...</p>
                    </div>
                
                    <div className="product-preview-meta">
                    <div className="product-preview-author">
                        <a className="product-preview-author-image user-avatar micro no-border" href="profile-timeline">
                        <div className="user-avatar-content">
                            <div className="hexagon-image-18-20" data-src="img/avatar/01.jpg"></div>
                        </div>
                        </a>
                
                        <p className="product-preview-author-title">Posted By</p>
                
                        <p className="product-preview-author-text"><a href="profile-timeline">Marina Valentine</a></p>
                    </div>
                
                    <div className="rating-list">
                        <div className="rating filled">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div className="rating filled">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div className="rating filled">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div className="rating filled">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div className="rating">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="product-preview">
                    <a href="marketplace-product">
                    <figure className="product-preview-image liquid">
                        <img src="img/marketplace/items/05.jpg" alt="item-05"/>
                    </figure>
                    </a>
                
                    <div className="product-preview-info">
                    <p className="text-sticker"><span className="highlighted">$</span> 24.00</p>
                
                    <p className="product-preview-title"><a href="marketplace-product">Emerald Dragon Digital Marketpl...</a></p>
                
                    <p className="product-preview-category digital"><a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-category')}}>HTML Templates</a></p>
                
                    <p className="product-preview-text">Digital marketplace HTML template with all you need to build your own web...</p>
                    </div>
                
                    <div className="product-preview-meta">
                    <div className="product-preview-author">
                        <a className="product-preview-author-image user-avatar micro no-border" href="profile-timeline">
                        <div className="user-avatar-content">
                            <div className="hexagon-image-18-20" data-src="img/avatar/01.jpg"></div>
                        </div>
                        </a>
                
                        <p className="product-preview-author-title">Posted By</p>
                
                        <p className="product-preview-author-text"><a href="profile-timeline">Marina Valentine</a></p>
                    </div>
                
                    <div className="rating-list">
                        <div className="rating filled">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div className="rating filled">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div className="rating filled">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div className="rating filled">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div className="rating">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="product-preview">
                    <a href="marketplace-product">
                    <figure className="product-preview-image liquid">
                        <img src="img/marketplace/items/09.jpg" alt="item-09"/>
                    </figure>
                    </a>
                
                    <div className="product-preview-info">
                    <p className="text-sticker"><span className="highlighted">$</span> 5.00</p>
                
                    <p className="product-preview-title"><a href="marketplace-product">People Illustrations Pack 01</a></p>
                
                    <p className="product-preview-category digital"><a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-category')}}>Illustrations</a></p>
                
                    <p className="product-preview-text">Pack that includes 6 people illustrations made with PS vectors. Photoshop files...</p>
                    </div>
                
                    <div className="product-preview-meta">
                    <div className="product-preview-author">
                        <a className="product-preview-author-image user-avatar micro no-border" href="profile-timeline">
                        <div className="user-avatar-content">
                            <div className="hexagon-image-18-20" data-src="img/avatar/02.jpg"></div>
                        </div>
                        </a>
                
                        <p className="product-preview-author-title">Posted By</p>
                
                        <p className="product-preview-author-text"><a href="profile-timeline">Destroy Dex</a></p>
                    </div>
                
                    <div className="rating-list">
                        <div className="rating filled">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div className="rating filled">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div className="rating filled">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div className="rating filled">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div className="rating">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="product-preview">
                    <a href="marketplace-product">
                    <figure className="product-preview-image liquid">
                        <img src="img/marketplace/items/08.jpg" alt="item-08"/>
                    </figure>
                    </a>
                
                    <div className="product-preview-info">
                    <p className="text-sticker"><span className="highlighted">$</span> 5.00</p>
                
                    <p className="product-preview-title"><a href="marketplace-product">People Illustrations Pack 02</a></p>
                
                    <p className="product-preview-category digital"><a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-category')}}>Illustrations</a></p>
                
                    <p className="product-preview-text">Pack that includes 6 people illustrations made with PS vectors. Photoshop files...</p>
                    </div>
                
                    <div className="product-preview-meta">
                    <div className="product-preview-author">
                        <a className="product-preview-author-image user-avatar micro no-border" href="profile-timeline">
                        <div className="user-avatar-content">
                            <div className="hexagon-image-18-20" data-src="img/avatar/02.jpg"></div>
                        </div>
                        </a>
                
                        <p className="product-preview-author-title">Posted By</p>
                
                        <p className="product-preview-author-text"><a href="profile-timeline">Destroy Dex</a></p>
                    </div>
                
                    <div className="rating-list">
                        <div className="rating filled">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div className="rating filled">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div className="rating filled">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div className="rating filled">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div className="rating">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="product-preview">
                    <a href="marketplace-product">
                    <figure className="product-preview-image liquid">
                        <img src="img/marketplace/items/10.jpg" alt="item-10"/>
                    </figure>
                    </a>
                
                    <div className="product-preview-info">
                    <p className="text-sticker"><span className="highlighted">$</span> 26.00</p>
                
                    <p className="product-preview-title"><a href="marketplace-product">Pixel Diamond Gaming Magazine</a></p>
                
                    <p className="product-preview-category digital"><a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-category')}}>HTML Templates</a></p>
                
                    <p className="product-preview-text">Awesome HTML template for eSports and gaming! Also includes a forum...</p>
                    </div>
                
                    <div className="product-preview-meta">
                    <div className="product-preview-author">
                        <a className="product-preview-author-image user-avatar micro no-border" href="profile-timeline">
                        <div className="user-avatar-content">
                            <div className="hexagon-image-18-20" data-src="img/avatar/01.jpg"></div>
                        </div>
                        </a>
                
                        <p className="product-preview-author-title">Posted By</p>
                
                        <p className="product-preview-author-text"><a href="profile-timeline">Marina Valentine</a></p>
                    </div>
                
                    <div className="rating-list">
                        <div className="rating filled">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div className="rating filled">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div className="rating filled">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div className="rating filled">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div className="rating">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="product-preview">
                    <a href="marketplace-product">
                    <figure className="product-preview-image liquid">
                        <img src="img/marketplace/items/11.jpg" alt="item-11"/>
                    </figure>
                    </a>
                
                    <div className="product-preview-info">
                    <p className="text-sticker"><span className="highlighted">$</span> 6.00</p>
                
                    <p className="product-preview-title"><a href="marketplace-product">Gaming Coin Badges Pack</a></p>
                
                    <p className="product-preview-category digital"><a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-category')}}>Logos &amp; Badges</a></p>
                
                    <p className="product-preview-text">Very detailed gaming coin illustration badges, perfect for forums and...</p>
                    </div>
                
                    <div className="product-preview-meta">
                    <div className="product-preview-author">
                        <a className="product-preview-author-image user-avatar micro no-border" href="profile-timeline">
                        <div className="user-avatar-content">
                            <div className="hexagon-image-18-20" data-src="img/avatar/03.jpg"></div>
                        </div>
                        </a>
                
                        <p className="product-preview-author-title">Posted By</p>
                
                        <p className="product-preview-author-text"><a href="profile-timeline">Nick Grissom</a></p>
                    </div>
                
                    <div className="rating-list">
                        <div className="rating filled">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div className="rating filled">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div className="rating filled">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div className="rating filled">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div className="rating filled">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="product-preview">
                    <a href="marketplace-product">
                    <figure className="product-preview-image liquid">
                        <img src="img/marketplace/items/14.jpg" alt="item-14"/>
                    </figure>
                    </a>
                
                    <div className="product-preview-info">
                    <p className="text-sticker"><span className="highlighted">$</span> 26.00</p>
                
                    <p className="product-preview-title"><a href="marketplace-product">Asgard- Social Media Builder for...</a></p>
                
                    <p className="product-preview-category digital"><a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-category')}}>WP Templates</a></p>
                
                    <p className="product-preview-text">Incredible fullscreen design, perfect for illustrators and artists who wanna sell...</p>
                    </div>
                
                    <div className="product-preview-meta">
                    <div className="product-preview-author">
                        <a className="product-preview-author-image user-avatar micro no-border" href="profile-timeline">
                        <div className="user-avatar-content">
                            <div className="hexagon-image-18-20" data-src="img/avatar/03.jpg"></div>
                        </div>
                        </a>
                
                        <p className="product-preview-author-title">Posted By</p>
                
                        <p className="product-preview-author-text"><a href="profile-timeline">Nick Grissom</a></p>
                    </div>
                
                    <div className="rating-list">
                        <div className="rating filled">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div className="rating filled">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div className="rating filled">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div className="rating filled">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                
                        <div className="rating filled">
                        <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                        </svg>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div className="section-pager-bar-wrap align-right">
                <div className="section-pager-bar">
                    <div className="section-pager">
                    <div className="section-pager-item active">
                        <p className="section-pager-item-text">01</p>
                    </div>
                
                    <div className="section-pager-item">
                        <p className="section-pager-item-text">02</p>
                    </div>
                
                    <div className="section-pager-item">
                        <p className="section-pager-item-text">03</p>
                    </div>
                
                    <div className="section-pager-item">
                        <p className="section-pager-item-text">04</p>
                    </div>
                
                    <div className="section-pager-item">
                        <p className="section-pager-item-text">05</p>
                    </div>
                
                    <div className="section-pager-item">
                        <p className="section-pager-item-text">06</p>
                    </div>
                    </div>
                
                    <div className="section-pager-controls">
                    <div className="slider-control left disabled">
                        <svg className="slider-control-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow"></use>
                        </svg>
                    </div>
                
                    <div className="slider-control right">
                        <svg className="slider-control-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow"></use>
                        </svg>
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