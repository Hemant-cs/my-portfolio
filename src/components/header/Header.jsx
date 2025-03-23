import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/me-new.png'
import HeaderSocials from './HeaderSocials'
import Typewriter from "typewriter-effect"

const Header = () => {
  return (
    
    
      <header id='home'>

        <div className="container header__container">

          <h5>Hello, I'm</h5>
          <h1>Hemant Chaurasia</h1>
          <h5 className="text-light"><Typewriter
              options={{
                strings: [
                  "JavaScript Developer!",
                  "ReactJS Developer!",
                  "NodeJS Developer!",
                  "AWS Developer!",
                ],
                autoStart: true,
                loop: true,
              }}
            /></h5>
          <CTA/>
          <HeaderSocials/>

          <div className="me">

            <img src={me} alt='me'/>
          </div>

          <a href="#contacts" className='scroll__down'>Scroll Down</a>
        </div>
      </header>

    
    
  )
}

export default Header