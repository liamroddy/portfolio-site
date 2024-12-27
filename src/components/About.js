import React from 'react';
import { Typography } from '@mui/material';
import { Fade } from '@mui/material';
export const FADE_IN_TIME = 3000;

function About() {
  return (
    <Fade in={true} timeout={FADE_IN_TIME}>
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