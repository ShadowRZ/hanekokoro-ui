import { Avatar } from '@/components/ui/avatar';
import type { Meta, StoryObj } from 'storybook-solidjs';

/**
 * Avatar represents a entity with name and avatar (like an account or a profile).
 */
const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'Avatar',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'large'],
      description: 'Size of the avatar.',
      table: {
        defaultValue: {
          summary: 'large',
        },
      },
    },
    src: {
      description: 'The avatar URL to load.',
    },
    name: {
      description: 'The name associated with the avatar.',
      type: 'string',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * A large avatar can be used in the following scenarios:
 *
 * * Chat room header
 * * Avatar shown alongside messages
 */
export const Large: Story = {
  args: {
    size: 'large',
    src: 'https://www.libravatar.org/avatar/c08fdd039b5c7a2da68b65c046356120d55f0704d876180e74bba90a54462ec3?s=256',
  },
};

/**
 * A small avatar can be used in the following scenarios:
 *
 * * Status changes
 */
export const Small: Story = {
  args: {
    size: 'small',
    src: 'https://www.libravatar.org/avatar/c08fdd039b5c7a2da68b65c046356120d55f0704d876180e74bba90a54462ec3?s=256',
  },
};

export const WithName: Story = {
  args: {
    size: 'large',
    name: 'Hoshino Hoshi',
  },
};

export const WithoutName: Story = {
  args: {
    size: 'large',
  },
};
