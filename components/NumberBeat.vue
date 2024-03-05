<template>
  <div ref="numberArea" class="number-area">
    <div class="eye">
      <p class="subtitle">手術經驗</p>
      <p class="number">
        {{ box11Number.eye }}<sup>+</sup>
      </p>
      <p class="title">
        近視老花雷射/眼
      </p>
    </div>
    <div class="experience">
      <p class="number">
        {{ box11Number.experience }}<sup>+</sup>
      </p>
      <p class="title">
        眼科經驗/年
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
</template>
<script setup>
const numberArea = ref(null);
const box11Number = ref({
  experience: 0,
  eye: 0,
  visitors: 0,
  team: 0,
  clinic: 0,
});
onMounted(() => {
  let isScrollNumberArea = false;
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

  const observer = new IntersectionObserver((entries, observer) => {
    if (entries[0].isIntersecting && !isScrollNumberArea) {
      isScrollNumberArea = true;
      numberAnimation("experience", 30, 2);
      numberAnimation("eye", 220000, 14666);
      numberAnimation("visitors", 800000, 53333)
      numberAnimation("team", 400, 26)
      numberAnimation("clinic", 38, 2)
    }
  }, { threshold: 1 });
  observer.observe(numberArea.value);
});
</script>
<style scoped lang="scss">
.number-area {
  color: #fff;
  text-align: center;

  .number {
    font-size: 38px;
    font-family: "PublicSans";
    display: inline-block;
    position: relative;
  }

  .eye {
    .subtitle {
      font-size: 15px;
      margin-bottom: 6px;
    }

    .number {
      margin-bottom: 7px;

      sup {
        position: absolute;
        top: -4px;
        right: -16px;
        font-size: 22px;
      }
    }
  }



  .experience {
    margin-top: 47px;

    .number {
      margin-bottom: 8px;

      sup {
        position: absolute;
        top: -5px;
        right: -13px;
        font-size: 22px;
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
        font-size: 22px;
      }
    }
  }

  .team {
    margin-top: 47px;

    .number {
      margin-bottom: 8px;

      sup {
        position: absolute;
        top: -3px;
        right: -13px;
        font-size: 22px;
      }
    }
  }

  .clinic {
    margin-top: 41px;

    .number {
      margin-bottom: 6px;

      sup {
        position: absolute;
        top: -4px;
        right: -12px;
        font-size: 22px;
      }
    }
  }

  .title {
    font-size: 18px;
  }
}
</style>