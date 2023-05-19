import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoading } from '../../../redux/action/homeAction';

const MarketPlaceProduct = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate();

    useEffect(()=> {
        let script = document.createElement("script");
        script.src = "/js/utils/app.js";
        script.async = true;
        document.body.appendChild(script);
    }, [])

    // Return
    return (
        <>
            <div className="section-banner">
                <img className="section-banner-icon" src="img/banner/marketplace-icon.png" alt="marketplace-icon"/>
        
                <p className="section-banner-title">Marketplace</p>
            
                <p className="section-banner-text">The best place for the community to buy and sell!</p>
            </div>

            <div className="section-header">
            <div className="section-header-info">
                <p className="section-pretitle">HTML Templates</p>
        
                <h2 className="section-title">Pixel Diamond Gaming Magazine</h2>
            </div>

            <div className="section-header-actions">
                <a className="section-header-subsection" onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace')}}>Marketplace</a>

                <a className="section-header-subsection" onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-category')}}>Digital Items</a>
        
                <p className="section-header-subsection">Pixel Diamond Gaming Magazine</p>
            </div>
            </div>

            <div className="grid grid-9-3">
                <div className="marketplace-content grid-column">
                    <div className="slider-panel">
                    <div id="product-box-slider-items" className="slider-panel-slides">
                        <div className="slider-panel-slide">
                            <figure className="slider-panel-slide-image liquid">
                                <img src="img/marketplace/items/10.jpg" alt="item-10"/>
                            </figure>
                        </div>

                        <div className="slider-panel-slide">
                            <figure className="slider-panel-slide-image liquid">
                                <img src="img/marketplace/items/15.jpg" alt="item-15"/>
                            </figure>
                        </div>

                        <div className="slider-panel-slide">
                            <figure className="slider-panel-slide-image liquid">
                                <img src="img/marketplace/items/16.jpg" alt="item-16"/>
                            </figure>
                        </div>

                        <div className="slider-panel-slide">
                            <figure className="slider-panel-slide-image liquid">
                                <img src="img/marketplace/items/17.jpg" alt="item-17"/>
                            </figure>
                        </div>

                        <div className="slider-panel-slide">
                            <figure className="slider-panel-slide-image liquid">
                                <img src="img/marketplace/items/18.jpg" alt="item-18"/>
                            </figure>
                        </div>

                        <div className="slider-panel-slide">
                            <figure className="slider-panel-slide-image liquid">
                                <img src="img/marketplace/items/19.jpg" alt="item-19"/>
                            </figure>
                        </div>

                        <div className="slider-panel-slide">
                            <figure className="slider-panel-slide-image liquid">
                                <img src="img/marketplace/items/20.jpg" alt="item-20"/>
                            </figure>
                        </div>
                    </div>

                    <div className="slider-panel-roster">
                        <div id="product-box-slider-controls" className="slider-controls">
                        <div className="slider-control left">
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

                        <a className="button secondary" href="https://themeforest.net/item/pixel-diamond-html-esports-gaming-magazine-community/23798711" target="_blank">Live Preview</a>

                        <div id="product-box-slider-roster" className="roster-pictures">
                        <div className="roster-picture">
                            <figure className="roster-picture-image liquid">
                            <img src="img/marketplace/items/10.jpg" alt="item-10"/>
                            </figure>
                        </div>

                        <div className="roster-picture">
                            <figure className="roster-picture-image liquid">
                            <img src="img/marketplace/items/15.jpg" alt="item-15"/>
                            </figure>
                        </div>

                        <div className="roster-picture">
                            <figure className="roster-picture-image liquid">
                            <img src="img/marketplace/items/16.jpg" alt="item-16"/>
                            </figure>
                        </div>

                        <div className="roster-picture">
                            <figure className="roster-picture-image liquid">
                            <img src="img/marketplace/items/17.jpg" alt="item-17"/>
                            </figure>
                        </div>

                        <div className="roster-picture">
                            <figure className="roster-picture-image liquid">
                            <img src="img/marketplace/items/18.jpg" alt="item-18"/>
                            </figure>
                        </div>

                        <div className="roster-picture">
                            <figure className="roster-picture-image liquid">
                            <img src="img/marketplace/items/19.jpg" alt="item-19"/>
                            </figure>
                        </div>

                        <div className="roster-picture">
                            <figure className="roster-picture-image liquid">
                            <img src="img/marketplace/items/20.jpg" alt="item-20"/>
                            </figure>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="tab-box">
                    <div className="tab-box-options">
                        <div className="tab-box-option">
                        <p className="tab-box-option-title">Description</p>
                        </div>
                
                        <div className="tab-box-option">
                        <p className="tab-box-option-title">Comments <span className="highlighted">4</span></p>
                        </div>
                
                        <div className="tab-box-option">
                        <p className="tab-box-option-title">Reviews <span className="highlighted">3</span></p>
                        </div>
                    </div>
                
                    <div className="tab-box-items">
                        <div className="tab-box-item">
                        <div className="tab-box-item-content">
                            <p className="tab-box-item-title">The Best eSports and Gaming Magazine Template!</p>
                
                            <p className="tab-box-item-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
                
                            <p className="tab-box-item-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                
                            <p className="tab-box-item-title">356+ HTML Elements Library included</p>
                
                            <p className="tab-box-item-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                
                            <p className="tab-box-item-title">Included in the Pack:</p>
                
                            <ul className="bullet-item-list">
                            <li className="bullet-item">
                                <svg className="bullet-item-icon icon-check">
                                <use xlinkHref="#svg-check"></use>
                                </svg>
                
                                <p className="bullet-item-text">64 HTML Files</p>
                            </li>
                
                            <li className="bullet-item">
                                <svg className="bullet-item-icon icon-check">
                                <use xlinkHref="#svg-check"></use>
                                </svg>
                
                                <p className="bullet-item-text">CSS and JS Elements Library with 365+ Items!</p>
                            </li>
                
                            <li className="bullet-item">
                                <svg className="bullet-item-icon icon-check">
                                <use xlinkHref="#svg-check"></use>
                                </svg>
                
                                <p className="bullet-item-text">63 PSD Files Included SAVE $12</p>
                            </li>
                
                            <li className="bullet-item">
                                <svg className="bullet-item-icon icon-check">
                                <use xlinkHref="#svg-check"></use>
                                </svg>
                
                                <p className="bullet-item-text">Easy template customization using npm & grunt (optional)</p>
                            </li>
                
                            <li className="bullet-item">
                                <svg className="bullet-item-icon icon-check">
                                <use xlinkHref="#svg-check"></use>
                                </svg>
                
                                <p className="bullet-item-text">Vector Illustrations Included</p>
                            </li>
                
                            <li className="bullet-item">
                                <svg className="bullet-item-icon icon-check">
                                <use xlinkHref="#svg-check"></use>
                                </svg>
                
                                <p className="bullet-item-text">84+ eSports Widgets</p>
                            </li>
                
                            <li className="bullet-item">
                                <svg className="bullet-item-icon icon-check">
                                <use xlinkHref="#svg-check"></use>
                                </svg>
                
                                <p className="bullet-item-text">Custom Plugins</p>
                            </li>
                
                            <li className="bullet-item">
                                <svg className="bullet-item-icon icon-check">
                                <use xlinkHref="#svg-check"></use>
                                </svg>
                
                                <p className="bullet-item-text">Fully Responsive</p>
                            </li>
                
                            <li className="bullet-item">
                                <svg className="bullet-item-icon icon-check">
                                <use xlinkHref="#svg-check"></use>
                                </svg>
                
                                <p className="bullet-item-text">Google Fonts</p>
                            </li>
                            </ul>
                        </div>
                        </div>
                
                        <div className="tab-box-item">
                        <div className="post-comment-list no-border-top">
                            <div className="post-comment">
                            <a className="user-avatar small no-outline" href="profile-timeline">
                                <div className="user-avatar-content">
                                <div className="hexagon-image-30-32" data-src="img/avatar/04.jpg"></div>
                                </div>
                            
                                <div className="user-avatar-progress">
                                <div className="hexagon-progress-40-44"></div>
                                </div>
                            
                                <div className="user-avatar-progress-border">
                                <div className="hexagon-border-40-44"></div>
                                </div>
                            
                                <div className="user-avatar-badge">
                                <div className="user-avatar-badge-border">
                                    <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-badge-content">
                                    <div className="hexagon-dark-16-18"></div>
                                </div>
                            
                                <p className="user-avatar-badge-text">6</p>
                                </div>
                            </a>
                        
                            <p className="post-comment-text user-tag purchased"><a className="post-comment-text-author" href="profile-timeline">Bearded Wonder</a></p>
                        
                            <p className="post-comment-text">Hi! I just purchased this item and I have a question, does it have the PSD files included? Thanks!</p>
                        
                            <div className="content-actions">
                                <div className="content-action">
                                <div className="meta-line">
                                    <div className="meta-line-list reaction-item-list small">
                                    <div className="reaction-item">
                                        <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/happy.png" alt="reaction-happy"/>
                            
                                        <div className="simple-dropdown padded reaction-item-dropdown">
                                        <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/happy.png" alt="reaction-happy"/> <span className="bold">Happy</span></p>
                        
                                        <p className="simple-dropdown-text">Marcus Jhonson</p>
                                        </div>
                                    </div>
                            
                                    <div className="reaction-item">
                                        <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/like.png" alt="reaction-like"/>
                            
                                        <div className="simple-dropdown padded reaction-item-dropdown">
                                        <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/like.png" alt="reaction-like"/> <span className="bold">Like</span></p>
                                        
                                        <p className="simple-dropdown-text">Neko Bebop</p>
                            
                                        <p className="simple-dropdown-text">Nick Grissom</p>
                            
                                        <p className="simple-dropdown-text">Sarah Diamond</p>
                                        </div>
                                    </div>
                                    </div>
                            
                                    <p className="meta-line-text">4</p>
                                </div>
                        
                                <div className="meta-line">
                                    <p className="meta-line-link light reaction-options-small-dropdown-trigger">React!</p>
                        
                                    <div className="reaction-options small reaction-options-small-dropdown">
                                    <div className="reaction-option text-tooltip-tft" data-title="Like">
                                        <img className="reaction-option-image" src="img/reaction/like.png" alt="reaction-like"/>
                                    </div>
                            
                                    <div className="reaction-option text-tooltip-tft" data-title="Love">
                                        <img className="reaction-option-image" src="img/reaction/love.png" alt="reaction-love"/>
                                    </div>
                            
                                    <div className="reaction-option text-tooltip-tft" data-title="Dislike">
                                        <img className="reaction-option-image" src="img/reaction/dislike.png" alt="reaction-dislike"/>
                                    </div>
                            
                                    <div className="reaction-option text-tooltip-tft" data-title="Happy">
                                        <img className="reaction-option-image" src="img/reaction/happy.png" alt="reaction-happy"/>
                                    </div>
                            
                                    <div className="reaction-option text-tooltip-tft" data-title="Funny">
                                        <img className="reaction-option-image" src="img/reaction/funny.png" alt="reaction-funny"/>
                                    </div>
                            
                                    <div className="reaction-option text-tooltip-tft" data-title="Wow">
                                        <img className="reaction-option-image" src="img/reaction/wow.png" alt="reaction-wow"/>
                                    </div>
                            
                                    <div className="reaction-option text-tooltip-tft" data-title="Angry">
                                        <img className="reaction-option-image" src="img/reaction/angry.png" alt="reaction-angry"/>
                                    </div>
                            
                                    <div className="reaction-option text-tooltip-tft" data-title="Sad">
                                        <img className="reaction-option-image" src="img/reaction/sad.png" alt="reaction-sad"/>
                                    </div>
                                    </div>
                                </div>
                        
                                <div className="meta-line">
                                    <p className="meta-line-link light">Reply</p>
                                </div>
                        
                                <div className="meta-line">
                                    <p className="meta-line-timestamp">15 minutes ago</p>
                                </div>
                        
                                <div className="meta-line settings">
                                    <div className="post-settings-wrap">
                                    <div className="post-settings post-settings-dropdown-trigger">
                                        <svg className="post-settings-icon icon-more-dots">
                                        <use xlinkHref="#svg-more-dots"></use>
                                        </svg>
                                    </div>
                        
                                    <div className="simple-dropdown post-settings-dropdown">
                                        <p className="simple-dropdown-link">Report Post</p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                
                            <div className="post-comment unread reply-2">
                            <a className="user-avatar small no-outline" href="profile-timeline">
                                <div className="user-avatar-content">
                                <div className="hexagon-image-30-32" data-src="img/avatar/01.jpg"></div>
                                </div>
                            
                                <div className="user-avatar-progress">
                                <div className="hexagon-progress-40-44"></div>
                                </div>
                            
                                <div className="user-avatar-progress-border">
                                <div className="hexagon-border-40-44"></div>
                                </div>
                            
                                <div className="user-avatar-badge">
                                <div className="user-avatar-badge-border">
                                    <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-badge-content">
                                    <div className="hexagon-dark-16-18"></div>
                                </div>
                            
                                <p className="user-avatar-badge-text">24</p>
                                </div>
                            </a>
                        
                            <p className="post-comment-text user-tag author"><a className="post-comment-text-author" href="profile-timeline">Marina Valentine</a></p>
                        
                            <p className="post-comment-text">Yes! They are all included in the pack!</p>
                        
                            <div className="content-actions">
                                <div className="content-action">
                                <div className="meta-line">
                                    <div className="meta-line-list reaction-item-list small">
                                    <div className="reaction-item">
                                        <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/like.png" alt="reaction-like"/>
                            
                                        <div className="simple-dropdown padded reaction-item-dropdown">
                                        <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/like.png" alt="reaction-like"/> <span className="bold">Like</span></p>
                                        
                                        <p className="simple-dropdown-text">Bearded Wonder</p>
                                        </div>
                                    </div>
                                    </div>
                            
                                    <p className="meta-line-text">1</p>
                                </div>
                        
                                <div className="meta-line">
                                    <p className="meta-line-link light reaction-options-small-dropdown-trigger">React!</p>
                        
                                    <div className="reaction-options small reaction-options-small-dropdown">
                                    <div className="reaction-option text-tooltip-tft" data-title="Like">
                                        <img className="reaction-option-image" src="img/reaction/like.png" alt="reaction-like"/>
                                    </div>
                            
                                    <div className="reaction-option text-tooltip-tft" data-title="Love">
                                        <img className="reaction-option-image" src="img/reaction/love.png" alt="reaction-love"/>
                                    </div>
                            
                                    <div className="reaction-option text-tooltip-tft" data-title="Dislike">
                                        <img className="reaction-option-image" src="img/reaction/dislike.png" alt="reaction-dislike"/>
                                    </div>
                            
                                    <div className="reaction-option text-tooltip-tft" data-title="Happy">
                                        <img className="reaction-option-image" src="img/reaction/happy.png" alt="reaction-happy"/>
                                    </div>
                            
                                    <div className="reaction-option text-tooltip-tft" data-title="Funny">
                                        <img className="reaction-option-image" src="img/reaction/funny.png" alt="reaction-funny"/>
                                    </div>
                            
                                    <div className="reaction-option text-tooltip-tft" data-title="Wow">
                                        <img className="reaction-option-image" src="img/reaction/wow.png" alt="reaction-wow"/>
                                    </div>
                            
                                    <div className="reaction-option text-tooltip-tft" data-title="Angry">
                                        <img className="reaction-option-image" src="img/reaction/angry.png" alt="reaction-angry"/>
                                    </div>
                            
                                    <div className="reaction-option text-tooltip-tft" data-title="Sad">
                                        <img className="reaction-option-image" src="img/reaction/sad.png" alt="reaction-sad"/>
                                    </div>
                                    </div>
                                </div>
                        
                                <div className="meta-line">
                                    <p className="meta-line-link light">Reply</p>
                                </div>
                        
                                <div className="meta-line">
                                    <p className="meta-line-timestamp">15 minutes ago</p>
                                </div>
                        
                                <div className="meta-line settings">
                                    <div className="post-settings-wrap">
                                    <div className="post-settings post-settings-dropdown-trigger">
                                        <svg className="post-settings-icon icon-more-dots">
                                        <use xlinkHref="#svg-more-dots"></use>
                                        </svg>
                                    </div>
                        
                                    <div className="simple-dropdown post-settings-dropdown">
                                        <p className="simple-dropdown-link">Report Post</p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                
                            <div className="post-comment">
                            <a className="user-avatar small no-outline" href="profile-timeline">
                                <div className="user-avatar-content">
                                <div className="hexagon-image-30-32" data-src="img/avatar/03.jpg"></div>
                                </div>
                            
                                <div className="user-avatar-progress">
                                <div className="hexagon-progress-40-44"></div>
                                </div>
                            
                                <div className="user-avatar-progress-border">
                                <div className="hexagon-border-40-44"></div>
                                </div>
                            
                                <div className="user-avatar-badge">
                                <div className="user-avatar-badge-border">
                                    <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-badge-content">
                                    <div className="hexagon-dark-16-18"></div>
                                </div>
                            
                                <p className="user-avatar-badge-text">16</p>
                                </div>
                            </a>
                        
                            <p className="post-comment-text"><a className="post-comment-text-author" href="profile-timeline">Nick Grissom</a></p>
                        
                            <p className="post-comment-text">Hi Marina! I'm really liking what you did here! I've checked all the pages and the design is really great, plus it has lots of statistics and match overview options! Amazing job, and good luck!</p>
                        
                            <div className="content-actions">
                                <div className="content-action">
                                <div className="meta-line">
                                    <p className="meta-line-link light reaction-options-small-dropdown-trigger">React!</p>
                        
                                    <div className="reaction-options small reaction-options-small-dropdown">
                                    <div className="reaction-option text-tooltip-tft" data-title="Like">
                                        <img className="reaction-option-image" src="img/reaction/like.png" alt="reaction-like"/>
                                    </div>
                            
                                    <div className="reaction-option text-tooltip-tft" data-title="Love">
                                        <img className="reaction-option-image" src="img/reaction/love.png" alt="reaction-love"/>
                                    </div>
                            
                                    <div className="reaction-option text-tooltip-tft" data-title="Dislike">
                                        <img className="reaction-option-image" src="img/reaction/dislike.png" alt="reaction-dislike"/>
                                    </div>
                            
                                    <div className="reaction-option text-tooltip-tft" data-title="Happy">
                                        <img className="reaction-option-image" src="img/reaction/happy.png" alt="reaction-happy"/>
                                    </div>
                            
                                    <div className="reaction-option text-tooltip-tft" data-title="Funny">
                                        <img className="reaction-option-image" src="img/reaction/funny.png" alt="reaction-funny"/>
                                    </div>
                            
                                    <div className="reaction-option text-tooltip-tft" data-title="Wow">
                                        <img className="reaction-option-image" src="img/reaction/wow.png" alt="reaction-wow"/>
                                    </div>
                            
                                    <div className="reaction-option text-tooltip-tft" data-title="Angry">
                                        <img className="reaction-option-image" src="img/reaction/angry.png" alt="reaction-angry"/>
                                    </div>
                            
                                    <div className="reaction-option text-tooltip-tft" data-title="Sad">
                                        <img className="reaction-option-image" src="img/reaction/sad.png" alt="reaction-sad"/>
                                    </div>
                                    </div>
                                </div>
                        
                                <div className="meta-line">
                                    <p className="meta-line-link light">Reply</p>
                                </div>
                        
                                <div className="meta-line">
                                    <p className="meta-line-timestamp">15 minutes ago</p>
                                </div>
                        
                                <div className="meta-line settings">
                                    <div className="post-settings-wrap">
                                    <div className="post-settings post-settings-dropdown-trigger">
                                        <svg className="post-settings-icon icon-more-dots">
                                        <use xlinkHref="#svg-more-dots"></use>
                                        </svg>
                                    </div>
                        
                                    <div className="simple-dropdown post-settings-dropdown">
                                        <p className="simple-dropdown-link">Report Post</p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        
                            <div className="post-comment-form">
                                <div className="user-avatar small no-outline">
                                <div className="user-avatar-content">
                                    <div className="hexagon-image-30-32" data-src="img/avatar/01.jpg"></div>
                                </div>
                            
                                <div className="user-avatar-progress">
                                    <div className="hexagon-progress-40-44"></div>
                                </div>
                            
                                <div className="user-avatar-progress-border">
                                    <div className="hexagon-border-40-44"></div>
                                </div>
                            
                                <div className="user-avatar-badge">
                                    <div className="user-avatar-badge-border">
                                    <div className="hexagon-22-24"></div>
                                    </div>
                            
                                    <div className="user-avatar-badge-content">
                                    <div className="hexagon-dark-16-18"></div>
                                    </div>
                            
                                    <p className="user-avatar-badge-text">24</p>
                                </div>
                                </div>
                        
                                <form className="form">
                                <div className="form-row">
                                    <div className="form-item">
                                    <div className="form-input small">
                                        <label for="post-reply-1">Your Reply</label>
                                        <input type="text" id="post-reply-1" name="post_reply_1"/>
                                    </div>
                                    </div>
                                </div>
                                </form>
                            </div>
                            </div>
                
                            <div className="post-comment">
                            <a className="user-avatar small no-outline" href="profile-timeline">
                                <div className="user-avatar-content">
                                <div className="hexagon-image-30-32" data-src="img/avatar/05.jpg"></div>
                                </div>
                            
                                <div className="user-avatar-progress">
                                <div className="hexagon-progress-40-44"></div>
                                </div>
                            
                                <div className="user-avatar-progress-border">
                                <div className="hexagon-border-40-44"></div>
                                </div>
                            
                                <div className="user-avatar-badge">
                                <div className="user-avatar-badge-border">
                                    <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-badge-content">
                                    <div className="hexagon-dark-16-18"></div>
                                </div>
                            
                                <p className="user-avatar-badge-text">12</p>
                                </div>
                            </a>
                        
                            <p className="post-comment-text user-tag purchased"><a className="post-comment-text-author" href="profile-timeline">Neko Bebop</a></p>
                        
                            <p className="post-comment-text">Thanks for this great template! I’m already using it and it’s really awesome ;)</p>
                        
                            <div className="content-actions">
                                <div className="content-action">
                                <div className="meta-line">
                                    <p className="meta-line-link light reaction-options-small-dropdown-trigger">React!</p>
                        
                                    <div className="reaction-options small reaction-options-small-dropdown">
                                    <div className="reaction-option text-tooltip-tft" data-title="Like">
                                        <img className="reaction-option-image" src="img/reaction/like.png" alt="reaction-like"/>
                                    </div>
                            
                                    <div className="reaction-option text-tooltip-tft" data-title="Love">
                                        <img className="reaction-option-image" src="img/reaction/love.png" alt="reaction-love"/>
                                    </div>
                            
                                    <div className="reaction-option text-tooltip-tft" data-title="Dislike">
                                        <img className="reaction-option-image" src="img/reaction/dislike.png" alt="reaction-dislike"/>
                                    </div>
                            
                                    <div className="reaction-option text-tooltip-tft" data-title="Happy">
                                        <img className="reaction-option-image" src="img/reaction/happy.png" alt="reaction-happy"/>
                                    </div>
                            
                                    <div className="reaction-option text-tooltip-tft" data-title="Funny">
                                        <img className="reaction-option-image" src="img/reaction/funny.png" alt="reaction-funny"/>
                                    </div>
                            
                                    <div className="reaction-option text-tooltip-tft" data-title="Wow">
                                        <img className="reaction-option-image" src="img/reaction/wow.png" alt="reaction-wow"/>
                                    </div>
                            
                                    <div className="reaction-option text-tooltip-tft" data-title="Angry">
                                        <img className="reaction-option-image" src="img/reaction/angry.png" alt="reaction-angry"/>
                                    </div>
                            
                                    <div className="reaction-option text-tooltip-tft" data-title="Sad">
                                        <img className="reaction-option-image" src="img/reaction/sad.png" alt="reaction-sad"/>
                                    </div>
                                    </div>
                                </div>
                        
                                <div className="meta-line">
                                    <p className="meta-line-link light">Reply</p>
                                </div>
                        
                                <div className="meta-line">
                                    <p className="meta-line-timestamp">15 minutes ago</p>
                                </div>
                        
                                <div className="meta-line settings">
                                    <div className="post-settings-wrap">
                                    <div className="post-settings post-settings-dropdown-trigger">
                                        <svg className="post-settings-icon icon-more-dots">
                                        <use xlinkHref="#svg-more-dots"></use>
                                        </svg>
                                    </div>
                        
                                    <div className="simple-dropdown post-settings-dropdown">
                                        <p className="simple-dropdown-link">Report Post</p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                
                            <div className="post-comment-form with-title">
                            <p className="post-comment-form-title">Leave a Comment</p>
                        
                            <div className="user-avatar small no-outline">
                                <div className="user-avatar-content">
                                <div className="hexagon-image-30-32" data-src="img/avatar/01.jpg"></div>
                                </div>
                            
                                <div className="user-avatar-progress">
                                <div className="hexagon-progress-40-44"></div>
                                </div>
                            
                                <div className="user-avatar-progress-border">
                                <div className="hexagon-border-40-44"></div>
                                </div>
                            
                                <div className="user-avatar-badge">
                                <div className="user-avatar-badge-border">
                                    <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-badge-content">
                                    <div className="hexagon-dark-16-18"></div>
                                </div>
                            
                                <p className="user-avatar-badge-text">24</p>
                                </div>
                            </div>
                        
                            <form className="form">
                                <div className="form-row">
                                <div className="form-item">
                                    <div className="form-input small">
                                    <label for="post-reply-2">Your Reply</label>
                                    <textarea id="post-reply-2" name="post_reply_2"></textarea>
                                    </div>
                                </div>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                
                        <div className="tab-box-item">
                        <div className="post-comment-list no-border-top">
                            <div className="post-comment">
                            <a className="user-avatar small no-outline" href="profile-timeline">
                                <div className="user-avatar-content">
                                <div className="hexagon-image-30-32" data-src="img/avatar/03.jpg"></div>
                                </div>
                            
                                <div className="user-avatar-progress">
                                <div className="hexagon-progress-40-44"></div>
                                </div>
                            
                                <div className="user-avatar-progress-border">
                                <div className="hexagon-border-40-44"></div>
                                </div>
                            
                                <div className="user-avatar-badge">
                                <div className="user-avatar-badge-border">
                                    <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-badge-content">
                                    <div className="hexagon-dark-16-18"></div>
                                </div>
                            
                                <p className="user-avatar-badge-text">16</p>
                                </div>
                            </a>
                        
                            <div className="post-comment-text-wrap">
                                <div className="rating-list medium">
                                <div className="rating medium filled">
                                    <svg className="rating-icon medium icon-star">
                                    <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                        
                                <div className="rating medium filled">
                                    <svg className="rating-icon medium icon-star">
                                    <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                        
                                <div className="rating medium filled">
                                    <svg className="rating-icon medium icon-star">
                                    <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                        
                                <div className="rating medium filled">
                                    <svg className="rating-icon medium icon-star">
                                    <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                        
                                <div className="rating medium">
                                    <svg className="rating-icon medium icon-star">
                                    <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                                </div>
                        
                                <p className="post-comment-text"><span className="bold">Reason:</span> <span className="highlighted">Item Quality</span></p>
                            </div>
                        
                            <p className="post-comment-text">Main reason would pretty much be all, nice clean code, easy to customise and work with. Commenting on each section is great, could not really ask for anything better. Top work!</p>
                        
                            <div className="content-actions">
                                <div className="content-action">
                                <div className="meta-line">
                                    <p className="meta-line-text"><a href="profile-timeline">Nick Grissom</a></p>
                                </div>
                        
                                <div className="meta-line">
                                    <p className="meta-line-timestamp">15 minutes ago</p>
                                </div>
                        
                                <div className="meta-line settings">
                                    <div className="post-settings-wrap">
                                    <div className="post-settings post-settings-dropdown-trigger">
                                        <svg className="post-settings-icon icon-more-dots">
                                        <use xlinkHref="#svg-more-dots"></use>
                                        </svg>
                                    </div>
                        
                                    <div className="simple-dropdown post-settings-dropdown">
                                        <p className="simple-dropdown-link">Report Review</p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                
                            <div className="post-comment">
                            <a className="user-avatar small no-outline" href="profile-timeline">
                                <div className="user-avatar-content">
                                <div className="hexagon-image-30-32" data-src="img/avatar/04.jpg"></div>
                                </div>
                            
                                <div className="user-avatar-progress">
                                <div className="hexagon-progress-40-44"></div>
                                </div>
                            
                                <div className="user-avatar-progress-border">
                                <div className="hexagon-border-40-44"></div>
                                </div>
                            
                                <div className="user-avatar-badge">
                                <div className="user-avatar-badge-border">
                                    <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-badge-content">
                                    <div className="hexagon-dark-16-18"></div>
                                </div>
                            
                                <p className="user-avatar-badge-text">6</p>
                                </div>
                            </a>
                        
                            <div className="post-comment-text-wrap">
                                <div className="rating-list medium">
                                <div className="rating medium filled">
                                    <svg className="rating-icon medium icon-star">
                                    <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                        
                                <div className="rating medium filled">
                                    <svg className="rating-icon medium icon-star">
                                    <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                        
                                <div className="rating medium filled">
                                    <svg className="rating-icon medium icon-star">
                                    <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                        
                                <div className="rating medium filled">
                                    <svg className="rating-icon medium icon-star">
                                    <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                        
                                <div className="rating medium">
                                    <svg className="rating-icon medium icon-star">
                                    <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                                </div>
                        
                                <p className="post-comment-text"><span className="bold">Reason:</span> <span className="highlighted">Documentation</span></p>
                            </div>
                        
                            <p className="post-comment-text">Best template I have ever had. Good documentation and code practices.</p>
                        
                            <div className="content-actions">
                                <div className="content-action">
                                <div className="meta-line">
                                    <p className="meta-line-text"><a href="profile-timeline">Bearded Wonder</a></p>
                                </div>
                        
                                <div className="meta-line">
                                    <p className="meta-line-timestamp">2 days ago</p>
                                </div>
                        
                                <div className="meta-line settings">
                                    <div className="post-settings-wrap">
                                    <div className="post-settings post-settings-dropdown-trigger">
                                        <svg className="post-settings-icon icon-more-dots">
                                        <use xlinkHref="#svg-more-dots"></use>
                                        </svg>
                                    </div>
                        
                                    <div className="simple-dropdown post-settings-dropdown">
                                        <p className="simple-dropdown-link">Report Review</p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                
                            <div className="post-comment">
                            <a className="user-avatar small no-outline" href="profile-timeline">
                                <div className="user-avatar-content">
                                <div className="hexagon-image-30-32" data-src="img/avatar/07.jpg"></div>
                                </div>
                            
                                <div className="user-avatar-progress">
                                <div className="hexagon-progress-40-44"></div>
                                </div>
                            
                                <div className="user-avatar-progress-border">
                                <div className="hexagon-border-40-44"></div>
                                </div>
                            
                                <div className="user-avatar-badge">
                                <div className="user-avatar-badge-border">
                                    <div className="hexagon-22-24"></div>
                                </div>
                            
                                <div className="user-avatar-badge-content">
                                    <div className="hexagon-dark-16-18"></div>
                                </div>
                            
                                <p className="user-avatar-badge-text">26</p>
                                </div>
                            </a>
                        
                            <div className="post-comment-text-wrap">
                                <div className="rating-list medium">
                                <div className="rating medium filled">
                                    <svg className="rating-icon medium icon-star">
                                    <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                        
                                <div className="rating medium filled">
                                    <svg className="rating-icon medium icon-star">
                                    <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                        
                                <div className="rating medium filled">
                                    <svg className="rating-icon medium icon-star">
                                    <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                        
                                <div className="rating medium filled">
                                    <svg className="rating-icon medium icon-star">
                                    <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                        
                                <div className="rating medium filled">
                                    <svg className="rating-icon medium icon-star">
                                    <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                                </div>
                        
                                <p className="post-comment-text"><span className="bold">Reason:</span> <span className="highlighted">Item Quality</span></p>
                            </div>
                        
                            <p className="post-comment-text">5 stars for exceptional Customer Support (quick, precise, detailed responses to questions), but 5 stars also for Design Quality and Customization. It is a beautiful clean design that can easily be customized to your needs. I had really specific questions and I received detailed solutions very promptly. Thank you!</p>
                        
                            <div className="content-actions">
                                <div className="content-action">
                                <div className="meta-line">
                                    <p className="meta-line-text"><a href="profile-timeline">Sarah Diamond</a></p>
                                </div>
                        
                                <div className="meta-line">
                                    <p className="meta-line-timestamp">4 weeks ago</p>
                                </div>
                        
                                <div className="meta-line settings">
                                    <div className="post-settings-wrap">
                                    <div className="post-settings post-settings-dropdown-trigger">
                                        <svg className="post-settings-icon icon-more-dots">
                                        <use xlinkHref="#svg-more-dots"></use>
                                        </svg>
                                    </div>
                        
                                    <div className="simple-dropdown post-settings-dropdown">
                                        <p className="simple-dropdown-link">Report Review</p>
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

                <div className="marketplace-sidebar">
                    <div className="sidebar-box">
                    <div className="sidebar-box-items">
                        <p className="price-title big"><span className="currency">$</span> 26.00</p>
                
                        <form className="form">
                        <div className="checkbox-wrap">
                            <input type="radio" id="license-regular" name="license_type" value="license-regular" checked/>
                            <div className="checkbox-box">
                            <svg className="icon-cross">
                                <use xlinkHref="#svg-cross"></use>
                            </svg>
                            </div>
                            <label className="accordion-trigger-linked" for="license-regular">Regular License</label>
                
                            <div className="checkbox-info accordion-content-linked accordion-open">
                            <p className="checkbox-info-text">For use, by you or one client, in a single end product which end users are not charged for. <a href="#">View Details</a></p>
                            </div>
                        </div>
                
                        <div className="checkbox-wrap">
                            <input type="radio" id="license-extended" name="license_type" value="license-extended"/>
                            <div className="checkbox-box">
                            <svg className="icon-cross">
                                <use xlinkHref="#svg-cross"></use>
                            </svg>
                            </div>
                            <label className="accordion-trigger-linked" for="license-extended">Extended License</label>
                
                            <div className="checkbox-info accordion-content-linked">
                            <p className="checkbox-info-text">For use, by you or one client, in a single end product which end users can be charged for. <a href="#">View Details</a></p>
                            </div>
                        </div>
                        </form>
                
                        <p className="button primary">Add to Your Cart!</p>
                
                        <div className="user-stats">
                        <div className="user-stat big">
                            <p className="user-stat-title">1.360</p>
                    
                            <p className="user-stat-text">sales</p>
                        </div>
                    
                        <div className="user-stat big">
                            <p className="user-stat-title">4.2/5</p>
                    
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
                
                    <p className="sidebar-box-title medium-space">Item Author</p>
                
                    <div className="sidebar-box-items">
                        <div className="user-status">
                        <a className="user-status-avatar" href="profile-timeline">
                            <div className="user-avatar small no-outline">
                            <div className="user-avatar-content">
                                <div className="hexagon-image-30-32" data-src="img/avatar/01.jpg"></div>
                            </div>
                        
                            <div className="user-avatar-progress">
                                <div className="hexagon-progress-40-44"></div>
                            </div>
                        
                            <div className="user-avatar-progress-border">
                                <div className="hexagon-border-40-44"></div>
                            </div>
                        
                            <div className="user-avatar-badge">
                                <div className="user-avatar-badge-border">
                                <div className="hexagon-22-24"></div>
                                </div>
                        
                                <div className="user-avatar-badge-content">
                                <div className="hexagon-dark-16-18"></div>
                                </div>
                        
                                <p className="user-avatar-badge-text">24</p>
                            </div>
                            </div>
                        </a>
                
                        <p className="user-status-title"><a className="bold" href="profile-timeline">Marina Valentine</a></p>
                
                        <p className="user-status-text small">5 items published</p>
                        </div>
                
                        <div className="badge-list small align-left">
                        <div className="badge-item text-tooltip-tft" data-title="Gold User">
                            <img src="img/badge/gold-s.png" alt="badge-gold-s"/>
                        </div>
                
                        <div className="badge-item text-tooltip-tft" data-title="Profile Age">
                            <img src="img/badge/age-s.png" alt="badge-age-s"/>
                        </div>
                
                        <div className="badge-item text-tooltip-tft" data-title="Caffeinated">
                            <img src="img/badge/caffeinated-s.png" alt="badge-caffeinated-s"/>
                        </div>
                
                        <div className="badge-item text-tooltip-tft" data-title="The Warrior">
                            <img src="img/badge/warrior-s.png" alt="badge-warrior-s"/>
                        </div>
                
                        <a className="badge-item" href="profile-badges">
                            <img src="img/badge/blank-s.png" alt="badge-blank-s"/>
                            <p className="badge-item-text">+9</p>
                        </a>
                        </div>
                
                        <a className="button small white" href="profile-store">View Author's Store</a>
                    </div>
                
                    <p className="sidebar-box-title medium-space">Item Details</p>
                
                    <div className="sidebar-box-items">
                        <div className="information-line-list">
                        <div className="information-line">
                            <p className="information-line-title">Updated</p>
                
                            <p className="information-line-text"><span className="bold">October 13rd, 2019</span></p>
                        </div>
                
                        <div className="information-line">
                            <p className="information-line-title">Created</p>
                
                            <p className="information-line-text"><span className="bold">August 17th, 2019</span></p>
                        </div>
                
                        <div className="information-line">
                            <p className="information-line-title">Category</p>
                
                            <p className="information-line-text"><a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-category')}}>HTML Templates</a></p>
                        </div>
                
                        <div className="information-line">
                            <p className="information-line-title">Files<br/>Included</p>
                
                            <p className="information-line-text"><span className="bold">HTML Files, CSS Files, JS Files, Layered PSD</span></p>
                        </div>
                
                        <div className="information-line">
                            <p className="information-line-title">Layout</p>
                
                            <p className="information-line-text"><span className="bold">Responsive</span></p>
                        </div>
                
                        <div className="information-line">
                            <p className="information-line-title">Tags</p>
                
                            <p className="information-line-text"><span className="bold"><a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-category')}}>Gaming</a>, <a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-category')}}>Magazine</a>, <a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-category')}}>Web</a>, <a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-category')}}>eSports</a>, <a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-category')}}>Template</a></span></p>
                        </div>
                        </div>
                    </div>
                
                    <p className="sidebar-box-title medium-space">Item Share</p>
                
                    <div className="sidebar-box-items">
                        <div className="social-links small align-left">
                        <a className="social-link small facebook" href="#">
                            <svg className="social-link-icon icon-facebook">
                            <use xlinkHref="#svg-facebook"></use>
                            </svg>
                        </a>
                
                        <a className="social-link small twitter" href="#">
                            <svg className="social-link-icon icon-twitter">
                            <use xlinkHref="#svg-twitter"></use>
                            </svg>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MarketPlaceProduct