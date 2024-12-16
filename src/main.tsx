import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './i18n';

const theme = createTheme({});

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<CssBaseline />
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</StrictMode>
);
