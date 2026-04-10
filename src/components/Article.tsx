import { Typography, Theme } from '@mui/material';
import { CardMedia, Card, CardContent, Button } from '@mui/material';
import './Article.css';
import { Fade } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FADE_IN_TIME, CAROUSEL_INTERVAL } from '../config';
import { useTranslation } from 'react-i18next';

interface ArticleProps {
  categoryKey: string;
  headerKey: string;
  images: string[];
  theme: Theme;
  bodyKey: string;
  buttonKey?: string;
  buttonLink?: string;
}

function Article({ categoryKey, headerKey, images, theme, bodyKey, buttonKey, buttonLink }: ArticleProps): JSX.Element {
  const { t, i18n } = useTranslation();
  const isGaeilge = i18n.language === 'ga';
  const gaFont = "'Aonchlo GC', serif";
  const fontFamily = isGaeilge ? gaFont : undefined;

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
            <Typography variant="h2" component="h2" gutterBottom style={{ fontFamily }}>
              {t(categoryKey)}
            </Typography>
            <Typography variant="h1"
            component="h1"
            style={{ 
              hyphens: 'auto', 
              wordBreak: 'break-word', 
              overflowWrap: 'break-word',
              fontFamily,
            }}
            lang={isGaeilge ? 'ga' : 'en'}>
              {t(headerKey)}
            </Typography>
            <Typography variant="body1" component="p" gutterBottom style={{ fontFamily }}>
              {t(bodyKey)}
            </Typography>
            {buttonKey && buttonLink &&
              <Button
              variant="contained"
              color="primary"
              style={{ marginTop: '1em', fontFamily }}
              href={buttonLink}
              target="_blank"
              rel="noopener noreferrer">
              {t(buttonKey)}
            </Button>}
          </CardContent>
        </Card>
      </Fade>
    </div>
  );
}

export default Article;
