import './style.css'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function ErrorPage() {

  const navigate = useNavigate()

  return (
    <div className="errorPage">
      <div className="errorMessage">
        <h1>404</h1>
        <h2>Page not found</h2>
        <p>Please head to signup page.</p>
        <button onClick={() => navigate('/signup')}>Signup Page</button>
      </div>
    </div>
  )
}

export default ErrorPage