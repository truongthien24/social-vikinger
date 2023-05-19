import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { setLoading } from '../../../../redux/action/homeAction';

const ProfileBlog = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    return (
        <>
            <div className="section-filters-bar v2">
                <form className="form">
                    <div className="form-item split medium">
                        <div className="form-select">
                        <label for="post-filter-category">Filter By</label>
                        <select id="post-filter-category" name="post_filter_category">
                            <option value="0">Reactions Received</option>
                            <option value="1">Comment Count</option>
                            <option value="2">Share Count</option>
                        </select>
                        <svg className="form-select-icon icon-small-arrow">
                            <use xlinkHref="#svg-small-arrow"></use>
                        </svg>
                        </div>
                
                        <div className="form-select">
                        <label for="post-filter-order">Order By</label>
                        <select id="post-filter-order" name="post_filter_order">
                            <option value="0">Highest to Lowest</option>
                            <option value="1">Lowest to Highest</option>
                        </select>
                        <svg className="form-select-icon icon-small-arrow">
                            <use xlinkHref="#svg-small-arrow"></use>
                        </svg>
                        </div>
                
                        <div className="form-select">
                        <label for="post-filter-show">Show</label>
                        <select id="post-filter-show" name="post_filter_show">
                            <option value="0">12 Posts per Page</option>
                            <option value="1">24 Posts per Page</option>
                        </select>
                        <svg className="form-select-icon icon-small-arrow">
                            <use xlinkHref="#svg-small-arrow"></use>
                        </svg>
                        </div>
                    
                        <button className="button primary">Filter Posts</button>
                    </div>
                </form>
            </div>

            <div className="grid grid-4-4-4 centered">
                <div className="post-preview">
                    <figure className="post-preview-image liquid">
                        <img src="img/cover/19.jpg" alt="cover-19"/>
                    </figure>
            
                <div className="post-preview-info fixed-height">
                    <div className="post-preview-info-top">
                    <p className="post-preview-timestamp">2 days ago</p>
                
                    <p className="post-preview-title">Here's the how and why did I became a full time Gaming Streamer</p>
                    </div>
            
                    <div className="post-preview-info-bottom">
                    <p className="post-preview-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut...</p>
                
                    <a className="post-preview-link" onClick={()=>{
                            dispatch(setLoading({
                                status: 'isLoading'
                            }))
                            navigate('/profile-post')
                        }}>Read more...</a>
                    </div>
                </div>
            
                <div className="content-actions">
                    <div className="content-action">
                    <div className="meta-line">
                        <div className="meta-line-list reaction-item-list">
                        <div className="reaction-item">
                            <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/wow.png" alt="reaction-wow"/>
            
                            <div className="simple-dropdown padded reaction-item-dropdown">
                            <p className="simple-dropdown-text">
                                <img className="reaction" src="img/reaction/wow.png" alt="reaction-wow"/> 
                                <span className="bold">Wow</span>
                        </p>
                            
                            <p className="simple-dropdown-text">Neko Bebop</p>
            
                            <p className="simple-dropdown-text">Nick Grissom</p>
            
                            <p className="simple-dropdown-text">Sarah Diamond</p>
            
                            <p className="simple-dropdown-text">Marcus Jhonson</p>
                            </div>
                        </div>
            
                        <div className="reaction-item">
                            <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/happy.png" alt="reaction-happy"/>
            
                            <div className="simple-dropdown padded reaction-item-dropdown">
                            <p className="simple-dropdown-text">
                                <img className="reaction" src="img/reaction/happy.png" alt="reaction-happy"/> 
                                <span className="bold">Happy</span>
                            </p>
                            
                            <p className="simple-dropdown-text">Jett Spiegel</p>
            
                            <p className="simple-dropdown-text">Jane Rodgers</p>
                            </div>
                        </div>
            
                        <div className="reaction-item">
                            <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/like.png" alt="reaction-like"/>
            
                            <div className="simple-dropdown padded reaction-item-dropdown">
                            <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/like.png" alt="reaction-like"/> <span className="bold">Like</span></p>
                            
                            <p className="simple-dropdown-text">Neko Bebop</p>
            
                            <p className="simple-dropdown-text">Nick Grissom</p>
            
                            <p className="simple-dropdown-text">Sarah Diamond</p>
            
                            <p className="simple-dropdown-text">Jett Spiegel</p>
            
                            <p className="simple-dropdown-text">Marcus Jhonson</p>
            
                            <p className="simple-dropdown-text">Jane Rodgers</p>
            
                            <p className="simple-dropdown-text"><span className="bold">and 7 more...</span></p>
                            </div>
                        </div>
                        </div>
            
                        <p className="meta-line-text">19</p>
                    </div>
                    </div>
            
                    <div className="content-action">
                    <div className="meta-line">
                        <a className="meta-line-link" href="profile-post.html#comments">5 Comments</a>
                    </div>
                
                    <div className="meta-line">
                        <p className="meta-line-text">0 Shares</p>
                    </div>
                    </div>
                </div>
                </div>

                <div className="post-preview">
                <figure className="post-preview-image liquid">
                    <img src="img/cover/10.jpg" alt="cover-10"/>
                </figure>
            
                <div className="post-preview-info fixed-height">
                    <div className="post-preview-info-top">
                    <p className="post-preview-timestamp">3 weeks ago</p>
                
                    <p className="post-preview-title">I spoke with the developers of RoBot SaMurai II at the 2019 GamingCon</p>
                    </div>
            
                    <div className="post-preview-info-bottom">
                    <p className="post-preview-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut...</p>
                
                    <a className="post-preview-link" onClick={()=>{
                            dispatch(setLoading({
                                status: 'isLoading'
                            }))
                            navigate('/profile-post')
                        }}>Read more...</a>
                    </div>
                </div>
            
                <div className="content-actions">
                    <div className="content-action">
                    <div className="meta-line">
                        <div className="meta-line-list reaction-item-list">
                        <div className="reaction-item">
                            <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/happy.png" alt="reaction-happy"/>
            
                            <div className="simple-dropdown padded reaction-item-dropdown">
                            <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/happy.png" alt="reaction-happy"/> <span className="bold">Happy</span></p>
                            
                            <p className="simple-dropdown-text">Neko Bebop</p>
            
                            <p className="simple-dropdown-text">Nick Grissom</p>
            
                            <p className="simple-dropdown-text">Sarah Diamond</p>
            
                            <p className="simple-dropdown-text">Marcus Jhonson</p>
                            </div>
                        </div>
            
                        <div className="reaction-item">
                            <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/love.png" alt="reaction-love"/>
            
                            <div className="simple-dropdown padded reaction-item-dropdown">
                            <p className="simple-dropdown-text">
                                <img className="reaction" src="img/reaction/love.png" alt="reaction-love"/> <span className="bold">Love</span>
                            </p>
                            
                            <p className="simple-dropdown-text">Jett Spiegel</p>
            
                            <p className="simple-dropdown-text">Jane Rodgers</p>
                            </div>
                        </div>
            
                        <div className="reaction-item">
                            <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/funny.png" alt="reaction-funny"/>
            
                            <div className="simple-dropdown padded reaction-item-dropdown">
                            <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/funny.png" alt="reaction-funny"/> <span className="bold">Funny</span></p>
                            
                            <p className="simple-dropdown-text">Neko Bebop</p>
            
                            <p className="simple-dropdown-text">Nick Grissom</p>
            
                            <p className="simple-dropdown-text">Sarah Diamond</p>
            
                            <p className="simple-dropdown-text">Jett Spiegel</p>
            
                            <p className="simple-dropdown-text">Marcus Jhonson</p>
            
                            <p className="simple-dropdown-text">Jane Rodgers</p>
            
                            <p className="simple-dropdown-text"><span className="bold">and 10 more...</span></p>
                            </div>
                        </div>
                        </div>
            
                        <p className="meta-line-text">21</p>
                    </div>
                    </div>
            
                    <div className="content-action">
                    <div className="meta-line">
                        <a className="meta-line-link" href="profile-post.html#comments">8 Comments</a>
                    </div>
                
                    <div className="meta-line">
                        <p className="meta-line-text">0 Shares</p>
                    </div>
                    </div>
                </div>
                </div>

                <div className="post-preview">
                <figure className="post-preview-image liquid">
                    <img src="img/cover/20.jpg" alt="cover-20"/>
                </figure>
            
                <div className="post-preview-info fixed-height">
                    <div className="post-preview-info-top">
                    <p className="post-preview-timestamp">4 weeks ago</p>
                
                    <p className="post-preview-title">I will be at this month's StreamCon with NekoBebop</p>
                    </div>
            
                    <div className="post-preview-info-bottom">
                    <p className="post-preview-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut...</p>
                
                    <a className="post-preview-link" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate('/profile-post')
                    }}>Read more...</a>
                    </div>
                </div>
            
                <div className="content-actions">
                    <div className="content-action">
                    <div className="meta-line">
                        <div className="meta-line-list reaction-item-list">
                        <div className="reaction-item">
                            <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/happy.png" alt="reaction-happy"/>
            
                            <div className="simple-dropdown padded reaction-item-dropdown">
                            <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/happy.png" alt="reaction-happy"/> <span className="bold">Happy</span></p>
                            
                            <p className="simple-dropdown-text">Neko Bebop</p>
            
                            <p className="simple-dropdown-text">Nick Grissom</p>
            
                            <p className="simple-dropdown-text">Sarah Diamond</p>
            
                            <p className="simple-dropdown-text">Marcus Jhonson</p>
                            </div>
                        </div>
            
                        <div className="reaction-item">
                            <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/love.png" alt="reaction-love"/>
            
                            <div className="simple-dropdown padded reaction-item-dropdown">
                            <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/love.png" alt="reaction-love"/> <span className="bold">Love</span></p>
                            
                            <p className="simple-dropdown-text">Jett Spiegel</p>
            
                            <p className="simple-dropdown-text">Jane Rodgers</p>
                            </div>
                        </div>
            
                        <div className="reaction-item">
                            <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/like.png" alt="reaction-like"/>
            
                            <div className="simple-dropdown padded reaction-item-dropdown">
                            <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/like.png" alt="reaction-like"/> <span className="bold">Like</span></p>
                            
                            <p className="simple-dropdown-text">Neko Bebop</p>
            
                            <p className="simple-dropdown-text">Nick Grissom</p>
                            </div>
                        </div>
                        </div>
            
                        <p className="meta-line-text">8</p>
                    </div>
                    </div>
            
                    <div className="content-action">
                    <div className="meta-line">
                        <a className="meta-line-link" href="profile-post.html#comments">2 Comments</a>
                    </div>
                
                    <div className="meta-line">
                        <p className="meta-line-text">0 Shares</p>
                    </div>
                    </div>
                </div>
                </div>

                <div className="post-preview">
                <figure className="post-preview-image liquid">
                    <img src="img/cover/06.jpg" alt="cover-06"/>
                </figure>
            
                <div className="post-preview-info fixed-height">
                    <div className="post-preview-info-top">
                    <p className="post-preview-timestamp">1 month ago</p>
                
                    <p className="post-preview-title">[Exclusive!] Check out all the new missions and story of the Fire Witch DLC!</p>
                    </div>
            
                    <div className="post-preview-info-bottom">
                    <p className="post-preview-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut...</p>
                
                    <a className="post-preview-link" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate('/profile-post')
                    }}>Read more...</a>
                    </div>
                </div>
            
                <div className="content-actions">
                    <div className="content-action">
                    <div className="meta-line">
                        <div className="meta-line-list reaction-item-list">
                        <div className="reaction-item">
                            <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/like.png" alt="reaction-like"/>
            
                            <div className="simple-dropdown padded reaction-item-dropdown">
                            <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/like.png" alt="reaction-like"/> <span className="bold">Like</span></p>
                            
                            <p className="simple-dropdown-text">Jett Spiegel</p>
            
                            <p className="simple-dropdown-text">Jane Rodgers</p>
                            </div>
                        </div>
            
                        <div className="reaction-item">
                            <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/wow.png" alt="reaction-wow"/>
            
                            <div className="simple-dropdown padded reaction-item-dropdown">
                            <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/wow.png" alt="reaction-wow"/> <span className="bold">Wow</span></p>
                            
                            <p className="simple-dropdown-text">Neko Bebop</p>
            
                            <p className="simple-dropdown-text">Nick Grissom</p>
                            </div>
                        </div>
                        </div>
            
                        <p className="meta-line-text">4</p>
                    </div>
                    </div>
            
                    <div className="content-action">
                    <div className="meta-line">
                        <a className="meta-line-link" href="profile-post.html#comments">1 Comments</a>
                    </div>
                
                    <div className="meta-line">
                        <p className="meta-line-text">0 Shares</p>
                    </div>
                    </div>
                </div>
                </div>

                <div className="post-preview">
                <figure className="post-preview-image liquid">
                    <img src="img/cover/07.jpg" alt="cover-07"/>
                </figure>
            
                <div className="post-preview-info fixed-height">
                    <div className="post-preview-info-top">
                    <p className="post-preview-timestamp">1 month ago</p>
                
                    <p className="post-preview-title">Old Super Mochi's Island is getting a remake!</p>
                    </div>
            
                    <div className="post-preview-info-bottom">
                    <p className="post-preview-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut...</p>
                
                    <a className="post-preview-link" onClick={()=>{
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate('/profile-post')
                    }}>Read more...</a>
                    </div>
                </div>
            
                <div className="content-actions">
                    <div className="content-action">
                    <div className="meta-line">
                        <div className="meta-line-list reaction-item-list">
                        <div className="reaction-item">
                            <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/funny.png" alt="reaction-funny"/>
            
                            <div className="simple-dropdown padded reaction-item-dropdown">
                            <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/funny.png" alt="reaction-funny"/> <span className="bold">Funny</span></p>
                            
                            <p className="simple-dropdown-text">Neko Bebop</p>
            
                            <p className="simple-dropdown-text">Nick Grissom</p>
            
                            <p className="simple-dropdown-text">Sarah Diamond</p>
            
                            <p className="simple-dropdown-text">Marcus Jhonson</p>
                            </div>
                        </div>
            
                        <div className="reaction-item">
                            <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/like.png" alt="reaction-like"/>
            
                            <div className="simple-dropdown padded reaction-item-dropdown">
                            <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/like.png" alt="reaction-like"/> <span className="bold">Like</span></p>
                            
                            <p className="simple-dropdown-text">Jett Spiegel</p>
            
                            <p className="simple-dropdown-text">Jane Rodgers</p>
                            </div>
                        </div>
            
                        <div className="reaction-item">
                            <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/love.png" alt="reaction-love"/>
            
                            <div className="simple-dropdown padded reaction-item-dropdown">
                            <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/love.png" alt="reaction-love"/> <span className="bold">Love</span></p>
                            
                            <p className="simple-dropdown-text">Neko Bebop</p>
            
                            <p className="simple-dropdown-text">Nick Grissom</p>

                            <p className="simple-dropdown-text">Sarah Diamond</p>

                            <p className="simple-dropdown-text">Jett Spiegel</p>

                            <p className="simple-dropdown-text">Marcus Jhonson</p>

                            <p className="simple-dropdown-text">Jane Rodgers</p>

                            <p className="simple-dropdown-text"><span className="bold">and 3 more...</span></p>
                            </div>
                        </div>
                        </div>
            
                        <p className="meta-line-text">15</p>
                    </div>
                    </div>
            
                    <div className="content-action">
                    <div className="meta-line">
                        <a className="meta-line-link" href="profile-post.html#comments">9 Comments</a>
                    </div>
                
                    <div className="meta-line">
                        <p className="meta-line-text">0 Shares</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default ProfileBlog