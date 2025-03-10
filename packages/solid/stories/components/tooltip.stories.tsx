import type { Meta, StoryObj } from 'storybook-solidjs';
import { Tooltip } from '@hanekokoro-ui/solid';

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
      <Tooltip.Portal>
        <Tooltip.Content>Tooltip</Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  ),
};
