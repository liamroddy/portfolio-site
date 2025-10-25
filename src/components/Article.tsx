import { Typography, Theme } from '@mui/material';
import { CardMedia, Card, CardContent, Button } from '@mui/material';
import './Article.scss';
import { Fade } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FADE_IN_TIME, CAROUSEL_INTERVAL } from '../config';

interface ArticleProps {
  category: string;
  header: string;
  images: string[];
  theme: Theme;
  body: string;
  buttonText?: string;
  buttonLink?: string;
}

function Article({ category, header, images, theme, body, buttonText, buttonLink }: ArticleProps): JSX.Element {
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
                image={`/${image}`}
                style={{ marginBottom: '20px' }}
              />
            ))}
          </Carousel>
            
          <CardContent>
            <Typography variant="h2" component="h2" gutterBottom>
              {category}
            </Typography>
            <Typography variant="h1"
            component="h1"
            style={{ 
              hyphens: 'auto', 
              wordBreak: 'break-word', 
              overflowWrap: 'break-word' 
            }}
            lang="en">
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