import { CssBaseline, ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';
import { theme } from '../theme';

export interface TestWrapperProps {
  children: ReactNode;
}

const TestWrapper = (props: TestWrapperProps) => {
  const { children } = props;
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme['light']}>{children}</ThemeProvider>
    </>
  );
};

export default TestWrapper;
