import { CssBaseline, ThemeProvider } from '@mui/material';

import './App.css';
import Home from './pages/Home/Home.tsx';
import theme from './theme.ts';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </>
  );
};

export default App;
