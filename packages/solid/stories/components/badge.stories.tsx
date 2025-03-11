import type { Meta, StoryObj } from 'storybook-solidjs';
import { Badge, type BadgeProps } from '@hanekokoro-ui/solid';
import { Grid } from '@hanekokoro-ui/styled-system/jsx';
import { badge } from '@hanekokoro-ui/styled-system/recipes';
import { For } from 'solid-js';

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: 'Badge',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {
    variant: {
      control: 'radio',
      options: badge.variantMap.variant,
      table: {
        defaultValue: {
          summary: 'soft',
        },
      },
    },
  },
  args: {
    variant: 'soft',
  },
  render: (props: BadgeProps) => (
    <Badge colorPalette='accent' {...props}>
      Badge
    </Badge>
  ),
};

export const Variants: Story = {
  render: () => (
    <Grid gridTemplateColumns='repeat(5, max-content)'>
      <For each={badge.variantMap.variant}>
        {(item) => (
          <>
            <Badge variant={item} colorPalette='accent'>
              Primary
            </Badge>
            <Badge variant={item} colorPalette='neutral'>
              Secondary
            </Badge>
            <Badge variant={item} colorPalette='success'>
              Success
            </Badge>
            <Badge variant={item} colorPalette='warning'>
              Warning
            </Badge>
            <Badge variant={item} colorPalette='error'>
              Error
            </Badge>
          </>
        )}
      </For>
    </Grid>
  ),
};
