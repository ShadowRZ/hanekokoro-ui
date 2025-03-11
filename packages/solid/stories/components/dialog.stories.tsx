import { Button, Dialog } from '@hanekokoro-ui/solid';
import { Flex } from '@hanekokoro-ui/styled-system/jsx';
import { createSignal } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Dialog',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger as={Button} colorPalette='accent'>
        Open Dialog
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Positioner>
          <Dialog.Content>
            <Flex direction='column' gap='2'>
              <Flex direction='column'>
                <Dialog.Title>Dialog Title</Dialog.Title>
              </Flex>
              Hello World
            </Flex>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Portal>
    </Dialog.Root>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger as={Button} colorPalette='accent'>
        Open Dialog
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Positioner>
          <Dialog.Content>
            <Flex direction='column' gap='2'>
              <Flex direction='column'>
                <Dialog.Title>Dialog Title</Dialog.Title>
                <Dialog.Description>Dialog Description</Dialog.Description>
              </Flex>
              Hello World
            </Flex>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Portal>
    </Dialog.Root>
  ),
};

export const Nested: Story = {
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger as={Button} colorPalette='accent'>
        Open Dialog
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Positioner>
          <Dialog.Content>
            <Flex direction='column' gap='2'>
              <Flex direction='column'>
                <Dialog.Title>Dialog Title</Dialog.Title>
                <Dialog.Description>Dialog Description</Dialog.Description>
              </Flex>
              <Flex direction='column' gap='2'>
                Hello World
                <Dialog.Root>
                  <Dialog.Trigger as={Button} colorPalette='accent'>
                    Open Nested Dialog
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay />
                    <Dialog.Positioner>
                      <Dialog.Content>
                        <Flex direction='column' gap='2'>
                          <Flex direction='column'>
                            <Dialog.Title>Dialog Title</Dialog.Title>
                          </Flex>
                          Hello World
                        </Flex>
                      </Dialog.Content>
                    </Dialog.Positioner>
                  </Dialog.Portal>
                </Dialog.Root>
              </Flex>
            </Flex>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Portal>
    </Dialog.Root>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [isOpen, setIsOpen] = createSignal(false);

    return (
      <>
        <Button type='button' onClick={() => setIsOpen(true)}>
          Open Dialog
        </Button>
        <Dialog.Root open={isOpen()} onOpenChange={() => setIsOpen(false)}>
          <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Positioner>
              <Dialog.Content>
                <Dialog.Title>Dialog Title</Dialog.Title>
                <Dialog.Description>Dialog Description</Dialog.Description>
                <Dialog.Close>Close</Dialog.Close>
              </Dialog.Content>
            </Dialog.Positioner>
          </Dialog.Portal>
        </Dialog.Root>
      </>
    );
  },
};
