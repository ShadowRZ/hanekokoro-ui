import type { Meta, StoryObj } from 'storybook-solidjs';
import { HoverCard } from '@/components/ui/hover-card';

const meta: Meta = {
  title: 'HoverCard',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <HoverCard.Root>
      <HoverCard.Trigger>Trigger HoverCard</HoverCard.Trigger>
      <HoverCard.Positioner>
        <HoverCard.Content>Hello World</HoverCard.Content>
      </HoverCard.Positioner>
    </HoverCard.Root>
  ),
};

export const WithArrow: Story = {
  render: () => (
    <HoverCard.Root>
      <HoverCard.Trigger>Trigger HoverCard</HoverCard.Trigger>
      <HoverCard.Positioner>
        <HoverCard.Content>
          <HoverCard.Arrow>
            <HoverCard.ArrowTip />
          </HoverCard.Arrow>
          Hello World
        </HoverCard.Content>
      </HoverCard.Positioner>
    </HoverCard.Root>
  ),
};
