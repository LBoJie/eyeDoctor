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
      <iframe src="https://www.youtube.com/embed/THqodbwbT3c" title="靚眼男神林宥嘉 選擇大學眼科SMILE Pro全飛秒近視雷射，輕鬆感受清晰視力！ #大學眼科 #近視雷射"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen />
    </div>
    <div class="box-spacing" />
    <div class="box02" ref="box02"></div>
    <div class="box-spacing" />
    <div class="box03">
      <iframe src="https://www.youtube.com/embed/Q0fpvXqPsQ0" title="樂天女孩推薦 #大學眼科近視雷射 清晰觀看球賽無障礙" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>
    <div class="box-spacing" />
    <div class="box04">
      <h4>
        <span class="publicSans">SMILE PRO</span><span class="comma">，</span>五大優勢<span class="period">。</span>
      </h4>
      <div class="box04-content">
        <div class="item">
          <img src="~/assets/images/Lasik/Smile_04/box04-1.webp" alt="">
          <h6>細小微創</h6>
          <p>0.2-0.4 公分小截口，降低感染風險，恢復快</p>
        </div>
        <div class="item">
          <img src="~/assets/images/Lasik/Smile_04/box04-2.webp" alt="">
          <h6>無瓣穩定</h6>
          <p>無需製作角膜瓣，保留角膜完整性及穩定性</p>
        </div>
      </div>

      <div class="box04-content">
        <div class="item">
          <img src="~/assets/images/Lasik/Smile_04/box04-3.webp" alt="">
          <h6>減少乾眼</h6>
          <p>減少角膜神經傷害，降低乾眼機率</p>
        </div>
        <div class="item">
          <img src="~/assets/images/Lasik/Smile_04/box04-4.webp" alt="">
          <h6>快速省時</h6>
          <p>手術時間短，隔天正常作息</p>
        </div>
      </div>
      <div class="box04-content">
        <div class="item">
          <img src="~/assets/images/Lasik/Smile_04/box04-5.webp" alt="">
          <h6>自動定位</h6>
          <p>視軸及散光軸輔助定位，術後視覺品質佳</p>
        </div>
      </div>
    </div>
    <div class="box-spacing" />
    <div class="box05">
      <h4><span class="publicSans">SMILE PRO</span><span class="comma">，</span>特點<span class="period">。</span></h4>
      <ImgSwiper :swiper-config="swiper1Config" />
    </div>
    <div class="box-spacing" />
    <div class="box06">
      <h4>
        眼科醫師及家人<br>
        也做了雷射!
      </h4>
      <ImgSwiper :swiper-config="swiper2Config" />
    </div>
    <div class="box-spacing" />
    <div class="box07">
      <h4>
        職棒啦啦隊<br>
        也做了雷射
      </h4>
      <ImgSwiper :swiper-config="swiper3Config" />
    </div>
    <div class="box-spacing" />
    <div class="box19">
      <h4>
        攻城獅<span>、</span>鋼鐵人<span>、</span>職籃球星<br>
        也做了近視雷射!
      </h4>
      <ImgSwiper :swiper-config="swiper7Config" />
    </div>
    <div class="box-spacing" />
    <div class="box08">
      <h4>
        藝人網紅大咖<br>
        <span>也做了雷射!</span>
      </h4>
      <ImgSwiper :swiper-config="swiper4Config" />
    </div>
    <div class="box-spacing" />
    <div class="box09">
      <h4>全飛秒矯正流程</h4>
      <h5>術前。術中。術後</h5>
      <iframe src="https://www.youtube.com/embed/wGNYbvgErXk" title="【SMILE全飛秒】近視雷射矯正流程(大學眼科版)" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
      <p>9 分 30 秒，值得全程觀看。</p>
    </div>
    <div class="box-spacing" />
    <div class="box10">
      <h4>矯正手術提示</h4>
      <h6>tips</h6>
      <PerationHintSwiper />
    </div>
    <div class="box-spacing" />
    <div class="box11">
      <h4>為何選擇大學眼科?</h4>
      <NumberBeat />
    </div>
    <div class="box-spacing" />
    <div class="box12">
      <h4>國內外得獎認證肯定</h4>
      <h5>醫療品質，唯一堅持。</h5>
      <NuxtLink>
        了解更多<img src="~/assets/images/public/icon/arrow-right.png">
      </NuxtLink>
      <img src="~/assets/images/Lasik/Smile_04/box12.webp" class="content" alt="">
    </div>
    <div class="box-spacing" />
    <div ref="box13" class="box13" />
    <div class="box-spacing" />
    <div class="box14" />
    <div class="box-spacing" />
    <div class="box15" />
    <div class="box-spacing" />
    <div class="box16">
      <h4>國內外得獎認證肯定</h4>
      <h5>醫療品質，唯一堅持。</h5>
      <ImgSwiper :swiper-config="swiper5Config" />
    </div>
    <div class="box-spacing" />
    <div class="box17">
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
    <div class="box18">
      <h4>醫師團隊<span class="comma">，</span>視病猶親<span class="period">。</span></h4>
      <DoctorSwiper />
    </div>
    <div class="box-spacing" />
    <LasikFQA />
    <div class="box-spacing" />
    <ClientOnly>
      <LasikReservation />
    </ClientOnly>
    <div class="box-spacing" />
  </div>
