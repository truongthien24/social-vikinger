import React, { useEffect } from 'react'

const Login = () => {

    // JS
    // useEffect(()=> {
    //     app.plugins.createTab({
    //         triggers: '.login-register-form-trigger',
    //         elements: '.login-register-form-element',
    //         animation: {
    //           type: 'slide-in-right'
    //         },
    //         onTabChange: function (activeTab) {
    //           const firstInput = activeTab.querySelector('input');
          
    //           firstInput.focus();
    //         }
    //     });
    // }, [])

    useEffect(()=> {
        const res = document.querySelectorAll('.form-input');
        for (const el of res) {
            console.log(el)
          if (el.classList.contains('always-active')) continue;
          
          const input = el.querySelector('input'),
                textarea = el.querySelector('textarea'),
                activeClass = 'active';
      
          let inputItem = undefined;
      
          if (input) inputItem = input;
          if (textarea) inputItem = textarea;
          if (inputItem) {
            inputItem.addEventListener('focus', function () {
              debugger;
              el.classList.add(activeClass);
            });
      
            inputItem.addEventListener('blur', function () {
              if (inputItem.value === '') {
                el.classList.remove(activeClass);
              }
            });
          }
        }
        // document.querySelectorAll('.form-input', function (elements) {
        //     for (const el of elements) {
        //         console.log(el)
        //       if (el.classList.contains('always-active')) continue;
              
        //       const input = el.querySelector('input'),
        //             textarea = el.querySelector('textarea'),
        //             activeClass = 'active';
          
        //       let inputItem = undefined;
          
        //       if (input) inputItem = input;
        //       if (textarea) inputItem = textarea;
        //       if (inputItem) {
        //         inputItem.addEventListener('focus', function () {
        //           debugger;
        //           el.classList.add(activeClass);
        //         });
          
        //         inputItem.addEventListener('blur', function () {
        //           if (inputItem.value === '') {
        //             el.classList.remove(activeClass);
        //           }
        //         });
        //       }
        //     }
        //   });
    })

    // Return
    return (
        <div className="landing">
            <div className="landing-decoration"></div>

            <div className="landing-info">
            <div className="logo">
                <svg className="icon-logo-vikinger">
                <use xLinkHref="#svg-logo-vikinger"></use>
                </svg>
            </div>

            <h2 className="landing-info-pretitle">Welcome to</h2>

            <h1 className="landing-info-title">Vikinger</h1>
            <p className="landing-info-text">The next generation social network &amp; community! Connect with your friends and play with our quests and badges gamification system!</p>


            <div className="tab-switch">
                <p className="tab-switch-button login-register-form-trigger">Login</p>

                <p className="tab-switch-button login-register-form-trigger">Register</p>
            </div>
            </div>

            <div className="landing-form">
            <div className="form-box login-register-form-element">
                <img className="form-box-decoration overflowing" src="img/landing/rocket.png" alt="rocket"/>

                <h2 className="form-box-title">Account Login</h2>
            
                <form className="form">
                <div className="form-row">
                    <div className="form-item">
                    <div className="form-input">
                        <label htmlFor="login-username">Username or Email</label>
                        <input type="text" id="login-username" name="login_username"/>
                    </div>
                    </div>
                </div>
            
                <div className="form-row">
                    <div className="form-item">
                    <div className="form-input">
                        <label htmlFor="login-password">Password</label>
                        <input type="password" id="login-password" name="login_password"/>
                    </div>
                    </div>
                </div>
            
                <div className="form-row space-between">
                    <div className="form-item">
                    <div className="checkbox-wrap">
                        <input type="checkbox" id="login-remember" name="login_remember" checked/>
                        <div className="checkbox-box">
                        <svg className="icon-cross">
                            <use xLinkHref="#svg-cross"></use>
                        </svg>
                        </div>
                        <label htmlFor="login-remember">Remember Me</label>
                    </div>
                    </div>
            
                    <div className="form-item">
                    <a className="form-link" href="#">Forgot Password?</a>
                    </div>
                </div>
            
                <div className="form-row">
                    <div className="form-item">
                    <button className="button medium secondary">Login to your Account!</button>
                    </div>
                </div>
                </form>
            
                <p className="lined-text">Login with your Social Account</p>
            
                <div className="social-links">
                
                <a className="social-link facebook" href="#">
                    <svg className="icon-facebook">
                        <use xLinkHref="#svg-facebook"></use>
                    </svg>
                </a>
                
                <a className="social-link twitter" href="#">
                    <svg className="icon-twitter">
                        <use xLinkHref="#svg-twitter"></use>
                    </svg>
                </a>
                
                <a className="social-link twitch" href="#">
                    <svg className="icon-twitch">
                        <use xLinkHref="#svg-twitch"></use>
                    </svg>
                </a>
                
                <a className="social-link youtube" href="#">
                    <svg className="icon-youtube">
                    <use xLinkHref="#svg-youtube"></use>
                    </svg>
                </a>
                </div>
            </div>
            
            <div className="form-box login-register-form-element">
                
                <img className="form-box-decoration" src="img/landing/rocket.png" alt="rocket"/>
                

                
                <h2 className="form-box-title">Create your Account!</h2>
                
            
                
                <form className="form">
                
                <div className="form-row">
                    
                    <div className="form-item">
                    
                    <div className="form-input">
                        <label htmlFor="register-email">Your Email</label>
                        <input type="text" id="register-email" name="register_email"/>
                    </div>
                    
                    </div>
                    
                </div>
                
            
                
                <div className="form-row">
                    
                    <div className="form-item">
                    
                    <div className="form-input">
                        <label htmlFor="register-username">Username</label>
                        <input type="text" id="register-username" name="register_username"/>
                    </div>
                    
                    </div>
                    
                </div>
                
            
                
                <div className="form-row">
                    
                    <div className="form-item">
                    
                    <div className="form-input">
                        <label htmlFor="register-password">Password</label>
                        <input type="password" id="register-password" name="register_password"/>
                    </div>
                    
                    </div>
                    
                </div>
                
            
                
                <div className="form-row">
                    
                    <div className="form-item">
                    
                    <div className="form-input">
                        <label htmlFor="register-password-repeat">Repeat Password</label>
                        <input type="password" id="register-password-repeat" name="register_password_repeat"/>
                    </div>
                    
                    </div>
                    
                </div>
                
            
                
                <div className="form-row">
                    
                    <div className="form-item">
                    
                    <div className="checkbox-wrap">
                        <input type="checkbox" id="register-newsletter" name="register_newsletter" checked/>
                        
                        <div className="checkbox-box">
                        
                        <svg className="icon-cross">
                            <use xLinkHref="#svg-cross"></use>
                        </svg>
                        
                        </div>
                        
                        <label htmlFor="register-newsletter">Send me news and updates via email</label>
                    </div>
                    
                    </div>
                    
                </div>
                
            
                
                <div className="form-row">
                    
                    <div className="form-item">
                    
                    <button className="button medium primary">Register Now!</button>
                    
                    </div>
                    
                </div>
                
                </form>
                
            
                
                <p className="form-text">You'll receive a confirmation email in your inbox with a link to activate your account. If you have any problems, <a href="#">contact us</a>!</p>
                
            </div>
            
            </div>
            
        </div>
    )
}

export default Login