import React from 'react'

const HubStoreAccount = () => {
  return (
    <div className="account-hub-content">
        <div className="section-header">
        <div className="section-header-info">
            <p className="section-pretitle">My Store</p>

            <h2 className="section-title">Account Overview</h2>
        </div>
        </div>

        <div className="grid-column">
        <div className="earning-stat-box full">
            <div className="earning-stat-box-info">
            <div className="earning-stat-box-icon-wrap stat-balance">
                <svg className="earning-stat-box-icon icon-wallet">
                <use xlinkHref="#svg-wallet"></use>
                </svg>
            </div>
        
            <p className="earning-stat-box-title">250.32 <span className="currency">U$D</span></p>
        
            <p className="earning-stat-box-text">Account Balance</p>
            </div>

            <div className="user-stats">
            <div className="user-stat big">
                <p className="user-stat-title">7</p>
        
                <p className="user-stat-text">items</p>
            </div>
        
            <div className="user-stat big">
                <p className="user-stat-title">20</p>
        
                <p className="user-stat-text">comments</p>
            </div>
        
            <div className="user-stat big">
                <p className="user-stat-title">9</p>
        
                <p className="user-stat-text">ratings</p>
            </div>
    
            <div className="user-stat big">
                <p className="user-stat-title">361</p>
        
                <p className="user-stat-text">views</p>
            </div>
            </div>
        </div>

        <div className="grid grid-3-3-3 centered">
            <div className="earning-stat-box">
            <div className="earning-stat-box-info">
                <div className="earning-stat-box-icon-wrap stat-item">
                <svg className="earning-stat-box-icon icon-item">
                    <use xlinkHref="#svg-item"></use>
                </svg>
                </div>
        
                <p className="earning-stat-box-title">298</p>
        
                <p className="earning-stat-box-text">Total Items Sold</p>
            </div>
            </div>
        
            <div className="earning-stat-box">
            <div className="earning-stat-box-info">
                <div className="earning-stat-box-icon-wrap stat-earning">
                <svg className="earning-stat-box-icon icon-earnings">
                    <use xlinkHref="#svg-earnings"></use>
                </svg>
                </div>
        
                <p className="earning-stat-box-title">1.925 <span className="currency">U$D</span></p>
        
                <p className="earning-stat-box-text">Total Earnings</p>
            </div>
            </div>
        
            <div className="earning-stat-box">
            <div className="earning-stat-box-info">
                <div className="earning-stat-box-icon-wrap stat-revenue">
                <svg className="earning-stat-box-icon icon-revenue">
                    <use xlinkHref="#svg-revenue"></use>
                </svg>
                </div>
        
                <p className="earning-stat-box-title">2.203 <span className="currency">U$D</span></p>
        
                <p className="earning-stat-box-text">Total Revenue</p>
            </div>
            </div>
        </div>

        <div className="widget-box">
            <div className="widget-box-actions">
            <div className="widget-box-action">
                <p className="widget-box-title">Earnings Report</p>
            </div>
        
            <div className="widget-box-action">
                <div className="form-select v2">
                <select id="earnings-report-date" name="earnings_report_date">
                    <option value="0">November 2019</option>
                    <option value="1">December 2019</option>
                </select>
                <svg className="form-select-icon icon-small-arrow">
                    <use xlinkHref="#svg-small-arrow"></use>
                </svg>
                </div>
            </div>
            </div>
        
            <div className="widget-box-content">
            <div className="chart-wrap">
                <div className="chart">
                <canvas id="earnings-report-chart"></canvas>
                </div>
            </div>
            </div>
        </div>

        <div className="grid grid-6-3_9 stretched">
            <div className="grid-column">
            <div className="widget-box">
                <p className="widget-box-title">Top Sellers</p>

                <div className="widget-box-content no-margin-top">
                <div className="table table-top-sellers join-rows">
                    <div className="table-header">
                    <div className="table-header-column">
                        <p className="table-header-title">Item</p>
                    </div>

                    <div className="table-header-column centered padded">
                        <p className="table-header-title">Sales</p>
                    </div>

                    <div className="table-header-column centered padded">
                        <p className="table-header-title">Views</p>
                    </div>
                    </div>

                    <div className="table-body">
                    <div className="table-row tiny">
                        <div className="table-column">
                        <div className="product-preview micro">
                            <a href="marketplace-product">
                            <figure className="product-preview-image liquid">
                                <img src="img/marketplace/items/10.jpg" alt="item-10"/>
                            </figure>
                            </a>
                        
                            <div className="product-preview-info">
                            <p className="product-preview-title"><a href="marketplace-product">Pixel Diamond Gaming Magazine</a></p>
                        
                            <p className="product-preview-category digital"><a href="marketplace-category">HTML Templates</a></p>
                            </div>
                        </div>
                        </div>

                        <div className="table-column centered padded">
                        <p className="table-title">130</p>
                        </div>

                        <div className="table-column centered padded">
                        <p className="table-title">1750</p>
                        </div>
                    </div>

                    <div className="table-row tiny">
                        <div className="table-column">
                        <div className="product-preview micro">
                            <a href="marketplace-product">
                            <figure className="product-preview-image liquid">
                                <img src="img/marketplace/items/01.jpg" alt="item-01"/>
                            </figure>
                            </a>
                        
                            <div className="product-preview-info">
                            <p className="product-preview-title"><a href="marketplace-product">Twitch Stream UI Pack</a></p>
                        
                            <p className="product-preview-category digital"><a href="marketplace-category">Stream Packs</a></p>
                            </div>
                        </div>
                        </div>

                        <div className="table-column centered padded">
                        <p className="table-title">64</p>
                        </div>

                        <div className="table-column centered padded">
                        <p className="table-title">1068</p>
                        </div>
                    </div>

                    <div className="table-row tiny">
                        <div className="table-column">
                        <div className="product-preview micro">
                            <a href="marketplace-product">
                            <figure className="product-preview-image liquid">
                                <img src="img/marketplace/items/13.jpg" alt="item-13"/>
                            </figure>
                            </a>
                        
                            <div className="product-preview-info">
                            <p className="product-preview-title"><a href="marketplace-product">American Football Team Page</a></p>
                        
                            <p className="product-preview-category digital"><a href="marketplace-category">HTML Templates</a></p>
                            </div>
                        </div>
                        </div>

                        <div className="table-column centered padded">
                        <p className="table-title">22</p>
                        </div>

                        <div className="table-column centered padded">
                        <p className="table-title">990</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div className="grid-column">
            <div className="widget-box">
                <div className="widget-box-actions">
                <div className="widget-box-action">
                    <p className="widget-box-title">Performance</p>
                </div>

                <div className="widget-box-action">
                    <div className="form-select v2">
                    <select id="vs-performance-report-date" name="vs_performance_report_date">
                        <option value="0">Aug/Nov 2019</option>
                        <option value="1">Jan/Aug 2019</option>
                    </select>
                    <svg className="form-select-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow"></use>
                    </svg>
                    </div>
                </div>
                </div>

                <div className="widget-box-content">
                <div className="chart-wrap small">
                    <div className="chart">
                    <canvas id="vs-performance-chart"></canvas>
                    </div>
                </div>
                </div>

                <div className="widget-box-footer">
                <div className="reference-item-list centered">
                    <div className="reference-item">
                    <div className="reference-bullet secondary"></div>

                    <p className="reference-item-text">Views</p>
                    </div>

                    <div className="reference-item">
                    <div className="reference-bullet primary"></div>

                    <p className="reference-item-text">Sales</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

        <div className="section-header">
        <div className="section-header-info">
            <p className="section-pretitle">My Store</p>

            <h2 className="section-title">My Payments</h2>
        </div>
        </div>

        <div className="grid-column">
        <div className="grid grid-3-6_9 stretched">
            <div className="grid-column">
            <div className="widget-box">
                <p className="widget-box-title">Payment Method</p>
            
                <div className="widget-box-content">
                <form className="form">
                    <div className="form-row">
                    <div className="checkbox-wrap">
                        <input type="radio" id="payment-method-paypal" name="payment_method" value="payment-method-paypal" checked/>
                        <div className="checkbox-box round"></div>
                        <label className="accordion-trigger-linked" for="payment-method-paypal">Paypal</label>
            
                        <div className="checkbox-info accordion-content-linked accordion-open">
                        <p className="checkbox-info-text">Click "Confirm Method" to be redirected to login and confirm your account.</p>
                        </div>
                    </div>
                    </div>
            
                    <div className="form-row">
                    <div className="checkbox-wrap">
                        <input type="radio" id="payment-method-payoneer" name="payment_method" value="payment-method-payoneer"/>
                        <div className="checkbox-box round"></div>
                        <label className="accordion-trigger-linked" for="payment-method-payoneer">Payoneer</label>
            
                        <div className="checkbox-info accordion-content-linked">
                        <p className="checkbox-info-text">Click "Confirm Method" to be redirected to login and confirm your account.</p>
                        </div>
                    </div>
                    </div>
                </form>
            
                <p className="button full primary">Confirm Method</p>
                </div>
            </div>

            <div className="widget-box">
                <p className="widget-box-title">Confirmed Method</p>
            
                <div className="widget-box-content">
                <div className="status-info success">
                    <div className="status-icon-wrap">
                    <svg className="status-icon icon-check">
                        <use xlinkHref="#svg-check"></use>
                    </svg>
                    </div>

                    <p className="status-title">marinav@payments.com</p>

                    <p className="status-text">PayPal</p>

                    <p className="status-description">Your selected payout method was confirmed on Jan 17, 2019</p>
                </div>
                </div>
            </div>
            </div>

            <div className="grid-column">
            <div className="widget-box">
                <p className="widget-box-title">Payments History</p>

                <div className="widget-box-content">
                <div className="table-wrap" data-simplebar>
                    <div className="table table-payments join-rows">
                    <div className="table-header">
                        <div className="table-header-column">
                        <p className="table-header-title">Date</p>
                        </div>

                        <div className="table-header-column padded">
                        <p className="table-header-title">Method</p>
                        </div>

                        <div className="table-header-column centered padded">
                        <p className="table-header-title">Amount</p>
                        </div>

                        <div className="table-header-column padded-left align-right">
                        <p className="table-header-title">Status</p>
                        </div>
                    </div>

                    <div className="table-body">
                        <div className="table-row micro">
                        <div className="table-column">
                            <p className="table-text"><span className="light">Nov 15th, 2019</span></p>
                        </div>

                        <div className="table-column padded">
                            <p className="table-title">marinav@payments.com</p>
                        </div>

                        <div className="table-column centered padded">
                            <p className="table-title">$250.32</p>
                        </div>

                        <div className="table-column padded-left align-right">
                            <p className="table-text"><span className="light">Pending</span></p>
                        </div>
                        </div>

                        <div className="table-row micro">
                        <div className="table-column">
                            <p className="table-text"><span className="light">Oct 15th, 2019</span></p>
                        </div>

                        <div className="table-column padded">
                            <p className="table-title">marinav@payments.com</p>
                        </div>

                        <div className="table-column centered padded">
                            <p className="table-title">$118.24</p>
                        </div>

                        <div className="table-column padded-left align-right">
                            <p className="table-title"><span className="highlighted">Paid</span></p>
                        </div>
                        </div>

                        <div className="table-row micro">
                        <div className="table-column">
                            <p className="table-text"><span className="light">Sep 15th, 2019</span></p>
                        </div>

                        <div className="table-column padded">
                            <p className="table-title">marinav@payments.com</p>
                        </div>

                        <div className="table-column centered padded">
                            <p className="table-title">$337.20</p>
                        </div>

                        <div className="table-column padded-left align-right">
                            <p className="table-title"><span className="highlighted">Paid</span></p>
                        </div>
                        </div>

                        <div className="table-row micro">
                        <div className="table-column">
                            <p className="table-text"><span className="light">Aug 15th, 2019</span></p>
                        </div>

                        <div className="table-column padded">
                            <p className="table-title">marinav@payments.com</p>
                        </div>

                        <div className="table-column centered padded">
                            <p className="table-title">$101.68</p>
                        </div>

                        <div className="table-column padded-left align-right">
                            <p className="table-title"><span className="highlighted">Paid</span></p>
                        </div>
                        </div>

                        <div className="table-row micro">
                        <div className="table-column">
                            <p className="table-text"><span className="light">Jul 15th, 2019</span></p>
                        </div>

                        <div className="table-column padded">
                            <p className="table-title">marinav@payments.com</p>
                        </div>

                        <div className="table-column centered padded">
                            <p className="table-title">$89.44</p>
                        </div>

                        <div className="table-column padded-left align-right">
                            <p className="table-title"><span className="highlighted">Paid</span></p>
                        </div>
                        </div>

                        <div className="table-row micro">
                        <div className="table-column">
                            <p className="table-text"><span className="light">Jun 15th, 2019</span></p>
                        </div>

                        <div className="table-column padded">
                            <p className="table-title">marinav@payments.com</p>
                        </div>

                        <div className="table-column centered padded">
                            <p className="table-title">$109.82</p>
                        </div>

                        <div className="table-column padded-left align-right">
                            <p className="table-title"><span className="highlighted">Paid</span></p>
                        </div>
                        </div>

                        <div className="table-row micro">
                        <div className="table-column">
                            <p className="table-text"><span className="light">May 15th, 2019</span></p>
                        </div>

                        <div className="table-column padded">
                            <p className="table-title">marinav@payments.com</p>
                        </div>

                        <div className="table-column centered padded">
                            <p className="table-title">$52.17</p>
                        </div>

                        <div className="table-column padded-left align-right">
                            <p className="table-title"><span className="highlighted">Paid</span></p>
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