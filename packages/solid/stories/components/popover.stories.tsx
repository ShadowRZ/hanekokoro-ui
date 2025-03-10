import { Button, Popover } from '@hanekokoro-ui/solid';
import type { Meta, StoryObj } from 'storybook-solidjs';

const meta: Meta = {
  title: 'Popover',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Popover.Root>
      <Popover.Trigger as={Button} colorPalette='accent'>
        Trigger Popover
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content>Hello World</Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  ),
};
