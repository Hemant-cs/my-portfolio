import React from 'react'
import './contacts.css'
import {MdOutlineEmail, MdLocalPhone, MdLocationOn} from 'react-icons/md'
import { useRef } from 'react';
// import emailjs from '@emailjs/browser';

const Contacts = () => {

  const form = useRef()

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_kpzxgqz', 'template_kk9ipl8', form.current, 'uKELRhBOpArKOozDJ')
  //   e.target.reset()
    
  // }

  return (
    <section id='contacts'>

      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h5>hemantchaurasia555@gmail.com</h5>
            <a href="mailto:hemantchaurasia555@gmail.com">Send a message</a>
          </article>
          <article className='contact__option'>
            <MdLocalPhone  className='contact__option-icon'/>
            <h5>+91-9935522137</h5>
            <a href="callto:hemantchaurasia555@gmail.com">Call</a>
          </article>
          <article className='contact__option'>
            <MdLocationOn  className='contact__option-icon'/>
            <h5>Laxmi Nagar, Delhi, India</h5>
            {/* <a href="mailto:hemantchaurasia555@gmail.com">Send a message</a> */}
          </article>
        </div>

        <form ref={form}>

         <input type="text" name="name" placeholder="Your Full Name" required />  {/* client side validation */}
         <input type="email" name='email' placeholder='Your Email' required /> 
         <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
         <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>    
    </section>
  )
}

export default Contacts