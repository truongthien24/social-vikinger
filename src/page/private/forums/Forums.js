import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoading } from '../../../redux/action/homeAction'

const Forums = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    return (
        <>
            <div className="section-banner">
            <img className="section-banner-icon" src="img/banner/forums-icon.png" alt="forums-icon"/>
        
            <p className="section-banner-title">Forums</p>
        
            <p className="section-banner-text">Talk about anything! Gaming, music, comics and more!</p>
            </div>

            <div className="section-header">
            <div className="section-header-info">
                <p className="section-pretitle">Welcome to</p>
        
                <h2 className="section-title">Vikinger Forums</h2>
            </div>
            </div>

            <div className="section-filters-bar v7">
            <div className="section-filters-bar-actions">
                <div className="section-filters-bar-info">
                <p className="section-filters-bar-title"><a href="forums">Forums</a></p>
        
                <p className="section-filters-bar-text">Last category added <a className="highlighted" onClick={()=> {
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
        
            <div className="section-filters-bar-actions">
                <form className="form">
                <div className="form-item split">
                    <div className="form-input small">
                    <label for="forum-search">Search Forums</label>
                    <input type="text" id="forum-search" name="forum_search"/>
                    </div>
        
                    <button className="button primary">
                    <svg className="icon-magnifying-glass">
                        <use xlinkHref="#svg-magnifying-glass"></use>
                    </svg>
                    </button>
                </div>
                </form>
            </div>
            </div>

            <div className="table table-forum-category">
            <div className="table-header">
                <div className="table-header-column">
                <p className="table-header-title">Category</p>
                </div>
        
                <div className="table-header-column centered padded-medium">
                <p className="table-header-title">Topics</p>
                </div>
        
                <div className="table-header-column centered padded-medium">
                <p className="table-header-title">Posts</p>
                </div>
        
                <div className="table-header-column padded-big-left">
                <p className="table-header-title">Recent Topics</p>
                </div>
            </div>
        
            <div className="table-body">
                <div className="table-row big">
                <div className="table-column">
                    <div className="forum-category">
                    <a onClick={()=> {
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate({
                            pathname: '/forums-category',
                            search: `?id=${'123'}`
                        })
                    }}>
                        <img className="forum-category-image" src="img/forum/category/01.png" alt="category-01"/>
                    </a>
        
                    <div className="forum-category-info">
                        <p className="forum-category-title"><a onClick={()=> {
                            dispatch(setLoading({
                                status: 'isLoading'
                            }))
                            navigate({
                                pathname: '/forums-category',
                                search: `?id=${'123'}`
                            })
                        }}>Community Hangout</a></p>
        
                        <p className="forum-category-text">A place for the community to talk and chat about whatever they want!</p>
                    </div>
                    </div>
                </div>
        
                <div className="table-column centered padded-medium">
                    <p className="table-title">44</p>
                </div>
        
                <div className="table-column centered padded-medium">
                    <p className="table-title">236</p>
                </div>
        
                <div className="table-column padded-big-left">
                    <a className="table-link" href="forums-discussion">What's your favourite food in the world?</a>
        
                    <a className="table-link" href="forums-discussion">Share a picture of your city or town and let's travel together!</a>
        
                    <a className="table-link" href="forums-discussion">Do you think we'll ever get flying cars in the future?</a>
                </div>
                </div>
        
                <div className="table-row big">
                <div className="table-column">
                    <div className="forum-category">
                    <a onClick={()=> {
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate({
                            pathname: '/forums-category',
                            search: `?id=${'123'}`
                        })
                    }}>
                        <img className="forum-category-image" src="img/forum/category/02.png" alt="category-02"/>
                    </a>
        
                    <div className="forum-category-info">
                        <p className="forum-category-title"><a onClick={()=> {
                            dispatch(setLoading({
                                status: 'isLoading'
                            }))
                            navigate({
                                pathname: '/forums-category',
                                search: `?id=${'123'}`
                            })
                        }}>The Arcade</a></p>
        
                        <p className="forum-category-text">Everything about the gaming world! News, reviews, upcoming games and more!</p>
                    </div>
                    </div>
                </div>
        
                <div className="table-column centered padded-medium">
                    <p className="table-title">23</p>
                </div>
        
                <div className="table-column centered padded-medium">
                    <p className="table-title">109</p>
                </div>
        
                <div className="table-column padded-big-left">
                    <a className="table-link" href="forums-discussion">Post your GTE V character photo and vote for the best!</a>
        
                    <a className="table-link" href="forums-discussion">Does anyone know how to capture Mewthree?</a>
        
                    <a className="table-link" href="forums-discussion">Super Brawl Bross tournament. Sign up right here!</a>
                </div>
                </div>

                <div className="table-row big">
                <div className="table-column">
                    <div className="forum-category">
                    <a onClick={()=> {
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate({
                            pathname: '/forums-category',
                            search: `?id=${'123'}`
                        })
                    }}>
                        <img className="forum-category-image" src="img/forum/category/03.png" alt="category-03"/>
                    </a>
        
                    <div className="forum-category-info">
                        <p className="forum-category-title"><a onClick={()=> {
                            dispatch(setLoading({
                                status: 'isLoading'
                            }))
                            navigate({
                                pathname: '/forums-category',
                                search: `?id=${'123'}`
                            })
                        }}>Cosplayers of the World</a></p>
        
                        <p className="forum-category-text">A place for the community to talk and chat about whatever they want!</p>
                    </div>
                    </div>
                </div>
        
                <div className="table-column centered padded-medium">
                    <p className="table-title">19</p>
                </div>
        
                <div className="table-column centered padded-medium">
                    <p className="table-title">56</p>
                </div>
        
                <div className="table-column padded-big-left">
                    <a className="table-link" href="forums-discussion">Introduce yourself and show us your cosplays!</a>
        
                    <a className="table-link" href="forums-discussion">Show your progress. Post a photo of your first and last cosplay</a>
        
                    <a className="table-link" href="forums-discussion">Tips on how to build a resistant yet light armor</a>
                </div>
                </div>
        
                <div className="table-row big auto">
                <div className="table-column">
                    <div className="forum-category">
                    <a onClick={()=> {
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate({
                            pathname: '/forums-category',
                            search: `?id=${'123'}`
                        })
                    }}>
                        <img className="forum-category-image" src="img/forum/category/04.png" alt="category-04"/>
                    </a>
        
                    <div className="forum-category-info">
                        <p className="forum-category-title"><a onClick={()=> {
                            dispatch(setLoading({
                                status: 'isLoading'
                            }))
                            navigate({
                                pathname: '/forums-category',
                                search: `?id=${'123'}`
                            })
                        }}>Animation Watchtower</a></p>
        
                        <p className="forum-category-text">Everything about the gaming world! News, reviews, upcoming games and more!</p>
        
                        <p className="forum-category-link"><a onClick={()=> {
                            dispatch(setLoading({
                                status: 'isLoading'
                            }))
                            navigate({
                                pathname: '/forums-category',
                                search: `?id=${'123'}`
                            })
                        }}>Comics</a></p>
        
                        <p className="forum-category-link"><a onClick={()=> {
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
        
                <div className="table-column centered padded-medium">
                    <p className="table-title">31</p>
                </div>
        
                <div className="table-column centered padded-medium">
                    <p className="table-title">96</p>
                </div>
        
                <div className="table-column padded-big-left">
                    <a className="table-link" href="forums-discussion">Bebop Publishing will release a limited edition of "Justice"</a>
        
                    <a className="table-link" href="forums-discussion">Come and discuss that new "Power X" transformation</a>
        
                    <a className="table-link" href="forums-discussion">This is the first image of the new "Multiverse" movie!</a>
                </div>
                </div>

                <div className="table-row big">
                <div className="table-column">
                    <div className="forum-category">
                    <a onClick={()=> {
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate({
                            pathname: '/forums-category',
                            search: `?id=${'123'}`
                        })
                    }}>
                        <img className="forum-category-image" src="img/forum/category/05.png" alt="category-05"/>
                    </a>
        
                    <div className="forum-category-info">
                        <p className="forum-category-title"><a onClick={()=> {
                            dispatch(setLoading({
                                status: 'isLoading'
                            }))
                            navigate({
                                pathname: '/forums-category',
                                search: `?id=${'123'}`
                            })
                        }}>Live Streamers Unite!</a></p>
        
                        <p className="forum-category-text">A place for the community to talk and chat about whatever they want!</p>
                    </div>
                    </div>
                </div>
        
                <div className="table-column centered padded-medium">
                    <p className="table-title">107</p>
                </div>
        
                <div className="table-column centered padded-medium">
                    <p className="table-title">454</p>
                </div>
        
                <div className="table-column padded-big-left">
                    <a className="table-link" href="forums-discussion">Starting your stream? Here are some tips for you!</a>
        
                    <a className="table-link" href="forums-discussion">Charity Runs: Complete list of upcoming charity runs streams</a>
        
                    <a className="table-link" href="forums-discussion">What do you think about the newest "CaptainS" rebranding?</a>
                </div>
                </div>

                <div className="table-row big">
                <div className="table-column">
                    <div className="forum-category">
                    <a onClick={()=> {
                        dispatch(setLoading({
                            status: 'isLoading'
                        }))
                        navigate({
                            pathname: '/forums-category',
                            search: `?id=${'123'}`
                        })
                    }}>
                        <img className="forum-category-image" src="img/forum/category/06.png" alt="category-06"/>
                    </a>
        
                    <div className="forum-category-info">
                        <p className="forum-category-title"><a onClick={()=> {
                            dispatch(setLoading({
                                status: 'isLoading'
                            }))
                            navigate({
                                pathname: '/forums-category',
                                search: `?id=${'123'}`
                            })
                        }}>The Jukebox</a></p>
        
                        <p className="forum-category-text">Everything about the gaming world! News, reviews, upcoming games and more!</p>
                    </div>
                    </div>
                </div>
        
                <div className="table-column centered padded-medium">
                    <p className="table-title">8</p>
                </div>
        
                <div className="table-column centered padded-medium">
                    <p className="table-title">21</p>
                </div>
        
                <div className="table-column padded-big-left">
                    <a className="table-link" href="forums-discussion">Ju Fighters will tour North America in Q4 2020</a>
        
                    <a className="table-link" href="forums-discussion">Recommend a song for...commuting to work (GAME)</a>
        
                    <a className="table-link" href="forums-discussion">I'm selling my Flying X guitar. Come and take a look!</a>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Forums

