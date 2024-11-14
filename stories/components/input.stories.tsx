import type { Meta, StoryObj } from 'storybook-solidjs';
import { Input } from '@shadowrz/hanekokoro-ui';

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ['autodocs'],
  title: 'Input',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
export const Invaild: Story = {
  args: {
    'aria-invalid': 'true',
  },
};
