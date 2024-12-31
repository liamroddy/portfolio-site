import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid } from '@mui/material';
//import Grid from '@mui/material/Grid2';
import Header from './components/Header';
import MainBody from './components/MainBody';
import BackgroundHolder from './components/BackgroundHolder';
import { lightTheme, darkTheme } from './Themes';
import './App.scss';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <BackgroundHolder darkMode={darkMode} ></BackgroundHolder>
        <Grid container>
            <Grid xs={12} lg={5} className="Header">
                <Header theme={darkMode ? darkTheme : lightTheme} handleThemeChange={handleThemeChange} />
            </Grid>
            <Grid xs={12} lg={7} className="MainBody">
                <MainBody darkMode={darkMode}></MainBody>
            </Grid>
        </Grid>
    </ThemeProvider>
);
}

export default App;
