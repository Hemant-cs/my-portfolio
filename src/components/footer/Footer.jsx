import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsMedium} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <a href="#home" className='footer__logo'>HEMANT</a>
        <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#myprojects">My Projects</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/hemant-cs/"><BsLinkedin/></a>
          <a href="https://github.com/Hemant-cs"><BsGithub/></a>
          <a href="https://medium.com/@hemantchaurasia555"><BsMedium/></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Hemant Chaurasia. All rightts reserved.</small>
        </div>
    </footer>
  )
}

export default Footer