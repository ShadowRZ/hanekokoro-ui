import { ContextMenu } from '@hanekokoro-ui/solid';
import type { Meta, StoryObj } from 'storybook-solidjs';
import CaretRight from '~icons/ph/caret-right';
import SmileyFill from '~icons/ph/smiley-fill';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'ContextMenu',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <ContextMenu.Root>
      <ContextMenu.Trigger>Open Menu</ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Content>
          <ContextMenu.Item>Hello World</ContextMenu.Item>
          <ContextMenu.Item>
            <SmileyFill /> Hello World
          </ContextMenu.Item>
          <ContextMenu.Separator />
          <ContextMenu.Item colorPalette='error'>Delete</ContextMenu.Item>
          <ContextMenu.Item disabled>Disabled</ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  ),
};

export const WithGroup: Story = {
  render: () => (
    <ContextMenu.Root>
      <ContextMenu.Trigger>Open Menu</ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Content>
          <ContextMenu.Group>
            <ContextMenu.GroupLabel>Group 1</ContextMenu.GroupLabel>
            <ContextMenu.Item>Hello World</ContextMenu.Item>
            <ContextMenu.Item>
              <SmileyFill /> Hello World
            </ContextMenu.Item>
          </ContextMenu.Group>
          <ContextMenu.Separator />
          <ContextMenu.Group>
            <ContextMenu.Item colorPalette='error'>Delete</ContextMenu.Item>
            <ContextMenu.Item disabled>Disabled</ContextMenu.Item>
          </ContextMenu.Group>
        </ContextMenu.Content>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  ),
};

export const WithSubmenu: Story = {
  render: () => (
    <ContextMenu.Root>
      <ContextMenu.Trigger>Open Menu</ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Content>
          <ContextMenu.Item>Hello World</ContextMenu.Item>
          <ContextMenu.Sub>
            <ContextMenu.SubTrigger>
              <SmileyFill /> Hello World <CaretRight />
            </ContextMenu.SubTrigger>
            <ContextMenu.Portal>
              <ContextMenu.SubContent>
                <ContextMenu.Item>Hello World</ContextMenu.Item>
              </ContextMenu.SubContent>
            </ContextMenu.Portal>
          </ContextMenu.Sub>
          <ContextMenu.Separator />
          <ContextMenu.Item colorPalette='error'>Delete</ContextMenu.Item>
          <ContextMenu.Item disabled>Disabled</ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  ),
};
