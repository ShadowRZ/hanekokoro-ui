import type { Meta, StoryObj } from 'storybook-solidjs';
import { Switch } from '@/components/ui/switch';

const meta: Meta<typeof Switch> = {
  component: Switch,
  tags: ['autodocs'],
  title: 'Switch',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
export const WithLabel: Story = {
  render: () => (
    <Switch>Label</Switch>
  )
};
