import { Typography, Fade, Theme } from '@mui/material';
import Link from '@mui/material/Link';
import { Trans, useTranslation } from 'react-i18next';
import DarkModeSwitch from './DarkModeSwitch';
import LanguageSwitch from './LanguageSwitch';
import './Header.css';

export const FADE_IN_TIME = 3000;

interface HeaderProps {
  theme: Theme;
  handleThemeChange: () => void;
}

function Header({ theme, handleThemeChange }: HeaderProps): JSX.Element {
  const { t, i18n } = useTranslation();
  const isGaeilge = i18n.language === 'ga';
  const gaFont = "'Aonchlo GC', serif";
  const fontFamily = isGaeilge ? gaFont : undefined;

  return (
    <Fade in={true} timeout={FADE_IN_TIME}>
        <div className="header-container">
          <img src="/headshot/headshot.jpg" alt="Headshot" className="headshot" />

          <Typography variant="h1" component="h1" gutterBottom style={{ fontFamily }}>
            {t('header.name')}
          </Typography>
          <Typography variant="h2" component="h2" gutterBottom style={{ fontFamily }}>
            {t('header.subtitle')}
          </Typography>

          <Typography variant="h3" component="h3" gutterBottom style={{ fontFamily }}>
            {t('header.intro')}
          </Typography>

          <Typography variant="h3" component="h3" gutterBottom style={{ fontFamily }}>
            <Trans
              i18nKey="header.github"
              components={{
                githubLink: <Link href="https://github.com/liamroddy/" target="_blank" rel="noopener">{''}</Link>,
              }}
            />
          </Typography>

          <Typography variant="h3" component="h3" gutterBottom style={{ fontFamily }}>
            <Trans
              i18nKey="header.contact"
              components={{
                linkedinLink: <Link href="https://www.linkedin.com/in/liam-roddy" target="_blank" rel="noopener">{''}</Link>,
              }}
            />
          </Typography>

          <div id='dark-mode-switch-spacer' style={{marginBottom: "2em"}}></div>
          
          <DarkModeSwitch
            handleThemeChange={handleThemeChange}
            theme={theme}
            darkMode={theme.palette.mode === 'dark'}
          />

          <LanguageSwitch theme={theme} />

          <Typography variant="body1" component="p" style={{ fontFamily }}>
            <br/>
            {t('header.footer')}
            <br/>
            <Trans
              i18nKey="header.footerSource"
              components={{
                githubLink: <Link href="https://github.com/liamroddy/portfolio-site" target="_blank" rel="noopener">{''}</Link>,
              }}
            />
          </Typography>
        </div>
    </Fade>
  );
}

export default Header;
