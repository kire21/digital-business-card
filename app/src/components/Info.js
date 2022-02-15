import React from 'react';
import photo from '../images/kire_zdraveski.png';

function Info() {
  return (
    <div className='info'>
      <img src={photo} alt='Kire Zdraveski' />
      <h1 className='info__name'>Kire Zdraveski</h1>
      <h2 className='info__job'>Frontend Developer</h2>
      <p className='info__site'>kirezdraveski.website</p>
      <div className='btns'>
        <button className='btn btn__mail'>Email</button>
        <button className='btn btn__linkedin'>LinkedIn</button>
      </div>
    </div>
  );
}

export default Info;
