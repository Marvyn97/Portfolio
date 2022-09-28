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
            <p>Après une formation intensive de développeur full-stack d'un durée de 3 mois je recherche une entreprise pour une formation de concepteur
               développeur d'application à la 3W academy pour une durée de 2 ans en alternance. Cette formation me permettra de développer mes compétences et d'acquérir de l'expérience.</p>
            <a href='#contact' className=' btn btn_primary'>Me contacter</a>
          </div>
      </div>
    </section>
  )
}

export default About;

