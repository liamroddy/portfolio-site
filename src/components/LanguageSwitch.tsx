import { styled } from '@mui/material/styles';
import { Switch, Theme, ThemeProvider } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface LanguageSwitchProps {
  theme: Theme;
}

const LanguageSwitch = ({ theme }: LanguageSwitchProps) => {
  const { i18n } = useTranslation();
  const isGaeilge = i18n.language === 'ga';

  const CustomSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: theme.palette.primary.main,
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: theme.palette.primary.main,
    },
  }));

  const handleChange = () => {
    i18n.changeLanguage(isGaeilge ? 'en' : 'ga');
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        English
        <CustomSwitch
          checked={isGaeilge}
          onChange={handleChange}
          name="languageSwitch"
          inputProps={{ 'aria-label': 'language switch' }}
        />
        <span style={{ fontFamily: "'Aonchlo GC', serif" }}>Gaeilge</span>
      </div>
    </ThemeProvider>
  );
};

export default LanguageSwitch;
