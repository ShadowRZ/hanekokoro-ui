import type { Meta, StoryObj } from 'storybook-solidjs';
import { Card, Button } from '@hanekokoro-ui/solid';

const meta: Meta = {
  title: 'Card',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card.Root width='sm' padding='2'>
      This is an example
    </Card.Root>
  ),
};

export const WithHeader: Story = {
  render: () => (
    <Card.Root width='sm' padding='2'>
      <Card.Header>
        <Card.Title>Title</Card.Title>
        <Card.Description>Description</Card.Description>
      </Card.Header>
      <Card.Body>This is an example</Card.Body>
    </Card.Root>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card.Root width='sm' padding='2'>
      <Card.Header>
        <Card.Title>Title</Card.Title>
        <Card.Description>Description</Card.Description>
      </Card.Header>
      <Card.Body>This is an example</Card.Body>
      <Card.Footer gap='3'>
        <Button variant='outline'>Cancel</Button>
        <Button>OK</Button>
      </Card.Footer>
    </Card.Root>
  ),
};
