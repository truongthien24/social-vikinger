import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoading } from '../../../redux/action/homeAction'

const Stream = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();
  return (
    <div class="content-grid">
        <div class="section-banner">
        <img class="section-banner-icon" src="img/banner/streams-icon.png" alt="streams-icon"/>
    
        <p class="section-banner-title">Streams (98)</p>
    
        <p class="section-banner-text">Check out all the members streams!</p>
        </div>

        <div class="section-header">
        <div class="section-header-info">
            <p class="section-pretitle">Chosen by the Community</p>
    
            <h2 class="section-title">Featured Streamers</h2>
        </div>
    
        <div class="section-header-actions">
            <div id="stream-slider-controls" class="slider-controls">
            <div class="slider-control left">
                <svg class="slider-control-icon icon-big-arrow">
                    <use xlinkHref="#svg-big-arrow"></use>
                </svg>
                </div>
    
                <div class="slider-control right">
                <svg class="slider-control-icon icon-big-arrow">
                    <use xlinkHref="#svg-big-arrow"></use>
                </svg>
                </div>
            </div>
        </div>
        </div>

        <div id="stream-slider" class="section-slider">
        <div class="sections-slider-item">
            <div class="streamer-box small">
            <figure class="streamer-box-cover liquid">
                <img src="img/cover/01.jpg" alt="cover-01"/>
            </figure>
        
            <div class="streamer-box-info">
                <div class="streamer-box-image">
                <figure class="picture medium circle liquid">
                    <img src="img/avatar/01-social.png" alt="avatar-01-social"/>
                </figure>
                </div>
        
                <p class="streamer-box-title">GameHuntress</p>
        
                <p class="streamer-box-text">Marina Valentine</p>
        
                <p class="streamer-box-status">Offline</p>
        
                <a class="button small white" onClick={()=> {
                    dispatch(setLoading({
                        status: 'isLoading'
                    }));
                    navigate({
                        pathname: '/profile-timeline',
                        search: `?id=${'123'}`
                    })
                }}>View Profile</a>
        
                <a class="button small twitch" href="https://www.twitch.tv/" target="_blank">Visit Channel</a>
            </div>
            </div>
        </div>

        <div class="sections-slider-item">
            <div class="streamer-box small">
            <figure class="streamer-box-cover liquid">
                <img src="img/cover/04.jpg" alt="cover-04"/>
            </figure>
        
            <div class="streamer-box-info">
                <div class="streamer-box-image">
                <figure class="picture medium circle liquid">
                    <img src="img/avatar/31.jpg" alt="avatar-31"/>
                </figure>
                </div>
        
                <p class="streamer-box-title">NekoStreamz</p>
        
                <p class="streamer-box-text">Neko Bebop</p>
        
                <p class="streamer-box-status active">Live</p>
        
                <a class="button small white" onClick={()=> {
                    dispatch(setLoading({
                        status: 'isLoading'
                    }));
                    navigate({
                        pathname: '/profile-timeline',
                        search: `?id=${'123'}`
                    })
                }}>View Profile</a>
        
                <a class="button small twitch" href="https://www.twitch.tv/" target="_blank">Visit Channel</a>
            </div>
            </div>
        </div>

        <div class="sections-slider-item">
            <div class="streamer-box small">
            <figure class="streamer-box-cover liquid">
                <img src="img/cover/06.jpg" alt="cover-06"/>
            </figure>
        
            <div class="streamer-box-info">
                <div class="streamer-box-image">
                <figure class="picture medium circle liquid">
                    <img src="img/avatar/04.jpg" alt="avatar-04"/>
                </figure>
                </div>
        
                <p class="streamer-box-title">BeardedWonder66</p>
        
                <p class="streamer-box-text">Bearded Wonder</p>
        
                <p class="streamer-box-status active">Live</p>
        
                <a class="button small white" onClick={()=> {
                    dispatch(setLoading({
                        status: 'isLoading'
                    }));
                    navigate({
                        pathname: '/profile-timeline',
                        search: `?id=${'123'}`
                    })
                }}>View Profile</a>
        
                <a class="button small twitch" href="https://www.twitch.tv/" target="_blank">Visit Channel</a>
            </div>
            </div>
        </div>

        <div class="sections-slider-item">
            <div class="streamer-box small">
            <figure class="streamer-box-cover liquid">
                <img src="img/cover/05.jpg" alt="cover-05"/>
            </figure>
        
            <div class="streamer-box-info">
                <div class="streamer-box-image">
                <figure class="picture medium circle liquid">
                    <img src="img/avatar/32.jpg" alt="avatar-32"/>
                </figure>
                </div>
        
                <p class="streamer-box-title">Diamondette</p>
        
                <p class="streamer-box-text">Sarah Diamond</p>
        
                <p class="streamer-box-status active">Live</p>
        
                <a class="button small white" onClick={()=> {
                    dispatch(setLoading({
                        status: 'isLoading'
                    }));
                    navigate({
                        pathname: '/profile-timeline',
                        search: `?id=${'123'}`
                    })
                }}>View Profile</a>
        
                <a class="button small twitch" href="https://www.twitch.tv/" target="_blank">Visit Channel</a>
            </div>
            </div>
        </div>

        <div class="sections-slider-item">
            <div class="streamer-box small">
            <figure class="streamer-box-cover liquid">
                <img src="img/cover/23.jpg" alt="cover-23"/>
            </figure>
        
            <div class="streamer-box-info">
                <div class="streamer-box-image">
                <figure class="picture medium circle liquid">
                    <img src="img/avatar/03.jpg" alt="avatar-03"/>
                </figure>
                </div>
        
                <p class="streamer-box-title">Nick'sArcade</p>
        
                <p class="streamer-box-text">Nick Grissom</p>
        
                <p class="streamer-box-status">Offline</p>
        
                <a class="button small white" onClick={()=> {
                    dispatch(setLoading({
                        status: 'isLoading'
                    }));
                    navigate({
                        pathname: '/profile-timeline',
                        search: `?id=${'123'}`
                    })
                }}>View Profile</a>
        
                <a class="button small twitch" href="https://www.twitch.tv/" target="_blank">Visit Channel</a>
            </div>
            </div>
        </div>

        <div class="sections-slider-item">
            <div class="streamer-box small">
            <figure class="streamer-box-cover liquid">
                <img src="img/cover/15.jpg" alt="cover-15"/>
            </figure>
        
            <div class="streamer-box-info">
                <div class="streamer-box-image">
                <figure class="picture medium circle liquid">
                    <img src="img/avatar/33.jpg" alt="avatar-33"/>
                </figure>
                </div>
        
                <p class="streamer-box-title">DexD-Destroyer</p>
        
                <p class="streamer-box-text">Destroy Dex</p>
        
                <p class="streamer-box-status active">Live</p>
        
                <a class="button small white" onClick={()=> {
                    dispatch(setLoading({
                        status: 'isLoading'
                    }));
                    navigate({
                        pathname: '/profile-timeline',
                        search: `?id=${'123'}`
                    })
                }}>View Profile</a>
        
                <a class="button small twitch" href="https://www.twitch.tv/" target="_blank">Visit Channel</a>
            </div>
            </div>
        </div>

        <div class="sections-slider-item">
            <div class="streamer-box small">
            <figure class="streamer-box-cover liquid">
                <img src="img/cover/17.jpg" alt="cover-17"/>
            </figure>
        
            <div class="streamer-box-info">
                <div class="streamer-box-image">
                <figure class="picture medium circle liquid">
                    <img src="img/avatar/23.jpg" alt="avatar-23"/>
                </figure>
                </div>
        
                <p class="streamer-box-title">SakuraR</p>
        
                <p class="streamer-box-text">Rosie Sakura</p>
        
                <p class="streamer-box-status active">Live</p>
        
                <a class="button small white" onClick={()=> {
                    dispatch(setLoading({
                        status: 'isLoading'
                    }));
                    navigate({
                        pathname: '/profile-timeline',
                        search: `?id=${'123'}`
                    })
                }}>View Profile</a>
        
                <a class="button small twitch" href="https://www.twitch.tv/" target="_blank">Visit Channel</a>
            </div>
            </div>
        </div>
        </div>

        <div class="section-header">
        <div class="section-header-info">
            <p class="section-pretitle">Watch what you want</p>
    
            <h2 class="section-title">Browse All Streams</h2>
        </div>
        </div>

        <div class="section-filters-bar v2">
        <form class="form">
            <div class="form-item split medium">
            <div class="form-select">
                <label for="stream-filter-show">Show</label>
                <select id="stream-filter-show" name="stream_filter_show">
                <option value="0">All Streams</option>
                <option value="1">Gameplay Streams</option>
                <option value="2">Walkthrough Streams</option>
                </select>
                <svg class="form-select-icon icon-small-arrow">
                <use xlinkHref="#svg-small-arrow"></use>
                </svg>
            </div>

            <div class="form-select">
                <label for="stream-filter-criteria">Filter By</label>
                <select id="stream-filter-criteria" name="stream_filter_criteria">
                <option value="0">Viewers (Descending)</option>
                <option value="1">Viewers (Ascending)</option>
                </select>
                <svg class="form-select-icon icon-small-arrow">
                <use xlinkHref="#svg-small-arrow"></use>
                </svg>
            </div>

            <div class="form-select">
                <label for="stream-filter-count">Show</label>
                <select id="stream-filter-count" name="stream_filter_count">
                <option value="0">12 Per Page</option>
                <option value="1">24 Per Page</option>
                </select>
                <svg class="form-select-icon icon-small-arrow">
                <use xlinkHref="#svg-small-arrow"></use>
                </svg>
            </div>
        
            <button class="button secondary">Filter Streams</button>
            </div>
        </form>
        </div>

        <div class="grid grid-3-3-3-3 centered">
        <div class="stream-box">
            <div class="stream-box-video">
            <iframe src="https://player.twitch.tv/?channel=cohhcarnage" allowfullscreen></iframe>
            </div>
        
            <div class="stream-box-image">
            <figure class="picture tiny circle liquid">
                <img src="img/avatar/01-social.png" alt="avatar-01-social"/>
            </figure>
            </div>
        
            <div class="stream-box-info">
            <p class="stream-box-title"><a href="profile-stream">I'm Playing Athena’s Goddess Story...</a></p>
        
            <p class="stream-box-text"><a href="https://www.twitch.tv/" target="_blank">@GameHuntress</a></p>
        
            <p class="stream-box-category">Category: <a href="https://www.twitch.tv/" target="_blank">Zodiac Goddess</a></p>
            </div>
        
            <div class="stream-box-meta">
            <a class="user-avatar small no-outline" onClick={()=> {
                dispatch(setLoading({
                    status: 'isLoading'
                }));
                navigate({
                    pathname: '/profile-timeline',
                    search: `?id=${'123'}`
                })
            }}>
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
            </div>
        </div>

        <div class="stream-box">
            <div class="stream-box-video">
            <iframe src="https://player.twitch.tv/?channel=cohhcarnage" allowfullscreen></iframe>
            </div>
        
            <div class="stream-box-image">
            <figure class="picture tiny circle liquid">
                <img src="img/avatar/31.jpg" alt="avatar-31"/>
            </figure>
            </div>
        
            <div class="stream-box-info">
            <p class="stream-box-title"><a href="profile-stream">Ram Goddess Gameplay</a></p>
        
            <p class="stream-box-text"><a href="https://www.twitch.tv/" target="_blank">@NekoStreamz</a></p>
        
            <p class="stream-box-category">Category: <a href="https://www.twitch.tv/" target="_blank">Zodiac Goddess</a></p>
            </div>
        
            <div class="stream-box-meta">
            <a class="user-avatar small no-outline" onClick={()=> {
                dispatch(setLoading({
                    status: 'isLoading'
                }));
                navigate({
                    pathname: '/profile-timeline',
                    search: `?id=${'123'}`
                })
            }}>
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
            </div>
        </div>

        <div class="stream-box">
            <div class="stream-box-video">
            <iframe src="https://player.twitch.tv/?channel=cohhcarnage" allowfullscreen></iframe>
            </div>
        
            <div class="stream-box-image">
            <figure class="picture tiny circle liquid">
                <img src="img/avatar/33.jpg" alt="avatar-33"/>
            </figure>
            </div>
        
            <div class="stream-box-info">
            <p class="stream-box-title"><a href="profile-stream">I Play the Witch Hunters Story with...</a></p>
        
            <p class="stream-box-text"><a href="https://www.twitch.tv/" target="_blank">@DexD-Destroyer</a></p>
        
            <p class="stream-box-category">Category: <a href="https://www.twitch.tv/" target="_blank">Witch Hunters</a></p>
            </div>
        
            <div class="stream-box-meta">
            <a class="user-avatar small no-outline" onClick={()=> {
                dispatch(setLoading({
                    status: 'isLoading'
                }));
                navigate({
                    pathname: '/profile-timeline',
                    search: `?id=${'123'}`
                })
            }}>
                <div class="user-avatar-content">
                <div class="hexagon-image-30-32" data-src="img/avatar/02.jpg"></div>
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
            
                <p class="user-avatar-badge-text">13</p>
                </div>
            </a>
            </div>
        </div>

        <div class="stream-box">
            <div class="stream-box-video">
            <iframe src="https://player.twitch.tv/?channel=cohhcarnage" allowfullscreen></iframe>
            </div>
        
            <div class="stream-box-image">
            <figure class="picture tiny circle liquid">
                <img src="img/avatar/32.jpg" alt="avatar-32"/>
            </figure>
            </div>
        
            <div class="stream-box-info">
            <p class="stream-box-title"><a href="profile-stream">First Play: Zodiac Goddess</a></p>
        
            <p class="stream-box-text"><a href="https://www.twitch.tv/" target="_blank">@Diamondette</a></p>
        
            <p class="stream-box-category">Category: <a href="https://www.twitch.tv/" target="_blank">Zodiac Goddess</a></p>
            </div>
        
            <div class="stream-box-meta">
            <a class="user-avatar small no-outline" onClick={()=> {
                dispatch(setLoading({
                    status: 'isLoading'
                }));
                navigate({
                    pathname: '/profile-timeline',
                    search: `?id=${'123'}`
                })
            }}>
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
            </div>
        </div>

        <div class="stream-box">
            <div class="stream-box-video">
            <iframe src="https://player.twitch.tv/?channel=cohhcarnage" allowfullscreen></iframe>
            </div>
        
            <div class="stream-box-image">
            <figure class="picture tiny circle liquid">
                <img src="img/avatar/04.jpg" alt="avatar-04"/>
            </figure>
            </div>
        
            <div class="stream-box-info">
            <p class="stream-box-title"><a href="profile-stream">Rony's EggRing Quest</a></p>
        
            <p class="stream-box-text"><a href="https://www.twitch.tv/" target="_blank">@BeardedWonder66</a></p>
        
            <p class="stream-box-category">Category: <a href="https://www.twitch.tv/" target="_blank">Rony da Hedgehog</a></p>
            </div>
        
            <div class="stream-box-meta">
            <a class="user-avatar small no-outline" onClick={()=> {
                dispatch(setLoading({
                    status: 'isLoading'
                }));
                navigate({
                    pathname: '/profile-timeline',
                    search: `?id=${'123'}`
                })
            }}>
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
            </div>
        </div>

        <div class="stream-box">
            <div class="stream-box-video">
            <iframe src="https://player.twitch.tv/?channel=cohhcarnage" allowfullscreen></iframe>
            </div>
        
            <div class="stream-box-image">
            <figure class="picture tiny circle liquid">
                <img src="img/avatar/13.jpg" alt="avatar-13"/>
            </figure>
            </div>
        
            <div class="stream-box-info">
            <p class="stream-box-title"><a href="profile-stream">Robo Bross Level Maker</a></p>
        
            <p class="stream-box-text"><a href="https://www.twitch.tv/" target="_blank">@TomatoFilter</a></p>
        
            <p class="stream-box-category">Category: <a href="https://www.twitch.tv/" target="_blank">Super Robo Bross II</a></p>
            </div>
        
            <div class="stream-box-meta">
            <a class="user-avatar small no-outline" onClick={()=> {
                dispatch(setLoading({
                    status: 'isLoading'
                }));
                navigate({
                    pathname: '/profile-timeline',
                    search: `?id=${'123'}`
                })
            }}>
                <div class="user-avatar-content">
                <div class="hexagon-image-30-32" data-src="img/avatar/13.jpg"></div>
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
            
                <p class="user-avatar-badge-text">18</p>
                </div>
            </a>
            </div>
        </div>

        <div class="stream-box">
            <div class="stream-box-video">
            <iframe src="https://player.twitch.tv/?channel=cohhcarnage" allowfullscreen></iframe>
            </div>
        
            <div class="stream-box-image">
            <figure class="picture tiny circle liquid">
                <img src="img/avatar/22.jpg" alt="avatar-22"/>
            </figure>
            </div>
        
            <div class="stream-box-info">
            <p class="stream-box-title"><a href="profile-stream">Athena Goddess Gameplay</a></p>
        
            <p class="stream-box-text"><a href="https://www.twitch.tv/" target="_blank">@StaggPatrns</a></p>
        
            <p class="stream-box-category">Category: <a href="https://www.twitch.tv/" target="_blank">Zodiac Goddess</a></p>
            </div>
        
            <div class="stream-box-meta">
            <a class="user-avatar small no-outline" onClick={()=> {
                dispatch(setLoading({
                    status: 'isLoading'
                }));
                navigate({
                    pathname: '/profile-timeline',
                    search: `?id=${'123'}`
                })
            }}>
                <div class="user-avatar-content">
                <div class="hexagon-image-30-32" data-src="img/avatar/22.jpg"></div>
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
            
                <p class="user-avatar-badge-text">3</p>
                </div>
            </a>
            </div>
        </div>

        <div class="stream-box">
            <div class="stream-box-video">
            <iframe src="https://player.twitch.tv/?channel=cohhcarnage" allowfullscreen></iframe>
            </div>
        
            <div class="stream-box-image">
            <figure class="picture tiny circle liquid">
                <img src="img/avatar/21.jpg" alt="avatar-21"/>
            </figure>
            </div>
        
            <div class="stream-box-info">
            <p class="stream-box-title"><a href="profile-stream">2 New Levels on Mochi's Island for the...</a></p>
        
            <p class="stream-box-text"><a href="https://www.twitch.tv/" target="_blank">@HappyWhale</a></p>
        
            <p class="stream-box-category">Category: <a href="https://www.twitch.tv/" target="_blank">Mochi's Island</a></p>
            </div>
        
            <div class="stream-box-meta">
            <a class="user-avatar small no-outline" onClick={()=> {
                dispatch(setLoading({
                    status: 'isLoading'
                }));
                navigate({
                    pathname: '/profile-timeline',
                    search: `?id=${'123'}`
                })
            }}>
                <div class="user-avatar-content">
                <div class="hexagon-image-30-32" data-src="img/avatar/21.jpg"></div>
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
            
                <p class="user-avatar-badge-text">11</p>
                </div>
            </a>
            </div>
        </div>

        <div class="stream-box">
            <div class="stream-box-video">
            <iframe src="https://player.twitch.tv/?channel=cohhcarnage" allowfullscreen></iframe>
            </div>
        
            <div class="stream-box-image">
            <figure class="picture tiny circle liquid">
                <img src="img/avatar/19.jpg" alt="avatar-19"/>
            </figure>
            </div>
        
            <div class="stream-box-info">
            <p class="stream-box-title"><a href="profile-stream">Hare Goddess Gameplay</a></p>
        
            <p class="stream-box-text"><a href="https://www.twitch.tv/" target="_blank">@Mane-Queen</a></p>
        
            <p class="stream-box-category">Category: <a href="https://www.twitch.tv/" target="_blank">Zodiac Goddess</a></p>
            </div>
        
            <div class="stream-box-meta">
            <a class="user-avatar small no-outline" onClick={()=> {
                dispatch(setLoading({
                    status: 'isLoading'
                }));
                navigate({
                    pathname: '/profile-timeline',
                    search: `?id=${'123'}`
                })
            }}>
                <div class="user-avatar-content">
                <div class="hexagon-image-30-32" data-src="img/avatar/19.jpg"></div>
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
            
                <p class="user-avatar-badge-text">5</p>
                </div>
            </a>
            </div>
        </div>

        <div class="stream-box">
            <div class="stream-box-video">
            <iframe src="https://player.twitch.tv/?channel=cohhcarnage" allowfullscreen></iframe>
            </div>
        
            <div class="stream-box-image">
            <figure class="picture tiny circle liquid">
                <img src="img/avatar/20.jpg" alt="avatar-20"/>
            </figure>
            </div>
        
            <div class="stream-box-info">
            <p class="stream-box-title"><a href="profile-stream">1 Hour of Capture the Flag</a></p>
        
            <p class="stream-box-text"><a href="https://www.twitch.tv/" target="_blank">@DoAlchemist</a></p>
        
            <p class="stream-box-category">Category: <a href="https://www.twitch.tv/" target="_blank">a-Rex Legends</a></p>
            </div>
        
            <div class="stream-box-meta">
            <a class="user-avatar small no-outline" onClick={()=> {
                dispatch(setLoading({
                    status: 'isLoading'
                }));
                navigate({
                    pathname: '/profile-timeline',
                    search: `?id=${'123'}`
                })
            }}>
                <div class="user-avatar-content">
                <div class="hexagon-image-30-32" data-src="img/avatar/20.jpg"></div>
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
            
                <p class="user-avatar-badge-text">9</p>
                </div>
            </a>
            </div>
        </div>

        <div class="stream-box">
            <div class="stream-box-video">
            <iframe src="https://player.twitch.tv/?channel=cohhcarnage" allowfullscreen></iframe>
            </div>
        
            <div class="stream-box-image">
            <figure class="picture tiny circle liquid">
                <img src="img/avatar/11.jpg" alt="avatar-11"/>
            </figure>
            </div>
        
            <div class="stream-box-info">
            <p class="stream-box-title"><a href="profile-stream">Witch Paragliding Minigame</a></p>
        
            <p class="stream-box-text"><a href="https://www.twitch.tv/" target="_blank">@BunnyWarrior</a></p>
        
            <p class="stream-box-category">Category: <a href="https://www.twitch.tv/" target="_blank">Witch Hunters</a></p>
            </div>
        
            <div class="stream-box-meta">
            <a class="user-avatar small no-outline" onClick={()=> {
                dispatch(setLoading({
                    status: 'isLoading'
                }));
                navigate({
                    pathname: '/profile-timeline',
                    search: `?id=${'123'}`
                })
            }}>
                <div class="user-avatar-content">
                <div class="hexagon-image-30-32" data-src="img/avatar/11.jpg"></div>
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
            
                <p class="user-avatar-badge-text">17</p>
                </div>
            </a>
            </div>
        </div>
        
        <div class="stream-box">
            <div class="stream-box-video">
            <iframe src="https://player.twitch.tv/?channel=cohhcarnage" allowfullscreen></iframe>
            </div>
        
            <div class="stream-box-image">
            <figure class="picture tiny circle liquid">
                <img src="img/avatar/03.jpg" alt="avatar-03"/>
            </figure>
            </div>
        
            <div class="stream-box-info">
            <p class="stream-box-title"><a href="profile-stream">Exploring The Orc Witch Cave</a></p>
        
            <p class="stream-box-text"><a href="https://www.twitch.tv/" target="_blank">@Nick'sArcade</a></p>
        
            <p class="stream-box-category">Category: <a href="https://www.twitch.tv/" target="_blank">Witch Hunters</a></p>
            </div>
        
            <div class="stream-box-meta">
            <a class="user-avatar small no-outline" onClick={()=> {
                dispatch(setLoading({
                    status: 'isLoading'
                }));
                navigate({
                    pathname: '/profile-timeline',
                    search: `?id=${'123'}`
                })
            }}>
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
            </div>
        </div>
        </div>

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

        <p class="section-results-text">Showing 12 out of 98 streams</p>
    </div>
  )
}

export default Stream