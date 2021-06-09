import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Field } from '../fields/Field';

export default {
  title: 'Example/TextArea',
  component: Field.Textarea,
  subcomponents: { Field, label: Field.Label },
} as Meta;

const Template: Story = (args) => (
  <Field>
    <Field.Label>TextArea</Field.Label>
    <Field.Textarea {...args} />
  </Field>
);

export const Default = Template.bind({});

Default.args = {
  placeholder: '',
  disabled: false,
  isResizable: true,
};
