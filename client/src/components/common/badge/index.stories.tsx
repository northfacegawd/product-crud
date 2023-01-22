import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Badge from '.';

export default {
  title: 'Common/Badge Component',
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  type: 'departure_today',
};
