import React, { useState } from 'react'
import './contacts.css'
import {MdOutlineEmail, MdLocalPhone, MdLocationOn} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
// import emailjs from '@emailjs/browser';

const Contacts = ({setShowLoader, setSentSuccessful, setSentFail}) => {

  const form = useRef()
  //states
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //functions
  const handleSendMessage = (e) => {
    setShowLoader(true);
    e.preventDefault();
    console.log(fullName, email, message);
    const emailData = {
      user_name: fullName,
      user_email: email,
      message: message
    } 

    emailjs.send(
      'service_g8hfqjr',      // from EmailJS dashboard
      'template_11q7g4k',     // from EmailJS dashboard
      emailData,
      'cqpP-3wGHmgu6F0oD'       // from EmailJS dashboard
    ).then((result) => {
      setShowLoader(false);
      setSentSuccessful(true);
      setEmail("");
    setFullName("");
    setMessage("");
    }, (error) => {
      setShowLoader(false);
      setSentFail(true);
      setEmail("");
    setFullName("");
    setMessage("");
    });
  }

  return (
    <section id='contacts'>

      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h5 style={{marginLeft:"-10px"}}>hemantchaurasia555@gmail.com</h5>
            <a href="mailto:hemantchaurasia555@gmail.com">Send a message</a>
          </article>
          <article className='contact__option'>
            <MdLocalPhone  className='contact__option-icon'/>
            <h5>+91-9935522137</h5>
            <a href="tel: +919935522137">Call</a>
          </article>
          <article className='contact__option'>
            <MdLocationOn  className='contact__option-icon'/>
            <h5>Laxmi Nagar, Delhi, India</h5>
            <a href="https://www.google.co.in/maps/place/Laxmi+Nagar/@28.6306847,77.2750451,17z/data=!3m1!4b1!4m6!3m5!1s0x390cfcad2277af63:0xa44f8b23c84bd369!8m2!3d28.63068!4d77.27762!16s%2Fg%2F11cjhc15fb?hl=en&entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D">location</a>
          </article>
        </div>

        <form ref={form} onSubmit={handleSendMessage}>

         <input type="text" name="name" placeholder="Your Full Name" required value = {fullName} onChange={e=>setFullName(e.target.value)}/>  {/* client side validation */}
         <input type="email" name='email' placeholder='Your Email' required value={email} onChange={e=>setEmail(e.target.value)}/> 
         <textarea name="message" rows="7" placeholder='Your Message' required value={message} onChange={e=>setMessage(e.target.value)}></textarea>
         <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>    
    </section>
  )
}

export default Contacts