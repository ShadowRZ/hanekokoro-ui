import { Select } from '@shadowrz/hanekokoro-ui';
import { createListCollection } from '@ark-ui/solid';
import { Index } from 'solid-js';
import { Portal } from 'solid-js/web';
import type { Meta, StoryObj } from 'storybook-solidjs';
import CaretUpDown from '~icons/ph/caret-up-down';
import CheckBold from '~icons/ph/check-bold';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Select',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const collection = createListCollection({
      items: [
        { label: 'React', value: 'react' },
        { label: 'Solid', value: 'solid' },
        { label: 'Vue', value: 'vue' },
        { label: 'Svelte', value: 'svelte', disabled: true },
      ],
    });
    return (
      <Select.Root positioning={{ sameWidth: true }} collection={collection}>
        <Select.Label>Framework</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder='Select a Framework' />
            <CaretUpDown />
          </Select.Trigger>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              <Select.ItemGroup>
                <Select.ItemGroupLabel>Frameworks</Select.ItemGroupLabel>
                <Index each={collection.items}>
                  {(item) => (
                    <Select.Item item={item()}>
                      <Select.ItemText>{item().label}</Select.ItemText>
                      <Select.ItemIndicator>
                        <CheckBold />
                      </Select.ItemIndicator>
                    </Select.Item>
                  )}
                </Index>
              </Select.ItemGroup>
            </Select.Content>
          </Select.Positioner>
        </Portal>
        <Select.HiddenSelect />
      </Select.Root>
    );
  },
};
