import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { setLoading } from '../../../../redux/action/homeAction';

const ProfilePhotos = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    // useEffect(()=> {
    //   let script = document.createElement("script");
    //   let script11 = document.createElement("script");

    //   script.src = "/js/utils/app.js";
    //   script11.src = "/js/global/global.popups.js";
    //   script.async = true;
    //   script11.async = true;
    //   document.body.appendChild(script);
    //   document.body.appendChild(script11);
    // }, [])

    return (
      <>
        <section className="section">
        
          <div className="section-header">
            
            <div className="section-header-info">
              
              <p className="section-pretitle">Browse Marina's</p>
              
        
              
              <h2 className="section-title">Photo Albums</h2>
              
            </div>
            
        
            
            <div className="section-header-actions">
              
              <p className="section-header-action popup-album-creation-trigger">Create Album +</p>
              
              <a className="section-header-action" onClick={()=>{
                dispatch(setLoading({
                status: 'isLoading'
              }))
                navigate('/profile-photos-inside')

              }}>See All</a>
              
            </div>  
            
          </div>
          
          <div className="grid grid-3-3-3-3 centered">
            
            <a className="album-preview" onClick={()=>{
              dispatch(setLoading({
                status: 'isLoading'
              }))
              navigate('/profile-photos-inside')
            }}>
              
              <figure className="album-preview-image liquid">
                <img src="img/cover/01.jpg" alt="album-image-01"/>
              </figure>
              
          
              
              <p className="text-sticker small negative">7</p>
              
          
              
              <div className="album-preview-info">
                
                <p className="album-preview-title">Profile Photos</p>
                
          
                
                <p className="album-preview-text">Updated 12 days ago</p>
                
              </div>
              
            </a>
            

            
            <a className="album-preview" onClick={()=>{
              dispatch(setLoading({
                status: 'isLoading'
              }))
              navigate('/profile-photos-inside')
            }}>
              
              <figure className="album-preview-image liquid">
                <img src="img/cover/10.jpg" alt="album-image-10"/>
              </figure>
              
          
              
              <p className="text-sticker small negative">28</p>
              
          
              
              <div className="album-preview-info">
                
                <p className="album-preview-title">Timeline Photos</p>
                
          
                
                <p className="album-preview-text">Updated 3 days ago</p>
                
              </div>
              
            </a>
            

            
            <a className="album-preview" onClick={()=>{
              dispatch(setLoading({
                status: 'isLoading'
              }))
              navigate('/profile-photos-inside')
            }}>
              
              <figure className="album-preview-image liquid">
                <img src="img/cover/41.jpg" alt="album-image-41"/>
              </figure>
              
          
              
              <p className="text-sticker small negative">36</p>
              
          
              
              <div className="album-preview-info">
                
                <p className="album-preview-title">StreamCon 2019</p>
                
          
                
                <p className="album-preview-text">Updated 1 month ago</p>
                
              </div>
              
            </a>
            

            
            <a className="album-preview" onClick={()=>{
              dispatch(setLoading({
                status: 'isLoading'
              }))
              navigate('/profile-photos-inside')
            }}>
              
              <figure className="album-preview-image liquid">
                <img src="img/cover/06.jpg" alt="album-image-06"/>
              </figure>
              
              <p className="text-sticker small negative">14</p>
              
              <div className="album-preview-info">
                
                <p className="album-preview-title">Gaming Cover Arts</p>
                
                <p className="album-preview-text">Updated 1 day ago</p>
                
              </div>
              
            </a>
            
          </div>
          
          <div className="section-header">
            
            <div className="section-header-info">
              
              <p className="section-pretitle">Check Marina's</p>
              
              <h2 className="section-title">Latest Photos</h2>
              
            </div>
            
            <div className="section-header-actions">
              
              <p className="section-header-action">Upload Photos +</p>
              
              <a className="section-header-action" href="profile-photos-inside">See All</a>
              
            </div>
            
          </div>
          
          <div className="photos-masonry">
            
            <div className="photo-preview popup-picture-trigger">
              
              <figure className="photo-preview-image liquid">
                <img src="img/cover/06.jpg" alt="photo-preview-06"/>
              </figure>
              
          
              
              <div className="photo-preview-info">
                
                <div className="reaction-count-list landscape">
                  
                  <div className="reaction-count negative">
                    
                    <svg className="reaction-count-icon icon-thumbs-up">
                      <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    
          
                    
                    <p className="reaction-count-text">2</p>
                    
                  </div>
                  
          
                  
                  <div className="reaction-count negative">
                    
                    <svg className="reaction-count-icon icon-comment">
                      <use xlinkHref="#svg-comment"></use>
                    </svg>
                    
          
                    
                    <p className="reaction-count-text">5</p>
                    
                  </div>
                  
                </div>
                
              </div>
              
            </div>
            

            
            <div className="photo-preview popup-picture-trigger">
              
              <figure className="photo-preview-image liquid">
                <img src="img/cover/16.jpg" alt="photo-preview-16"/>
              </figure>
              
          
              
              <div className="photo-preview-info">
                
                <div className="reaction-count-list landscape">
                  
                  <div className="reaction-count negative">
                    
                    <svg className="reaction-count-icon icon-thumbs-up">
                      <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    
          
                    
                    <p className="reaction-count-text">2</p>
                    
                  </div>
                  
          
                  
                  <div className="reaction-count negative">
                    
                    <svg className="reaction-count-icon icon-comment">
                      <use xlinkHref="#svg-comment"></use>
                    </svg>
                    
          
                    
                    <p className="reaction-count-text">5</p>
                    
                  </div>
                  
                </div>
                
              </div>
              
            </div>
            

            
            <div className="photo-preview popup-picture-trigger">
              
              <figure className="photo-preview-image liquid">
                <img src="img/cover/04.jpg" alt="photo-preview-04"/>
              </figure>
              
          
              
              <div className="photo-preview-info">
                
                <div className="reaction-count-list landscape">
                  
                  <div className="reaction-count negative">
                    
                    <svg className="reaction-count-icon icon-thumbs-up">
                      <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    
          
                    
                    <p className="reaction-count-text">2</p>
                    
                  </div>
                  
          
                  
                  <div className="reaction-count negative">
                    
                    <svg className="reaction-count-icon icon-comment">
                      <use xlinkHref="#svg-comment"></use>
                    </svg>
                    
          
                    
                    <p className="reaction-count-text">5</p>
                    
                  </div>
                  
                </div>
                
              </div>
              
            </div>
            

            
            <div className="photo-preview popup-picture-trigger">
              
              <figure className="photo-preview-image liquid">
                <img src="img/cover/20.jpg" alt="photo-preview-20"/>
              </figure>
              
          
              
              <div className="photo-preview-info">
                
                <div className="reaction-count-list landscape">
                  
                  <div className="reaction-count negative">
                    
                    <svg className="reaction-count-icon icon-thumbs-up">
                      <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    
          
                    
                    <p className="reaction-count-text">2</p>
                    
                  </div>
                  
          
                  
                  <div className="reaction-count negative">
                    
                    <svg className="reaction-count-icon icon-comment">
                      <use xlinkHref="#svg-comment"></use>
                    </svg>
                    
          
                    
                    <p className="reaction-count-text">5</p>
                    
                  </div>
                  
                </div>
                
              </div>
              
            </div>
            

            
            <div className="photo-preview popup-picture-trigger">
              
              <figure className="photo-preview-image liquid">
                <img src="img/cover/10.jpg" alt="photo-preview-10"/>
              </figure>
              
          
              
              <div className="photo-preview-info">
                
                <div className="reaction-count-list landscape">
                  
                  <div className="reaction-count negative">
                    
                    <svg className="reaction-count-icon icon-thumbs-up">
                      <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    
          
                    
                    <p className="reaction-count-text">2</p>
                    
                  </div>
                  
          
                  
                  <div className="reaction-count negative">
                    
                    <svg className="reaction-count-icon icon-comment">
                      <use xlinkHref="#svg-comment"></use>
                    </svg>
                    
          
                    
                    <p className="reaction-count-text">5</p>
                    
                  </div>
                  
                </div>
                
              </div>
              
            </div>
            

            
            <div className="photo-preview popup-picture-trigger">
              
              <figure className="photo-preview-image liquid">
                <img src="img/cover/18.jpg" alt="photo-preview-18"/>
              </figure>
              
          
              
              <div className="photo-preview-info">
                
                <div className="reaction-count-list landscape">
                  
                  <div className="reaction-count negative">
                    
                    <svg className="reaction-count-icon icon-thumbs-up">
                      <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    
          
                    
                    <p className="reaction-count-text">2</p>
                    
                  </div>
                  
          
                  
                  <div className="reaction-count negative">
                    
                    <svg className="reaction-count-icon icon-comment">
                      <use xlinkHref="#svg-comment"></use>
                    </svg>
                    
          
                    
                    <p className="reaction-count-text">5</p>
                    
                  </div>
                  
                </div>
                
              </div>
              
            </div>
            

            
            <div className="photo-preview popup-picture-trigger">
              
              <figure className="photo-preview-image liquid">
                <img src="img/cover/41.jpg" alt="photo-preview-41"/>
              </figure>
              
          
              
              <div className="photo-preview-info">
                
                <div className="reaction-count-list landscape">
                  
                  <div className="reaction-count negative">
                    
                    <svg className="reaction-count-icon icon-thumbs-up">
                      <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    
          
                    
                    <p className="reaction-count-text">2</p>
                    
                  </div>
                  
          
                  
                  <div className="reaction-count negative">
                    
                    <svg className="reaction-count-icon icon-comment">
                      <use xlinkHref="#svg-comment"></use>
                    </svg>
                    
          
                    
                    <p className="reaction-count-text">5</p>
                    
                  </div>
                  
                </div>
                
              </div>
              
            </div>
            

            
            <div className="photo-preview popup-picture-trigger">
              
              <figure className="photo-preview-image liquid">
                <img src="img/cover/14.jpg" alt="photo-preview-14"/>
              </figure>
              
          
              
              <div className="photo-preview-info">
                
                <div className="reaction-count-list landscape">
                  
                  <div className="reaction-count negative">
                    
                    <svg className="reaction-count-icon icon-thumbs-up">
                      <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    
          
                    
                    <p className="reaction-count-text">2</p>
                    
                  </div>
                  
          
                  
                  <div className="reaction-count negative">
                    
                    <svg className="reaction-count-icon icon-comment">
                      <use xlinkHref="#svg-comment"></use>
                    </svg>
                    
          
                    
                    <p className="reaction-count-text">5</p>
                    
                  </div>
                  
                </div>
                
              </div>
              
            </div>
            

            
            <div className="photo-preview popup-picture-trigger">
              
              <figure className="photo-preview-image liquid">
                <img src="img/cover/19.jpg" alt="photo-preview-19"/>
              </figure>
              
          
              
              <div className="photo-preview-info">
                
                <div className="reaction-count-list landscape">
                  
                  <div className="reaction-count negative">
                    
                    <svg className="reaction-count-icon icon-thumbs-up">
                      <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    
          
                    
                    <p className="reaction-count-text">2</p>
                    
                  </div>
                  
          
                  
                  <div className="reaction-count negative">
                    
                    <svg className="reaction-count-icon icon-comment">
                      <use xlinkHref="#svg-comment"></use>
                    </svg>
                    
          
                    
                    <p className="reaction-count-text">5</p>
                    
                  </div>
                  
                </div>
                
              </div>
              
            </div>
            

            
            <div className="photo-preview popup-picture-trigger">
              
              <figure className="photo-preview-image liquid">
                <img src="img/cover/15.jpg" alt="photo-preview-15"/>
              </figure>
              
          
              
              <div className="photo-preview-info">
                
                <div className="reaction-count-list landscape">
                  
                  <div className="reaction-count negative">
                    
                    <svg className="reaction-count-icon icon-thumbs-up">
                      <use xlinkHref="#svg-thumbs-up"></use>
                    </svg>
                    
          
                    
                    <p className="reaction-count-text">2</p>
                    
                  </div>
                  
          
                  
                  <div className="reaction-count negative">
                    
                    <svg className="reaction-count-icon icon-comment">
                      <use xlinkHref="#svg-comment"></use>
                    </svg>
                    
          
                    
                    <p className="reaction-count-text">5</p>
                    
                  </div>
                  
                </div>
                
              </div>
              
            </div>
            
          </div>
        
        </section>

      </>
    )
}

export default ProfilePhotos