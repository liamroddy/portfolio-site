import React from 'react';
import { styled } from '@mui/material/styles';
import { ThemeProvider, IconButton, Switch } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const DarkModeSwitch = ({ handleThemeChange, darkMode, theme }) => {
    const CustomSwitch = styled(Switch)(({ theme }) => ({
        '& .MuiSwitch-switchBase.Mui-checked': {
            color: theme.palette.primary.main,
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
            backgroundColor: theme.palette.primary.main,
        },
    }));

    return (
        <ThemeProvider theme={theme}>
            <div>
                <IconButton onClick={handleThemeChange} aria-label="toggle dark mode" style={darkMode ? { color: theme.palette.primary.main } : {}}>
                    {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
                </IconButton>
                <CustomSwitch
                    checked={darkMode}
                    onChange={handleThemeChange}
                    name="darkModeSwitch"
                    inputProps={{ 'aria-label': 'dark mode switch' }}
                />
            </div>
        </ThemeProvider>
    );
};

export default DarkModeSwitch;