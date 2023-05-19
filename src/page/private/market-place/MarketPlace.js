import React, { useEffect } from 'react'

const MarketPlace = () => {

    useEffect(()=> {
        let script = document.createElement("script");
        // let script11 = document.createElement("script");
        // let script16 = document.createElement("script");
        script.src = "/js/utils/app.js";
        // script16.src = "/js/content/content.js";
        // script11.src = "/js/global/global.hexagons.js";
        script.async = true;
        // script11.async = true;
        // script16.async = true;
        document.body.appendChild(script);
        // document.body.appendChild(script11);
        // document.body.appendChild(script16);
    }, [])
  return (
    <>
            <div className="section-banner">
            <img className="section-banner-icon" src="img/banner/marketplace-icon.png" alt="marketplace-icon"/>
        
            <p className="section-banner-title">Marketplace</p>
        
            <p className="section-banner-text">The best place for the community to buy and sell!</p>
            </div>

            <div className="section-header">
            <div className="section-header-info">
                <p className="section-pretitle">Search what you want!</p>
        
                <h2 className="section-title">Market Categories</h2>
            </div>
            </div>

            <div className="grid grid-3-3-3-3 centered">
            <a className="product-category-box category-all" href="marketplace-category">
                <p className="product-category-box-title">Browse All</p>
            
                <p className="product-category-box-text">Check out all items</p>
            
                <p className="product-category-box-tag">1360 items</p>
            </a>
            
            <a className="product-category-box category-featured" href="marketplace-category">
                <p className="product-category-box-title">Featured</p>
            
                <p className="product-category-box-text">Handpicked by us</p>
            
                <p className="product-category-box-tag">254 items</p>
            </a>
            
            <a className="product-category-box category-digital" href="marketplace-category">
                <p className="product-category-box-title">Digital</p>
            
                <p className="product-category-box-text">Logos, banners...</p>
            
                <p className="product-category-box-tag">1207 items</p>
            </a>
            
            <a className="product-category-box category-physical" href="marketplace-category">
                <p className="product-category-box-title">Physical</p>
            
                <p className="product-category-box-text">Prints, joysticks...</p>
            
                <p className="product-category-box-tag">153 items</p>
            </a>
            </div>

            <div className="section-header">
            <div className="section-header-info">
                <p className="section-pretitle">See what's new!</p>
        
                <h2 className="section-title">Latest Items</h2>
            </div>
        
            <div className="section-header-actions">
                <a className="section-header-action" href="marketplace-category">Browse All Latest</a>
            </div>
            </div>

            <div className="grid grid-3-3-3-3 centered">
            <div className="product-preview">
                <a href="marketplace-product">
                <figure className="product-preview-image liquid">
                    <img src="img/marketplace/items/01.jpg" alt="item-01"/>
                </figure>
                </a>
            
                <div className="product-preview-info">
                <p className="text-sticker"><span className="highlighted">$</span> 12.00</p>
            
                <p className="product-preview-title"><a href="marketplace-product">Twitch Stream UI Pack</a></p>
            
                <p className="product-preview-category digital"><a href="marketplace-category">Stream Packs</a></p>
            
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
                    <img src="img/marketplace/items/02.jpg" alt="item-02"/>
                </figure>
                </a>
            
                <div className="product-preview-info">
                <p className="text-sticker"><span className="highlighted">$</span> 34.00</p>
            
                <p className="product-preview-title"><a href="marketplace-product">Jaxxy Witch Black Frame</a></p>
            
                <p className="product-preview-category physical"><a href="marketplace-category">Art Prints</a></p>
            
                <p className="product-preview-text">30x60 inches fine art print, with glossy paper and a polymer black frame...</p>
                </div>
            
                <div className="product-preview-meta">
                <div className="product-preview-author">
                    <a className="product-preview-author-image user-avatar micro no-border" href="profile-timeline">
                    <div className="user-avatar-content">
                        <div className="hexagon-image-18-20" data-src="img/avatar/05.jpg"></div>
                    </div>
                    </a>
            
                    <p className="product-preview-author-title">Posted By</p>
            
                    <p className="product-preview-author-text"><a href="profile-timeline">Neko Bebop</a></p>
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
                    <img src="img/marketplace/items/03.jpg" alt="item-03"/>
                </figure>
                </a>
            
                <div className="product-preview-info">
                <p className="text-sticker"><span className="highlighted">$</span> 40.00</p>
            
                <p className="product-preview-title"><a href="marketplace-product">Flaming Skull Team Logo</a></p>
            
                <p className="product-preview-category digital"><a href="marketplace-category">Logos &amp; Badges</a></p>
            
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
                    <img src="img/marketplace/items/04.jpg" alt="item-04"/>
                </figure>
                </a>
            
                <div className="product-preview-info">
                <p className="text-sticker"><span className="highlighted">$</span> 29.00</p>
            
                <p className="product-preview-title"><a href="marketplace-product">Carbon Black Joystick</a></p>
            
                <p className="product-preview-category physical"><a href="marketplace-category">Electronics</a></p>
            
                <p className="product-preview-text">Slightly used X-Rock Carbon model joystick. Works perfectly, like the first...</p>
                </div>
            
                <div className="product-preview-meta">
                <div className="product-preview-author">
                    <a className="product-preview-author-image user-avatar micro no-border" href="profile-timeline">
                    <div className="user-avatar-content">
                        <div className="hexagon-image-18-20" data-src="img/avatar/04.jpg"></div>
                    </div>
                    </a>
            
                    <p className="product-preview-author-title">Posted By</p>
            
                    <p className="product-preview-author-text"><a href="profile-timeline">Bearded Wonder</a></p>
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
            
                <p className="product-preview-category digital"><a href="marketplace-category">HTML Templates</a></p>
            
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
                    <img src="img/marketplace/items/06.jpg" alt="item-06"/>
                </figure>
                </a>
            
                <div className="product-preview-info">
                <p className="text-sticker"><span className="highlighted">$</span> 26.00</p>
            
                <p className="product-preview-title"><a href="marketplace-product">Crimson Red Joystick</a></p>
            
                <p className="product-preview-category physical"><a href="marketplace-category">Electronics</a></p>
            
                <p className="product-preview-text">Almost new joystick! I bought it but my console gave up so I haven't used it...</p>
                </div>
            
                <div className="product-preview-meta">
                <div className="product-preview-author">
                    <a className="product-preview-author-image user-avatar micro no-border" href="profile-timeline">
                    <div className="user-avatar-content">
                        <div className="hexagon-image-18-20" data-src="img/avatar/04.jpg"></div>
                    </div>
                    </a>
            
                    <p className="product-preview-author-title">Posted By</p>
            
                    <p className="product-preview-author-text"><a href="profile-timeline">Bearded Wonder</a></p>
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
                    <img src="img/marketplace/items/07.jpg" alt="item-07"/>
                </figure>
                </a>
            
                <div className="product-preview-info">
                <p className="text-sticker"><span className="highlighted">$</span> 40.00</p>
            
                <p className="product-preview-title"><a href="marketplace-product">Mercenaries White Frame</a></p>
            
                <p className="product-preview-category physical"><a href="marketplace-category">Art Prints</a></p>
            
                <p className="product-preview-text">30x30 inches fine art print, with glossy paper and a whitewood white frame...</p>
                </div>
            
                <div className="product-preview-meta">
                <div className="product-preview-author">
                    <a className="product-preview-author-image user-avatar micro no-border" href="profile-timeline">
                    <div className="user-avatar-content">
                        <div className="hexagon-image-18-20" data-src="img/avatar/05.jpg"></div>
                    </div>
                    </a>
            
                    <p className="product-preview-author-title">Posted By</p>
            
                    <p className="product-preview-author-text"><a href="profile-timeline">Neko Bebop</a></p>
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
            
                <p className="product-preview-category digital"><a href="marketplace-category">Illustrations</a></p>
            
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
                    <img src="img/marketplace/items/09.jpg" alt="item-09"/>
                </figure>
                </a>
            
                <div className="product-preview-info">
                <p className="text-sticker"><span className="highlighted">$</span> 5.00</p>
            
                <p className="product-preview-title"><a href="marketplace-product">People Illustrations Pack 01</a></p>
            
                <p className="product-preview-category digital"><a href="marketplace-category">Illustrations</a></p>
            
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
            
                <p className="product-preview-category digital"><a href="marketplace-category">HTML Templates</a></p>
            
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
            
                <p className="product-preview-category digital"><a href="marketplace-category">Logos &amp; Badges</a></p>
            
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
                    <img src="img/marketplace/items/12.jpg" alt="item-12"/>
                </figure>
                </a>
            
                <div className="product-preview-info">
                <p className="text-sticker"><span className="highlighted">$</span> 16.00</p>
            
                <p className="product-preview-title"><a href="marketplace-product">Crazy Bunny Coffee Mug</a></p>
            
                <p className="product-preview-category physical"><a href="marketplace-category">Crafts</a></p>
            
                <p className="product-preview-text">Incredible white coffee mug with the Crazy Bunny Illustration! Sizes are...</p>
                </div>
            
                <div className="product-preview-meta">
                <div className="product-preview-author">
                    <a className="product-preview-author-image user-avatar micro no-border" href="profile-timeline">
                    <div className="user-avatar-content">
                        <div className="hexagon-image-18-20" data-src="img/avatar/04.jpg"></div>
                    </div>
                    </a>
            
                    <p className="product-preview-author-title">Posted By</p>
            
                    <p className="product-preview-author-text"><a href="profile-timeline">Bearded Wonder</a></p>
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
            </div>
    </>
  )
}

export default MarketPlace