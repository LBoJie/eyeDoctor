<template>
  <div>
    <div class="nav" :class="{ 'open-menu': showMenu }">
      <h3>SMILE Pro<span>全飛秒全球 800+ 萬例</span></h3>
      <nuxt-link to="" class="reservation-now">
        立即預約
      </nuxt-link>
      <button @click="showMenu = !showMenu">
        <img src="~/assets/images/public/icon/arrow-bottom.png" alt="">
      </button>
      <Transition>
        <ul v-if="showMenu" class="menu">
          <li>
            <nuxt-link to="">
              明星雷射三年後，視力如何？
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="">
              樂天女孩集錦，清晰觀看球賽無障礙！
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="">
              LUXYGIRLS 最醜素顏、雷射全記錄！
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="">
              女棒國手甄芸親自帶路！
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="">
              生存遊戲槍隊長，盡情享受生活！
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="">
              眼科醫師送給兒子畢業禮物！
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="">
              乒乓球國手的心路歷程！
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="">
              小精翎唐明翎近視雷射 QA 大剖析！
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="">
              其它好的見證者.....
            </nuxt-link>
          </li>
        </ul>
      </Transition>
    </div>
    <div class="prollax-img" :style="{ backgroundImage: `url(${prollaxImgUrl})` }" />
    <div class="box01">
      <div class="content">
        <h4><span>SMILE</span>全飛秒近視雷射</h4>
        <h5>清晰的力量</h5>
        <div class="box-link">
          <NuxtLink>了解更多<img src="~/assets/images/public/icon/arrow-right.png" class="arrow"></NuxtLink>
          <NuxtLink>預約檢查<img src="~/assets/images/public/icon/arrow-right.png" class="arrow"></NuxtLink>
        </div>
      </div>
      <div class="video" ref="video1">
        <ClientOnly>
          <iframe :class="{ 'video-show': video1Show }" src="https://www.youtube.com/embed/d1OHUqN_CBQ"
            title="SMILE全飛秒近視雷射形象影片" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
          </iframe>
        </ClientOnly>
      </div>
    </div>
    <div class="box-spacing" />
    <div class="box02">
      <div class="content">
        <h4>什麼是<span class="publicSans">SMILE</span>全飛秒<span class="mark">？</span></h4>
        <p>
          「<span class="publicSans">SMILE</span> 全飛秒」全名為
          <span class="bold">SM</span>all <span class="bold">I</span>ncision
          <span class="bold">L</span>enticule
          <span class="bold">E</span>x-traction
          「微創角膜透鏡萃取」，利用全飛秒雷射在角膜表面下方掃瞄出如隱形眼鏡般的超薄角膜，稱之「角膜透鏡」，醫師依個人狀況客製化角膜透鏡的大小與厚度，透過微小截口取出角膜透鏡，改變角膜弧度，改善近視的突出角膜或散光的不規則角膜，使光線正確聚焦於視網膜，而達到矯正近視與散光，可保持護角膜表面完整性，縮短角膜與視力的恢復期及維持穩定度。
        </p>
      </div>
      <div class="video" ref="video2">
        <ClientOnly>
          <iframe :class="{ 'video-show': video2Show }" src="https://www.youtube.com/embed/wGNYbvgErXk"
            title="【SMILE全飛秒】近視雷射矯正流程(大學眼科版)" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
          </iframe>
        </ClientOnly>
      </div>
    </div>
    <div class="box-spacing" />
    <div class="box03">
      <h4><span class="publicSans">SMILE</span><span class="comma">，</span>五大優勢<span class="period">。</span></h4>
      <div class="content">
        <div class="item">
          <img src="~/assets/images/Lasik/Smile_02/box03-item01.webp" alt="">
          <div>
            <h6>細小微創</h6>
            <p>0.2-0.4 公分小截口，降低感染風險，恢復快。</p>
          </div>
        </div>
        <div class="item">
          <img src="~/assets/images/Lasik/Smile_02/box03-item02.webp" alt="">
          <div>
            <h6>無瓣穩定</h6>
            <p>無需製作角膜瓣，保留角膜完整性及<br>穩定性。</p>
          </div>
        </div>
        <div class="item">
          <img src="~/assets/images/Lasik/Smile_02/box03-item03.webp" alt="">
          <div>
            <h6>快速省時</h6>
            <p>手術時間短，隔天正常作息。</p>
          </div>
        </div>
        <div class="item">
          <img src="~/assets/images/Lasik/Smile_02/box03-item04.webp" alt="">
          <div>
            <h6>減少乾眼</h6>
            <p>減少角膜神經傷害，降低乾眼機率。</p>
          </div>
        </div>
        <div class="item">
          <img src="~/assets/images/Lasik/Smile_02/box03-item05.webp" alt="">
          <div>
            <h6>藥水麻醉</h6>
            <p>眼藥水式麻藥，不打針。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="box-spacing" />
    <div class="box04">
      <h4><span class="publicSans">SMILE</span><span class="comma">，</span>特點<span class="period">。</span></h4>
      <ImgSwiper :swiper-config="swiper1Config" />
    </div>
    <div class="box-spacing" />
    <div class="box07">
      <h4>
        醫師自己<br>
        也做近視雷射!
      </h4>
      <ImgSwiper :swiper-config="swiper4Config" />
    </div>
    <div class="box-spacing" />
    <div class="box19">
      <h4>
        專業醫療人員<br>
        也選擇近視雷射!
      </h4>
      <ImgSwiper :swiper-config="swiper7Config" />
    </div>
    <div class="box-spacing" />
    <div class="box05">
      <h4>
        攻城獅<span>、</span>鋼鐵人<span>、</span>職籃球星<br>
        也做了近視雷射!
      </h4>
      <ImgSwiper :swiper-config="swiper2Config" />
    </div>
    <div class="box-spacing" />
    <div class="box06">
      <h4>
        職棒啦啦隊<br>
        也做了近視雷射!
      </h4>
      <ImgSwiper :swiper-config="swiper3Config" />
    </div>
    <div class="box-spacing" />

    <div class="box08">
      <h4>全飛秒矯正流程</h4>
      <h5>術前。術中。術後</h5>
      <iframe src="https://www.youtube.com/embed/wGNYbvgErXk" title="【SMILE全飛秒】近視雷射矯正流程(大學眼科版)" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen />
      <p>9 分 30 秒，值得全程觀看。</p>
    </div>
    <div class="box-spacing" />
    <div class="box09">
      <h4>矯正手術提示</h4>
      <h6>tips</h6>
      <PerationHintSwiper />
    </div>
    <div class="box-spacing" />
    <div class="box10">
      <h4>為何選擇大學眼科?</h4>
      <NumberBeat />
    </div>
    <div class="box-spacing" />
    <div class="box11">
      <h4>國內外得獎認證肯定</h4>
      <h5>醫療品質，唯一堅持。</h5>
      <NuxtLink>
        了解更多<img src="~/assets/images/public/icon/arrow-right.png">
      </NuxtLink>
      <img src="~/assets/images/Lasik/Smile_02/box11.webp" class="content" alt="">
    </div>
    <div class="box-spacing" />
    <div ref="box12" class="box12" />
    <div class="box-spacing" />
    <div class="box13" />
    <div class="box-spacing" />
    <div class="box14" />
    <div class="box-spacing" />
    <div class="box15">
      <h4>國內外得獎認證肯定</h4>
      <h5>醫療品質，唯一堅持。</h5>
      <ImgSwiper :swiper-config="swiper5Config" />
    </div>
    <div class="box-spacing" />
    <div class="box16">
      <h4>全球同步<span class="comma">，</span>全新設備<span class="period">。</span></h4>
      <h5>
        ZEISS、ALCON、AMO 等全球知名大廠設備，<br>
        提供即時新技術和診療方案。
      </h5>
      <div class="box-link">
        <NuxtLink>近視老花雷射<img src="~/assets/images/public/icon/arrow-right.png" class="arrow"></NuxtLink>
        <NuxtLink>老花白內障<img src="~/assets/images/public/icon/arrow-right.png" class="arrow"></NuxtLink>
        <NuxtLink>乾眼症<img src="~/assets/images/public/icon/arrow-right.png" class="arrow"></NuxtLink>
      </div>
      <ImgSwiper :swiper-config="swiper6Config" />
    </div>
    <div class="box-spacing" />
    <div class="box17">
      <h4>醫師團隊<span class="comma">，</span>視病猶親<span class="period">。</span></h4>
      <DoctorSwiper />
    </div>
    <div class="box-spacing" />
    <div class="box18">
      <LasikFQA />
    </div>
    <div class="box-spacing" />
    <ClientOnly>
      <LasikReservation />
    </ClientOnly>
    <div class="box-spacing" />
  </div>
