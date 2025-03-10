import { Button, AlertDialog } from '@hanekokoro-ui/solid';
import { Flex } from '@hanekokoro-ui/styled-system/jsx';
import type { Meta, StoryObj } from 'storybook-solidjs';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'AlertDialog',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <AlertDialog.Root>
      <AlertDialog.Trigger as={Button} colorPalette='accent'>
        Open AlertDialog
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay />
        <AlertDialog.Positioner>
          <AlertDialog.Content gap='2'>
            <Flex direction='column'>
              <AlertDialog.Title>Proceed?</AlertDialog.Title>
              Sure to do this?
            </Flex>
            <Flex direction='row' justify='end' gap='2'>
              <AlertDialog.Cancel as={Button} variant='soft' colorPalette='neutral'>
                Cancel
              </AlertDialog.Cancel>
              <AlertDialog.Action
                as={Button}
                colorPalette='error'
                onClick={() => {
                  alert('Action confirmed!');
                }}
              >
                Yes, do this!
              </AlertDialog.Action>
            </Flex>
          </AlertDialog.Content>
        </AlertDialog.Positioner>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  ),
};
