import type { Meta, StoryObj } from 'storybook-solidjs';
import { Tooltip } from '@/components/ui/tooltip';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Tooltip',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Tooltip.Root>
      <Tooltip.Trigger>Trigger Tooltip</Tooltip.Trigger>
      <Tooltip.Positioner>
        <Tooltip.Content>Tooltip</Tooltip.Content>
      </Tooltip.Positioner>
    </Tooltip.Root>
  ),
};
