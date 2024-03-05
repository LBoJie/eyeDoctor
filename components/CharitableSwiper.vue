<template>
  <div>
    <Swiper 
      v-bind="swiperConfig" 
      @swiper="onSwiper"
      @autoplay-time-left="progressFill"
      @slide-change="handleSwiperAutoPlay(true)">
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/Charitable/1.webp" alt="" loading="lazy">
        </div>
        <p class="slide-title">
          2018-金山金包里(慈護宮)護眼檢查
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/Charitable/2.webp" alt="" loading="lazy">
        </div>
        <p class="slide-title">
          2018大溪區崎頂社區護眼檢查
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/Charitable/3.webp" alt="" loading="lazy">
        </div>
        <p class="slide-title">
          2018桃園區小檜溪社區護眼檢查
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/Charitable/4.webp" alt="" loading="lazy">
        </div>
        <p class="slide-title">
          2018蘆竹坑口後壁護眼檢查
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/Charitable/5.webp" alt="" loading="lazy">
        </div>
        <p class="slide-title">
          2019永達保險經紀人護眼檢查
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/Charitable/6.webp" alt="" loading="lazy">
        </div>
        <p class="slide-title">
          2019桃園八德區大安里護眼檢查
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/Charitable/7.webp" alt="" loading="lazy">
        </div>
        <p class="slide-title">
          2019景文高中護眼檢查
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/Charitable/8.webp" alt="" loading="lazy">
        </div>
        <p class="slide-title">
          2019瑞芳龍川社區護眼檢查
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/Charitable/9.webp" alt="" loading="lazy">
        </div>
        <p class="slide-title">
          2019龜山大同里護眼檢查
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/Charitable/10.webp" alt="" loading="lazy">
        </div>
        <p class="slide-title">
          2019關西石光社區護眼檢查
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/Charitable/11.webp" alt="" loading="lazy">
        </div>
        <p class="slide-title">
          2019關西南雄護眼檢查
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/Charitable/12.webp" alt="" loading="lazy">
        </div>
        <p class="slide-title">
          2019關西新富社區護眼檢查
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/Charitable/13.webp" alt="" loading="lazy">
        </div>
        <p class="slide-title">
          2019鶯歌中湖里護眼檢查
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/Charitable/14.webp" alt="" loading="lazy">
        </div>
        <p class="slide-title">
          2019HTC桃園廠護眼檢查
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/Charitable/15.webp" alt="" loading="lazy">
        </div>
        <p class="slide-title">
          2020三峽伊甸基金會身障護眼檢查
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/Charitable/16.webp" alt="" loading="lazy">
        </div>
        <p class="slide-title">
          2020三峽溪北里護眼檢查
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/Charitable/17.webp" alt="" loading="lazy">
        </div>
        <p class="slide-title">
          2020三峽體育運動協會重陽餐會講座
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/Charitable/18.webp" alt="" loading="lazy">
        </div>
        <p class="slide-title">
          2020士林關懷獨居老人年終餐會
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/Charitable/19.webp" alt="" loading="lazy">
        </div>
        <p class="slide-title">
          2020中華基督教合一宣教協會護眼檢查
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/Charitable/20.webp" alt="" loading="lazy">
        </div>
        <p class="slide-title">
          2020北平社區發展協會視力保健活動
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/Charitable/21.webp" alt="" loading="lazy">
        </div>
        <p class="slide-title">
          2020永健長青促進協會護眼檢查
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/Charitable/22.webp" alt="" loading="lazy">
        </div>
        <p class="slide-title">
          2020烏日仁德關懷聚點護眼檢查
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/Charitable/23.webp" alt="" loading="lazy">
        </div>
        <p class="slide-title">
          2020新埔鎮五埔社區關懷據點護眼檢查
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/Charitable/24.webp" alt="" loading="lazy">
        </div>
        <p class="slide-title">
          2020萬里老人會護眼檢查
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/Charitable/25.webp" alt="" loading="lazy">
        </div>
        <p class="slide-title">
          2020萬里瑪鋉公共托老中心護眼檢查
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/Charitable/26.webp" alt="" loading="lazy">
        </div>
        <p class="slide-title">
          2020龍潭樂齡中心視力講座
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/Charitable/27.webp" alt="" loading="lazy">
        </div>
        <p class="slide-title">
          2021北市信義老服中心篩檢
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/Charitable/28.webp" alt="" loading="lazy">
        </div>
        <p class="slide-title">
          2021台灣聖公會牧愛堂護眼檢查
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/Charitable/29.webp" alt="" loading="lazy">
        </div>
        <p class="slide-title">
          2021新北市中和區頂南里護眼檢查
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/Charitable/30.webp" alt="" loading="lazy">
        </div>
        <p class="slide-title">
          2022[社區巡禮]北市南港區合成里護眼檢查
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/Charitable/31.webp" alt="" loading="lazy">
        </div>
        <p class="slide-title">
          2022三峽北大社區園遊會護眼檢查.jpg
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/Charitable/32.webp" alt="" loading="lazy">
        </div>
        <p class="slide-title">
          2022三峽北大國中護眼講座及檢查
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/Charitable/33.webp" alt="" loading="lazy">
        </div>
        <p class="slide-title">
          2022中和景南里護眼檢查
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/Charitable/34.webp" alt="" loading="lazy">
        </div>
        <p class="slide-title">
          2022板橋四汴頭社區護眼檢查
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/Charitable/35.webp" alt="" loading="lazy">
        </div>
        <p class="slide-title">
          2022新竹縣關西鎮退休公務人員協會護眼講座
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/Charitable/36.webp" alt="" loading="lazy">
        </div>
        <p class="slide-title">
          2022新店直潭銀髮協會護眼檢查
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/Charitable/37.webp" alt="" loading="lazy">
        </div>
        <p class="slide-title">
          2022蘆竹歡喜學堂護眼活動
        </p>
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

const swiperConfig = {
  modules: [SwiperAutoplay],
  navigation: false,
  loop: true,
  lazyPreloadPrevNext: 2,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: 1.28,
  spaceBetween: 13,
  centeredSlides: true,
}
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
.swiper-contorll {
  height: 95px;
  position: relative;
  bottom: 113px;
  z-index: 1;

  .autoplay-progress-wrap {
    position: absolute;
    left: 50%;
    bottom: -8px;
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
    right: 19px;
    bottom: 47px;
    padding: 0;
    background-color: transparent;
    border: none;

    img {
      width: 36.5px;
    }
  }
}

.swiper {
  height: 394px;

  .swiper-slide {
    .frosted-glass {
      position: relative;
    }

    .frosted-glass::after {
      content: "";
      top: 0;
      left: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
    }

    img {
      max-width: 100%;
    }

    .slide-title {
      margin-top: 29px;
      font-size: 15px;
      color: #fff;
      display: none;
    }
  }

  .swiper-slide-active {
    .frosted-glass::after {
      background-color: rgba(0, 0, 0, 0);
    }

    .slide-title {
      display: block;
    }
  }

}
</style>