import { DarkModeRounded, LightModeRounded } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import {
  useColorScheme,
  type SupportedColorScheme,
} from '@mui/material/styles';
import { FC, useCallback } from 'react';

type Mode = keyof SupportedColorScheme;

const ThemeToggleButton: FC = () => {
  const { mode, setMode } = useColorScheme();

  const _handleBtnClick = useCallback<() => void>(() => {
    setMode(((m: Mode | null) => {
      return m === 'light' ? 'dark' : 'light';
    }) as Mode);
  }, [setMode]);

  if (!mode) {
    return null;
  }

  return (
    <IconButton onClick={_handleBtnClick}>
      {mode === 'light' ? <LightModeRounded /> : <DarkModeRounded />}
    </IconButton>
  );
};

export default ThemeToggleButton;
