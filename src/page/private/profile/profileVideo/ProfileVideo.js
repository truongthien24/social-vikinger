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
        <section className="section">
            <div className="section-header">
                <div className="section-header-info">
                    <p className="section-pretitle">Browse Marina's</p>

                    <h2 className="section-title">Videos <span className="highlighted">7</span></h2>
                </div>

                <div className="section-header-actions">
                    <p className="section-header-action">Add Video +</p>
                </div>
            </div>

            <div className="grid grid-3-3-3-3 centered">
                <div className="video-box">
                    <div className="video-box-cover popup-video-trigger">
                    <figure className="video-box-cover-image liquid">
                        <img src="img/cover/08.jpg" alt="cover-08"/>
                    </figure>
                
                    <div className="play-button">
                        <svg className="play-button-icon icon-play">
                        <use xlinkHref="#svg-play"></use>
                        </svg>
                    </div>
                    </div>
                
                    <div className="video-box-info">
                    <p className="video-box-title">Mochi's Island Story Mode</p>
                
                    <p className="video-box-text">1 hour ago</p>
                    </div>
                </div>

                <div className="video-box">
                    <div className="video-box-cover popup-video-trigger">
                    <figure className="video-box-cover-image liquid">
                        <img src="img/cover/09.jpg" alt="cover-09"/>
                    </figure>
                
                    <div className="play-button">
                        <svg className="play-button-icon icon-play">
                        <use xlinkHref="#svg-play"></use>
                        </svg>
                    </div>
                    </div>
                
                    <div className="video-box-info">
                    <p className="video-box-title">Sunset Cowboys Walkthrough</p>
                
                    <p className="video-box-text">3 days ago</p>
                    </div>
                </div>

                <div className="video-box">
                    <div className="video-box-cover popup-video-trigger">
                    <figure className="video-box-cover-image liquid">
                        <img src="img/cover/05.jpg" alt="cover-05"/>
                    </figure>
                
                    <div className="play-button">
                        <svg className="play-button-icon icon-play">
                        <use xlinkHref="#svg-play"></use>
                        </svg>
                    </div>
                    </div>
                
                    <div className="video-box-info">
                    <p className="video-box-title">Quest of the Ogre II: The Revenge USA...</p>
                
                    <p className="video-box-text">5 days ago</p>
                    </div>
                </div>

                <div className="video-box">
                    <div className="video-box-cover popup-video-trigger">
                    <figure className="video-box-cover-image liquid">
                        <img src="img/cover/22.jpg" alt="cover-22"/>
                    </figure>
                
                    <div className="play-button">
                        <svg className="play-button-icon icon-play">
                        <use xlinkHref="#svg-play"></use>
                        </svg>
                    </div>
                    </div>
                
                    <div className="video-box-info">
                    <p className="video-box-title">GameCon 2019 Arcade Palace!</p>
                
                    <p className="video-box-text">5 days ago</p>
                    </div>
                </div>

                <div className="video-box">
                    <div className="video-box-cover popup-video-trigger">
                    <figure className="video-box-cover-image liquid">
                        <img src="img/cover/02.jpg" alt="cover-02"/>
                    </figure>
                
                    <div className="play-button">
                        <svg className="play-button-icon icon-play">
                        <use xlinkHref="#svg-play"></use>
                        </svg>
                    </div>
                    </div>
                
                    <div className="video-box-info">
                    <p className="video-box-title">Xenowatch New Character: Dinna...</p>
                
                    <p className="video-box-text">1 week ago</p>
                    </div>
                </div>

                <div className="video-box">
                    <div className="video-box-cover popup-video-trigger">
                    <figure className="video-box-cover-image liquid">
                        <img src="img/cover/21.jpg" alt="cover-21"/>
                    </figure>
                
                    <div className="play-button">
                        <svg className="play-button-icon icon-play">
                        <use xlinkHref="#svg-play"></use>
                        </svg>
                    </div>
                    </div>
                
                    <div className="video-box-info">
                    <p className="video-box-title">We Try the New Soccer 2019 Game</p>
                
                    <p className="video-box-text">1 week ago</p>
                    </div>
                </div>

                <div className="video-box">
                    <div className="video-box-cover popup-video-trigger">
                    <figure className="video-box-cover-image liquid">
                        <img src="img/cover/23.jpg" alt="cover-23"/>
                    </figure>
                
                    <div className="play-button">
                        <svg className="play-button-icon icon-play">
                        <use xlinkHref="#svg-play"></use>
                        </svg>
                    </div>
                    </div>
                
                    <div className="video-box-info">
                    <p className="video-box-title">Necromancers VS Alchemists: League...</p>
                
                    <p className="video-box-text">3 weeks ago</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProfileVideo