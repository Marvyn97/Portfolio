import React from 'react';
import './about.css';

const About = () => {
  return (
    <section id='about'>
      <h2>À propos de moi</h2>
      <div className='container about_container'>
        {/* <div className='about_me'>
          <div className='about_me_image'>
            <img alt='moi' />
          </div>
        </div> */}
          <div className='about_content'>
            <div className='about_cards'>
              <article className='about_card'>
                <h5>experience</h5>
                <small>6 mois</small>
              </article>
              <article className='about_card'>
                <h5>projet</h5>
                <small>5 projets complété</small>
              </article>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet optio odio, reprehenderit quo natus excepturi quia eaque veritatis laboriosam repellendus ab voluptatum cum accusantium. Doloremque facere architecto quia modi iste.</p>
            <a href='#contact' className=' btn btn_primary'>Me contacter</a>
          </div>
      </div>
    </section>
  )
}

export default About;

