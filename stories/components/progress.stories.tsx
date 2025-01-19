import type { Meta, StoryObj } from 'storybook-solidjs';
import { Progress, type ProgressProps } from '@/components/ui/progress';

const meta: Meta<typeof Progress> = {
  component: Progress,
  title: 'Progress',
  tags: ['autodocs', 'snippet'],
  argTypes: {
    type: { control: 'radio', options: ['linear', 'circular'] },
  },
  render: (props: ProgressProps) => <Progress {...props} min={0} max={100} />,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Linear: Story = {
  args: {
    value: 0,
    type: 'linear',
  },
};

export const Circular: Story = {
  args: {
    value: 0,
    type: 'circular',
  },
};