</template>
<script setup>
const showMenu = ref(false);
const swiperAssets = import.meta.glob("~/assets/images/swiper/Smile_02/**/*", { eager: true, import: 'default' });
//swiper 設定
const swiper1Config = {
  modules: [SwiperNavigation, SwiperAutoplay],
  navigation: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slides: [
    swiperAssets["/assets/images/swiper/Smile_02/swiper1/1.png"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper1/2.png"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper1/3.png"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper1/4.png"],
  ]
};

const swiper2Config = {
  modules: [SwiperNavigation, SwiperAutoplay],
  navigation: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slides: [
    swiperAssets["/assets/images/swiper/Smile_02/swiper2/1.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper2/2.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper2/3.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper2/4.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper2/5.webp"],
  ]
};
const swiper3Config = {
  modules: [SwiperNavigation, SwiperAutoplay],
  navigation: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slides: [
    swiperAssets["/assets/images/swiper/Smile_02/swiper3/1.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper3/2.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper3/3.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper3/4.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper3/5.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper3/6.webp"]
  ]
};
const swiper4Config = {
  modules: [SwiperNavigation, SwiperAutoplay],
  navigation: true,
  // loop: false,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
  slides: [
    swiperAssets["/assets/images/swiper/Smile_02/swiper4/1.webp"],
  ]
};

const swiper5Config = {
  modules: [SwiperNavigation, SwiperAutoplay],
  navigation: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slides: [
    swiperAssets["/assets/images/swiper/Smile_02/swiper5/1.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper5/2.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper5/3.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper5/4.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper5/5.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper5/6.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper5/7.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper5/8.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper5/9.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper5/10.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper5/11.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper5/12.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper5/13.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper5/14.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper5/15.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper5/16.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper5/17.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper5/18.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper5/19.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper5/20.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper5/21.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper5/22.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper5/23.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper5/24.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper5/25.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper5/26.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper5/27.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper5/28.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper5/29.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper5/30.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper5/31.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper5/32.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper5/33.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper5/34.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper5/35.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper5/36.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper5/37.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper5/38.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper5/39.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper5/40.webp"],
  ]
};
const swiper6Config = {
  modules: [SwiperNavigation, SwiperAutoplay],
  navigation: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slides: [
    swiperAssets["/assets/images/swiper/Smile_02/swiper6/1.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper6/2.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper6/3.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper6/4.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper6/5.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper6/6.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper6/7.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper6/8.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper6/9.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper6/10.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper6/11.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper6/12.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper6/13.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper6/14.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper6/15.webp"],
  ]
};
const swiper7Config = {
  modules: [SwiperNavigation, SwiperAutoplay],
  navigation: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slides: [
    swiperAssets["/assets/images/swiper/Smile_02/swiper7/1.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper7/2.webp"],
    swiperAssets["/assets/images/swiper/Smile_02/swiper7/3.webp"],
  ]
};
const video1 = ref(null);
const video1Show = ref(false);
const video2 = ref(null);
const video2Show = ref(false);
// 滾動視差 設定
const parallaxAssets = import.meta.glob("~/assets/images/Lasik/Smile_02/**/*", { eager: true, import: 'default' });
const initparallaxImg = (parallaxImg) => {
  return parallaxAssets[parallaxImg]
};
const box12 = ref(null);
const prollaxImgUrl = ref("");
onMounted(() => {
  const videoObserver = new IntersectionObserver((entries, observer) => {
    if (entries[0].isIntersecting) {
      if (entries[0].target === video1.value) {
        video1Show.value = true;
        observer.unobserve(video1.value);
      }
      if (entries[0].target === video2.value) {
        video2Show.value = true;
        observer.unobserve(video2.value);
      }
    }
  }, { threshold: 1 });
  videoObserver.observe(video1.value);
  videoObserver.observe(video2.value);
  //滾動視差
  const prollaxObserver = new IntersectionObserver((entries) => {
    // 離開可視範圍時取消滾動視差圖片
    prollaxImgUrl.value = "";
    let targetDom = null;
    entries.forEach((item) => {
      if (item.isIntersecting) {
        targetDom = item;
      }
    })
    if (targetDom) {
      if (targetDom.target === box12.value) {
        prollaxImgUrl.value = initparallaxImg("/assets/images/Lasik/Smile_02/box12-bg.webp");
      }
    }
  }, { threshold: 0 });
  prollaxObserver.observe(box12.value);

});
</script>
<style scoped lang="scss">
.nav {
  position: sticky;
  top: 0;
  height: 49px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  padding-right: 17px;
  background-color: #000;
  border-bottom: 1px solid #3e3a39;
  color: #fff;
  z-index: 2;

  h3 {
    font-size: 17px;
    margin-right: auto;
    font-family: "PublicSans";

    span {
      font-family: "SourceHanSansTC";
      color: #cccccc;
      margin-left: 7px;
      font-size: 12px;
    }
  }

  .reservation-now {
    font-size: 12px;
    font-weight: 500;
    border: 1px solid #fff;
    padding: 4px 11px;
    border-radius: 10px;
  }

  button {
    background-color: transparent;
    border: none;
    padding: 0;
    margin-left: 20px;

    img {
      width: 17px;
    }
  }

  .menu {
    position: absolute;
    top: 49px;
    left: 0;
    right: 0;
    padding: 3px 39px 22px 39px;
    background-color: #000;

    li {
      font-size: 13px;
      padding-top: 14px;
      padding-bottom: 15px;
      border-bottom: 1px solid #3e3a39;
    }

    li:last-child {
      border-color: #000;
    }
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
}

.prollax-img {
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
}

.box-spacing {
  height: 12px;
  background-color: #fff;
}

.box-link {
  display: flex;
  justify-content: space-between;

  a {
    color: #2980ff;
    font-size: 15px;

    .arrow {
      margin-left: 6px;
      width: 6px;
    }
  }
}


.box01 {
  height: 885px;
  text-align: center;

  .content {
    height: 662px;
    padding-top: 59px;
    background-image: url("~/assets/images/Lasik/Smile_02/box01-bg.webp");
    background-size: cover;
    background-position: center;

    h4 {
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 11px;

      span {
        font-family: "PublicSans";
      }
    }

    h5 {
      font-size: 18px;
      margin-bottom: 20px;
    }

    .box-link {
      padding-left: 122px;
      padding-right: 116px;
    }
  }

  .video {
    height: 223px;
    background-image: url("~/assets/images/Lasik/Smile_02/box01-video-bg.webp");

    iframe {
      opacity: 0;
      width: 100%;
      height: 100%;
    }

    iframe.video-show {
      opacity: 1;
    }
  }
}

.box02 {
  height: 883px;

  .content {
    height: 650px;
    color: #fff;
    text-align: center;
    padding-top: 107px;
    background-color: #000;
    background-image: url("~/assets/images/Lasik/Smile_02/box02-bg.webp");
    background-size: cover;

    h4 {
      font-size: 32px;
      font-weight: 700;
      margin-left: 5px;
      margin-bottom: 254px;

      .publicSans {
        font-family: "PublicSans";
      }

      .mark {
        margin-left: -5px;
      }
    }

    p {
      font-size: 14px;
      line-height: 21px;
      text-align: start;
      margin-left: 37px;
      margin-right: 37px;

      .publicSans {
        font-family: "PublicSans";
      }

      .bold {
        font-weight: 700;
      }
    }
  }

  .video {
    height: 233px;
    background-color: #000;

    iframe {
      opacity: 0;
      width: 100%;
      height: 100%;
    }

    iframe.video-show {
      opacity: 1;
    }
  }
}

.box03 {
  height: 834px;
  color: #fff;
  padding-top: 106px;
  background-image: url("~/assets/images/Lasik/Smile_02/box03-bg.webp");
  background-size: cover;
  background-position: center;

  h4 {
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    margin-left: 7px;
    margin-bottom: 55px;

    .publicSans {
      font-family: "PublicSans";
    }

    .comma {
      margin-right: -8px;
    }

    .period {
      margin-left: -7px;
      font-size: 28px;
    }
  }

  .content {
    padding-left: 50px;
    padding-right: 50px;

    .item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 47px;
      height: 69px;

      img {
        width: 60px;
        margin-right: 12px;
      }

      h6 {
        font-weight: 700;
        font-size: 20px;
        margin-bottom: 7px;
      }

      p {
        font-size: 14px;
        line-height: 21px;
      }
    }
  }
}

.box04 {
  height: 650px;
  padding-top: 74px;
  text-align: center;
  background-color: #000;

  h4 {
    font-size: 32px;
    font-weight: 700;
    color: #fff;
    margin-left: 7px;

    .publicSans {
      font-family: "PublicSans";
    }

    .comma {
      margin-right: -8px;
      margin-left: -8px;
    }

    .period {
      margin-left: -7px;
      font-size: 28px;
    }
  }

  :deep(.swiper) {
    height: 543px;

    .swiper-slide {
      img {
        max-width: 375px;
        width: 100%;
      }
    }
  }
}

.box05 {
  height: 650px;
  text-align: center;
  color: #fff;
  padding-top: 53px;
  background-color: #000;

  h4 {
    font-size: 32px;
    font-weight: 700;
    line-height: 42px;

    span {
      margin-left: -8px;
      margin-right: -8px;
    }
  }

  :deep(.swiper) {
    height: 513px;

    .swiper-slide {
      img {
        max-width: 375px;
        width: 100%;
      }
    }
  }
}

.box06 {
  text-align: center;
  color: #fff;
  height: 650px;
  padding-top: 53px;
  background-color: #000;

  h4 {
    font-size: 32px;
    font-weight: 700;
    line-height: 42px;
  }

  :deep(.swiper) {
    height: 513px;

    .swiper-slide {
      img {
        max-width: 375px;
        width: 100%;
      }
    }
  }
}

.box07 {
  height: 650px;
  color: #fff;
  text-align: center;
  padding-top: 53px;
  background-color: #000;

  h4 {
    font-size: 32px;
    font-weight: 700;
    line-height: 42px;
  }

  :deep(.swiper) {
    height: 513px;

    .swiper-slide {
      img {
        max-width: 375px;
        width: 100%;
      }
    }
  }
}

.box08 {
  height: 650px;
  color: #fff;
  padding-top: 72px;
  background-image: url("~/assets/images/Lasik/Smile_02/box08-bg.webp");
  background-size: cover;
  text-align: center;

  h4 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  h5 {
    font-size: 18px;
    margin-bottom: 61px;
  }

  iframe {
    width: 100%;
    height: 252px;
    margin-bottom: 66px;
  }

  p {
    font-size: 15px;
  }
}

.box09 {
  height: 660px;
  padding-top: 75px;
  background-color: #000;
  text-align: center;

  h4 {
    color: #fff;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 13px;
  }

  h6 {
    font-size: 18px;
    color: #298bff;
  }

  :deep(.swiper) {
    height: 522px;
  }
}

.box10 {
  padding-top: 73px;
  height: 750px;
  color: #fff;
  background-color: #000;
  text-align: center;

  h4 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 28px;
  }
}

