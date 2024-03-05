<template>
    <div>
      <Swiper 
        class="swiper"
        v-bind="swiperConfig" 
        @swiper="onSwiper"
        @autoplay-time-left="progressFill"
        @slide-change="handleSwiperAutoPlay(true)"
      >
        <SwiperSlide v-for="slide in swiperConfig.slides" :key="slide">
          <img :src="slide">
        </SwiperSlide>
        <template #container-end>
          <div class="swiper-contorll">
            <div class="autoplay-progress-wrap">
              <div ref="progressFillBar" class="autoplay-progress-fill" />
            </div>
            <button v-if="swiperAutoPlay" @click="handleSwiperAutoPlay(false)">
              <img src="~/assets/images/public/icon/pause.png">
            </button>
            <button v-else @click="handleSwiperAutoPlay(false)">
              <img src="~/assets/images/public/icon/play.png">
            </button>
          </div>
        </template>
      </Swiper>
    </div>
  </template>
  
  <script setup>
  // 引用方法 引用頁
  
  // 引用頁 template
  // <SwiperType1 :swiper-config="swiper1Config" />
  
  // 引用頁 script
  // 初始化圖片
  // const swiperAssets = import.meta.glob("~/assets/images/index/swiper/**/*", { eager: true, import: 'default' });
  // const initSwiperImg = (swiperImg) => {
  //   return swiperAssets[swiperImg]
  // }
  // swiper 設定
  // const swiper1Config = {
  //   modules: [SwiperNavigation, SwiperAutoplay],
  //   navigation: true,
  //   loop: true,
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false,
  //   },
  //   slides: [
  //     initSwiperImg("/assets/images/index/swiper/swiper1/1.jpg"),
  //     initSwiperImg("/assets/images/index/swiper/swiper1/2.jpg")
  //   ]
  // }
  
  const props = defineProps({
      swiperConfig: {
          type: Object,
          default() { return {} }
      },
  });
  const swiperConfig = props.swiperConfig;
  const progressFillBar = ref(null);
  const swiperInstance = ref(null);
  const swiperAutoPlay = ref(true)
  const onSwiper = (swiper) => {
      swiperInstance.value = swiper;
  };
  const progressFill = (s, time, progress) => {
      progressFillBar.value.style.setProperty("width", `${(1 - progress) * 100}%`);
  };
  let autoPlayStop = false;
  const handleSwiperAutoPlay = (isSlideChange) => {
      if (isSlideChange) {
          if (!swiperAutoPlay.value) {
              swiperInstance.value.autoplay.stop();
              autoPlayStop = true;
              progressFillBar.value.style.setProperty("width", "0%");
          }
      }
      else {
          swiperAutoPlay.value = !swiperAutoPlay.value;
          if (!swiperAutoPlay.value) {
              swiperInstance.value.autoplay.pause();
          }
          else {
              if (autoPlayStop) {
                  swiperInstance.value.autoplay.start();
                  autoPlayStop = false;
              }
              swiperInstance.value.autoplay.resume();
          }
      }
  
  };
  </script>
  <style scoped lang="scss">
   :deep(.swiper-button-prev) {
          width: 40px;
          height: 40px;
      }
  
      :deep(.swiper-button-prev)::after {
          width: 100%;
          height: 100%;
          background-image: url("~/assets/images/public/icon/swiper-prev-2.png");
          background-size: cover;
          font-size: 0;
          
      }
  
  
      :deep(.swiper-button-next) {
          width: 40px;
          height: 40px;
      }
  
      :deep(.swiper-button-next)::after {
          width: 100%;
          height: 100%;
          background-image: url("~/assets/images/public/icon/swiper-next-2.png");
          background-size: cover;
          font-size: 0;
      }
  
  .swiper-slide {
      img {
          width: 100%;
      }
  }
  
  .swiper-contorll {
    height: 43px;
      position: relative;
      bottom: 61px;
      z-index: 1;
  
      .autoplay-progress-wrap {
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
          width: 50px;
          height: 3px;
          background-color: #181818;
  
          .autoplay-progress-fill {
              width: 0;
              height: 100%;
              background-color: #afafb0;
          }
      }
  
      button {
          position: absolute;
          right: 25px;
          padding: 0;
          background-color: transparent;
          border: none;
  
          img {
              width: 36.5px;
          }
      }
  }
  </style>