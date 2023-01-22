import { useEffect, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import UploadImage from '../../icons/upload-image';
import { UploadLabel, UploadWrapper } from './index.style';

interface UploadProps {
  previewFile?: FileList;
  register: UseFormRegisterReturn;
}

export default function Upload({ register, previewFile }: UploadProps) {
  const [photoPreview, setPhotoPreview] = useState<string>();

  useEffect(() => {
    const file = previewFile?.item(0);
    if (file) {
      setPhotoPreview(URL.createObjectURL(file));
    }
  }, [previewFile]);

  return (
    <UploadWrapper>
      <UploadLabel
        htmlFor="image"
        style={{
          backgroundImage: `url(${photoPreview})`,
        }}
      >
        {!photoPreview && <UploadImage />}
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
