import type { Meta, StoryObj } from 'storybook-solidjs';
import { Progress, type ProgressProps } from '@/components/ui/progress';

const meta: Meta<typeof Progress> = {
  component: Progress,
  title: 'Progress',
  tags: ['autodocs', 'snippet'],
  render: (props: ProgressProps) => <Progress {...props} minValue={0} maxValue={100} />,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 0,
  },
};
