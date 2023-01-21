import React from 'react';
import { FormSelectProps } from 'semantic-ui-react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Select from '.';

const options = [
  { key: 'single', text: '아몬즈 단독', value: 'single' },
  { key: 'departure_today', text: '오늘 출발', value: 'departure_today' },
];

function FakeSelect({ options }: Pick<FormSelectProps, 'options'>) {
  return <Select options={options} />;
}

export default {
  title: 'Form/Select Component',
  component: FakeSelect,
} as ComponentMeta<typeof FakeSelect>;

const Template: ComponentStory<typeof FakeSelect> = (args) => (
  <FakeSelect {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  options,
};
