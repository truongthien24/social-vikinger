import React from 'react'

const HubStoreStatement = () => {
  return (
    <div class="account-hub-content">
        <div class="section-header">
        <div class="section-header-info">
            <p class="section-pretitle">My Store</p>

            <h2 class="section-title">Sales Statement</h2>
        </div>
        </div>

        <div class="section-filters-bar v6 v6-2">
        <div class="section-filters-bar-actions">
            <form class="form">
            <div class="form-item split">
                <div class="form-input-decorated">
                <div class="form-input small active">
                    <label for="statement-from-date">From Date</label>
                    <input type="text" id="statement-from-date" name="statement_from_date" value="02/22/2019"/>
                </div>

                <svg class="form-input-icon icon-events">
                    <use xlinkHref="#svg-events"></use>
                </svg>
                </div>

                <div class="form-input-decorated">
                <div class="form-input small active">
                    <label for="statement-to-date">To Date</label>
                    <input type="text" id="statement-to-date" name="statement_to_date" value="11/14/2019"/>
                </div>

                <svg class="form-input-icon icon-events">
                    <use xlinkHref="#svg-events"></use>
                </svg>
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
            <p class="button secondary">Download Statement</p>
        </div>
        </div>

        <div class="table-wrap" data-simplebar>
        <div class="table table-sales">
            <div class="table-header">
            <div class="table-header-column">
                <p class="table-header-title">Date</p>
            </div>
        
            <div class="table-header-column padded-left">
                <p class="table-header-title">Item</p>
            </div>
        
            <div class="table-header-column centered padded">
                <p class="table-header-title">Type</p>
            </div>
        
            <div class="table-header-column centered padded">
                <p class="table-header-title">Code</p>
            </div>
        
            <div class="table-header-column centered padded">
                <p class="table-header-title">Price</p>
            </div>
        
            <div class="table-header-column centered padded">
                <p class="table-header-title">Cut</p>
            </div>
        
            <div class="table-header-column centered padded">
                <p class="table-header-title">Earning</p>
            </div>
        
            <div class="table-header-column padded-left"></div>
            </div>
        
            <div class="table-body same-color-rows">
            <div class="table-row micro">
                <div class="table-column">
                <p class="table-text"><span class="light">Nov 15th, 2019</span></p>
                </div>
        
                <div class="table-column padded-left">
                <a class="table-link" href="marketplace-product.html"><span class="highlighted">Pixel Diamond Gaming Magazine</span></a>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-title">Sale</p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-text"><span class="light">VK1287</span></p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-title">$26</p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-text"><span class="light">50%</span></p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-title">$13</p>
                </div>
        
                <div class="table-column padded-left">
                <div class="percentage-diff-icon-wrap positive">
                    <svg class="percentage-diff-icon icon-plus-small">
                    <use xlinkHref="#svg-plus-small"></use>
                    </svg>
                </div>
                </div>
            </div>
        
            <div class="table-row micro">
                <div class="table-column">
                <p class="table-text"><span class="light">Nov 15th, 2019</span></p>
                </div>
        
                <div class="table-column padded-left">
                <a class="table-link" href="marketplace-product.html"><span class="highlighted">Twitch Stream UI Pack</span></a>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-title">Sale</p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-text"><span class="light">VK1364</span></p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-title">$12</p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-text"><span class="light">50%</span></p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-title">$6</p>
                </div>
        
                <div class="table-column padded-left">
                <div class="percentage-diff-icon-wrap positive">
                    <svg class="percentage-diff-icon icon-plus-small">
                    <use xlinkHref="#svg-plus-small"></use>
                    </svg>
                </div>
                </div>
            </div>

            <div class="table-row micro">
                <div class="table-column">
                <p class="table-text"><span class="light">Nov 14th, 2019</span></p>
                </div>
        
                <div class="table-column padded-left">
                <a class="table-link" href="marketplace-product.html"><span class="highlighted">Pixel Diamond Gaming Magazine</span></a>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-title">Sale</p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-text"><span class="light">VK7638</span></p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-title">$26</p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-text"><span class="light">50%</span></p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-title">$13</p>
                </div>
        
                <div class="table-column padded-left">
                <div class="percentage-diff-icon-wrap positive">
                    <svg class="percentage-diff-icon icon-plus-small">
                    <use xlinkHref="#svg-plus-small"></use>
                    </svg>
                </div>
                </div>
            </div>

            <div class="table-row micro">
                <div class="table-column">
                <p class="table-text"><span class="light">Nov 14th, 2019</span></p>
                </div>
        
                <div class="table-column padded-left">
                <a class="table-link" href="marketplace-product.html"><span class="highlighted">Twitch Stream UI Pack</span></a>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-title">Sale</p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-text"><span class="light">VK7285</span></p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-title">$12</p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-text"><span class="light">50%</span></p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-title">$6</p>
                </div>
        
                <div class="table-column padded-left">
                <div class="percentage-diff-icon-wrap positive">
                    <svg class="percentage-diff-icon icon-plus-small">
                    <use xlinkHref="#svg-plus-small"></use>
                    </svg>
                </div>
                </div>
            </div>

            <div class="table-row micro">
                <div class="table-column">
                <p class="table-text"><span class="light">Nov 14th, 2019</span></p>
                </div>
        
                <div class="table-column padded-left">
                <a class="table-link" href="marketplace-product.html"><span class="highlighted">Twitch Stream UI Pack</span></a>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-title">Sale</p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-text"><span class="light">VK9673</span></p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-title">$12</p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-text"><span class="light">50%</span></p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-title">$6</p>
                </div>
        
                <div class="table-column padded-left">
                <div class="percentage-diff-icon-wrap positive">
                    <svg class="percentage-diff-icon icon-plus-small">
                    <use xlinkHref="#svg-plus-small"></use>
                    </svg>
                </div>
                </div>
            </div>
        
            <div class="table-row micro">
                <div class="table-column">
                <p class="table-text"><span class="light">Nov 12th, 2019</span></p>
                </div>
        
                <div class="table-column padded-left">
                <a class="table-link" href="marketplace-product.html"><span class="highlighted">Gaming Coin Badges Pack</span></a>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-title">Purchase</p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-text"><span class="light">VK2589</span></p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-title">$6</p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-text"><span class="light">-</span></p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-title">-$6</p>
                </div>
        
                <div class="table-column padded-left">
                <div class="percentage-diff-icon-wrap negative">
                    <svg class="percentage-diff-icon icon-minus-small">
                    <use xlinkHref="#svg-minus-small"></use>
                    </svg>
                </div>
                </div>
            </div>

            <div class="table-row micro">
                <div class="table-column">
                <p class="table-text"><span class="light">Nov 9th, 2019</span></p>
                </div>
        
                <div class="table-column padded-left">
                <a class="table-link" href="marketplace-product.html"><span class="highlighted">People Illustrations Pack 01</span></a>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-title">Purchase</p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-text"><span class="light">VK3146</span></p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-title">$5</p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-text"><span class="light">-</span></p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-title">-$5</p>
                </div>
        
                <div class="table-column padded-left">
                <div class="percentage-diff-icon-wrap negative">
                    <svg class="percentage-diff-icon icon-minus-small">
                    <use xlinkHref="#svg-minus-small"></use>
                    </svg>
                </div>
                </div>
            </div>

            <div class="table-row micro">
                <div class="table-column">
                <p class="table-text"><span class="light">Nov 9th, 2019</span></p>
                </div>
        
                <div class="table-column padded-left">
                <a class="table-link" href="marketplace-product.html"><span class="highlighted">Pixel Diamond Gaming Magazine</span></a>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-title">Sale</p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-text"><span class="light">VK4577</span></p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-title">$26</p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-text"><span class="light">50%</span></p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-title">$13</p>
                </div>
        
                <div class="table-column padded-left">
                <div class="percentage-diff-icon-wrap positive">
                    <svg class="percentage-diff-icon icon-plus-small">
                    <use xlinkHref="#svg-plus-small"></use>
                    </svg>
                </div>
                </div>
            </div>

            <div class="table-row micro">
                <div class="table-column">
                <p class="table-text"><span class="light">Nov 9th, 2019</span></p>
                </div>
        
                <div class="table-column padded-left">
                <a class="table-link" href="marketplace-product.html"><span class="highlighted">Emerald Dragon Digital Marketplace</span></a>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-title">Sale</p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-text"><span class="light">VK6379</span></p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-title">$24</p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-text"><span class="light">50%</span></p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-title">$12</p>
                </div>
        
                <div class="table-column padded-left">
                <div class="percentage-diff-icon-wrap positive">
                    <svg class="percentage-diff-icon icon-plus-small">
                    <use xlinkHref="#svg-plus-small"></use>
                    </svg>
                </div>
                </div>
            </div>

            <div class="table-row micro">
                <div class="table-column">
                <p class="table-text"><span class="light">Nov 8th, 2019</span></p>
                </div>
        
                <div class="table-column padded-left">
                <a class="table-link" href="marketplace-product.html"><span class="highlighted">Pixel Diamond Gaming Magazine</span></a>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-title">Sale</p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-text"><span class="light">VK9932</span></p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-title">$26</p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-text"><span class="light">50%</span></p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-title">$13</p>
                </div>
        
                <div class="table-column padded-left">
                <div class="percentage-diff-icon-wrap positive">
                    <svg class="percentage-diff-icon icon-plus-small">
                    <use xlinkHref="#svg-plus-small"></use>
                    </svg>
                </div>
                </div>
            </div>

            <div class="table-row micro">
                <div class="table-column">
                <p class="table-text"><span class="light">Nov 5th, 2019</span></p>
                </div>
        
                <div class="table-column padded-left">
                <a class="table-link" href="marketplace-product.html"><span class="highlighted">Twitch Stream UI Pack</span></a>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-title">Sale</p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-text"><span class="light">VK1274</span></p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-title">$12</p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-text"><span class="light">50%</span></p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-title">$6</p>
                </div>
        
                <div class="table-column padded-left">
                <div class="percentage-diff-icon-wrap positive">
                    <svg class="percentage-diff-icon icon-plus-small">
                    <use xlinkHref="#svg-plus-small"></use>
                    </svg>
                </div>
                </div>
            </div>

            <div class="table-row micro">
                <div class="table-column">
                <p class="table-text"><span class="light">Nov 4th, 2019</span></p>
                </div>
        
                <div class="table-column padded-left">
                <a class="table-link" href="marketplace-product.html"><span class="highlighted">Emerald Dragon Digital Marketplace</span></a>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-title">Sale</p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-text"><span class="light">VK3345</span></p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-title">$24</p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-text"><span class="light">50%</span></p>
                </div>
        
                <div class="table-column centered padded">
                <p class="table-title">$12</p>
                </div>
        
                <div class="table-column padded-left">
                <div class="percentage-diff-icon-wrap positive">
                    <svg class="percentage-diff-icon icon-plus-small">
                    <use xlinkHref="#svg-plus-small"></use>
                    </svg>
                </div>
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
  )
}

export default HubStoreStatement