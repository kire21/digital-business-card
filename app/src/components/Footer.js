import React from 'react';
import twitterIcon from '../images/twitter_icon.svg';
import facebookIcon from '../images/facebook_icon.svg';
import instagramIcon from '../images/instagram_icon.svg';
import gitHubIcon from '../images/github_icon.svg';

function Footer() {
  return (
    <div className='footer'>
      <a href='#'>
        <img src={twitterIcon} alt='Twitter' />
      </a>
      <a href='#'>
        <img src={facebookIcon} alt='Facebook' />
      </a>
      <a href='#'>
        <img src={instagramIcon} alt='Instagram' />
      </a>
      <a href='#'>
        <img src={gitHubIcon} alt='GitHub' />
      </a>
    </div>
  );
}

export default Footer;
