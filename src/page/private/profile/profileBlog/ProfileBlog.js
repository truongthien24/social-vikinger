import React from 'react'

const ProfileBlog = () => {
    return (
        <>
            <div class="section-filters-bar v2">
                <form class="form">
                    <div class="form-item split medium">
                        <div class="form-select">
                        <label for="post-filter-category">Filter By</label>
                        <select id="post-filter-category" name="post_filter_category">
                            <option value="0">Reactions Received</option>
                            <option value="1">Comment Count</option>
                            <option value="2">Share Count</option>
                        </select>
                        <svg class="form-select-icon icon-small-arrow">
                            <use xlinkHref="#svg-small-arrow"></use>
                        </svg>
                        </div>
                
                        <div class="form-select">
                        <label for="post-filter-order">Order By</label>
                        <select id="post-filter-order" name="post_filter_order">
                            <option value="0">Highest to Lowest</option>
                            <option value="1">Lowest to Highest</option>
                        </select>
                        <svg class="form-select-icon icon-small-arrow">
                            <use xlinkHref="#svg-small-arrow"></use>
                        </svg>
                        </div>
                
                        <div class="form-select">
                        <label for="post-filter-show">Show</label>
                        <select id="post-filter-show" name="post_filter_show">
                            <option value="0">12 Posts per Page</option>
                            <option value="1">24 Posts per Page</option>
                        </select>
                        <svg class="form-select-icon icon-small-arrow">
                            <use xlinkHref="#svg-small-arrow"></use>
                        </svg>
                        </div>
                    
                        <button class="button primary">Filter Posts</button>
                    </div>
                </form>
            </div>

            <div class="grid grid-4-4-4 centered">
                <div class="post-preview">
                    <figure class="post-preview-image liquid">
                        <img src="img/cover/19.jpg" alt="cover-19"/>
                    </figure>
            
                <div class="post-preview-info fixed-height">
                    <div class="post-preview-info-top">
                    <p class="post-preview-timestamp">2 days ago</p>
                
                    <p class="post-preview-title">Here's the how and why did I became a full time Gaming Streamer</p>
                    </div>
            
                    <div class="post-preview-info-bottom">
                    <p class="post-preview-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut...</p>
                
                    <a class="post-preview-link" href="profile-post.html">Read more...</a>
                    </div>
                </div>
            
                <div class="content-actions">
                    <div class="content-action">
                    <div class="meta-line">
                        <div class="meta-line-list reaction-item-list">
                        <div class="reaction-item">
                            <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/wow.png" alt="reaction-wow"/>
            
                            <div class="simple-dropdown padded reaction-item-dropdown">
                            <p class="simple-dropdown-text">
                                <img class="reaction" src="img/reaction/wow.png" alt="reaction-wow"/> 
                                <span class="bold">Wow</span>
                        </p>
                            
                            <p class="simple-dropdown-text">Neko Bebop</p>
            
                            <p class="simple-dropdown-text">Nick Grissom</p>
            
                            <p class="simple-dropdown-text">Sarah Diamond</p>
            
                            <p class="simple-dropdown-text">Marcus Jhonson</p>
                            </div>
                        </div>
            
                        <div class="reaction-item">
                            <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/happy.png" alt="reaction-happy"/>
            
                            <div class="simple-dropdown padded reaction-item-dropdown">
                            <p class="simple-dropdown-text">
                                <img class="reaction" src="img/reaction/happy.png" alt="reaction-happy"/> 
                                <span class="bold">Happy</span>
                            </p>
                            
                            <p class="simple-dropdown-text">Jett Spiegel</p>
            
                            <p class="simple-dropdown-text">Jane Rodgers</p>
                            </div>
                        </div>
            
                        <div class="reaction-item">
                            <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/like.png" alt="reaction-like"/>
            
                            <div class="simple-dropdown padded reaction-item-dropdown">
                            <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/like.png" alt="reaction-like"/> <span class="bold">Like</span></p>
                            
                            <p class="simple-dropdown-text">Neko Bebop</p>
            
                            <p class="simple-dropdown-text">Nick Grissom</p>
            
                            <p class="simple-dropdown-text">Sarah Diamond</p>
            
                            <p class="simple-dropdown-text">Jett Spiegel</p>
            
                            <p class="simple-dropdown-text">Marcus Jhonson</p>
            
                            <p class="simple-dropdown-text">Jane Rodgers</p>
            
                            <p class="simple-dropdown-text"><span class="bold">and 7 more...</span></p>
                            </div>
                        </div>
                        </div>
            
                        <p class="meta-line-text">19</p>
                    </div>
                    </div>
            
                    <div class="content-action">
                    <div class="meta-line">
                        <a class="meta-line-link" href="profile-post.html#comments">5 Comments</a>
                    </div>
                
                    <div class="meta-line">
                        <p class="meta-line-text">0 Shares</p>
                    </div>
                    </div>
                </div>
                </div>

                <div class="post-preview">
                <figure class="post-preview-image liquid">
                    <img src="img/cover/10.jpg" alt="cover-10"/>
                </figure>
            
                <div class="post-preview-info fixed-height">
                    <div class="post-preview-info-top">
                    <p class="post-preview-timestamp">3 weeks ago</p>
                
                    <p class="post-preview-title">I spoke with the developers of RoBot SaMurai II at the 2019 GamingCon</p>
                    </div>
            
                    <div class="post-preview-info-bottom">
                    <p class="post-preview-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut...</p>
                
                    <a class="post-preview-link" href="profile-post.html">Read more...</a>
                    </div>
                </div>
            
                <div class="content-actions">
                    <div class="content-action">
                    <div class="meta-line">
                        <div class="meta-line-list reaction-item-list">
                        <div class="reaction-item">
                            <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/happy.png" alt="reaction-happy"/>
            
                            <div class="simple-dropdown padded reaction-item-dropdown">
                            <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/happy.png" alt="reaction-happy"/> <span class="bold">Happy</span></p>
                            
                            <p class="simple-dropdown-text">Neko Bebop</p>
            
                            <p class="simple-dropdown-text">Nick Grissom</p>
            
                            <p class="simple-dropdown-text">Sarah Diamond</p>
            
                            <p class="simple-dropdown-text">Marcus Jhonson</p>
                            </div>
                        </div>
            
                        <div class="reaction-item">
                            <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/love.png" alt="reaction-love"/>
            
                            <div class="simple-dropdown padded reaction-item-dropdown">
                            <p class="simple-dropdown-text">
                                <img class="reaction" src="img/reaction/love.png" alt="reaction-love"/> <span class="bold">Love</span>
                            </p>
                            
                            <p class="simple-dropdown-text">Jett Spiegel</p>
            
                            <p class="simple-dropdown-text">Jane Rodgers</p>
                            </div>
                        </div>
            
                        <div class="reaction-item">
                            <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/funny.png" alt="reaction-funny"/>
            
                            <div class="simple-dropdown padded reaction-item-dropdown">
                            <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/funny.png" alt="reaction-funny"/> <span class="bold">Funny</span></p>
                            
                            <p class="simple-dropdown-text">Neko Bebop</p>
            
                            <p class="simple-dropdown-text">Nick Grissom</p>
            
                            <p class="simple-dropdown-text">Sarah Diamond</p>
            
                            <p class="simple-dropdown-text">Jett Spiegel</p>
            
                            <p class="simple-dropdown-text">Marcus Jhonson</p>
            
                            <p class="simple-dropdown-text">Jane Rodgers</p>
            
                            <p class="simple-dropdown-text"><span class="bold">and 10 more...</span></p>
                            </div>
                        </div>
                        </div>
            
                        <p class="meta-line-text">21</p>
                    </div>
                    </div>
            
                    <div class="content-action">
                    <div class="meta-line">
                        <a class="meta-line-link" href="profile-post.html#comments">8 Comments</a>
                    </div>
                
                    <div class="meta-line">
                        <p class="meta-line-text">0 Shares</p>
                    </div>
                    </div>
                </div>
                </div>

                <div class="post-preview">
                <figure class="post-preview-image liquid">
                    <img src="img/cover/20.jpg" alt="cover-20"/>
                </figure>
            
                <div class="post-preview-info fixed-height">
                    <div class="post-preview-info-top">
                    <p class="post-preview-timestamp">4 weeks ago</p>
                
                    <p class="post-preview-title">I will be at this month's StreamCon with NekoBebop</p>
                    </div>
            
                    <div class="post-preview-info-bottom">
                    <p class="post-preview-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut...</p>
                
                    <a class="post-preview-link" href="profile-post.html">Read more...</a>
                    </div>
                </div>
            
                <div class="content-actions">
                    <div class="content-action">
                    <div class="meta-line">
                        <div class="meta-line-list reaction-item-list">
                        <div class="reaction-item">
                            <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/happy.png" alt="reaction-happy"/>
            
                            <div class="simple-dropdown padded reaction-item-dropdown">
                            <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/happy.png" alt="reaction-happy"/> <span class="bold">Happy</span></p>
                            
                            <p class="simple-dropdown-text">Neko Bebop</p>
            
                            <p class="simple-dropdown-text">Nick Grissom</p>
            
                            <p class="simple-dropdown-text">Sarah Diamond</p>
            
                            <p class="simple-dropdown-text">Marcus Jhonson</p>
                            </div>
                        </div>
            
                        <div class="reaction-item">
                            <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/love.png" alt="reaction-love"/>
            
                            <div class="simple-dropdown padded reaction-item-dropdown">
                            <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/love.png" alt="reaction-love"/> <span class="bold">Love</span></p>
                            
                            <p class="simple-dropdown-text">Jett Spiegel</p>
            
                            <p class="simple-dropdown-text">Jane Rodgers</p>
                            </div>
                        </div>
            
                        <div class="reaction-item">
                            <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/like.png" alt="reaction-like"/>
            
                            <div class="simple-dropdown padded reaction-item-dropdown">
                            <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/like.png" alt="reaction-like"/> <span class="bold">Like</span></p>
                            
                            <p class="simple-dropdown-text">Neko Bebop</p>
            
                            <p class="simple-dropdown-text">Nick Grissom</p>
                            </div>
                        </div>
                        </div>
            
                        <p class="meta-line-text">8</p>
                    </div>
                    </div>
            
                    <div class="content-action">
                    <div class="meta-line">
                        <a class="meta-line-link" href="profile-post.html#comments">2 Comments</a>
                    </div>
                
                    <div class="meta-line">
                        <p class="meta-line-text">0 Shares</p>
                    </div>
                    </div>
                </div>
                </div>

                <div class="post-preview">
                <figure class="post-preview-image liquid">
                    <img src="img/cover/06.jpg" alt="cover-06"/>
                </figure>
            
                <div class="post-preview-info fixed-height">
                    <div class="post-preview-info-top">
                    <p class="post-preview-timestamp">1 month ago</p>
                
                    <p class="post-preview-title">[Exclusive!] Check out all the new missions and story of the Fire Witch DLC!</p>
                    </div>
            
                    <div class="post-preview-info-bottom">
                    <p class="post-preview-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut...</p>
                
                    <a class="post-preview-link" href="profile-post.html">Read more...</a>
                    </div>
                </div>
            
                <div class="content-actions">
                    <div class="content-action">
                    <div class="meta-line">
                        <div class="meta-line-list reaction-item-list">
                        <div class="reaction-item">
                            <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/like.png" alt="reaction-like"/>
            
                            <div class="simple-dropdown padded reaction-item-dropdown">
                            <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/like.png" alt="reaction-like"/> <span class="bold">Like</span></p>
                            
                            <p class="simple-dropdown-text">Jett Spiegel</p>
            
                            <p class="simple-dropdown-text">Jane Rodgers</p>
                            </div>
                        </div>
            
                        <div class="reaction-item">
                            <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/wow.png" alt="reaction-wow"/>
            
                            <div class="simple-dropdown padded reaction-item-dropdown">
                            <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/wow.png" alt="reaction-wow"/> <span class="bold">Wow</span></p>
                            
                            <p class="simple-dropdown-text">Neko Bebop</p>
            
                            <p class="simple-dropdown-text">Nick Grissom</p>
                            </div>
                        </div>
                        </div>
            
                        <p class="meta-line-text">4</p>
                    </div>
                    </div>
            
                    <div class="content-action">
                    <div class="meta-line">
                        <a class="meta-line-link" href="profile-post.html#comments">1 Comments</a>
                    </div>
                
                    <div class="meta-line">
                        <p class="meta-line-text">0 Shares</p>
                    </div>
                    </div>
                </div>
                </div>

                <div class="post-preview">
                <figure class="post-preview-image liquid">
                    <img src="img/cover/07.jpg" alt="cover-07"/>
                </figure>
            
                <div class="post-preview-info fixed-height">
                    <div class="post-preview-info-top">
                    <p class="post-preview-timestamp">1 month ago</p>
                
                    <p class="post-preview-title">Old Super Mochi's Island is getting a remake!</p>
                    </div>
            
                    <div class="post-preview-info-bottom">
                    <p class="post-preview-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut...</p>
                
                    <a class="post-preview-link" href="profile-post.html">Read more...</a>
                    </div>
                </div>
            
                <div class="content-actions">
                    <div class="content-action">
                    <div class="meta-line">
                        <div class="meta-line-list reaction-item-list">
                        <div class="reaction-item">
                            <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/funny.png" alt="reaction-funny"/>
            
                            <div class="simple-dropdown padded reaction-item-dropdown">
                            <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/funny.png" alt="reaction-funny"/> <span class="bold">Funny</span></p>
                            
                            <p class="simple-dropdown-text">Neko Bebop</p>
            
                            <p class="simple-dropdown-text">Nick Grissom</p>
            
                            <p class="simple-dropdown-text">Sarah Diamond</p>
            
                            <p class="simple-dropdown-text">Marcus Jhonson</p>
                            </div>
                        </div>
            
                        <div class="reaction-item">
                            <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/like.png" alt="reaction-like"/>
            
                            <div class="simple-dropdown padded reaction-item-dropdown">
                            <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/like.png" alt="reaction-like"/> <span class="bold">Like</span></p>
                            
                            <p class="simple-dropdown-text">Jett Spiegel</p>
            
                            <p class="simple-dropdown-text">Jane Rodgers</p>
                            </div>
                        </div>
            
                        <div class="reaction-item">
                            <img class="reaction-image reaction-item-dropdown-trigger" src="img/reaction/love.png" alt="reaction-love"/>
            
                            <div class="simple-dropdown padded reaction-item-dropdown">
                            <p class="simple-dropdown-text"><img class="reaction" src="img/reaction/love.png" alt="reaction-love"/> <span class="bold">Love</span></p>
                            
                            <p class="simple-dropdown-text">Neko Bebop</p>
            
                            <p class="simple-dropdown-text">Nick Grissom</p>

                            <p class="simple-dropdown-text">Sarah Diamond</p>

                            <p class="simple-dropdown-text">Jett Spiegel</p>

                            <p class="simple-dropdown-text">Marcus Jhonson</p>

                            <p class="simple-dropdown-text">Jane Rodgers</p>

                            <p class="simple-dropdown-text"><span class="bold">and 3 more...</span></p>
                            </div>
                        </div>
                        </div>
            
                        <p class="meta-line-text">15</p>
                    </div>
                    </div>
            
                    <div class="content-action">
                    <div class="meta-line">
                        <a class="meta-line-link" href="profile-post.html#comments">9 Comments</a>
                    </div>
                
                    <div class="meta-line">
                        <p class="meta-line-text">0 Shares</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default ProfileBlog