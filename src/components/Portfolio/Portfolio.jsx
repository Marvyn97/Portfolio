import React from 'react';
import IMG1 from '../../assets/masterpiece.png';

import './portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Masterpiece",
      img: IMG1,
      description: "Petit Projet en javascript sur l'utilisation des canvas qui génère des ronds aléatoire au click",
      technologies: "HTML / CSS / Javascript",
      link: "https://masterpiece-marvyn-pln.netlify.app",
      github: "https://github.com/Marvyn97/masterpiece",
    }
  ]

  return (
    <section id='portfolio'>
      <h5>Quelques projets</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        {projects.map((pro) => (
          <article className='portfolio_item' key={pro.id}>
            <div className='portfolio_item-image'>
              <img src={pro.img} alt={pro.title} /> 
            </div>
            <div className='portfolio_item-content'>
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className='portfolio_item-cta'>
              <a href={pro.github} target='_blank' className='btn' rel='noopener noreferrer'>Github</a>
              <a href={pro.link} target='_blank' className='btn btn-primary' rel='noopener noreferrer'>démo</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio;