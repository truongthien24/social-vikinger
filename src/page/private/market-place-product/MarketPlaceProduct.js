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
        <div class="content-grid">
            <div class="section-banner">
                <img class="section-banner-icon" src="img/banner/marketplace-icon.png" alt="marketplace-icon"/>
        
                <p class="section-banner-title">Marketplace</p>
            
                <p class="section-banner-text">The best place for the community to buy and sell!</p>
            </div>

            <div class="section-header">
            <div class="section-header-info">
                <p class="section-pretitle">HTML Templates</p>
        
                <h2 class="section-title">Pixel Diamond Gaming Magazine</h2>
            </div>

            <div class="section-header-actions">
                <a class="section-header-subsection" onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace')}}>Marketplace</a>

                <a class="section-header-subsection" onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-category')}}>Digital Items</a>
        
                <p class="section-header-subsection">Pixel Diamond Gaming Magazine</p>
            </div>
            </div>

            <div class="grid grid-9-3">
                <div class="marketplace-content grid-column">
                    <div class="slider-panel">
                    <div id="product-box-slider-items" class="slider-panel-slides">
                        <div class="slider-panel-slide">
                            <figure class="slider-panel-slide-image liquid">
                                <img src="img/marketplace/items/10.jpg" alt="item-10"/>
                            </figure>
                        </div>

                        <div class="slider-panel-slide">
                            <figure class="slider-panel-slide-image liquid">
                                <img src="img/marketplace/items/15.jpg" alt="item-15"/>
                            </figure>
                        </div>

                        <div class="slider-panel-slide">
                            <figure class="slider-panel-slide-image liquid">
                                <img src="img/marketplace/items/16.jpg" alt="item-16"/>
                            </figure>
                        </div>

                        <div class="slider-panel-slide">
                            <figure class="slider-panel-slide-image liquid">
                                <img src="img/marketplace/items/17.jpg" alt="item-17"/>
                            </figure>
                        </div>

                        <div class="slider-panel-slide">
                            <figure class="slider-panel-slide-image liquid">
                                <img src="img/marketplace/items/18.jpg" alt="item-18"/>
                            </figure>
                        </div>

                        <div class="slider-panel-slide">
                            <figure class="slider-panel-slide-image liquid">
                                <img src="img/marketplace/items/19.jpg" alt="item-19"/>
                            </figure>
                        </div>

                        <div class="slider-panel-slide">
                            <figure class="slider-panel-slide-image liquid">
                                <img src="img/marketplace/items/20.jpg" alt="item-20"/>
                            </figure>
                        </div>
                    </div>

                    <div class="slider-panel-roster">
                        <div id="product-box-slider-controls" class="slider-controls">
                        <div class="slider-control left">
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

                        <a class="button secondary" href="https://themeforest.net/item/pixel-diamond-html-esports-gaming-magazine-community/23798711" target="_blank">Live Preview</a>

                        <div id="product-box-slider-roster" class="roster-pictures">
                        <div class="roster-picture">
                            <figure class="roster-picture-image liquid">
                            <img src="img/marketplace/items/10.jpg" alt="item-10"/>
                            </figure>
                        </div>

                        <div class="roster-picture">
                            <figure class="roster-picture-image liquid">
                            <img src="img/marketplace/items/15.jpg" alt="item-15"/>
                            </figure>
                        </div>

                        <div class="roster-picture">
                            <figure class="roster-picture-image liquid">
                            <img src="img/marketplace/items/16.jpg" alt="item-16"/>
                            </figure>
                        </div>

                        <div class="roster-picture">
                            <figure class="roster-picture-image liquid">
                            <img src="img/marketplace/items/17.jpg" alt="item-17"/>
                            </figure>
                        </div>

                        <div class="roster-picture">
                            <figure class="roster-picture-image liquid">
                            <img src="img/marketplace/items/18.jpg" alt="item-18"/>
                            </figure>
                        </div>

                        <div class="roster-picture">
                            <figure class="roster-picture-image liquid">
                            <img src="img/marketplace/items/19.jpg" alt="item-19"/>
                            </figure>
                        </div>

                        <div class="roster-picture">
                            <figure class="roster-picture-image liquid">
                            <img src="img/marketplace/items/20.jpg" alt="item-20"/>
                            </figure>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div class="tab-box">
                    <div class="tab-box-options">
                        <div class="tab-box-option">
                        <p class="tab-box-option-title">Description</p>
                        </div>
                
                        <div class="tab-box-option">
                        <p class="tab-box-option-title">Comments <span class="highlighted">4</span></p>
                        </div>
                
                        <div class="tab-box-option">
                        <p class="tab-box-option-title">Reviews <span class="highlighted">3</span></p>
                        </div>
                    </div>
                
                    <div class="tab-box-items">
                        <div class="tab-box-item">
                        <div class="tab-box-item-content">
                            <p class="tab-box-item-title">The Best eSports and Gaming Magazine Template!</p>
                
                            <p class="tab-box-item-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
                
                            <p class="tab-box-item-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                
                            <p class="tab-box-item-title">356+ HTML Elements Library included</p>
                
                            <p class="tab-box-item-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                
                            <p class="tab-box-item-title">Included in the Pack:</p>
                
                            <ul class="bullet-item-list">
                            <li class="bullet-item">
                                <svg class="bullet-item-icon icon-check">
                                <use xlinkHref="#svg-check"></use>
                                </svg>
                
                                <p class="bullet-item-text">64 HTML Files</p>
                            </li>
                
                            <li class="bullet-item">
                                <svg class="bullet-item-icon icon-check">
                                <use xlinkHref="#svg-check"></use>
                                </svg>
                
                                <p class="bullet-item-text">CSS and JS Elements Library with 365+ Items!</p>
                            </li>
                
                            <li class="bullet-item">
                                <svg class="bullet-item-icon icon-check">
                                <use xlinkHref="#svg-check"></use>
                                </svg>
                
                                <p class="bullet-item-text">63 PSD Files Included SAVE $12</p>
                            </li>
                
                            <li class="bullet-item">
                                <svg class="bullet-item-icon icon-check">
                                <use xlinkHref="#svg-check"></use>
                                </svg>
                
                                <p class="bullet-item-text">Easy template customization using npm & grunt (optional)</p>
                            </li>
                
                            <li class="bullet-item">
                                <svg class="bullet-item-icon icon-check">
                                <use xlinkHref="#svg-check"></use>
                                </svg>
                
                                <p class="bullet-item-text">Vector Illustrations Included</p>
                            </li>
                
                            <li class="bullet-item">
                                <svg class="bullet-item-icon icon-check">
                                <use xlinkHref="#svg-check"></use>
                                </svg>
                
                                <p class="bullet-item-text">84+ eSports Widgets</p>
                            </li>
                
                            <li class="bullet-item">
                                <svg class="bullet-item-icon icon-check">
                                <use xlinkHref="#svg-check"></use>
                                </svg>
                
                                <p class="bullet-item-text">Custom Plugins</p>
                            </li>
                
                            <li class="bullet-item">
                                <svg class="bullet-item-icon icon-check">
                                <use xlinkHref="#svg-check"></use>
                                </svg>
                
                                <p class="bullet-item-text">Fully Responsive</p>
                            </li>
                
                            <li class="bullet-item">
                                <svg class="bullet-item-icon icon-check">
                                <use xlinkHref="#svg-check"></use>
                                </svg>
                
                                <p class="bullet-item-text">Google Fonts</p>
                            </li>
                            </ul>
                        </div>
                        </div>
                
                        <div class="tab-box-item">
                        <div class="post-comment-list no-border-top">
                            <div class="post-comment">
                            <a class="user-avatar small no-outline" href="profile-timeline">
                                <div class="user-avatar-content">
                                <div class="hexagon-image-30-32" data-src="img/avatar/04.jpg"></div>
                                </div>
                            
                                <div class="user-avatar-progress">
                                <div class="hexagon-progress-40-44"></div>
                                </div>
                            
                                <div class="user-avatar-progress-border">
                                <div class="hexagon-border-40-44"></div>
                                </div>
                            
                                <div class="user-avatar-badge">
                                <div class="user-avatar-badge-border">
                                    <div class="hexagon-22-24"></div>
                                </div>
                            
                                <div class="user-avatar-badge-content">
                                    <div class="hexagon-dark-16-18"></div>
                                </div>
                            
                                <p class="user-avatar-badge-text">6</p>
                                </div>
                            </a>
                        
                            <p class="post-comment-text user-tag purchased"><a class="post-comment-text-author" href="profile-timeline">Bearded Wonder</a></p>
                        
                            <p class="post-comment-text">Hi! I just purchased this item and I have a question, does it have the PSD files included? Thanks!</p>
                        
                            <div class="content-actions">
                                <div class="content-action">
                                <div class="meta-line">
                                    <div class="meta-line-list reaction-item-list small">
                                    <div class="reaction-item">
                                        <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/happy.png" alt="reaction-happy"/>
                            
                                        <div class="simple-dropdown padded reaction-item-dropdown">
                                        <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/happy.png" alt="reaction-happy"/> <span class="bold">Happy</span></p>
                        
                                        <p class="simple-dropdown-text">Marcus Jhonson</p>
                                        </div>
                                    </div>
                            
                                    <div class="reaction-item">
                                        <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/like.png" alt="reaction-like"/>
                            
                                        <div class="simple-dropdown padded reaction-item-dropdown">
                                        <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/like.png" alt="reaction-like"/> <span class="bold">Like</span></p>
                                        
                                        <p class="simple-dropdown-text">Neko Bebop</p>
                            
                                        <p class="simple-dropdown-text">Nick Grissom</p>
                            
                                        <p class="simple-dropdown-text">Sarah Diamond</p>
                                        </div>
                                    </div>
                                    </div>
                            
                                    <p class="meta-line-text">4</p>
                                </div>
                        
                                <div class="meta-line">
                                    <p class="meta-line-link light reaction-options-small-dropdown-trigger">React!</p>
                        
                                    <div class="reaction-options small reaction-options-small-dropdown">
                                    <div class="reaction-option text-tooltip-tft" data-title="Like">
                                        <img class="reaction-option-image" src="img/reaction/like.png" alt="reaction-like"/>
                                    </div>
                            
                                    <div class="reaction-option text-tooltip-tft" data-title="Love">
                                        <img class="reaction-option-image" src="img/reaction/love.png" alt="reaction-love"/>
                                    </div>
                            
                                    <div class="reaction-option text-tooltip-tft" data-title="Dislike">
                                        <img class="reaction-option-image" src="img/reaction/dislike.png" alt="reaction-dislike"/>
                                    </div>
                            
                                    <div class="reaction-option text-tooltip-tft" data-title="Happy">
                                        <img class="reaction-option-image" src="img/reaction/happy.png" alt="reaction-happy"/>
                                    </div>
                            
                                    <div class="reaction-option text-tooltip-tft" data-title="Funny">
                                        <img class="reaction-option-image" src="img/reaction/funny.png" alt="reaction-funny"/>
                                    </div>
                            
                                    <div class="reaction-option text-tooltip-tft" data-title="Wow">
                                        <img class="reaction-option-image" src="img/reaction/wow.png" alt="reaction-wow"/>
                                    </div>
                            
                                    <div class="reaction-option text-tooltip-tft" data-title="Angry">
                                        <img class="reaction-option-image" src="img/reaction/angry.png" alt="reaction-angry"/>
                                    </div>
                            
                                    <div class="reaction-option text-tooltip-tft" data-title="Sad">
                                        <img class="reaction-option-image" src="img/reaction/sad.png" alt="reaction-sad"/>
                                    </div>
                                    </div>
                                </div>
                        
                                <div class="meta-line">
                                    <p class="meta-line-link light">Reply</p>
                                </div>
                        
                                <div class="meta-line">
                                    <p class="meta-line-timestamp">15 minutes ago</p>
                                </div>
                        
                                <div class="meta-line settings">
                                    <div class="post-settings-wrap">
                                    <div class="post-settings post-settings-dropdown-trigger">
                                        <svg class="post-settings-icon icon-more-dots">
                                        <use xlinkHref="#svg-more-dots"></use>
                                        </svg>
                                    </div>
                        
                                    <div class="simple-dropdown post-settings-dropdown">
                                        <p class="simple-dropdown-link">Report Post</p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                
                            <div class="post-comment unread reply-2">
                            <a class="user-avatar small no-outline" href="profile-timeline">
                                <div class="user-avatar-content">
                                <div class="hexagon-image-30-32" data-src="img/avatar/01.jpg"></div>
                                </div>
                            
                                <div class="user-avatar-progress">
                                <div class="hexagon-progress-40-44"></div>
                                </div>
                            
                                <div class="user-avatar-progress-border">
                                <div class="hexagon-border-40-44"></div>
                                </div>
                            
                                <div class="user-avatar-badge">
                                <div class="user-avatar-badge-border">
                                    <div class="hexagon-22-24"></div>
                                </div>
                            
                                <div class="user-avatar-badge-content">
                                    <div class="hexagon-dark-16-18"></div>
                                </div>
                            
                                <p class="user-avatar-badge-text">24</p>
                                </div>
                            </a>
                        
                            <p class="post-comment-text user-tag author"><a class="post-comment-text-author" href="profile-timeline">Marina Valentine</a></p>
                        
                            <p class="post-comment-text">Yes! They are all included in the pack!</p>
                        
                            <div class="content-actions">
                                <div class="content-action">
                                <div class="meta-line">
                                    <div class="meta-line-list reaction-item-list small">
                                    <div class="reaction-item">
                                        <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/like.png" alt="reaction-like"/>
                            
                                        <div class="simple-dropdown padded reaction-item-dropdown">
                                        <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/like.png" alt="reaction-like"/> <span class="bold">Like</span></p>
                                        
                                        <p class="simple-dropdown-text">Bearded Wonder</p>
                                        </div>
                                    </div>
                                    </div>
                            
                                    <p class="meta-line-text">1</p>
                                </div>
                        
                                <div class="meta-line">
                                    <p class="meta-line-link light reaction-options-small-dropdown-trigger">React!</p>
                        
                                    <div class="reaction-options small reaction-options-small-dropdown">
                                    <div class="reaction-option text-tooltip-tft" data-title="Like">
                                        <img class="reaction-option-image" src="img/reaction/like.png" alt="reaction-like"/>
                                    </div>
                            
                                    <div class="reaction-option text-tooltip-tft" data-title="Love">
                                        <img class="reaction-option-image" src="img/reaction/love.png" alt="reaction-love"/>
                                    </div>
                            
                                    <div class="reaction-option text-tooltip-tft" data-title="Dislike">
                                        <img class="reaction-option-image" src="img/reaction/dislike.png" alt="reaction-dislike"/>
                                    </div>
                            
                                    <div class="reaction-option text-tooltip-tft" data-title="Happy">
                                        <img class="reaction-option-image" src="img/reaction/happy.png" alt="reaction-happy"/>
                                    </div>
                            
                                    <div class="reaction-option text-tooltip-tft" data-title="Funny">
                                        <img class="reaction-option-image" src="img/reaction/funny.png" alt="reaction-funny"/>
                                    </div>
                            
                                    <div class="reaction-option text-tooltip-tft" data-title="Wow">
                                        <img class="reaction-option-image" src="img/reaction/wow.png" alt="reaction-wow"/>
                                    </div>
                            
                                    <div class="reaction-option text-tooltip-tft" data-title="Angry">
                                        <img class="reaction-option-image" src="img/reaction/angry.png" alt="reaction-angry"/>
                                    </div>
                            
                                    <div class="reaction-option text-tooltip-tft" data-title="Sad">
                                        <img class="reaction-option-image" src="img/reaction/sad.png" alt="reaction-sad"/>
                                    </div>
                                    </div>
                                </div>
                        
                                <div class="meta-line">
                                    <p class="meta-line-link light">Reply</p>
                                </div>
                        
                                <div class="meta-line">
                                    <p class="meta-line-timestamp">15 minutes ago</p>
                                </div>
                        
                                <div class="meta-line settings">
                                    <div class="post-settings-wrap">
                                    <div class="post-settings post-settings-dropdown-trigger">
                                        <svg class="post-settings-icon icon-more-dots">
                                        <use xlinkHref="#svg-more-dots"></use>
                                        </svg>
                                    </div>
                        
                                    <div class="simple-dropdown post-settings-dropdown">
                                        <p class="simple-dropdown-link">Report Post</p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                
                            <div class="post-comment">
                            <a class="user-avatar small no-outline" href="profile-timeline">
                                <div class="user-avatar-content">
                                <div class="hexagon-image-30-32" data-src="img/avatar/03.jpg"></div>
                                </div>
                            
                                <div class="user-avatar-progress">
                                <div class="hexagon-progress-40-44"></div>
                                </div>
                            
                                <div class="user-avatar-progress-border">
                                <div class="hexagon-border-40-44"></div>
                                </div>
                            
                                <div class="user-avatar-badge">
                                <div class="user-avatar-badge-border">
                                    <div class="hexagon-22-24"></div>
                                </div>
                            
                                <div class="user-avatar-badge-content">
                                    <div class="hexagon-dark-16-18"></div>
                                </div>
                            
                                <p class="user-avatar-badge-text">16</p>
                                </div>
                            </a>
                        
                            <p class="post-comment-text"><a class="post-comment-text-author" href="profile-timeline">Nick Grissom</a></p>
                        
                            <p class="post-comment-text">Hi Marina! I'm really liking what you did here! I've checked all the pages and the design is really great, plus it has lots of statistics and match overview options! Amazing job, and good luck!</p>
                        
                            <div class="content-actions">
                                <div class="content-action">
                                <div class="meta-line">
                                    <p class="meta-line-link light reaction-options-small-dropdown-trigger">React!</p>
                        
                                    <div class="reaction-options small reaction-options-small-dropdown">
                                    <div class="reaction-option text-tooltip-tft" data-title="Like">
                                        <img class="reaction-option-image" src="img/reaction/like.png" alt="reaction-like"/>
                                    </div>
                            
                                    <div class="reaction-option text-tooltip-tft" data-title="Love">
                                        <img class="reaction-option-image" src="img/reaction/love.png" alt="reaction-love"/>
                                    </div>
                            
                                    <div class="reaction-option text-tooltip-tft" data-title="Dislike">
                                        <img class="reaction-option-image" src="img/reaction/dislike.png" alt="reaction-dislike"/>
                                    </div>
                            
                                    <div class="reaction-option text-tooltip-tft" data-title="Happy">
                                        <img class="reaction-option-image" src="img/reaction/happy.png" alt="reaction-happy"/>
                                    </div>
                            
                                    <div class="reaction-option text-tooltip-tft" data-title="Funny">
                                        <img class="reaction-option-image" src="img/reaction/funny.png" alt="reaction-funny"/>
                                    </div>
                            
                                    <div class="reaction-option text-tooltip-tft" data-title="Wow">
                                        <img class="reaction-option-image" src="img/reaction/wow.png" alt="reaction-wow"/>
                                    </div>
                            
                                    <div class="reaction-option text-tooltip-tft" data-title="Angry">
                                        <img class="reaction-option-image" src="img/reaction/angry.png" alt="reaction-angry"/>
                                    </div>
                            
                                    <div class="reaction-option text-tooltip-tft" data-title="Sad">
                                        <img class="reaction-option-image" src="img/reaction/sad.png" alt="reaction-sad"/>
                                    </div>
                                    </div>
                                </div>
                        
                                <div class="meta-line">
                                    <p class="meta-line-link light">Reply</p>
                                </div>
                        
                                <div class="meta-line">
                                    <p class="meta-line-timestamp">15 minutes ago</p>
                                </div>
                        
                                <div class="meta-line settings">
                                    <div class="post-settings-wrap">
                                    <div class="post-settings post-settings-dropdown-trigger">
                                        <svg class="post-settings-icon icon-more-dots">
                                        <use xlinkHref="#svg-more-dots"></use>
                                        </svg>
                                    </div>
                        
                                    <div class="simple-dropdown post-settings-dropdown">
                                        <p class="simple-dropdown-link">Report Post</p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        
                            <div class="post-comment-form">
                                <div class="user-avatar small no-outline">
                                <div class="user-avatar-content">
                                    <div class="hexagon-image-30-32" data-src="img/avatar/01.jpg"></div>
                                </div>
                            
                                <div class="user-avatar-progress">
                                    <div class="hexagon-progress-40-44"></div>
                                </div>
                            
                                <div class="user-avatar-progress-border">
                                    <div class="hexagon-border-40-44"></div>
                                </div>
                            
                                <div class="user-avatar-badge">
                                    <div class="user-avatar-badge-border">
                                    <div class="hexagon-22-24"></div>
                                    </div>
                            
                                    <div class="user-avatar-badge-content">
                                    <div class="hexagon-dark-16-18"></div>
                                    </div>
                            
                                    <p class="user-avatar-badge-text">24</p>
                                </div>
                                </div>
                        
                                <form class="form">
                                <div class="form-row">
                                    <div class="form-item">
                                    <div class="form-input small">
                                        <label for="post-reply-1">Your Reply</label>
                                        <input type="text" id="post-reply-1" name="post_reply_1"/>
                                    </div>
                                    </div>
                                </div>
                                </form>
                            </div>
                            </div>
                
                            <div class="post-comment">
                            <a class="user-avatar small no-outline" href="profile-timeline">
                                <div class="user-avatar-content">
                                <div class="hexagon-image-30-32" data-src="img/avatar/05.jpg"></div>
                                </div>
                            
                                <div class="user-avatar-progress">
                                <div class="hexagon-progress-40-44"></div>
                                </div>
                            
                                <div class="user-avatar-progress-border">
                                <div class="hexagon-border-40-44"></div>
                                </div>
                            
                                <div class="user-avatar-badge">
                                <div class="user-avatar-badge-border">
                                    <div class="hexagon-22-24"></div>
                                </div>
                            
                                <div class="user-avatar-badge-content">
                                    <div class="hexagon-dark-16-18"></div>
                                </div>
                            
                                <p class="user-avatar-badge-text">12</p>
                                </div>
                            </a>
                        
                            <p class="post-comment-text user-tag purchased"><a class="post-comment-text-author" href="profile-timeline">Neko Bebop</a></p>
                        
                            <p class="post-comment-text">Thanks for this great template! I’m already using it and it’s really awesome ;)</p>
                        
                            <div class="content-actions">
                                <div class="content-action">
                                <div class="meta-line">
                                    <p class="meta-line-link light reaction-options-small-dropdown-trigger">React!</p>
                        
                                    <div class="reaction-options small reaction-options-small-dropdown">
                                    <div class="reaction-option text-tooltip-tft" data-title="Like">
                                        <img class="reaction-option-image" src="img/reaction/like.png" alt="reaction-like"/>
                                    </div>
                            
                                    <div class="reaction-option text-tooltip-tft" data-title="Love">
                                        <img class="reaction-option-image" src="img/reaction/love.png" alt="reaction-love"/>
                                    </div>
                            
                                    <div class="reaction-option text-tooltip-tft" data-title="Dislike">
                                        <img class="reaction-option-image" src="img/reaction/dislike.png" alt="reaction-dislike"/>
                                    </div>
                            
                                    <div class="reaction-option text-tooltip-tft" data-title="Happy">
                                        <img class="reaction-option-image" src="img/reaction/happy.png" alt="reaction-happy"/>
                                    </div>
                            
                                    <div class="reaction-option text-tooltip-tft" data-title="Funny">
                                        <img class="reaction-option-image" src="img/reaction/funny.png" alt="reaction-funny"/>
                                    </div>
                            
                                    <div class="reaction-option text-tooltip-tft" data-title="Wow">
                                        <img class="reaction-option-image" src="img/reaction/wow.png" alt="reaction-wow"/>
                                    </div>
                            
                                    <div class="reaction-option text-tooltip-tft" data-title="Angry">
                                        <img class="reaction-option-image" src="img/reaction/angry.png" alt="reaction-angry"/>
                                    </div>
                            
                                    <div class="reaction-option text-tooltip-tft" data-title="Sad">
                                        <img class="reaction-option-image" src="img/reaction/sad.png" alt="reaction-sad"/>
                                    </div>
                                    </div>
                                </div>
                        
                                <div class="meta-line">
                                    <p class="meta-line-link light">Reply</p>
                                </div>
                        
                                <div class="meta-line">
                                    <p class="meta-line-timestamp">15 minutes ago</p>
                                </div>
                        
                                <div class="meta-line settings">
                                    <div class="post-settings-wrap">
                                    <div class="post-settings post-settings-dropdown-trigger">
                                        <svg class="post-settings-icon icon-more-dots">
                                        <use xlinkHref="#svg-more-dots"></use>
                                        </svg>
                                    </div>
                        
                                    <div class="simple-dropdown post-settings-dropdown">
                                        <p class="simple-dropdown-link">Report Post</p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                
                            <div class="post-comment-form with-title">
                            <p class="post-comment-form-title">Leave a Comment</p>
                        
                            <div class="user-avatar small no-outline">
                                <div class="user-avatar-content">
                                <div class="hexagon-image-30-32" data-src="img/avatar/01.jpg"></div>
                                </div>
                            
                                <div class="user-avatar-progress">
                                <div class="hexagon-progress-40-44"></div>
                                </div>
                            
                                <div class="user-avatar-progress-border">
                                <div class="hexagon-border-40-44"></div>
                                </div>
                            
                                <div class="user-avatar-badge">
                                <div class="user-avatar-badge-border">
                                    <div class="hexagon-22-24"></div>
                                </div>
                            
                                <div class="user-avatar-badge-content">
                                    <div class="hexagon-dark-16-18"></div>
                                </div>
                            
                                <p class="user-avatar-badge-text">24</p>
                                </div>
                            </div>
                        
                            <form class="form">
                                <div class="form-row">
                                <div class="form-item">
                                    <div class="form-input small">
                                    <label for="post-reply-2">Your Reply</label>
                                    <textarea id="post-reply-2" name="post_reply_2"></textarea>
                                    </div>
                                </div>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                
                        <div class="tab-box-item">
                        <div class="post-comment-list no-border-top">
                            <div class="post-comment">
                            <a class="user-avatar small no-outline" href="profile-timeline">
                                <div class="user-avatar-content">
                                <div class="hexagon-image-30-32" data-src="img/avatar/03.jpg"></div>
                                </div>
                            
                                <div class="user-avatar-progress">
                                <div class="hexagon-progress-40-44"></div>
                                </div>
                            
                                <div class="user-avatar-progress-border">
                                <div class="hexagon-border-40-44"></div>
                                </div>
                            
                                <div class="user-avatar-badge">
                                <div class="user-avatar-badge-border">
                                    <div class="hexagon-22-24"></div>
                                </div>
                            
                                <div class="user-avatar-badge-content">
                                    <div class="hexagon-dark-16-18"></div>
                                </div>
                            
                                <p class="user-avatar-badge-text">16</p>
                                </div>
                            </a>
                        
                            <div class="post-comment-text-wrap">
                                <div class="rating-list medium">
                                <div class="rating medium filled">
                                    <svg class="rating-icon medium icon-star">
                                    <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                        
                                <div class="rating medium filled">
                                    <svg class="rating-icon medium icon-star">
                                    <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                        
                                <div class="rating medium filled">
                                    <svg class="rating-icon medium icon-star">
                                    <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                        
                                <div class="rating medium filled">
                                    <svg class="rating-icon medium icon-star">
                                    <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                        
                                <div class="rating medium">
                                    <svg class="rating-icon medium icon-star">
                                    <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                                </div>
                        
                                <p class="post-comment-text"><span class="bold">Reason:</span> <span class="highlighted">Item Quality</span></p>
                            </div>
                        
                            <p class="post-comment-text">Main reason would pretty much be all, nice clean code, easy to customise and work with. Commenting on each section is great, could not really ask for anything better. Top work!</p>
                        
                            <div class="content-actions">
                                <div class="content-action">
                                <div class="meta-line">
                                    <p class="meta-line-text"><a href="profile-timeline">Nick Grissom</a></p>
                                </div>
                        
                                <div class="meta-line">
                                    <p class="meta-line-timestamp">15 minutes ago</p>
                                </div>
                        
                                <div class="meta-line settings">
                                    <div class="post-settings-wrap">
                                    <div class="post-settings post-settings-dropdown-trigger">
                                        <svg class="post-settings-icon icon-more-dots">
                                        <use xlinkHref="#svg-more-dots"></use>
                                        </svg>
                                    </div>
                        
                                    <div class="simple-dropdown post-settings-dropdown">
                                        <p class="simple-dropdown-link">Report Review</p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                
                            <div class="post-comment">
                            <a class="user-avatar small no-outline" href="profile-timeline">
                                <div class="user-avatar-content">
                                <div class="hexagon-image-30-32" data-src="img/avatar/04.jpg"></div>
                                </div>
                            
                                <div class="user-avatar-progress">
                                <div class="hexagon-progress-40-44"></div>
                                </div>
                            
                                <div class="user-avatar-progress-border">
                                <div class="hexagon-border-40-44"></div>
                                </div>
                            
                                <div class="user-avatar-badge">
                                <div class="user-avatar-badge-border">
                                    <div class="hexagon-22-24"></div>
                                </div>
                            
                                <div class="user-avatar-badge-content">
                                    <div class="hexagon-dark-16-18"></div>
                                </div>
                            
                                <p class="user-avatar-badge-text">6</p>
                                </div>
                            </a>
                        
                            <div class="post-comment-text-wrap">
                                <div class="rating-list medium">
                                <div class="rating medium filled">
                                    <svg class="rating-icon medium icon-star">
                                    <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                        
                                <div class="rating medium filled">
                                    <svg class="rating-icon medium icon-star">
                                    <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                        
                                <div class="rating medium filled">
                                    <svg class="rating-icon medium icon-star">
                                    <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                        
                                <div class="rating medium filled">
                                    <svg class="rating-icon medium icon-star">
                                    <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                        
                                <div class="rating medium">
                                    <svg class="rating-icon medium icon-star">
                                    <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                                </div>
                        
                                <p class="post-comment-text"><span class="bold">Reason:</span> <span class="highlighted">Documentation</span></p>
                            </div>
                        
                            <p class="post-comment-text">Best template I have ever had. Good documentation and code practices.</p>
                        
                            <div class="content-actions">
                                <div class="content-action">
                                <div class="meta-line">
                                    <p class="meta-line-text"><a href="profile-timeline">Bearded Wonder</a></p>
                                </div>
                        
                                <div class="meta-line">
                                    <p class="meta-line-timestamp">2 days ago</p>
                                </div>
                        
                                <div class="meta-line settings">
                                    <div class="post-settings-wrap">
                                    <div class="post-settings post-settings-dropdown-trigger">
                                        <svg class="post-settings-icon icon-more-dots">
                                        <use xlinkHref="#svg-more-dots"></use>
                                        </svg>
                                    </div>
                        
                                    <div class="simple-dropdown post-settings-dropdown">
                                        <p class="simple-dropdown-link">Report Review</p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                
                            <div class="post-comment">
                            <a class="user-avatar small no-outline" href="profile-timeline">
                                <div class="user-avatar-content">
                                <div class="hexagon-image-30-32" data-src="img/avatar/07.jpg"></div>
                                </div>
                            
                                <div class="user-avatar-progress">
                                <div class="hexagon-progress-40-44"></div>
                                </div>
                            
                                <div class="user-avatar-progress-border">
                                <div class="hexagon-border-40-44"></div>
                                </div>
                            
                                <div class="user-avatar-badge">
                                <div class="user-avatar-badge-border">
                                    <div class="hexagon-22-24"></div>
                                </div>
                            
                                <div class="user-avatar-badge-content">
                                    <div class="hexagon-dark-16-18"></div>
                                </div>
                            
                                <p class="user-avatar-badge-text">26</p>
                                </div>
                            </a>
                        
                            <div class="post-comment-text-wrap">
                                <div class="rating-list medium">
                                <div class="rating medium filled">
                                    <svg class="rating-icon medium icon-star">
                                    <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                        
                                <div class="rating medium filled">
                                    <svg class="rating-icon medium icon-star">
                                    <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                        
                                <div class="rating medium filled">
                                    <svg class="rating-icon medium icon-star">
                                    <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                        
                                <div class="rating medium filled">
                                    <svg class="rating-icon medium icon-star">
                                    <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                        
                                <div class="rating medium filled">
                                    <svg class="rating-icon medium icon-star">
                                    <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                                </div>
                        
                                <p class="post-comment-text"><span class="bold">Reason:</span> <span class="highlighted">Item Quality</span></p>
                            </div>
                        
                            <p class="post-comment-text">5 stars for exceptional Customer Support (quick, precise, detailed responses to questions), but 5 stars also for Design Quality and Customization. It is a beautiful clean design that can easily be customized to your needs. I had really specific questions and I received detailed solutions very promptly. Thank you!</p>
                        
                            <div class="content-actions">
                                <div class="content-action">
                                <div class="meta-line">
                                    <p class="meta-line-text"><a href="profile-timeline">Sarah Diamond</a></p>
                                </div>
                        
                                <div class="meta-line">
                                    <p class="meta-line-timestamp">4 weeks ago</p>
                                </div>
                        
                                <div class="meta-line settings">
                                    <div class="post-settings-wrap">
                                    <div class="post-settings post-settings-dropdown-trigger">
                                        <svg class="post-settings-icon icon-more-dots">
                                        <use xlinkHref="#svg-more-dots"></use>
                                        </svg>
                                    </div>
                        
                                    <div class="simple-dropdown post-settings-dropdown">
                                        <p class="simple-dropdown-link">Report Review</p>
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

                <div class="marketplace-sidebar">
                    <div class="sidebar-box">
                    <div class="sidebar-box-items">
                        <p class="price-title big"><span class="currency">$</span> 26.00</p>
                
                        <form class="form">
                        <div class="checkbox-wrap">
                            <input type="radio" id="license-regular" name="license_type" value="license-regular" checked/>
                            <div class="checkbox-box">
                            <svg class="icon-cross">
                                <use xlinkHref="#svg-cross"></use>
                            </svg>
                            </div>
                            <label class="accordion-trigger-linked" for="license-regular">Regular License</label>
                
                            <div class="checkbox-info accordion-content-linked accordion-open">
                            <p class="checkbox-info-text">For use, by you or one client, in a single end product which end users are not charged for. <a href="#">View Details</a></p>
                            </div>
                        </div>
                
                        <div class="checkbox-wrap">
                            <input type="radio" id="license-extended" name="license_type" value="license-extended"/>
                            <div class="checkbox-box">
                            <svg class="icon-cross">
                                <use xlinkHref="#svg-cross"></use>
                            </svg>
                            </div>
                            <label class="accordion-trigger-linked" for="license-extended">Extended License</label>
                
                            <div class="checkbox-info accordion-content-linked">
                            <p class="checkbox-info-text">For use, by you or one client, in a single end product which end users can be charged for. <a href="#">View Details</a></p>
                            </div>
                        </div>
                        </form>
                
                        <p class="button primary">Add to Your Cart!</p>
                
                        <div class="user-stats">
                        <div class="user-stat big">
                            <p class="user-stat-title">1.360</p>
                    
                            <p class="user-stat-text">sales</p>
                        </div>
                    
                        <div class="user-stat big">
                            <p class="user-stat-title">4.2/5</p>
                    
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
                
                    <p class="sidebar-box-title medium-space">Item Author</p>
                
                    <div class="sidebar-box-items">
                        <div class="user-status">
                        <a class="user-status-avatar" href="profile-timeline">
                            <div class="user-avatar small no-outline">
                            <div class="user-avatar-content">
                                <div class="hexagon-image-30-32" data-src="img/avatar/01.jpg"></div>
                            </div>
                        
                            <div class="user-avatar-progress">
                                <div class="hexagon-progress-40-44"></div>
                            </div>
                        
                            <div class="user-avatar-progress-border">
                                <div class="hexagon-border-40-44"></div>
                            </div>
                        
                            <div class="user-avatar-badge">
                                <div class="user-avatar-badge-border">
                                <div class="hexagon-22-24"></div>
                                </div>
                        
                                <div class="user-avatar-badge-content">
                                <div class="hexagon-dark-16-18"></div>
                                </div>
                        
                                <p class="user-avatar-badge-text">24</p>
                            </div>
                            </div>
                        </a>
                
                        <p class="user-status-title"><a class="bold" href="profile-timeline">Marina Valentine</a></p>
                
                        <p class="user-status-text small">5 items published</p>
                        </div>
                
                        <div class="badge-list small align-left">
                        <div class="badge-item text-tooltip-tft" data-title="Gold User">
                            <img src="img/badge/gold-s.png" alt="badge-gold-s"/>
                        </div>
                
                        <div class="badge-item text-tooltip-tft" data-title="Profile Age">
                            <img src="img/badge/age-s.png" alt="badge-age-s"/>
                        </div>
                
                        <div class="badge-item text-tooltip-tft" data-title="Caffeinated">
                            <img src="img/badge/caffeinated-s.png" alt="badge-caffeinated-s"/>
                        </div>
                
                        <div class="badge-item text-tooltip-tft" data-title="The Warrior">
                            <img src="img/badge/warrior-s.png" alt="badge-warrior-s"/>
                        </div>
                
                        <a class="badge-item" href="profile-badges">
                            <img src="img/badge/blank-s.png" alt="badge-blank-s"/>
                            <p class="badge-item-text">+9</p>
                        </a>
                        </div>
                
                        <a class="button small white" href="profile-store">View Author's Store</a>
                    </div>
                
                    <p class="sidebar-box-title medium-space">Item Details</p>
                
                    <div class="sidebar-box-items">
                        <div class="information-line-list">
                        <div class="information-line">
                            <p class="information-line-title">Updated</p>
                
                            <p class="information-line-text"><span class="bold">October 13rd, 2019</span></p>
                        </div>
                
                        <div class="information-line">
                            <p class="information-line-title">Created</p>
                
                            <p class="information-line-text"><span class="bold">August 17th, 2019</span></p>
                        </div>
                
                        <div class="information-line">
                            <p class="information-line-title">Category</p>
                
                            <p class="information-line-text"><a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-category')}}>HTML Templates</a></p>
                        </div>
                
                        <div class="information-line">
                            <p class="information-line-title">Files<br/>Included</p>
                
                            <p class="information-line-text"><span class="bold">HTML Files, CSS Files, JS Files, Layered PSD</span></p>
                        </div>
                
                        <div class="information-line">
                            <p class="information-line-title">Layout</p>
                
                            <p class="information-line-text"><span class="bold">Responsive</span></p>
                        </div>
                
                        <div class="information-line">
                            <p class="information-line-title">Tags</p>
                
                            <p class="information-line-text"><span class="bold"><a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-category')}}>Gaming</a>, <a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-category')}}>Magazine</a>, <a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-category')}}>Web</a>, <a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-category')}}>eSports</a>, <a onClick={()=> {dispatch(setLoading({status: 'isLoading'})); navigate('/marketplace-category')}}>Template</a></span></p>
                        </div>
                        </div>
                    </div>
                
                    <p class="sidebar-box-title medium-space">Item Share</p>
                
                    <div class="sidebar-box-items">
                        <div class="social-links small align-left">
                        <a class="social-link small facebook" href="#">
                            <svg class="social-link-icon icon-facebook">
                            <use xlinkHref="#svg-facebook"></use>
                            </svg>
                        </a>
                
                        <a class="social-link small twitter" href="#">
                            <svg class="social-link-icon icon-twitter">
                            <use xlinkHref="#svg-twitter"></use>
                            </svg>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarketPlaceProduct