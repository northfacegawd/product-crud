import React from 'react';
import { Form, FormSelectProps } from 'semantic-ui-react';

const Select: React.FC<FormSelectProps> = ({ ...rest }) => {
  return <Form.Select {...rest} />;
};

Select.defaultProps = {
  fluid: true,
  required: true,
  selection: true,
  search: true,
};

export default Select;
