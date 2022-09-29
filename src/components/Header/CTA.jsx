import React from 'react';
import CV from '../../assets/CV Marvyn Paulin.pdf';

const CTA = () => {
  return (
    <div className='CTA'>
        <a href={CV} download className='btn'>télécharger CV</a>
        <a href='#contact' className='btn btn-primary'>Me contacter</a>
    </div>
  )
}

export default CTA;