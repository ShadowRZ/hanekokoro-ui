import type { Meta, StoryObj } from 'storybook-solidjs';
import { fn } from '@storybook/test';
import { IconButton, type IconButtonProps } from '@hanekokoro-ui/solid';
import CatDuotone from '~icons/ph/cat-duotone';
import LinkDuotone from '~icons/ph/link-duotone';

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

export const SingleButton: Story = {
  render: (props: IconButtonProps) => (
    <IconButton {...props}>
      <CatDuotone />
    </IconButton>
  ),
  argTypes: {
    variant: { control: 'radio', options: ['solid', 'soft', 'ghost', 'outline', 'link'] },
    size: { control: 'radio', options: ['small', 'normal'] },
  },
  args: {
    onClick: fn(),
    variant: 'solid',
    size: 'normal',
  },
};

export const Solid: Story = {
  render: (props: IconButtonProps) => (
    <div style={{ display: 'flex', flex: '1 auto', gap: '0.5em' }}>
      <IconButton {...props} colorPalette='accent'>
        <CatDuotone />
      </IconButton>
      <IconButton {...props} colorPalette='neutral'>
        <CatDuotone />
      </IconButton>
      <IconButton {...props} colorPalette='success'>
        <CatDuotone />
      </IconButton>
      <IconButton {...props} colorPalette='warning'>
        <CatDuotone />
      </IconButton>
      <IconButton {...props} colorPalette='error'>
        <CatDuotone />
      </IconButton>
    </div>
  ),
  argTypes: {
    variant: { control: 'radio', options: ['solid', 'soft', 'none'] },
  },
  args: {
    onClick: fn(),
    variant: 'solid',
  },
};

export const Soft: Story = {
  render: (props: IconButtonProps) => (
    <div style={{ display: 'flex', flex: '1 auto', gap: '0.5em' }}>
      <IconButton {...props} variant='soft' colorPalette='accent'>
        <CatDuotone />
      </IconButton>
      <IconButton {...props} variant='soft' colorPalette='neutral'>
        <CatDuotone />
      </IconButton>
      <IconButton {...props} variant='soft' colorPalette='success'>
        <CatDuotone />
      </IconButton>
      <IconButton {...props} variant='soft' colorPalette='warning'>
        <CatDuotone />
      </IconButton>
      <IconButton {...props} variant='soft' colorPalette='error'>
        <CatDuotone />
      </IconButton>
    </div>
  ),
  args: {
    onClick: fn(),
  },
};

export const Ghost: Story = {
  render: (props: IconButtonProps) => (
    <div style={{ display: 'flex', flex: '1 auto', gap: '0.5em' }}>
      <IconButton {...props} variant='ghost' colorPalette='accent'>
        <CatDuotone />
      </IconButton>
      <IconButton {...props} variant='ghost' colorPalette='neutral'>
        <CatDuotone />
      </IconButton>
      <IconButton {...props} variant='ghost' colorPalette='success'>
        <CatDuotone />
      </IconButton>
      <IconButton {...props} variant='ghost' colorPalette='warning'>
        <CatDuotone />
      </IconButton>
      <IconButton {...props} variant='ghost' colorPalette='error'>
        <CatDuotone />
      </IconButton>
    </div>
  ),
  args: {
    onClick: fn(),
  },
};

export const Outline: Story = {
  render: (props: IconButtonProps) => (
    <div style={{ display: 'flex', flex: '1 auto', gap: '0.5em' }}>
      <IconButton {...props} variant='outline' colorPalette='accent'>
        <CatDuotone />
      </IconButton>
      <IconButton {...props} variant='outline' colorPalette='neutral'>
        <CatDuotone />
      </IconButton>
      <IconButton {...props} variant='outline' colorPalette='success'>
        <CatDuotone />
      </IconButton>
      <IconButton {...props} variant='outline' colorPalette='warning'>
        <CatDuotone />
      </IconButton>
      <IconButton {...props} variant='outline' colorPalette='error'>
        <CatDuotone />
      </IconButton>
    </div>
  ),
  args: {
    onClick: fn(),
  },
};

export const ButtonLink: Story = {
  render: (props: IconButtonProps) => (
    <IconButton.AsChild colorPalette='neutral' {...props}>
      {(props) => (
        <a href='https://panda-css.com' target='_blank' rel='noopener noreferrer' {...props()}>
          <LinkDuotone />
        </a>
      )}
    </IconButton.AsChild>
  ),
  argTypes: {
    variant: { control: 'radio', options: ['solid', 'soft', 'ghost', 'outline', 'link'] },
  },
  args: {
    variant: 'link',
  },
};
