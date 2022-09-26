import React from 'react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {MdOutlineEmail} from 'react-icons/md';
import './contact.css'

const Contact = () => {
  const [message, setmessage] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setmessage(true);
    emailjs.sendForm(
      'service_rdpujtd',
      'template_k83w03d',
      form.current,
      'RGFyDcYuNS9VbI2jC')
      .then((response) => {
        console.log(response.text)
      },
      (error) => {
        console.log(error.text);
      });
      e.target.reset();
  }
  return (
     <section id='contact'>
       <h2>Contactez moi</h2>
       <div className='container contact_container'>
         <div className='contact_secondaries'>
           <article className='contact_secondary'>
            <MdOutlineEmail className='contact_secondaryIcon'></MdOutlineEmail>
             <h4>Email</h4>
             <h5>marvynpaulin.dev@gmail.com</h5>
             <a href="mailto:marvynpaulin.dev@gmail.com">Envoyer un messsage</a>
           </article>
         </div>
         <form ref={form} onSubmit={handleSubmit}>
           <input
             type='text'
             placeholder='Votre nom complet'
             name='from_name'
             required
             />
           <input 
             type='email'
             placeholder='Votre Email'
             name='user_email'
             required
             />
           <textarea
             placeholder='Votre message'
             rows='7'
             name='message'
             required
           ></textarea> 
           <button type='submit' className='btn btn-primary'>Envoyer</button>
         </form>
         {message && <span>Merci, je vous répond au plus vite. </span>}
       </div>
     </section>
  );
};

export default Contact;