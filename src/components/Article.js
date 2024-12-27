import React from 'react';
import { Typography } from '@mui/material';
import { CardMedia, Grid, Card, CardContent, Button } from '@mui/material';
//import Grid from '@mui/material/Grid2';
import './Article.css';
import { Fade } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FADE_IN_TIME, CAROUSEL_INTERVAL } from '../config';

function Article({ category, header, images, theme, body, buttonText, buttonLink }) {
  return (
    <div className='article'>
      <Fade in={true} timeout={FADE_IN_TIME}>
        <Card sx={{ background: theme.palette.background.paper }} >
        <Carousel
            showThumbs={false} 
            autoPlay 
            infiniteLoop 
            showArrows={false} 
            showStatus={false} 
            showIndicators={false}
            interval={CAROUSEL_INTERVAL}
            stopOnHover={false}
          >
            {images.map((image, index) => (
              <CardMedia
                key={index}
                component="img"
                image={require(`../images/${image}`)}
                style={{ marginBottom: '20px' }}
              />
            ))}
          </Carousel>
            
          <CardContent>
            <Typography variant="h2" component="h2" gutterBottom>
              {category}
            </Typography>
            <Typography variant="h1" component="h1">
              {header}
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              {body}
            </Typography>
            {buttonText && buttonLink &&
              <Button
              variant="contained"
              color="primary"
              style={{ marginTop: '1em' }}
              href={buttonLink}
              target="_blank"
              rel="noopener noreferrer">
              {buttonText}
            </Button>}
          </CardContent>
        </Card>
      </Fade>
    </div>
  );
}

export default Article;