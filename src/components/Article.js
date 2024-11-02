import React from 'react';
import { Typography } from '@mui/material';
import { Fade } from '@mui/material';
import { CardMedia, Grid, Card, CardContent} from '@mui/material';
//import Grid from '@mui/material/Grid2';
import './Article.css';

function Article({ category, header, image, theme, body }) {
  return (
    <Grid item sm={12} md={6} spacing={3} className='article'>
      <Fade in={true} timeout={1000}>
        <Card sx={{ backgroundColor: theme.palette.background.paper }} >
            <CardMedia
              component="img"
              image={image}
              style={{ marginBottom: '20px' }}
            />
            <CardContent>
              <Typography variant="h2" component="h2" gutterBottom>
                {category}
              </Typography>
              <Typography variant="h1" component="h1" gutterBottom>
                {header}
              </Typography>
              <Typography variant="body1">
                {body}
              </Typography>
            </CardContent>
        </Card>
      </Fade>
    </Grid>
  );
}

export default Article;