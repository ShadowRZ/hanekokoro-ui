import type { Meta, StoryObj } from 'storybook-solidjs';
import { Badge, type BadgeProps } from '@shadowrz/hanekokoro-ui';

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: 'Badge',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleBadge: Story = {
  render: (props: BadgeProps) => (
    <Badge colorPalette='accent' {...props}>
      Badge
    </Badge>
  ),
};

export const AllBadges: Story = {
  render: () => (
    <div style={{ display: 'flex', flex: '1 auto', gap: '4px' }}>
      <Badge colorPalette='accent'>Primary</Badge>
      <Badge colorPalette='neutral'>Secondary</Badge>
      <Badge colorPalette='success'>Success</Badge>
      <Badge colorPalette='warning'>Warning</Badge>
      <Badge colorPalette='error'>Error</Badge>
    </div>
  ),
};
