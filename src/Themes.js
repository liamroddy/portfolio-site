import { createTheme } from '@mui/material/styles';

const baseTypography = {
    fontFamily: '"Roboto Mono", monospace',
    lineHeight: 1
};

const baseTheme = {
    typography: {
        body1: {
            ...baseTypography,
            fontSize: '1rem',
            fontWeight: 300,
            paddingTop: '0.8rem',
            color: 'tertiary',
            lineHeight: 1.5
        },
        h1: {
            ...baseTypography,
            fontSize: '3rem',
            fontWeight: 500,
        },
        h2: {
            ...baseTypography,
            fontSize: '1.5rem',
            fontWeight: 200,
            fontStyle: 'italic',
        },
        h3: {
            ...baseTypography,
            fontSize: '1.3rem',
            fontWeight: 300,
            paddingTop: '0.8rem',
        },
    }
};

const lightBGTop = '#e6e6ef';
const lightBGBottom = '#F9F9FC';
const lightTextPrimary = '#1D2125';
const lightTextHeader = '#161A1D';
const lightTextHighlight = "#829055";

const darkBGTop = '#161A1D';
const darkBGBottom = '#22282d';
const darkTextPrimary = '#F1F2F4';
const darkTextHeader = '#F7F8F9';
const darkTextHighlight =  "#ed32a4";

const lightTheme = createTheme({
    ...baseTheme,
    typography: {
        ...baseTheme.typography,
        body1: {
            ...baseTheme.typography.body1,
            color: lightTextPrimary,
        },
        h1: {
            ...baseTheme.typography.h1,
            color: lightTextHeader,
        },
        h2: {
            ...baseTheme.typography.h2,
            color: lightTextHighlight,
        },
        h3: {
            ...baseTheme.typography.h3,
            color: lightTextPrimary,
        },
    },
    palette: {
        mode: 'light',
        primary: {
            main: lightTextHighlight,
        },
        background: {
            default: `linear-gradient(to bottom, ${lightBGTop}, ${lightBGBottom})`,
            paper: `linear-gradient(to bottom, ${lightBGBottom}, ${lightBGTop})`,
        }
    },
});

const darkTheme = createTheme({
    ...baseTheme,
    typography: {
        ...baseTheme.typography,
        body1: {
            ...baseTheme.typography.body1,
            color: darkTextPrimary,
        },
        h1: {
            ...baseTheme.typography.h1,
            color: darkTextHeader,
        },
        h2: {
            ...baseTheme.typography.h2,
            color: darkTextHighlight,
        },
        h3: {
            ...baseTheme.typography.h3,
            color: darkTextPrimary,
        },
    },
    palette: {
        mode: 'dark',
        primary: {
            main: darkTextHighlight,
        },
        background: {
            default: `linear-gradient(to bottom, ${darkBGTop}, ${darkBGBottom})`,
            paper: `linear-gradient(to bottom, ${darkBGBottom}, ${darkBGTop})`,
        }
    },
});

export { lightTheme, darkTheme };
  