</template>
<script setup>
const showMenu = ref(false);
const swiperAssets = import.meta.glob("~/assets/images/swiper/Smile_04/**/*", { eager: true, import: 'default' });

// 滾動視差 設定
const parallaxAssets = import.meta.glob("~/assets/images/Lasik/Smile_04/**/*", { eager: true, import: 'default' });
const initparallaxImg = (parallaxImg) => {
  return parallaxAssets[parallaxImg]
};
const box02 = ref(null);
const box13 = ref(null);
const prollaxImgUrl = ref("");
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
    swiperAssets["/assets/images/swiper/Smile_04/swiper1/1.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper1/2.webp"],
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
    swiperAssets["/assets/images/swiper/Smile_04/swiper2/1.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper2/2.webp"],
  ]
};
const swiper3Config = {
  modules: [SwiperNavigation, SwiperAutoplay],
  navigation: true,
  // loop: true,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
  slides: [
    swiperAssets["/assets/images/swiper/Smile_04/swiper3/1.webp"],
  ]
};
const swiper4Config = {
  modules: [SwiperNavigation, SwiperAutoplay],
  navigation: true,
  // loop: true,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
  slides: [
    swiperAssets["/assets/images/swiper/Smile_04/swiper4/1.webp"],
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
    swiperAssets["/assets/images/swiper/Smile_04/swiper5/1.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper5/2.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper5/3.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper5/4.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper5/5.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper5/6.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper5/7.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper5/8.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper5/9.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper5/10.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper5/11.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper5/12.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper5/13.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper5/14.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper5/15.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper5/16.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper5/17.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper5/18.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper5/19.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper5/20.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper5/21.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper5/22.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper5/23.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper5/24.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper5/25.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper5/26.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper5/27.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper5/29.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper5/28.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper5/30.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper5/31.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper5/32.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper5/33.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper5/34.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper5/35.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper5/36.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper5/37.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper5/38.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper5/39.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper5/40.webp"],
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
    swiperAssets["/assets/images/swiper/Smile_04/swiper6/1.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper6/2.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper6/3.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper6/4.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper6/5.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper6/6.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper6/7.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper6/8.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper6/9.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper6/10.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper6/11.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper6/12.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper6/13.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper6/14.webp"],
    swiperAssets["/assets/images/swiper/Smile_04/swiper6/15.webp"],
  ]
};
const swiper7Config = {
  modules: [SwiperNavigation, SwiperAutoplay],
  navigation: true,
  // loop: true,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
  slides: [
    swiperAssets["/assets/images/swiper/Smile_04/swiper7/1.webp"],
  ]
};

onMounted(() => {
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
      if (targetDom.target === box02.value) {
        prollaxImgUrl.value = parallaxAssets["/assets/images/Lasik/Smile_04/box02-bg.webp"];
      }
      if (targetDom.target === box13.value) {
        prollaxImgUrl.value = parallaxAssets["/assets/images/Lasik/Smile_04/box13-bg.webp"];
      }
    }
  }, { threshold: 0 });
  prollaxObserver.observe(box02.value);
  prollaxObserver.observe(box13.value);

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
      font-size: 12px;
      font-family: "SourceHanSansTC";
      color: #cccccc;
      margin-left: 7px;
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

.box01 {
  position: relative;
  height: 961px;
  background-image: url("~/assets/images/Lasik/Smile_04/box01-bg.webp");
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: #000;

  iframe {
    width: 91%;
    height: 211px;
    position: absolute;
    bottom: 78px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 19px;
  }
}

