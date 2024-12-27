import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid } from '@mui/material';
//import Grid from '@mui/material/Grid2';
import Header from './components/Header';
import MainBody from './components/MainBody';
import { lightTheme, darkTheme } from './Themes';
import './App.css';

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
        <div className={`background-holder ${darkMode ? "dark" : ""}`}/>
        <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
            <Grid container spacing={3}>
                <Grid item xs={12} lg={5} className="Header">
                    <Header theme={darkMode ? darkTheme : lightTheme} handleThemeChange={handleThemeChange} />
                </Grid>
                <Grid item xs={12} lg={7} className="MainBody">
                    <MainBody darkMode={darkMode}></MainBody>
                </Grid>
            </Grid>
        </div>
    </ThemeProvider>
);
}

export default App;
