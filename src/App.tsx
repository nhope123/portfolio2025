import { CssBaseline, ThemeProvider } from '@mui/material';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import reactLogo from './assets/react.svg';
import { theme } from './theme';
import viteLogo from '/vite.svg';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const { t } = useTranslation();

  // console.log('mode: ', mode);
  const _handleMode = useCallback(() => {
    setMode((m) => (m === 'light' ? 'dark' : 'light'));
  }, []);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme[mode]}>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>{t('welcome')}</h1>
        <div className="card">
          <button type="button" onClick={_handleMode}>
            count is {mode}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </ThemeProvider>
    </>
  );
}

export default App;
