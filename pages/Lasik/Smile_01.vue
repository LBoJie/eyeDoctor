<template>
  <div>
    <div class="nav" :class="{ 'open-menu': showMenu }">
      <h3>近視雷射<span>22 萬例手術經驗</span></h3>
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
    <Smile01HeaderSwiper />
    <div class="prollax-img" :style="{ backgroundImage: `url(${prollaxImgUrl})` }" />
    <div class="box01">
      <p>
        &nbsp;大學提供全方位視力矯正方案，從 <span>SMILE</span>、<span>SMILE PRO</span> 全飛秒、<span>FS-LASIK</span>
        飛秒準分子等，可依個人眼睛條件或生活需求，選擇適合自己的視力矯正方式。
      </p>
    </div>
    <div class="box02">
      <h6>NEW</h6>
      <h4><span>SMILE PRO</span> 全飛秒雷射</h4>
      <h5><span>PRO</span>。超越自我。</h5>
      <div class="box-link">
        <NuxtLink>
          了解更多 <img src="~/assets/images/public/icon/arrow-right.png" class="arrow">
        </NuxtLink>
        <NuxtLink>
          預約檢查 <img src="~/assets/images/public/icon/arrow-right.png" class="arrow">
        </NuxtLink>
      </div>
    </div>
    <div class="box-spacing" />
    <div ref="box03" class="box03" />
    <div class="box-spacing" />
    <div class="box05">
      <h4><span>SMILE</span> 全飛秒雷射</h4>
      <h5>全新微笑。全新視界。</h5>
      <div class="box-link">
        <NuxtLink>
          了解更多 <img src="~/assets/images/public/icon/arrow-right.png" class="arrow">
        </NuxtLink>
        <NuxtLink>
          預約檢查 <img src="~/assets/images/public/icon/arrow-right.png" class="arrow">
        </NuxtLink>
      </div>
    </div>
    <div class="box-spacing" />
    <div class="box06">
      <h4>精雕七次元<sup>+</sup>近視雷射</h4>
      <h5><span>30</span> 年來，精準技術大躍進</h5>
      <div class="box-link">
        <NuxtLink>
          了解更多 <img src="~/assets/images/public/icon/arrow-right.png" class="arrow">
        </NuxtLink>
        <NuxtLink>
          預約檢查 <img src="~/assets/images/public/icon/arrow-right.png" class="arrow">
        </NuxtLink>
      </div>
    </div>
    <div class="box-spacing" />
    <div class="box07">
      <div class="content">
        <h6>標準型</h6>
        <h4><span>FS-Lasik</span> 準分子雷射</h4>
        <h5>虹膜定位 <span>+</span> 前導波優化</h5>
        <div class="box-link">
          <NuxtLink>
            了解更多 <img src="~/assets/images/public/icon/arrow-right.png" class="arrow">
          </NuxtLink>
          <NuxtLink>
            預約檢查 <img src="~/assets/images/public/icon/arrow-right.png" class="arrow">
          </NuxtLink>
        </div>
      </div>
      <div class="content">
        <h6>進階型</h6>
        <h4><span>FS-Lasik</span> 準分子雷射</h4>
        <h5>高階角膜製瓣 <span>+</span> 前導波優化</h5>
        <div class="box-link">
          <NuxtLink>
            了解更多 <img src="~/assets/images/public/icon/arrow-right.png" class="arrow">
          </NuxtLink>
          <NuxtLink>
            預約檢查 <img src="~/assets/images/public/icon/arrow-right.png" class="arrow">
          </NuxtLink>
        </div>
      </div>
      <div class="content">
        <h6>高階型</h6>
        <h4><span>FS-Lasik</span> 準分子雷射</h4>
        <h5><span>7</span> 次元全眼追蹤系統 <span>+</span> 前導波優化</h5>
        <div class="box-link">
          <NuxtLink>
            了解更多 <img src="~/assets/images/public/icon/arrow-right.png" class="arrow">
          </NuxtLink>
          <NuxtLink>
            預約檢查 <img src="~/assets/images/public/icon/arrow-right.png" class="arrow">
          </NuxtLink>
        </div>
      </div>
      <div class="content">
        <h6>特級型</h6>
        <h4><span>FS-Lasik</span> 準分子雷射</h4>
        <h5><span>7</span> 次元全眼追蹤系統 <span>+</span> 高階角膜製瓣</h5>
        <div class="box-link">
          <NuxtLink>
            了解更多 <img src="~/assets/images/public/icon/arrow-right.png" class="arrow">
          </NuxtLink>
          <NuxtLink>
            預約檢查 <img src="~/assets/images/public/icon/arrow-right.png" class="arrow">
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="box-spacing" />
    <div class="box08">
      <h4>
        醫師自己<br>
        也做近視雷射!
      </h4>
      <ImgSwiper :swiper-config="swiper1Config" />
    </div>
    <div class="box-spacing" />
    <div class="box09">
      <h4>
        專業醫療人員<br>
        也選擇近視雷射!
      </h4>
      <ImgSwiper :swiper-config="swiper2Config" />
    </div>
    <div class="box-spacing" />
    <div class="box10">
      <h4>
        樂天職棒球星
        <br>
        <span class="title">也做了近視雷射<span class="exclamation">!</span></span>
      </h4>
      <ImgSwiper :swiper-config="swiper3Config" />
    </div>
    <div class="box-spacing" />
    <div class="box11">
      <h4>
        攻城獅<span>、</span>鋼鐵人<span>、</span>職籃球星<br>
        也做了近視雷射!
      </h4>
      <ImgSwiper :swiper-config="swiper4Config" />
    </div>
    <div class="box-spacing" />
    <div class="box12">
      <h4>
        樂天<span>、</span>統一獅啦啦隊<br>
        也做了近視雷射!
      </h4>
      <ImgSwiper :swiper-config="swiper5Config" />
    </div>
    <div class="box-spacing" />
    <div ref="box13" class="box13" />
    <div class="box-spacing" />
    <div class="box14">
      <h4>
        運動愛好者<br>
        <span>也都做了近視雷射!</span>
      </h4>
      <ImgSwiper :swiper-config="swiper6Config" />
    </div>
    <div class="box-spacing" />
    <div class="box15">
      <h4>
        <span class="center">近視雷射<span class="number">10</span>多年了<span class="comma">，</span></span><br>
        視力還是<span class="number">1.0!</span>
      </h4>
      <ImgSwiper :swiper-config="swiper7Config" />
    </div>
    <div class="box-spacing" />
    <div class="box16">
      <h4>
        美軍近視雷射先鋒<br>
        Dr. Steve Schallhorn<br>
        蕭峰博士來台鄭重聲明<span>!</span>
      </h4>
      <p class="content">
        前美國海軍近視雷射手術中心負責人 Dr. Steve
        Schallhorn
        蕭峰博士，根據飛行員夜間飛行視力品質要求和緊急逃生彈跳時角膜瓣穩定性的需求，引進飛秒製瓣技術和前導波功能，在提高戰鬥機飛行員夜視能力和角膜穩定性方面，有了顯著的成效。而後美國軍方及太空總署NASA根據其研究結果，核准近視雷射矯正應用於所有軍隊與太空人。蕭峰博士以美國軍方二十多年的專業研究和臨床數據。強調雷射矯正的高品質矯正效果與安全性。
        <span>* 美軍百萬實例統計單位為眼數</span>
      </p>
      <img src="~/assets/images/Lasik/Smile_01/box16-1.webp" alt="">
      <p class="img-describe">
        國際眼科權威 Dr. Steve Schallhorn 蕭峰博士 ( 右 ) 參訪大學眼科，並與林丕容總院長 ( 左 ) 接受媒體訪問。
      </p>
    </div>
    <div class="box-spacing" />
    <div class="box17">
      <h4>為何選擇大學眼科?</h4>
      <NumberBeat />
    </div>
    <div class="box-spacing" />
    <div class="box18">
      <h4>國內外得獎認證肯定</h4>
      <h5>醫療品質，唯一堅持。</h5>
      <ImgSwiper :swiper-config="swiper8Config" />
    </div>
    <div class="box-spacing" />
    <div ref="box19" class="box19" />
    <div class="box-spacing" />
    <div class="box20">
      <h4>全球同步<span class="comma">，</span>全新設備<span class="period">。</span></h4>
      <ImgSwiper :swiper-config="swiper9Config" />
    </div>
    <div class="box-spacing" />
    <div class="box21">
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
const swiperAssets = import.meta.glob("~/assets/images/swiper/Smile_01/**/*", { eager: true, import: 'default' });
// 滾動視差 設定
const parallaxAssets = import.meta.glob("~/assets/images/Lasik/Smile_01/**/*", { eager: true, import: 'default' });
const prollaxImgUrl = ref("");
const box03 = ref(null);
const box13 = ref(null);
const box19 = ref(null);
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
    swiperAssets["/assets/images/swiper/Smile_01/swiper1/1.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper1/2.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper1/3.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper1/4.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper1/5.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper1/6.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper1/7.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper1/8.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper1/9.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper1/10.webp"],
  ]
}
const swiper2Config = {
  modules: [SwiperNavigation, SwiperAutoplay],
  navigation: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slides: [
    swiperAssets["/assets/images/swiper/Smile_01/swiper2/1.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper2/2.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper2/3.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper2/4.webp"]
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
    swiperAssets["/assets/images/swiper/Smile_01/swiper3/1.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper3/2.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper3/3.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper3/4.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper3/5.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper3/6.webp"],
  ]
};

