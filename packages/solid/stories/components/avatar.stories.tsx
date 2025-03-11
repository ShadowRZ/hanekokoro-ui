import { Avatar } from '@/components/ui/avatar';
import { Box, Grid } from '@hanekokoro-ui/styled-system/jsx';
import { avatar } from '@hanekokoro-ui/styled-system/recipes';
import { For } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs';

/**
 * Avatar represents a entity with name and avatar (like an account or a profile).
 */
const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'Avatar',
  tags: ['autodocs', 'snippet'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {
    size: {
      control: 'radio',
      options: avatar.variantMap.size,
      description: 'Size of the avatar.',
      table: {
        defaultValue: {
          summary: 'md',
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
  args: {
    size: 'md',
    name: 'Yorusaka Miyabi',
    src: 'https://avatars.githubusercontent.com/ShadowRZ',
  },
};

export const Variants: Story = {
  render: () => (
    <Grid gridTemplateColumns='repeat(4, max-content)' gap='4' overflow='scroll'>
      <Box textStyle='xl' fontWeight='bold'>
        Icon
      </Box>
      <Box textStyle='xl' fontWeight='bold'>
        Name
      </Box>
      <Box textStyle='xl' fontWeight='bold'>
        Icon (solid)
      </Box>
      <Box textStyle='xl' fontWeight='bold'>
        Name (solid)
      </Box>
      <For each={avatar.variantMap.size}>
        {(item) => (
          <>
            <Box h='min'>
              <Avatar size={item} />
            </Box>
            <Box h='min'>
              <Avatar size={item} name='Yorusaka Miyabi' />
            </Box>
            <Box h='min'>
              <Avatar size={item} variant='solid' />
            </Box>
            <Box h='min'>
              <Avatar size={item} variant='solid' name='Yorusaka Miyabi' />
            </Box>
          </>
        )}
      </For>
    </Grid>
  ),
};
