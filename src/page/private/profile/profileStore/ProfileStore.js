import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoading } from '../../../../redux/action/homeAction';

const ProfileStore = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate()

  return (
    <>
        <section class="section">
            <div class="section-header">
                <div class="section-header-info">
                <p class="section-pretitle">Browse Marina's</p>
        
                <h2 class="section-title">Item Store <span class="highlighted">5</span></h2>
                </div>
            </div>

            <div class="section-filters-bar centered v3">
                <div class="filter-tabs">
                <div class="filter-tab">
                    <p class="filter-tab-text">Best Sellers</p>
                </div>
            
                <div class="filter-tab active">
                    <p class="filter-tab-text">Recently Added</p>
                </div>
            
                <div class="filter-tab">
                    <p class="filter-tab-text">Best Rated</p>
                </div>
            
                <div class="filter-tab">
                    <p class="filter-tab-text">Lowest Price</p>
                </div>
            
                <div class="filter-tab">
                    <p class="filter-tab-text">Highest Price</p>
                </div>
                </div>
            
                <form class="form">
                <div class="form-select">
                    <label for="store-filter-category">Filter By</label>
                    <select id="store-filter-category" name="store_filter_category">
                    <option value="0">Best Sellers</option>
                    <option value="1">Recently Added</option>
                    <option value="2">Best Rated</option>
                    <option value="3">Lowest Price</option>
                    <option value="4">Highest Price</option>
                    </select>
                    <svg class="form-select-icon icon-small-arrow">
                    <use xlinkHref="#svg-small-arrow"></use>
                    </svg>
                </div>
                </form>
            </div>

            <div class="grid grid-3-3-3-3 centered">
                <div class="product-preview">
                <a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-product')}}>
                    <figure class="product-preview-image liquid">
                    <img src="img/marketplace/items/01.jpg" alt="item-01"/>
                    </figure>
                </a>
            
                <div class="product-preview-info">
                    <p class="text-sticker"><span class="highlighted">$</span> 12.00</p>
            
                    <p class="product-preview-title"><a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-product')}}>Twitch Stream UI Pack</a></p>
            
                    <p class="product-preview-category digital"><a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-category')}}>Stream Packs</a></p>
            
                    <p class="product-preview-text">Awesome hexagon themed stream pack, you can change all colors and...</p>
                </div>
            
                <div class="product-preview-meta">
                    <div class="product-preview-author">
                    <a class="product-preview-author-image user-avatar micro no-border" href="profile-timeline">
                        <div class="user-avatar-content">
                        <div class="hexagon-image-18-20" data-src="img/avatar/01.jpg"></div>
                        </div>
                    </a>
            
                    <p class="product-preview-author-title">Posted By</p>
            
                    <p class="product-preview-author-text"><a href="profile-timeline">Marina Valentine</a></p>
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
                <a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-product')}}>
                    <figure class="product-preview-image liquid">
                    <img src="img/marketplace/items/03.jpg" alt="item-03"/>
                    </figure>
                </a>
            
                <div class="product-preview-info">
                    <p class="text-sticker"><span class="highlighted">$</span> 40.00</p>
            
                    <p class="product-preview-title"><a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-product')}}>Flaming Skull Team Logo</a></p>
            
                    <p class="product-preview-category digital"><a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-category')}}>Logos &amp; Badges</a></p>
            
                    <p class="product-preview-text">Get this incredible horned skull logo! It's really easy to change colors with the...</p>
                </div>
            
                <div class="product-preview-meta">
                    <div class="product-preview-author">
                    <a class="product-preview-author-image user-avatar micro no-border" href="profile-timeline">
                        <div class="user-avatar-content">
                        <div class="hexagon-image-18-20" data-src="img/avatar/01.jpg"></div>
                        </div>
                    </a>
            
                    <p class="product-preview-author-title">Posted By</p>
            
                    <p class="product-preview-author-text"><a href="profile-timeline">Marina Valentine</a></p>
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
                <a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-product')}}>
                    <figure class="product-preview-image liquid">
                    <img src="img/marketplace/items/13.jpg" alt="item-13"/>
                    </figure>
                </a>
            
                <div class="product-preview-info">
                    <p class="text-sticker"><span class="highlighted">$</span> 24.00</p>
            
                    <p class="product-preview-title"><a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-product')}}>American Football Team Page</a></p>
            
                    <p class="product-preview-category digital"><a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-category')}}>HTML Templates</a></p>
            
                    <p class="product-preview-text">Perfect template for American Football teams, with all you need, like results...</p>
                </div>
            
                <div class="product-preview-meta">
                    <div class="product-preview-author">
                    <a class="product-preview-author-image user-avatar micro no-border" href="profile-timeline">
                        <div class="user-avatar-content">
                        <div class="hexagon-image-18-20" data-src="img/avatar/01.jpg"></div>
                        </div>
                    </a>
            
                    <p class="product-preview-author-title">Posted By</p>
            
                    <p class="product-preview-author-text"><a href="profile-timeline">Marina Valentine</a></p>
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
                <a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-product')}}>
                    <figure class="product-preview-image liquid">
                    <img src="img/marketplace/items/05.jpg" alt="item-05"/>
                    </figure>
                </a>
            
                <div class="product-preview-info">
                    <p class="text-sticker"><span class="highlighted">$</span> 24.00</p>
            
                    <p class="product-preview-title"><a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-product')}}>Emerald Dragon Digital Marketpl...</a></p>
            
                    <p class="product-preview-category digital"><a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-category')}}>HTML Templates</a></p>
            
                    <p class="product-preview-text">Digital marketplace HTML template with all you need to build your own...</p>
                </div>
            
                <div class="product-preview-meta">
                    <div class="product-preview-author">
                    <a class="product-preview-author-image user-avatar micro no-border" href="profile-timeline">
                        <div class="user-avatar-content">
                        <div class="hexagon-image-18-20" data-src="img/avatar/01.jpg"></div>
                        </div>
                    </a>
            
                    <p class="product-preview-author-title">Posted By</p>
            
                    <p class="product-preview-author-text"><a href="profile-timeline">Marina Valentine</a></p>
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
                <a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-product')}}>
                    <figure class="product-preview-image liquid">
                    <img src="img/marketplace/items/10.jpg" alt="item-10"/>
                    </figure>
                </a>
            
                <div class="product-preview-info">
                    <p class="text-sticker"><span class="highlighted">$</span> 26.00</p>
            
                    <p class="product-preview-title"><a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-product')}}>Pixel Diamond Gaming Magazine</a></p>
            
                    <p class="product-preview-category digital"><a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-category')}}>HTML Templates</a></p>
            
                    <p class="product-preview-text">Awesome HTML template for eSports and gaming! Also includes a forum...</p>
                </div>
            
                <div class="product-preview-meta">
                    <div class="product-preview-author">
                    <a class="product-preview-author-image user-avatar micro no-border" href="profile-timeline">
                        <div class="user-avatar-content">
                        <div class="hexagon-image-18-20" data-src="img/avatar/01.jpg"></div>
                        </div>
                    </a>
            
                    <p class="product-preview-author-title">Posted By</p>
            
                    <p class="product-preview-author-text"><a href="profile-timeline">Marina Valentine</a></p>
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
            </div>
        </section>
    </>
  )
}

export default ProfileStore