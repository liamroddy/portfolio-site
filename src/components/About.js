import React from 'react';
import { Typography } from '@mui/material';
import { Fade } from '@mui/material';

function About() {
  return (
    <Fade in={true} timeout={1000}>
      <div>
        <Typography variant="h4" component="h2" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1">
          This is the about section.
        </Typography>
      </div>
    </Fade>
  );
}

export default About;