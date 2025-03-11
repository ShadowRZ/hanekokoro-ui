import type { Meta, StoryObj } from 'storybook-solidjs';
import { fn } from '@storybook/test';
import { IconButton, type IconButtonProps } from '@hanekokoro-ui/solid';
import CatDuotone from '~icons/ph/cat-duotone';
import LinkDuotone from '~icons/ph/link-duotone';
import { button } from '@hanekokoro-ui/styled-system/recipes';
import { Grid, GridItem } from '@hanekokoro-ui/styled-system/jsx';
import { For } from 'solid-js';

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: 'IconButton',
  tags: ['autodocs'],
  args: {
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (props: IconButtonProps) => (
    <IconButton {...props}>
      <CatDuotone />
    </IconButton>
  ),
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
                  <IconButton w='min' size={size} variant={item} colorPalette='accent'>
                    <CatDuotone />
                  </IconButton>
                  <IconButton w='min' size={size} variant={item} colorPalette='neutral'>
                    <CatDuotone />
                  </IconButton>
                  <IconButton w='min' size={size} variant={item} colorPalette='success'>
                    <CatDuotone />
                  </IconButton>
                  <IconButton w='min' size={size} variant={item} colorPalette='warning'>
                    <CatDuotone />
                  </IconButton>
                  <IconButton w='min' size={size} variant={item} colorPalette='error'>
                    <CatDuotone />
                  </IconButton>
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
    <IconButton
      as='a'
      href='https://panda-css.com'
      target='_blank'
      rel='noopener noreferrer'
      colorPalette='neutral'
      {...props}
    >
      <LinkDuotone />
    </IconButton>
  ),
  argTypes: {
    variant: { control: 'radio', options: button.variantMap.variant },
  },
  args: {
    variant: 'solid',
  },
};
