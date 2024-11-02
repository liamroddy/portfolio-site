import React from 'react';
import { Typography, Fade, Grid } from '@mui/material';
import Link from '@mui/material/Link';
import DarkModeSwitch from './DarkModeSwitch';
import './Header.css';

function Header({ theme, handleThemeChange }) {
  return (
    <Fade in={true} timeout={1000}>
      <Grid container>
        <div className="header-container">
          <img src={require('../images/headshot.jpg')} alt="Headshot" className="headshot" />


          <Typography variant="h1" component="h1" gutterBottom>
            Liam Roddy
          </Typography>
          <Typography variant="h2" component="h2" gutterBottom>
            SOFTWARE ENGINEER, DESIGNER, ARTIST
          </Typography>

          <Typography variant="h3" component="h3" gutterBottom>
            Here's a few of my projects.
          </Typography>

          <Typography variant="h3" component="h3" gutterBottom>
            Contact me on <Link href="https://www.linkedin.com/in/TODO" target="_blank" rel="noopener">LinkedIn</Link>.
          </Typography>
          <Typography variant="h3" component="h3" gutterBottom>
            Take a gander at my <Link href="https://www.github.com/in/TODO" target="_blank" rel="noopener">GitHub</Link>.
          </Typography>

          {/* <div className="social-links">
            <Link href="https://www.linkedin.com/in/TODO" target="_blank" rel="noopener">
              <LinkedInIcon fontSize="large" />
            </Link>
            <Link href="https://github.com/TODO" target="_blank" rel="noopener">
              <GitHubIcon fontSize="large" />
            </Link>
          </div> */}
          
          <DarkModeSwitch
            handleThemeChange={handleThemeChange}
            theme={theme}
            darkMode={theme.palette.mode === 'dark'}
          />
        </div>
      </Grid>
    </Fade>
  );
}

export default Header;