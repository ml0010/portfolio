import React from 'react'
import '../styles/Footer.css';

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <div>
      <div className="socialMedia">
        <GitHubIcon />
        <InstagramIcon />
        <LinkedInIcon />
      </div>
      <p>© 2025 Mimi Lim. All rights reserved.</p>
    </div>
  )
}

export default Footer