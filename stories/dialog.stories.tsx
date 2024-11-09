import type { Meta, StoryObj } from 'storybook-solidjs';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Flex } from '@shadowrz/hanekokoro-ui/styled-system/jsx';
import { Portal } from 'solid-js/web';
import { createSignal } from 'solid-js';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Dialog',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleDialog: Story = {
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger.AsChild>
        {(props) => (
          <Button colorPalette='accent' {...props()}>
            Open Dialog
          </Button>
        )}
      </Dialog.Trigger.AsChild>
      <Dialog.Backdrop />
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
    </Dialog.Root>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger.AsChild>
        {(props) => (
          <Button colorPalette='accent' {...props()}>
            Open Dialog
          </Button>
        )}
      </Dialog.Trigger.AsChild>
      <Dialog.Backdrop />
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
    </Dialog.Root>
  ),
};

export const WithPortal: Story = {
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger.AsChild>
        {(props) => (
          <Button colorPalette='accent' {...props()}>
            Open Dialog
          </Button>
        )}
      </Dialog.Trigger.AsChild>
      <Portal>
        <Dialog.Backdrop />
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
      </Portal>
    </Dialog.Root>
  ),
};

export const Nested: Story = {
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger.AsChild>
        {(props) => (
          <Button colorPalette='accent' {...props()}>
            Open Dialog
          </Button>
        )}
      </Dialog.Trigger.AsChild>
      <Dialog.Backdrop />
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
                <Dialog.Trigger.AsChild>
                  {(props) => (
                    <Button colorPalette='accent' {...props()}>
                      Open Nested Dialog
                    </Button>
                  )}
                </Dialog.Trigger.AsChild>
                <Dialog.Backdrop />
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
              </Dialog.Root>
            </Flex>
          </Flex>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  ),
};

export const NestedWithPortal: Story = {
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger.AsChild>
        {(props) => (
          <Button colorPalette='accent' {...props()}>
            Open Dialog
          </Button>
        )}
      </Dialog.Trigger.AsChild>
      <Portal>
        <Dialog.Backdrop />
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
                  <Dialog.Trigger.AsChild>
                    {(props) => (
                      <Button colorPalette='accent' {...props()}>
                        Open Nested Dialog
                      </Button>
                    )}
                  </Dialog.Trigger.AsChild>
                  <Portal>
                    <Dialog.Backdrop />
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
                  </Portal>
                </Dialog.Root>
              </Flex>
            </Flex>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [isOpen, setIsOpen] = createSignal(false)

    return (
      <>
        <Button type='button' onClick={() => setIsOpen(true)}>
          Open Dialog
        </Button>
        <Dialog.Root open={isOpen()} onOpenChange={() => setIsOpen(false)}>
          <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
              <Dialog.Content>
                <Dialog.Title>Dialog Title</Dialog.Title>
                <Dialog.Description>Dialog Description</Dialog.Description>
                <Dialog.CloseTrigger>Close</Dialog.CloseTrigger>
              </Dialog.Content>
            </Dialog.Positioner>
          </Portal>
        </Dialog.Root>
      </>
    );
  },
};
