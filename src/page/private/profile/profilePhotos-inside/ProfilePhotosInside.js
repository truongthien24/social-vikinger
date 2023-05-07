import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setLoading } from '../../../../redux/action/homeAction'

const ProfilePhotosInside = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch();

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
            
            <p class="section-pretitle">Updated 3 days ago</p>
            
    
            
            <h2 class="section-title">Timeline Photos <span class="highlighted">28</span></h2>
            
            </div>
            

            
            <div class="section-header-actions">
            
            <p class="section-header-action">Add Photos +</p>
            
        
            
            <a class="section-header-action" onClick={()=> {
                dispatch(setLoading({
                    status: 'isLoading'
                }))
                navigate("/profile-photos")
            }}>Go Back</a>
            
            </div>
            
        </div>
        

        
        <div class="grid grid-2-2-2-2-2-2 centered">
            
            <div class="photo-preview small popup-picture-trigger">
            
            <figure class="photo-preview-image liquid">
                <img src="img/cover/01.jpg" alt="photo-preview-01"/>
            </figure>
            
        
            
            <div class="photo-preview-info">
                
                <div class="reaction-count-list">
                    
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-thumbs-up">
                    <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">2</p>
                    
                </div>
                
        
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-comment">
                    <use xlinkHref="#svg-comment"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">5</p>
                    
                </div>
                
                </div>
                
            </div>
            
            </div>
            
            
            
            <div class="photo-preview small popup-picture-trigger">
            
            <figure class="photo-preview-image liquid">
                <img src="img/cover/15.jpg" alt="photo-preview-15"/>
            </figure>
            
        
            
            <div class="photo-preview-info">
                
                <div class="reaction-count-list">
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-thumbs-up">
                    <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">2</p>
                    
                </div>
                
        
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-comment">
                    <use xlinkHref="#svg-comment"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">5</p>
                    
                </div>
                
                </div>
                
            </div>
            
            </div>
            

            
            <div class="photo-preview small popup-picture-trigger">
            
            <figure class="photo-preview-image liquid">
                <img src="img/cover/10.jpg" alt="photo-preview-10"/>
            </figure>
            
        
            
            <div class="photo-preview-info">
                
                <div class="reaction-count-list">
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-thumbs-up">
                    <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">2</p>
                    
                </div>
                
        
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-comment">
                    <use xlinkHref="#svg-comment"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">5</p>
                    
                </div>
                
                </div>
                
            </div>
            
            </div>
            

            
            <div class="photo-preview small popup-picture-trigger">
            
            <figure class="photo-preview-image liquid">
                <img src="img/cover/02.jpg" alt="photo-preview-02"/>
            </figure>
            
        
            
            <div class="photo-preview-info">
                
                <div class="reaction-count-list">
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-thumbs-up">
                    <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">2</p>
                    
                </div>
                
        
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-comment">
                    <use xlinkHref="#svg-comment"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">5</p>
                    
                </div>
                
                </div>
                
            </div>
            
            </div>
            

            
            <div class="photo-preview small popup-picture-trigger">
            
            <figure class="photo-preview-image liquid">
                <img src="img/cover/28.jpg" alt="photo-preview-28"/>
            </figure>
            
        
            
            <div class="photo-preview-info">
                
                <div class="reaction-count-list">
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-thumbs-up">
                    <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">2</p>
                    
                </div>
                
        
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-comment">
                    <use xlinkHref="#svg-comment"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">5</p>
                    
                </div>
                
                </div>
                
            </div>
            
            </div>
            

            
            <div class="photo-preview small popup-picture-trigger">
            
            <figure class="photo-preview-image liquid">
                <img src="img/cover/04.jpg" alt="photo-preview-04"/>
            </figure>
            
        
            
            <div class="photo-preview-info">
                
                <div class="reaction-count-list">
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-thumbs-up">
                    <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">2</p>
                    
                </div>
                
        
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-comment">
                    <use xlinkHref="#svg-comment"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">5</p>
                    
                </div>
                
                </div>
                
            </div>
            
            </div>
            

            
            <div class="photo-preview small popup-picture-trigger">
            
            <figure class="photo-preview-image liquid">
                <img src="img/cover/06.jpg" alt="photo-preview-06"/>
            </figure>
            
        
            
            <div class="photo-preview-info">
                
                <div class="reaction-count-list">
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-thumbs-up">
                    <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">2</p>
                    
                </div>
                
        
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-comment">
                    <use xlinkHref="#svg-comment"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">5</p>
                    
                </div>
                
                </div>
                
            </div>
            
            </div>
            

            
            <div class="photo-preview small popup-picture-trigger">
            
            <figure class="photo-preview-image liquid">
                <img src="img/cover/20.jpg" alt="photo-preview-20"/>
            </figure>
            
        
            
            <div class="photo-preview-info">
                
                <div class="reaction-count-list">
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-thumbs-up">
                    <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">2</p>
                    
                </div>
                
        
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-comment">
                    <use xlinkHref="#svg-comment"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">5</p>
                    
                </div>
                
                </div>
                
            </div>
            
            </div>
            

            
            <div class="photo-preview small popup-picture-trigger">
            
            <figure class="photo-preview-image liquid">
                <img src="img/cover/38.jpg" alt="photo-preview-38"/>
            </figure>
            
        
            
            <div class="photo-preview-info">
                
                <div class="reaction-count-list">
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-thumbs-up">
                    <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">2</p>
                    
                </div>
                
        
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-comment">
                    <use xlinkHref="#svg-comment"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">5</p>
                    
                </div>
                
                </div>
                
            </div>
            
            </div>
            

            
            <div class="photo-preview small popup-picture-trigger">
            
            <figure class="photo-preview-image liquid">
                <img src="img/cover/49.jpg" alt="photo-preview-49"/>
            </figure>
            
        
            
            <div class="photo-preview-info">
                
                <div class="reaction-count-list">
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-thumbs-up">
                    <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">2</p>
                    
                </div>
                
        
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-comment">
                    <use xlinkHref="#svg-comment"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">5</p>
                    
                </div>
                
                </div>
                
            </div>
            
            </div>
            

            
            <div class="photo-preview small popup-picture-trigger">
            
            <figure class="photo-preview-image liquid">
                <img src="img/cover/09.jpg" alt="photo-preview-09"/>
            </figure>
            
        
            
            <div class="photo-preview-info">
                
                <div class="reaction-count-list">
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-thumbs-up">
                    <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">2</p>
                    
                </div>
                
        
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-comment">
                    <use xlinkHref="#svg-comment"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">5</p>
                    
                </div>
                
                </div>
                
            </div>
            
            </div>
            

            
            <div class="photo-preview small popup-picture-trigger">
            
            <figure class="photo-preview-image liquid">
                <img src="img/cover/24.jpg" alt="photo-preview-24"/>
            </figure>
            
        
            
            <div class="photo-preview-info">
                
                <div class="reaction-count-list">
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-thumbs-up">
                    <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">2</p>
                    
                </div>
                
        
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-comment">
                    <use xlinkHref="#svg-comment"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">5</p>
                    
                </div>
                
                </div>
                
            </div>
            
            </div>
            

            
            <div class="photo-preview small popup-picture-trigger">
            
            <figure class="photo-preview-image liquid">
                <img src="img/cover/25.jpg" alt="photo-preview-25"/>
            </figure>
            
        
            
            <div class="photo-preview-info">
                
                <div class="reaction-count-list">
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-thumbs-up">
                    <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">2</p>
                    
                </div>
                
        
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-comment">
                    <use xlinkHref="#svg-comment"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">5</p>
                    
                </div>
                
                </div>
                
            </div>
            
            </div>
            

            
            <div class="photo-preview small popup-picture-trigger">
            
            <figure class="photo-preview-image liquid">
                <img src="img/cover/43.jpg" alt="photo-preview-43"/>
            </figure>
            
        
            
            <div class="photo-preview-info">
                
                <div class="reaction-count-list">
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-thumbs-up">
                    <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">2</p>
                    
                </div>
                
        
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-comment">
                    <use xlinkHref="#svg-comment"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">5</p>
                    
                </div>
                
                </div>
                
            </div>
            
            </div>
            

            
            <div class="photo-preview small popup-picture-trigger">
            
            <figure class="photo-preview-image liquid">
                <img src="img/cover/05.jpg" alt="photo-preview-05"/>
            </figure>
            
        
            
            <div class="photo-preview-info">
                
                <div class="reaction-count-list">
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-thumbs-up">
                    <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">2</p>
                    
                </div>
                
        
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-comment">
                    <use xlinkHref="#svg-comment"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">5</p>
                    
                </div>
                
                </div>
                
            </div>
            
            </div>
            

            
            <div class="photo-preview small popup-picture-trigger">
            
            <figure class="photo-preview-image liquid">
                <img src="img/cover/31.jpg" alt="photo-preview-31"/>
            </figure>
            
        
            
            <div class="photo-preview-info">
                
                <div class="reaction-count-list">
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-thumbs-up">
                    <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">2</p>
                    
                </div>
                
        
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-comment">
                    <use xlinkHref="#svg-comment"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">5</p>
                    
                </div>
                
                </div>
                
            </div>
            
            </div>
            

            
            <div class="photo-preview small popup-picture-trigger">
            
            <figure class="photo-preview-image liquid">
                <img src="img/cover/39.jpg" alt="photo-preview-39"/>
            </figure>
            
        
            
            <div class="photo-preview-info">
                
                <div class="reaction-count-list">
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-thumbs-up">
                    <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">2</p>
                    
                </div>
                
        
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-comment">
                    <use xlinkHref="#svg-comment"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">5</p>
                    
                </div>
                
                </div>
                
            </div>
            
            </div>
            

            
            <div class="photo-preview small popup-picture-trigger">
            
            <figure class="photo-preview-image liquid">
                <img src="img/cover/08.jpg" alt="photo-preview-08"/>
            </figure>
            
        
            
            <div class="photo-preview-info">
                
                <div class="reaction-count-list">
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-thumbs-up">
                    <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">2</p>
                    
                </div>
                
        
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-comment">
                    <use xlinkHref="#svg-comment"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">5</p>
                    
                </div>
                
                </div>
                
            </div>
            
            </div>
            

            
            <div class="photo-preview small popup-picture-trigger">
            
            <figure class="photo-preview-image liquid">
                <img src="img/cover/23.jpg" alt="photo-preview-23"/>
            </figure>
            
        
            
            <div class="photo-preview-info">
                
                <div class="reaction-count-list">
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-thumbs-up">
                    <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">2</p>
                    
                </div>
                
        
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-comment">
                    <use xlinkHref="#svg-comment"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">5</p>
                    
                </div>
                
                </div>
                
            </div>
            
            </div>
            

            
            <div class="photo-preview small popup-picture-trigger">
            
            <figure class="photo-preview-image liquid">
                <img src="img/cover/14.jpg" alt="photo-preview-14"/>
            </figure>
            
        
            
            <div class="photo-preview-info">
                
                <div class="reaction-count-list">
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-thumbs-up">
                    <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">2</p>
                    
                </div>
                
        
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-comment">
                    <use xlinkHref="#svg-comment"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">5</p>
                    
                </div>
                
                </div>
                
            </div>
            
            </div>
            

            
            <div class="photo-preview small popup-picture-trigger">
            
            <figure class="photo-preview-image liquid">
                <img src="img/cover/19.jpg" alt="photo-preview-19"/>
            </figure>
            
        
            
            <div class="photo-preview-info">
                
                <div class="reaction-count-list">
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-thumbs-up">
                    <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">2</p>
                    
                </div>
                
        
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-comment">
                    <use xlinkHref="#svg-comment"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">5</p>
                    
                </div>
                
                </div>
                
            </div>
            
            </div>
            

            
            <div class="photo-preview small popup-picture-trigger">
            
            <figure class="photo-preview-image liquid">
                <img src="img/cover/07.jpg" alt="photo-preview-07"/>
            </figure>
            
        
            
            <div class="photo-preview-info">
                
                <div class="reaction-count-list">
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-thumbs-up">
                    <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">2</p>
                    
                </div>
                
        
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-comment">
                    <use xlinkHref="#svg-comment"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">5</p>
                    
                </div>
                
                </div>
                
            </div>
            
            </div>
            

            
            <div class="photo-preview small popup-picture-trigger">
            
            <figure class="photo-preview-image liquid">
                <img src="img/cover/32.jpg" alt="photo-preview-32"/>
            </figure>
            
        
            
            <div class="photo-preview-info">
                
                <div class="reaction-count-list">
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-thumbs-up">
                    <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">2</p>
                    
                </div>
                
        
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-comment">
                    <use xlinkHref="#svg-comment"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">5</p>
                    
                </div>
                
                </div>
                
            </div>
            
            </div>
            

            
            <div class="photo-preview small popup-picture-trigger">
            
            <figure class="photo-preview-image liquid">
                <img src="img/cover/21.jpg" alt="photo-preview-21"/>
            </figure>
            
        
            
            <div class="photo-preview-info">
                
                <div class="reaction-count-list">
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-thumbs-up">
                    <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">2</p>
                    
                </div>
                
        
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-comment">
                    <use xlinkHref="#svg-comment"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">5</p>
                    
                </div>
                
                </div>
                
            </div>
            
            </div>
            

            
            <div class="photo-preview small popup-picture-trigger">
            
            <figure class="photo-preview-image liquid">
                <img src="img/cover/18.jpg" alt="photo-preview-18"/>
            </figure>
            
        
            
            <div class="photo-preview-info">
                
                <div class="reaction-count-list">
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-thumbs-up">
                    <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">2</p>
                    
                </div>
                
        
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-comment">
                    <use xlinkHref="#svg-comment"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">5</p>
                    
                </div>
                
                </div>
                
            </div>
            
            </div>
            

            
            <div class="photo-preview small popup-picture-trigger">
            
            <figure class="photo-preview-image liquid">
                <img src="img/cover/36.jpg" alt="photo-preview-36"/>
            </figure>
            
        
            
            <div class="photo-preview-info">
                
                <div class="reaction-count-list">
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-thumbs-up">
                    <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">2</p>
                    
                </div>
                
        
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-comment">
                    <use xlinkHref="#svg-comment"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">5</p>
                    
                </div>
                
                </div>
                
            </div>
            
            </div>
            

            
            <div class="photo-preview small popup-picture-trigger">
            
            <figure class="photo-preview-image liquid">
                <img src="img/cover/16.jpg" alt="photo-preview-16"/>
            </figure>
            
        
            
            <div class="photo-preview-info">
                
                <div class="reaction-count-list">
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-thumbs-up">
                    <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">2</p>
                    
                </div>
                
        
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-comment">
                    <use xlinkHref="#svg-comment"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">5</p>
                    
                </div>
                
                </div>
                
            </div>
            
            </div>
            

            
            <div class="photo-preview small popup-picture-trigger">
            
            <figure class="photo-preview-image liquid">
                <img src="img/cover/22.jpg" alt="photo-preview-22"/>
            </figure>
            
        
            
            <div class="photo-preview-info">
                
                <div class="reaction-count-list">
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-thumbs-up">
                    <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">2</p>
                    
                </div>
                
        
                
                <div class="reaction-count negative">
                    
                    <svg class="reaction-count-icon icon-comment">
                    <use xlinkHref="#svg-comment"></use>
                    </svg>
                    
        
                    
                    <p class="reaction-count-text">5</p>
                    
                </div>
                
                </div>
                
            </div>
            
            </div>
            
        </div>
        
        </section>
        
    )
}

export default ProfilePhotosInside