<template>
  <div>
    <Swiper v-bind="swiperConfig" @swiper="onSwiper">
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/History/1.webp" alt="">
        </div>
        <div class="slide-content">
          <p class="year">
            1992
          </p>
          <p class="content">
            - 大學眼科集團集團的第一家醫療通路據點「新南大學眼科」於台北市新生南路成立
          </p>
          <p class="content">
            - 拓展第二間診所「三峽大學眼科」
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/History/2.webp" alt="" loading="lazy">
        </div>
        <div class="slide-content">
          <p class="year">
            1996
          </p>
          <p class="content">
            - 第三家「新莊大學眼科」成立及大學眼科總管理處成立
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/History/3.webp" alt="" loading="lazy">
        </div>
        <div class="slide-content">
          <p class="year">
            1997
          </p>
          <p class="content">
            - 設立耕莘醫院和國泰醫院雷射屈光手術中心並引進Visx STAR S3準分子雷射儀
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/History/4.webp" alt="" loading="lazy">
        </div>
        <div class="slide-content">
          <p class="year">
            2000
          </p>
          <p class="content">
            -大學眼科診所(北市忠孝東路)成立
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/History/5.webp" alt="" loading="lazy">
        </div>
        <div class="slide-content">
          <p class="year">
            2001
          </p>
          <p class="content">
            - 大學眼科診所(台中市中港路)並引進Vixs StAR S3準分子雷射儀
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/History/6.webp" alt="">
        </div>
        <div class="slide-content">
          <p class="year">
            2002
          </p>
          <p class="content">
            - 大學眼科診所(台南市)成立
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/History/7.webp" alt="" loading="lazy">
        </div>
        <div class="slide-content">
          <p class="year">
            2002
          </p>
          <p class="content">
            -大學光學科技股份有限公司成為公開發行公司
          </p>
          <p class="content">
            -大學光學科技股份有限公司與台灣大學創新育成中心合作，設立研發中心
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/History/8.webp" alt="" loading="lazy">
        </div>
        <div class="slide-content">
          <p class="year">
            2004
          </p>
          <p class="content">
            - 大學光學科技股份有限公司經 OTC 核准上櫃，代碼 3218
          </p>
          <p class="content">
            - 鳳山診所、永和診所、新竹診所成立
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/History/9.webp" alt="" loading="lazy">
        </div>
        <div class="slide-content">
          <p class="year">
            2005
          </p>
          <p class="content">
            -「高品質眼科雷射視力矯正中心」榮獲SNQ國家品質標章認證
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/History/10.webp" alt="">
        </div>
        <div class="slide-content">
          <p class="year">
            2006
          </p>
          <p class="content">
            - 榮獲國家磐石獎
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/History/11.webp" alt="" loading="lazy">
        </div>
        <div class="slide-content">
          <p class="year">
            2007
          </p>
          <p class="content">
            - 成立第一家「大學眼鏡」，為國內同時橫跨眼科與眼鏡的醫療體系
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/History/12.webp" alt="">
        </div>
        <div class="slide-content">
          <p class="year">
            2008
          </p>
          <p class="content">
            - 大學眼科集團創辧人榮獲安永「創業家大獎」
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/History/13.webp" alt="" loading="lazy">
        </div>
        <div class="slide-content">
          <p class="year">
            2009
          </p>
          <p class="content">
            - 榮獲經濟部「台灣商務服務業優良品牌」殊榮
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/History/14.webp" alt="" loading="lazy">
        </div>
        <div class="slide-content">
          <p class="year">
            2010
          </p>
          <p class="content">
            - 集團總部搬遷至台北南港軟體園區
          </p>
          <p class="content">
            - 大學眼科榮獲JCI（Joint Commission International）國際醫療認證，成為國內第一家認證的門診手術中心
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/History/15.webp" alt="" loading="lazy">
        </div>
        <div class="slide-content">
          <p class="year">
            2012
          </p>
          <p class="content">
            - 與上海市瑞東醫院眼科戰略合作，設立中國第一個太學眼科據點
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/History/16.webp" alt="" loading="lazy">
        </div>
        <div class="slide-content">
          <p class="year">
            2013
          </p>
          <p class="content">
            - 通過醫策會醫學品質認證，榮獲國際旅遊簽證資格
          </p>
          <p class="content">
            - 「老花近視雷射」榮獲SNQ國家品質標章認證
          </p>
          <p class="content">
            - 金三明葉黃素系列產品（金寶明、金晶明、金愛爾明）榮獲SNQ國家品質標章認證，金晶明葉黃素更獲得國家生技醫療品質獎
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/History/17.webp" alt="" loading="lazy">
        </div>
        <div class="slide-content">
          <p class="year">
            2014
          </p>
          <p class="content">
            - 與南京市明基醫院合作眼科屈光手術中心
          </p>
          <p class="content">
            - 收購寧波市明視康眼科門診部，成立寧波太學眼科
          </p>
          <p class="content">
            - 金三明葉黃素系列產品（金寶明、金晶明、金愛爾明）榮獲SNQ國家品質標章認證，金晶明葉黃素更獲得國家生技醫療品質獎
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/History/18.webp" alt="" loading="lazy">
        </div>
        <div class="slide-content">
          <p class="year">
            2015
          </p>
          <p class="content">
            - 成立第16及17家三重、南崁大學眼科
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/History/19.webp" alt="" loading="lazy">
        </div>
        <div class="slide-content">
          <p class="year">
            2016
          </p>
          <p class="content">
            - 與寧波市第一醫院戰略合作，共建太學眼科中心
          </p>
          <p class="content">
            - 成立第18家龍潭大學眼科
          </p>
          <p class="content">
            - 大學眼科連續三次榮獲JCI（Joint Commission International）國際醫療認證
          </p>
          <p class="content">
            - 南崁大學眼科更名為蘆竹大學眼科
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/History/20.webp" alt="" loading="lazy">
        </div>
        <div class="slide-content">
          <p class="year">
            2016
          </p>
          <p class="content">
            - 成立第19家燦明大學眼科
          </p>
          <p class="content">
            - 與大陸第三方醫學診斷服務集團-浙江迪安控股公司合作，成立「太學眼科」
          </p>
          <p class="content">
            - 杭州太學眼科成立
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/History/21.webp" alt="" loading="lazy">
        </div>
        <div class="slide-content">
          <p class="year">
            2018
          </p>
          <p class="content">
            - 成立第20家士林大學眼科
          </p>
          <p class="content">
            - 成立橫店文榮醫院太學眼科中心
          </p>
          <p class="content">
            - 成立蕭山開發區醫院太學眼科中心
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/History/22.webp" alt="" loading="lazy">
        </div>
        <div class="slide-content">
          <p class="year">
            2019
          </p>
          <p class="content">
            - 成立第21家中和興南大學眼科
          </p>
          <p class="content">
            - 成立第22家嘉義大學眼科
          </p>
          <p class="content">
            - 第四次榮獲JCI認證
          </p>
          <p class="content">
            - 大學金三明葉黃素系列產品（金寶明、金晶明、金愛爾明）榮獲「國家生技大獎」及「台灣優質產品金牌獎」
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/History/23.webp" alt="" loading="lazy">
        </div>
        <div class="slide-content">
          <p class="year">
            2020
          </p>
          <p class="content">
            - 成立杭州臨平太學眼科醫院
          </p>
          <p class="content">
            - 成立東勢大學眼科
          </p>
          <p class="content">
            - 大學金三明葉黃素系列產品（金寶明、金晶明、金愛爾明）榮獲「國家生技大獎」及「台灣優質產品金牌獎」
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/History/24.webp" alt="" loading="lazy">
        </div>
        <div class="slide-content">
          <p class="year">
            2021
          </p>
          <p class="content">
            - 成立忠孝大學眼科旗艦中心，與德國蔡司ZEISS共建亞洲首家眼科視光中心
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="frosted-glass">
          <img src="~/assets/images/swiper/History/25.webp" alt="" loading="lazy">
        </div>
        <div class="slide-content">
          <p class="year">
            2022
          </p>
          <p class="content">
            - 第5次榮獲JCI認證
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
      
