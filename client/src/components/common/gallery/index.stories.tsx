import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Gallery from '.';
import { EX_IMAGES } from '../../../constants/images';

export default {
  title: 'Common/Gallery Component',
  component: Gallery,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Gallery>;

const Template: ComponentStory<typeof Gallery> = (args) => (
  <Gallery {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  images: EX_IMAGES,
};
export const ShowThumbnail = Template.bind({});

ShowThumbnail.args = {
  images: EX_IMAGES,
  showThumbnail: true,
};
