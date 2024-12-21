import { DarkModeRounded, LightModeRounded } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { useColorScheme } from '@mui/material/styles';
import { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const ThemeToggleButton: FC = () => {
  const { mode, setMode } = useColorScheme();
  const { t } = useTranslation(['translation']);

  const toggledMode = useMemo(
    () => (mode === 'light' ? 'dark' : 'light'),
    [mode],
  );

  const _handleBtnClick = useCallback<() => void>(() => {
    setMode(toggledMode);
  }, [setMode, toggledMode]);

  if (!mode) {
    return null;
  }

  return (
    <IconButton
      onClick={_handleBtnClick}
      title={t('settings.switchTheme', { mode: toggledMode })}
    >
      {mode === 'light' ? (
        <LightModeRounded color="warning" />
      ) : (
        <DarkModeRounded />
      )}
    </IconButton>
  );
};

export default ThemeToggleButton;
