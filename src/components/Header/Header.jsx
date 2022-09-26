import React from 'react';
import CTA from './CTA';
import './header.css';

const Header = () => {
  return (
    <header id='home'>
        <article className='container header_container'>
            <h1>Marvyn Paulin</h1>
            <h4>Développeur full-stack</h4>
            <CTA />
        </article>
    </header>
  )
}

export default Header;