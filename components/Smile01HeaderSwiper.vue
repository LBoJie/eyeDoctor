<template>
  <div>
    <Swiper v-bind="swiperConfig">
      <SwiperSlide>
        <NuxtLink>
          <img src="~/assets/images/swiper/Smile_01/headerSwiper/1.webp" alt="">
        </NuxtLink>
      </SwiperSlide>
      <SwiperSlide>
        <NuxtLink>
          <img src="~/assets/images/swiper/Smile_01/headerSwiper/2.webp" alt="">
        </NuxtLink>
      </SwiperSlide>
      <SwiperSlide>
        <NuxtLink>
          <img src="~/assets/images/swiper/Smile_01/headerSwiper/3.webp" alt="">
        </NuxtLink>
      </SwiperSlide>
      <SwiperSlide>
        <NuxtLink>
          <img src="~/assets/images/swiper/Smile_01/headerSwiper/4.webp" alt="">
        </NuxtLink>
      </SwiperSlide>
      <SwiperSlide>
        <NuxtLink>
          <img src="~/assets/images/swiper/Smile_01/headerSwiper/5.webp" alt="">
        </NuxtLink>
      </SwiperSlide>
      <SwiperSlide>
        <NuxtLink>
          <img src="~/assets/images/swiper/Smile_01/headerSwiper/6.webp" alt="">
        </NuxtLink>
      </SwiperSlide>
      <SwiperSlide>
        <NuxtLink>
          <img src="~/assets/images/swiper/Smile_01/headerSwiper/7.webp" alt="">
        </NuxtLink>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>

const swiperConfig = {
  modules: [SwiperNavigation, SwiperFreeMode],
  navigation: true,
  freeMode: true,
  slidesPerView: 2.6,
  breakpoints:{
    375:{
      slidesPerView: 3.2,
    },
    414:{
      slidesPerView: 3.642,
    }
  },
};

</script>
<style scoped lang="scss">
:deep(.swiper) {
  height: 115px;
  padding: 0 34px;
  background-color: #fff;

  .swiper-button-prev {
    width: 34px;
    height: 100.5px;
    top: 7.25px;
    left: 0;
    margin-top: 0;
    border-right: 1px solid #d2d2d7;
    background-color: #fff;
    transition: opacity 0.3s;
  }

  .swiper-button-prev::after {
    background-image: url("~/assets/images/swiper/Smile_01/headerSwiper/prev.webp");
    background-size: cover;
    font-size: 0;
    width: 9px;
    height: 16px;
  }

  .swiper-button-next {
    width: 34px;
    height: 100.5px;
    top: 7.25px;
    right: 0;
    margin-top: 0;
    border-left: 1px solid #d2d2d7;
    background-color: #fff;
    transition: opacity 0.3s;
  }

  .swiper-button-next::after {
    background-image: url("~/assets/images/swiper/Smile_01/headerSwiper/next.webp");
    background-size: cover;
    font-size: 0;
    width: 9px;
    height: 16px;
  }

  .swiper-button-disabled {
    opacity: 0;
  }

  a {
    display: block;
    height: 100%;
    text-align: center;
  }

  .swiper-slide img {
    max-width: 95px;
    width: 100%;
  }
}
</style>