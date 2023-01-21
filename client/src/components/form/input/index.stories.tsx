import React from 'react';
import { Form } from 'semantic-ui-react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Input from '.';

function FakeAmount() {
  return (
    <Form>
      <Input inputType="amount" />
    </Form>
  );
}

export default {
  title: 'Form/Amount Component',
  component: FakeAmount,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof FakeAmount>;

const Template: ComponentStory<typeof FakeAmount> = () => <FakeAmount />;

export const Primary = Template.bind({});
