import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from 'react-redux';
import { registerAccount } from '../../../../redux/action/accountAction';
 
const FormRegister = () => {

    const dispatch = useDispatch();

    const {register, handleSubmit, watch, formState: {errors}} = useForm({
        mode: 'onChange',
        defaultValues: {
            email: '',
            userName: '',
            password: '',
            confirmPassword: '',
        },
        resolver: yupResolver(
            yup.object().shape({
                email: yup.string().email('abc@gmail.com').required('Please input'),
                userName: yup.string().required('Please input'),
                password: yup.string().required('Please input'),
                confirmPassword: yup.string().required('Please input').oneOf([yup.ref('password'), null], 'Password must match'),
            })
        )
    })

    // Method
    const handleRegister = async () => {
        dispatch(registerAccount({...watch(), role: 'guest'}))
    }

    return (
        <div className="form-box login-register-form-element">
            <img className="form-box-decoration" src="img/landing/rocket.png" alt="rocket"/>
            <h2 className="form-box-title">Create your Account!</h2>
            <form className="form" onSubmit={handleSubmit(handleRegister)}>
            
                <div className="form-row">
                    
                    <div className="form-item">
                    
                    <div className="form-input">
                        <label htmlFor="register-email">Your Email</label>
                        <input type="text" id="register-email" {...register('email')} style={{borderColor: `${errors?.['email']  ? '#ff2d74' : ''}`}}/>
                    </div>
                    
                    </div>
                    
                </div>
                <div className="form-row">
                    
                    <div className="form-item">
                    
                    <div className="form-input">
                        <label htmlFor="register-username">Username</label>
                        <input type="text" id="register-username" {...register('userName')} style={{borderColor: `${errors?.['userName']  ? '#ff2d74' : ''}`}}/>
                    </div>
                    
                    </div>
                    
                </div>
                
                <div className="form-row">
                    
                    <div className="form-item">
                    
                    <div className="form-input">
                        <label htmlFor="register-password">Password</label>
                        <input type="password" id="register-password" {...register('password')} style={{borderColor: `${errors?.['password']  ? '#ff2d74' : ''}`}}/>
                    </div>
                    
                    </div>
                    
                </div>
                
            
                
                <div className="form-row">
                    
                    <div className="form-item">
                    
                    <div className="form-input">
                        <label htmlFor="register-password-repeat">Repeat Password</label>
                        <input type="password" {...register('confirmPassword')} style={{borderColor: `${errors?.['confirmPassword']  ? '#ff2d74' : ''}`}}/>
                    </div>
                    
                    </div>
                    
                </div>

                <div className="form-row">
                    
                    <div className="form-item">
                    
                    <div className="checkbox-wrap">
                        <input type="checkbox" id="register-newsletter" name="register_newsletter" defaultChecked/>
                        
                        <div className="checkbox-box">
                        
                        <svg className="icon-cross">
                            <use xlinkHref="#svg-cross"></use>
                        </svg>
                        
                        </div>
                        
                        <label htmlFor="register-newsletter">Send me news and updates via email</label>
                    </div>
                    
                    </div>
                    
                </div>

                <div className="form-row">
                    
                    <div className="form-item">
                    
                    <button className="button medium primary" type="submit">Register Now!</button>
                    
                    </div>
                    
                </div>
            
            </form>
            
            <p className="form-text">You'll receive a confirmation email in your inbox with a link to activate your account. If you have any problems, <a href="#">contact us</a>!</p>
            
        </div>
  )
}

export default FormRegister