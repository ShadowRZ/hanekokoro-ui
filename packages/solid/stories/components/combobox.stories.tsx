import { Combobox, IconButton, Input } from '@hanekokoro-ui/solid';
import type { Meta, StoryObj } from 'storybook-solidjs';
import CaretUpDown from '~icons/ph/caret-up-down';
import CheckBold from '~icons/ph/check-bold';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Combobox',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    return (
      <Combobox.Root<string>
        options={['React', 'Solid', 'Vue', 'Svelte']}
        defaultValue='Solid'
        placeholder='Select a Framework'
        itemComponent={(props) => (
          <Combobox.Item item={props.item}>
            <Combobox.ItemLabel>{props.item.rawValue}</Combobox.ItemLabel>
            <Combobox.ItemIndicator>
              <CheckBold />
            </Combobox.ItemIndicator>
          </Combobox.Item>
        )}
      >
        <Combobox.Label>Framework</Combobox.Label>
        <Combobox.Control>
          <Combobox.Input as={Input} />
          <Combobox.Trigger as={IconButton} variant='link' aria-label='Open'>
            <Combobox.Icon>
              <CaretUpDown />
            </Combobox.Icon>
          </Combobox.Trigger>
        </Combobox.Control>
        <Combobox.Portal>
          <Combobox.Content>
            <Combobox.Listbox />
          </Combobox.Content>
        </Combobox.Portal>
      </Combobox.Root>
    );
  },
};
