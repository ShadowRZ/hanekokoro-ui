import { Field } from '@hanekokoro-ui/solid';
import type { Meta, StoryObj } from 'storybook-solidjs';

const meta: Meta = {
  title: 'Field',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Field.Root>
      <Field.Label>Label</Field.Label>
      <Field.Input placeholder='Placeholder' />
      <Field.HelperText>Some additional Info</Field.HelperText>
    </Field.Root>
  ),
};

export const WithError: Story = {
  render: () => (
    <Field.Root invalid>
      <Field.Label>Label</Field.Label>
      <Field.Input placeholder='Placeholder' />
      <Field.ErrorText>Something went wrong?</Field.ErrorText>
    </Field.Root>
  ),
};
