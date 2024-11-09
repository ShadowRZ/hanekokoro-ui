import { Combobox } from '@/components/ui/combobox';
import { IconButton } from '@/components/ui/icon-button';
import { Input } from '@/components/ui/input';
import { createListCollection } from '@ark-ui/solid/combobox';
import { For } from 'solid-js';
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
    const collection = createListCollection({
      items: [
        { label: 'React', value: 'react' },
        { label: 'Solid', value: 'solid' },
        { label: 'Vue', value: 'vue' },
        { label: 'Svelte', value: 'svelte', disabled: true },
      ],
    });

    return (
      <Combobox.Root collection={collection} multiple>
        <Combobox.Label>Framework</Combobox.Label>
        <Combobox.Control>
          <Combobox.Input.AsChild placeholder='Select a Framework'>
            {(props) => <Input {...props()} />}
          </Combobox.Input.AsChild>
          <Combobox.Trigger.AsChild>
            {(props) => (
              <IconButton variant='link' aria-label="open" {...props()}>
                <CaretUpDown />
              </IconButton>
            )}
          </Combobox.Trigger.AsChild>
        </Combobox.Control>
        <Combobox.Positioner>
          <Combobox.Content>
            <Combobox.ItemGroup>
              <Combobox.ItemGroupLabel>Frameworks</Combobox.ItemGroupLabel>
              <For each={collection.items}>
                {(item) => (
                  <Combobox.Item item={item}>
                    <Combobox.ItemText>{item.label}</Combobox.ItemText>
                    <Combobox.ItemIndicator>
                      <CheckBold />
                    </Combobox.ItemIndicator>
                  </Combobox.Item>
                )}
              </For>
            </Combobox.ItemGroup>
          </Combobox.Content>
        </Combobox.Positioner>
      </Combobox.Root>
    );
  },
};
