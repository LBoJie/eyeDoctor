<template>
  <div class="index-content">
    <div class="box01" />

    <div class="box02">
      <h6>NEW</h6>
      <h4>全飛秒近視雷射</h4>
      <h5><span>SMILE PRO</span>。超越自我。</h5>
      <div class="box-link">
        <NuxtLink>
          了解更多 <img src="~/assets/images/public/icon/arrow-right.png" class="arrow">
        </NuxtLink>
        <NuxtLink>
          預約檢查 <img src="~/assets/images/public/icon/arrow-right.png" class="arrow">
        </NuxtLink>
      </div>
    </div>

    <div class="box03">
      <h4>
        <span>精雕七次元</span>近視雷射
      </h4>
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

    <div class="box04">
      <h6>NEW</h6>
      <h4>德國<span>Presbyond</span>老花雷射</h4>
      <h5><span>LBV</span> 新技術，自由釋放眼齡。</h5>
      <div class="box-link">
        <NuxtLink>
          了解更多 <img src="~/assets/images/public/icon/arrow-right.png" class="arrow">
        </NuxtLink>
        <NuxtLink>
          預約檢查 <img src="~/assets/images/public/icon/arrow-right.png" class="arrow">
        </NuxtLink>
      </div>
    </div>

    <div class="box05">
      <div class="box05-1">
        <h6>Laser Eye Surgery</h6>
        <h4>近視雷射</h4>
        <h5><span>30</span> 年來，精準技術大躍進。</h5>
        <div class="box-link">
          <NuxtLink>
            了解更多 <img src="~/assets/images/public/icon/arrow-right.png" class="arrow">
          </NuxtLink>
          <NuxtLink>
            預約檢查 <img src="~/assets/images/public/icon/arrow-right.png" class="arrow">
          </NuxtLink>
        </div>
      </div>
      <div class="box05-2">
        <Marquee :marquee-value="marquee1" />
      </div>
    </div>
    <div class="box06">
      <div class="box06-1">
        <h6>Presbyopia</h6>
        <h4>老花近視雷射</h4>
        <h5>一個下午<span class="comma">，</span>回到年輕視力<span class="period">。</span></h5>
        <div class="box-link">
          <NuxtLink>
            了解更多 <img src="~/assets/images/public/icon/arrow-right.png" class="arrow">
          </NuxtLink>
          <NuxtLink>
            預約檢查 <img src="~/assets/images/public/icon/arrow-right.png" class="arrow">
          </NuxtLink>
        </div>
      </div>
      <div class="box06-2">
        <Marquee :marquee-value="marquee2" :button-color="'#666668'" />
      </div>
    </div>
    <div class="box07">
      <div class="box07-1">
        <h6>Cataract Surgery</h6>
        <h4>老花白內障手術</h4>
        <h5>免住院<span class="comma">，</span>當天可回家<span class="period">。</span></h5>
        <div class="box-link">
          <NuxtLink>
            了解更多 <img src="~/assets/images/public/icon/arrow-right.png" class="arrow">
          </NuxtLink>
          <NuxtLink>
            預約檢查 <img src="~/assets/images/public/icon/arrow-right.png" class="arrow">
          </NuxtLink>
        </div>
      </div>
      <div class="box07-2">
        <Marquee :marquee-value="marquee3" />
      </div>
    </div>
    <div class="box08">
      <div class="box08-1">
        <h6>Orthokeratology</h6>
        <h4>角膜塑型術</h4>
        <h5>晚上戴<span>、</span>白天摘<span>，</span>有效控制度數增加<span>。</span></h5>
        <div class="box-link">
          <NuxtLink>
            了解更多 <img src="~/assets/images/public/icon/arrow-right.png" class="arrow">
          </NuxtLink>
          <NuxtLink>
            預約檢查 <img src="~/assets/images/public/icon/arrow-right.png" class="arrow">
          </NuxtLink>
        </div>
      </div>
      <div class="box08-2">
        <Marquee :marquee-value="marquee4" />
      </div>
    </div>
    <div class="box09">
      <h6>Dry Eye Syndrome</h6>
      <h4>乾眼症</h4>
      <h5>不再乾澀<span class="comma">，</span>炯炯有神<span class="period">。</span></h5>
      <div class="box-link">
        <NuxtLink>
          了解更多 <img src="~/assets/images/public/icon/arrow-right.png" class="arrow">
        </NuxtLink>
        <NuxtLink>
          預約檢查 <img src="~/assets/images/public/icon/arrow-right.png" class="arrow">
        </NuxtLink>
      </div>
    </div>
    <div class="box10">
      <h6>SMILE、FS-LASIK</h6>
      <h4>大明星回娘家</h4>
      <h5>我們都從大學眼科畢業囉<span>。</span></h5>
      <div class="box-link">
        <NuxtLink>
          了解更多 <img src="~/assets/images/public/icon/arrow-right.png" class="arrow">
        </NuxtLink>
        <NuxtLink>
          預約檢查 <img src="~/assets/images/public/icon/arrow-right.png" class="arrow">
        </NuxtLink>
      </div>
    </div>
    <div class="box11">
      <h4>榮耀肯定<span>，</span>追求至善</h4>
      <div ref="numberArea" class="number-area">
        <div class="experience">
          <p class="number">
            {{ box11Number.experience }}<sup>+</sup>
          </p>
          <p class="title">
            眼科經驗/年
          </p>
        </div>
        <div class="eye">
          <p class="number">
            {{ box11Number.eye }}<sup>+</sup>
          </p>
          <p class="title">
            近視老花雷射/眼
          </p>
        </div>
        <div class="visitors">
          <p class="number">
            {{ box11Number.visitors }}<sup>+</sup>
          </p>
          <p class="title">
            門診人次/年
          </p>
        </div>
        <div class="team">
          <p class="number">
            {{ box11Number.team }}<sup>+</sup>
          </p>
          <p class="title">
            醫療團隊/位
          </p>
        </div>
        <div class="clinic">
          <p class="number">
            {{ box11Number.clinic }}
          </p>
          <p class="title">
            二岸眼科中心/家
          </p>
        </div>
      </div>
    </div>
    <div class="box12">
      <h4>國內外得獎認證肯定</h4>
      <h5>醫療品質，唯一堅持。</h5>
      <ImgSwiper :swiper-config="swiper1Config" />
      <video v-if="needVideoPlay" ref="video" muted="muted" playsinline @ended="needVideoPlay = false;">
        <source src="~/assets/video/awards.mp4" type="video/mp4">
      </video>
    </div>
    <div class="box13">
      <h4>全球同步<span class="comma">，</span> 全新設備<span class="period">。</span></h4>
      <h5>
        <span>ZEISS</span>、<span>ALCON</span>、<span>AMO</span> 等全球知名大廠設備，<br>
        提供即時新技術和診療方案。
      </h5>
      <div>
        <NuxtLink>
          近視老花雷射 <img src="~/assets/images/public/icon/arrow-right.png" class="arrow">
        </NuxtLink>
        <NuxtLink>
          老花白內障 <img src="~/assets/images/public/icon/arrow-right.png" class="arrow">
        </NuxtLink>
        <NuxtLink class="last">
          乾眼症 <img src="~/assets/images/public/icon/arrow-right.png" class="arrow">
        </NuxtLink>
      </div>
      <ImgSwiper :swiper-config="swiper2Config" />
    </div>
    <div class="box14" ref="box14">
      <h6>公益回饋</h6>
      <h4>醫者仁心<span class="comma">，</span>不忘初衷<span class="period">。</span></h4>
      <h5>
        累計<span>{{ box14Number }}</span>場次
      </h5>
      <CharitableSwiper />
    </div>

    <div class="box15">
      <h4>醫師團隊<span class="comma">，</span>視病猶親<span class="period">。</span></h4>
      <DoctorSwiper />
    </div>
    <div class="box16">
      <h4>篳路藍縷<span class="comma">，</span>以啓山林<span class="period">。</span></h4>
      <h5>
        大學眼科 <span>Since 1992</span>
      </h5>
      <HistorySwiper />
    </div>
    <div class="box17">
      <h4>二岸大學眼科</h4>
      <NuxtLink>
        門診資訊 <img src="~/assets/images/public/icon/arrow-right.png" class="arrow">
      </NuxtLink>
      <Map />
    </div>
  </div>
</template>
<script setup>
// 跑馬燈圖片初始化
const marqueeAssets = import.meta.glob("~/assets/images/index/marquee/**/*", { eager: true, import: 'default' });
const marquee1 = ([
  {
    marqueeItems: [
      {
        img: marqueeAssets["/assets/images/index/marquee/marquee1/1-1.webp"],
        href: "https://www.youtube.com/watch?v=uOywyeBsJWs&list=PL6neYoZnqpjZiyrQHwu1BShekHAWDh20J"
      },
      {
        img: marqueeAssets["/assets/images/index/marquee/marquee1/1-2.webp"],
        href: "https://www.youtube.com/watch?v=_fcP79t10gY&list=PL6neYoZnqpjZiyrQHwu1BShekHAWDh20J"
      }, {
        img: marqueeAssets["/assets/images/index/marquee/marquee1/1-3.webp"],
        href: "https://www.youtube.com/watch?v=DWDb9d8C-1c&list=PL6neYoZnqpjZiyrQHwu1BShekHAWDh20J"
      }, {
        img: marqueeAssets["/assets/images/index/marquee/marquee1/1-4.webp"],
        href: "https://www.youtube.com/watch?v=k2ywy0MQiKk&list=PL6neYoZnqpjZiyrQHwu1BShekHAWDh20J"
      }],
    speed: 0.2,
    hoverSpeed: 0.1,
    start: 0,
  },
  {
    marqueeItems: [
      {
        img: marqueeAssets["/assets/images/index/marquee/marquee1/2-1.webp"],
        href: "https://www.youtube.com/watch?v=Q0fpvXqPsQ0&list=PL6neYoZnqpjZiyrQHwu1BShekHAWDh20J"
      },
      {
        img: marqueeAssets["/assets/images/index/marquee/marquee1/2-2.webp"],
        href: "https://www.youtube.com/watch?v=OOoBqmi2KcY&list=PL6neYoZnqpjZiyrQHwu1BShekHAWDh20J"
      },
      {
        img: marqueeAssets["/assets/images/index/marquee/marquee1/2-3.webp"],
        href: "https://www.youtube.com/watch?v=9zMi4kuqA8I&list=PL6neYoZnqpjZiyrQHwu1BShekHAWDh20J"
      },
    ],
    speed: 0.1,
    hoverSpeed: 0.1,
    start: 50,
  }
]);

const marquee2 = ([
  {
    marqueeItems: [
      {
        img: marqueeAssets["/assets/images/index/marquee/marquee2/1.webp"],
        href: "https://www.youtube.com/watch?v=uFUMPwCIdKo&list=PL6neYoZnqpjZiyrQHwu1BShekHAWDh20J"
      },
      {
        img: marqueeAssets["/assets/images/index/marquee/marquee2/2.webp"],
        href: "/369"
      },
      {
        img: marqueeAssets["/assets/images/index/marquee/marquee2/3.webp"],
        href: "https://www.youtube.com/watch?v=PHjtpQcsdAs&list=PL6neYoZnqpjZiyrQHwu1BShekHAWDh20J"
      }],
    speed: 0.2,
    hoverSpeed: 0.1,
    start: 0,
  }
]);
const marquee3 = ([
  {
    marqueeItems: [
      {
        img: marqueeAssets["/assets/images/index/marquee/marquee3/1.webp"],
        href: "https://www.youtube.com/watch?v=b2ALCwRWlf8&list=PL6neYoZnqpjZzk-GPsy55dpcEqEloWqZM"
      },
      {
        img: marqueeAssets["/assets/images/index/marquee/marquee3/2.webp"],
        href: "https://www.youtube.com/watch?v=6HlgOBaquOc"
      },
    ],
    speed: 0.2,
    hoverSpeed: 0.1,
    start: 0,
  }
]);
const marquee4 = ([
  {
    marqueeItems: [
      {
        img: marqueeAssets["/assets/images/index/marquee/marquee4/1.webp"],
        href: "https://youtu.be/olWoPRl2rWI?si=vSloiyQPm9o5zj2A"
      },
      {
        img: marqueeAssets["/assets/images/index/marquee/marquee4/2.webp"],
        href: "https://youtu.be/51M2esaNioA?si=gLoy4zxXxDYsZwAc"
      },
      {
        img: marqueeAssets["/assets/images/index/marquee/marquee4/3.webp"],
        href: "https://www.youtube.com/watch?v=Nz0BP7nEfqY"
      },
    ],
    speed: 0.2,
    hoverSpeed: 0.1,
    start: 0,
  }
]);
//box11 數字跳動 
const numberAnimation = (key, target, plusInterval) => {
  let tickCount = 0;
  const tick = setInterval(() => {
    if (tickCount < 15) {
      tickCount += 1;
      box11Number.value[key] += plusInterval;
    }
    else {
      box11Number.value[key] = target;
      clearInterval(tick)
    }
  }, 50);
};
const box11Number = ref({
  experience: 0,
  eye: 0,
  visitors: 0,
  team: 0,
  clinic: 0,
});
//box14
const box14 = ref(null);
const box14Number = ref(0);
const titleAnimation = (target, plusInterval) => {
  let tickCount = 0;
  const tick = setInterval(() => {
    if (tickCount < 15) {
      tickCount += 1;
      box14Number.value += plusInterval;
    }
    else {
      box14Number.value = target;
      clearInterval(tick)
    }
  }, 50);
};
//swiper
const swiperAssets = import.meta.glob("~/assets/images/swiper/index/**/*", { eager: true, import: 'default' });