<script setup>

const swiperConfig = {
  modules: [SwiperNavigation, SwiperAutoplay],
  navigation: true,
  loop: false,
  lazyPreloadPrevNext: 2,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: 1.28,
  spaceBetween: 13,
  centeredSlides: true,
}
const swiperInstance = ref(null);

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

</script>
<style scoped lang="scss">
.swiper {
  height: 657px;

  :deep(.swiper-button-prev) {
    width: 36px;
    height: 36px;
    top: 237px;
    right: 72px;
    left: auto;
    margin: 0;
  }

  :deep(.swiper-button-prev)::after {
    width: 100%;
    height: 100%;
    background-image: url("~/assets/images/public/icon/swiper-prev-1.png");
    background-size: cover;
    font-size: 0;
  }


  :deep(.swiper-button-next) {
    width: 36px;
    height: 36px;
    top: 237px;
    right: 20px;
    margin: 0;
  }

  :deep(.swiper-button-next)::after {
    width: 100%;
    height: 100%;
    background-image: url("~/assets/images/public/icon/swiper-next-1.png");
    background-size: cover;
    font-size: 0;
  }

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

    .slide-content {
      margin-top: 71px;
      text-align: start;
      color: #fff;
      display: none;

      .year {
        margin-bottom: 9px;
        font-size: 28px;
        font-family: "PublicSans";
        font-weight: 400;
      }

      .content {
        font-size: 15px;
        line-height: 22px;
        margin-bottom: 22px;
      }
    }
  }

  .swiper-slide-active {
    .frosted-glass::after {
      background-color: rgba(0, 0, 0, 0);
    }

    .slide-content {
      display: block;
    }
  }

}
</style>