import { Select } from '@hanekokoro-ui/solid';
import { VStack } from '@hanekokoro-ui/styled-system/jsx';
import { select } from '@hanekokoro-ui/styled-system/recipes';
import { For } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs';
import CaretDown from '~icons/ph/caret-down';
import CheckBold from '~icons/ph/check-bold';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Select',
};

export default meta;
type Story = StoryObj;

interface Option {
  value: string;
  label: string;
  disabled?: boolean;
}

const options: Option[] = [
  { label: 'React', value: 'react' },
  { label: 'Solid', value: 'solid' },
  { label: 'Vue', value: 'vue' },
  { label: 'Svelte', value: 'svelte', disabled: true },
];

export const Default: Story = {
  render: () => (
    <Select.Root<Option>
      sameWidth
      options={options}
      optionValue='value'
      optionTextValue='label'
      optionDisabled='disabled'
      placeholder='Select a Framework'
      itemComponent={(props) => (
        <Select.Item item={props.item}>
          <Select.ItemLabel>{props.item.rawValue.label}</Select.ItemLabel>
          <Select.ItemIndicator>
            <CheckBold />
          </Select.ItemIndicator>
        </Select.Item>
      )}
    >
      <Select.Label>Framework</Select.Label>
      <Select.Trigger w='64'>
        <Select.Value<Option>>{(state) => state.selectedOption().label}</Select.Value>
        <Select.Icon>
          <CaretDown />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content>
          <Select.Listbox />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  ),
};

export const Variants: Story = {
  render: () => (
    <VStack>
      <For each={select.variantMap.variant}>
        {(item) => (
          <Select.Root<Option>
            variant={item}
            sameWidth
            options={options}
            optionValue='value'
            optionTextValue='label'
            optionDisabled='disabled'
            placeholder='Select a Framework'
            itemComponent={(props) => (
              <Select.Item item={props.item}>
                <Select.ItemLabel>{props.item.rawValue.label}</Select.ItemLabel>
                <Select.ItemIndicator>
                  <CheckBold />
                </Select.ItemIndicator>
              </Select.Item>
            )}
          >
            <Select.Label>Framework</Select.Label>
            <Select.Trigger w='64'>
              <Select.Value<Option>>{(state) => state.selectedOption().label}</Select.Value>
              <Select.Icon>
                <CaretDown />
              </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
              <Select.Content>
                <Select.Listbox />
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        )}
      </For>
    </VStack>
  ),
};
