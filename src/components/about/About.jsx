import React from 'react'
import './about.css'
import myImage from '../../assets/my-image2.png'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Degree</h5>
                  <small>B.Tech<br /> Electronic & Communication Engineering(UG) <br /><i>Ch Charan Singh University.</i></small>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>Diploma</h5>
                  <small>Diploma in Engineering Electronics Engineering <br /><i>Govt Polytechnic Saharanpur.</i></small>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                    <ul>
                      <li>Web Developer</li>
                    </ul>
                  </small>
              </article>

              

            </div>
            <p>
              Self-motivated IT professional with knowledge and proficiency in ReactJS, 
              NodeJS and AWS. As well as highly potent skills and ability in encoding bug- 
              free and efficient code, seeks the position of MERN Web Developer.                    
            </p>

          </div>
      </div>
    </section>
  )
}

export default About