const swiper1Config = {
  modules: [SwiperNavigation, SwiperAutoplay],
  navigation: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slides: [
    swiperAssets["/assets/images/swiper/index/swiper1/1.webp"],
    swiperAssets["/assets/images/swiper/index/swiper1/2.webp"],
    swiperAssets["/assets/images/swiper/index/swiper1/3.webp"],
    swiperAssets["/assets/images/swiper/index/swiper1/4.webp"],
    swiperAssets["/assets/images/swiper/index/swiper1/5.webp"],
    swiperAssets["/assets/images/swiper/index/swiper1/6.webp"],
    swiperAssets["/assets/images/swiper/index/swiper1/7.webp"],
    swiperAssets["/assets/images/swiper/index/swiper1/8.webp"],
    swiperAssets["/assets/images/swiper/index/swiper1/9.webp"],
    swiperAssets["/assets/images/swiper/index/swiper1/10.webp"],
    swiperAssets["/assets/images/swiper/index/swiper1/11.webp"],
    swiperAssets["/assets/images/swiper/index/swiper1/12.webp"],
    swiperAssets["/assets/images/swiper/index/swiper1/13.webp"],
    swiperAssets["/assets/images/swiper/index/swiper1/14.webp"],
    swiperAssets["/assets/images/swiper/index/swiper1/15.webp"],
    swiperAssets["/assets/images/swiper/index/swiper1/16.webp"],
    swiperAssets["/assets/images/swiper/index/swiper1/17.webp"],
    swiperAssets["/assets/images/swiper/index/swiper1/18.webp"],
    swiperAssets["/assets/images/swiper/index/swiper1/19.webp"],
    swiperAssets["/assets/images/swiper/index/swiper1/20.webp"],
    swiperAssets["/assets/images/swiper/index/swiper1/21.webp"],
    swiperAssets["/assets/images/swiper/index/swiper1/22.webp"],
    swiperAssets["/assets/images/swiper/index/swiper1/23.webp"],
    swiperAssets["/assets/images/swiper/index/swiper1/24.webp"],
    swiperAssets["/assets/images/swiper/index/swiper1/25.webp"],
    swiperAssets["/assets/images/swiper/index/swiper1/26.webp"],
    swiperAssets["/assets/images/swiper/index/swiper1/27.webp"],
    swiperAssets["/assets/images/swiper/index/swiper1/28.webp"],
    swiperAssets["/assets/images/swiper/index/swiper1/29.webp"],
    swiperAssets["/assets/images/swiper/index/swiper1/30.webp"],
    swiperAssets["/assets/images/swiper/index/swiper1/31.webp"],
    swiperAssets["/assets/images/swiper/index/swiper1/32.webp"],
    swiperAssets["/assets/images/swiper/index/swiper1/33.webp"],
    swiperAssets["/assets/images/swiper/index/swiper1/34.webp"],
    swiperAssets["/assets/images/swiper/index/swiper1/35.webp"],
    swiperAssets["/assets/images/swiper/index/swiper1/36.webp"],
    swiperAssets["/assets/images/swiper/index/swiper1/37.webp"],
    swiperAssets["/assets/images/swiper/index/swiper1/38.webp"],
    swiperAssets["/assets/images/swiper/index/swiper1/39.webp"],
    swiperAssets["/assets/images/swiper/index/swiper1/40.webp"],
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
    swiperAssets["/assets/images/swiper/index/swiper2/1.webp"],
    swiperAssets["/assets/images/swiper/index/swiper2/2.webp"],
    swiperAssets["/assets/images/swiper/index/swiper2/3.webp"],
    swiperAssets["/assets/images/swiper/index/swiper2/4.webp"],
    swiperAssets["/assets/images/swiper/index/swiper2/5.webp"],
    swiperAssets["/assets/images/swiper/index/swiper2/6.webp"],
    swiperAssets["/assets/images/swiper/index/swiper2/7.webp"],
    swiperAssets["/assets/images/swiper/index/swiper2/8.webp"],
    swiperAssets["/assets/images/swiper/index/swiper2/9.webp"],
    swiperAssets["/assets/images/swiper/index/swiper2/10.webp"],
    swiperAssets["/assets/images/swiper/index/swiper2/11.webp"],
    swiperAssets["/assets/images/swiper/index/swiper2/12.webp"],
    swiperAssets["/assets/images/swiper/index/swiper2/13.webp"],
    swiperAssets["/assets/images/swiper/index/swiper2/14.webp"],
    swiperAssets["/assets/images/swiper/index/swiper2/15.webp"],
  ]
}
const numberArea = ref(null);
//box12 影片
const video = ref(null);
const needVideoPlay = ref(true);

