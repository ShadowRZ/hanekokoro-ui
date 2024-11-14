import type { Meta, StoryObj } from 'storybook-solidjs';
import { fn } from '@storybook/test';
import { Button, ButtonProps } from '@shadowrz/hanekokoro-ui';

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

export const SingleButton: Story = {
  render: (props: ButtonProps) => <Button {...props}>Button</Button>,
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
  render: (props: ButtonProps) => (
    <div style={{ display: 'flex', flex: '1 auto', gap: '0.5em' }}>
      <Button {...props} colorPalette='accent'>
        Primary
      </Button>
      <Button {...props} colorPalette='neutral'>
        Secondary
      </Button>
      <Button {...props} colorPalette='success'>
        Success
      </Button>
      <Button {...props} colorPalette='warning'>
        Warning
      </Button>
      <Button {...props} colorPalette='error'>
        Error
      </Button>
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
  render: (props: ButtonProps) => (
    <div style={{ display: 'flex', flex: '1 auto', gap: '0.5em' }}>
      <Button {...props} variant='soft' colorPalette='accent'>
        Primary
      </Button>
      <Button {...props} variant='soft' colorPalette='neutral'>
        Secondary
      </Button>
      <Button {...props} variant='soft' colorPalette='success'>
        Success
      </Button>
      <Button {...props} variant='soft' colorPalette='warning'>
        Warning
      </Button>
      <Button {...props} variant='soft' colorPalette='error'>
        Error
      </Button>
    </div>
  ),
  args: {
    onClick: fn(),
  },
};

export const Ghost: Story = {
  render: (props: ButtonProps) => (
    <div style={{ display: 'flex', flex: '1 auto', gap: '0.5em' }}>
      <Button {...props} variant='ghost' colorPalette='accent'>
        Primary
      </Button>
      <Button {...props} variant='ghost' colorPalette='neutral'>
        Secondary
      </Button>
      <Button {...props} variant='ghost' colorPalette='success'>
        Success
      </Button>
      <Button {...props} variant='ghost' colorPalette='warning'>
        Warning
      </Button>
      <Button {...props} variant='ghost' colorPalette='error'>
        Error
      </Button>
    </div>
  ),
  args: {
    onClick: fn(),
  },
};

export const Outline: Story = {
  render: (props: ButtonProps) => (
    <div style={{ display: 'flex', flex: '1 auto', gap: '0.5em' }}>
      <Button {...props} variant='outline' colorPalette='accent'>
        Primary
      </Button>
      <Button {...props} variant='outline' colorPalette='neutral'>
        Secondary
      </Button>
      <Button {...props} variant='outline' colorPalette='success'>
        Success
      </Button>
      <Button {...props} variant='outline' colorPalette='warning'>
        Warning
      </Button>
      <Button {...props} variant='outline' colorPalette='error'>
        Error
      </Button>
    </div>
  ),
  args: {
    onClick: fn(),
  },
};

export const ButtonLink: Story = {
  render: (props: ButtonProps) => (
    <Button.AsChild colorPalette='neutral' {...props}>
      {(props) => (
        <a href='https://panda-css.com' target='_blank' rel='noopener noreferrer' {...props()}>
          Panda CSS
        </a>
      )}
    </Button.AsChild>
  ),
  argTypes: {
    variant: { control: 'radio', options: ['solid', 'soft', 'ghost', 'outline', 'link'] },
  },
  args: {
    variant: 'link',
  },
};
