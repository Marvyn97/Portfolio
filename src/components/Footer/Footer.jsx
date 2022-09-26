import React from 'react';
import {FaLinkedin, FaGithubSquare} from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href='#home' className='footer_logo'>Marvyn</a>
      <ul className='nav_links'>
        <li>
          <a href='home'>Home</a>
        </li>
        <li>
          <a href='#about'>A propos</a>
        </li>
        <li>
          <a href='#skills'>Compétences</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
      <article className='footer_socials'>
        <a href="https://www.linkedin.com/in/marvyn-paulin/" target="__blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/Marvyn97" target="__blank" rel="noreferrer"><FaGithubSquare /></a>
      </article>
    </footer>
  )
}

export default Footer;