onMounted(() => {
  //box11 執行數字跳動 
  const numberObserver = new IntersectionObserver((entries, observer) => {
    if (entries[0].isIntersecting) {
      numberAnimation("experience", 30, 2);
      numberAnimation("eye", 220000, 14666);
      numberAnimation("visitors", 800000, 53333)
      numberAnimation("team", 400, 26)
      numberAnimation("clinic", 38, 2)
      numberObserver.unobserve(numberArea.value);
    }
  }, { threshold: 1 });
  numberObserver.observe(numberArea.value)
  // box12 video
  const videoObserver = new IntersectionObserver((entries, observer) => {
    if (entries[0].isIntersecting) {
      video.value.play();
      videoObserver.unobserve(video.value);
    }
  }, { threshold: 0.7 });
  videoObserver.observe(video.value);

  const box14Observer = new IntersectionObserver((entries, observer) => {
    if (entries[0].isIntersecting) {
      titleAnimation(100, 6)
      box14Observer.unobserve(box14.value);
    }
  }, { threshold: 1 });
  box14Observer.observe(box14.value);

});
</script>
<style scoped lang="scss">
.index-content>div {
  margin-bottom: 12px;
  text-align: center;
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

.box01 {
  height: 650px;
  background-image: url("~/assets/images/index/box01-bg.webp");
  background-size: cover;
  background-position: center;
}

.box02 {
  padding-top: 42px;
  color: #fff;
  background-color: #000;
  height: 650px;
  background-image: url("~/assets/images/index/box02-bg.webp");
  background-size: 411px;
  background-repeat: no-repeat;
  background-position: bottom;

  h6 {
    font-size: 17px;
    margin-bottom: 10px;
    font-family: "PublicSans";
    font-weight: 400;
  }

  h4 {
    font-size: 32px;
    margin-bottom: 14px;
    font-weight: 700;
  }

  h5 {
    font-size: 18px;
    margin-left: 18px;

    span {
      font-size: 19px;
      font-family: "PublicSans";
      font-weight: 400;
    }
  }

  .box-link {
    margin-top: 20px;
  }
}

.box03 {
  background-color: #f0f0f0;
  padding-top: 38px;
  height: 650px;
  background-image: url("~/assets/images/index/box03-bg.webp");
  background-size: 380.5px;
  background-repeat: no-repeat;
  background-position: bottom;

  h4 {
    font-size: 32px;
    font-weight: 700;
    position: relative;
    margin-bottom: 12px;

    span {
      margin-right: 16px;
      position: relative;
    }

    span::after {
      content: "+";
      position: absolute;
      font-size: 21px;
      right: -11px;
      top: -6px;
      font-weight: 700;
    }
  }

  h5 {
    font-size: 18px;

    span {
      font-family: "PublicSans";
      font-weight: 400;
    }
  }

  .box-link {
    margin-top: 18px;
    margin-left: 6px;
  }
}

.box04 {
  padding-top: 42px;
  color: #fff;
  background-color: #000;
  height: 650px;
  background-image: url("~/assets/images/index/box04-bg.webp");
  background-size: 412.5px;
  background-repeat: no-repeat;
  background-position: bottom;

  h6 {
    font-size: 17px;
    font-family: "PublicSans";
    font-weight: 400;
    margin-bottom: 12px;
  }

  h4 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 11px;

    span {
      font-family: "PublicSans";
      font-weight: 700;
    }
  }

  h5 {
    font-size: 19px;
    margin-left: 20px;

    span {
      font-family: "PublicSans";
      font-weight: 400;
    }
  }

  .box-link {
    margin-top: 19px;
  }
}

