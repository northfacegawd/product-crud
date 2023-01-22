import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import ProductList from '.';

export default {
  title: 'Product/ProductList',
  component: ProductList,
} as ComponentMeta<typeof ProductList>;

const Template: ComponentStory<typeof ProductList> = (args) => (
  <ProductList {...args} />
);

export const Primary = Template.bind({});

Primary.args = {};
