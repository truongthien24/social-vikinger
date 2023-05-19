import React from 'react'

const MarketplaceCheckout = () => {
  return (
    <div class="content-grid">
        <div class="section-banner">
        <img class="section-banner-icon" src="img/banner/marketplace-icon.png" alt="marketplace-icon"/>
    
        <p class="section-banner-title">Marketplace</p>
    
        <p class="section-banner-text">The best place for the community to buy and sell!</p>
        </div>

        <div class="section-header">
        <div class="section-header-info">
            <p class="section-pretitle">Your Order</p>
    
            <h2 class="section-title">Checkout</h2>
        </div>
        </div>

        <div class="grid grid-8-4 small-space">
        <div class="grid-column">
            <div class="widget-box">
            <p class="widget-box-title">Billing Details</p>
        
            <div class="widget-box-content">
                <form class="form">
                <div class="form-row split">
                    <div class="form-item">
                    <div class="form-input small">
                        <label for="billing-first-name">First Name</label>
                        <input type="text" id="billing-first-name" name="billing_first_name"/>
                    </div>
                    </div>

                    <div class="form-item">
                    <div class="form-input small">
                        <label for="billing-last-name">Last Name</label>
                        <input type="text" id="billing-last-name" name="billing_last_name"/>
                    </div>
                    </div>
                </div>

                <div class="form-row split">
                    <div class="form-item">
                    <div class="form-input small">
                        <label for="billing-email">Email</label>
                        <input type="text" id="billing-email" name="billing_email"/>
                    </div>
                    </div>

                    <div class="form-item">
                    <div class="form-input small">
                        <label for="billing-phone-number">Phone Number</label>
                        <input type="text" id="billing-phone-number" name="billing_phone_number"/>
                    </div>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-item">
                    <div class="form-input small">
                        <label for="billing-address">Full Address</label>
                        <input type="text" id="billing-address" name="billing_address"/>
                    </div>
                    </div>
                </div>

                <div class="form-row split">
                    <div class="form-item">
                    <div class="form-select">
                        <label for="billing-country">Country</label>
                        <select id="billing-country" name="billing_country">
                        <option value="0">Select your Country</option>
                        <option value="1">United States</option>
                        </select>
                        <svg class="form-select-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow"></use>
                        </svg>
                    </div>
                    </div>

                    <div class="form-item">
                    <div class="form-select">
                        <label for="billing-state">State</label>
                        <select id="billing-state" name="billing_state">
                        <option value="0">Select your State</option>
                        <option value="1">New York</option>
                        </select>
                        <svg class="form-select-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow"></use>
                        </svg>
                    </div>
                    </div>
                </div>

                <div class="form-row split">
                    <div class="form-item">
                    <div class="form-select">
                        <label for="billing-city">City</label>
                        <select id="billing-city" name="billing_city">
                        <option value="0">Select your City</option>
                        <option value="1">New York</option>
                        </select>
                        <svg class="form-select-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow"></use>
                        </svg>
                    </div>
                    </div>

                    <div class="form-item">
                    <div class="form-input small">
                        <label for="billing-zip-code">ZIP Code</label>
                        <input type="text" id="billing-zip-code" name="billing_zip_code"/>
                    </div>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-item">
                    <div class="form-input small medium-textarea">
                        <textarea id="billing-details" name="billing_details" placeholder="Write any additional details here..."></textarea>
                    </div>
                    </div>
                </div>
                </form>
            </div>
            </div>
        </div>

        <div class="grid-column">
            <div class="sidebar-box">
            <p class="sidebar-box-title">Order Summary</p>
        
            <div class="sidebar-box-items">
                <div class="totals-line-list separator-bottom">
                <div class="totals-line">
                    <div class="totals-line-info">
                    <p class="totals-line-title"><span class="bold">Twitch Stream UI Pack</span></p>
        
                    <p class="totals-line-text">Regular License</p>
                    </div>
        
                    <p class="price-title"><span class="currency">$</span> 12.00 x 1</p>
                </div>
        
                <div class="totals-line">
                    <div class="totals-line-info">
                    <p class="totals-line-title"><span class="bold">Gaming Coin Badges Pack</span></p>
        
                    <p class="totals-line-text">Regular License</p>
                    </div>
        
                    <p class="price-title"><span class="currency">$</span> 6.00 x 1</p>
                </div>
        
                <div class="totals-line">
                    <div class="totals-line-info">
                    <p class="totals-line-title"><span class="bold">Pixel Diamond Gaming Magazine</span></p>
        
                    <p class="totals-line-text">Regular License</p>
                    </div>
        
                    <p class="price-title"><span class="currency">$</span> 26.00 x 1</p>
                </div>
                </div>
        
                <div class="totals-line-list separator-bottom">
                <div class="totals-line">
                    <p class="totals-line-title">Cart Total (3)</p>
        
                    <p class="price-title"><span class="currency">$</span> 44.00</p>
                </div>
        
                <div class="totals-line">
                    <p class="totals-line-title">Code</p>
        
                    <p class="price-title">-<span class="currency">$</span> 5.00</p>
                </div>
        
                <div class="totals-line">
                    <p class="totals-line-title">Total</p>
        
                    <p class="price-title"><span class="currency">$</span> 39.00</p>
                </div>
                </div>
        
                <p class="price-title big separator-bottom"><span class="currency">$</span> 39.00</p>
            </div>
        
            <p class="sidebar-box-title">Payment Method</p>
        
            <div class="sidebar-box-items">
                <form class="form">
                <div class="checkbox-wrap">
                    <input type="radio" id="payment-paypal" name="payment_type" value="payment-paypal" checked/>
                    <div class="checkbox-box round"></div>
                    <label class="accordion-trigger-linked" for="payment-paypal">Paypal</label>
        
                    <div class="checkbox-info accordion-content-linked accordion-open">
                    <p class="checkbox-info-text">Pay with your Paypal balance or connected bank account! It's quick and really secure.</p>
                    </div>
                </div>
        
                <div class="checkbox-wrap">
                    <input type="radio" id="payment-debit-credit" name="payment_type" value="payment-debit-credit"/>
                    <div class="checkbox-box round"></div>
                    <label class="accordion-trigger-linked" for="payment-debit-credit">Credit or Debit Card</label>
        
                    <div class="checkbox-info accordion-content-linked">
                    <p class="checkbox-info-text">Pay with your credit or debit card!.</p>
                    </div>
                </div>
                </form>
        
                <p class="button primary">Complete Order!</p>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default MarketplaceCheckout