.box05 {
  .box05-1 {
    padding-top: 41px;
    height: 650px;
    color: #fff;
    background-image: url("~/assets/images/index/box05-1-bg.webp");
    background-size: 100%;

    h6 {
      font-size: 17px;
      font-family: "PublicSans";
      font-weight: 400;
      margin-left: -17px;
      margin-bottom: 8px;
    }

    h4 {
      font-size: 34px;
      font-weight: 700;
      margin-left: -19px;
      margin-bottom: 14px;
    }

    h5 {
      font-size: 18px;
      margin-left: 2px;
      margin-bottom: 21px;

      span {
        font-family: "PublicSans";
        font-weight: 400;
      }
    }

    .box-link {
      margin-left: -18px;
    }
  }

  .box05-2 {
    margin-top: -1px;
    padding-top: 14px;
    height: 400px;
    background-color: #000;
  }
}

.box06 {
  background-color: #f0f0f0;

  .box06-1 {
    padding-top: 42px;
    height: 650px;
    background-image: url("~/assets/images/index/box06-1-bg.webp");
    background-size: 377px;
    background-position: center bottom;
    background-repeat: no-repeat;

    h6 {
      font-size: 17px;
      font-family: "PublicSans";
      font-weight: 400;
      margin-bottom: 10px;
    }

    h4 {
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 13px;
    }

    h5 {
      font-size: 18px;
      margin-left: 16px;

      .comma {
        margin-left: -4px;
        margin-right: -4px;
      }

      .period {
        margin-left: -2px;
      }
    }

    .box-link {
      margin-top: 21px;
      margin-left: -1px;
    }

  }

  .box06-2 {
    padding-top: 14px;
    height: 260px;
  }
}

