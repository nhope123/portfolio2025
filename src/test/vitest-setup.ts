import 'vitest';
import '@testing-library/jest-dom';
import {render, RenderOptions} from '@testing-library/react';
import { ReactNode } from 'react';
import TestWrapper from './TestWrapper';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const customRender = (ui: ReactNode, options: RenderOptions<any, HTMLElement, HTMLElement>) =>
  render(ui, {wrapper: TestWrapper, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}