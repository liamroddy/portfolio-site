import React, { useEffect, useRef } from 'react';
import { Typography } from '@mui/material';
import { CardMedia, Grid, Card, CardContent, Button } from '@mui/material';
//import Grid from '@mui/material/Grid2';
import './Article.css';
import { Fade } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Article({ category, header, images, theme, body, buttonText, buttonLink }) {
  return (
    <Grid item sm={12} md={6} spacing={3} className='article'>
      <Fade in={true} timeout={3000}>
        <Card sx={{ backgroundColor: theme.palette.background.paper }} >
        <Carousel
            showThumbs={false} 
            autoPlay 
            infiniteLoop 
            showArrows={false} 
            showStatus={false} 
            showIndicators={false}
            interval={1000}
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
            {buttonText && buttonLink && <Button variant="contained" color="primary" href={buttonLink}>
              {buttonText}
            </Button>}
          </CardContent>
        </Card>
      </Fade>
    </Grid>
  );
}

export default Article;