import { UseFormRegisterReturn } from 'react-hook-form';

import UploadImage from '../../icons/upload-image';
import { UploadLabel } from './index.style';

interface UploadProps {
  register: UseFormRegisterReturn;
}

export default function Upload({ register }: UploadProps) {
  return (
    <div>
      <UploadLabel htmlFor="image">
        <UploadImage />
        <input
          {...register}
          title="image"
          id="image"
          type="file"
          accept="image/*"
        />
      </UploadLabel>
    </div>
  );
}
