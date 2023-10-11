import { Meta, StoryObj } from '@storybook/react';

import BottomSheet from './BottomSheet';

const meta = {
  title: 'BottomSheet',
  component: BottomSheet,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof BottomSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // primary: true,
    // label: 'Button',`
  },
};