.box11 {
  height: 650px;
  color: #fff;
  padding-top: 75px;
  background-color: #000;
  text-align: center;

  h4 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 14px;
  }

  h5 {
    font-size: 18px;
    margin-left: 18px;
    margin-bottom: 16px;
  }

  .content {
    width: 219px;
    display: block;
    margin-top: 45px;
    margin-left: auto;
    margin-right: auto;
  }

  a {
    margin-left: 18px;
    font-size: 15px;
    color: #298bff;

    img {
      width: 6px;
      margin-left: 6px;
    }
  }

}

.box12 {
  height: 650px;
}

.box13 {
  height: 650px;
  background-image: url("~/assets/images/Lasik/Smile_02/box13-bg.webp");
  background-size: cover;
  background-position: center;
}

.box14 {
  height: 650px;
  background-image: url("~/assets/images/Lasik/Smile_02/box14-bg.webp");
  background-size: cover;
  background-position: center;
}

.box15 {
  height: 650px;
  color: #fff;
  padding-top: 74px;
  background-color: #000;
  text-align: center;

  h4 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 14px;
  }

  h5 {
    font-size: 18px;
  }

  :deep(.swiper) {
    height: 512px;

    .swiper-slide {
      img {
        max-width: 345px;
        width: 100%;
      }
    }
  }
}

