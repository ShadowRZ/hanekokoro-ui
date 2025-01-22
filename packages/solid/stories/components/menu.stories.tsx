import type { Meta, StoryObj } from 'storybook-solidjs';
import SmileyFill from '~icons/ph/smiley-fill';
import { Menu, Button } from '@hanekokoro-ui/solid';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Menu',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Menu.Root>
      <Menu.Trigger asChild={(props) => <Button variant='solid' {...props()} />}>Open Menu</Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.Item value='a'>Hello World</Menu.Item>
          <Menu.Item value='b'>
            <SmileyFill /> Hello World
          </Menu.Item>
          <Menu.Separator />
          <Menu.Item value='c' colorPalette='error'>
            Delete
          </Menu.Item>
          <Menu.Item value='d' disabled>
            Disabled
          </Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  ),
};

export const ContextMenu: Story = {
  render: () => (
    <Menu.Root>
      <Menu.ContextTrigger>Open Menu</Menu.ContextTrigger>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.Item value='a'>Hello World</Menu.Item>
          <Menu.Item value='b'>
            <SmileyFill /> Hello World
          </Menu.Item>
          <Menu.Separator />
          <Menu.Item value='c' colorPalette='error'>
            Delete
          </Menu.Item>
          <Menu.Item value='d' disabled>
            Disabled
          </Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  ),
};

export const WithGroup: Story = {
  render: () => (
    <Menu.Root>
      <Menu.Trigger asChild={(props) => <Button variant='solid' {...props()} />} colorPalette='accent'>
        Open Menu
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.ItemGroup>
            <Menu.ItemGroupLabel>Group 1</Menu.ItemGroupLabel>
            <Menu.Item value='a'>Hello World</Menu.Item>
            <Menu.Item value='b'>
              <SmileyFill /> Hello World
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.Separator />
          <Menu.ItemGroup>
            <Menu.Item value='c' colorPalette='error'>
              Delete
            </Menu.Item>
            <Menu.Item value='d' disabled>
              Disabled
            </Menu.Item>
          </Menu.ItemGroup>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  ),
};

export const WithSubmenu: Story = {
  render: () => (
    <Menu.Root>
      <Menu.Trigger asChild={(props) => <Button variant='solid' {...props()} />} colorPalette='accent'>
        Open Menu
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.Item value='a'>Hello World</Menu.Item>
          <Menu.Root>
            <Menu.TriggerItem>
              <SmileyFill /> Hello World
            </Menu.TriggerItem>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item value='b'>Hello World</Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Menu.Root>
          <Menu.Separator />
          <Menu.Item value='c' colorPalette='error'>
            Delete
          </Menu.Item>
          <Menu.Item value='d' disabled>
            Disabled
          </Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  ),
};
