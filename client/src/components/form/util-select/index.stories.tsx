import { Form } from 'semantic-ui-react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import UtilSelect from '.';

export default {
  title: 'Form/UtilSelect Component',
  component: UtilSelect,
  decorators: [
    (Story) => {
      return (
        <Form>
          <Story />
        </Form>
      );
    },
  ],
} as ComponentMeta<typeof UtilSelect>;

const Template: ComponentStory<typeof UtilSelect> = (args) => (
  <UtilSelect {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  type: 'brands',
  label: '브랜드',
};
