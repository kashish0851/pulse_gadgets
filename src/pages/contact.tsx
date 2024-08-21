// src/components/ContactUs.js
import React, {useRef}from 'react';
import './contact.css';
import Navbar from '../components/navbar'
import emailjs from '@emailjs/browser';
import Footer from '../components/footer';
const ContactUs = () => {
    const form=useRef<HTMLFormElement | null>(null)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_vevgn1y', 'template_e6d6pw3', form.current, {
          publicKey: 'QgMyX_ZbSoTciwTDS',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
        e.target.reset()
    };
    return (
        <>
       <Navbar></Navbar>
        <div className="contact-form-container">
            <h2>Contact Us</h2>
            <form 
            ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
        <Footer></Footer>
        </>
    );
};

export default ContactUs;
