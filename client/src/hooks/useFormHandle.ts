import { ChangeEvent, SyntheticEvent } from 'react';
import { Path, PathValue, useForm } from 'react-hook-form';
import { DropdownProps } from 'semantic-ui-react';

export default function useFormHandle<T extends Record<keyof T, T[keyof T]>>() {
  const form = useForm<T>();

  const onChangeInput = (key: Path<T>) => {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      form.setValue(key, e.target.value as PathValue<T, Path<T>>);
    };
  };

  const onChangeSelect = (key: Path<T>) => {
    return (_: SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
      if (data.value) form.setValue(key, data.value as PathValue<T, Path<T>>);
    };
  };

  return { ...form, onChangeInput, onChangeSelect };
}
