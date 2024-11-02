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
              <Article category="WEB DESIGN" header="Real Human Legs" theme={darkMode ? darkTheme : lightTheme}
                body="A bizarre joke site I made for fun, built with React and Material, and featuring some very unsettling AI-generated artwork."
                buttonText="Visit Real Human Legs"
                buttonLink={"https://realhumanlegs.com"}
                images={[
                  'real-human-legs-1.jpg',
                  'placeholder_image.jpg'
                ]} 
                 />
              <Article category="GRAPHIC DESIGN" header="Lockhart Engineering" theme={darkMode ? darkTheme : lightTheme}
                body="A logo I made for a Sligo-based engineering firm."
                images={[
                  'lockhart-eng/lockhart-logo.png',
                  'lockhart-eng/lockhart-eng-van.jpg',
                  'lockhart-eng/lockhart-eng-van2.jpg'
                ]} 
              />
              <Article category="ART" header="Digital Art and Comics" theme={darkMode ? darkTheme : lightTheme}
                body="Some digital art and webcomics I've made over the years, primarily with Procreate and Photoshop. And nope, no AI stuff here."
                buttonText="View on my Instagram"
                buttonLink={"https://www.instagram.com/l.j.roddy.art/"}
                images={[
                  'real-human-legs-1.jpg',
                  'placeholder_image.jpg'
                ]}
              />
              <Article category="GAME DESIGN" header="Gravity Flux" theme={darkMode ? darkTheme : lightTheme}
                buttonText="View on Itch.io"
                buttonLink={"https://liamroddy.itch.io/gravityflux"}
                body="A gravity-bending platformer I made with GameMaker Studio, available for download on Itch."
                images={[
                  'gravity-flux/grav1.png',
                  'gravity-flux/grav2.png',
                  'gravity-flux/grav3.png'
                ]}
              />
          </Grid>
        </Grid>
    </ThemeProvider>
  );
}

export default App;