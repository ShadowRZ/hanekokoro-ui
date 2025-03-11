import type { Meta, StoryObj } from 'storybook-solidjs';
import { fn } from '@storybook/test';
import { Button, type ButtonProps } from '@hanekokoro-ui/solid/button';
import { button } from '@hanekokoro-ui/styled-system/recipes';
import { Grid, GridItem } from '@hanekokoro-ui/styled-system/jsx';
import { For } from 'solid-js';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
  args: {
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (props: ButtonProps) => <Button {...props}>Button</Button>,
  argTypes: {
    variant: { control: 'radio', options: button.variantMap.variant },
    size: { control: 'radio', options: button.variantMap.size },
  },
  args: {
    onClick: fn(),
    variant: 'solid',
    size: 'md',
  },
};

export const Variants: Story = {
  render: () => (
    <Grid gridTemplateColumns='repeat(5, max-content)' justifyItems='center'>
      <For each={button.variantMap.size}>
        {(size) => (
          <>
            <GridItem colSpan={5} justifySelf='left' textStyle='xl' fontWeight='bold'>
              size = {size}
            </GridItem>
            <For each={button.variantMap.variant.filter((item) => item !== 'link')}>
              {(item) => (
                <>
                  <Button w='min' size={size} variant={item} colorPalette='accent'>
                    Primary
                  </Button>
                  <Button w='min' size={size} variant={item} colorPalette='neutral'>
                    Secondary
                  </Button>
                  <Button w='min' size={size} variant={item} colorPalette='success'>
                    Success
                  </Button>
                  <Button w='min' size={size} variant={item} colorPalette='warning'>
                    Warning
                  </Button>
                  <Button w='min' size={size} variant={item} colorPalette='error'>
                    Error
                  </Button>
                </>
              )}
            </For>
          </>
        )}
      </For>
    </Grid>
  ),
  args: {
    onClick: fn(),
  },
};

export const Link: Story = {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  render: (props: {}) => (
    <Button
      as='a'
      href='https://panda-css.com'
      target='_blank'
      rel='noopener noreferrer'
      colorPalette='neutral'
      {...props}
    >
      Panda CSS
    </Button>
  ),
  argTypes: {
    variant: { control: 'radio', options: button.variantMap.variant },
  },
  args: {
    variant: 'solid',
  },
};
