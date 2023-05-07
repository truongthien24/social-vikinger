import React, { useEffect } from 'react'

const ProfileVideo = () => {

    useEffect(()=> {
        let script = document.createElement("script");
        let script11 = document.createElement("script");
  
        script.src = "/js/utils/app.js";
        script11.src = "/js/global/global.popups.js";
        script.async = true;
        script11.async = true;
        document.body.appendChild(script);
        document.body.appendChild(script11);

        return () => {
            document.body.removeChild(script);
            document.body.removeChild(script11);
        }

    }, [])
    
    return (
        <section class="section">
            <div class="section-header">
                <div class="section-header-info">
                    <p class="section-pretitle">Browse Marina's</p>

                    <h2 class="section-title">Videos <span class="highlighted">7</span></h2>
                </div>

                <div class="section-header-actions">
                    <p class="section-header-action">Add Video +</p>
                </div>
            </div>

            <div class="grid grid-3-3-3-3 centered">
                <div class="video-box">
                    <div class="video-box-cover popup-video-trigger">
                    <figure class="video-box-cover-image liquid">
                        <img src="img/cover/08.jpg" alt="cover-08"/>
                    </figure>
                
                    <div class="play-button">
                        <svg class="play-button-icon icon-play">
                        <use xlinkHref="#svg-play"></use>
                        </svg>
                    </div>
                    </div>
                
                    <div class="video-box-info">
                    <p class="video-box-title">Mochi's Island Story Mode</p>
                
                    <p class="video-box-text">1 hour ago</p>
                    </div>
                </div>

                <div class="video-box">
                    <div class="video-box-cover popup-video-trigger">
                    <figure class="video-box-cover-image liquid">
                        <img src="img/cover/09.jpg" alt="cover-09"/>
                    </figure>
                
                    <div class="play-button">
                        <svg class="play-button-icon icon-play">
                        <use xlinkHref="#svg-play"></use>
                        </svg>
                    </div>
                    </div>
                
                    <div class="video-box-info">
                    <p class="video-box-title">Sunset Cowboys Walkthrough</p>
                
                    <p class="video-box-text">3 days ago</p>
                    </div>
                </div>

                <div class="video-box">
                    <div class="video-box-cover popup-video-trigger">
                    <figure class="video-box-cover-image liquid">
                        <img src="img/cover/05.jpg" alt="cover-05"/>
                    </figure>
                
                    <div class="play-button">
                        <svg class="play-button-icon icon-play">
                        <use xlinkHref="#svg-play"></use>
                        </svg>
                    </div>
                    </div>
                
                    <div class="video-box-info">
                    <p class="video-box-title">Quest of the Ogre II: The Revenge USA...</p>
                
                    <p class="video-box-text">5 days ago</p>
                    </div>
                </div>

                <div class="video-box">
                    <div class="video-box-cover popup-video-trigger">
                    <figure class="video-box-cover-image liquid">
                        <img src="img/cover/22.jpg" alt="cover-22"/>
                    </figure>
                
                    <div class="play-button">
                        <svg class="play-button-icon icon-play">
                        <use xlinkHref="#svg-play"></use>
                        </svg>
                    </div>
                    </div>
                
                    <div class="video-box-info">
                    <p class="video-box-title">GameCon 2019 Arcade Palace!</p>
                
                    <p class="video-box-text">5 days ago</p>
                    </div>
                </div>

                <div class="video-box">
                    <div class="video-box-cover popup-video-trigger">
                    <figure class="video-box-cover-image liquid">
                        <img src="img/cover/02.jpg" alt="cover-02"/>
                    </figure>
                
                    <div class="play-button">
                        <svg class="play-button-icon icon-play">
                        <use xlinkHref="#svg-play"></use>
                        </svg>
                    </div>
                    </div>
                
                    <div class="video-box-info">
                    <p class="video-box-title">Xenowatch New Character: Dinna...</p>
                
                    <p class="video-box-text">1 week ago</p>
                    </div>
                </div>

                <div class="video-box">
                    <div class="video-box-cover popup-video-trigger">
                    <figure class="video-box-cover-image liquid">
                        <img src="img/cover/21.jpg" alt="cover-21"/>
                    </figure>
                
                    <div class="play-button">
                        <svg class="play-button-icon icon-play">
                        <use xlinkHref="#svg-play"></use>
                        </svg>
                    </div>
                    </div>
                
                    <div class="video-box-info">
                    <p class="video-box-title">We Try the New Soccer 2019 Game</p>
                
                    <p class="video-box-text">1 week ago</p>
                    </div>
                </div>

                <div class="video-box">
                    <div class="video-box-cover popup-video-trigger">
                    <figure class="video-box-cover-image liquid">
                        <img src="img/cover/23.jpg" alt="cover-23"/>
                    </figure>
                
                    <div class="play-button">
                        <svg class="play-button-icon icon-play">
                        <use xlinkHref="#svg-play"></use>
                        </svg>
                    </div>
                    </div>
                
                    <div class="video-box-info">
                    <p class="video-box-title">Necromancers VS Alchemists: League...</p>
                
                    <p class="video-box-text">3 weeks ago</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProfileVideo