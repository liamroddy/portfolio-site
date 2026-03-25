import { styled } from '@mui/material/styles';
import { ThemeProvider, Switch, Theme } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface DarkModeSwitchProps {
  handleThemeChange: () => void;
  darkMode: boolean;
  theme: Theme;
}

const DarkModeSwitch = ({ handleThemeChange, darkMode, theme }: DarkModeSwitchProps): JSX.Element => {
    const { t, i18n } = useTranslation();
    const isGaeilge = i18n.language === 'ga';
    const fontFamily = isGaeilge ? "'Aonchlo GC', serif" : undefined;

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
                <div style={{ fontFamily }}>
                {t('darkMode')}
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
