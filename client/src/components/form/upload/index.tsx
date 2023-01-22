import { useEffect, useState } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

import UploadImage from '../../icons/upload-image';
import { UploadLabel, UploadWrapper } from './index.style';

interface UploadProps {
  previewFile?: FileList;
  defaultPreview?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

export default function Upload({
  register,
  previewFile,
  defaultPreview,
  error,
}: UploadProps) {
  const [photoPreview, setPhotoPreview] = useState<string>();

  useEffect(() => {
    const file = previewFile?.item?.(0);
    if (file) {
      setPhotoPreview(URL.createObjectURL(file));
    }
  }, [previewFile]);

  return (
    <UploadWrapper>
      <UploadLabel
        htmlFor="image"
        error={!!error}
        style={{
          backgroundImage: `url(${photoPreview ?? defaultPreview})`,
        }}
      >
        {!photoPreview && !defaultPreview && <UploadImage />}
        <input
          {...register}
          title="image"
          id="image"
          type="file"
          accept="image/*"
        />
      </UploadLabel>
    </UploadWrapper>
  );
}
