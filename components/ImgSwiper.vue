<template>
  <div ref="autoPlayPosition">
    <Swiper class="swiper" v-bind="swiperConfig" @swiper="onSwiper" @autoplay-time-left="progressFill">
      <SwiperSlide v-for="slide in swiperConfig.slides" :key="slide">
        <img :src="slide" loading="lazy">
      </SwiperSlide>
      <template #container-end v-if="swiperConfig.slides.length > 1">
        <div class="autoplay-progress-wrap">
          <div ref="progressFillBar" class="autoplay-progress-fill" />
        </div>
      </template>
    </Swiper>
  </div>
</template>

<script setup>
// 引用方法 引用頁

// 引用頁 template
// <SwiperImg :swiper-config="swiper1Config" />

// 引用頁 script
// 初始化圖片
// const swiperAssets = import.meta.glob("~/assets/images/swiper/Smile_04/**/*", { eager: true, import: 'default' });

// swiper 設定
// const swiperConfig = {
//   modules: [SwiperNavigation, SwiperAutoplay],
//   navigation: true,
//   loop: true,
//   slides: [
//     swiperAssets["/assets/images/index/swiper/swiper1/1.jpg"],
//     swiperAssets["/assets/images/index/swiper/swiper1/2.jpg"]
//   ]
// }


const props = defineProps({
  swiperConfig: {
    type: Object,
    default() { return {} }
  },
});
const swiperConfig = props.swiperConfig;
//預先載入 active的下一張
swiperConfig.lazyPreloadPrevNext = 1;

const autoPlayPosition = ref(null);
const progressFillBar = ref(null);
const onSwiper = (swiper) => {
  swiper.autoplay.pause();
  const observer = new IntersectionObserver((entries, observer) => {
    if (entries[0].isIntersecting) {
      swiper.autoplay.resume();
      observer.unobserve(autoPlayPosition.value);
    }
  }, { threshold: 1 });

  observer.observe(autoPlayPosition.value);
};
const progressFill = (s, time, progress) => {
  progressFillBar.value.style.setProperty("width", `${(1 - progress) * 100}%`);
};

</script>
<style scoped lang="scss">
:deep(.swiper-button-prev) {
  top: 198px;
  width: 40px;
  height: 40px;
  left: 22px;
}

:deep(.swiper-button-prev)::after {
  width: 100%;
  height: 100%;
  background-image: url("~/assets/images/public/icon/swiper-prev-2.png");
  background-size: cover;
  font-size: 0;

}

:deep(.swiper-button-next) {
  top: 198px;
  width: 40px;
  height: 40px;
  right: 22px;
}

:deep(.swiper-button-next)::after {
  width: 100%;
  height: 100%;
  background-image: url("~/assets/images/public/icon/swiper-next-2.png");
  background-size: cover;
  font-size: 0;
}

.autoplay-progress-wrap {
  position: absolute;
  left: 50%;
  bottom: 16px;
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
</style>