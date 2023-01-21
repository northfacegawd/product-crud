import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Empty from '.';

export default {
  title: 'Common/Empty',
  component: Empty,
} as ComponentMeta<typeof Empty>;

const Template: ComponentStory<typeof Empty> = (args) => <Empty {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: '존재하지 않는 상품입니다',
};