const swiper4Config = {
  modules: [SwiperNavigation, SwiperAutoplay],
  navigation: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slides: [
    swiperAssets["/assets/images/swiper/Smile_01/swiper4/1.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper4/2.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper4/3.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper4/4.webp"],
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
    swiperAssets["/assets/images/swiper/Smile_01/swiper5/1.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper5/2.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper5/3.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper5/4.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper5/5.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper5/6.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper5/7.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper5/8.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper5/9.webp"],
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
    swiperAssets["/assets/images/swiper/Smile_01/swiper6/1.png"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper6/2.png"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper6/3.png"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper6/4.png"],
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
    swiperAssets["/assets/images/swiper/Smile_01/swiper7/1.png"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper7/2.png"],
  ]
};

const swiper8Config = {
  modules: [SwiperNavigation, SwiperAutoplay],
  navigation: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slides: [
    swiperAssets["/assets/images/swiper/Smile_01/swiper8/1.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper8/2.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper8/3.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper8/4.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper8/5.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper8/6.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper8/7.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper8/8.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper8/9.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper8/10.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper8/11.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper8/12.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper8/13.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper8/14.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper8/15.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper8/16.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper8/17.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper8/18.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper8/19.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper8/20.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper8/21.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper8/22.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper8/23.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper8/24.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper8/25.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper8/26.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper8/27.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper8/28.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper8/29.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper8/30.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper8/31.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper8/32.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper8/33.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper8/34.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper8/35.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper8/36.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper8/37.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper8/38.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper8/39.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper8/40.webp"],
  ]
};
const swiper9Config = {
  modules: [SwiperNavigation, SwiperAutoplay],
  navigation: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slides: [
    swiperAssets["/assets/images/swiper/Smile_01/swiper9/1.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper9/2.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper9/3.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper9/4.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper9/6.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper9/7.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper9/8.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper9/9.webp"],
    swiperAssets["/assets/images/swiper/Smile_01/swiper9/10.webp"],
  ]
};

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    // 離開可視範圍時取消滾動視差圖片
    prollaxImgUrl.value = "";
    let targetDom = null;
    entries.forEach((item) => {
      if (item.isIntersecting) {
        targetDom = item;
      }
    })
    if (targetDom) {
      if (targetDom.target === box03.value) {
        prollaxImgUrl.value = parallaxAssets["/assets/images/Lasik/Smile_01/box03-bg.webp"];
      }
      if (targetDom.target === box13.value) {
        prollaxImgUrl.value = parallaxAssets["/assets/images/Lasik/Smile_01/box13-bg.webp"];
      }
      if (targetDom.target === box19.value) {
        prollaxImgUrl.value = parallaxAssets["/assets/images/Lasik/Smile_01/box19-bg.webp"];
      }
    }
  }, { threshold: 0 });
  observer.observe(box03.value);
  observer.observe(box13.value);
  observer.observe(box19.value);
});
</script>
<style lang="scss" scoped>
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
    font-weight: 500;
    line-height: 19px;

    span {
      font-size: 12px;
      font-weight: 400;
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

.nav.open-menu {
  border-color: #000;
}

.box-link {
  color: #298bff;
  font-size: 15px;
  display: flex;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
  }

  a:first-child {
    margin-right: 33px;
  }

  .arrow {
    margin-left: 4px;
    width: 6px;
  }
}

