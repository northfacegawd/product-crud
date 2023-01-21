import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import ProductsPage from '.';

export default {
  title: 'Pages/ProductsPage',
  component: ProductsPage,
} as ComponentMeta<typeof ProductsPage>;

const Template: ComponentStory<typeof ProductsPage> = () => <ProductsPage />;

export const Primary = Template.bind({});

Primary.args = {};
