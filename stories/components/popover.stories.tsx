import { Button, Popover } from '@shadowrz/hanekokoro-ui';
import type { Meta, StoryObj } from 'storybook-solidjs';

const meta: Meta = {
  title: 'Popover',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Popover.Root>
      <Popover.Trigger.AsChild>
        {(props) => (
          <Button colorPalette='accent' {...props()}>
            Trigger Popover
          </Button>
        )}
      </Popover.Trigger.AsChild>
      <Popover.Positioner>
        <Popover.Content>Hello World</Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  ),
};

export const WithArrow: Story = {
  render: () => (
    <Popover.Root>
      <Popover.Trigger.AsChild>
        {(props) => (
          <Button colorPalette='accent' {...props()}>
            Trigger Popover
          </Button>
        )}
      </Popover.Trigger.AsChild>
      <Popover.Positioner>
        <Popover.Content>
          <Popover.Arrow>
            <Popover.ArrowTip />
          </Popover.Arrow>
          Hello World
        </Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  ),
};