.box-spacing {
  height: 12px;
  background-color: #fff;
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

.box01 {
  height: 73px;
  padding: 9px 30px 0px 30px;
  background-color: #f5f5f7;

  p {
    font-size: 12px;
    line-height: 16px;
    text-align: center;

    span {
      font-family: "PublicSans";
      font-weight: 300;
    }
  }
}

// .content>div {
//   margin-bottom: 12px;
//   text-align: center;
// }

.box02 {
  text-align: center;
  height: 650px;
  background-color: #000;
  background-image: url("~/assets/images/Lasik/Smile_01/box02-bg.webp");
  background-size: 414px;
  background-position: bottom;
  padding-top: 40px;
  color: #fff;

  h6 {
    font-family: "PublicSans";
    font-size: 17px;
    font-weight: 400;
    margin-bottom: 14px;
  }

  h4 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 12px;

    span {
      font-family: "PublicSans";
      margin-left: -2px;
    }
  }

  h5 {
    font-size: 18px;
    margin-left: 26px;
    margin-bottom: 21px;

    span {
      font-family: "PublicSans";

    }
  }
}

.box03 {
  height: 650px;
}



.box05 {
  text-align: center;
  height: 650px;
  background-image: url("~/assets/images/Lasik/Smile_01/box05-bg.webp");
  background-size: cover;
  padding-top: 57px;

  h4 {
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 12px;

    span {
      font-family: "PublicSans";
    }
  }

  h5 {
    font-size: 19px;
    margin-left: 19px;
    margin-bottom: 20px;
  }
}

