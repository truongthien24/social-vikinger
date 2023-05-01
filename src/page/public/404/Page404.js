import React from 'react'
import { useNavigate } from 'react-router-dom'

const Page404 = () => {

  const navigate = useNavigate();

  return (
    
    <div className="error-section">
      
      <p className="error-section-title">404</p>
      
  
      
      <div className="error-section-info">
        
        <p className="error-section-subtitle">Oops!!...</p>
        
  
        
        <p className="error-section-text">Seems that you made a wrong turn and encountered a web black hole that absorbed the page you were looking for! But don't panic because you can go back!</p>
        
  
        
        <p className="error-section-text">If the problem persists, please send us an email to our support team at <a href="#">support@vikinger.com</a></p>
        
  
        <button className="button medium primary" onClick={()=> {
          navigate('/')
        }}>Go Back</button>
        
      </div>
    </div>
  )
}

export default Page404