.box07 {
  background-color: #000;

  .box07-1 {
    padding-top: 47px;
    height: 650px;
    color: #fff;
    background-image: url("~/assets/images/index/box07-1-bg.webp");
    background-size: 309px;
    background-position: center bottom;
    background-repeat: no-repeat;

    h6 {
      font-family: "PublicSans";
      font-weight: 400;
      font-size: 17px;
      margin-bottom: 8px;
    }

    h4 {
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 11px;
    }

    h5 {
      font-size: 18px;
      margin-left: 17px;

      .comma {
        margin-left: -3px;
        margin-right: -4px;
      }

      .period {
        margin-left: -4px;
      }
    }

    .box-link {
      margin-top: 20px;
    }
  }

  .box07-2 {
    height: 260px;
    padding-top: 14px;
  }
}

.box08 {
  background-color: #000;

  .box08-1 {
    padding-top: 46px;
    height: 650px;
    color: #fff;
    background-image: url("~/assets/images/index/box08-1-bg.webp");
    background-size: 414px;
    background-position: center bottom;
    background-repeat: no-repeat;

    h6 {
      font-size: 17px;
      font-family: "PublicSans";
      font-weight: 400;
      margin-left: -17px;
      margin-bottom: 8px;
    }

    h4 {
      font-size: 32px;
      font-weight: 700;
      margin-left: -17px;
      margin-bottom: 11px;
    }

    h5 {
      font-size: 18px;
      margin-left: -3px;

      span {
        margin-left: -3px;
        margin-right: -3px;
      }
    }

    .box-link {
      margin-top: 21px;
      margin-left: -18px;
    }
  }

  .box08-2 {
    height: 260px;
    padding-top: 14px;
  }
}

.box09 {
  background-color: #000;
  padding-top: 47px;
  color: #fff;
  height: 650px;
  background-image: url("~/assets/images/index/box09-bg.webp");
  background-size: 414px;
  background-position: center bottom;
  background-repeat: no-repeat;

  h6 {
    font-size: 17px;
    font-family: "PublicSans";
    font-weight: 400;
    margin-bottom: 9px;
  }

  h4 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 9px;
  }

  h5 {
    font-size: 18px;

    .comma {
      margin-left: -3px;
      margin-right: -3px;
    }

    .period {
      margin-left: -4px;
    }
  }

  .box-link {
    margin-top: 21px;
  }
}

.box10 {
  color: #fff;
  height: 650px;
  padding-top: 46px;
  background-color: #000;
  background-image: url("~/assets/images/index/box10-bg.webp");
  background-size: 414px;
  background-position: center bottom;
  background-repeat: no-repeat;

  h6 {
    font-size: 17px;
    font-family: "PublicSans";
    font-weight: 400;
    margin-bottom: 9px;
  }

  h4 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  h5 {
    font-size: 18px;
    margin-left: 12px;

    span {
      margin-left: -4px;
    }
  }

  .box-link {
    margin-top: 21px;
  }
}

