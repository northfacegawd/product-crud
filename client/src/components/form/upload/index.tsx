import { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { FreeMode, Navigation, Swiper as SwiperType, Thumbs } from 'swiper';
import { SwiperSlide } from 'swiper/react';

import UploadImage from '../../icons/upload-image';
import {
  CustomSwiper,
  SwiperWrapper,
  UploadLabel,
  UploadWrapper,
} from './index.style';

interface UploadProps {
  register: UseFormRegisterReturn;
}

export default function Upload({ register }: UploadProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType>();

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
        <CustomSwiper
          spaceBetween={10}
          navigation
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img
              alt="test"
              src="https://swiperjs.com/demos/images/nature-1.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="test"
              src="https://swiperjs.com/demos/images/nature-2.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="test"
              src="https://swiperjs.com/demos/images/nature-3.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="test"
              src="https://swiperjs.com/demos/images/nature-4.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="test"
              src="https://swiperjs.com/demos/images/nature-5.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="test"
              src="https://swiperjs.com/demos/images/nature-6.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="test"
              src="https://swiperjs.com/demos/images/nature-7.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="test"
              src="https://swiperjs.com/demos/images/nature-8.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="test"
              src="https://swiperjs.com/demos/images/nature-9.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="test"
              src="https://swiperjs.com/demos/images/nature-10.jpg"
            />
          </SwiperSlide>
        </CustomSwiper>
        <CustomSwiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode
          watchSlidesProgress
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              alt="test"
              src="https://swiperjs.com/demos/images/nature-1.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="test"
              src="https://swiperjs.com/demos/images/nature-2.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="test"
              src="https://swiperjs.com/demos/images/nature-3.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="test"
              src="https://swiperjs.com/demos/images/nature-4.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="test"
              src="https://swiperjs.com/demos/images/nature-5.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="test"
              src="https://swiperjs.com/demos/images/nature-6.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="test"
              src="https://swiperjs.com/demos/images/nature-7.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="test"
              src="https://swiperjs.com/demos/images/nature-8.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="test"
              src="https://swiperjs.com/demos/images/nature-9.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="test"
              src="https://swiperjs.com/demos/images/nature-10.jpg"
            />
          </SwiperSlide>
        </CustomSwiper>
      </SwiperWrapper>
    </UploadWrapper>
  );
}
