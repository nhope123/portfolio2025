import { CssBaseline, ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router';

import theme from '../theme.ts';

export interface TestWrapperProps {
  children: ReactNode;
}

const TestWrapper = (props: TestWrapperProps) => {
  const { children } = props;
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default TestWrapper;
