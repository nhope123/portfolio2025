import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import React, { FC, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router';

import i18n from '../src/i18n.ts';
import theme from '../src/theme.ts';

interface DecoratorProps {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  context: any;
}

const Decorator: FC<DecoratorProps> = ({ children, context }) => {
  const { locale } = context.globals;

  // When the locale global changes
  // Set the new locale in i18n
  // set the document direction
  useEffect(() => {
    i18n.changeLanguage(locale);

    i18n.on('languageChanged', (locale) => {
      const direction = i18n.dir(locale);
      document.dir = direction;
    });
  }, [locale]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <I18nextProvider i18n={i18n}>
          <Box sx={{ margin: '3em' }}>{children}</Box>
        </I18nextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Decorator;
