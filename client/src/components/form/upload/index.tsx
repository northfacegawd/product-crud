import { UseFormRegisterReturn } from 'react-hook-form';

import { EX_IMAGES } from '../../../constants/images';
import Gallery from '../../common/gallery';
import UploadImage from '../../icons/upload-image';
import { SwiperWrapper, UploadLabel, UploadWrapper } from './index.style';

interface UploadProps {
  register: UseFormRegisterReturn;
}

export default function Upload({ register }: UploadProps) {
  return (
    <UploadWrapper>
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
      <SwiperWrapper>
        <Gallery images={EX_IMAGES} showThumbnail />
      </SwiperWrapper>
    </UploadWrapper>
  );
}
