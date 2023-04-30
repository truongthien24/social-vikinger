import React, { useEffect } from 'react'
import FormLogin from './component/FormLogin';
import FormRegister from './component/FormRegister';

const Login = () => {

    // useEffect
    useEffect(()=> {
        const res = document.querySelectorAll('.form-input');
        for (const el of res) {
          if (el.classList.contains('always-active')) continue;
          
          const input = el.querySelector('input'),
                textarea = el.querySelector('textarea'),
                activeClass = 'active';
      
          let inputItem = undefined;
      
          if (input) inputItem = input;
          if (textarea) inputItem = textarea;
          if (inputItem) {
            inputItem.addEventListener('focus', function () {
              el.classList.add(activeClass);
            });
      
            inputItem.addEventListener('blur', function () {
              if (inputItem.value === '') {
                el.classList.remove(activeClass);
              }
            });
          }
        }
    })

    // Return
    return (
        <div className="landing">
            <div className="landing-decoration"></div>

            <div className="landing-info">
            <div className="logo">
                <svg className="icon-logo-vikinger">
                <use xlinkHref="#svg-logo-vikinger"></use>
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

                {/* Login */}
                <FormLogin/>

                {/* Register */}
                <FormRegister/>
            </div>
            
        </div>
    )
}

export default Login