import { Tabs } from '@shadowrz/hanekokoro-ui';
import { For } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Tabs',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (props: Tabs.RootProps) => {
    const options = [
      { id: 'react', label: 'React' },
      { id: 'solid', label: 'Solid' },
      { id: 'svelte', label: 'Svelte' },
      { id: 'vue', label: 'Vue' },
    ];

    return (
      <Tabs.Root defaultValue='react' {...props}>
        <Tabs.List gap='1'>
          <For each={options}>
            {(option) => (
              <Tabs.Trigger py='1'value={option.id} disabled={option.id === 'svelte'}>
                {option.label}
              </Tabs.Trigger>
            )}
          </For>
          <Tabs.Indicator />
        </Tabs.List>
        <Tabs.Content value='react'>Know React? Check out Solid!</Tabs.Content>
        <Tabs.Content value='solid'>Know Solid? Check out Svelte!</Tabs.Content>
        <Tabs.Content value='svelte'>Know Svelte? Check out Vue!</Tabs.Content>
        <Tabs.Content value='vue'>Know Vue? Check out React!</Tabs.Content>
      </Tabs.Root>
    );
  },
};

export const Vertical: Story = {
  render: (props: Tabs.RootProps) => {
    const options = [
      { id: 'react', label: 'React' },
      { id: 'solid', label: 'Solid' },
      { id: 'svelte', label: 'Svelte' },
      { id: 'vue', label: 'Vue' },
    ];

    return (
      <Tabs.Root defaultValue='react' orientation='vertical' {...props}>
        <Tabs.List gap='1'>
          <For each={options}>
            {(option) => (
              <Tabs.Trigger px='2' value={option.id} disabled={option.id === 'svelte'}>
                {option.label}
              </Tabs.Trigger>
            )}
          </For>
          <Tabs.Indicator />
        </Tabs.List>
        <Tabs.Content value='react'>Know React? Check out Solid!</Tabs.Content>
        <Tabs.Content value='solid'>Know Solid? Check out Svelte!</Tabs.Content>
        <Tabs.Content value='svelte'>Know Svelte? Check out Vue!</Tabs.Content>
        <Tabs.Content value='vue'>Know Vue? Check out React!</Tabs.Content>
      </Tabs.Root>
    );
  },
};
