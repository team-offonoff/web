import { Meta, StoryObj } from '@storybook/react';

import BottomNavigation from './BottomNavigation';

const meta = {
  title: 'BottomNavigation',
  component: BottomNavigation,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof BottomNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // primary: true,
    // label: 'Button',
  },
};
