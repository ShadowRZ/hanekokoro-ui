import type { Meta, StoryObj } from 'storybook-solidjs';
import { Button, Group, IconButton, type GroupProps } from '@hanekokoro-ui/solid';
import { Flex } from '@hanekokoro-ui/styled-system/jsx';
import CatDuotone from '~icons/ph/cat-duotone';
import LinkDuotone from '~icons/ph/link-duotone';

/**
 * Group and attach two related components.
 * A Pure CSS adoption of [`Group` in Chakra UI v3](https://www.chakra-ui.com/docs/components/group).
 */
const meta: Meta<typeof Group> = {
  component: Group,
  title: 'Group',
  tags: ['autodocs', 'new'],
  args: {
    attached: false,
    grow: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (props: GroupProps) => (
    <Group {...props}>
      <Button>Hello</Button>
      <Button>World</Button>
    </Group>
  ),
};

/**
 * Use the `attached` prop to make children components looks attached together.
 */
export const AttachedButtonGroup: Story = {
  render: (props: GroupProps) => (
    <Flex direction='column' gap='2'>
      <Group {...props}>
        <Button>Hello</Button>
        <Button>World</Button>
      </Group>
      <Group {...props}>
        <IconButton variant='outline'>
          <CatDuotone />
        </IconButton>
        <IconButton variant='outline'>
          <LinkDuotone />
        </IconButton>
      </Group>
    </Flex>
  ),
  args: {
    attached: true,
  },
};

/**
 * Use the `grow` prop to make children components grow to avaliable space.
 */
export const Growing: Story = {
  render: (props: GroupProps) => (
    <Group {...props} width='full'>
      <Button>Hello</Button>
      <Button>World</Button>
    </Group>
  ),
  args: {
    grow: true,
  },
};
