import { createTheme, type Theme } from '@mui/material/styles';

const theme: Theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

export type ThemeType = typeof theme;
export default theme;
