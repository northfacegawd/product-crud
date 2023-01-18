import { useState } from 'react';
import { FreeMode, Navigation, Swiper as SwiperType, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { GalleryWrapper } from './index.style';

interface GalleryProps {
  showThumbnail?: boolean;
  images: string[];
}

export default function Gallery({ showThumbnail, images }: GalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType>();

  return (
    <GalleryWrapper>
      <Swiper
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="previewSwiper"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <img alt="test" src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
      {showThumbnail && (
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode
          watchSlidesProgress
          modules={[FreeMode, Navigation, Thumbs]}
          className="thumbnailSwiper"
        >
          {images.map((image) => (
            <SwiperSlide key={image}>
              <img alt="test" src={image} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </GalleryWrapper>
  );
}
