import { useCallback } from 'react';
import { useLocalStorage } from 'usehooks-ts';

export const themeModes = ['light', 'dark', 'system'];

export type ThemeMode = (typeof themeModes)[number];


const useThemeMode = () => {
  const [mode, setThemeMode] = useLocalStorage('mode', themeModes[0]);

  const _toggleMode = useCallback((value?: ThemeMode) => {
    if (value) {
      setThemeMode(value);
    } else {
      setThemeMode((m) => {
        const position = themeModes.indexOf(m) + 1;
        return themeModes[position < themeModes.length ? position : 0];
      });
    }
  }, [setThemeMode]);

  return {
    mode,
    setMode: _toggleMode,
  };
};

export default useThemeMode;
