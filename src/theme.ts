import { createTheme } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';


const theme: Theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

export type ThemeType = typeof theme;
export default theme;
