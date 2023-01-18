import React from 'react';
import { useForm } from 'react-hook-form';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Upload from '.';

function FakeUpload() {
  const { register } = useForm();

  return <Upload register={register('image')} />;
}

export default {
  title: 'Example/MyComponent',
  component: FakeUpload,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof FakeUpload>;

const Template: ComponentStory<typeof FakeUpload> = () => <FakeUpload />;

export const Primary = Template.bind({});
