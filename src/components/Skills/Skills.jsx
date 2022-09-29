import React from 'react';
import {BsPatchCheckFill} from 'react-icons/bs';
import './skills.css';

const Skills = () => {
  return (
    <section id='skills'>
      <h2>Compétences</h2>
      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Développement Front-end</h3>
          <div className='experience_content'>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icons' />
            <h4>HTML</h4>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icons' />
            <h4>CSS</h4>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icons' />
            <h4>Javascript</h4>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icons' />
            <h4>React</h4>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icons' />
            <h4>Redux</h4>
          </article>
          </div>
        </div>
        <div className='experience_back-end'>
          <h3>Développement Back-end</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons' />
              <h4>Node.js</h4>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons' />
              <h4>MySQL</h4>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons' />
              <h4>EJS</h4>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons' />
              <h4>GitHub</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;