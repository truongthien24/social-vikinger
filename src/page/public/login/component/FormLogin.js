import React from 'react'

const FormLogin = () => {
  return (
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
                    <input type="checkbox" id="login-remember" name="login_remember" defaultChecked/>
                    <div className="checkbox-box">
                    <svg className="icon-cross">
                        <use xlinkHref="#svg-cross"></use>
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
                <use xlinkHref="#svg-facebook"></use>
            </svg>
        </a>
        
        <a className="social-link twitter" href="#">
            <svg className="icon-twitter">
                <use xlinkHref="#svg-twitter"></use>
            </svg>
        </a>
        
        <a className="social-link twitch" href="#">
            <svg className="icon-twitch">
                <use xlinkHref="#svg-twitch"></use>
            </svg>
        </a>
        
        <a className="social-link youtube" href="#">
            <svg className="icon-youtube">
            <use xlinkHref="#svg-youtube"></use>
            </svg>
        </a>
        </div>
    </div>
  )
}

export default FormLogin