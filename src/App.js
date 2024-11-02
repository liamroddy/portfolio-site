import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid } from '@mui/material';
//import Grid from '@mui/material/Grid2';
import Header from './components/Header';
import Article from './components/Article';
import { lightTheme, darkTheme } from './Themes';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.style.transition = 'background-color 0.5s, color 0.5s';
  }, [darkMode]);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
        <Grid container spacing={3} >
          <Grid item xs={12} lg={5} className="Header">
            <Header theme={darkMode ? darkTheme : lightTheme} handleThemeChange={handleThemeChange} />
          </Grid>

          <Grid item xs={12} lg={7} className="MainBody">
              <Article category="WEB DESIGN" header="Real Human Legs" image={require('./images/real-human-legs-1.jpg')} theme={darkMode ? darkTheme : lightTheme}
                body="A bizarre joke site I made for fun, built with React and Material."
                 />
              <Article category="GRAPHIC DESIGN" header="Lockhart Engineering" body="Your Body Content 2" image={require('./images/placeholder_image.jpg')}  theme={darkMode ? darkTheme : lightTheme} />
              <Article category="ART" header="Your Header" body="Your Body Content" image={require('./images/placeholder_image.jpg')} theme={darkMode ? darkTheme : lightTheme} />
              <Article category="COMICS" header="Odd Fork Comics" body="Your Body Content 2" image={require('./images/placeholder_image.jpg')} theme={darkMode ? darkTheme : lightTheme} />
              <Article category="GAME DESIGN" header="Gravity Flux" body="Your Body Content" image={require('./images/placeholder_image.jpg')} theme={darkMode ? darkTheme : lightTheme} />
          </Grid>
        </Grid>
    </ThemeProvider>
  );
}

export default App;