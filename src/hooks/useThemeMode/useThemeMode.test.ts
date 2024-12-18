import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { useLocalStorage } from 'usehooks-ts';
import type { Mock } from 'vitest';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import useThemeMode, { themeModes } from './useThemeMode.ts';

vi.mock('usehooks-ts', () => ({
  useLocalStorage: vi.fn(),
}));

let setLocalStorageMock: typeof vi.fn;
describe('useThemeMode', () => {
  beforeEach(() => {
    setLocalStorageMock = vi.fn();
    (useLocalStorage as Mock)
      .mockReturnValueOnce([themeModes[0], setLocalStorageMock])
      .mockReturnValueOnce([themeModes[1], setLocalStorageMock])
      .mockReturnValueOnce([themeModes[2], setLocalStorageMock])
      .mockReturnValueOnce([themeModes[0], setLocalStorageMock]);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should initialize with the default mode', () => {
    const { result } = renderHook(() => useThemeMode());
    expect(result.current.mode).toBe(themeModes[0]);
  });

  it('should toggle to the next mode', () => {
    const { result, rerender } = renderHook(() => useThemeMode());

    expect(result.current.mode).toEqual(themeModes[0]);

    act(() => {
      result.current.setMode();
    });
    rerender();
    expect(setLocalStorageMock).toHaveBeenCalledTimes(1);
    expect(result.current.mode).toEqual(themeModes[1]);

    act(() => {
      result.current.setMode();
    });
    rerender();
    expect(result.current.mode).toEqual(themeModes[2]);
    expect(setLocalStorageMock).toHaveBeenCalledTimes(2);

    act(() => {
      result.current.setMode();
    });
    rerender();
    expect(result.current.mode).toEqual(themeModes[0]);
    expect(setLocalStorageMock).toHaveBeenCalledTimes(3);
  });

  it('should set a specific mode', () => {
    const { result } = renderHook(() => useThemeMode());
    expect(result.current.mode).toBe(themeModes[0]);

    act(() => {
      result.current.setMode(themeModes[1]);
    });

    expect(setLocalStorageMock).toHaveBeenCalledWith(themeModes[1]);
  });
});
