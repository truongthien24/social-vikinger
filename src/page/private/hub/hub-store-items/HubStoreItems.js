import React, { useEffect } from 'react'

const HubStoreItems = () => {

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

                <h2 className="section-title">Manage Items</h2>
            </div>
            </div>

            <div className="grid grid-3-3-3 centered-on-mobile">
            <div className="create-entity-box v2">
                <div className="create-entity-box-cover"></div>
            
                <div className="create-entity-box-avatar primary">
                <svg className="create-entity-box-avatar-icon icon-item">
                    <use xlinkHref="#svg-item"></use>
                </svg>
                </div>
            
                <div className="create-entity-box-info">
                <p className="create-entity-box-title">Your Item Name Here</p>
            
                <p className="create-entity-box-category">Category</p>
            
                <p className="button primary full popup-manage-item-trigger">Create New Item!</p>
                </div>
            </div>

            <div className="product-preview fixed-height">
                <a href="marketplace-product">
                <figure className="product-preview-image liquid">
                    <img src="img/marketplace/items/01.jpg" alt="item-01"/>
                </figure>
                </a>
            
                <div className="product-preview-info">
                <p className="text-sticker"><span className="highlighted">$</span> 12.00</p>
            
                <p className="product-preview-title"><a href="marketplace-product">Twitch Stream UI Pack</a></p>
            
                <p className="product-preview-category digital"><a href="marketplace-category">Stream Packs</a></p>
            
                <p className="button white full popup-manage-item-trigger">Edit Item</p>
                </div>
            </div>

            <div className="product-preview fixed-height">
                <a href="marketplace-product">
                <figure className="product-preview-image liquid">
                    <img src="img/marketplace/items/03.jpg" alt="item-03"/>
                </figure>
                </a>
            
                <div className="product-preview-info">
                <p className="text-sticker"><span className="highlighted">$</span> 40.00</p>
            
                <p className="product-preview-title"><a href="marketplace-product">Flaming Skull Team Logo</a></p>
            
                <p className="product-preview-category digital"><a href="marketplace-category">Logos &amp; Badges</a></p>
            
                <p className="button white full popup-manage-item-trigger">Edit Item</p>
                </div>
            </div>

            <div className="product-preview fixed-height">
                <a href="marketplace-product">
                <figure className="product-preview-image liquid">
                    <img src="img/marketplace/items/13.jpg" alt="item-13"/>
                </figure>
                </a>
            
                <div className="product-preview-info">
                <p className="text-sticker"><span className="highlighted">$</span> 24.00</p>
            
                <p className="product-preview-title"><a href="marketplace-product">American Football Team Page</a></p>
            
                <p className="product-preview-category digital"><a href="marketplace-category">HTML Templates</a></p>
            
                <p className="button white full popup-manage-item-trigger">Edit Item</p>
                </div>
            </div>

            <div className="product-preview fixed-height">
                <a href="marketplace-product">
                <figure className="product-preview-image liquid">
                    <img src="img/marketplace/items/05.jpg" alt="item-05"/>
                </figure>
                </a>
            
                <div className="product-preview-info">
                <p className="text-sticker"><span className="highlighted">$</span> 24.00</p>
            
                <p className="product-preview-title"><a href="marketplace-product">Emerald Dragon Digital Marketpl...</a></p>
            
                <p className="product-preview-category digital"><a href="marketplace-category">HTML Templates</a></p>
            
                <p className="button white full popup-manage-item-trigger">Edit Item</p>
                </div>
            </div>

            <div className="product-preview fixed-height">
                <a href="marketplace-product">
                <figure className="product-preview-image liquid">
                    <img src="img/marketplace/items/10.jpg" alt="item-10"/>
                </figure>
                </a>
            
                <div className="product-preview-info">
                <p className="text-sticker"><span className="highlighted">$</span> 26.00</p>
            
                <p className="product-preview-title"><a href="marketplace-product">Pixel Diamond Gaming Magazine</a></p>
            
                <p className="product-preview-category digital"><a href="marketplace-category">HTML Templates</a></p>
            
                <p className="button white full popup-manage-item-trigger">Edit Item</p>
                </div>
            </div>

            <div className="product-preview fixed-height">
                <a href="marketplace-product">
                <figure className="product-preview-image liquid">
                    <img src="img/marketplace/items/14.jpg" alt="item-14"/>
                </figure>
                </a>
            
                <div className="product-preview-info">
                <p className="text-sticker"><span className="highlighted">$</span> 26.00</p>
            
                <p className="product-preview-title"><a href="marketplace-product">Asgard Social Media Builder for...</a></p>
            
                <p className="product-preview-category digital"><a href="marketplace-category">WP Templates</a></p>
            
                <p className="button white full popup-manage-item-trigger">Edit Item</p>
                </div>
            </div>

            <div className="product-preview fixed-height">
                <a href="marketplace-product">
                <figure className="product-preview-image liquid">
                    <img src="img/marketplace/items/17.jpg" alt="item-17"/>
                </figure>
                </a>
            
                <div className="product-preview-info">
                <p className="text-sticker"><span className="highlighted">$</span> 8.00</p>
            
                <p className="product-preview-title"><a href="marketplace-product">Login and Register Forms</a></p>
            
                <p className="product-preview-category digital"><a href="marketplace-category">HTML Templates</a></p>
            
                <p className="button white full popup-manage-item-trigger">Edit Item</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default HubStoreItems