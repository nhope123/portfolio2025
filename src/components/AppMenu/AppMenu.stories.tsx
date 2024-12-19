import { type Meta, type StoryObj } from '@storybook/react';

import AppMenu from './AppMenu.tsx';
import { AppMenuProps } from './types.ts';

const meta: Meta<typeof AppMenu> = {
  component: AppMenu,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '450px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Primary: StoryObj<AppMenuProps> = {
  args: {},
};
