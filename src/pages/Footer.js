import React from 'react';
import github from '../img/if_github_291716.svg'
import linkd from '../img/if_linked_in_online_social_media_734393.svg'
const Footer = () => (
  <div id='footer'>

    <a className='link' target='_blank' rel='noopener noreferrer' href='https://linkedin.com/in/georgi-mumdzhiev-7842b814a'>
      <img id='linkd' src={linkd} alt='linkd.icon' />
    </a>

    <a className='git' target='_blank' rel='noopener noreferrer' href='https://github.com/pandamastr'>
      <img id='github' src={github} alt='github.icon' />
    </a>
    <p>For contacting us : +32/888 696 888</p>
    <a href="mailto:george.mumdzhiev@gmail.com">Email Us</a>

  </div>
)
export default Footer