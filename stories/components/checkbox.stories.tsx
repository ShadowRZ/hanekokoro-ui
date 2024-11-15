import type { Meta, StoryObj } from 'storybook-solidjs';
import { fn } from '@storybook/test';
import { Checkbox, type CheckboxProps } from '@/components/ui/checkbox';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Checkbox',
  render: (props: CheckboxProps) => <Checkbox {...props}>Label</Checkbox>,
  args: {
    onChange: fn(),
    onBlur: fn(),
    onFocus: fn(),
  },
};

export default meta;
type Story = StoryObj;

export const SimpleCheckbox: Story = {};

export const Indeterminate: Story = {
  args: {
    checked: 'indeterminate',
  },
};