.box06 {
  text-align: center;
  height: 650px;
  color: #fff;
  padding-top: 59px;
  background-image: url("~/assets/images/Lasik/Smile_01/box06-bg.webp");
  background-size: cover;

  h4 {
    font-size: 32px;
    font-weight: 700;
    margin-left: -1px;
    margin-bottom: 10px;

    sup {
      font-size: 20px;
      font-weight: 700;
      position: relative;
      top: -8px;
    }
  }

  h5 {
    font-size: 18px;
    margin-bottom: 20px;

    span {
      font-family: "PublicSans";
    }
  }

  .box-link {
    margin-left: 6px;
  }
}

.box07 {
  text-align: center;
  color: #fff;
  padding-top: 82px;
  padding-left: 40px;
  padding-right: 40px;
  background-color: #000;

  .content {
    border-bottom: 1px solid #3e3a39;
    padding-bottom: 45px;
    margin-bottom: 44px;

    h6 {
      font-size: 17px;
      margin-bottom: 13px;
    }

    h4 {
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 12px;

      span {
        font-family: "PublicSans";
      }
    }

    h5 {
      font-size: 18px;
      margin-bottom: 20px;

      span {
        font-family: "PublicSans";
      }
    }
  }

  .content:last-child {
    border-color: #000;
    margin-bottom: 0;
    padding-bottom: 90px;
  }
}

.box08 {
  text-align: center;
  height: 650px;
  color: #fff;
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
        max-width: 345px;
        width: 100%;
      }
    }
  }
}

