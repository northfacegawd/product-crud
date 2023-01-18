import styled from 'styled-components';

export const GalleryWrapper = styled.div`
  height: 300px;

  .swiper {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    background-size: cover;
    background-position: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .previewSwiper {
    height: 80%;
    width: 100%;
  }

  .thumbnailSwiper {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
  }

  .thumbnailSwiper .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }

  .thumbnailSwiper .swiper-slide-thumb-active {
    opacity: 1;
  }
`;
