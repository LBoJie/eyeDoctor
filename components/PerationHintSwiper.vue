<template>
  <div ref="autoPlayPosition">
    <Swiper v-bind="swiperConfig" @swiper="onSwiper">
      <SwiperSlide>
        <div class="media">
          <iframe src="https://www.youtube.com/embed/RZ4wLr9Gueo" title="【第一視角】SMILE全飛秒近視雷射(真實)" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
        <div class="content">
          <h6>tips 1</h6>
          <p>手術第一視角，術中實況。</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="media">
          <img src="~/assets/images/Swiper/PerationHint/1.webp" alt="">
        </div>
        <div class="content">
          <h6>tips 2</h6>
          <p>雙眼同時睜開，注視下圖前方綠點，左右遮眼交替各30秒，重複數次。</p>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
      
<script setup>

const swiperConfig = {
  modules: [SwiperNavigation, SwiperAutoplay],
  navigation: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
}
const autoPlayPosition = ref(null);
const onSwiper = (swiper) => {
  swiper.autoplay.pause();
  let isScrollSwiper = false;
  const observer = new IntersectionObserver((entries, observer) => {
    if (entries[0].isIntersecting && !isScrollSwiper) {
      isScrollSwiper = true;
      swiper.autoplay.resume();
    }
  }, { threshold: 1 });

  observer.observe(autoPlayPosition.value);
};

</script>
<style scoped lang="scss">
:deep(.swiper) {
  .swiper-button-prev {
    width: 36px;
    height: 36px;
    top: 316px;
    right: 72px;
    left: auto;
    margin: 0;
  }

  .swiper-button-prev::after {
    width: 100%;
    height: 100%;
    background-image: url("~/assets/images/public/icon/swiper-prev-1.png");
    background-size: cover;
    font-size: 0;
  }

  .swiper-button-next {
    width: 36px;
    height: 36px;
    top: 316px;
    right: 20px;
    margin: 0;
  }

  .swiper-button-next::after {
    width: 100%;
    height: 100%;
    background-image: url("~/assets/images/public/icon/swiper-next-1.png");
    background-size: cover;
    font-size: 0;
  }

  .media {
    height: 251px;
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: center;

    iframe {
      width: 100%;
      height: 100%;
    }

    img {
      width: 150px;
    }
  }
}

.content {
  color: #fff;
  margin-top: 113px;
  text-align: start;
  padding-left: 45px;
  padding-right: 45px;

  h6 {
    font-size: 28px;
    font-family: "PublicSans";
    margin-bottom: 10px;
  }

  p {
    font-size: 15px;
    line-height: 22px;
  }
}
</style>