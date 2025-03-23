import React from 'react'
import CV from '../../assets/Hemant_resume2110.pdf'

const CTA = () => {

  return (
    
    <div className="cta">

        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contacts" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA