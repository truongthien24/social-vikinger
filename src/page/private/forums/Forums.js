import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoading } from '../../../redux/action/homeAction'

const Forums = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    return (
        <div class="content-grid">
            <div class="section-banner">
            <img class="section-banner-icon" src="img/banner/forums-icon.png" alt="forums-icon"/>
        
            <p class="section-banner-title">Forums</p>
        
            <p class="section-banner-text">Talk about anything! Gaming, music, comics and more!</p>
            </div>

            <div class="section-header">
            <div class="section-header-info">
                <p class="section-pretitle">Welcome to</p>
        
                <h2 class="section-title">Vikinger Forums</h2>
            </div>
            </div>

            <div class="section-filters-bar v7">
            <div class="section-filters-bar-actions">
                <div class="section-filters-bar-info">
                <p class="section-filters-bar-title"><a href="forums">Forums</a></p>
        
                <p class="section-filters-bar-text">Last category added <a class="highlighted" onClick={()=> {
                    dispatch(setLoading({
                        status: 'isLoading'
                    }))
                    navigate({
                        pathname: '/forums-category',
                        search: `?id=${'123'}`
                    })
                }}>The Jukebox</a> 2 weeks ago</p>
                </div>
            </div>
        
            <div class="section-filters-bar-actions">
                <form class="form">
                <div class="form-item split">
                    <div class="form-input small">
                    <label for="forum-search">Search Forums</label>
                    <input type="text" id="forum-search" name="forum_search"/>
                    </div>
        
                    <button class="button primary">
                    <svg class="icon-magnifying-glass">
                        <use xlinkHref="#svg-magnifying-glass"></use>
                    </svg>
                    </button>
                </div>
                </form>
            </div>
            </div>

            <div class="table table-forum-category">
            <div class="table-header">
                <div class="table-header-column">
                <p class="table-header-title">Category</p>
                </div>
        
                <div class="table-header-column centered padded-medium">
                <p class="table-header-title">Topics</p>
                </div>
        
                <div class="table-header-column centered padded-medium">
                <p class="table-header-title">Posts</p>
                </div>
        
                <div class="table-header-column padded-big-left">
                <p class="table-header-title">Recent Topics</p>
                </div>
            </div>
        
            <div class="table-body">
                <div class="table-row big">
                <div class="table-column">
                    <div class="forum-category">
                    <a onClick={()=> {
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate({
                            pathname: '/forums-category',
                            search: `?id=${'123'}`
                        })
                    }}>
                        <img class="forum-category-image" src="img/forum/category/01.png" alt="category-01"/>
                    </a>
        
                    <div class="forum-category-info">
                        <p class="forum-category-title"><a onClick={()=> {
                            dispatch(setLoading({
                                status: 'isLoading'
                            }))
                            navigate({
                                pathname: '/forums-category',
                                search: `?id=${'123'}`
                            })
                        }}>Community Hangout</a></p>
        
                        <p class="forum-category-text">A place for the community to talk and chat about whatever they want!</p>
                    </div>
                    </div>
                </div>
        
                <div class="table-column centered padded-medium">
                    <p class="table-title">44</p>
                </div>
        
                <div class="table-column centered padded-medium">
                    <p class="table-title">236</p>
                </div>
        
                <div class="table-column padded-big-left">
                    <a class="table-link" href="forums-discussion">What's your favourite food in the world?</a>
        
                    <a class="table-link" href="forums-discussion">Share a picture of your city or town and let's travel together!</a>
        
                    <a class="table-link" href="forums-discussion">Do you think we'll ever get flying cars in the future?</a>
                </div>
                </div>
        
                <div class="table-row big">
                <div class="table-column">
                    <div class="forum-category">
                    <a onClick={()=> {
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate({
                            pathname: '/forums-category',
                            search: `?id=${'123'}`
                        })
                    }}>
                        <img class="forum-category-image" src="img/forum/category/02.png" alt="category-02"/>
                    </a>
        
                    <div class="forum-category-info">
                        <p class="forum-category-title"><a onClick={()=> {
                            dispatch(setLoading({
                                status: 'isLoading'
                            }))
                            navigate({
                                pathname: '/forums-category',
                                search: `?id=${'123'}`
                            })
                        }}>The Arcade</a></p>
        
                        <p class="forum-category-text">Everything about the gaming world! News, reviews, upcoming games and more!</p>
                    </div>
                    </div>
                </div>
        
                <div class="table-column centered padded-medium">
                    <p class="table-title">23</p>
                </div>
        
                <div class="table-column centered padded-medium">
                    <p class="table-title">109</p>
                </div>
        
                <div class="table-column padded-big-left">
                    <a class="table-link" href="forums-discussion">Post your GTE V character photo and vote for the best!</a>
        
                    <a class="table-link" href="forums-discussion">Does anyone know how to capture Mewthree?</a>
        
                    <a class="table-link" href="forums-discussion">Super Brawl Bross tournament. Sign up right here!</a>
                </div>
                </div>

                <div class="table-row big">
                <div class="table-column">
                    <div class="forum-category">
                    <a onClick={()=> {
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate({
                            pathname: '/forums-category',
                            search: `?id=${'123'}`
                        })
                    }}>
                        <img class="forum-category-image" src="img/forum/category/03.png" alt="category-03"/>
                    </a>
        
                    <div class="forum-category-info">
                        <p class="forum-category-title"><a onClick={()=> {
                            dispatch(setLoading({
                                status: 'isLoading'
                            }))
                            navigate({
                                pathname: '/forums-category',
                                search: `?id=${'123'}`
                            })
                        }}>Cosplayers of the World</a></p>
        
                        <p class="forum-category-text">A place for the community to talk and chat about whatever they want!</p>
                    </div>
                    </div>
                </div>
        
                <div class="table-column centered padded-medium">
                    <p class="table-title">19</p>
                </div>
        
                <div class="table-column centered padded-medium">
                    <p class="table-title">56</p>
                </div>
        
                <div class="table-column padded-big-left">
                    <a class="table-link" href="forums-discussion">Introduce yourself and show us your cosplays!</a>
        
                    <a class="table-link" href="forums-discussion">Show your progress. Post a photo of your first and last cosplay</a>
        
                    <a class="table-link" href="forums-discussion">Tips on how to build a resistant yet light armor</a>
                </div>
                </div>
        
                <div class="table-row big auto">
                <div class="table-column">
                    <div class="forum-category">
                    <a onClick={()=> {
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate({
                            pathname: '/forums-category',
                            search: `?id=${'123'}`
                        })
                    }}>
                        <img class="forum-category-image" src="img/forum/category/04.png" alt="category-04"/>
                    </a>
        
                    <div class="forum-category-info">
                        <p class="forum-category-title"><a onClick={()=> {
                            dispatch(setLoading({
                                status: 'isLoading'
                            }))
                            navigate({
                                pathname: '/forums-category',
                                search: `?id=${'123'}`
                            })
                        }}>Animation Watchtower</a></p>
        
                        <p class="forum-category-text">Everything about the gaming world! News, reviews, upcoming games and more!</p>
        
                        <p class="forum-category-link"><a onClick={()=> {
                            dispatch(setLoading({
                                status: 'isLoading'
                            }))
                            navigate({
                                pathname: '/forums-category',
                                search: `?id=${'123'}`
                            })
                        }}>Comics</a></p>
        
                        <p class="forum-category-link"><a onClick={()=> {
                            dispatch(setLoading({
                                status: 'isLoading'
                            }))
                            navigate({
                                pathname: '/forums-category',
                                search: `?id=${'123'}`
                            })
                        }}>Anime &amp; Manga</a></p>
                    </div>
                    </div>
                </div>
        
                <div class="table-column centered padded-medium">
                    <p class="table-title">31</p>
                </div>
        
                <div class="table-column centered padded-medium">
                    <p class="table-title">96</p>
                </div>
        
                <div class="table-column padded-big-left">
                    <a class="table-link" href="forums-discussion">Bebop Publishing will release a limited edition of "Justice"</a>
        
                    <a class="table-link" href="forums-discussion">Come and discuss that new "Power X" transformation</a>
        
                    <a class="table-link" href="forums-discussion">This is the first image of the new "Multiverse" movie!</a>
                </div>
                </div>

                <div class="table-row big">
                <div class="table-column">
                    <div class="forum-category">
                    <a onClick={()=> {
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate({
                            pathname: '/forums-category',
                            search: `?id=${'123'}`
                        })
                    }}>
                        <img class="forum-category-image" src="img/forum/category/05.png" alt="category-05"/>
                    </a>
        
                    <div class="forum-category-info">
                        <p class="forum-category-title"><a onClick={()=> {
                            dispatch(setLoading({
                                status: 'isLoading'
                            }))
                            navigate({
                                pathname: '/forums-category',
                                search: `?id=${'123'}`
                            })
                        }}>Live Streamers Unite!</a></p>
        
                        <p class="forum-category-text">A place for the community to talk and chat about whatever they want!</p>
                    </div>
                    </div>
                </div>
        
                <div class="table-column centered padded-medium">
                    <p class="table-title">107</p>
                </div>
        
                <div class="table-column centered padded-medium">
                    <p class="table-title">454</p>
                </div>
        
                <div class="table-column padded-big-left">
                    <a class="table-link" href="forums-discussion">Starting your stream? Here are some tips for you!</a>
        
                    <a class="table-link" href="forums-discussion">Charity Runs: Complete list of upcoming charity runs streams</a>
        
                    <a class="table-link" href="forums-discussion">What do you think about the newest "CaptainS" rebranding?</a>
                </div>
                </div>

                <div class="table-row big">
                <div class="table-column">
                    <div class="forum-category">
                    <a onClick={()=> {
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate({
                            pathname: '/forums-category',
                            search: `?id=${'123'}`
                        })
                    }}>
                        <img class="forum-category-image" src="img/forum/category/06.png" alt="category-06"/>
                    </a>
        
                    <div class="forum-category-info">
                        <p class="forum-category-title"><a onClick={()=> {
                            dispatch(setLoading({
                                status: 'isLoading'
                            }))
                            navigate({
                                pathname: '/forums-category',
                                search: `?id=${'123'}`
                            })
                        }}>The Jukebox</a></p>
        
                        <p class="forum-category-text">Everything about the gaming world! News, reviews, upcoming games and more!</p>
                    </div>
                    </div>
                </div>
        
                <div class="table-column centered padded-medium">
                    <p class="table-title">8</p>
                </div>
        
                <div class="table-column centered padded-medium">
                    <p class="table-title">21</p>
                </div>
        
                <div class="table-column padded-big-left">
                    <a class="table-link" href="forums-discussion">Ju Fighters will tour North America in Q4 2020</a>
        
                    <a class="table-link" href="forums-discussion">Recommend a song for...commuting to work (GAME)</a>
        
                    <a class="table-link" href="forums-discussion">I'm selling my Flying X guitar. Come and take a look!</a>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Forums

