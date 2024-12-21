import { DarkModeRounded, LightModeRounded } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { useColorScheme } from '@mui/material/styles';
import { FC, useCallback, useMemo } from 'react';

const ThemeToggleButton: FC = () => {
  const { mode, setMode } = useColorScheme();

  const _handleBtnClick = useCallback<() => void>(() => {
    const toggleTheme = mode === 'light' ? 'dark' : 'light';
    setMode(toggleTheme);
  }, [mode, setMode]);

  const title = useMemo(
    () => `Switch to ${mode === 'light' ? 'Dark' : 'Light'} Mode`,
    [mode],
  );

  if (!mode) {
    return null;
  }

  return (
    <IconButton onClick={_handleBtnClick} title={title}>
      {mode === 'light' ? (
        <LightModeRounded color="warning" />
      ) : (
        <DarkModeRounded />
      )}
    </IconButton>
  );
};

export default ThemeToggleButton;
