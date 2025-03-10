import { QrCode, type QrCodeProps } from '@hanekokoro-ui/solid';
import type { Meta, StoryObj } from 'storybook-solidjs';

/**
 * Renders a QR Code.
 */
const meta: Meta<typeof QrCode> = {
  component: QrCode,
  title: 'QrCode',
  tags: ['autodocs'],
  render: (props: QrCodeProps) => <QrCode {...props} />,
  argTypes: {
    fill: {
      control: 'color',
      description: 'The fill color of the QR Code.',
    },
    value: {
      description: 'The QR Code content.',
    },
  },
  args: {
    value: 'https://panda-css.com',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
