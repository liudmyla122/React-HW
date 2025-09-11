import React from 'react'
import '../components/LoginScreen.css'

import SpotifyLogo from '../assets/g10.svg'
import AppleIcon from '../assets/Subtract.svg'
import GoogleIcon from '../assets/Subtract (1).svg'
import TwitterIcon from '../assets/Subtract (2).svg'

function LoginScreen() {
  return (
    <div className="login-screen">
      {}
      <div className="spotify-logo">
        <img src={SpotifyLogo} alt="Spotify" />
      </div>

      {}
      <h1 className="login-title">LIFE IS WASTED ON THE LIVING</h1>

      {}
      <p className="login-subtitle">
        Sign in
        <br />
        with
      </p>

      {}
      <div className="login-buttons">
        <div className="icon-box">
          <img src={AppleIcon} alt="Apple" />
        </div>
        <div className="icon-box">
          <img src={GoogleIcon} alt="Google" />
        </div>
        <div className="icon-box">
          <img src={TwitterIcon} alt="Twitter" />
        </div>
      </div>
    </div>
  )
}

export default LoginScreen
