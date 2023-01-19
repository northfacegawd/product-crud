import React from 'react';
import { Form, FormInputProps, Label } from 'semantic-ui-react';

interface InputProps extends FormInputProps {
  inputType?: string;
}

const Input: React.FC<InputProps> = ({ inputType, ...rest }) => {
  if (inputType === 'amount') {
    return (
      <Form.Input {...rest}>
        <Label basic>₩</Label>
        <input />
        <Label>.00</Label>
      </Form.Input>
    );
  }
  return <Form.Input {...rest} />;
};

Input.defaultProps = {
  fluid: true,
  required: true,
  type: 'text',
};

export default Input;