.box11 {
  height: 750px;
  padding-top: 72px;
  background-color: #000;

  h4 {
    color: transparent;
    font-weight: 700;
    font-size: 32px;
    background-image: url("~/assets/images/index/box11-title.png");
    background-clip: text;
    margin-left: -10px;
    margin-bottom: 49px;

    span {
      margin-left: -9px;
      margin-right: -9px;
    }
  }

  .number-area {
    color: #fff;

    .number {
      font-size: 38px;
      font-family: "PublicSans";
      font-weight: 700;
      display: inline-block;
      position: relative;
    }

    .experience {
      .number {
        margin-bottom: 7px;

        sup {
          position: absolute;
          top: -5px;
          right: -11px;
          font-size: 19px;
        }
      }
    }

    .eye {
      margin-top: 47px;

      .number {
        margin-bottom: 8px;

        sup {
          position: absolute;
          top: -5px;
          right: -12px;
          font-size: 19px;
        }
      }
    }

    .visitors {
      margin-top: 47px;

      .number {
        margin-bottom: 8px;

        sup {
          position: absolute;
          top: -4px;
          right: -13px;
          font-size: 19px;
        }
      }
    }

    .team {
      margin-top: 47px;

      .number {
        margin-bottom: 8px;

        sup {
          position: absolute;
          top: -4px;
          right: -12px;
          font-size: 19px;
        }
      }
    }

    .clinic {
      margin-top: 42px;

      .number {
        margin-bottom: 6px;

        sup {
          position: absolute;
          top: -4px;
          right: -12px;
          font-size: 19px;
        }
      }
    }

    .title {
      font-size: 18px;
    }
  }
}

.box12 {
  position: relative;
  height: 650px;
  background-color: #000;
  color: #fff;
  padding-top: 74px;

  h4 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 13px;
  }

  h5 {
    font-size: 18px;
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

  // .video {
  //   backdrop-filter: blur(20px);
  //   background-color: rgba(45, 45, 45, 0.7);
  //   position: absolute;
  //   top: 0;
  //   width: 100%;
  //   height: 100%;
  //   z-index: 9;

  video {
    position: absolute;
    background-image: url("~/assets/images/index/awards-bg.webp");
    background-size: cover;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9;
  }

  // }
}

.box13 {
  height: 700px;
  padding-top: 75px;
  background-color: #000;
  color: #fff;

  h4 {
    font-size: 32px;
    margin-bottom: 10px;
    font-weight: 700;
    margin-left: 22px;

    .comma {
      margin-left: -7px;
      margin-right: -16px;
    }

    .period {
      margin-left: -9px;
    }
  }

  h5 {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 16px;

    span {
      font-family: "PublicSans";
      font-weight: 400;
    }
  }

  a {
    color: #0090d9;
    font-size: 15px;
    margin-right: 12px;

    .arrow {
      width: 6px;
      margin-left: 2px;
    }
  }

  a.last {
    margin-right: 0;
  }

  :deep(.swiper) {
    height: 502px;

    .swiper-slide {
      img {
        max-width: 380px;
        width: 100%;
      }
    }
  }
}

.box14 {
  padding-top: 70px;
  height: 665px;
  background-color: #000;
  color: #fff;

  h6 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  h4 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 0;
    margin-left: 8px;

    .comma {
      margin-left: -8px;
      margin-right: -8px;
    }

    .period {
      margin-left: -8px;
    }
  }

  h5 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 39px;
    margin-bottom: 55px;
    height: 38px;
    font-size: 18px;

    span {
      font-size: 38px;
      margin-left: 2px;
      margin-right: 15px;
      margin-top: -5px;
      position: relative;
      font-family: "PublicSans";
      font-weight: 700;

    }

    span::after {
      content: "+";
      font-weight: 700;
      position: absolute;
      font-size: 21px;
      top: -7px;
      right: -12px;
    }
  }

}

.box15 {
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

.box16 {
  height: 850px;
  background-color: #000;
  padding-top: 75px;
  color: #fff;

  h4 {
    font-size: 32px;
    font-weight: 700;
    margin-left: 24px;
    margin-bottom: 13px;

    .comma {
      margin-left: -8px;
      margin-right: -8px;
    }

    .period {
      margin-left: -8px;
    }
  }

  h5 {
    font-size: 18px;
    margin-bottom: 53px;

    span {
      font-family: "PublicSans";
      font-weight: 400;
    }
  }
}

.box17 {
  padding-top: 75px;
  height: 850px;
  background-color: #f5f5f7;

  h4 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 18px;
  }

  a {
    color: #298bff;
    font-size: 15px;
  }

  .map {
    margin-top: 49px;
  }

  .arrow {
    margin-left: 2px;
    width: 6px;
  }
}
</style>