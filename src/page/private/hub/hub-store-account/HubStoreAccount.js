import React from 'react'

const HubStoreAccount = () => {
  return (
    <div class="account-hub-content">
        <div class="section-header">
        <div class="section-header-info">
            <p class="section-pretitle">My Store</p>

            <h2 class="section-title">Account Overview</h2>
        </div>
        </div>

        <div class="grid-column">
        <div class="earning-stat-box full">
            <div class="earning-stat-box-info">
            <div class="earning-stat-box-icon-wrap stat-balance">
                <svg class="earning-stat-box-icon icon-wallet">
                <use xlinkHref="#svg-wallet"></use>
                </svg>
            </div>
        
            <p class="earning-stat-box-title">250.32 <span class="currency">U$D</span></p>
        
            <p class="earning-stat-box-text">Account Balance</p>
            </div>

            <div class="user-stats">
            <div class="user-stat big">
                <p class="user-stat-title">7</p>
        
                <p class="user-stat-text">items</p>
            </div>
        
            <div class="user-stat big">
                <p class="user-stat-title">20</p>
        
                <p class="user-stat-text">comments</p>
            </div>
        
            <div class="user-stat big">
                <p class="user-stat-title">9</p>
        
                <p class="user-stat-text">ratings</p>
            </div>
    
            <div class="user-stat big">
                <p class="user-stat-title">361</p>
        
                <p class="user-stat-text">views</p>
            </div>
            </div>
        </div>

        <div class="grid grid-3-3-3 centered">
            <div class="earning-stat-box">
            <div class="earning-stat-box-info">
                <div class="earning-stat-box-icon-wrap stat-item">
                <svg class="earning-stat-box-icon icon-item">
                    <use xlinkHref="#svg-item"></use>
                </svg>
                </div>
        
                <p class="earning-stat-box-title">298</p>
        
                <p class="earning-stat-box-text">Total Items Sold</p>
            </div>
            </div>
        
            <div class="earning-stat-box">
            <div class="earning-stat-box-info">
                <div class="earning-stat-box-icon-wrap stat-earning">
                <svg class="earning-stat-box-icon icon-earnings">
                    <use xlinkHref="#svg-earnings"></use>
                </svg>
                </div>
        
                <p class="earning-stat-box-title">1.925 <span class="currency">U$D</span></p>
        
                <p class="earning-stat-box-text">Total Earnings</p>
            </div>
            </div>
        
            <div class="earning-stat-box">
            <div class="earning-stat-box-info">
                <div class="earning-stat-box-icon-wrap stat-revenue">
                <svg class="earning-stat-box-icon icon-revenue">
                    <use xlinkHref="#svg-revenue"></use>
                </svg>
                </div>
        
                <p class="earning-stat-box-title">2.203 <span class="currency">U$D</span></p>
        
                <p class="earning-stat-box-text">Total Revenue</p>
            </div>
            </div>
        </div>

        <div class="widget-box">
            <div class="widget-box-actions">
            <div class="widget-box-action">
                <p class="widget-box-title">Earnings Report</p>
            </div>
        
            <div class="widget-box-action">
                <div class="form-select v2">
                <select id="earnings-report-date" name="earnings_report_date">
                    <option value="0">November 2019</option>
                    <option value="1">December 2019</option>
                </select>
                <svg class="form-select-icon icon-small-arrow">
                    <use xlinkHref="#svg-small-arrow"></use>
                </svg>
                </div>
            </div>
            </div>
        
            <div class="widget-box-content">
            <div class="chart-wrap">
                <div class="chart">
                <canvas id="earnings-report-chart"></canvas>
                </div>
            </div>
            </div>
        </div>

        <div class="grid grid-6-3_9 stretched">
            <div class="grid-column">
            <div class="widget-box">
                <p class="widget-box-title">Top Sellers</p>

                <div class="widget-box-content no-margin-top">
                <div class="table table-top-sellers join-rows">
                    <div class="table-header">
                    <div class="table-header-column">
                        <p class="table-header-title">Item</p>
                    </div>

                    <div class="table-header-column centered padded">
                        <p class="table-header-title">Sales</p>
                    </div>

                    <div class="table-header-column centered padded">
                        <p class="table-header-title">Views</p>
                    </div>
                    </div>

                    <div class="table-body">
                    <div class="table-row tiny">
                        <div class="table-column">
                        <div class="product-preview micro">
                            <a href="marketplace-product">
                            <figure class="product-preview-image liquid">
                                <img src="img/marketplace/items/10.jpg" alt="item-10"/>
                            </figure>
                            </a>
                        
                            <div class="product-preview-info">
                            <p class="product-preview-title"><a href="marketplace-product">Pixel Diamond Gaming Magazine</a></p>
                        
                            <p class="product-preview-category digital"><a href="marketplace-category">HTML Templates</a></p>
                            </div>
                        </div>
                        </div>

                        <div class="table-column centered padded">
                        <p class="table-title">130</p>
                        </div>

                        <div class="table-column centered padded">
                        <p class="table-title">1750</p>
                        </div>
                    </div>

                    <div class="table-row tiny">
                        <div class="table-column">
                        <div class="product-preview micro">
                            <a href="marketplace-product">
                            <figure class="product-preview-image liquid">
                                <img src="img/marketplace/items/01.jpg" alt="item-01"/>
                            </figure>
                            </a>
                        
                            <div class="product-preview-info">
                            <p class="product-preview-title"><a href="marketplace-product">Twitch Stream UI Pack</a></p>
                        
                            <p class="product-preview-category digital"><a href="marketplace-category">Stream Packs</a></p>
                            </div>
                        </div>
                        </div>

                        <div class="table-column centered padded">
                        <p class="table-title">64</p>
                        </div>

                        <div class="table-column centered padded">
                        <p class="table-title">1068</p>
                        </div>
                    </div>

                    <div class="table-row tiny">
                        <div class="table-column">
                        <div class="product-preview micro">
                            <a href="marketplace-product">
                            <figure class="product-preview-image liquid">
                                <img src="img/marketplace/items/13.jpg" alt="item-13"/>
                            </figure>
                            </a>
                        
                            <div class="product-preview-info">
                            <p class="product-preview-title"><a href="marketplace-product">American Football Team Page</a></p>
                        
                            <p class="product-preview-category digital"><a href="marketplace-category">HTML Templates</a></p>
                            </div>
                        </div>
                        </div>

                        <div class="table-column centered padded">
                        <p class="table-title">22</p>
                        </div>

                        <div class="table-column centered padded">
                        <p class="table-title">990</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div class="grid-column">
            <div class="widget-box">
                <div class="widget-box-actions">
                <div class="widget-box-action">
                    <p class="widget-box-title">Performance</p>
                </div>

                <div class="widget-box-action">
                    <div class="form-select v2">
                    <select id="vs-performance-report-date" name="vs_performance_report_date">
                        <option value="0">Aug/Nov 2019</option>
                        <option value="1">Jan/Aug 2019</option>
                    </select>
                    <svg class="form-select-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow"></use>
                    </svg>
                    </div>
                </div>
                </div>

                <div class="widget-box-content">
                <div class="chart-wrap small">
                    <div class="chart">
                    <canvas id="vs-performance-chart"></canvas>
                    </div>
                </div>
                </div>

                <div class="widget-box-footer">
                <div class="reference-item-list centered">
                    <div class="reference-item">
                    <div class="reference-bullet secondary"></div>

                    <p class="reference-item-text">Views</p>
                    </div>

                    <div class="reference-item">
                    <div class="reference-bullet primary"></div>

                    <p class="reference-item-text">Sales</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

        <div class="section-header">
        <div class="section-header-info">
            <p class="section-pretitle">My Store</p>

            <h2 class="section-title">My Payments</h2>
        </div>
        </div>

        <div class="grid-column">
        <div class="grid grid-3-6_9 stretched">
            <div class="grid-column">
            <div class="widget-box">
                <p class="widget-box-title">Payment Method</p>
            
                <div class="widget-box-content">
                <form class="form">
                    <div class="form-row">
                    <div class="checkbox-wrap">
                        <input type="radio" id="payment-method-paypal" name="payment_method" value="payment-method-paypal" checked/>
                        <div class="checkbox-box round"></div>
                        <label class="accordion-trigger-linked" for="payment-method-paypal">Paypal</label>
            
                        <div class="checkbox-info accordion-content-linked accordion-open">
                        <p class="checkbox-info-text">Click "Confirm Method" to be redirected to login and confirm your account.</p>
                        </div>
                    </div>
                    </div>
            
                    <div class="form-row">
                    <div class="checkbox-wrap">
                        <input type="radio" id="payment-method-payoneer" name="payment_method" value="payment-method-payoneer"/>
                        <div class="checkbox-box round"></div>
                        <label class="accordion-trigger-linked" for="payment-method-payoneer">Payoneer</label>
            
                        <div class="checkbox-info accordion-content-linked">
                        <p class="checkbox-info-text">Click "Confirm Method" to be redirected to login and confirm your account.</p>
                        </div>
                    </div>
                    </div>
                </form>
            
                <p class="button full primary">Confirm Method</p>
                </div>
            </div>

            <div class="widget-box">
                <p class="widget-box-title">Confirmed Method</p>
            
                <div class="widget-box-content">
                <div class="status-info success">
                    <div class="status-icon-wrap">
                    <svg class="status-icon icon-check">
                        <use xlinkHref="#svg-check"></use>
                    </svg>
                    </div>

                    <p class="status-title">marinav@payments.com</p>

                    <p class="status-text">PayPal</p>

                    <p class="status-description">Your selected payout method was confirmed on Jan 17, 2019</p>
                </div>
                </div>
            </div>
            </div>

            <div class="grid-column">
            <div class="widget-box">
                <p class="widget-box-title">Payments History</p>

                <div class="widget-box-content">
                <div class="table-wrap" data-simplebar>
                    <div class="table table-payments join-rows">
                    <div class="table-header">
                        <div class="table-header-column">
                        <p class="table-header-title">Date</p>
                        </div>

                        <div class="table-header-column padded">
                        <p class="table-header-title">Method</p>
                        </div>

                        <div class="table-header-column centered padded">
                        <p class="table-header-title">Amount</p>
                        </div>

                        <div class="table-header-column padded-left align-right">
                        <p class="table-header-title">Status</p>
                        </div>
                    </div>

                    <div class="table-body">
                        <div class="table-row micro">
                        <div class="table-column">
                            <p class="table-text"><span class="light">Nov 15th, 2019</span></p>
                        </div>

                        <div class="table-column padded">
                            <p class="table-title">marinav@payments.com</p>
                        </div>

                        <div class="table-column centered padded">
                            <p class="table-title">$250.32</p>
                        </div>

                        <div class="table-column padded-left align-right">
                            <p class="table-text"><span class="light">Pending</span></p>
                        </div>
                        </div>

                        <div class="table-row micro">
                        <div class="table-column">
                            <p class="table-text"><span class="light">Oct 15th, 2019</span></p>
                        </div>

                        <div class="table-column padded">
                            <p class="table-title">marinav@payments.com</p>
                        </div>

                        <div class="table-column centered padded">
                            <p class="table-title">$118.24</p>
                        </div>

                        <div class="table-column padded-left align-right">
                            <p class="table-title"><span class="highlighted">Paid</span></p>
                        </div>
                        </div>

                        <div class="table-row micro">
                        <div class="table-column">
                            <p class="table-text"><span class="light">Sep 15th, 2019</span></p>
                        </div>

                        <div class="table-column padded">
                            <p class="table-title">marinav@payments.com</p>
                        </div>

                        <div class="table-column centered padded">
                            <p class="table-title">$337.20</p>
                        </div>

                        <div class="table-column padded-left align-right">
                            <p class="table-title"><span class="highlighted">Paid</span></p>
                        </div>
                        </div>

                        <div class="table-row micro">
                        <div class="table-column">
                            <p class="table-text"><span class="light">Aug 15th, 2019</span></p>
                        </div>

                        <div class="table-column padded">
                            <p class="table-title">marinav@payments.com</p>
                        </div>

                        <div class="table-column centered padded">
                            <p class="table-title">$101.68</p>
                        </div>

                        <div class="table-column padded-left align-right">
                            <p class="table-title"><span class="highlighted">Paid</span></p>
                        </div>
                        </div>

                        <div class="table-row micro">
                        <div class="table-column">
                            <p class="table-text"><span class="light">Jul 15th, 2019</span></p>
                        </div>

                        <div class="table-column padded">
                            <p class="table-title">marinav@payments.com</p>
                        </div>

                        <div class="table-column centered padded">
                            <p class="table-title">$89.44</p>
                        </div>

                        <div class="table-column padded-left align-right">
                            <p class="table-title"><span class="highlighted">Paid</span></p>
                        </div>
                        </div>

                        <div class="table-row micro">
                        <div class="table-column">
                            <p class="table-text"><span class="light">Jun 15th, 2019</span></p>
                        </div>

                        <div class="table-column padded">
                            <p class="table-title">marinav@payments.com</p>
                        </div>

                        <div class="table-column centered padded">
                            <p class="table-title">$109.82</p>
                        </div>

                        <div class="table-column padded-left align-right">
                            <p class="table-title"><span class="highlighted">Paid</span></p>
                        </div>
                        </div>

                        <div class="table-row micro">
                        <div class="table-column">
                            <p class="table-text"><span class="light">May 15th, 2019</span></p>
                        </div>

                        <div class="table-column padded">
                            <p class="table-title">marinav@payments.com</p>
                        </div>

                        <div class="table-column centered padded">
                            <p class="table-title">$52.17</p>
                        </div>

                        <div class="table-column padded-left align-right">
                            <p class="table-title"><span class="highlighted">Paid</span></p>
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
    </div>
  )
}

export default HubStoreAccount