import type { Meta, StoryObj } from 'storybook-solidjs';
import { HoverCard } from '@hanekokoro-ui/solid';

const meta: Meta = {
  title: 'HoverCard',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <HoverCard.Root>
      <HoverCard.Trigger>Trigger HoverCard</HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content>Hello World</HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  ),
};