.box09 {
  text-align: center;
  padding-top: 53px;
  height: 650px;
  color: #fff;
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

.box10 {
  text-align: center;
  padding-top: 53px;
  height: 650px;
  color: #fff;
  background-color: #000;

  h4 {
    font-size: 32px;
    font-weight: 700;
    line-height: 42px;

    .title {
      margin-left: -3px;

      .exclamation {
        margin-left: 3px;
      }
    }
  }

  :deep(.swiper) {
    height: 513px;

    .swiper-slide {
      img {
        max-width: 345px;
        width: 100%;
      }
    }
  }
}

.box11 {
  text-align: center;
  padding-top: 53px;
  height: 650px;
  color: #fff;
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

.box12 {
  text-align: center;
  padding-top: 53px;
  height: 650px;
  color: #fff;
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

.box13 {
  height: 700px;
}

.box14 {
  text-align: center;
  padding-top: 53px;
  background-color: #000;
  height: 650px;
  color: #fff;

  h4 {
    font-size: 32px;
    line-height: 42px;
    font-weight: 700;

    span {
      margin-left: -4px;
    }
  }

  :deep(.swiper) {
    height: 513px;

    .swiper-slide {
      img {
        max-width: 350px;
        width: 100%;
      }
    }
  }
}

.box15 {
  text-align: center;
  height: 650px;
  color: #fff;
  padding-top: 53px;
  background-color: #000;

  h4 {
    font-size: 32px;
    line-height: 42px;
    font-weight: 700;

    .center {
      margin-left: 8px;
    }

    .number {
      font-family: "PublicSans";
    }

    .comma {
      margin-left: -8px;
    }
  }

  :deep(.swiper) {
    height: 513px;

    .swiper-slide {
      img {
        max-width: 350px;
        width: 100%;
      }
    }
  }
}

.box16 {
  text-align: center;
  height: 1245px;
  color: #fff;
  padding-top: 55px;
  background-image: url("~/assets/images/Lasik/Smile_01/box16-bg.webp");
  background-size: 414px;
  background-position: 0 175px;
  background-repeat: no-repeat;
  background-color: #000;

  h4 {
    font-size: 32px;
    line-height: 42px;
    font-weight: 700;
    margin-bottom: 380px;

    span {
      margin-left: 4px;
    }
  }

  .content {
    font-size: 15px;
    line-height: 21px;
    text-align: start;
    padding-left: 43px;
    padding-right: 43px;
    margin-bottom: 35px;

    span {
      font-size: 12px;
      color: #808080;
      display: block;
      margin-top: 15px;
    }
  }

  img {
    max-width: 350px;
    width: 90%;
  }

  .img-describe {
    font-size: 15px;
    line-height: 21px;
    margin-top: 28px;
    padding-left: 42px;
    padding-right: 42px;
    text-align: start;
  }
}

.box17 {
  text-align: center;
  height: 750px;
  color: #fff;
  padding-top: 72px;
  background-color: #000;

  h4 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 28px;
  }
}

.box18 {
  text-align: center;
  height: 650px;
  padding-top: 75px;
  color: #fff;
  background-color: #000;

  h4 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 13px;
  }

  h5 {
    margin-left: 18px;
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

.box19 {
  height: 650px;
}

.box20 {
  text-align: center;
  height: 650px;
  color: #fff;
  padding-top: 74px;
  background-color: #000;

  h4 {
    font-size: 32px;
    font-weight: 700;
    margin-left: 7px;

    .comma {
      margin-left: -8px;
      margin-right: -8px;
    }

    .period {
      font-size: 28px;
      margin-left: -7px;
    }
  }

  :deep(.swiper) {
    height: 544px;

    .swiper-slide {
      img {
        max-width: 350px;
        width: 100%;
      }
    }
  }
}

.box21 {
  text-align: center;
  padding-top: 59px;
  height: 650px;
  background-color: #000;
  color: #fff;


  h4 {
    font-size: 32px;
    font-weight: 700;
    margin-left: 10px;

    .comma {
      margin-left: -8px;
      margin-right: -8px;
    }

    .period {
      margin-left: -7px;
    }
  }
}
</style>