.box16 {
  height: 700px;
  color: #fff;
  padding-top: 75px;
  background-color: #000;
  text-align: center;

  h4 {
    font-size: 32px;
    font-weight: 700;
    margin-left: 21px;
    margin-bottom: 10px;

    .comma {
      margin-left: -8px;
      margin-right: -8px;
    }

    .period {
      font-size: 28px;
      margin-left: -7px;
    }
  }

  h5 {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 19px;
  }

  .box-link {
    display: flex;
    justify-content: space-between;
    padding-left: 69px;
    padding-right: 69px;

    a {
      color: #2980ff;
      font-size: 15px;

      .arrow {
        margin-left: 6px;
        width: 6px;
      }
    }
  }

  :deep(.swiper) {
    height: 501px;

    .swiper-slide {
      img {
        max-width: 380px;
        width: 100%;
      }
    }
  }
}

.box17 {
  height: 650px;
  color: #fff;
  padding-top: 59px;
  background-color: #000;
  text-align: center;

  h4 {
    font-size: 32px;
    font-weight: 700;
    margin-left: 8px;

    .comma {
      margin-left: -8px;
      margin-right: -8px;
    }

    .period {
      margin-left: -8px;
    }
  }
}

.box19 {
  height: 650px;
  color: #fff;
  text-align: center;
  padding-top: 53px;
  background-color: #000;

  h4 {
    font-size: 32px;
    font-weight: 700;
    line-height: 42px;
  }

  :deep(.swiper) {
    height: 513px;

    .swiper-slide {
      img {
        max-width: 375px;
        width: 100%;
      }
    }
  }
}
</style>