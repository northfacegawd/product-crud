import React, { memo } from 'react';
import { Form, FormSelectProps } from 'semantic-ui-react';

const Select: React.FC<FormSelectProps> = ({ ...rest }) => {
  return (
    <Form.Select
      placeholder={`${rest.label}을(를) 선택 또는 입력해주세요.`}
      {...rest}
    />
  );
};

Select.defaultProps = {
  fluid: true,
  required: true,
  selection: true,
  search: true,
};

export default memo(Select);
