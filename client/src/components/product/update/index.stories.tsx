import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import ProductUpdateModal from '.';

export default {
  title: 'Product/ProductUpdateModal',
  component: ProductUpdateModal,
} as ComponentMeta<typeof ProductUpdateModal>;

const Template: ComponentStory<typeof ProductUpdateModal> = (args) => (
  <ProductUpdateModal {...args} />
);

export const Primary = Template.bind({});

Primary.args = {};
