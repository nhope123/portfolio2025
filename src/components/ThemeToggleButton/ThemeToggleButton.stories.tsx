import ThemeToggleButton from './ThemeToggleButton.tsx';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ThemeToggleButton> = {
  component: ThemeToggleButton,
};

export default meta;

type Story = StoryObj<typeof ThemeToggleButton>;
export const Primary: Story = { args: {} };
