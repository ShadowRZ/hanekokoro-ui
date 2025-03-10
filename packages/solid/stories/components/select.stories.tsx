import { Select } from '@hanekokoro-ui/solid';
import type { Meta, StoryObj } from 'storybook-solidjs';
import CaretUpDown from '~icons/ph/caret-up-down';
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

export const Default: Story = {
  render: () => {
    const options: Option[] = [
      { label: 'React', value: 'react' },
      { label: 'Solid', value: 'solid' },
      { label: 'Vue', value: 'vue' },
      { label: 'Svelte', value: 'svelte', disabled: true },
    ];

    return (
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
        <Select.Trigger>
          <Select.Value<Option>>{(state) => state.selectedOption().label}</Select.Value>
          <Select.Icon>
            <CaretUpDown />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content>
            <Select.Listbox />
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    );
  },
};
