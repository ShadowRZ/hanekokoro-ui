import type { Meta, StoryObj } from 'storybook-solidjs';
import SmileyFill from '~icons/ph/smiley-fill';
import { DropdownMenu, Button } from '@hanekokoro-ui/solid';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'DropdownMenu',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger as={Button} variant='solid'>
        Open Menu
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.Item>Hello World</DropdownMenu.Item>
          <DropdownMenu.Item>
            <SmileyFill /> Hello World
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item colorPalette='error'>Delete</DropdownMenu.Item>
          <DropdownMenu.Item disabled>Disabled</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  ),
};

export const WithGroup: Story = {
  render: () => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger as={Button} variant='solid'>
        Open Menu
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.Group>
            <DropdownMenu.GroupLabel>Group 1</DropdownMenu.GroupLabel>
            <DropdownMenu.Item>Hello World</DropdownMenu.Item>
            <DropdownMenu.Item>
              <SmileyFill /> Hello World
            </DropdownMenu.Item>
          </DropdownMenu.Group>
          <DropdownMenu.Separator />
          <DropdownMenu.Group>
            <DropdownMenu.Item colorPalette='error'>Delete</DropdownMenu.Item>
            <DropdownMenu.Item disabled>Disabled</DropdownMenu.Item>
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  ),
};

export const WithSubmenu: Story = {
  render: () => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger as={Button} variant='solid'>
        Open Menu
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.Item>Hello World</DropdownMenu.Item>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger>
              <SmileyFill /> Hello World
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent>
                <DropdownMenu.Item>Hello World</DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>
          <DropdownMenu.Separator />
          <DropdownMenu.Item colorPalette='error'>Delete</DropdownMenu.Item>
          <DropdownMenu.Item disabled>Disabled</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  ),
};
