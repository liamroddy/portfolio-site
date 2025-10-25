import { Typography, Fade, Theme } from '@mui/material';
import Link from '@mui/material/Link';
import DarkModeSwitch from './DarkModeSwitch';
import headshotImage from '../images/headshot.jpg';
import './Header.scss';

export const FADE_IN_TIME = 3000;

interface HeaderProps {
  theme: Theme;
  handleThemeChange: () => void;
}

function Header({ theme, handleThemeChange }: HeaderProps): JSX.Element {
  return (
    <Fade in={true} timeout={FADE_IN_TIME}>
        <div className="header-container">
          <img src={headshotImage} alt="Headshot" className="headshot" />

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
            For more take a gander at my <Link href="https://github.com/liamroddy/" target="_blank" rel="noopener">GitHub</Link>.
          </Typography>

          <Typography variant="h3" component="h3" gutterBottom>
            Contact me on <Link href="https://www.linkedin.com/in/liam-roddy" target="_blank" rel="noopener">LinkedIn</Link>.
          </Typography>
          

          <div id='dark-mode-switch-spacer' style={{marginBottom: "2em"}}></div>
          
          <DarkModeSwitch
            handleThemeChange={handleThemeChange}
            theme={theme}
            darkMode={theme.palette.mode === 'dark'}
          />

          <Typography variant="body1" component="p">
            <br/>This site was built with React and Material UI.
            <br/>View the source code on <Link href="https://github.com/liamroddy/portfolio-site" target="_blank" rel="noopener">GitHub</Link>.
          </Typography>
        </div>
    </Fade>
  );
}

export default Header;
