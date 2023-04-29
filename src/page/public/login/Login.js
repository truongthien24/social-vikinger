import React from 'react'

const Login = () => {
  return (
    <div class="landing">
        <div class="landing-decoration"></div>

        <div class="landing-info">
        <div class="logo">
            <svg class="icon-logo-vikinger">
            <use xLinkHref="#svg-logo-vikinger"></use>
            </svg>
        </div>

        <h2 class="landing-info-pretitle">Welcome to</h2>

        <h1 class="landing-info-title">Vikinger</h1>
        <p class="landing-info-text">The next generation social network &amp; community! Connect with your friends and play with our quests and badges gamification system!</p>


        <div class="tab-switch">
            <p class="tab-switch-button login-register-form-trigger">Login</p>

            <p class="tab-switch-button login-register-form-trigger">Register</p>
        </div>
        </div>

        <div class="landing-form">
        <div class="form-box login-register-form-element">
            <img class="form-box-decoration overflowing" src="img/landing/rocket.png" alt="rocket"/>

            <h2 class="form-box-title">Account Login</h2>
        
            <form class="form">
            <div class="form-row">
                <div class="form-item">
                <div class="form-input">
                    <label for="login-username">Username or Email</label>
                    <input type="text" id="login-username" name="login_username"/>
                </div>
                </div>
            </div>
        
            <div class="form-row">
                <div class="form-item">
                <div class="form-input">
                    <label for="login-password">Password</label>
                    <input type="password" id="login-password" name="login_password"/>
                </div>
                </div>
            </div>
        
            <div class="form-row space-between">
                <div class="form-item">
                <div class="checkbox-wrap">
                    <input type="checkbox" id="login-remember" name="login_remember" checked/>
                    <div class="checkbox-box">
                    <svg class="icon-cross">
                        <use xLinkHref="#svg-cross"></use>
                    </svg>
                    </div>
                    <label for="login-remember">Remember Me</label>
                </div>
                </div>
        
                <div class="form-item">
                <a class="form-link" href="#">Forgot Password?</a>
                </div>
            </div>
        
            <div class="form-row">
                <div class="form-item">
                <button class="button medium secondary">Login to your Account!</button>
                </div>
            </div>
            </form>
        
            <p class="lined-text">Login with your Social Account</p>
        
            <div class="social-links">
            
            <a class="social-link facebook" href="#">
                <svg class="icon-facebook">
                    <use xLinkHref="#svg-facebook"></use>
                </svg>
            </a>
            
            <a class="social-link twitter" href="#">
                <svg class="icon-twitter">
                    <use xLinkHref="#svg-twitter"></use>
                </svg>
            </a>
            
            <a class="social-link twitch" href="#">
                <svg class="icon-twitch">
                    <use xLinkHref="#svg-twitch"></use>
                </svg>
            </a>
            
            <a class="social-link youtube" href="#">
                <svg class="icon-youtube">
                <use xLinkHref="#svg-youtube"></use>
                </svg>
            </a>
            </div>
        </div>
        
        <div class="form-box login-register-form-element">
            
            <img class="form-box-decoration" src="img/landing/rocket.png" alt="rocket"/>
            

            
            <h2 class="form-box-title">Create your Account!</h2>
            
        
            
            <form class="form">
            
            <div class="form-row">
                
                <div class="form-item">
                
                <div class="form-input">
                    <label for="register-email">Your Email</label>
                    <input type="text" id="register-email" name="register_email"/>
                </div>
                
                </div>
                
            </div>
            
        
            
            <div class="form-row">
                
                <div class="form-item">
                
                <div class="form-input">
                    <label for="register-username">Username</label>
                    <input type="text" id="register-username" name="register_username"/>
                </div>
                
                </div>
                
            </div>
            
        
            
            <div class="form-row">
                
                <div class="form-item">
                
                <div class="form-input">
                    <label for="register-password">Password</label>
                    <input type="password" id="register-password" name="register_password"/>
                </div>
                
                </div>
                
            </div>
            
        
            
            <div class="form-row">
                
                <div class="form-item">
                
                <div class="form-input">
                    <label for="register-password-repeat">Repeat Password</label>
                    <input type="password" id="register-password-repeat" name="register_password_repeat"/>
                </div>
                
                </div>
                
            </div>
            
        
            
            <div class="form-row">
                
                <div class="form-item">
                
                <div class="checkbox-wrap">
                    <input type="checkbox" id="register-newsletter" name="register_newsletter" checked/>
                    
                    <div class="checkbox-box">
                    
                    <svg class="icon-cross">
                        <use xLinkHref="#svg-cross"></use>
                    </svg>
                    
                    </div>
                    
                    <label for="register-newsletter">Send me news and updates via email</label>
                </div>
                
                </div>
                
            </div>
            
        
            
            <div class="form-row">
                
                <div class="form-item">
                
                <button class="button medium primary">Register Now!</button>
                
                </div>
                
            </div>
            
            </form>
            
        
            
            <p class="form-text">You'll receive a confirmation email in your inbox with a link to activate your account. If you have any problems, <a href="#">contact us</a>!</p>
            
        </div>
        
        </div>
        
    </div>
  )
}

export default Login