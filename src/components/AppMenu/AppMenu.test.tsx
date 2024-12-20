import { composeStories } from '@storybook/testing-react';
import { screen } from '@testing-library/react';
import * as reactRouter from 'react-router';
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  type Mock,
  test,
  vi,
} from 'vitest';

import { render, rest } from '../../test/vitest-setup.ts';

import * as stories from './AppMenu.stories.tsx';

const { fireEvent, waitFor } = rest;
const { Primary, Secondary } = composeStories(stories);
const menuItems = [
  'menu.home',
  'menu.projects',
  'menu.skills',
  'menu.aboutMe',
  'menu.contact',
];

vi.mock('react-router');
let navigateMock: Mock<typeof vi.fn> | ((to: string) => void);
describe('AppMenu', () => {
  beforeEach(() => {
    navigateMock = vi.fn();
    vi.spyOn(reactRouter, 'useNavigate').mockReturnValue(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      navigateMock as any,
    );
  });
  afterEach(() => {
    vi.clearAllMocks();
  });

  test('renders all menu items', () => {
    render(<Primary />);

    menuItems.forEach((i) => {
      expect(screen.getByText(i)).toBeInTheDocument();
    });
  });

  test('Should call navigate with correct path on menu item click', async () => {
    render(<Primary />);

    menuItems.forEach((i) => {
      fireEvent.click(screen.getByText(i));
      waitFor(() => expect(navigateMock).toBeCalledWith(i));
    });
  });

  test('Should call onMenuItemClick props', () => {
    const alertMock = vi.fn();
    vi.spyOn(window, 'alert').mockImplementation(alertMock)
    render(<Secondary />);

    const skillElement = screen.getByText(menuItems[2]);
    fireEvent.click(skillElement);
    expect(alertMock).toBeCalledTimes(1);
    
  })
});
