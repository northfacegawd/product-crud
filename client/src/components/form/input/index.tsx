import React, { memo } from 'react';
import { Form, FormInputProps, Label } from 'semantic-ui-react';

interface InputProps extends FormInputProps {
  inputType?: string;
}

const Input: React.FC<InputProps> = ({ inputType, ...rest }) => {
  if (inputType === 'amount') {
    return (
      <Form.Input
        placeholder={`${rest.label}을(를) 선택 또는 입력해주세요.`}
        {...rest}
      >
        <Label basic>₩</Label>
        <input />
        <Label>.00</Label>
      </Form.Input>
    );
  }
  return (
    <Form.Input
      placeholder={`${rest.label}을(를) 선택 또는 입력해주세요.`}
      {...rest}
    />
  );
};

Input.defaultProps = {
  fluid: true,
  required: true,
  type: 'text',
};

export default memo(Input);