.box02 {
  height: 650px;
}

.box03 {
  position: relative;
  height: 961px;
  background-image: url("~/assets/images/Lasik/Smile_04/box03-bg.webp");
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: #000;

  iframe {
    width: 91%;
    height: 211px;
    position: absolute;
    bottom: 78px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 19px;
  }
}

.box04 {
  height: 834px;
  text-align: center;
  background-image: url("~/assets/images/Lasik/Smile_04/box04-bg.webp");
  background-size: cover;
  color: #fff;
  padding-top: 52px;

  h4 {
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 50px;

    .publicSans {
      font-family: "PublicSans";
    }

    .comma {
      margin-left: -8px;
      margin-right: -8px;
    }

    .period {
      margin-left: -7px;
      margin-right: -7px;
      font-size: 28px;
    }
  }

  .box04-content {
    display: flex;
    justify-content: space-between;
    padding-left: 65px;
    padding-right: 69px;
    margin-bottom: 50px;

    .item {
      width: 90px;

      img {
        width: 60px;
        margin-bottom: 15px;
      }

      h6 {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 10px;
      }

      p {
        text-align: start;
        font-size: 14px;
        font-weight: 300;
        line-height: 21px;
      }
    }
  }
}

.box05 {
  text-align: center;
  height: 650px;
  padding-top: 75px;
  color: #fff;
  background-color: #000;

  h4 {
    font-size: 32px;
    font-weight: 700;

    .publicSans {
      font-family: "PublicSans";
    }

    .comma {
      margin-left: -8px;
      margin-right: -8px;
    }

    .period {
      margin-left: -7px;
      margin-right: -7px;
      font-size: 28px;
    }
  }

  :deep(.swiper) {
    height: 542px;

    .swiper-slide {
      img {
        max-width: 400px;
        width: 100%;
      }
    }
  }
}

.box06 {
  text-align: center;
  height: 650px;
  color: #fff;
  padding-top: 60px;
  background-color: #000;

  h4 {
    margin-left: 4px;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
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

.box07 {
  text-align: center;
  height: 650px;
  color: #fff;
  padding-top: 60px;
  background-color: #000;

  h4 {
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
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

.box08 {
  text-align: center;
  height: 650px;
  color: #fff;
  padding-top: 60px;
  background-color: #000;

  h4 {
    font-size: 32px;
    font-weight: 700;
    line-height: 39px;

    span {
      margin-left: -4px;
    }
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

.box09 {
  height: 650px;
  text-align: center;
  color: #fff;
  padding-top: 72px;
  background-image: url("~/assets/images/Lasik/Smile_04/box09-bg.webp");
  background-size: cover;

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

.box10 {
  text-align: center;
  height: 660px;
  padding-top: 75px;
  background-color: #000;

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

.box11 {
  text-align: center;
  padding-top: 73px;
  height: 750px;
  color: #fff;
  background-color: #000;

  h4 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 28px;
  }
}

.box12 {
  height: 650px;
  text-align: center;
  color: #fff;
  padding-top: 75px;
  background-color: #000;

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

  a {
    margin-left: 18px;
    font-size: 15px;
    color: #298bff;

    img {
      width: 6px;
      margin-left: 6px;
    }
  }

  .content {
    width: 219px;
    display: block;
    margin-top: 45px;
    margin-left: auto;
    margin-right: auto;
  }
}

.box13 {
  height: 650px;
}

.box14 {
  height: 650px;
  background-image: url("~/assets/images/Lasik/Smile_04/box14-bg.webp");
  background-size: cover;
  background-position: center;
}

.box15 {
  height: 650px;
  background-image: url("~/assets/images/Lasik/Smile_04/box15-bg.webp");
  background-size: cover;
  background-position: center;
}

.box16 {
  height: 650px;
  color: #fff;
  padding-top: 74px;
  text-align: center;
  background-color: #000;

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


.box17 {
  text-align: center;
  height: 700px;
  color: #fff;
  padding-top: 75px;
  background-color: #000;

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

.box18 {
  height: 650px;
  text-align: center;
  color: #fff;
  padding-top: 72px;
  background-color: #000;

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

  :deep(.swiper) {
    height: 546px;

    .swiper-slide {
      img {
        max-width: 345px;
        width: 100%;
      }
    }
  }
}

.box19 {
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
        width: 100%;
      }
    }
  }
}
</style>