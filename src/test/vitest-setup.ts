import '@testing-library/jest-dom';
import * as TestingLibrary from '@testing-library/react';
import { type RenderOptions } from '@testing-library/react';
import { ReactNode } from 'react';
import 'vitest';

import TestWrapper from './TestWrapper.tsx';

const { render, ...rest } = TestingLibrary;

const customRender = (
  ui: ReactNode,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: RenderOptions<any, HTMLElement, HTMLElement>,
) => render(ui, { wrapper: TestWrapper, ...options });

// export { rest };

// override render method
export { customRender as render, rest };
