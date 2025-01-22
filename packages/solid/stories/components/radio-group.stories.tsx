import { For } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs';
import { RadioGroup } from '@hanekokoro-ui/solid';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'RadioGroup',
};

export default meta;
type Story = StoryObj;

export const SimpleRadioGroup: Story = {
  render: () => {
    const options = [
      { id: 'react', label: 'React' },
      { id: 'solid', label: 'Solid' },
      { id: 'svelte', label: 'Svelte' },
      { id: 'vue', label: 'Vue' },
    ];
    return (
      <RadioGroup.Root defaultValue='react' orientation='vertical'>
        <For each={options}>
          {(option) => (
            <RadioGroup.Item value={option.id} disabled={option.id === 'svelte'}>
              <RadioGroup.ItemControl />
              <RadioGroup.ItemText>{option.label}</RadioGroup.ItemText>
              <RadioGroup.ItemHiddenInput />
            </RadioGroup.Item>
          )}
        </For>
      </RadioGroup.Root>
    );
  },
};
